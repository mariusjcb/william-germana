import { useState, useEffect, useCallback, useMemo } from 'react';
import type { VocabWord, GrammarCard, FlashcardItem, CardProgress, CardDirection } from '../store/types';
import { getAllCardProgress, saveCardProgress, getCardProgress } from '../utils/db';
import { isDue, calculateNextReview, isMastered, getToday } from '../utils/spacedRepetition';
import { useAppContext } from '../store/AppContext';
import { vocabulary } from '../data/vocabulary';
import { grammarCards as allGrammarCards } from '../data/grammar';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDirection(pref: 'ro-en' | 'en-ro' | 'mixed'): CardDirection {
  if (pref === 'mixed') return Math.random() < 0.5 ? 'ro-en' : 'en-ro';
  return pref;
}

function vocabToFlashcard(word: VocabWord, dir: CardDirection): FlashcardItem {
  return {
    id: word.id,
    front: dir === 'ro-en' ? word.romanian : word.english,
    back: dir === 'ro-en' ? word.english : word.romanian,
    direction: dir,
    meta: {
      partOfSpeech: word.partOfSpeech,
      gender: word.gender,
      example: word.exampleRO,
    },
  };
}

function grammarToFlashcard(card: GrammarCard): FlashcardItem {
  return {
    id: card.id,
    front: card.question,
    back: card.answer,
    direction: 'ro-en',
    meta: {
      topicName: card.topicName,
      explanation: card.explanation,
    },
  };
}

export function useVocabSession(allWords: VocabWord[], limit: number) {
  const { state, dispatch } = useAppContext();
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    (async () => {
      const allProgress = await getAllCardProgress();
      const progressMap = new Map(allProgress.map((p) => [p.cardId, p]));

      // Get due cards first
      const dueWords = allWords.filter((w) => isDue(progressMap.get(w.id)));
      const newWords = allWords.filter((w) => !progressMap.has(w.id));
      const reviewWords = dueWords.filter((w) => progressMap.has(w.id));

      // Mix: prioritize reviews, then new words
      const selected = [
        ...shuffleArray(reviewWords).slice(0, Math.min(reviewWords.length, Math.floor(limit * 0.4))),
        ...shuffleArray(newWords).slice(0, limit),
      ].slice(0, limit);

      // If not enough, add more due words
      if (selected.length < limit) {
        const remaining = shuffleArray(dueWords.filter((w) => !selected.includes(w)));
        selected.push(...remaining.slice(0, limit - selected.length));
      }

      const flashcards = selected.map((w) =>
        vocabToFlashcard(w, pickDirection(state.settings.cardDirection))
      );

      setCards(shuffleArray(flashcards));
      setLoading(false);
    })();
  }, [allWords, limit, state.settings.cardDirection]);

  const handleRate = useCallback(
    async (rating: number) => {
      const card = cards[currentIndex];
      if (!card) return;

      const existing = await getCardProgress(card.id);
      const isNew = !existing;
      const update = calculateNextReview(rating, existing);

      const progress: CardProgress = {
        cardId: card.id,
        cardType: 'vocab',
        ...update,
      };

      await saveCardProgress(progress);
      dispatch({ type: 'INCREMENT_REVIEWED', isNew, rating });

      // Update streak
      const today = getToday();
      if (state.settings.lastActiveDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const isConsecutive = state.settings.lastActiveDate === yesterday.toISOString().split('T')[0];
        dispatch({
          type: 'UPDATE_SETTINGS',
          settings: {
            lastActiveDate: today,
            streak: isConsecutive ? state.settings.streak + 1 : 1,
          },
        });
      }

      if (currentIndex + 1 >= cards.length) {
        setCompleted(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [cards, currentIndex, dispatch, state.settings]
  );

  return {
    cards,
    currentCard: cards[currentIndex],
    currentIndex: currentIndex + 1,
    total: cards.length,
    loading,
    completed,
    handleRate,
  };
}

export function useGrammarSession(grammarCards: GrammarCard[]) {
  const { dispatch, state } = useAppContext();
  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    (async () => {
      const allProgress = await getAllCardProgress();
      const progressMap = new Map(allProgress.map((p) => [p.cardId, p]));

      const dueCards = grammarCards.filter((c) => isDue(progressMap.get(c.id)));
      const flashcards = shuffleArray(dueCards).map(grammarToFlashcard);

      setCards(flashcards.length > 0 ? flashcards : shuffleArray(grammarCards).map(grammarToFlashcard));
      setLoading(false);
    })();
  }, [grammarCards]);

  const handleRate = useCallback(
    async (rating: number) => {
      const card = cards[currentIndex];
      if (!card) return;

      const existing = await getCardProgress(card.id);
      const update = calculateNextReview(rating, existing);

      const progress: CardProgress = {
        cardId: card.id,
        cardType: 'grammar',
        ...update,
      };

      await saveCardProgress(progress);
      dispatch({ type: 'INCREMENT_REVIEWED', isNew: !existing, rating, isGrammar: true });

      const today = getToday();
      if (state.settings.lastActiveDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const isConsecutive = state.settings.lastActiveDate === yesterday.toISOString().split('T')[0];
        dispatch({
          type: 'UPDATE_SETTINGS',
          settings: {
            lastActiveDate: today,
            streak: isConsecutive ? state.settings.streak + 1 : 1,
          },
        });
      }

      if (currentIndex + 1 >= cards.length) {
        setCompleted(true);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [cards, currentIndex, dispatch, state.settings]
  );

  return {
    cards,
    currentCard: cards[currentIndex],
    currentIndex: currentIndex + 1,
    total: cards.length,
    loading,
    completed,
    handleRate,
  };
}

export function useMasteredCount() {
  const { state } = useAppContext();
  const [vocabMastered, setVocabMastered] = useState(0);
  const [grammarMastered, setGrammarMastered] = useState(0);

  const levelVocabIds = useMemo(
    () => new Set(vocabulary.filter(w => w.level === state.settings.currentLevel).map(w => w.id)),
    [state.settings.currentLevel]
  );
  const levelGrammarIds = useMemo(
    () => new Set(allGrammarCards.filter(c => c.level === state.settings.currentLevel).map(c => c.id)),
    [state.settings.currentLevel]
  );

  const refresh = useCallback(async () => {
    const all = await getAllCardProgress();
    let vm = 0, gm = 0;
    for (const p of all) {
      if (isMastered(p)) {
        if (p.cardType === 'vocab' && levelVocabIds.has(p.cardId)) vm++;
        else if (p.cardType === 'grammar' && levelGrammarIds.has(p.cardId)) gm++;
      }
    }
    setVocabMastered(vm);
    setGrammarMastered(gm);
  }, [levelVocabIds, levelGrammarIds]);

  useEffect(() => { refresh(); }, [refresh]);

  return { vocabMastered, grammarMastered, refresh };
}
