"use client";

import { BubbleMenu, Editor } from "@tiptap/react";
import { BubbleButton } from "..";
import {
  CodeIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  ListBulletIcon,
} from "@radix-ui/react-icons";

interface EditorBubbleMenu {
  editor: Editor;
}

export const EditorBubbleMenu = ({ editor }: EditorBubbleMenu) => {
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

      <div className="grid grid-cols-3">
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
          isActive={editor.isActive("bullet")}
        >
          <ListBulletIcon />
        </BubbleButton>
        <BubbleButton
          title="Ordered list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("ordered")}
        >
          <p className="text-[0.75rem]">1. 2.</p>
        </BubbleButton>
      </div>
    </BubbleMenu>
  );
};
