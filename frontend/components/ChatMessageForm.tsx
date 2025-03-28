"use client";

import React, { useEffect, useRef, useState } from "react";
import { useWebSocket } from "@/lib/hooks/useWebSocket";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export const ChatMessageForm = () => {
  const { sendMessage } = useWebSocket();
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() === "") return;
    sendMessage(message.trim());
    setMessage("");
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset to auto height

      const maxHeight = 5 * 24; // 5 lines * 24px line height
      const scrollHeight = textareaRef.current.scrollHeight;

      if (scrollHeight <= maxHeight) {
        textareaRef.current.style.height = `${scrollHeight}px`; // Expand naturally
        textareaRef.current.style.overflowY = "hidden"; // Hide scrollbar
      } else {
        textareaRef.current.style.height = `${maxHeight}px`; // Cap height
        textareaRef.current.style.overflowY = "auto"; // Enable scrollbar
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full items-end"
    >
      <textarea
        ref={textareaRef}
        value={message}
        onChange={handleInput}
        name="message"
        id="message"
        placeholder="Type a message..."
        rows={1}
        className="flex-1 block m-0 px-4 py-2 h-fit text-[14px] bg-background rounded-md shadow-md resize-none"
        style={{ lineHeight: "24px", maxHeight: "120px" }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();
          }
        }}
      ></textarea>
      <Button
        type="submit"
        size={"icon"}
        variant={"ghost"}
        className="size-6 mb-2 mr-2"
        asChild
      >
        <Send />
      </Button>
    </form>
  );
};

export default ChatMessageForm;
