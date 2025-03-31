import React from "react";
import { Message } from "./contexts/WebSocketContext";
import { formatDateTime, getAvatarColor } from "@/lib/utils";

export type ChatLogsProps = Omit<Message, "type"> & {
  createdAt: string;
};

export const ChatLogs = ({ sender, content, createdAt }: ChatLogsProps) => {
  const formattedDate = formatDateTime(createdAt);

  return (
    <div className="flex flex-col  cursor-pointer hover:bg-background/60 active:scale-98 px-4 py-4 bg-background shadow-2xs w-full rounded-lg">
      <div className="flex flex-row gap-3 items-start">
        <div
          style={{ backgroundColor: getAvatarColor(sender) }}
          className="flex justify-center items-center min-h-10 min-w-10 text-white text-[20px] rounded-full"
        >
          {sender.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-row w-full items-center justify-between">
            <h1 className="text-[15px]">{sender}</h1>
            <p className="text-[10px] opacity-50 italic mr-2">
              {formattedDate}
            </p>
          </div>
          <p className="text-[12px] opacity-50 line-clamp-2">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatLogs;
