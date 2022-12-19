import React, { useEffect, useRef } from "react";
import { format } from "date-fns";

const Message = ({ message }) => {
  const messageRef = useRef();

  useEffect(() => messageRef.current.scrollIntoView());
  return (
    <div className="bg-gray-100 rounded-r-md p-2 my-2 flex " ref={messageRef}>
      <div className="w-[50px] h-[50px] rounded-full mr-2 bg-gray-400"></div>
      <div className="flex-1">
        <h4 className="mb-1">{message.user.name}</h4>
        <p className=" text-gray-800">
          {message.text}
          <span className="text-xs block">
            {message?._id
              ? format(new Date(message.createdAt), "MM/dd/yyyy")
              : null}
          </span>
        </p>
      </div>
      <div className="self-end">
        {message?._id ? (
          <span className="fa fa-check-double text-blue-300 text-xs"></span>
        ) : (
          <span className="fa fa-clock text-orange-300 text-xs animate-spin"></span>
        )}
      </div>
    </div>
  );
};

export default Message;
