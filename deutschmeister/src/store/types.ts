export interface VocabWord {
  id: string;
  german: string;
  english: string;
  category: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'other';
  gender?: 'm' | 'f' | 'n';
  plural?: string;
  exampleDE?: string;
  exampleEN?: string;
}

export interface GrammarCard {
  id: string;
  topicId: string;
  topicName: string;
  question: string;
  answer: string;
  explanation: string;
}

export interface CardProgress {
  cardId: string;
  cardType: 'vocab' | 'grammar';
  lastRating: number;
  timesReviewed: number;
  nextReviewDate: string;
  easeFactor: number;
  interval: number;
  lastReviewedAt: string;
}

export interface DailySession {
  date: string;
  wordsReviewed: number;
  wordsNew: number;
  grammarReviewed: number;
  totalCards: number;
  ratings: number[];
}

export interface UserSettings {
  dailyGoal: number;
  notificationsEnabled: boolean;
  notificationTime: string;
  cardDirection: 'de-en' | 'en-de' | 'mixed';
  streak: number;
  lastActiveDate: string;
}

export type CardDirection = 'de-en' | 'en-de';

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
  direction: CardDirection;
  meta: {
    partOfSpeech?: string;
    gender?: string;
    example?: string;
    topicName?: string;
    explanation?: string;
  };
}

export interface AppState {
  settings: UserSettings;
  todaySession: DailySession;
  totalMastered: number;
  totalWords: number;
  totalGrammar: number;
  grammarMastered: number;
}
