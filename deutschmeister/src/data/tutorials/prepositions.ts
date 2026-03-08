import type { GrammarTutorial } from '../../store/types';

const tutorial: GrammarTutorial = {
  topicId: 'prepositions',
  title: 'Prepositions & Conjunctions',
  introduction:
    'Prepositions are small words with a big impact: they determine the case of the noun that follows. At the A1 level, you need to know which prepositions take the accusative and which take the dative. We also cover basic coordinating conjunctions.',
  sections: [
    {
      id: 'accusative-prepositions',
      title: 'Accusative Prepositions',
      blocks: [
        {
          type: 'rule',
          title: 'Always Accusative',
          content:
            'The following prepositions ALWAYS require the accusative case for the noun or pronoun that follows them. No exceptions!',
        },
        {
          type: 'table',
          headers: ['Preposition', 'English', 'Example'],
          rows: [
            ['durch', 'through', 'durch den Park'],
            ['für', 'for', 'für meinen Freund'],
            ['gegen', 'against', 'gegen die Wand'],
            ['ohne', 'without', 'ohne einen Mantel'],
            ['um', 'around', 'um den Tisch'],
          ],
          caption: 'Accusative prepositions',
          colorCoded: true,
        },
        {
          type: 'example',
          german: 'Ich gehe durch den Park.',
          english: 'I walk through the park.',
          highlights: [
            { text: 'durch', role: 'prefix' },
            { text: 'den Park', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Das Geschenk ist für dich.',
          english: 'The gift is for you.',
          highlights: [
            { text: 'für', role: 'prefix' },
            { text: 'dich', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'dative-prepositions',
      title: 'Dative Prepositions',
      blocks: [
        {
          type: 'rule',
          title: 'Always Dative',
          content:
            'The following prepositions ALWAYS require the dative case. When you see one of these prepositions, the noun that follows must be in the dative.',
        },
        {
          type: 'table',
          headers: ['Preposition', 'English', 'Example'],
          rows: [
            ['aus', 'from / out of', 'aus dem Haus'],
            ['bei', 'at / near', 'bei meiner Freundin'],
            ['mit', 'with', 'mit dem Bus'],
            ['nach', 'after / to', 'nach der Schule'],
            ['seit', 'since', 'seit einem Jahr'],
            ['von', 'from', 'von meinem Bruder'],
            ['zu', 'to', 'zum Arzt'],
          ],
          caption: 'Dative prepositions',
          colorCoded: true,
        },
        {
          type: 'example',
          german: 'Ich fahre mit dem Bus.',
          english: 'I go by bus.',
          highlights: [
            { text: 'mit', role: 'prefix' },
            { text: 'dem Bus', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Sie kommt aus der Türkei.',
          english: 'She comes from Turkey.',
          highlights: [
            { text: 'aus', role: 'prefix' },
            { text: 'der Türkei', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'coordinating-conjunctions',
      title: 'Coordinating Conjunctions',
      blocks: [
        {
          type: 'rule',
          title: 'No Word-Order Change',
          content:
            'The coordinating conjunctions "und" (and), "oder" (or), "aber" (but), and "denn" (because) connect two main clauses without changing the word order. The verb stays in position 2 in both clauses.',
        },
        {
          type: 'table',
          headers: ['Conjunction', 'English', 'Example'],
          rows: [
            ['und', 'and', 'Ich lerne Deutsch und er lernt Spanisch.'],
            ['oder', 'or', 'Trinkst du Tee oder trinkst du Kaffee?'],
            ['aber', 'but', 'Ich bin müde, aber ich lerne weiter.'],
            ['denn', 'because', 'Ich lerne Deutsch, denn ich lebe in Berlin.'],
          ],
          caption: 'Coordinating conjunctions',
        },
        {
          type: 'example',
          german: 'Ich lerne Deutsch und sie lernt Französisch.',
          english: 'I am learning German and she is learning French.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'lerne', role: 'verb' },
            { text: 'sie', role: 'subject' },
            { text: 'lernt', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Er ist müde, aber er arbeitet weiter.',
          english: 'He is tired, but he keeps working.',
          highlights: [
            { text: 'Er', role: 'subject' },
            { text: 'ist', role: 'verb' },
            { text: 'er', role: 'subject' },
            { text: 'arbeitet', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'common-preposition-phrases',
      title: 'Common Preposition Phrases',
      blocks: [
        {
          type: 'text',
          content:
            'Many everyday German expressions use fixed preposition phrases. Learning these as chunks is more effective than memorizing rules.',
        },
        {
          type: 'table',
          headers: ['German', 'English'],
          rows: [
            ['zur Schule', 'to school'],
            ['zum Arzt', 'to the doctor'],
            ['nach Hause', 'home (direction)'],
            ['zu Hause', 'at home'],
            ['mit dem Bus', 'by bus'],
            ['mit dem Zug', 'by train'],
            ['aus Deutschland', 'from Germany'],
            ['bei der Arbeit', 'at work'],
            ['seit zwei Jahren', 'for two years'],
            ['von Montag bis Freitag', 'from Monday to Friday'],
          ],
          caption: 'Everyday preposition phrases',
        },
      ],
    },
    {
      id: 'quick-reference',
      title: 'Quick Reference',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Mnemonic for accusative prepositions: DOGFU — Durch, Ohne, Gegen, Für, Um. If you remember DOGFU, you will always know which prepositions take the accusative!',
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Dative prepositions can be remembered with the phrase "Aus, Bei, Mit, Nach, Seit, Von, Zu — Dativ, immerzu!" This rhyme is used by many German learners to memorize the dative prepositions.',
        },
      ],
    },
  ],
};

export default tutorial;
