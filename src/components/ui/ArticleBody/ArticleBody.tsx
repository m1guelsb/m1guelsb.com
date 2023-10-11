"use client";

import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { useMemo } from "react";
import { Interweave } from "interweave";
import { ReactNodeViewRenderer, generateHTML } from "@tiptap/react";
import { createLowlight, common } from "lowlight";
import { CodeBlock } from "..";

const lowlight = createLowlight(common);

interface ArticleBodyProps {
  body: string;
}

export const ArticleBody = ({ body }: ArticleBodyProps) => {
  console.log("JSON.parse(body) :>> ", JSON.parse(body));
  const output = useMemo(() => {
    return generateHTML(JSON.parse(body), [
      StarterKit,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlock);
        },
      }).configure({
        lowlight,
      }),
    ]);
  }, [body]);

  return (
    <Interweave
      className="prose w-full prose-invert prose-purple prose-pre:border prose-pre:border-slate-500 prose-h2:text-attention prose-code:bg-[#0a0513] prose-code:rounded-md prose-code:p-1 bg-background2 p-6 rounded-lg"
      tagName="article"
      content={String(output)}
    />
  );
};
