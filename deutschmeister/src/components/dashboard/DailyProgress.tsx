interface DailyProgressProps {
  reviewed: number;
  goal: number;
}

export default function DailyProgress({ reviewed, goal }: DailyProgressProps) {
  const pct = Math.min(100, (reviewed / goal) * 100);
  const completed = reviewed >= goal;

  return (
    <div className={`bg-surface rounded-2xl p-5 shadow-sm border border-border-light ${completed ? 'celebrate' : ''}`}>
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-medium text-text-secondary">Today's Progress</p>
        <span className={`text-sm font-bold ${completed ? 'text-success' : 'text-primary'}`}>
          {reviewed}/{goal}
        </span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full progress-fill ${completed ? 'bg-success' : 'bg-primary'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-text-secondary mt-2">
        {completed ? 'Daily goal reached!' : `${goal - reviewed} words to go`}
      </p>
    </div>
  );
}
