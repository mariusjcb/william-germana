import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  onRate: (rating: number) => void;
}

const labels = ['No idea', 'Hard', 'Okay', 'Easy', 'Perfect'];

export default function StarRating({ onRate }: StarRatingProps) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [animating, setAnimating] = useState(0);

  const handleRate = (rating: number) => {
    setSelectedStar(rating);
    setAnimating(rating);
    setTimeout(() => {
      setAnimating(0);
      onRate(rating);
    }, 300);
  };

  const displayRating = hoveredStar || selectedStar;

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-text-secondary font-medium">How well did you know it?</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onMouseEnter={() => setHoveredStar(star)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => handleRate(star)}
            className={`p-1 transition-transform ${animating === star ? 'star-bounce' : ''}`}
            aria-label={`Rate ${star} - ${labels[star - 1]}`}
          >
            <Star
              size={32}
              fill={star <= displayRating ? '#F59E0B' : 'none'}
              stroke={star <= displayRating ? '#F59E0B' : '#CBD5E1'}
              strokeWidth={2}
            />
          </button>
        ))}
      </div>
      <p className="text-xs text-text-secondary h-4">
        {displayRating > 0 ? labels[displayRating - 1] : '1 = No idea \u00B7 5 = Perfect'}
      </p>
    </div>
  );
}
