import React from "react";
import ChatRoom from "./ChatRoom";
import SubmitMessage from "./SubmitMessage";

const Chat = () => {
  return (
    <div className="bg-gray-200 h-screen md:w-1/3 flex flex-col p-4">
      <ChatRoom />
      <SubmitMessage />
    </div>
  );
};

export default Chat;
