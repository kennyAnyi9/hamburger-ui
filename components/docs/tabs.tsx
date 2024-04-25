import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstallationSnippet from "./installation-snippet";
import { BasicMenu, CodePreviewSnippet, Preview } from "@/lib/exports";
import { Code, Phone } from "../ui/icons";

export default function CodePreviewSwitcher() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger
            value="preview"
            className="inline-flex gap-2 justify-center items-center"
          >
            preview <Phone />
          </TabsTrigger>
          <TabsTrigger value="code" className="inline-flex gap-1 ">
            code
            <Code />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <Preview />
        </TabsContent>
        <TabsContent value="code">
          <CodePreviewSnippet />
        </TabsContent>
      </Tabs>
    </>
  );
}
