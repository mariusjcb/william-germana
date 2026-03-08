import type { GrammarTutorial } from '../../store/types';

const tutorial: GrammarTutorial = {
  topicId: 'possessive-pronouns',
  title: 'Possessive Pronouns',
  introduction:
    'Possessive pronouns (Possessivpronomen) show ownership — "my book," "your house," "his cat." In German, they change their endings based on the gender, number, and case of the noun they describe.',
  sections: [
    {
      id: 'the-possessive-pronouns',
      title: 'The Possessive Pronouns',
      blocks: [
        {
          type: 'text',
          content:
            'Each personal pronoun has a corresponding possessive form. These base forms are used before masculine and neuter nouns in the nominative case. Endings are added depending on gender, number, and case.',
        },
        {
          type: 'table',
          headers: ['Person', 'German', 'English'],
          rows: [
            ['ich', 'mein', 'my'],
            ['du', 'dein', 'your (informal)'],
            ['er', 'sein', 'his'],
            ['sie', 'ihr', 'her'],
            ['es', 'sein', 'its'],
            ['wir', 'unser', 'our'],
            ['ihr', 'euer', 'your (plural)'],
            ['sie', 'ihr', 'their'],
            ['Sie', 'Ihr', 'your (formal)'],
          ],
          caption: 'German possessive pronouns',
        },
      ],
    },
    {
      id: 'endings-follow-ein-words',
      title: 'Endings Follow ein-Words',
      blocks: [
        {
          type: 'rule',
          title: 'Same endings as ein/kein',
          content:
            'Possessive pronouns belong to the "ein-word" family. They take the exact same endings as "ein" and "kein." If you know the ein-endings, you know the possessive endings!',
        },
        {
          type: 'table',
          headers: ['Gender / Case', 'Ending', 'Example'],
          rows: [
            ['Masculine (nom.)', 'no ending', 'mein Hund'],
            ['Feminine (nom.)', '-e', 'meine Katze'],
            ['Neuter (nom.)', 'no ending', 'mein Buch'],
            ['Plural (nom.)', '-e', 'meine Bücher'],
            ['Masculine (acc.)', '-en', 'meinen Hund'],
            ['Feminine (acc.)', '-e', 'meine Katze'],
            ['Neuter (acc.)', 'no ending', 'mein Buch'],
            ['Plural (acc.)', '-e', 'meine Bücher'],
          ],
          caption: 'Possessive endings in nominative and accusative',
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
          german: 'Das ist mein Buch.',
          english: 'That is my book.',
          highlights: [{ text: 'mein', role: 'article' }],
        },
        {
          type: 'example',
          german: 'Wo ist deine Tasche?',
          english: 'Where is your bag?',
          highlights: [{ text: 'deine', role: 'article' }],
        },
        {
          type: 'example',
          german: 'Sein Haus ist groß.',
          english: 'His house is big.',
          highlights: [{ text: 'Sein', role: 'article' }],
        },
        {
          type: 'example',
          german: 'Unsere Kinder spielen im Garten.',
          english: 'Our children are playing in the garden.',
          highlights: [{ text: 'Unsere', role: 'article' }],
        },
      ],
    },
    {
      id: 'remember',
      title: 'Remember',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            '"ihr" can mean both "her" and "their" — context tells you which one. "Ihr Hund ist süß" could mean "Her dog is cute" or "Their dog is cute." Look at the surrounding sentences for clues.',
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'The formal "Ihr" (your) is always capitalized, even in the middle of a sentence: "Ist das Ihr Auto?" This helps distinguish it from "ihr" (her/their).',
        },
      ],
    },
  ],
};

export default tutorial;
