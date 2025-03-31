import { groupByDate } from "@/lib/utils";
import React from "react";
import { ChatLogDialog } from "./ChatLogDialog";

export const ChatLogsArea = async () => {
  const res = await fetch("http://localhost:8080/api/chats", {});
  const data = await res.json();
  const groupedMessages = groupByDate(data);

  return (
    <div className="flex flex-col gap-3 w-full h-[500px] ml:h-[77vh] bg-card rounded-2xl overflow-auto">
      {Object.keys(groupedMessages).map((dateData) => (
        <div
          key={dateData}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-row items-center gap-2 mb-2 opacity-30">
            <hr className="flex-1 border-0 border-b-1" />
            <h1 className="text-[12px]">{dateData}</h1>
            <hr className="flex-1 border-0 border-b-1" />
          </div>

          {groupedMessages[dateData].map((messages, idx) => (
            <div
              className="last:mb-4"
              key={idx}
            >
              <ChatLogDialog message={messages} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatLogsArea;
