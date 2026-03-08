interface TextBlockProps {
  content: string;
}

export default function TextBlock({ content }: TextBlockProps) {
  return <p className="text-sm leading-relaxed text-text-primary">{content}</p>;
}
