import type { GrammarTutorial } from '../../store/types';

const tutorial: GrammarTutorial = {
  topicId: 'negation',
  title: 'Negation: nicht vs. kein',
  introduction:
    'German uses two words for negation: "nicht" and "kein." Choosing the right one depends on what you are negating. This is one of the trickiest topics for beginners, but the rules are straightforward once you learn them.',
  sections: [
    {
      id: 'two-ways-to-negate',
      title: 'Two Ways to Negate',
      blocks: [
        {
          type: 'text',
          content:
            'Unlike English, which uses "not" and "no" somewhat interchangeably, German has strict rules about when to use "nicht" (not) and "kein" (no / not a). Mixing them up is one of the most common mistakes at the A1 level.',
        },
        {
          type: 'comparison',
          left: {
            title: 'nicht',
            items: [
              'Negates verbs',
              'Negates adjectives',
              'Negates adverbs',
              'Negates nouns with der/die/das',
              'Ich spiele nicht.',
            ],
          },
          right: {
            title: 'kein',
            items: [
              'Negates nouns with ein/eine/ein',
              'Negates nouns with no article',
              'Works like ein with endings',
              'Ich habe kein Auto.',
            ],
          },
        },
      ],
    },
    {
      id: 'when-to-use-kein',
      title: 'When to Use kein',
      blocks: [
        {
          type: 'rule',
          title: 'kein replaces ein',
          content:
            'Use "kein" when negating a noun that would have "ein," "eine," or no article in the positive sentence. "Kein" takes the same endings as "ein."',
        },
        {
          type: 'table',
          headers: ['Positive', 'Negative'],
          rows: [
            ['Ich habe ein Auto.', 'Ich habe kein Auto.'],
            ['Ich habe eine Katze.', 'Ich habe keine Katze.'],
            ['Ich habe ein Kind.', 'Ich habe kein Kind.'],
            ['Er trinkt Kaffee.', 'Er trinkt keinen Kaffee.'],
            ['Wir haben Geld.', 'Wir haben kein Geld.'],
          ],
          caption: 'ein → kein transformations',
          colorCoded: true,
        },
        {
          type: 'example',
          german: 'Ich habe kein Auto.',
          english: 'I do not have a car.',
          highlights: [{ text: 'kein', role: 'negation' }],
        },
        {
          type: 'example',
          german: 'Sie hat keine Geschwister.',
          english: 'She has no siblings.',
          highlights: [{ text: 'keine', role: 'negation' }],
        },
        {
          type: 'example',
          german: 'Wir haben keinen Hund.',
          english: 'We do not have a dog.',
          highlights: [{ text: 'keinen', role: 'negation' }],
        },
      ],
    },
    {
      id: 'when-to-use-nicht',
      title: 'When to Use nicht',
      blocks: [
        {
          type: 'rule',
          title: 'nicht for everything else',
          content:
            'Use "nicht" to negate verbs, adjectives, adverbs, and nouns that have a definite article (der, die, das) or a possessive pronoun (mein, dein, etc.).',
        },
        {
          type: 'text',
          content:
            'Placement of "nicht": It usually goes near the end of the sentence. When negating an adjective or adverb, "nicht" goes directly before that word.',
        },
        {
          type: 'example',
          german: 'Ich spiele nicht.',
          english: 'I am not playing.',
          highlights: [{ text: 'nicht', role: 'negation' }],
        },
        {
          type: 'example',
          german: 'Das ist nicht mein Buch.',
          english: 'That is not my book.',
          highlights: [{ text: 'nicht', role: 'negation' }],
        },
        {
          type: 'example',
          german: 'Er ist nicht groß.',
          english: 'He is not tall.',
          highlights: [{ text: 'nicht', role: 'negation' }],
        },
      ],
    },
    {
      id: 'decision-guide',
      title: 'Decision Guide',
      blocks: [
        {
          type: 'decision',
          question: 'Are you negating a noun?',
          yes: {
            answer: 'Noun negation',
            followUp: {
              question: 'Would it use ein/eine or no article in the positive sentence?',
              yes: {
                answer: 'Use kein/keine.',
                explanation: 'Replace ein/eine with kein/keine using the same endings.',
              },
              no: {
                answer: 'Use nicht.',
                explanation:
                  'The noun has a definite article (der/die/das) or a possessive, so use "nicht" before it.',
              },
            },
          },
          no: {
            answer: 'Use nicht.',
            explanation:
              'You are negating a verb, adjective, or adverb. Place "nicht" accordingly (usually at the end or before the adjective/adverb).',
          },
        },
      ],
    },
    {
      id: 'position-of-nicht',
      title: 'Position of nicht',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          content:
            '"Nicht" goes directly before the element it negates. Before an adjective: "Er ist nicht müde." Before a prepositional phrase: "Ich gehe nicht nach Hause." Before a specific noun: "Das ist nicht der Lehrer."',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'In simple sentences without a specific target, "nicht" usually goes at the very end: "Ich verstehe nicht." (I do not understand.)',
        },
      ],
    },
  ],
};

export default tutorial;
