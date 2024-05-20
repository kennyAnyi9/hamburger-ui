"use client";
import React, { SVGAttributes, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the type for a navigation link
interface NavigationLink {
  href: string;
  text: string;
}

// Define the type for the hamburger menu props
interface HamburgerMenuProps {
  isMenuOpen: boolean;
  onToggleMenuOpen: () => void;
}

/* start by raplacing these with your menu items and links */
const menuNavigationLinks: NavigationLink[] = [
  { href: "/dashboard", text: "Homeward Bound" },
  { href: "/", text: "Doc's Orders" },
  { href: "#", text: "The Big Reveal" },
  { href: "#", text: "We Got You Covered" },
  { href: "#", text: "Fresh News & Brews ☕️" },
  { href: "#", text: "Let's Chat! " },
  { href: "#", text: "Showtime! ✨" },
  { href: "#", text: "Meet the Masterminds " },
  // ... other links
];

// Define the HamburgerMenu component
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  onToggleMenuOpen,
}) => {
  const isMotionReduced = useReducedMotion();

  const handleLinkClick = () => {
    onToggleMenuOpen();
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={onToggleMenuOpen}>
      <SheetContent className="" side={"right"}>
        <Link href="/" onClick={handleLinkClick}>
          <h1 className="text-lg inline-flex justify-center items-center gap-2 font-normal text-gray-800 dark:text-gray-200">
            {" "}
            <span className="inline-flex justify-center items-center font-bold rounded-lg py-0.5 px-2 text-gray-100 dark:text-gray-800  bg-black dark:bg-white">
              UI
            </span>
            Menu
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
                  onClick={() => handleLinkClick()}

                  // target={target}
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
};

// Define the Hamburger component
const Hamburger: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  onToggleMenuOpen,
}) => {
  return (
    <div className="flex lg:hidden">
      <Button
        variant="outline"
        className="z-20 w-10 border-transparent p-0"
        onClick={onToggleMenuOpen}
      >
        {isMenuOpen ? null : <PanelLeftClose />}
      </Button>
    </div>
  );
};
// Define the MenuIcon component
const PanelLeftClose: React.FC = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m10 15-3-3 3-3" />
    </svg>
  );
};

// Define the BasicMenu component
const RightSideBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <Hamburger
        isMenuOpen={isMenuOpen}
        onToggleMenuOpen={handleToggleMenuOpen}
      />
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        onToggleMenuOpen={handleToggleMenuOpen}
      />
    </>
  );
};

export default RightSideBar;
