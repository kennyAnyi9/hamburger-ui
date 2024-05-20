import { BasicMenu, DropDown, Version } from "@/lib/exports";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { docsConfig } from "@/lib/docs";
import CanvasMenuRight from "@/app/(docs)/_components/hamburgers/canvas-menu-right";
import CanvasMenuLeft from "@/app/(docs)/_components/hamburgers/canvas-menu-left";
import DropDownMenu from "@/app/(docs)/_components/hamburgers/drop-down-menu";
import Search from "../landing/search";

export default function MobileNavbar() {
  return (
    <header className="lg:hidden border-b h-16 flex justify-between gap-2 items-center px-5">
      <section className="">
        {/* <DropDown items={docsConfig.sidebarNav} /> */}
        <BasicMenu />
        {/* <DropDownMenu /> */}
      </section>
      <section className="w-full flex justify-center items-center my-auto">
        <Search />
      </section>
      <section>
        <Badge variant="destructive">beta</Badge>
      </section>
    </header>
  );
}
