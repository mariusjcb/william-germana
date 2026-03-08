import type { DiagramSlot, DiagramRole } from '../../../store/types';

interface DiagramBlockProps {
  slots: DiagramSlot[];
  caption?: string;
}

const roleStyles: Record<DiagramRole, string> = {
  subject: 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300',
  verb: 'bg-red-100 border-red-300 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300',
  object: 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300',
  time: 'bg-amber-100 border-amber-300 text-amber-800 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300',
  prefix: 'bg-orange-100 border-orange-300 text-orange-800 dark:bg-orange-900/30 dark:border-orange-700 dark:text-orange-300',
  other: 'bg-gray-100 border-gray-300 text-gray-800 dark:bg-gray-700/30 dark:border-gray-600 dark:text-gray-300',
};

export default function DiagramBlock({ slots, caption }: DiagramBlockProps) {
  const sorted = [...slots].sort((a, b) => a.position - b.position);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center">
        {sorted.map((slot) => (
          <div
            key={slot.position}
            className={`border-2 rounded-xl px-3 py-2.5 min-w-[70px] text-center ${roleStyles[slot.role]}`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-70 mb-0.5">
              Pos {slot.position} · {slot.label}
            </p>
            <p className="text-sm font-bold">{slot.content}</p>
          </div>
        ))}
      </div>
      {caption && <p className="text-xs text-text-secondary mt-2 text-center italic">{caption}</p>}
    </div>
  );
}
