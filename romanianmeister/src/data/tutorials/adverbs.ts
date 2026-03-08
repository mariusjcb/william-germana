import type { GrammarTutorial } from '../../store/types';

const adverbsTutorial: GrammarTutorial = {
  topicId: 'adverbs',
  title: 'Adverbs & Adverbial Phrases',
  introduction:
    'Adverbs modify verbs, adjectives, or other adverbs, providing information about how, when, where, and how much. Many Romanian adverbs are formed from adjectives, while others are standalone words. Unlike adjectives, adverbs never change form for gender or number.',
  sections: [
    {
      id: 'types',
      title: 'Types of Adverbs',
      blocks: [
        {
          type: 'table',
          headers: ['Type', 'Examples', 'English'],
          rows: [
            ['Manner', 'bine, rău, repede, încet, ușor', 'well, badly, fast, slowly, easily'],
            ['Time', 'acum, azi, ieri, mâine, mereu, niciodată', 'now, today, yesterday, tomorrow, always, never'],
            ['Place', 'aici, acolo, sus, jos, afară, înăuntru', 'here, there, up, down, outside, inside'],
            ['Frequency', 'întotdeauna, de obicei, uneori, rar', 'always, usually, sometimes, rarely'],
            ['Quantity', 'mult, puțin, destul, prea, foarte', 'a lot, a little, enough, too, very'],
          ],
          caption: 'Main types of Romanian adverbs',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Romanian adverbs are invariable — they never change form. "Bine" is always "bine" regardless of the subject: "El cântă bine," "Ea cântă bine," "Ei cântă bine."',
        },
      ],
    },
    {
      id: 'from-adjectives',
      title: 'Forming Adverbs from Adjectives',
      blocks: [
        {
          type: 'rule',
          title: 'Adjective to Adverb',
          content:
            'In Romanian, many adverbs are identical in form to the masculine singular adjective. There is no special suffix like English "-ly." Simply use the masculine singular form: "frumos" (beautiful) → "frumos" (beautifully), "rapid" (fast, adj.) → "rapid" (fast, adv.).',
        },
        {
          type: 'table',
          headers: ['Adjective (m. sg.)', 'Meaning (adj.)', 'Adverb', 'Meaning (adv.)'],
          rows: [
            ['frumos', 'beautiful', 'frumos', 'beautifully'],
            ['rapid', 'fast/quick', 'rapid', 'quickly'],
            ['ușor', 'easy/light', 'ușor', 'easily'],
            ['greu', 'heavy/difficult', 'greu', 'with difficulty'],
            ['clar', 'clear', 'clar', 'clearly'],
            ['direct', 'direct', 'direct', 'directly'],
          ],
          caption: 'Adverbs identical to masculine singular adjectives',
        },
        {
          type: 'comparison',
          left: {
            title: 'Adjective (modifies noun)',
            items: [
              'Un cântec frumos (A beautiful song)',
              'O mașină rapidă (A fast car)',
              'Agrees in gender/number',
            ],
          },
          right: {
            title: 'Adverb (modifies verb)',
            items: [
              'Cântă frumos (She sings beautifully)',
              'Merge rapid (He goes quickly)',
              'Never changes form',
            ],
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'If you are unsure whether a word is being used as an adjective or adverb, check what it modifies. If it modifies a noun, it is an adjective and must agree. If it modifies a verb, it is an adverb and stays in masculine singular form.',
        },
      ],
    },
    {
      id: 'placement',
      title: 'Adverb Placement',
      blocks: [
        {
          type: 'text',
          content:
            'Romanian adverb placement is relatively flexible, but certain positions are preferred depending on the type of adverb.',
        },
        {
          type: 'rule',
          title: 'General Placement Guidelines',
          content:
            'Manner adverbs typically follow the verb: "Vorbește bine." Time and place adverbs can go at the beginning or end: "Ieri am mers la piață" or "Am mers la piață ieri." Frequency adverbs usually come before or after the verb: "Mereu citesc" or "Citesc mereu."',
        },
        {
          type: 'example',
          romanian: 'De obicei mă trezesc devreme.',
          english: 'Usually I wake up early.',
          highlights: [
            { text: 'De obicei', role: 'time' },
            { text: 'mă trezesc', role: 'verb' },
            { text: 'devreme', role: 'time' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Frequency', content: 'De obicei', role: 'time' },
            { position: 2, label: 'Reflexive + verb', content: 'mă trezesc', role: 'verb' },
            { position: 3, label: 'Manner/time', content: 'devreme', role: 'time' },
          ],
          caption: 'Typical adverb placement in a sentence',
        },
        {
          type: 'example',
          romanian: 'Aici nu se fumează.',
          english: 'Smoking is not allowed here.',
          highlights: [
            { text: 'Aici', role: 'prefix' },
            { text: 'nu', role: 'negation' },
            { text: 'se fumează', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'common-phrases',
      title: 'Common Adverbial Phrases',
      blocks: [
        {
          type: 'text',
          content:
            'Many useful expressions in Romanian are adverbial phrases — multi-word units that function as a single adverb.',
        },
        {
          type: 'table',
          headers: ['Phrase', 'Meaning', 'Type'],
          rows: [
            ['din când în când', 'from time to time', 'Frequency'],
            ['din păcate', 'unfortunately', 'Attitude'],
            ['de fapt', 'actually / in fact', 'Attitude'],
            ['pe de altă parte', 'on the other hand', 'Contrast'],
            ['cât mai repede', 'as fast as possible', 'Manner'],
            ['cu plăcere', 'with pleasure', 'Manner'],
            ['în general', 'in general / generally', 'Frequency'],
            ['cu siguranță', 'certainly / for sure', 'Certainty'],
          ],
          caption: 'Useful adverbial phrases for A2',
        },
        {
          type: 'example',
          romanian: 'Din păcate, nu pot veni la petrecere.',
          english: 'Unfortunately, I cannot come to the party.',
          highlights: [
            { text: 'Din păcate', role: 'prefix' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Learning adverbial phrases as fixed expressions is very efficient. They add nuance and sophistication to your Romanian without requiring you to learn complex grammar rules.',
        },
      ],
    },
  ],
};

export default adverbsTutorial;
