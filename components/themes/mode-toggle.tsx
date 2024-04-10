"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useState } from "react";

export function SwitchDemo() {
  const { setTheme } = useTheme();
  const [mode, toggleMode] = useState<boolean>(true);
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        onClick={() => {
          if (mode == true) {
            toggleMode(false);
            setTheme("dark");
          } else {
            toggleMode(true);
            setTheme("light");
          }
        }}
      />
    </div>
  );
}
