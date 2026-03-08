import type { GrammarTutorial } from '../../store/types';

const nominativeCase: GrammarTutorial = {
  topicId: 'nominative-case',
  title: 'Nominative Case',
  introduction:
    'The nominative case (der Nominativ) is the most basic case in German. It marks the subject of the sentence — the person or thing performing the action. If you can ask "Wer?" (Who?) or "Was?" (What?) and the answer is that noun, it is in the nominative case.',
  sections: [
    {
      id: 'what-is-nominative',
      title: 'What is Nominative?',
      blocks: [
        {
          type: 'rule',
          title: 'The Subject Case',
          content:
            'The nominative case identifies the subject of a sentence — the person or thing that performs the action of the verb. To find the subject, ask "Wer?" (Who?) for people or "Was?" (What?) for things. The answer is always in the nominative case.',
        },
        {
          type: 'text',
          content:
            'Every German sentence has a subject in the nominative case. It is the "default" form of a noun — the form you find in the dictionary. When you learn a new noun, you learn it in the nominative: "der Tisch" (the table), "die Lampe" (the lamp), "das Buch" (the book).',
        },
        {
          type: 'example',
          german: 'Der Hund schläft.',
          english: 'The dog is sleeping.',
          highlights: [
            { text: 'Der Hund', role: 'subject' },
            { text: 'schläft', role: 'verb' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Ask: "Wer schläft?" → "Der Hund." That is the subject, so it is in the nominative case.',
        },
      ],
    },
    {
      id: 'nominative-articles',
      title: 'Nominative Articles',
      blocks: [
        {
          type: 'text',
          content:
            'In the nominative case, the articles take their base (dictionary) forms. You need to know three types: definite (the), indefinite (a/an), and negative (no/not a).',
        },
        {
          type: 'table',
          headers: ['Gender', 'Definite', 'Indefinite', 'Negative'],
          rows: [
            ['Masculine', 'der', 'ein', 'kein'],
            ['Feminine', 'die', 'eine', 'keine'],
            ['Neuter', 'das', 'ein', 'kein'],
            ['Plural', 'die', '—', 'keine'],
          ],
          caption: 'Nominative case articles',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'There is no indefinite article for plural nouns in German, just like English has no plural "a." You simply say "Bücher" (books), not "eine Bücher."',
        },
      ],
    },
    {
      id: 'finding-the-subject',
      title: 'Finding the Subject',
      blocks: [
        {
          type: 'text',
          content:
            'To identify the subject of a German sentence, ask "Wer?" (Who?) or "Was?" (What?) before the verb. The noun phrase that answers this question is the subject and must be in the nominative case. The subject also determines the verb conjugation.',
        },
        {
          type: 'example',
          german: 'Der Mann trinkt Kaffee.',
          english: 'The man drinks coffee.',
          highlights: [
            { text: 'Der Mann', role: 'subject' },
            { text: 'trinkt', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Eine Frau liest ein Buch.',
          english: 'A woman reads a book.',
          highlights: [
            { text: 'Eine Frau', role: 'subject' },
            { text: 'liest', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Die Kinder spielen.',
          english: 'The children are playing.',
          highlights: [
            { text: 'Die Kinder', role: 'subject' },
            { text: 'spielen', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'key-point',
      title: 'Key Point',
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          content:
            'The nominative is the "default" case in German. Whenever you look up a noun in a dictionary, the article shown (der, die, das) is the nominative form. All other cases change from this baseline.',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The subject always matches the verb conjugation. If the subject is singular third-person (er/sie/es), the verb gets a "-t" ending. If the subject is plural (wir/sie), the verb keeps the "-en" ending. Use this to double-check your subjects!',
        },
        {
          type: 'text',
          content:
            'The nominative case is also used after the verb "sein" (to be). For example: "Er ist ein guter Lehrer" — both "er" and "ein guter Lehrer" are in the nominative, because "sein" links them as equals rather than showing an action on an object.',
        },
      ],
    },
  ],
};

export default nominativeCase;
