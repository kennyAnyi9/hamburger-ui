import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstallationSnippet from "./installation-snippet";
import { BasicMenu, CodePreviewSnippet } from "@/lib/exports";

export default function CodePreviewSwitcher() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <BasicMenu />
          <TabsTrigger value="code">code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          preview of ui component with the ability to choose between various
          variants
        </TabsContent>
        <TabsContent value="code">
          <CodePreviewSnippet />
        </TabsContent>
      </Tabs>
    </>
  );
}
