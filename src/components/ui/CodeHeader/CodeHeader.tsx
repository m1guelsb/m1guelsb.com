interface CodeHeaderProps {
  title: string;
}

export const CodeHeader = ({ title }: CodeHeaderProps) => {
  return (
    <span className="ml-2 py-1 px-2 rounded-tl-md rounded-tr-md bg-slate-500 text-white text-sm select-none">
      {title}
    </span>
  );
};
