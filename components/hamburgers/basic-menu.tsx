"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "@/lib/exports";
import { MenuRight } from "../ui/icons";

const menuNavigationLinks = [
  {
    href: `/`,
    text: "Home",
  },
  {
    href: `/docs`,
    text: "Docs",
  },
  {
    href: `/docs`,
    text: "about",
  },
  {
    href: `/docs`,
    text: "services",
  },
];

export default function BasicMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuRight />
      </SheetTrigger>
      <SheetContent className="w-full" side={"right"}>
        <Link href="/">
          <h1 className="text-lg inline-flex justify-center items-center gap-2 font-normal text-gray-800 dark:text-gray-200">
            {" "}
            <span className="inline-flex justify-center items-center font-bold rounded-lg py-0.5 px-2 text-gray-100 dark:text-gray-800  bg-black dark:bg-white ">
              UI
            </span>
            Hamburger
          </h1>
        </Link>

        <div className="flex flex-col gap-2 mt-10">
          {menuNavigationLinks.map(({ href, text }) => (
            <Link
              key={href}
              className="text-xl font-semibold text-foreground hover:text-foreground/80"
              href={href}
            >
              {text}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
