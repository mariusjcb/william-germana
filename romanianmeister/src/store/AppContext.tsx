import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';
import type { AppState, UserSettings, DailySession } from './types';
import { getSettings, saveSettings, getDailySession, saveDailySession, defaultSettings } from '../utils/db';
import { getToday } from '../utils/spacedRepetition';

type Action =
  | { type: 'INIT'; settings: UserSettings; session: DailySession; totalMastered: number; grammarMastered: number }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<UserSettings> }
  | { type: 'UPDATE_SESSION'; session: Partial<DailySession> }
  | { type: 'SET_MASTERED'; totalMastered: number; grammarMastered: number }
  | { type: 'INCREMENT_REVIEWED'; isNew: boolean; rating: number; isGrammar?: boolean };

const emptySession: DailySession = {
  date: getToday(),
  wordsReviewed: 0,
  wordsNew: 0,
  grammarReviewed: 0,
  totalCards: 0,
  ratings: [],
};

const initialState: AppState = {
  settings: defaultSettings,
  todaySession: emptySession,
  totalMastered: 0,
  totalWords: 617,
  totalGrammar: 120,
  grammarMastered: 0,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        settings: action.settings,
        todaySession: action.session,
        totalMastered: action.totalMastered,
        grammarMastered: action.grammarMastered,
      };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.settings } };
    case 'UPDATE_SESSION':
      return { ...state, todaySession: { ...state.todaySession, ...action.session } };
    case 'SET_MASTERED':
      return { ...state, totalMastered: action.totalMastered, grammarMastered: action.grammarMastered };
    case 'INCREMENT_REVIEWED': {
      const session = { ...state.todaySession };
      if (action.isGrammar) {
        session.grammarReviewed += 1;
      } else {
        session.wordsReviewed += 1;
        if (action.isNew) session.wordsNew += 1;
      }
      session.totalCards += 1;
      session.ratings = [...session.ratings, action.rating];
      return { ...state, todaySession: session };
    }
    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  updateSettings: (settings: Partial<UserSettings>) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      const settings = await getSettings();
      const today = getToday();
      let session = await getDailySession(today);

      if (!session) {
        session = { ...emptySession, date: today };
      }

      // Calculate streak
      if (settings.lastActiveDate && settings.lastActiveDate !== today) {
        const lastDate = new Date(settings.lastActiveDate);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
          settings.streak = 0;
        }
      }

      dispatch({ type: 'INIT', settings, session, totalMastered: 0, grammarMastered: 0 });
    })();
  }, []);

  // Save session and settings on changes
  useEffect(() => {
    if (state.todaySession.date) {
      saveDailySession(state.todaySession);
    }
  }, [state.todaySession]);

  useEffect(() => {
    if (state.settings.lastActiveDate !== '') {
      saveSettings(state.settings);
    }
  }, [state.settings]);

  const updateSettings = (partial: Partial<UserSettings>) => {
    dispatch({ type: 'UPDATE_SETTINGS', settings: partial });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, updateSettings }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
