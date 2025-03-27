"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button
        className="p-2 rounded-full bg-background hover:bg-accent select-none"
        disabled
      />
    );

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={handleThemeToggle}
      variant="secondary"
      className="p-2 rounded-full bg-background hover:bg-accent select-none flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Moon className="size-5" />
          <span className="text-[16px]">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="size-5" />
          <span className="text-[16px]">Light Mode</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
