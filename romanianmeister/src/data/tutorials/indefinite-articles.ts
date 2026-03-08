import type { GrammarTutorial } from '../../store/types';

const indefiniteArticlesTutorial: GrammarTutorial = {
  topicId: 'indefinite-articles',
  title: 'Indefinite Articles: Un, O, Niște',
  introduction:
    'Indefinite articles in Romanian work similarly to "a/an" and "some" in English. Romanian uses "un" for masculine and neuter singular nouns, "o" for feminine singular nouns, and "niște" for all plural nouns regardless of gender.',
  sections: [
    {
      id: 'what-are-indefinite-articles',
      title: 'What Are Indefinite Articles?',
      blocks: [
        {
          type: 'rule',
          title: 'Indefinite = Non-specific',
          content:
            'Indefinite articles introduce a noun that is not specific or being mentioned for the first time. In English, these are "a," "an," and "some." In Romanian, indefinite articles are separate words placed BEFORE the noun — unlike definite articles, which are attached to the end.',
        },
        {
          type: 'table',
          headers: ['Gender', 'Singular', 'Plural'],
          rows: [
            ['Masculine', 'un', 'niște'],
            ['Feminine', 'o', 'niște'],
            ['Neuter', 'un', 'niște'],
          ],
          caption: 'Romanian indefinite articles by gender and number',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Notice that "niște" is the same for all genders in the plural. This makes plurals simpler! Also note that neuter nouns use "un" (like masculine) in the singular.',
        },
      ],
    },
    {
      id: 'un-masculine-neuter',
      title: '"Un" for Masculine & Neuter',
      blocks: [
        {
          type: 'text',
          content:
            'The article "un" is used before masculine and neuter singular nouns. Since neuter nouns behave like masculine in the singular, they share the same indefinite article.',
        },
        {
          type: 'example',
          romanian: 'Un băiat joacă fotbal.',
          english: 'A boy plays football.',
          highlights: [
            { text: 'Un', role: 'article' },
            { text: 'băiat', role: 'subject' },
            { text: 'joacă', role: 'verb' },
            { text: 'fotbal', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Am un caiet nou.',
          english: 'I have a new notebook.',
          highlights: [
            { text: 'Am', role: 'verb' },
            { text: 'un', role: 'article' },
            { text: 'caiet', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Un câine aleargă în parc.',
          english: 'A dog runs in the park.',
          highlights: [
            { text: 'Un', role: 'article' },
            { text: 'câine', role: 'subject' },
            { text: 'aleargă', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'o-feminine',
      title: '"O" for Feminine',
      blocks: [
        {
          type: 'text',
          content:
            'The article "o" is used before feminine singular nouns. Most nouns ending in -ă or -e (when feminine) take "o."',
        },
        {
          type: 'example',
          romanian: 'O fată cântă o melodie.',
          english: 'A girl sings a song.',
          highlights: [
            { text: 'O', role: 'article' },
            { text: 'fată', role: 'subject' },
            { text: 'cântă', role: 'verb' },
            { text: 'o melodie', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Vreau o cafea, te rog.',
          english: 'I want a coffee, please.',
          highlights: [
            { text: 'Vreau', role: 'verb' },
            { text: 'o', role: 'article' },
            { text: 'cafea', role: 'object' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'Masculine/Neuter (un)',
            items: ['un om (a man)', 'un scaun (a chair)', 'un copil (a child)', 'un telefon (a phone)'],
          },
          right: {
            title: 'Feminine (o)',
            items: ['o femeie (a woman)', 'o masă (a table)', 'o carte (a book)', 'o zi (a day)'],
          },
        },
      ],
    },
    {
      id: 'niste-plural',
      title: '"Niște" for Plurals',
      blocks: [
        {
          type: 'rule',
          title: 'One Word for All Plural Genders',
          content:
            '"Niște" means "some" and is used before all plural nouns, regardless of gender. It is optional and often omitted in casual speech, but it is useful for indicating an unspecified quantity.',
        },
        {
          type: 'example',
          romanian: 'Niște copii se joacă afară.',
          english: 'Some children are playing outside.',
          highlights: [
            { text: 'Niște', role: 'article' },
            { text: 'copii', role: 'subject' },
            { text: 'se joacă', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Am cumpărat niște mere.',
          english: 'I bought some apples.',
          highlights: [
            { text: 'Am cumpărat', role: 'verb' },
            { text: 'niște', role: 'article' },
            { text: 'mere', role: 'object' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Unlike "un" and "o," which are almost always used, "niște" can be dropped. "Am mere" (I have apples) and "Am niște mere" (I have some apples) are both correct. Use "niște" when you want to emphasize the indefinite quantity.',
        },
      ],
    },
  ],
};

export default indefiniteArticlesTutorial;
