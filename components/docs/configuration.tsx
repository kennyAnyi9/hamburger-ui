import { cn } from "@/lib/utils";
import React from "react";

import Link from "next/link";
import { CodeSnippet, Snippet } from "./installation-snippet";

export default function Configuration() {
  return (
    <>
      <section className="h1_p_text_gap mb-10">
        <h1 className="h1_text_huge">Installation (Next.js)</h1>
        <p className="p_text">
          we assume that you have already isntalled and configured Next.js.
          However if you haven't and need to install, kindly start with step 1
          but checkout checkout the{" "}
          <Link href="#" className="underline">
            docs
          </Link>{" "}
          for complete installation guidelines
        </p>
      </section>
      <section className="flex flex-col gap-10 border-l pl-5">
        <div className="h1_p_text_gap">
          <h1 className="h1_text_moderate">(Step 1 ) Start a new project</h1>
          <p className="p_text">
            Start by creating a new Next.js project using create-next-app:
          </p>
          <CodeSnippet>{`bunx --bun shadcn-ui@latest add sheet`}</CodeSnippet>
        </div>
        <div className="flex flex-col gap-5">
          <div className="h1_p_text_gap">
            <h1 className="h1_text_moderate">(Step 2) Install Shadcn ui</h1>
            <p className="p_text">
              Run the shadcn-ui init command to setup your project:
            </p>
            <CodeSnippet>{`bunx --bun shadcn-ui@latest init`}</CodeSnippet>
          </div>
          <div className="h1_p_text_gap">
            <p className="p_text">
              You will see the following prompts, so you choose based on your
              discretion or preferences:
            </p>
            <Snippet>{`1  Which style would you like to use? › Default
2  Which color would you like to use as base color? › Slate
3  Do you want to use CSS variables for colors? › no / yes`}</Snippet>
          </div>
          <div>
            <p>
              Checkout steps 4 and beyond for further configurations from the
              shadcn ui the{" "}
              <Link
                href="https://ui.shadcn.com/docs/installation/next"
                className="underline"
              >
                docs
              </Link>{" "}
              (not compulsory)
            </p>
          </div>
        </div>
        <div className="h1_p_text_gap">
          <h1 className="h1_text_moderate">
            (Step 4 ) Install sheet component from shadcn ui
          </h1>
          <p className="p_text">
            All mobile menus use the sheet component from shadcn
          </p>
          <CodeSnippet>{`bunx --bun shadcn-ui@latest add sheet`}</CodeSnippet>
        </div>
      </section>
    </>
  );
}
