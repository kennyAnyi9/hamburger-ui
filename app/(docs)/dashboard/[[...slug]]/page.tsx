import Usage from "@/components/docs/component-usage";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BasicMenu,
  CodePreviewSnippet,
  CodePreviewSwitcher,
  Configuration,
  Introduction,
} from "@/lib/exports";
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
        </div>
        {/* <Configuration /> */}
        {/* <Introduction /> */}
        <Usage />
      </div>
    </main>
  );
}
