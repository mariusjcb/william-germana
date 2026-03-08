import type { GrammarTutorial } from '../../store/types';

const comparativesSuperlativesTutorial: GrammarTutorial = {
  topicId: 'comparatives-superlatives',
  title: 'Comparatives & Superlatives',
  introduction:
    'Romanian forms comparisons analytically, meaning it uses separate words rather than changing the adjective form (unlike English "-er" and "-est"). The key words are "mai" (more), "cel mai" (the most), and "decât" (than). This system is regular with very few exceptions.',
  sections: [
    {
      id: 'comparatives',
      title: 'Comparatives: mai...decât',
      blocks: [
        {
          type: 'rule',
          title: 'Forming Comparatives',
          content:
            'Place "mai" before the adjective and "decât" before the thing being compared to: "mai mare decât" (bigger than). For equality, use "la fel de...ca" (as...as). For inferiority, use "mai puțin...decât" (less...than).',
        },
        {
          type: 'table',
          headers: ['Type', 'Structure', 'Example'],
          rows: [
            ['Superiority', 'mai + adj. + decât', 'Mai mare decât (bigger than)'],
            ['Equality', 'la fel de + adj. + ca', 'La fel de mare ca (as big as)'],
            ['Inferiority', 'mai puțin + adj. + decât', 'Mai puțin mare decât (less big than)'],
          ],
          caption: 'Three types of comparison',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'București este mai mare decât Cluj.',
          english: 'Bucharest is bigger than Cluj.',
          highlights: [
            { text: 'mai mare', role: 'object' },
            { text: 'decât', role: 'prefix' },
          ],
        },
        {
          type: 'example',
          romanian: 'Sora mea este la fel de înaltă ca mine.',
          english: 'My sister is as tall as me.',
          highlights: [
            { text: 'la fel de înaltă', role: 'object' },
            { text: 'ca mine', role: 'prefix' },
          ],
        },
      ],
    },
    {
      id: 'superlatives',
      title: 'Superlatives: cel mai / cea mai',
      blocks: [
        {
          type: 'rule',
          title: 'Forming Superlatives',
          content:
            'The superlative uses "cel/cea/cei/cele" (which agrees in gender/number with the noun) + "mai" + adjective. For the absolute superlative (very/extremely), use "foarte" + adjective.',
        },
        {
          type: 'table',
          headers: ['Gender/Number', 'Superlative Article', 'Example'],
          rows: [
            ['Masc. sg.', 'cel mai', 'cel mai bun (the best, m.)'],
            ['Fem. sg.', 'cea mai', 'cea mai bună (the best, f.)'],
            ['Masc. pl.', 'cei mai', 'cei mai buni (the best, m. pl.)'],
            ['Fem. pl.', 'cele mai', 'cele mai bune (the best, f. pl.)'],
          ],
          caption: 'Superlative article forms by gender and number',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Aceasta este cea mai frumoasă floare din grădină.',
          english: 'This is the most beautiful flower in the garden.',
          highlights: [
            { text: 'cea mai frumoasă', role: 'object' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Subject', content: 'Aceasta', role: 'subject' },
            { position: 2, label: 'Verb', content: 'este', role: 'verb' },
            { position: 3, label: 'Superlative', content: 'cea mai frumoasă', role: 'other' },
            { position: 4, label: 'Noun', content: 'floare', role: 'object' },
          ],
          caption: 'Superlative structure in a sentence',
        },
      ],
    },
    {
      id: 'irregular-forms',
      title: 'Irregular Comparatives',
      blocks: [
        {
          type: 'text',
          content:
            'Romanian has very few irregular comparative/superlative forms. Most adjectives simply use "mai" and "cel mai." However, a few common adjectives have special forms worth memorizing.',
        },
        {
          type: 'table',
          headers: ['Adjective', 'Comparative', 'Superlative', 'Note'],
          rows: [
            ['bun (good)', 'mai bun', 'cel mai bun', 'Regular pattern'],
            ['rău (bad)', 'mai rău', 'cel mai rău', 'Regular pattern'],
            ['mare (big)', 'mai mare', 'cel mai mare', 'Regular pattern'],
            ['mic (small)', 'mai mic', 'cel mai mic', 'Regular pattern'],
            ['mult (much)', 'mai mult', 'cel mai mult', 'Also used as adverb'],
            ['puțin (little)', 'mai puțin', 'cel mai puțin', 'Also used as adverb'],
          ],
          caption: 'Common adjectives in comparative and superlative',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Good news for learners: unlike English (good/better/best) or French (bon/meilleur), Romanian comparatives are almost entirely regular. Just add "mai" and you are done.',
        },
      ],
    },
    {
      id: 'adverb-comparisons',
      title: 'Comparing with Adverbs',
      blocks: [
        {
          type: 'text',
          content:
            'Adverbs are compared the same way as adjectives: "mai" + adverb + "decât" for comparatives, "cel mai" + adverb for superlatives.',
        },
        {
          type: 'example',
          romanian: 'Ea aleargă mai repede decât mine.',
          english: 'She runs faster than me.',
          highlights: [
            { text: 'mai repede', role: 'object' },
            { text: 'decât mine', role: 'prefix' },
          ],
        },
        {
          type: 'example',
          romanian: 'El vorbește cel mai bine românește.',
          english: 'He speaks Romanian the best.',
          highlights: [
            { text: 'cel mai bine', role: 'object' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'Adjective Comparison',
            items: [
              'mai frumos decât (more beautiful than)',
              'cea mai frumoasă (the most beautiful, f.)',
              'Agrees in gender/number',
            ],
          },
          right: {
            title: 'Adverb Comparison',
            items: [
              'mai frumos decât (more beautifully than)',
              'cel mai frumos (the most beautifully)',
              'Invariable form (cel mai)',
            ],
          },
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'When comparing adverbs, always use "cel mai" (masculine singular form) regardless of the subject\'s gender, since adverbs do not change for gender or number.',
        },
      ],
    },
  ],
};

export default comparativesSuperlativesTutorial;
