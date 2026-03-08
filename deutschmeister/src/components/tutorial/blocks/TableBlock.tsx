interface TableBlockProps {
  headers: string[];
  rows: string[][];
  caption?: string;
  colorCoded?: boolean;
}

function getCellColor(cell: string, colorCoded: boolean): string {
  if (!colorCoded) return '';
  const lower = cell.toLowerCase();
  if (lower.startsWith('der ') || lower === 'der' || lower === 'den' || lower === 'dem' || lower === 'des')
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
  if (lower.startsWith('die ') || lower === 'die')
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
  if (lower.startsWith('das ') || lower === 'das')
    return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
  if (lower.startsWith('ein ') || lower === 'ein' || lower.startsWith('einen') || lower.startsWith('einem') || lower.startsWith('eines'))
    return 'bg-purple-50 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
  if (lower.startsWith('kein') || lower.startsWith('keine'))
    return 'bg-rose-50 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300';
  return '';
}

export default function TableBlock({ headers, rows, caption, colorCoded = false }: TableBlockProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left py-2.5 px-3 bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wide first:rounded-tl-lg last:rounded-tr-lg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-border-light last:border-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-2.5 px-3 text-text-primary ${getCellColor(cell, colorCoded)} ${ci === 0 ? 'font-medium' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <p className="text-xs text-text-secondary mt-2 italic">{caption}</p>}
    </div>
  );
}
