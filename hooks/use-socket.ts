"use client";

import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { useSession } from "next-auth/react";

export function useSocket() {
  const { data: session } = useSession();
  const socket = useRef<Socket>();

  useEffect(() => {
    if (!socket.current && session?.user) {
      socket.current = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL || "", {
        auth: {
          userId: session.user.id,
        },
      });

      socket.current.on("connect", () => {
        console.log("Connected to WebSocket server");
      });

      socket.current.on("connect_error", (error) => {
        console.error("WebSocket connection error:", error);
      });
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [session]);

  return socket.current;
}