"use client";

import React, { FC } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      onClick={handleThemeToggle}
      variant={"secondary"}
      asChild
      className="p-2 rounded-full bg-background hover:bg-accent select-none"
    >
      {theme !== "dark" ? (
        <div className="flex items-center">
          <Sun className="size-5" />
          <span className="text-[16px]">Light Mode</span>
        </div>
      ) : (
        <div className="flex items-center">
          <Moon className="size-5" />
          <span className="text-[16px]">Dark Mode</span>
        </div>
      )}
    </Button>
  );
};

export default ThemeToggle;
