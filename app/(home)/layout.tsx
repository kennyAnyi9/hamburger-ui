import { ReactNode } from "react";

export default function LandingPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
