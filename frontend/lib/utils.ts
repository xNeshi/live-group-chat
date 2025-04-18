import { ChatLogsProps } from "@/components/ChatLogs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const colors = [
  "#2196F3",
  "#32c787",
  "#00BCD4",
  "#ff5652",
  "#ffc107",
  "#ff85af",
  "#FF9800",
  "#39bbb0",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAvatarColor(messageSender: String) {
  let hash = 0;
  for (let i = 0; i < messageSender.length; i++) {
    hash = 31 * hash + messageSender.charCodeAt(i);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
}

export function formatDate(isoString: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
}

export function formatDateTime(isoString: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
}

export function formatDateMonthYear(isoString: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoString));
}

export function groupByDate(messages: ChatLogsProps[]) {
  return messages.reduce(
    (acc: Record<string, ChatLogsProps[]>, message: ChatLogsProps) => {
      const dateKey = formatDateMonthYear(message.createdAt);

      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }

      acc[dateKey].push(message);
      return acc;
    },
    {}
  );
}
