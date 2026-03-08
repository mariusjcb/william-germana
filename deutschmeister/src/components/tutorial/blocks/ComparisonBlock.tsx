interface ComparisonBlockProps {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}

export default function ComparisonBlock({ left, right }: ComparisonBlockProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
        <p className="font-bold text-sm text-blue-700 dark:text-blue-300 mb-2">{left.title}</p>
        <ul className="space-y-1.5">
          {left.items.map((item, i) => (
            <li key={i} className="text-sm text-text-primary">{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
        <p className="font-bold text-sm text-green-700 dark:text-green-300 mb-2">{right.title}</p>
        <ul className="space-y-1.5">
          {right.items.map((item, i) => (
            <li key={i} className="text-sm text-text-primary">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
