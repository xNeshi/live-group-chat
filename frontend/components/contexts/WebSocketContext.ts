import { Client } from "@stomp/stompjs";
import { createContext } from "react";

export interface Message {
  sender: string;
  content: string;
  type: "CHAT" | "JOIN" | "LEAVE";
}

export interface WebSocketContextType {
  client: Client | null;
  messages: Message[];
  sendMessage: (message: string) => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  username: String;
}

export const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);
