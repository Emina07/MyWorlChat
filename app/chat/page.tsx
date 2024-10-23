import { Metadata } from "next";
import { ChatInterface } from "@/components/chat/chat-interface";
import { ChatSidebar } from "@/components/chat/chat-sidebar";

export const metadata: Metadata = {
  title: "Chat - WorldChat",
  description: "Connect and chat with people around the world",
};

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatInterface />
    </div>
  );
}