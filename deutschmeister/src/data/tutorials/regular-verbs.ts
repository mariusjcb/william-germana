import type { GrammarTutorial } from '../../store/types';

const regularVerbsTutorial: GrammarTutorial = {
  topicId: 'regular-verbs',
  title: 'Present Tense — Regular Verbs',
  introduction:
    'Regular (weak) verbs in German follow a predictable conjugation pattern in the present tense. Once you learn the endings, you can conjugate hundreds of verbs. The key is to find the verb stem and add the correct ending for each pronoun.',
  sections: [
    {
      id: 'how-conjugation-works',
      title: 'How Conjugation Works',
      blocks: [
        {
          type: 'rule',
          title: 'Stem + Ending',
          content:
            'To conjugate a regular verb in the present tense, remove the "-en" ending from the infinitive to get the stem, then add the appropriate personal ending. For example, "machen" (to do/make) has the stem "mach-". Each pronoun requires a specific ending.',
        },
        {
          type: 'diagram',
          caption: 'Infinitive → Stem + Ending',
          slots: [
            { position: 1, label: 'Infinitive', content: 'machen', role: 'other' },
            { position: 2, label: 'Stem', content: 'mach-', role: 'verb' },
            { position: 3, label: 'Ending', content: '-e, -st, -t, -en, -t, -en', role: 'other' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'A few infinitives end in "-n" instead of "-en" (e.g., wandern, sammeln). For these, just remove the final "-n" to get the stem: wander-, sammel-.',
        },
      ],
    },
    {
      id: 'conjugation-table',
      title: 'The Conjugation Table',
      blocks: [
        {
          type: 'table',
          headers: ['Pronoun', 'Ending', 'machen', 'spielen', 'lernen'],
          rows: [
            ['ich', '-e', 'mache', 'spiele', 'lerne'],
            ['du', '-st', 'machst', 'spielst', 'lernst'],
            ['er/sie/es', '-t', 'macht', 'spielt', 'lernt'],
            ['wir', '-en', 'machen', 'spielen', 'lernen'],
            ['ihr', '-t', 'macht', 'spielt', 'lernt'],
            ['sie/Sie', '-en', 'machen', 'spielen', 'lernen'],
          ],
          caption: 'Present tense conjugation of regular verbs',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Notice that the "wir" and "sie/Sie" forms are identical to the infinitive. The "er/sie/es" and "ihr" forms also share the same ending (-t). This means you only need to remember four distinct endings: -e, -st, -t, -en.',
        },
      ],
    },
    {
      id: 'step-by-step',
      title: 'Step by Step',
      blocks: [
        {
          type: 'text',
          content:
            'Follow these three steps for any regular verb: (1) Take the infinitive, e.g. "spielen". (2) Remove "-en" to find the stem: "spiel-". (3) Add the ending that matches the subject pronoun. Let\'s see this in full sentences.',
        },
        {
          type: 'example',
          german: 'Ich spiele Fußball.',
          english: 'I play soccer.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'spiele', role: 'verb' },
            { text: 'Fußball', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Du lernst Deutsch.',
          english: 'You are learning German.',
          highlights: [
            { text: 'Du', role: 'subject' },
            { text: 'lernst', role: 'verb' },
            { text: 'Deutsch', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Wir machen die Hausaufgaben.',
          english: 'We are doing the homework.',
          highlights: [
            { text: 'Wir', role: 'subject' },
            { text: 'machen', role: 'verb' },
            { text: 'die', role: 'article' },
            { text: 'Hausaufgaben', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'common-regular-verbs',
      title: 'Common Regular Verbs',
      blocks: [
        {
          type: 'text',
          content:
            'Here are some of the most frequently used regular verbs at the A1 level. Practice conjugating each one with all six pronoun forms.',
        },
        {
          type: 'table',
          headers: ['Infinitive', 'English', 'Example'],
          rows: [
            ['machen', 'to do / to make', 'Ich mache Kaffee.'],
            ['spielen', 'to play', 'Er spielt Gitarre.'],
            ['lernen', 'to learn', 'Wir lernen Deutsch.'],
            ['wohnen', 'to live (reside)', 'Sie wohnt in München.'],
            ['kaufen', 'to buy', 'Du kaufst ein Buch.'],
            ['hören', 'to hear / to listen', 'Ich höre Musik.'],
            ['fragen', 'to ask', 'Er fragt den Lehrer.'],
            ['sagen', 'to say', 'Sie sagen „Hallo".'],
            ['kochen', 'to cook', 'Wir kochen Suppe.'],
            ['suchen', 'to search / to look for', 'Ich suche meine Tasche.'],
          ],
          caption: 'Common regular verbs for A1 learners',
          colorCoded: false,
        },
      ],
    },
    {
      id: 'watch-out',
      title: 'Watch Out',
      blocks: [
        {
          type: 'callout',
          variant: 'warning',
          content:
            'When a verb stem ends in -t or -d (e.g., arbeiten → arbeit-, finden → find-), an extra -e- is inserted before the endings -st and -t for pronunciation. So it is "du arbeitest" (not "du arbeitst") and "er arbeitet" (not "er arbeitt").',
        },
        {
          type: 'table',
          headers: ['Pronoun', 'arbeiten', 'finden'],
          rows: [
            ['ich', 'arbeite', 'finde'],
            ['du', 'arbeitest', 'findest'],
            ['er/sie/es', 'arbeitet', 'findet'],
            ['wir', 'arbeiten', 'finden'],
            ['ihr', 'arbeitet', 'findet'],
            ['sie/Sie', 'arbeiten', 'finden'],
          ],
          caption: 'Verbs with stems ending in -t or -d need an extra -e-',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'The same extra -e- rule applies to stems ending in -chn, -ffn, or -gn, such as "rechnen" (to calculate): du rechnest, er rechnet.',
        },
      ],
    },
  ],
};

export default regularVerbsTutorial;
