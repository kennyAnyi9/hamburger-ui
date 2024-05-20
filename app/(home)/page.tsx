import { SwitchDemo } from "@/components/themes/mode-toggle";
import { Button } from "@/components/ui/button";
import { BasicMenu, Canvas, Preview, Steps } from "@/lib/exports";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Balancer from "react-wrap-balancer";
import { StarOnGithub } from "./_components/star";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

// TODO:move to constants.ts and import it here
const backgroundColor = {
  backgroundColor: "#1D202A",
};

export default function Home() {
  return (
    <main className="relative  top-20 lg:top-36 overflow-hidden flex min-h-screen flex-col items-center justify-center px-5 gap-20  md:px-24 ">
      <section className="h-full w-full relative max-w-6xl flex flex-col gap-4 items-center ">
        <StarOnGithub />
        <h1 className="font-bold  text-3xl text-center md:text-6xl text-gray-900 dark:text-white">
          Customizable mobile menus
        </h1>
        <p className="max-w-4xl lg:max-w-4xl text-center hero_description">
          <Balancer ratio={0.43} preferNative={false}>
            Save valuable development time by utilizing our pre-built mobile
            menus. Focus on what matters most - building a great app!
          </Balancer>
        </p>
        <div className="gap-2 flex flex-col lg:flex-row">
          <Link
            href="#"
            // className="flex justify-center items-center p-[3px] bg-gray-200 rounded-xl"
          >
            <Button variant="default" className="rounded-full">
              Browse hamburgers
            </Button>
          </Link>
          <Link
            href="#"
            // className="flex justify-center items-center p-[3px] bg-gray-200 rounded-xl"
          >
            <Button variant="outline" className="rounded-full">
              Request hamburger
            </Button>
          </Link>
        </div>
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [6, 6],
            [10, 5],
            [13, 3],
          ]}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 dark:opacity-50 -z-10"
          )}
        />
      </section>
      {/* second section */}
      <section className="w-screen">
        <Canvas />
      </section>
      {/* another section */}
      <section></section>
    </main>
  );
}
