import { openDB, type IDBPDatabase } from 'idb';
import type { CardProgress, DailySession, UserSettings } from '../store/types';

const DB_NAME = 'romanmeister';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDB() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('cardProgress')) {
          db.createObjectStore('cardProgress', { keyPath: 'cardId' });
        }
        if (!db.objectStoreNames.contains('dailySessions')) {
          db.createObjectStore('dailySessions', { keyPath: 'date' });
        }
        if (!db.objectStoreNames.contains('settings')) {
          db.createObjectStore('settings', { keyPath: 'id' });
        }
      },
    });
  }
  return dbPromise;
}

export const defaultSettings: UserSettings = {
  dailyGoal: 100,
  notificationsEnabled: false,
  notificationTime: '09:00',
  cardDirection: 'mixed',
  streak: 0,
  lastActiveDate: '',
};

export async function getSettings(): Promise<UserSettings> {
  const db = await getDB();
  const stored = await db.get('settings', 'user');
  return stored ? (stored.data as UserSettings) : { ...defaultSettings };
}

export async function saveSettings(settings: UserSettings): Promise<void> {
  const db = await getDB();
  await db.put('settings', { id: 'user', data: settings });
}

export async function getCardProgress(cardId: string): Promise<CardProgress | undefined> {
  const db = await getDB();
  return db.get('cardProgress', cardId);
}

export async function getAllCardProgress(): Promise<CardProgress[]> {
  const db = await getDB();
  return db.getAll('cardProgress');
}

export async function saveCardProgress(progress: CardProgress): Promise<void> {
  const db = await getDB();
  await db.put('cardProgress', progress);
}

export async function getDailySession(date: string): Promise<DailySession | undefined> {
  const db = await getDB();
  return db.get('dailySessions', date);
}

export async function saveDailySession(session: DailySession): Promise<void> {
  const db = await getDB();
  await db.put('dailySessions', session);
}

export async function getAllDailySessions(): Promise<DailySession[]> {
  const db = await getDB();
  return db.getAll('dailySessions');
}

export async function clearAllData(): Promise<void> {
  const db = await getDB();
  await db.clear('cardProgress');
  await db.clear('dailySessions');
  await db.clear('settings');
}
