"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useSocket } from "@/hooks/use-socket";
import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";

interface Message {
  id: string;
  content: string;
  userId: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
    image: string;
  };
}

export function ChatInterface() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("message", (message: Message) => {
        setMessages((prev) => [...prev, message]);
      });
    }
  }, [socket]);

  const sendMessage = async (content: string) => {
    if (!session?.user || !socket) return;

    socket.emit("message", {
      content,
      userId: session.user.id,
    });
  };

  return (
    <div className="flex flex-col flex-1 h-screen">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
}