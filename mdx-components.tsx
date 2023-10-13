import type { MDXComponents } from "mdx/types";
import { CodeHeader } from "@/components/ui";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    CodeHeader,
  };
}
