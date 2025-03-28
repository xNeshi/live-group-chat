"use client";
import React from "react";
import ChatMessageForm from "./ChatMessageForm";
import ChatContent from "./ChatContent";
import { useWebSocket } from "@/lib/hooks/useWebSocket";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ChatNotification from "./ChatNotification";

export const ChatBox = () => {
  const { messages, username } = useWebSocket();
  console.log(messages);
  return (
    <section className="relative flex flex-col gap-3 items-start max-w-[500px] h-[500px] ml:h-[600px] w-full bg-card justify-start shadow-lg rounded-md py-5 px-4 ml:px-5 ml:py-6 -mt-20 ">
      <h1 className="text-[18px] pl-2">Live Chat Room</h1>
      <div className="flex flex-col gap-3 w-full h-[460px] bg-card rounded-2xl overflow-auto">
        {messages.map((message, idx) => {
          if (message.type === "JOIN") {
            return (
              <ChatNotification
                key={idx}
                text={`${message.sender} joined the chat`}
              />
            );
          } else if (message.type === "LEAVE") {
            return (
              <ChatNotification
                key={idx}
                text={`${message.sender} left the chat`}
              />
            );
          } else {
            return (
              <ChatContent
                key={idx}
                content={message.content}
                sender={message.sender}
                fromWho={message.sender === username ? "self" : "other"}
              />
            );
          }
        })}
      </div>
      {username ? (
        <ChatMessageForm />
      ) : (
        <div className="absolute bottom-5 right-0 py-3 pt-4 px-5 bg-card flex w-full items-center justify-center gap-2">
          <Link href="/">
            <ArrowLeft className="p-1 size-6 ml:size-[26px] border-1 rounded-full active:scale-90" />
          </Link>
          <p className="text-[10px] mm:text-[12px] ml:text-[14px] text-center">
            Username is needed to join the chat room
          </p>
        </div>
      )}
    </section>
  );
};

export default ChatBox;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nemo nostrum exercitationem mollitia corporis corrupti, provident necessitatibus aliquid expedita suscipit. Delectus soluta magni dolorem quo beatae quisquam adipisci asperiores aperiam.
