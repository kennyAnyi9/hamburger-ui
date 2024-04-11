"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function Skeleton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [loading, loadingState] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => loadingState(true), 5000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <section
      className={cn(
        `${loading && "animate-pulse rounded-md bg-secondary"}`,
        className
      )}
      {...props}
    >
      {!loading && children}
    </section>
  );
}

export { Skeleton };
