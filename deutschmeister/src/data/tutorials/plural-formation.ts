import type { GrammarTutorial } from '../../store/types';

const pluralFormationTutorial: GrammarTutorial = {
  topicId: 'plural-formation',
  title: 'Plural Formation',
  introduction:
    'German nouns form their plurals in several different ways. Unlike English, where most nouns simply add "-s", German has five main plural patterns. In the plural, all nouns use the article "die" regardless of gender.',
  sections: [
    {
      id: 'five-plural-patterns',
      title: 'Five Plural Patterns',
      blocks: [
        {
          type: 'text',
          content:
            'German plurals fall into five main patterns. Some patterns also add an umlaut (a → ä, o → ö, u → ü) to the stem vowel. There is no single rule that works for every noun, so learning the plural form alongside the singular is essential.',
        },
        {
          type: 'table',
          headers: ['Pattern', 'Change', 'Singular', 'Plural'],
          rows: [
            ['-e', 'Add -e (sometimes with umlaut)', 'der Tisch', 'die Tische'],
            ['-en / -n', 'Add -en or -n', 'die Lampe', 'die Lampen'],
            ['-er', 'Add -er (often with umlaut)', 'das Kind', 'die Kinder'],
            ['-s', 'Add -s', 'das Auto', 'die Autos'],
            ['— (no ending)', 'No change or umlaut only', 'der Lehrer', 'die Lehrer'],
          ],
          caption: 'The five main German plural patterns',
          colorCoded: true,
        },
      ],
    },
    {
      id: 'pattern-guide',
      title: 'Pattern Guide',
      blocks: [
        {
          type: 'text',
          content:
            'Use this decision tree to help guess the plural pattern for unfamiliar nouns. Keep in mind that exceptions exist, so always verify with a dictionary.',
        },
        {
          type: 'decision',
          question: 'Does the noun end in -e?',
          yes: {
            answer: 'Add -n to form the plural.',
            explanation: 'die Lampe → die Lampen, die Straße → die Straßen, die Schule → die Schulen',
          },
          no: {
            answer: 'Check further...',
            followUp: {
              question: 'Is the noun feminine?',
              yes: {
                answer: 'Most feminine nouns add -en.',
                explanation: 'die Frau → die Frauen, die Zeitung → die Zeitungen, die Wohnung → die Wohnungen',
              },
              no: {
                answer: 'Check the noun type...',
                followUp: {
                  question: 'Is it a short, one-syllable neuter noun?',
                  yes: {
                    answer: 'Try -er (often with umlaut).',
                    explanation: 'das Kind → die Kinder, das Buch → die Bücher, das Haus → die Häuser',
                  },
                  no: {
                    answer: 'Try -e or no ending. Check a dictionary to be sure.',
                    explanation: 'der Tisch → die Tische, der Lehrer → die Lehrer, das Auto → die Autos',
                  },
                },
              },
            },
          },
        },
      ],
    },
    {
      id: 'examples-by-pattern',
      title: 'Examples by Pattern',
      blocks: [
        {
          type: 'example',
          german: 'Der Tisch ist neu. → Die Tische sind neu.',
          english: 'The table is new. → The tables are new.',
          highlights: [
            { text: 'Der', role: 'article' },
            { text: 'Tische', role: 'subject' },
            { text: 'Die', role: 'article' },
          ],
        },
        {
          type: 'example',
          german: 'Die Blume ist rot. → Die Blumen sind rot.',
          english: 'The flower is red. → The flowers are red.',
          highlights: [
            { text: 'Die', role: 'article' },
            { text: 'Blumen', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Das Kind spielt. → Die Kinder spielen.',
          english: 'The child plays. → The children play.',
          highlights: [
            { text: 'Das', role: 'article' },
            { text: 'Kinder', role: 'subject' },
            { text: 'spielen', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Das Auto ist schnell. → Die Autos sind schnell.',
          english: 'The car is fast. → The cars are fast.',
          highlights: [
            { text: 'Das', role: 'article' },
            { text: 'Autos', role: 'subject' },
            { text: 'Die', role: 'article' },
          ],
        },
        {
          type: 'example',
          german: 'Der Lehrer ist nett. → Die Lehrer sind nett.',
          english: 'The teacher is nice. → The teachers are nice.',
          highlights: [
            { text: 'Der', role: 'article' },
            { text: 'Lehrer', role: 'subject' },
            { text: 'Die', role: 'article' },
          ],
        },
      ],
    },
    {
      id: 'tips',
      title: 'Tips',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Feminine nouns are the most predictable: the vast majority form their plural with -n or -en. If you know a noun is feminine, -en is almost always a safe guess.',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'There are no completely reliable rules for all German plurals. Many common nouns are irregular. Always learn the plural form when you learn a new noun: der Tisch, -e (plural: Tische).',
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Dictionaries list the plural ending after the noun. For example: "Tisch, der; -e" means the plural is "Tische". A dash with an umlaut like "-̈er" means add -er and umlaut the stem vowel.',
        },
      ],
    },
  ],
};

export default pluralFormationTutorial;
