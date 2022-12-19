import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useState } from "react";

const SubmitMessage = () => {
  const [currMsg, setCurrMsg] = useState({ text: "" });
  const { user } = useStoreState((state) => state);
  const { submiteMsg, popLastMsg, updateMsgSended } = useStoreActions(
    (actions) => actions
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currMsg.text === "") return;
    const message = { text: currMsg.text, user };

    submiteMsg(message);
    setCurrMsg({ text: "" });

    axios
      .post("http://localhost:8080/api/messages", message)
      .then(({ data }) => {
        const { _id, createdAt } = data;
        popLastMsg();
        updateMsgSended({ ...message, _id, createdAt });
      })
      .catch((err) => {
        popLastMsg();
        setCurrMsg(message);
        alert(err.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-t border-gray-500 pt-2"
    >
      <input
        className="shadow appearance-none border rounded w-full p-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="msg"
        id="msg"
        placeholder="your message"
        value={currMsg.text}
        onChange={(e) => setCurrMsg({ ...currMsg, text: e.target.value })}
      />
      <button
        disabled={currMsg.message === ""}
        className="p-2 bg-green-400 text-white disabled:cursor-not-allowed disabled:bg-red-500 rounded-md hover:bg-gray-700 px-8 duration-500"
      >
        Send
      </button>
    </form>
  );
};

export default SubmitMessage;
