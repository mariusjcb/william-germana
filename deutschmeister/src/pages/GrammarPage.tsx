import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import { grammarCards, grammarTopics } from '../data/grammar';
import { useGrammarSession } from '../hooks/useFlashcard';
import { getAllCardProgress } from '../utils/db';
import { isMastered } from '../utils/spacedRepetition';
import FlashCard from '../components/flashcard/FlashCard';

function TopicList({ onSelectTopic }: { onSelectTopic: (topicId: string) => void }) {
  const [topicProgress, setTopicProgress] = useState<Map<string, { mastered: number; total: number }>>(new Map());

  useEffect(() => {
    (async () => {
      const all = await getAllCardProgress();
      const progressMap = new Map(all.map((p) => [p.cardId, p]));
      const tp = new Map<string, { mastered: number; total: number }>();

      for (const topic of grammarTopics) {
        const topicCards = grammarCards.filter((c) => c.topicId === topic.id);
        const masteredCount = topicCards.filter((c) => isMastered(progressMap.get(c.id))).length;
        tp.set(topic.id, { mastered: masteredCount, total: topicCards.length });
      }
      setTopicProgress(tp);
    })();
  }, []);

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Grammar Topics</h1>
      <div className="space-y-3">
        {grammarTopics.map((topic) => {
          const progress = topicProgress.get(topic.id);
          const mastered = progress?.mastered ?? 0;
          const total = progress?.total ?? 0;
          const pct = total > 0 ? (mastered / total) * 100 : 0;
          const done = mastered === total && total > 0;

          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className="w-full bg-surface rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors text-left flex items-center gap-3"
            >
              <div className="flex-shrink-0">
                {done ? (
                  <CheckCircle2 size={24} className="text-success" />
                ) : (
                  <Circle size={24} className="text-gray-300" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-text-primary text-sm">{topic.name}</p>
                <p className="text-xs text-text-secondary">{topic.description}</p>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-2">
                  <div
                    className={`h-full rounded-full progress-fill ${done ? 'bg-success' : 'bg-primary-light'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-xs text-text-secondary mt-1">{mastered}/{total} mastered</p>
              </div>
              <ChevronRight size={18} className="text-text-secondary flex-shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GrammarSession({ topicId, onBack }: { topicId: string; onBack: () => void }) {
  const topicCards = useMemo(() => grammarCards.filter((c) => c.topicId === topicId), [topicId]);
  const topic = grammarTopics.find((t) => t.id === topicId);
  const { currentCard, currentIndex, total, loading, completed, handleRate } = useGrammarSession(topicCards);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="py-6 flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (completed || !currentCard) {
    return (
      <div className="py-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center slide-in">
          <CheckCircle2 size={64} className="text-success mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-2">Topic Complete!</h2>
          <p className="text-text-secondary mb-6">{topic?.name}</p>
          <div className="space-y-3">
            <button onClick={onBack} className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold">
              Back to Topics
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-surface text-text-primary py-3 px-6 rounded-xl font-semibold border border-gray-200"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <button onClick={onBack} className="flex items-center gap-1 text-text-secondary hover:text-primary mb-2 transition-colors">
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Topics</span>
      </button>
      <p className="text-sm font-medium text-primary mb-4">{topic?.name}</p>
      <FlashCard card={currentCard} onRate={handleRate} current={currentIndex} total={total} />
    </div>
  );
}

export default function GrammarPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  if (selectedTopic) {
    return <GrammarSession topicId={selectedTopic} onBack={() => setSelectedTopic(null)} />;
  }

  return <TopicList onSelectTopic={setSelectedTopic} />;
}
