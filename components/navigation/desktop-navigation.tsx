import React from "react";
import { Badge } from "../ui/badge";
import { BasicMenu, MobileNavbar, ModeToggle, Version } from "@/lib/exports";
import { CalendarDays, ExternalLink } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import Search from "../landing/search";

export default function DesktopNavigation() {
  return (
    <header className="hidden border-b h-16 lg:flex justify-between items-center px-8 fixed bg-transparent backdrop-blur-2xl z-20 w-screen">
      <section className="inline-flex gap-3">
        <div className="inline-flex my-auto font-bold gap-2 ">
          <Link href="/">
            <h1 className="text-lg inline-flex justify-center items-center gap-2 font-normal text-gray-800 dark:text-gray-200">
              {" "}
              <span className="inline-flex justify-center items-center font-bold rounded-lg py-0.5 px-2 text-gray-100 dark:text-gray-800  bg-black dark:bg-white ">
                UI
              </span>
              Hamburger
            </h1>
          </Link>
        </div>

        <div className="inline-flex gap-5 my-auto  ">
          <Badge variant="destructive" className="mr-10">
            beta
          </Badge>
          <Link href="/hamburgers" className="text-sm text-muted-foreground">
            Hamburgers
          </Link>
          <Link href="/icons" className="text-sm text-muted-foreground">
            Icons
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-muted-foreground inline-flex gap-1"
          >
            Twitter
            <ExternalLink className="size-4" />
          </Link>{" "}
          <Link
            href="/dashboard"
            className="text-sm text-muted-foreground inline-flex gap-1"
          >
            Discord
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </section>
      <section className="flex justify-center items-center my-auto">
        <Search />
        <ModeToggle />
      </section>
    </header>
  );
}
