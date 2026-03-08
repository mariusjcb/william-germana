interface RuleBlockProps {
  title: string;
  content: string;
}

export default function RuleBlock({ title, content }: RuleBlockProps) {
  return (
    <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl p-4">
      <p className="font-bold text-sm text-primary mb-1">{title}</p>
      <p className="text-sm text-text-primary leading-relaxed">{content}</p>
    </div>
  );
}
