import { Footer, Header, MobileNav } from "@/components/layout/root";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const inter = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-bt">
      <body
        className={`${inter.className} max-w-5xl px-4 mx-auto bg-background1 text-text1`}
      >
        <Header />
        <main className="mb-20 tablet:mb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "m1guelsb",
  description:
    "Friendly articles and tutorials for beginners. Front-end, Back-end, and more!",
  keywords: [
    "nextjs articles",
    "reactjs articles",
    "java articles",
    "spring-boot articles",
    "blog",
    "nextjs",
    "reactjs",
    "java",
    "spring-boot",
    "technology",
    "tecnologia",
    "programming",
    "programação",
  ],
  assets: "/hero.png",
  twitter: {
    creator: "@m1guelsb",
    creatorId: "m1guelsb",

    images: ["/hero.png"],
    title: "m1guelsb",
    description:
      "Friendly articles and tutorials for beginners. Front-end, Back-end, and more!",
  },
  openGraph: {
    url: "https://m1guelsb.com",
    images: ["/hero.png"],
    title: "m1guelsb",
    description:
      "Friendly articles and tutorials for beginners. Front-end, Back-end, and more!",
    type: "article",
    tags: [
      "blog",
      "nextjs",
      "reactjs",
      "java",
      "spring-boot",
      "technology",
      "tecnologia",
      "programming",
      "programação",
    ],
  },
};
