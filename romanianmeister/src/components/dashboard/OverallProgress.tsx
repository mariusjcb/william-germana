import { BarChart3 } from 'lucide-react';

interface OverallProgressProps {
  mastered: number;
  total: number;
  label?: string;
}

export default function OverallProgress({ mastered, total, label = 'words mastered' }: OverallProgressProps) {
  const pct = total > 0 ? Math.min(100, (mastered / total) * 100) : 0;

  return (
    <div className="bg-surface rounded-2xl p-5 shadow-sm border border-border-light">
      <div className="flex items-center gap-2 mb-3">
        <BarChart3 size={18} className="text-primary" />
        <p className="text-sm font-medium text-text-secondary">Overall Progress</p>
      </div>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-3xl font-bold text-text-primary">{mastered}</span>
        <span className="text-lg text-text-secondary mb-0.5">/ {total}</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-light rounded-full progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-text-secondary mt-2">{label}</p>
    </div>
  );
}
