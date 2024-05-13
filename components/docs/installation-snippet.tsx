import React from "react";
import { CopyIcon } from "../ui/icons";
import { CodeSnippetProps } from "@/types";
import { cn } from "@/lib/utils";

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-md overflow-auto dark:bg-[#18181B] bg-[#18181B] thin_border p-4 w-[700px] inline-flex justify-between",
        className
      )}
    >
      <code>
        <pre className="font-mono text-xs text-white">{children}</pre>
      </code>
      <CopyIcon />
    </div>
  );
};

export const Snippet: React.FC<CodeSnippetProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-md dark:bg-[#18181B] bg-[#18181B] thin_border p-4 w-[700px] inline-flex justify-between",
        className
      )}
    >
      <code>
        <pre className="font-mono text-xs text-white">{children}</pre>
      </code>
    </div>
  );
};
