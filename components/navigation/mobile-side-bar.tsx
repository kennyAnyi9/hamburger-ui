"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { DocsSidebarNavItems } from "@/app/(docs)/_components/docs/side-bar";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function DropDown({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
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
            className="my-auto"
          >
            <path d="M21 4H3" />
            <path d="M18 8H6" />
            <path d="M19 12H9" />
            <path d="M16 16h-6" />
            <path d="M11 20H9" />
          </svg>
        </SheetTrigger>
        <SheetContent side={SHEET_SIDES[3]} className="flex flex-col gap-5">
          <SheetHeader>
            <div className=" inline-flex gap-3"></div>
          </SheetHeader>
          {items.length ? (
            <div className="w-full">
              {items.map((item, index) => (
                <div key={index} className={cn("pb-4")}>
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                    {item.title}
                  </h4>
                  {item?.items?.length && (
                    <DocsSidebarNavItems
                      items={item.items}
                      pathname={pathname}
                    />
                  )}
                </div>
              ))}
            </div>
          ) : null}
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
