"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { ModeTheme } from "@/enums/theme";

type ThemeToggleProps = React.ComponentProps<typeof Button>;

export function ThemeToggle(props: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const isDarkTheme = theme === ModeTheme.DARK;

  const toggleTheme = () => {
    setTheme(isDarkTheme ? ModeTheme.LIGHT : ModeTheme.DARK);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} {...props}>
      <div className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-accent-foreground">
        <LuSunMedium />
      </div>
      <div className="absolute rotate-90 scale-0 ease-in dark:rotate-0 dark:scale-100">
        <FaRegMoon />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
