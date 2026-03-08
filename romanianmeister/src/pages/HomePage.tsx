import { useNavigate } from 'react-router-dom';
import { BookOpen, PenLine } from 'lucide-react';
import { useAppContext } from '../store/AppContext';
import { useMasteredCount } from '../hooks/useFlashcard';
import StreakCounter from '../components/dashboard/StreakCounter';
import DailyProgress from '../components/dashboard/DailyProgress';
import OverallProgress from '../components/dashboard/OverallProgress';
import MotivationalQuote from '../components/dashboard/MotivationalQuote';

export default function HomePage() {
  const { state } = useAppContext();
  const { vocabMastered } = useMasteredCount();
  const navigate = useNavigate();

  return (
    <div className="py-6 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text-primary">Rom\u00e2nMeister</h1>
        <StreakCounter streak={state.settings.streak} />
      </div>

      {/* Daily Progress */}
      <DailyProgress
        reviewed={state.todaySession.wordsReviewed + state.todaySession.grammarReviewed}
        goal={state.settings.dailyGoal}
      />

      {/* Overall Progress */}
      <OverallProgress
        mastered={vocabMastered}
        total={state.totalWords}
      />

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate('/learn')}
          className="bg-primary text-white rounded-2xl p-5 shadow-md hover:bg-primary-dark transition-colors text-left"
        >
          <BookOpen size={28} className="mb-3" />
          <p className="font-bold text-base">Start Today's Words</p>
          <p className="text-sm opacity-80 mt-1">
            {Math.max(0, state.settings.dailyGoal - state.todaySession.wordsReviewed)} remaining
          </p>
        </button>

        <button
          onClick={() => navigate('/grammar')}
          className="bg-surface text-text-primary rounded-2xl p-5 shadow-md border border-border-light hover:border-primary/30 transition-colors text-left"
        >
          <PenLine size={28} className="mb-3 text-primary" />
          <p className="font-bold text-base">Grammar Practice</p>
          <p className="text-sm text-text-secondary mt-1">15 topics</p>
        </button>
      </div>

      {/* Motivational Quote */}
      <MotivationalQuote />
    </div>
  );
}
