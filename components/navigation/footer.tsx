import { ModeToggle } from "@/lib/exports";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="mx-4 flex items-center justify-between py-10 sm:container md:h-24 md:py-0 border-t thin-border mt-10">
        <div className="flex items-center gap-4 px-8 md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by the{" "}
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              UI7
            </Link>{" "}
            Community
          </p>
        </div>

        <ModeToggle />
      </div>
    </footer>
  );
}
