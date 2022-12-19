import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import Message from "./Message";

function ChatRoom() {
  const messages = useStoreState((state) => state.msgs);
  const addMsgs = useStoreActions((state) => state.addMsgs);

  useEffect(() => {
    const getMsgs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/messages");
        addMsgs(data);
      } catch (error) {
        alert(error.message + " - try to refresh the page");
      }
    };
    getMsgs();
  }, []);

  if (messages.length === 0) {
    return (
      <div className="grid flex-1 place-items-center text-center">
        <span className="">No Messages yet</span>
      </div>
    );
  } else {
    return (
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <Message key={message?._id || index} message={message} />
        ))}
      </div>
    );
  }
}

export default ChatRoom;
