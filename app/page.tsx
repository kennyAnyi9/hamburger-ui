import { SwitchDemo } from "@/components/themes/mode-toggle";
import { ModeToggle } from "@/components/themes/theme-toggle";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SwitchDemo />
      <h1 className="font-semibold text-opacity-50 text-6xl text-transparent bg-clip-text bg-gradient-to-t from-gray-950 to-gray-500">
        Humburger UI
      </h1>
    </main>
  );
}
