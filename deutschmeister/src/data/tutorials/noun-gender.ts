import type { GrammarTutorial } from '../../store/types';

const nounGenderTutorial: GrammarTutorial = {
  topicId: 'noun-gender',
  title: 'Noun Gender & Articles',
  introduction:
    'In German, every noun has a grammatical gender: masculine (der), feminine (die), or neuter (das). Unlike English, gender often has no logical connection to meaning, so you must memorize the article with each noun.',
  sections: [
    {
      id: 'three-genders',
      title: 'The Three Genders',
      blocks: [
        {
          type: 'rule',
          title: 'Three Genders, Three Articles',
          content:
            'German has three definite articles that correspond to grammatical gender: "der" for masculine nouns, "die" for feminine nouns, and "das" for neuter nouns. The article is an essential part of the noun and must be learned together with it.',
        },
        {
          type: 'table',
          headers: ['Article', 'Gender', 'Example Nouns'],
          rows: [
            ['der', 'Masculine (maskulin)', 'der Tisch, der Stuhl, der Mann, der Hund, der Apfel'],
            ['die', 'Feminine (feminin)', 'die Lampe, die Frau, die Katze, die Blume, die Schule'],
            ['das', 'Neuter (neutrum)', 'das Buch, das Kind, das Haus, das Auto, das Bild'],
          ],
          caption: 'The three German genders with their definite articles',
          colorCoded: true,
        },
      ],
    },
    {
      id: 'gender-hint-patterns',
      title: 'Gender Hint Patterns',
      blocks: [
        {
          type: 'text',
          content:
            'While there is no single rule that covers every noun, certain word endings strongly predict gender. Learning these patterns can help you guess the correct article for unfamiliar nouns.',
        },
        {
          type: 'table',
          headers: ['Ending', 'Gender', 'Examples'],
          rows: [
            ['-ung', 'die (feminine)', 'die Zeitung, die Wohnung, die Meinung'],
            ['-keit', 'die (feminine)', 'die Möglichkeit, die Freundlichkeit'],
            ['-heit', 'die (feminine)', 'die Freiheit, die Gesundheit, die Schönheit'],
            ['-tion', 'die (feminine)', 'die Nation, die Situation, die Lektion'],
            ['-ment', 'das (neuter)', 'das Instrument, das Dokument, das Moment'],
            ['-chen', 'das (neuter)', 'das Mädchen, das Brötchen, das Häuschen'],
            ['-lein', 'das (neuter)', 'das Büchlein, das Fräulein, das Vöglein'],
            ['-er', 'often der (masculine)', 'der Lehrer, der Computer, der Finger'],
            ['-ismus', 'der (masculine)', 'der Tourismus, der Optimismus, der Realismus'],
            ['-ling', 'der (masculine)', 'der Frühling, der Schmetterling, der Lehrling'],
          ],
          caption: 'Common noun endings and the gender they typically indicate',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'These patterns cover many nouns, but exceptions exist. For example, "der Moment" (the moment) is masculine even though -ment is usually neuter. Always double-check when in doubt!',
        },
      ],
    },
    {
      id: 'examples-in-context',
      title: 'Examples in Context',
      blocks: [
        {
          type: 'example',
          german: 'Der Tisch ist groß.',
          english: 'The table is big.',
          highlights: [
            { text: 'Der', role: 'article' },
            { text: 'Tisch', role: 'subject' },
            { text: 'ist', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Die Blume ist schön.',
          english: 'The flower is beautiful.',
          highlights: [
            { text: 'Die', role: 'article' },
            { text: 'Blume', role: 'subject' },
            { text: 'ist', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Das Kind spielt im Garten.',
          english: 'The child plays in the garden.',
          highlights: [
            { text: 'Das', role: 'article' },
            { text: 'Kind', role: 'subject' },
            { text: 'spielt', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Die Zeitung liegt auf dem Tisch.',
          english: 'The newspaper is on the table.',
          highlights: [
            { text: 'Die', role: 'article' },
            { text: 'Zeitung', role: 'subject' },
            { text: 'liegt', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'remember',
      title: 'Remember!',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Always learn a noun together with its article! Instead of memorizing "Tisch = table", learn "der Tisch = the table". This habit will save you countless mistakes later.',
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Good news: in the plural, all nouns use the article "die" regardless of their singular gender. Der Tisch → die Tische, das Kind → die Kinder, die Blume → die Blumen.',
        },
      ],
    },
  ],
};

export default nounGenderTutorial;
