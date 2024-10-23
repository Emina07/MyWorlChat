"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatSidebar() {
  const { data: session } = useSession();

  return (
    <div className="w-64 border-r h-screen flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2 mb-4">
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>
              {session?.user?.name?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{session?.user?.name}</p>
            <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
          </div>
        </div>
        <Button variant="outline" className="w-full" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          <h2 className="font-semibold mb-2">Online Users</h2>
          {/* User list will be added here */}
        </div>
      </ScrollArea>
    </div>
  );
}