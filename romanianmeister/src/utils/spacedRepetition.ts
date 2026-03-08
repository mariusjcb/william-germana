import type { CardProgress } from '../store/types';

export function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

export function isDue(progress: CardProgress | undefined): boolean {
  if (!progress) return true;
  return progress.nextReviewDate <= getToday();
}

export function calculateNextReview(
  rating: number,
  existing?: CardProgress
): Pick<CardProgress, 'nextReviewDate' | 'easeFactor' | 'interval' | 'lastRating' | 'timesReviewed' | 'lastReviewedAt'> {
  const today = getToday();
  const prevEase = existing?.easeFactor ?? 2.5;
  const prevInterval = existing?.interval ?? 0;
  const timesReviewed = (existing?.timesReviewed ?? 0) + 1;

  let interval: number;
  let easeFactor: number;

  switch (rating) {
    case 1:
      interval = 0;
      easeFactor = Math.max(1.3, prevEase - 0.2);
      break;
    case 2:
      interval = 1;
      easeFactor = Math.max(1.3, prevEase - 0.1);
      break;
    case 3:
      interval = prevInterval === 0 ? 3 : Math.max(3, Math.round(prevInterval * 1.2));
      easeFactor = prevEase;
      break;
    case 4:
      interval = prevInterval === 0 ? 7 : Math.round(prevInterval * prevEase);
      easeFactor = Math.min(3.0, prevEase + 0.1);
      break;
    case 5:
      interval = prevInterval === 0 ? 14 : Math.round(prevInterval * prevEase * 1.3);
      easeFactor = Math.min(3.0, prevEase + 0.15);
      break;
    default:
      interval = 1;
      easeFactor = prevEase;
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);

  return {
    nextReviewDate: interval === 0 ? today : nextDate.toISOString().split('T')[0],
    easeFactor,
    interval,
    lastRating: rating,
    timesReviewed,
    lastReviewedAt: today,
  };
}

export function isMastered(progress: CardProgress | undefined): boolean {
  if (!progress) return false;
  return progress.lastRating >= 4 && progress.timesReviewed >= 2;
}
