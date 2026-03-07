import { getRandomQuote } from '../data/quotes';

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  const result = await Notification.requestPermission();
  return result === 'granted';
}

export function scheduleNotification(time: string) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const [hours, minutes] = time.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const delay = target.getTime() - now.getTime();

  setTimeout(() => {
    sendMotivationalNotification();
    // Schedule next day
    setInterval(() => sendMotivationalNotification(), 24 * 60 * 60 * 1000);
  }, delay);
}

export function sendMotivationalNotification() {
  if (Notification.permission !== 'granted') return;
  const quote = getRandomQuote();
  new Notification('DeutschMeister', {
    body: `${quote.de}\n${quote.en}`,
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    tag: 'daily-motivation',
  });
}
