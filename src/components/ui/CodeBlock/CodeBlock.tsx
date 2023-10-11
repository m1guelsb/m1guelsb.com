"use client";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const CodeBlock = () => (
  <NodeViewWrapper className="code-block">
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
);
