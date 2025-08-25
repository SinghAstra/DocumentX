import ComponentPreview from "@/components/ui/component-preview";
import React, { ReactNode } from "react";
import MovingBorderBasic from "./moving-border-basic";

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 sm:px-8">
      <ComponentPreview
        component={<MovingBorderBasic />}
        filePath="app/docs/moving-border-basic.tsx"
      />

      {children}
    </div>
  );
};

export default DocsLayout;
