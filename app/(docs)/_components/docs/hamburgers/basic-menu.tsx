"use client";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "@/lib/exports";
import { MenuLeft, MenuRight } from "../../../../../components/ui/icons";
import { motion, useReducedMotion } from "framer-motion";

const menuNavigationLinks = [
  { href: "/", text: "Homeward Bound" },
  { href: "/", text: "Doc's Orders" },
  { href: "/", text: " Big Reveal" },
  { href: "/", text: "Got You Covered" },
  { href: "/", text: "News & Brews ☕️" },
  { href: "/", text: "Let's Chat! " },
  { href: "/", text: "Showtime! ✨" },
  { href: "/", text: "Meet Masterminds " },
];

export default function BasicMenu() {
  const isMotionReduced = useReducedMotion();
  return (
    <Sheet>
      <SheetTrigger>
        <MenuLeft />
      </SheetTrigger>
      <SheetContent className="w-full" side={"right"}>
        <Link href="/">
          <h1 className="text-lg inline-flex justify-center items-center gap-2 font-normal text-gray-800 dark:text-gray-200">
            {" "}
            <span className="inline-flex justify-center items-center font-bold rounded-lg py-0.5 px-2 text-gray-100 dark:text-gray-800  bg-black dark:bg-white ">
              UI
            </span>
            Basic Menu
          </h1>
        </Link>
        <motion.div
          className="mt-12 flex w-full flex-col items-start gap-y-4"
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.03,
          }}
        >
          <div className="flex flex-col gap-2 mt-10">
            {menuNavigationLinks.map(({ href, text }) => (
              <motion.div
                key={href}
                variants={{
                  initial: {
                    opacity: 0,
                    x: isMotionReduced ? 0 : 100,
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "backInOut",
                    },
                  },
                }}
              >
                <Link
                  key={href}
                  className="text-lg font-semibold text-foreground hover:text-foreground/80"
                  href={href}
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
