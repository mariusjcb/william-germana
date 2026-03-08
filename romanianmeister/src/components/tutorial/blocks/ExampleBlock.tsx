import type { ExampleHighlight, HighlightRole } from '../../../store/types';

interface ExampleBlockProps {
  romanian: string;
  english: string;
  highlights?: ExampleHighlight[];
}

const roleColors: Record<HighlightRole, string> = {
  subject: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  verb: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  object: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  article: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  prefix: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  time: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  negation: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
};

function renderHighlighted(text: string, highlights?: ExampleHighlight[]) {
  if (!highlights || highlights.length === 0) return text;

  const parts: Array<{ text: string; role?: HighlightRole }> = [];
  let remaining = text;

  // Sort highlights by their position in the text
  const sorted = [...highlights].sort((a, b) => {
    const posA = text.indexOf(a.text);
    const posB = text.indexOf(b.text);
    return posA - posB;
  });

  for (const hl of sorted) {
    const idx = remaining.indexOf(hl.text);
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: remaining.slice(0, idx) });
    parts.push({ text: hl.text, role: hl.role });
    remaining = remaining.slice(idx + hl.text.length);
  }
  if (remaining) parts.push({ text: remaining });

  return parts.map((p, i) =>
    p.role ? (
      <span key={i} className={`${roleColors[p.role]} px-1 rounded font-semibold`}>
        {p.text}
      </span>
    ) : (
      <span key={i}>{p.text}</span>
    )
  );
}

export default function ExampleBlock({ romanian, english, highlights }: ExampleBlockProps) {
  return (
    <div className="bg-surface rounded-xl border border-border p-4">
      <p className="text-base font-semibold text-text-primary leading-relaxed">
        {renderHighlighted(romanian, highlights)}
      </p>
      <p className="text-sm text-text-secondary mt-1 italic">{english}</p>
    </div>
  );
}
