import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import { Contacts } from "./Contacts";
import { Conversations } from "./Conversations";
import { NewContactModal } from "./NewContactModal";
import { NewConversationModal } from "./NewConversationModal";
const CONVESATIONS_KEY = "conversation";
const CONTACTS_KEY = "contacts";

export const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVESATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationOpen = activeKey === CONVESATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center ">
          <Nav.Item>
            <Nav.Link eventKey={CONVESATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVESATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0" onClick={() => setModalOpen(true)}>
          New {conversationOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};
