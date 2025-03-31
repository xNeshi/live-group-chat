import React from "react";
import { Skeleton } from "./ui/skeleton";

export const ChatLogsSkeleton = () => {
  return (
    <div className="flex flex-col px-4 py-4 w-full rounded-lg">
      <div className="flex flex-row gap-3 items-start">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="flex flex-row w-full items-center justify-start">
            <Skeleton className="h-4 w-[50px] rounded-full" />
          </div>
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ChatLogsSkeleton;
