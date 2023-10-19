import { cx } from "class-variance-authority";

interface CodeChangeProps {
  deletion: string;
  addition: string;
  language: `language-${string}`;
}

export const CodeChange = ({
  language,
  deletion,
  addition,
}: CodeChangeProps) => {
  return (
    <pre>
      <code className={cx(`flex flex-col`, language)}>
        <span className="text-red-500 bg-red-500/10 px-4">- {deletion}</span>
        <span className="text-green-500 bg-green-500/10 px-4">
          + {addition}
        </span>
      </code>
    </pre>
  );
};
