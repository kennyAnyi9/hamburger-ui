import { SwitchDemo } from "@/components/themes/mode-toggle";
import { Button } from "@/components/ui/button";
import { BasicMenu, Canvas, Steps } from "@/lib/exports";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

// TODO:move to constants.ts and import it here
const backgroundColor = {
  backgroundColor: "#030712",
};

export default function Home() {
  return (
    <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between px-5 gap-20  md:px-24  pt-20">
      <section className="h-fit max-w-5xl flex flex-col items-center gap-5 ">
        <a
          href="#"
          className="border w-fit mx-auto flex justify-between items-center transition duration-200 rounded-[--annonce-border-radius] border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color] p-1 group gap-2"
        >
          <span className="block text-xs px-2 py-0.5 rounded-[calc(var(--annonce-border-radius)-0.375rem)] text-white bg-primary-600">
            New
          </span>
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 flex gap-6">
            Introducing Skeleton UI React !
            <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
              <span className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-950 dark:text-white -translate-x-2 transition duration-300 group-hover:translate-x-px"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </span>
        </a>

        <h1 className="font-semibold text-opacity-50 text-5xl text-center md:text-7xl text-transparent bg-clip-text bg-gradient-to-t from-gray-950 to-gray-200">
          Humburger UI
        </h1>
        <p className="max-w-2xl text-center hero_description">
          A collection of pre-built, responsive mobile dropdown menus designed
          specifically for your React and Next.js projects. Simply copy and
          paste the code to enhance your app's navigation.
        </p>
        <Link
          href="#"
          // className="flex justify-center items-center p-[3px] bg-gray-200 rounded-xl"
        >
          <Button className="button_class_default p-3 md:p-5 inline-flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
            Get Started
          </Button>
        </Link>
        <div className="absolute inset-0 top-44  left-1/2 -z-20 h-56 w-full -translate-x-1/2 opacity-25 dark:opacity-5 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.300/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_70%)] dark:[mask:radial-gradient(black,transparent_60%)]"></div>
        <div className="absolute  inset-x-0 top-36 w-3/5 h-1/3 -z-[1] rounded-full bg-black/10  dark:bg-white/10 mx-auto blur-3xl"></div>
      </section>
      {/* second section */}
      <section className="w-screen">
        <div className="overflow-hidden mx-auto w-11/12 lg:w-4/5 p-5 border bg-white dark:bg-transparent rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
          {/* <div className="flex justify-between items-center border-b mb-2 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] w-full">
            <div className="flex   gap-2 py-6 *:size-2.5 *:rounded-full px-[--card-padding]">
              <div className="bg-[#f87171]"></div>
              <div className="bg-[#fbbf24]"></div>
              <div className="bg-[#a3e635]"></div>
            </div> */}

          {/* <div className="hidden border border-transparent dark:border-[--ui-dark-border-color] sm:flex h-8 w-1/3 items-center justify-center gap-1 rounded-[--card-border-radius] dark:bg-gray-950 bg-[--card-light-bg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-3 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                ></path>
              </svg>
              <span className="text-xs tracking-wide text-gray-500">
                store.humburgerui.com
              </span>
            </div> */}
          {/* 
            <div></div>
          </div> */}

          <div>
            <aside
              aria-label="Humburger dropdown menu component code block."
              className="rounded-xl border w-full lg:w-[500px]  bg-gray-950"
            >
              <div className="border-b p-2">
                <div className="flex justify-between">
                  <div aria-hidden="true" className="inline-flex gap-2">
                    <svg
                      fill="none"
                      height="14"
                      viewBox="0 0 512 512"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        fill="currentColor"
                        height="512"
                        rx="50"
                        width="512"
                      ></rect>
                      <rect
                        fill="currentColor"
                        height="512"
                        rx="50"
                        width="512"
                      ></rect>
                      <path
                        clip-rule="evenodd"
                        d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                        fill="#000000"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="font-mono text-xs">
                      components/hamburger.tsx
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3 my-auto"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
              </div>
              <pre className="bg-background">
                <code className="font-mono text-xs ">
                  <SyntaxHighlighter
                    language="typescript"
                    showLineNumbers={true}
                    style={monokai}
                    customStyle={backgroundColor}
                  >
                    {/** Removed unnecessary divs and comments */}
                    {`"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function BasicMenu() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
`}
                  </SyntaxHighlighter>
                </code>
              </pre>
            </aside>
          </div>
        </div>
        <Canvas />
      </section>
      {/* another section */}
      <section>
        <Steps />
      </section>
      <BasicMenu />
    </main>
  );
}
