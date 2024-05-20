import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SVGAttributes } from "react";

export default function Search() {
  return (
    <div className="flex items-center w-full max-w-md mx-auto">
      <div className="relative flex-1">
        <Input
          className="pr-10 rounded-md border-gray-300 shadow-sm"
          placeholder="Search"
          type="search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      {/* <Button className="ml-2">
        <SearchIcon className="w-5 h-5" />
        <span className="sr-only">Search</span>
      </Button> */}
    </div>
  );
}

function SearchIcon(props: SVGAttributes<SVGSVGElement>) {
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
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
