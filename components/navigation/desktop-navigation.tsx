import React from "react";
import { Badge } from "../ui/badge";
import { Version } from "@/lib/exports";
import { CalendarDays, ExternalLink } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function DesktopNavigation() {
  return (
    <header className="hidden border-b h-16 lg:flex justify-between items-center px-24 ">
      <section className="inline-flex gap-3">
        <div className="my-auto ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="14" height="6" x="5" y="12" rx="2" />
            <rect width="10" height="6" x="7" y="2" rx="2" />
            <path d="M2 22h20" />
          </svg>
        </div>
        <Version />
        <div className="inline-flex gap-3 my-auto text-sm">
          <Link href="/dashboard">Docs</Link>
          <Link href="/dashboard">Components</Link>
        </div>
      </section>
      <section>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">Github</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>
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
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Proundly Open Source</h4>
                <p className="text-sm">
                  The codes for this library can be found on github
                </p>
                <div className="flex items-center pt-2">
                  <ExternalLink className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <Link href="" className="text-xs text-muted-foreground">
                    Drop a star on github
                  </Link>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Badge variant="destructive">beta</Badge>
      </section>
    </header>
  );
}
