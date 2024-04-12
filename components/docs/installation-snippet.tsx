import React from "react";

export default function InstallationSnippet() {
  return (
    <>
      <div className="border rounded-md bg-gray-800 p-2  w-full inline-flex justify-between ">
        <code>
          <pre className="font-mono text-sm">{`bun i framer-motion`}</pre>
        </code>
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
          className="size-4 my-auto"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </div>
    </>
  );
}
