import React from "react";
import ChatLogs, { ChatLogsProps } from "./ChatLogs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDate, getAvatarColor } from "@/lib/utils";

export const ChatLogDialog = ({ message }: { message: ChatLogsProps }) => {
  const { sender, content, createdAt } = message;
  const formattedDate = formatDate(createdAt);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ChatLogs {...message} />
      </DialogTrigger>
      <DialogContent className="ml:max-w-[400px] border-0 max-h-[75vh] overflow-y-auto">
        <DialogHeader className="hidden">
          <DialogTitle>Chat Logs</DialogTitle>
          <DialogDescription>
            {sender} - {formattedDate}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-start pr-10 ml:pr-20">
            <div
              style={{ backgroundColor: getAvatarColor(sender) }}
              className="flex justify-center items-center mt-5 min-h-10 min-w-10 text-white text-[20px] rounded-full"
            >
              {sender.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-[15px] pl-2">{sender}</h1>

              <p
                style={{ overflowWrap: "anywhere" }}
                className="p-2 break-words text-[13px] px-4 bg-card dark:text-white rounded-3xl"
              >
                {content}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-row w-full items-center justify-end">
          <p className="text-[10px] opacity-50 italic mr-2">{formattedDate}</p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatLogDialog;
