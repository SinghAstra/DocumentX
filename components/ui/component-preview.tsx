import { extractCodeFromFilePath } from "@/lib/read-file";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeBlock } from "./codeblock";
import Tabs from "./tab";

interface ComponentPreview {
  component: React.ReactElement;
  filePath: string;
}

const customStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    backgroundColor: "transparent",
    padding: "0px",
    margin: "0px",
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    fontSize: "16px",
  },
};

const ComponentPreview = ({ component, filePath }: ComponentPreview) => {
  const code = extractCodeFromFilePath(filePath);
  console.log("Type of code:", typeof code, "Value:", code);
  return (
    <Tabs
      tabs={[
        {
          label: "Preview",
          content: (
            <div className="min-h-[400px] border w-full flex items-center justify-center mb-4">
              {component}
            </div>
          ),
        },
        {
          label: "Code",
          content: (
            <CodeBlock>
              <SyntaxHighlighter language={"tsx"} style={customStyle}>
                {code}
              </SyntaxHighlighter>
            </CodeBlock>
          ),
        },
      ]}
    />
  );
};

export default ComponentPreview;
