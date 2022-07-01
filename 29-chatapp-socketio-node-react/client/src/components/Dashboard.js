import React from "react";
import { useConversation } from "../contexts/conversation-context";
import { OpenConversation } from "./OpenConversation";
import { Sidebar } from "./Sidebar";

export const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversation();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};
