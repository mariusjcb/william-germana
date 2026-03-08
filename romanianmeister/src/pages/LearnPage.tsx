import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PartyPopper } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import { useVocabSession } from '../hooks/useFlashcard';
import { vocabulary } from '../data/vocabulary';
import FlashCard from '../components/flashcard/FlashCard';

export default function LearnPage() {
  const { state } = useAppContext();
  const navigate = useNavigate();

  const levelVocab = useMemo(
    () => vocabulary.filter(w => w.level === state.settings.currentLevel),
    [state.settings.currentLevel]
  );

  const { currentCard, currentIndex, total, loading, completed, handleRate } = useVocabSession(
    levelVocab,
    state.settings.dailyGoal
  );

  if (loading) {
    return (
      <div className="py-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-text-secondary">Preparing your cards...</p>
        </div>
      </div>
    );
  }

  if (completed || !currentCard) {
    const avgRating =
      state.todaySession.ratings.length > 0
        ? (state.todaySession.ratings.reduce((a, b) => a + b, 0) / state.todaySession.ratings.length).toFixed(1)
        : '0';

    return (
      <div className="py-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center slide-in">
          <div className="celebrate inline-block mb-4">
            <PartyPopper size={64} className="text-secondary mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Session Complete!</h2>
          <p className="text-text-secondary mb-1">
            You reviewed <span className="font-bold text-primary">{total}</span> cards
          </p>
          <p className="text-text-secondary mb-6">
            Average rating: <span className="font-bold text-secondary">{avgRating}</span> / 5
          </p>
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              Practice Again
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-surface text-text-primary py-3 px-6 rounded-xl font-semibold border border-border hover:border-primary/30 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 text-text-secondary hover:text-primary mb-4 transition-colors"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back</span>
      </button>

      <FlashCard
        card={currentCard}
        onRate={handleRate}
        current={currentIndex}
        total={total}
      />
    </div>
  );
}
