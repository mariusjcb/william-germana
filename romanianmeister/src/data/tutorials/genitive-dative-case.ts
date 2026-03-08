import type { GrammarTutorial } from '../../store/types';

const genitiveDativeCaseTutorial: GrammarTutorial = {
  topicId: 'genitive-dative-case',
  title: 'Genitive-Dative Case',
  introduction:
    'In Romanian, the genitive and dative cases share the same noun forms, which is why they are often taught together. The genitive expresses possession ("the book of the student"), while the dative marks the indirect object. Nouns change their endings based on gender, number, and definiteness.',
  sections: [
    {
      id: 'genitive-articles',
      title: 'Genitive Articles & Possession',
      blocks: [
        {
          type: 'rule',
          title: 'Expressing Possession',
          content:
            'To express possession, Romanian changes the form of the possessor noun (genitive case). For feminine singular nouns, the definite article changes: -a becomes -ei. For masculine singular, -ul becomes -ului. The possessive article (al/a/ai/ale) links unattached possessors.',
        },
        {
          type: 'table',
          headers: ['Gender/Number', 'Nominative (def.)', 'Genitive-Dative (def.)', 'Example'],
          rows: [
            ['Masc. sg.', '-ul / -le', '-ului / -lui', 'băiatul → băiatului'],
            ['Fem. sg.', '-a', '-ei', 'fata → fetei'],
            ['Neuter sg.', '-ul / -le', '-ului / -lui', 'scaunul → scaunului'],
            ['Masc. pl.', '-ii / -i', '-ilor', 'băieții → băieților'],
            ['Fem. pl.', '-le', '-lor', 'fetele → fetelor'],
            ['Neuter pl.', '-le / -urile', '-lor / -urilor', 'scaunele → scaunelor'],
          ],
          caption: 'Genitive-dative noun endings by gender and number',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Cartea elevului este pe masă.',
          english: 'The student\'s book is on the table.',
          highlights: [
            { text: 'Cartea', role: 'subject' },
            { text: 'elevului', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Camera fetei este mare.',
          english: 'The girl\'s room is big.',
          highlights: [
            { text: 'Camera', role: 'subject' },
            { text: 'fetei', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'possessive-link',
      title: 'The Possessive Article al/a/ai/ale',
      blocks: [
        {
          type: 'text',
          content:
            'When the possessed noun does not have a definite article, or when the possessor stands alone, you need the possessive article (al, a, ai, ale). This article agrees with the possessed noun, not the possessor.',
        },
        {
          type: 'table',
          headers: ['Possessed Noun', 'Possessive Article', 'Example'],
          rows: [
            ['Masc. sg.', 'al', 'al meu (mine, m. sg.)'],
            ['Fem. sg.', 'a', 'a mea (mine, f. sg.)'],
            ['Masc. pl.', 'ai', 'ai mei (mine, m. pl.)'],
            ['Fem. pl.', 'ale', 'ale mele (mine, f. pl.)'],
          ],
          caption: 'Possessive article forms',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Câinele acesta este al vecinului.',
          english: 'This dog is the neighbor\'s.',
          highlights: [
            { text: 'al vecinului', role: 'object' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Think of "al/a/ai/ale" as a bridge between a noun and its possessor when they are not directly adjacent. It agrees in gender and number with the thing possessed.',
        },
      ],
    },
    {
      id: 'prepositions-genitive',
      title: 'Prepositions with Genitive-Dative',
      blocks: [
        {
          type: 'text',
          content:
            'Several prepositions require the genitive-dative form of the following noun. These are essential for expressing location, cause, and other relationships.',
        },
        {
          type: 'table',
          headers: ['Preposition', 'Meaning', 'Example'],
          rows: [
            ['deasupra', 'above', 'deasupra casei (above the house)'],
            ['în fața', 'in front of', 'în fața școlii (in front of the school)'],
            ['în spatele', 'behind', 'în spatele blocului (behind the building)'],
            ['din cauza', 'because of', 'din cauza ploii (because of the rain)'],
            ['în jurul', 'around', 'în jurul parcului (around the park)'],
            ['împotriva', 'against', 'împotriva regulilor (against the rules)'],
          ],
          caption: 'Common prepositions requiring genitive-dative',
        },
        {
          type: 'example',
          romanian: 'Mașina este în fața casei.',
          english: 'The car is in front of the house.',
          highlights: [
            { text: 'în fața', role: 'prefix' },
            { text: 'casei', role: 'object' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Note that "casa" (the house) becomes "casei" after these prepositions. Always use the genitive-dative form, not the nominative.',
        },
      ],
    },
    {
      id: 'proper-nouns',
      title: 'Genitive with Proper Nouns',
      blocks: [
        {
          type: 'rule',
          title: 'Names in the Genitive',
          content:
            'For proper nouns, use "lui" before masculine names and the -ei ending (or unchanged form with article) for feminine names: "cartea lui Andrei" (Andrei\'s book), "cartea Mariei" (Maria\'s book).',
        },
        {
          type: 'comparison',
          left: {
            title: 'Masculine Names',
            items: [
              'casa lui Mihai (Mihai\'s house)',
              'prietenul lui Ion (Ion\'s friend)',
              'Use "lui" + unchanged name',
            ],
          },
          right: {
            title: 'Feminine Names',
            items: [
              'casa Mariei (Maria\'s house)',
              'prietena Elenei (Elena\'s friend)',
              'Name takes -ei ending',
            ],
          },
        },
        {
          type: 'example',
          romanian: 'Fratele lui Andrei lucrează la bancă.',
          english: 'Andrei\'s brother works at a bank.',
          highlights: [
            { text: 'Fratele', role: 'subject' },
            { text: 'lui Andrei', role: 'object' },
          ],
        },
      ],
    },
  ],
};

export default genitiveDativeCaseTutorial;
