import type { GrammarTutorial } from '../../store/types';

const conjunctionsConnectorsTutorial: GrammarTutorial = {
  topicId: 'conjunctions-connectors',
  title: 'Conjunctions & Connectors',
  introduction:
    'Conjunctions and connectors are essential for building complex sentences and linking ideas. Romanian uses coordinating conjunctions (linking equal elements), subordinating conjunctions (introducing dependent clauses), and discourse markers (organizing speech and writing).',
  sections: [
    {
      id: 'coordinating',
      title: 'Coordinating Conjunctions',
      blocks: [
        {
          type: 'text',
          content:
            'Coordinating conjunctions link words, phrases, or clauses of equal grammatical status. They do not change the word order of the clauses they connect.',
        },
        {
          type: 'table',
          headers: ['Conjunction', 'Meaning', 'Example'],
          rows: [
            ['și', 'and', 'Eu și tu (you and I)'],
            ['dar / însă', 'but', 'Este mic, dar puternic. (Small but strong.)'],
            ['sau / ori', 'or', 'Cafea sau ceai? (Coffee or tea?)'],
            ['nici...nici', 'neither...nor', 'Nici eu, nici el. (Neither me nor him.)'],
            ['ci', 'but rather', 'Nu e roșu, ci albastru. (Not red, but blue.)'],
            ['iar', 'and / while', 'Eu citesc, iar el doarme. (I read, while he sleeps.)'],
          ],
          caption: 'Common coordinating conjunctions',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Am cumpărat pâine și lapte, dar am uitat untul.',
          english: 'I bought bread and milk, but I forgot the butter.',
          highlights: [
            { text: 'și', role: 'prefix' },
            { text: 'dar', role: 'prefix' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            '"Ci" is used specifically after a negative statement to introduce what is actually true: "Nu este profesoară, ci doctoriță" (She is not a teacher, but rather a doctor).',
        },
      ],
    },
    {
      id: 'subordinating',
      title: 'Subordinating Conjunctions',
      blocks: [
        {
          type: 'text',
          content:
            'Subordinating conjunctions introduce dependent clauses that cannot stand alone. They express cause, condition, purpose, time, and other relationships.',
        },
        {
          type: 'table',
          headers: ['Conjunction', 'Meaning', 'Type'],
          rows: [
            ['că', 'that', 'Complement'],
            ['dacă', 'if / whether', 'Condition'],
            ['pentru că / fiindcă', 'because', 'Cause'],
            ['deși / cu toate că', 'although', 'Concession'],
            ['când', 'when', 'Time'],
            ['înainte să', 'before', 'Time'],
            ['după ce', 'after', 'Time'],
            ['ca să', 'in order to', 'Purpose'],
            ['până (când)', 'until', 'Time'],
          ],
          caption: 'Essential subordinating conjunctions',
        },
        {
          type: 'example',
          romanian: 'Am plecat devreme pentru că era foarte frig.',
          english: 'I left early because it was very cold.',
          highlights: [
            { text: 'pentru că', role: 'prefix' },
          ],
        },
        {
          type: 'example',
          romanian: 'Dacă plouă mâine, rămânem acasă.',
          english: 'If it rains tomorrow, we stay home.',
          highlights: [
            { text: 'Dacă', role: 'prefix' },
          ],
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            '"Că" and "dacă" are easily confused. "Că" means "that" (reporting facts): "Știu că vine" (I know that he is coming). "Dacă" means "if/whether": "Nu știu dacă vine" (I don\'t know if/whether he is coming).',
        },
      ],
    },
    {
      id: 'discourse-markers',
      title: 'Discourse Markers',
      blocks: [
        {
          type: 'text',
          content:
            'Discourse markers help organize speech and writing. They signal transitions, additions, contrasts, and conclusions. Using them makes your Romanian sound more natural and fluent.',
        },
        {
          type: 'table',
          headers: ['Marker', 'Meaning', 'Usage'],
          rows: [
            ['de fapt', 'in fact / actually', 'Correction or emphasis'],
            ['de exemplu', 'for example', 'Giving examples'],
            ['în primul rând', 'first of all', 'Listing/ordering'],
            ['pe de altă parte', 'on the other hand', 'Contrast'],
            ['în plus', 'moreover / in addition', 'Adding information'],
            ['în concluzie', 'in conclusion', 'Summarizing'],
            ['totuși', 'however / nevertheless', 'Contrast'],
            ['deci / așadar', 'so / therefore', 'Consequence'],
          ],
          caption: 'Common discourse markers for A2',
        },
        {
          type: 'example',
          romanian: 'Orașul este frumos. Totuși, este foarte aglomerat.',
          english: 'The city is beautiful. However, it is very crowded.',
          highlights: [
            { text: 'Totuși', role: 'prefix' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'Simple Sentences',
            items: [
              'Mi-e foame. Merg la restaurant.',
              'Am obosit. Mă culc.',
              'No logical connection shown',
            ],
          },
          right: {
            title: 'With Connectors',
            items: [
              'Mi-e foame, deci merg la restaurant.',
              'Am obosit, așa că mă culc.',
              'Clear cause-effect relationship',
            ],
          },
        },
      ],
    },
    {
      id: 'choosing-connector',
      title: 'Choosing the Right Connector',
      blocks: [
        {
          type: 'decision',
          question: 'Are you linking two equal ideas?',
          yes: {
            answer: 'Use a coordinating conjunction',
            explanation: 'Use "și" (and), "dar" (but), "sau" (or), "ci" (but rather).',
            followUp: {
              question: 'Are the ideas contrasting?',
              yes: {
                answer: 'Use "dar," "însă," or "ci"',
                explanation: '"Dar/însă" for general contrast; "ci" after negation for correction.',
              },
              no: {
                answer: 'Use "și" or "sau"',
                explanation: '"Și" to add, "sau" to give alternatives.',
              },
            },
          },
          no: {
            answer: 'Use a subordinating conjunction',
            explanation: 'Choose based on the relationship: "pentru că" (cause), "dacă" (condition), "când" (time), "ca să" (purpose).',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'A good habit at A2 level: try to connect at least two sentences in every written or spoken response using a conjunction. This immediately makes your Romanian more sophisticated.',
        },
      ],
    },
  ],
};

export default conjunctionsConnectorsTutorial;
