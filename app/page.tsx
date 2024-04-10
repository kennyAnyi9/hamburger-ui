import { SwitchDemo } from "@/components/themes/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  gap-5 p-24">
      <SwitchDemo />
      <h1 className="font-semibold text-opacity-50 text-3xl text-center md:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-gray-950 to-gray-500">
        Humburger UI
      </h1>
      <p className="max-w-4xl text-center hero_description">
        A collection of pre-built, responsive mobile dropdown menus designed
        specifically for Next.js projects. Simply copy and paste the code to
        enhance your app's navigation.
      </p>
      <Link
        href="#"
        // className="flex justify-center items-center p-[3px] bg-gray-200 rounded-xl"
      >
        <Button
          variant="default"
          className="button_class_default inline-flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
          Get Started
        </Button>
      </Link>
    </main>
  );
}
