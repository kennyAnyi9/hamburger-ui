"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

interface NavigationLink {
  href: string;
  text: string;
}
/* start by raplacing these with your menu items and links */
const menuNavigationLinks: NavigationLink[] = [
  { href: "/", text: "Homeward Bound" },
  { href: "/docs", text: "Doc's Orders" },
  { href: "/about", text: "The Big Reveal" },
  { href: "/services", text: "We Got You Covered" },
  { href: "/blog", text: "Fresh News & Brews ☕️" },
  { href: "/contact", text: "Let's Chat! " },
  { href: "/portfolio", text: "Showtime! ✨" },
  { href: "/team", text: "Meet the Masterminds " },
  // ... other links
];

export default function BasicMenu() {
  const isMotionReduced = useReducedMotion();
  return (
    <Sheet>
      <SheetTrigger>
        <MenuJustified />
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

const MenuJustified = ({ className, ...rest }: any) => {
  return (
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
      className={className}
      {...rest}
    >
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
};
