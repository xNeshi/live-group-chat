import React from "react";
import ChatLogsSkeleton from "./ChatLogsSkeleton";

export const ChatLogsLoading = () => {
  return (
    <div className="flex-col gap-3">
      {"abcdef".split("").map((i) => (
        <ChatLogsSkeleton key={i} />
      ))}
    </div>
  );
};

export default ChatLogsLoading;
