import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
