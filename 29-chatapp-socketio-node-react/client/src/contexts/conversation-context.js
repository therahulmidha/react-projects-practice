import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useContacts } from "./contact-context";
import { useSocket } from "./socket-context";

const ConversationContext = React.createContext();

export function useConversation() {
  return useContext(ConversationContext);
}

export const ConversationProvider = (props) => {
  const [conversations, setConversation] = useLocalStorage("conversation", []);
  const { contacts } = useContacts();
  const [selectConversationIndex, setSelectConversationIndex] = useState(0);
  const socket = useSocket();
console.log('socket', socket);
  function createConversation(recipients) {
    setConversation((prevConversation) => {
      return [...prevConversation, { recipients, messages: [] }];
    });
  }

  // format conversations to have name also
  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((con) => {
        return con.id === recipient;
      });
      const name = contact?.name || recipient;
      return { id: recipient, name };
    });

    // format messages with name and boolean to know if it was sent by me
    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((con) => {
        return con.id === message.sender;
      });
      const name = contact?.name || message.sender;
      const fromMe = props.id === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });

  const addMessageToConversation = useCallback(
    ({ recipients, text, sender }) => {
      setConversation((prevConversations) => {
        let madeChange = false;
        const newMessage = { sender, text };
        const newConversations = prevConversations.map((conversation) => {
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true;
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            };
          }
          return conversation;
        });
        if (madeChange) {
          return newConversations;
        } else {
          return [...prevConversations, { recipients, messages: [newMessage] }];
        }
      });
    },
    [setConversation]
  );

  useEffect(() => {
    if (socket === null) return;

    socket.on("receive-message", addMessageToConversation);

    return () => socket.off("receive-message");
  }, [socket, addMessageToConversation]);

  function sendMessage(recipients, text) {
    socket.emit("send-message", { recipients, text });
    addMessageToConversation({ recipients, text, sender: props.id });
  }

  const value = {
    conversations: formattedConversations,
    createConversation,
    selectConversationIndex: setSelectConversationIndex,
    selectedConversation: formattedConversations[selectConversationIndex],
    sendMessage,
  };

  return (
    <ConversationContext.Provider value={value}>
      {props.children}
    </ConversationContext.Provider>
  );
};

function arrayEquality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  arr1.sort();
  arr2.sort();

  return arr1.every((element, index) => {
    return element === arr2[index];
  });
}
