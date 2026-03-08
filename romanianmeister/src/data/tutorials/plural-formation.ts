import type { GrammarTutorial } from '../../store/types';

const pluralFormationTutorial: GrammarTutorial = {
  topicId: 'plural-formation',
  title: 'Forming Plurals in Romanian',
  introduction:
    'Romanian plurals are formed by changing the noun ending, and the pattern depends on the gender of the noun. Masculine nouns typically end in -i, feminine nouns in -e or -i, and neuter nouns in -uri or -e. While there are some irregular forms, most nouns follow predictable patterns.',
  sections: [
    {
      id: 'masculine-plurals',
      title: 'Masculine Plurals (-i)',
      blocks: [
        {
          type: 'rule',
          title: 'Masculine Plural Ending: -i',
          content:
            'Most masculine nouns form their plural by adding -i to the singular form, sometimes with spelling changes. Nouns ending in a consonant add -i directly. Nouns ending in -e may drop the -e before adding -i.',
        },
        {
          type: 'table',
          headers: ['Singular', 'Plural', 'English'],
          rows: [
            ['băiat', 'băieți', 'boy → boys'],
            ['om', 'oameni', 'man → men (irregular)'],
            ['student', 'studenți', 'student → students'],
            ['prieten', 'prieteni', 'friend → friends'],
            ['câine', 'câini', 'dog → dogs'],
            ['frate', 'frați', 'brother → brothers'],
          ],
          caption: 'Masculine plural examples',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Băieții se joacă în parc.',
          english: 'The boys are playing in the park.',
          highlights: [
            { text: 'Băieții', role: 'subject' },
            { text: 'se joacă', role: 'verb' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Watch out for consonant changes: t → ț before -i (băiat → băieți, student → studenți). This is called palatalization and is very common in Romanian.',
        },
      ],
    },
    {
      id: 'feminine-plurals',
      title: 'Feminine Plurals (-e, -i)',
      blocks: [
        {
          type: 'text',
          content:
            'Feminine nouns have two main plural endings: -e (replacing -ă) and -i. The choice depends on the singular ending and sometimes on the specific noun.',
        },
        {
          type: 'table',
          headers: ['Singular', 'Plural', 'Pattern', 'English'],
          rows: [
            ['casă', 'case', '-ă → -e', 'house → houses'],
            ['masă', 'mese', '-ă → -e (with vowel change)', 'table → tables'],
            ['carte', 'cărți', '-e → -i (with vowel change)', 'book → books'],
            ['floare', 'flori', '-e → -i', 'flower → flowers'],
            ['zi', 'zile', '-i → -ile', 'day → days'],
            ['cafea', 'cafele', '-a → -ale', 'coffee → coffees'],
          ],
          caption: 'Feminine plural patterns',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Florile sunt frumoase.',
          english: 'The flowers are beautiful.',
          highlights: [
            { text: 'Florile', role: 'subject' },
            { text: 'sunt', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Am două cărți noi.',
          english: 'I have two new books.',
          highlights: [
            { text: 'Am', role: 'verb' },
            { text: 'cărți', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'neuter-plurals',
      title: 'Neuter Plurals (-uri, -e)',
      blocks: [
        {
          type: 'rule',
          title: 'Neuter Plurals Become Feminine',
          content:
            'Remember that neuter nouns behave like feminine in the plural. The most common neuter plural endings are -uri and -e.',
        },
        {
          type: 'table',
          headers: ['Singular', 'Plural', 'Pattern', 'English'],
          rows: [
            ['scaun', 'scaune', '+ -e', 'chair → chairs'],
            ['tren', 'trenuri', '+ -uri', 'train → trains'],
            ['oraș', 'orașe', '+ -e', 'city → cities'],
            ['loc', 'locuri', '+ -uri', 'place → places'],
            ['cuvânt', 'cuvinte', '+ -e (with change)', 'word → words'],
            ['lucru', 'lucruri', '-u → -uri', 'thing → things'],
          ],
          caption: 'Neuter plural patterns',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Trenurile sunt rapide.',
          english: 'The trains are fast.',
          highlights: [
            { text: 'Trenurile', role: 'subject' },
            { text: 'sunt', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'spelling-changes-irregulars',
      title: 'Spelling Changes & Irregular Plurals',
      blocks: [
        {
          type: 'text',
          content:
            'Romanian plurals often involve spelling changes beyond just adding an ending. Vowel alternations and consonant softening are common, especially with the -i ending.',
        },
        {
          type: 'table',
          headers: ['Change', 'Example', 'English'],
          rows: [
            ['a → ă', 'masă → mese', 'table → tables'],
            ['a → ă', 'carte → cărți', 'book → books'],
            ['o → oa', 'copil → copii', 'child → children'],
            ['t → ț (before -i)', 'student → studenți', 'student → students'],
            ['Fully irregular', 'om → oameni', 'man → men'],
            ['Fully irregular', 'soră → surori', 'sister → sisters'],
          ],
          caption: 'Common spelling changes in plural formation',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Do not try to memorize every rule at once. Start by learning the plural of each new noun you encounter. Over time, patterns will become intuitive. The most important pattern: masculine adds -i, feminine changes -ă to -e, neuter adds -uri or -e.',
        },
        {
          type: 'comparison',
          left: {
            title: 'Regular Patterns',
            items: ['băiat → băieți', 'casă → case', 'tren → trenuri', 'student → studenți'],
          },
          right: {
            title: 'Irregular Patterns',
            items: ['om → oameni', 'soră → surori', 'copil → copii', 'frate → frați'],
          },
        },
      ],
    },
  ],
};

export default pluralFormationTutorial;
