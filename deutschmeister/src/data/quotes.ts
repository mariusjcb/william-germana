export const motivationalQuotes = [
  { de: 'Übung macht den Meister.', en: 'Practice makes perfect.' },
  { de: 'Jeder Tag ist ein neuer Anfang.', en: 'Every day is a new beginning.' },
  { de: 'Wer rastet, der rostet.', en: 'If you rest, you rust.' },
  { de: 'Ohne Fleiß kein Preis.', en: 'No pain, no gain.' },
  { de: 'Aller Anfang ist schwer.', en: 'Every beginning is hard.' },
  { de: 'Es ist noch kein Meister vom Himmel gefallen.', en: 'No one is born a master.' },
  { de: 'Der Weg ist das Ziel.', en: 'The journey is the destination.' },
  { de: 'Klein, aber fein.', en: 'Small but fine.' },
  { de: 'Morgenstund hat Gold im Mund.', en: 'The early bird catches the worm.' },
  { de: 'Schritt für Schritt.', en: 'Step by step.' },
  { de: 'Besser spät als nie.', en: 'Better late than never.' },
  { de: 'Wissen ist Macht.', en: 'Knowledge is power.' },
  { de: 'Geduld bringt Rosen.', en: 'Patience brings roses.' },
  { de: 'Man lernt nie aus.', en: 'You never stop learning.' },
  { de: 'Wo ein Wille ist, ist auch ein Weg.', en: 'Where there is a will, there is a way.' },
  { de: 'Mut steht am Anfang des Handelns, Glück am Ende.', en: 'Courage is at the beginning of action, happiness at the end.' },
  { de: 'Die beste Zeit ist jetzt.', en: 'The best time is now.' },
  { de: 'Eins nach dem anderen.', en: 'One thing at a time.' },
  { de: 'Jede Reise beginnt mit einem ersten Schritt.', en: 'Every journey begins with a first step.' },
  { de: 'Steter Tropfen höhlt den Stein.', en: 'Constant dripping wears away the stone.' },
  { de: 'Aus Fehlern lernt man.', en: 'You learn from mistakes.' },
  { de: 'Heute ist ein guter Tag zum Lernen.', en: 'Today is a good day to learn.' },
  { de: 'Du schaffst das!', en: 'You can do it!' },
  { de: 'Zusammen sind wir stark.', en: 'Together we are strong.' },
  { de: 'Mach weiter so!', en: 'Keep it up!' },
  { de: 'Das Leben ist schön.', en: 'Life is beautiful.' },
  { de: 'Niemals aufgeben.', en: 'Never give up.' },
  { de: 'Lernen ist wie Rudern gegen den Strom.', en: 'Learning is like rowing against the current.' },
  { de: 'Gut Ding will Weile haben.', en: 'Good things take time.' },
  { de: 'Wer wagt, gewinnt.', en: 'Who dares, wins.' },
];

export function getRandomQuote() {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

export function getDailyQuote() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  return motivationalQuotes[dayOfYear % motivationalQuotes.length];
}
