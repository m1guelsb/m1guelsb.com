"use client";

import "highlight.js/styles/atom-one-dark.css";
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, common } from "lowlight";
import { EditorBubbleMenu } from "./EditorBubbleMenu";

const lowlight = createLowlight(common);

interface TiptapEditorProps {
  onChange?: (value: string) => void;
}
export const TiptapEditor = ({ onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
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
    onUpdate: ({ editor }) => onChange?.(JSON.stringify(editor.getJSON())),
  });

  return (
    <>
      <EditorContent
        className="bg-background2 mx-auto p-6 rounded-lg  border border-accent prose prose-invert prose-purple prose-pre:border prose-pre:border-slate-500 prose-h2:text-attention prose-code:bg-[#0a0513] prose-code:rounded-md prose-code:p-1"
        editor={editor}
      />
      {editor && <EditorBubbleMenu editor={editor} />}
    </>
  );
};

const content = `
  
<h1>An Introduction to JavaScript: The Language of the Web</h1>

    <p>JavaScript is an essential programming language used in web development to enhance user experience and add interactivity to websites. As a versatile and widely adopted language, JavaScript empowers developers to build dynamic and engaging web applications.</p>

    <h2>What is JavaScript?</h2>

    <p>JavaScript is a high-level, interpreted programming language primarily used for front-end web development. It was created by Brendan Eich in 1995 and has since become an integral part of web development. JavaScript allows developers to:</p>

    <ul>
        <li>Modify the content of web pages in real-time.</li>
        <li>Interact with users through forms and buttons.</li>
        <li>Retrieve and manipulate data from web servers.</li>
        <li>Create animations and dynamic effects.</li>
    </ul>

    <h2>Getting Started with JavaScript</h2>

    <p>To include JavaScript in your web pages, you can use the following HTML code:</p>

    <pre>
        <code>
&lt;script type="text/javascript"&gt;
    // Your JavaScript code goes here
&lt;/script&gt;
        </code>
    </pre>

    <p>Here's a simple example of JavaScript that displays an alert when a button is clicked:</p>

    <pre>
        <code>
&lt;button id="myButton"&gt;Click Me&lt;/button&gt;

&lt;script type="text/javascript"&gt;
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Hello, JavaScript!");
    });
&lt;/script&gt;
        </code>
    </pre>

    <h2>Quotes About JavaScript</h2>

    <blockquote>
        "JavaScript is the world's most misunderstood programming language."
        <cite>- Douglas Crockford</cite>
    </blockquote>

    <blockquote>
        "The strength of JavaScript is that you can do anything. The weakness is that you will."
        <cite>- Reg Braithwaite</cite>
    </blockquote>

    <h2>Conclusion</h2>

    <p>JavaScript is a powerful and versatile language that plays a vital role in modern web development. It allows developers to create interactive and dynamic web applications that can engage users and provide a seamless browsing experience. With a solid understanding of JavaScript, you can unlock a world of possibilities in web development.</p>

`;
