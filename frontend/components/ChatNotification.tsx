import React from "react";

export const ChatNotification = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center py-1 items-center text-gray-400  text-xs w-full">
      <span>{text}</span>
    </div>
  );
};

export default ChatNotification;
