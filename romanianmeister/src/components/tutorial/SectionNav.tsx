import type { TutorialSection } from '../../store/types';

interface SectionNavProps {
  sections: TutorialSection[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function SectionNav({ sections, activeId, onSelect }: SectionNavProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            activeId === s.id
              ? 'bg-primary text-white'
              : 'bg-muted text-text-secondary hover:bg-muted-hover'
          }`}
        >
          {s.title}
        </button>
      ))}
    </div>
  );
}
