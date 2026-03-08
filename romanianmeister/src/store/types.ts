export type Level = 'A1' | 'A2';

export interface VocabWord {
  id: string;
  romanian: string;
  english: string;
  category: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'other';
  level: Level;
  gender?: 'm' | 'f' | 'n';
  plural?: string;
  exampleRO?: string;
  exampleEN?: string;
}

export interface GrammarCard {
  id: string;
  topicId: string;
  topicName: string;
  level: Level;
  question: string;
  answer: string;
  explanation: string;
}

export interface GrammarTopic {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  level: Level;
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
  cardDirection: 'ro-en' | 'en-ro' | 'mixed';
  currentLevel: Level;
  streak: number;
  lastActiveDate: string;
}

export type CardDirection = 'ro-en' | 'en-ro';

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

// --- Grammar Tutorial Types ---

export type HighlightRole = 'subject' | 'verb' | 'object' | 'article' | 'prefix' | 'time' | 'negation';
export type DiagramRole = 'subject' | 'verb' | 'object' | 'time' | 'prefix' | 'other';

export interface ExampleHighlight {
  text: string;
  role: HighlightRole;
}

export interface DiagramSlot {
  position: number;
  label: string;
  content: string;
  role: DiagramRole;
}

export interface DecisionNode {
  answer: string;
  explanation?: string;
  followUp?: { question: string; yes: DecisionNode; no: DecisionNode };
}

export type TutorialBlock =
  | { type: 'text'; content: string }
  | { type: 'rule'; title: string; content: string }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string; colorCoded?: boolean }
  | { type: 'example'; romanian: string; english: string; highlights?: ExampleHighlight[] }
  | { type: 'diagram'; slots: DiagramSlot[]; caption?: string }
  | { type: 'decision'; question: string; yes: DecisionNode; no: DecisionNode }
  | { type: 'callout'; variant: 'tip' | 'warning' | 'info'; content: string }
  | { type: 'comparison'; left: { title: string; items: string[] }; right: { title: string; items: string[] } };

export interface TutorialSection {
  id: string;
  title: string;
  blocks: TutorialBlock[];
}

export interface GrammarTutorial {
  topicId: string;
  title: string;
  introduction: string;
  sections: TutorialSection[];
}
