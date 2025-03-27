import React from "react";

type ChatContentProps = {
  content: string;
  sender: string;
  fromWho: "self" | "other";
};
export const ChatContent = ({ fromWho, content, sender }: ChatContentProps) => {
  return (
    <>
      {fromWho === "self" ? (
        <span className="flex flex-col gap-2 items-end pl-20 ml:pl-30">
          <p className="p-3 text-[13px] px-5 bg-blue-600 text-white rounded-3xl">
            {content}
          </p>
        </span>
      ) : (
        <span className="flex flex-col gap-2 items-start pr-20 ml:pr-30">
          <h1 className="font-bold pl-2">{sender}</h1>
          <p className="p-3 text-[13px] px-5 bg-background dark:text-white rounded-3xl">
            {content}
          </p>
        </span>
      )}
    </>
  );
};

export default ChatContent;
