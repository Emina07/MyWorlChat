"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ChatHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-b p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">WorldChat</h1>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
    </div>
  );
}