import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Introduction() {
  return (
    <>
      <div className="space-y-2">
        <h1 className={cn("scroll-m-20 text-4xl font-semibold tracking-tight")}>
          Introduction
        </h1>
        <p className="p_text">
          struggling to create user-friendly navigation? This curated collection
          of responsive mobile navigation menus is here to help! Simply copy and
          paste the code to effortlessly build smooth and intuitive navigation
          for your apps.
        </p>

        <p className="p_text">
          All you need to do follow the{" "}
          <Link href="#" className="underline">
            installation
          </Link>{" "}
          guide and start browsing the components
        </p>
        <p className="p_text">
          we assume that you have already isntalled and configured Next.js.
          However if you haven't and need to install, kindly start with step 1
          but checkout checkout the{" "}
          <Link href="#" className="underline">
            docs
          </Link>{" "}
          for complete installation guidelines
        </p>
      </div>
    </>
  );
}
