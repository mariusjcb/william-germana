import { Lightbulb, AlertTriangle, Info } from 'lucide-react';

interface CalloutBlockProps {
  variant: 'tip' | 'warning' | 'info';
  content: string;
}

const config = {
  tip: { icon: Lightbulb, bg: 'bg-amber-50 dark:bg-amber-900/20', border: 'border-amber-400', iconColor: 'text-amber-500', label: 'Tip' },
  warning: { icon: AlertTriangle, bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-400', iconColor: 'text-red-500', label: 'Watch out' },
  info: { icon: Info, bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-400', iconColor: 'text-blue-500', label: 'Note' },
};

export default function CalloutBlock({ variant, content }: CalloutBlockProps) {
  const c = config[variant];
  const Icon = c.icon;
  return (
    <div className={`${c.bg} border-l-4 ${c.border} rounded-r-xl p-4 flex gap-3`}>
      <Icon size={20} className={`${c.iconColor} flex-shrink-0 mt-0.5`} />
      <div>
        <p className={`text-xs font-bold ${c.iconColor} uppercase mb-1`}>{c.label}</p>
        <p className="text-sm text-text-primary leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
