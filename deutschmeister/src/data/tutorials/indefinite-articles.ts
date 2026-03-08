import type { GrammarTutorial } from '../../store/types';

const indefiniteArticlesTutorial: GrammarTutorial = {
  topicId: 'indefinite-articles',
  title: 'Indefinite & Negative Articles',
  introduction:
    'Just like English has "a/an" alongside "the", German uses indefinite articles (ein, eine) alongside definite articles (der, die, das). German also has a negative article "kein" that is used to negate nouns.',
  sections: [
    {
      id: 'definite-vs-indefinite',
      title: 'Definite vs. Indefinite',
      blocks: [
        {
          type: 'rule',
          title: 'When to Use ein/eine',
          content:
            'Use the indefinite article (ein/eine) when referring to something nonspecific or mentioned for the first time. Use the definite article (der/die/das) when referring to something specific, already known, or previously mentioned. "Ein" is used for masculine and neuter nouns; "eine" is used for feminine nouns.',
        },
        {
          type: 'comparison',
          left: {
            title: 'Definite (the)',
            items: [
              'der Mann — the man',
              'die Frau — the woman',
              'das Kind — the child',
            ],
          },
          right: {
            title: 'Indefinite (a/an)',
            items: [
              'ein Mann — a man',
              'eine Frau — a woman',
              'ein Kind — a child',
            ],
          },
        },
      ],
    },
    {
      id: 'indefinite-articles-table',
      title: 'The Indefinite Articles',
      blocks: [
        {
          type: 'table',
          headers: ['Gender', 'Definite', 'Indefinite', 'Example'],
          rows: [
            ['Masculine', 'der', 'ein', 'ein Tisch (a table)'],
            ['Feminine', 'die', 'eine', 'eine Lampe (a lamp)'],
            ['Neuter', 'das', 'ein', 'ein Buch (a book)'],
          ],
          caption: 'Definite and indefinite articles by gender',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Notice that masculine and neuter share the same indefinite article "ein". You can only tell them apart by context or by knowing the noun\'s gender.',
        },
      ],
    },
    {
      id: 'negative-kein',
      title: 'Negative with kein',
      blocks: [
        {
          type: 'rule',
          title: 'Negating Nouns with kein',
          content:
            'To negate a noun in German, use "kein" (not a / no). "Kein" follows the same pattern as "ein": "kein" for masculine and neuter, "keine" for feminine. It replaces the indefinite article in negative sentences. "Kein" is also used to negate nouns that have no article.',
        },
        {
          type: 'table',
          headers: ['Gender', 'ein (a)', 'kein (not a / no)', 'Example'],
          rows: [
            ['Masculine', 'ein', 'kein', 'Das ist kein Tisch. (That is not a table.)'],
            ['Feminine', 'eine', 'keine', 'Das ist keine Lampe. (That is not a lamp.)'],
            ['Neuter', 'ein', 'kein', 'Das ist kein Buch. (That is not a book.)'],
            ['Plural', '—', 'keine', 'Das sind keine Bücher. (Those are not books.)'],
          ],
          caption: 'ein vs. kein across all genders',
          colorCoded: true,
        },
      ],
    },
    {
      id: 'examples',
      title: 'Examples',
      blocks: [
        {
          type: 'example',
          german: 'Das ist der Hund. → Das ist ein Hund. → Das ist kein Hund.',
          english: 'That is the dog. → That is a dog. → That is not a dog.',
          highlights: [
            { text: 'der', role: 'article' },
            { text: 'ein', role: 'article' },
            { text: 'kein', role: 'negation' },
          ],
        },
        {
          type: 'example',
          german: 'Ich habe eine Katze.',
          english: 'I have a cat.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'habe', role: 'verb' },
            { text: 'eine', role: 'article' },
            { text: 'Katze', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Er hat kein Auto.',
          english: 'He does not have a car.',
          highlights: [
            { text: 'Er', role: 'subject' },
            { text: 'hat', role: 'verb' },
            { text: 'kein', role: 'negation' },
            { text: 'Auto', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Wir haben keine Kinder.',
          english: 'We have no children.',
          highlights: [
            { text: 'Wir', role: 'subject' },
            { text: 'haben', role: 'verb' },
            { text: 'keine', role: 'negation' },
            { text: 'Kinder', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'key-difference',
      title: 'Key Difference',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Use "nicht" to negate verbs and adjectives (Ich singe nicht = I don\'t sing), but use "kein" to negate nouns (Ich habe kein Geld = I have no money). If the noun would take "ein/eine" in the positive sentence, use "kein/keine" in the negative.',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Unlike English, you cannot say "nicht ein" — you must always use "kein" to negate a noun. "Ich habe nicht ein Buch" is incorrect; say "Ich habe kein Buch" instead.',
        },
      ],
    },
  ],
};

export default indefiniteArticlesTutorial;
