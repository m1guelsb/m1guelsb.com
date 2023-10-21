import type { MDXComponents } from "mdx/types";
import { CodeHeader, CodeChange, TopicTitle } from "@/components/ui";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CodeHeader,
    CodeChange,
    TopicTitle,
  };
}
