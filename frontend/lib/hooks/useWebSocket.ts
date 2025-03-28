import { WebSocketContext } from "@/components/contexts/WebSocketContext";
import { useContext } from "react";

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return context;
};

export default useWebSocket;
