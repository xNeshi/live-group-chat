import { getAvatarColor } from "@/lib/utils";
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
        <span className="flex flex-col gap-2 py-1 items-end pl-20 ml:pl-30">
          <p className="p-2 text-[13px] px-4 bg-blue-600 text-white rounded-3xl">
            {content}
          </p>
        </span>
      ) : (
        <span className="flex flex-row gap-2 py-2 items-start pr-20 ml:pr-30">
          <div
            style={{ backgroundColor: getAvatarColor(sender) }}
            className="flex justify-center items-center mt-5 size-10 text-white text-[20px] rounded-full"
          >
            {sender.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="font-bold pl-2 text-[15px]">{sender}</h1>
            <p className="p-2 text-[13px] px-4 bg-background dark:text-white rounded-3xl">
              {content}
            </p>
          </div>
        </span>
      )}
    </>
  );
};

export default ChatContent;
