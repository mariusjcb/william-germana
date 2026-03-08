import type { GrammarTutorial } from '../../store/types';

const tutorial: GrammarTutorial = {
  topicId: 'questions',
  title: 'Yes/No & W-Questions',
  introduction:
    'German has two main question types: yes/no questions (Ja/Nein-Fragen) and W-questions (W-Fragen). Each type follows a specific word order pattern that you need to master.',
  sections: [
    {
      id: 'yes-no-questions',
      title: 'Yes/No Questions',
      blocks: [
        {
          type: 'rule',
          title: 'Verb First',
          content:
            'To form a yes/no question, put the conjugated verb in position 1 and the subject in position 2. The rest of the sentence follows normally.',
        },
        {
          type: 'diagram',
          caption: 'Verb – Subject – Object',
          slots: [
            { position: 1, label: 'Position 1', content: 'Spielst', role: 'verb' },
            { position: 2, label: 'Position 2', content: 'du', role: 'subject' },
            { position: 3, label: 'Position 3', content: 'Fußball?', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Spielst du Fußball?',
          english: 'Do you play football?',
          highlights: [
            { text: 'Spielst', role: 'verb' },
            { text: 'du', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Hast du einen Hund?',
          english: 'Do you have a dog?',
          highlights: [
            { text: 'Hast', role: 'verb' },
            { text: 'du', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Ist das dein Buch?',
          english: 'Is that your book?',
          highlights: [
            { text: 'Ist', role: 'verb' },
            { text: 'das', role: 'subject' },
          ],
        },
      ],
    },
    {
      id: 'w-questions',
      title: 'W-Questions',
      blocks: [
        {
          type: 'rule',
          title: 'W-Word + Verb + Subject',
          content:
            'W-questions start with a question word (W-Wort), followed by the verb in position 2, then the subject. The verb is still in position 2 — the W-word takes position 1.',
        },
        {
          type: 'diagram',
          caption: 'W-Word – Verb – Subject',
          slots: [
            { position: 1, label: 'Position 1', content: 'Wo', role: 'other' },
            { position: 2, label: 'Position 2', content: 'wohnst', role: 'verb' },
            { position: 3, label: 'Position 3', content: 'du?', role: 'subject' },
          ],
        },
        {
          type: 'table',
          headers: ['W-Word', 'English', 'Example Question'],
          rows: [
            ['wer', 'who', 'Wer ist das?'],
            ['was', 'what', 'Was machst du?'],
            ['wo', 'where', 'Wo wohnst du?'],
            ['wann', 'when', 'Wann kommst du?'],
            ['warum', 'why', 'Warum lernst du Deutsch?'],
            ['wie', 'how', 'Wie heißt du?'],
            ['woher', 'where from', 'Woher kommst du?'],
            ['wohin', 'where to', 'Wohin gehst du?'],
          ],
          caption: 'German question words',
        },
      ],
    },
    {
      id: 'examples',
      title: 'Examples',
      blocks: [
        {
          type: 'example',
          german: 'Wo wohnst du?',
          english: 'Where do you live?',
          highlights: [
            { text: 'Wo', role: 'object' },
            { text: 'wohnst', role: 'verb' },
            { text: 'du', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Trinkst du Kaffee?',
          english: 'Do you drink coffee?',
          highlights: [
            { text: 'Trinkst', role: 'verb' },
            { text: 'du', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Wann fährt der Zug?',
          english: 'When does the train leave?',
          highlights: [
            { text: 'Wann', role: 'time' },
            { text: 'fährt', role: 'verb' },
            { text: 'der Zug', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Kommst du morgen?',
          english: 'Are you coming tomorrow?',
          highlights: [
            { text: 'Kommst', role: 'verb' },
            { text: 'du', role: 'subject' },
          ],
        },
      ],
    },
    {
      id: 'comparing-structures',
      title: 'Comparing Structures',
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Yes/No Questions',
            items: [
              'Verb + Subject + ...',
              'Spielst du Fußball?',
              'Hast du Zeit?',
              'Answer: Ja / Nein',
            ],
          },
          right: {
            title: 'W-Questions',
            items: [
              'W-Word + Verb + Subject + ...',
              'Was spielst du?',
              'Wann hast du Zeit?',
              'Answer: specific information',
            ],
          },
        },
      ],
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes',
      blocks: [
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Do not forget to invert the subject and verb! In both question types, the verb always comes before the subject. Saying "Du spielst Fußball?" with rising intonation is understood in spoken German, but it is not grammatically correct.',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Use "wie viel" (how much) for uncountable things and "wie viele" (how many) for countable things. Example: "Wie viel kostet das?" (How much does that cost?) vs. "Wie viele Kinder hast du?" (How many children do you have?)',
        },
      ],
    },
  ],
};

export default tutorial;
