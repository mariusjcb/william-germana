import { useAppContext } from '../store/AppContext';
import type { Level } from '../store/types';

const levels: { value: Level; label: string; desc: string }[] = [
  { value: 'A1', label: 'A1', desc: 'Beginner' },
  { value: 'A2', label: 'A2', desc: 'Elementary' },
];

export default function LevelSelector() {
  const { state, updateSettings } = useAppContext();
  const current = state.settings.currentLevel;

  return (
    <div className="flex gap-2">
      {levels.map((lvl) => (
        <button
          key={lvl.value}
          onClick={() => updateSettings({ currentLevel: lvl.value })}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
            current === lvl.value
              ? 'bg-primary/10 border-primary/30 border text-primary'
              : 'bg-muted border border-transparent text-text-primary hover:bg-muted-hover'
          }`}
        >
          {lvl.label} <span className="font-normal text-xs opacity-70">{lvl.desc}</span>
        </button>
      ))}
    </div>
  );
}
