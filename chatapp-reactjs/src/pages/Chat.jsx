import React from "react";

const Chat = () => {
  return (
    <div className="bg-red-200">
      <ul></ul>
      <form className="absolute bottom-0 left-0 p-2 bg-gray-300 w-full flex">
        <input type="text" name="message" id="message" className="p-2 flex-1" />
        <button
          type="submit"
          className="p-2 mx-2 bg-green-500 hover:bg-green-400 rounded-sm font-bold text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
