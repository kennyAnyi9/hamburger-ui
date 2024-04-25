import React from "react";

export default function CodePreviewSnippet() {
  return (
    <div className="border rounded-md  dark:bg-transparent bg-black p-5 w-fit">
      <div className="w-full inline-flex justify-between"></div>
      <code>
        <pre className="font-mono text-sm text-white">
          {`
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SidebarNavItem } from "@/types";
                
export interface DocsSidebarNavProps {
                  items: SidebarNavItem[];
                }
                
                export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
                  const pathname = usePathname();
                
                  return items.length ? (
                    <div className="w-full">
                      {items.map((item, index) => (
                        <div key={index} className={cn("pb-4")}>
                          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                            {item.title}
                          </h4>
                          {item?.items?.length && (
                            <DocsSidebarNavItems items={item.items} pathname={pathname} />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : null;
                }`}
        </pre>
      </code>
    </div>
  );
}
