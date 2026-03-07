import { useState } from 'react';
import type { FlashcardItem } from '../../store/types';
import StarRating from './StarRating';

interface FlashCardProps {
  card: FlashcardItem;
  onRate: (rating: number) => void;
  current: number;
  total: number;
}

export default function FlashCard({ card, onRate, current, total }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  const handleRate = (rating: number) => {
    setFlipped(false);
    setTimeout(() => onRate(rating), 100);
  };

  const directionLabel = card.direction === 'de-en' ? '🇩🇪 → 🇬🇧' : '🇬🇧 → 🇩🇪';

  return (
    <div className="slide-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-text-secondary">{directionLabel}</span>
        <span className="text-sm font-medium text-text-secondary">
          {current} / {total}
        </span>
      </div>

      {/* Card */}
      <div className="perspective cursor-pointer" onClick={() => !flipped && setFlipped(true)}>
        <div className={`relative preserve-3d flip-transition ${flipped ? 'rotate-y-180' : ''}`}>
          {/* Front */}
          <div className="backface-hidden bg-surface rounded-2xl shadow-lg p-8 min-h-[280px] flex flex-col items-center justify-center border border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-text-primary mb-3">{card.front}</p>
              {card.meta.partOfSpeech && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {card.meta.partOfSpeech}
                  {card.meta.gender && ` · ${card.meta.gender === 'm' ? 'masc' : card.meta.gender === 'f' ? 'fem' : 'neut'}`}
                </span>
              )}
            </div>
            <p className="text-sm text-text-secondary mt-6">Tap to reveal</p>
          </div>

          {/* Back */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 bg-surface rounded-2xl shadow-lg p-8 min-h-[280px] flex flex-col items-center justify-center border border-primary/20">
            <div className="text-center mb-4">
              <p className="text-sm text-text-secondary mb-1">{card.front}</p>
              <p className="text-2xl font-bold text-primary mb-3">{card.back}</p>
              {card.meta.explanation && (
                <p className="text-sm text-text-secondary italic">{card.meta.explanation}</p>
              )}
              {card.meta.example && (
                <p className="text-sm text-text-secondary mt-2 border-t border-gray-100 pt-2">
                  {card.meta.example}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rating - only visible when flipped */}
      {flipped && (
        <div className="mt-6 slide-in">
          <StarRating onRate={handleRate} />
        </div>
      )}

      {/* Progress bar */}
      <div className="mt-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full progress-fill"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
