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
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="-mt-2">
          <Link href="/">
            <h1 className="text-lg inline-flex justify-center items-center gap-2 font-normal text-gray-800 dark:text-gray-200">
              {" "}
              <span className="inline-flex justify-center items-center font-bold rounded-lg py-0.5 px-2 text-gray-100 dark:text-gray-800  bg-black dark:bg-white ">
                UI
              </span>
              Hamburger
            </h1>
          </Link>
        </SheetHeader>
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
        {/* <SheetFooter className="self-end">
          {" "}
          <div className="w-fit">
            <ModeToggle />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eight Labs. All rights reserved.
          </p>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
