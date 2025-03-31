import ChatLogsArea from "@/components/ChatLogsArea";
import ChatLogsLoading from "@/components/ChatLogsLoading";
import React, { Suspense } from "react";

export const experimental_ppr = true;

export const ChatsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] px-4">
      <section className="flex flex-col gap-3 items-start max-w-[500px] h-[600px] ml:h-[80vh] w-full bg-card justify-start shadow-lg rounded-md py-5 px-4 ml:px-5 ml:py-6 -mt-20 ">
        <h1 className="text-[18px] pl-2">History</h1>
        <Suspense fallback={<ChatLogsLoading />}>
          <ChatLogsArea />
        </Suspense>
      </section>
    </div>
  );
};

export default ChatsPage;
