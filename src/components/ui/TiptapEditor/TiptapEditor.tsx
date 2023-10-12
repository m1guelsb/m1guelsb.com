"use client";

import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { useEditor, EditorContent } from "@tiptap/react";
import { createLowlight, common } from "lowlight";
import { EditorBubbleMenu } from "./EditorBubbleMenu";

interface TiptapEditorProps {
  onChange?: (value: string) => void;
}
export const TiptapEditor = ({ onChange }: TiptapEditorProps) => {
  const lowlight = createLowlight(common);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Link,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
  });

  return (
    <>
      <EditorContent className="article-body mx-auto" editor={editor} />
      {editor && <EditorBubbleMenu editor={editor} />}
    </>
  );
};

const content = `<p>JavaScript is an essential programming language used in web development to enhance user experience and add interactivity to websites. As a versatile and widely adopted language, JavaScript empowers developers to build dynamic and engaging web applications.</p>

<h2>Conclusion</h2>

<p>JavaScript is a powerful and versatile language that plays a vital role in modern web development. It allows developers to create interactive and dynamic web applications that can engage users and provide a seamless browsing experience. With a solid understanding of JavaScript, you can unlock a world of possibilities in web development.</p>`;
