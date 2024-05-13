import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BasicMenu, CodePreviewSnippet, Preview } from "@/lib/exports";
import { Code, CopyIcon, Phone } from "../../../../components/ui/icons";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

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
          <Button variant="ghost" className="inline-flex gap-1">
            {" "}
            copy
            <CopyIcon />
          </Button>
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
