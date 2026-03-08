import type { DecisionNode } from '../../../store/types';

interface DecisionBlockProps {
  question: string;
  yes: DecisionNode;
  no: DecisionNode;
}

function DecisionNodeView({ node, label, depth = 0 }: { node: DecisionNode; label: string; depth?: number }) {
  const isYes = label === 'Yes';
  const borderColor = isYes ? 'border-green-400' : 'border-red-400';
  const labelColor = isYes ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  const bgColor = isYes ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20';

  return (
    <div className={`border-l-4 ${borderColor} ${bgColor} rounded-r-lg p-3 ${depth > 0 ? 'ml-4' : ''}`}>
      <p className={`text-xs font-bold uppercase ${labelColor} mb-1`}>{label}</p>
      <p className="text-sm font-semibold text-text-primary">{node.answer}</p>
      {node.explanation && (
        <p className="text-xs text-text-secondary mt-1">{node.explanation}</p>
      )}
      {node.followUp && (
        <div className="mt-3 space-y-2">
          <p className="text-xs font-bold text-text-primary bg-surface/50 rounded-lg px-2 py-1 inline-block">
            {node.followUp.question}
          </p>
          <DecisionNodeView node={node.followUp.yes} label="Yes" depth={depth + 1} />
          <DecisionNodeView node={node.followUp.no} label="No" depth={depth + 1} />
        </div>
      )}
    </div>
  );
}

export default function DecisionBlock({ question, yes, no }: DecisionBlockProps) {
  return (
    <div className="space-y-3">
      <div className="bg-primary/10 rounded-xl p-3 text-center">
        <p className="text-sm font-bold text-primary">{question}</p>
      </div>
      <div className="space-y-2">
        <DecisionNodeView node={yes} label="Yes" />
        <DecisionNodeView node={no} label="No" />
      </div>
    </div>
  );
}
