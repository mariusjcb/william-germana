import { Flame } from 'lucide-react';

interface StreakCounterProps {
  streak: number;
}

export default function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={streak > 0 ? 'fire-pulse' : 'opacity-40'}>
        <Flame
          size={28}
          fill={streak > 0 ? '#F59E0B' : '#CBD5E1'}
          stroke={streak > 0 ? '#EA580C' : '#94A3B8'}
          strokeWidth={2}
        />
      </div>
      <div>
        <p className="text-lg font-bold text-text-primary">
          {streak > 0 ? `${streak} Day Streak!` : 'Start your streak!'}
        </p>
      </div>
    </div>
  );
}
