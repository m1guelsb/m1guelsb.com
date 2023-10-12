"use client";

import { BubbleMenu, Editor } from "@tiptap/react";
import { BubbleButton } from "..";
import {
  CodeIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  Link1Icon,
  ListBulletIcon,
  QuoteIcon,
} from "@radix-ui/react-icons";
import { useCallback } from "react";

interface EditorBubbleMenu {
  editor: Editor;
}

export const EditorBubbleMenu = ({ editor }: EditorBubbleMenu) => {
  const toggleLink = useCallback(() => {
    if (editor.isActive("link")) {
      return editor.chain().focus().unsetLink().run();
    } else {
      const previousUrl = editor.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);
      if (url) return editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  return (
    <BubbleMenu
      className="flex bg-background1 outline outline-1 outline-accent divide-x divide-accent rounded-sm"
      editor={editor}
    >
      <div className="flex flex-col">
        <BubbleButton
          title="Heading 1"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive("heading-1")}
        >
          <HeadingIcon className="h-5 w-5" />
        </BubbleButton>
        <BubbleButton
          title="Heading 2"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive("heading-2")}
        >
          <HeadingIcon className="h-3 w-3" />
        </BubbleButton>
      </div>

      <div className="grid grid-rows-2 grid-flow-col grid-cols-4">
        <BubbleButton
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <FontBoldIcon />
        </BubbleButton>
        <BubbleButton
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <FontItalicIcon />
        </BubbleButton>

        <BubbleButton
          title="Code"
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
        >
          <CodeIcon />
        </BubbleButton>
        <BubbleButton
          title="Code block"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("code-block")}
        >
          <div>
            <CodeIcon className="h-3 w-3" />
            <CodeIcon className="h-3 w-3" />
          </div>
        </BubbleButton>

        <BubbleButton
          title="Bullet list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <ListBulletIcon />
        </BubbleButton>
        <BubbleButton
          title="Ordered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <p className="text-[0.75rem]">1. 2.</p>
        </BubbleButton>

        <BubbleButton
          title="Add link"
          onClick={() => toggleLink()}
          isActive={editor.isActive("link")}
        >
          <Link1Icon />
        </BubbleButton>
        <BubbleButton
          title="Quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
        >
          <p className="text-[0.75rem]">
            <QuoteIcon />
          </p>
        </BubbleButton>
      </div>
    </BubbleMenu>
  );
};
