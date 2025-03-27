import ChatBox from "@/components/ChatBox";
import React from "react";

export const RoomPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] px-4">
      <ChatBox />
    </div>
  );
};

export default RoomPage;
