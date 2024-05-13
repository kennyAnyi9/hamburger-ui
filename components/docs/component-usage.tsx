import { CodePreviewSwitcher } from "@/lib/exports";
import { cn } from "@/lib/utils";
import React from "react";

export default function Usage() {
  return (
    <>
      {" "}
      <div className="space-y-2">
        <h1 className={cn("scroll-m-20 text-4xl font-semibold tracking-tight")}>
          Basic Menu
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-300">
          A basic menu component that can be used as a side menu or as a
          dropdown.
        </p>
      </div>
      <div className="pb-12 pt-8">
        <CodePreviewSwitcher />
      </div>
      <div className="flex flex-col pb-12 pt-8 gap-10">
        <h1 className="text-lg mb-5 font-semibold">Usage</h1>
        <CodePreviewSwitcher />
      </div>
    </>
  );
}
