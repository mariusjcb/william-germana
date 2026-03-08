export const motivationalQuotes = [
  { ro: 'Exercițiul desăvârșește meșterul.', en: 'Practice makes perfect.' },
  { ro: 'Fiecare zi e un nou început.', en: 'Every day is a new beginning.' },
  { ro: 'Cine nu muncește, nu mănâncă.', en: 'He who does not work, does not eat.' },
  { ro: 'Fără muncă nu e nimic.', en: 'Without effort, there is nothing.' },
  { ro: 'Tot începutul e greu.', en: 'Every beginning is hard.' },
  { ro: 'Nimeni nu s-a născut învățat.', en: 'No one is born learned.' },
  { ro: 'Drumul este scopul.', en: 'The journey is the destination.' },
  { ro: 'Mic, dar de calitate.', en: 'Small but of quality.' },
  { ro: 'Cine se scoală de dimineață, departe ajunge.', en: 'The early bird catches the worm.' },
  { ro: 'Pas cu pas.', en: 'Step by step.' },
  { ro: 'Mai bine mai târziu decât niciodată.', en: 'Better late than never.' },
  { ro: 'Cunoașterea este putere.', en: 'Knowledge is power.' },
  { ro: 'Răbdarea e amară, dar rodul ei e dulce.', en: 'Patience is bitter, but its fruit is sweet.' },
  { ro: 'Nu se termină niciodată de învățat.', en: 'You never stop learning.' },
  { ro: 'Unde-i voință, e și putere.', en: 'Where there is a will, there is a way.' },
  { ro: 'Curajul stă la începutul faptei, fericirea la sfârșit.', en: 'Courage is at the beginning of action, happiness at the end.' },
  { ro: 'Cel mai bun moment e acum.', en: 'The best time is now.' },
  { ro: 'Câte una, pe rând.', en: 'One thing at a time.' },
  { ro: 'Orice călătorie începe cu un prim pas.', en: 'Every journey begins with a first step.' },
  { ro: 'Picătură cu picătură se umple paharul.', en: 'Drop by drop the glass fills up.' },
  { ro: 'Din greșeli se învață.', en: 'You learn from mistakes.' },
  { ro: 'Astăzi e o zi bună pentru a învăța.', en: 'Today is a good day to learn.' },
  { ro: 'Poți să reușești!', en: 'You can do it!' },
  { ro: 'Împreună suntem mai puternici.', en: 'Together we are stronger.' },
  { ro: 'Continuă tot așa!', en: 'Keep it up!' },
  { ro: 'Viața e frumoasă.', en: 'Life is beautiful.' },
  { ro: 'Nu renunța niciodată.', en: 'Never give up.' },
  { ro: 'A învăța e ca și cum ai înota contra curentului.', en: 'Learning is like swimming against the current.' },
  { ro: 'Lucrurile bune cer timp.', en: 'Good things take time.' },
  { ro: 'Cine îndrăznește, câștigă.', en: 'Who dares, wins.' },
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
