"use client";

import { Client, IMessage } from "@stomp/stompjs";
import { useEffect, useState } from "react";
import { Message, WebSocketContext } from "../contexts/WebSocketContext";

export const WebSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [username, setUsername] = useState("");
  const [client, setClient] = useState<Client | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    console.log("Attempting to connect with username:", username);
    const socket = new WebSocket("ws://localhost:8080/ws/websocket");

    socket.onopen = () => console.log("WebSocket connection established");
    socket.onclose = (event) => console.log("WebSocket closed:", event);
    socket.onerror = (error) => console.error("WebSocket error:", error);

    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log("STOMP connection established");
        stompClient.subscribe("/topic/public", onMessageReceived);
        setClient(stompClient);
        if (username) addUser();
      },
      onDisconnect: () => {
        console.log("STOMP disconnected");
      },
      onWebSocketError: (error) => {
        console.log("WebSocket error in STOMP:", error);
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    stompClient.activate();

    return () => {
      if (stompClient.active) {
        stompClient.deactivate().then(() => {
          console.log("Client deactivated");
        });
      }
    };
  }, []);

  const onMessageReceived = (payload: IMessage) => {
    const message = JSON.parse(payload.body);
    setMessages((prev) => [...prev, message]);
  };

  const addUser = () => {
    if (client && client.connected) {
      const chatMessage = {
        sender: username,
        type: "CHAT",
      };

      client.publish({
        destination: "/app/chat.addUser",
        body: JSON.stringify(chatMessage),
      });
    }
  };
  const sendMessage = (message: string) => {
    if (client && client.connected && username && message) {
      const chatMessage = {
        sender: username,
        content: message,
        type: "CHAT",
      };

      client.publish({
        destination: "/app/chat.sendMessage",
        body: JSON.stringify(chatMessage),
      });
    }
  };

  return (
    <WebSocketContext.Provider
      value={{ client, messages, sendMessage, setUsername, username }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};
