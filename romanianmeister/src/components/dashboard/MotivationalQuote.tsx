import { getDailyQuote } from '../../data/quotes';

export default function MotivationalQuote() {
  const quote = getDailyQuote();
  return (
    <div className="text-center py-4 px-6">
      <p className="text-sm font-medium text-primary italic">"{quote.ro}"</p>
      <p className="text-xs text-text-secondary mt-1">— {quote.en}</p>
    </div>
  );
}
