import type { GrammarTutorial } from '../../store/types';

const prepositionsTutorial: GrammarTutorial = {
  topicId: 'prepositions',
  title: 'Essential Romanian Prepositions',
  introduction:
    'Prepositions are small words that show the relationship between a noun and the rest of the sentence — indicating location, direction, time, or manner. Romanian prepositions work similarly to English ones, though the specific usage can differ. At the A1 level, mastering a core set of prepositions will greatly expand what you can express.',
  sections: [
    {
      id: 'location-prepositions',
      title: 'Location: Unde? (Where?)',
      blocks: [
        {
          type: 'rule',
          title: 'Three Key Location Prepositions',
          content:
            'The most important prepositions for expressing location are: "în" (in, inside), "la" (at, to), and "pe" (on). "În" is used for enclosed spaces, "la" for general locations and destinations, and "pe" for surfaces.',
        },
        {
          type: 'table',
          headers: ['Preposition', 'Meaning', 'Examples'],
          rows: [
            ['în', 'in, inside', 'în casă (in the house), în România (in Romania), în parc (in the park)'],
            ['la', 'at, to', 'la școală (at school), la birou (at the office), la doctor (at the doctor)'],
            ['pe', 'on', 'pe masă (on the table), pe stradă (on the street), pe scaun (on the chair)'],
          ],
          caption: 'Location prepositions with examples',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Cartea este pe masă.',
          english: 'The book is on the table.',
          highlights: [
            { text: 'Cartea', role: 'subject' },
            { text: 'este', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Locuiesc în București.',
          english: 'I live in Bucharest.',
          highlights: [
            { text: 'Locuiesc', role: 'verb' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            '"La" is very versatile. It can mean "at" (la birou = at the office) or "to" (merg la birou = I go to the office). Context determines the meaning.',
        },
      ],
    },
    {
      id: 'movement-prepositions',
      title: 'Movement: De unde? (From where?)',
      blocks: [
        {
          type: 'text',
          content:
            'To express where something comes from or where you are leaving, use "din" (from, out of) and "de la" (from a person or general place).',
        },
        {
          type: 'table',
          headers: ['Preposition', 'Meaning', 'Examples'],
          rows: [
            ['din', 'from, out of', 'din România (from Romania), din casă (from the house)'],
            ['de la', 'from (a place/person)', 'de la școală (from school), de la Maria (from Maria)'],
            ['spre', 'towards', 'spre centru (towards the center), spre nord (towards north)'],
          ],
          caption: 'Movement prepositions',
        },
        {
          type: 'example',
          romanian: 'Vin din România.',
          english: 'I come from Romania.',
          highlights: [
            { text: 'Vin', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Mergem de la școală acasă.',
          english: 'We go from school home.',
          highlights: [
            { text: 'Mergem', role: 'verb' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'Going TO (la / în)',
            items: ['Merg la școală. (I go to school.)', 'Merg în parc. (I go to the park.)', 'Merg la Maria. (I go to Maria\'s.)'],
          },
          right: {
            title: 'Coming FROM (de la / din)',
            items: ['Vin de la școală. (I come from school.)', 'Vin din parc. (I come from the park.)', 'Vin de la Maria. (I come from Maria\'s.)'],
          },
        },
      ],
    },
    {
      id: 'relationship-prepositions',
      title: 'Relationship Prepositions',
      blocks: [
        {
          type: 'text',
          content:
            'These prepositions express relationships between things: accompaniment, absence, purpose, and topic.',
        },
        {
          type: 'table',
          headers: ['Preposition', 'Meaning', 'Example'],
          rows: [
            ['cu', 'with', 'cu lapte (with milk), cu prietenii (with friends)'],
            ['fără', 'without', 'fără zahăr (without sugar), fără probleme (without problems)'],
            ['pentru', 'for', 'pentru tine (for you), pentru mâine (for tomorrow)'],
            ['despre', 'about', 'despre România (about Romania), despre mine (about me)'],
            ['între', 'between', 'între noi (between us), între casa și parc (between the house and the park)'],
          ],
          caption: 'Common relationship prepositions',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Beau cafea cu lapte.',
          english: 'I drink coffee with milk.',
          highlights: [
            { text: 'Beau', role: 'verb' },
            { text: 'cafea cu lapte', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Aceasta este o carte despre istorie.',
          english: 'This is a book about history.',
          highlights: [
            { text: 'este', role: 'verb' },
            { text: 'o carte', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'common-expressions',
      title: 'Common Prepositional Expressions',
      blocks: [
        {
          type: 'rule',
          title: 'Learn Prepositions in Phrases',
          content:
            'Rather than memorizing prepositions in isolation, learn them as part of common expressions. Many preposition uses are idiomatic and differ from English.',
        },
        {
          type: 'table',
          headers: ['Romanian', 'English', 'Literal'],
          rows: [
            ['în fiecare zi', 'every day', 'in each day'],
            ['la timp', 'on time', 'at time'],
            ['pe jos', 'on foot', 'on foot'],
            ['cu plăcere', 'with pleasure / you\'re welcome', 'with pleasure'],
            ['fără îndoială', 'without doubt', 'without doubt'],
            ['de acord', 'agreed / OK', 'of agreement'],
          ],
          caption: 'Useful prepositional expressions',
        },
        {
          type: 'example',
          romanian: 'Merg la serviciu pe jos în fiecare zi.',
          english: 'I go to work on foot every day.',
          highlights: [
            { text: 'Merg', role: 'verb' },
            { text: 'în fiecare zi', role: 'time' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'When you learn a new noun, try to learn it with a common preposition: "la școală" (at school), "în oraș" (in the city), "pe stradă" (on the street). This builds useful chunks you can use immediately.',
        },
      ],
    },
  ],
};

export default prepositionsTutorial;
