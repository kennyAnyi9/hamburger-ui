import { ScrollArea } from "@/components/ui/scroll-area";
import { CodePreviewSwitcher, InstallationSnippet } from "@/lib/exports";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">Basic Menu</div>
          <h1></h1>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            Basic Menu
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            A basic menu component that can be used as a side menu or as a
            dropdown.
          </p>
        </div>

        <div className="pb-12 pt-8">
          <h1>Installation</h1>
          <InstallationSnippet />
        </div>
        <div className="pb-12 pt-8">
          <CodePreviewSwitcher />
        </div>
      </div>

      {/* <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
          <ScrollArea className="pb-10">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              dummy content
            </div>
          </ScrollArea>
        </div>
      </div> */}
    </main>
  );
}
