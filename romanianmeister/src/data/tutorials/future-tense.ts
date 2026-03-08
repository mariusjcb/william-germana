import type { GrammarTutorial } from '../../store/types';

const futureTenseTutorial: GrammarTutorial = {
  topicId: 'future-tense',
  title: 'Future Tense',
  introduction:
    'Romanian has two main ways to express the future: the colloquial form using "o să" + subjunctive (by far the most common in everyday speech), and the literary form using "voi" + infinitive. As an A2 learner, you should focus on the "o să" form but recognize both.',
  sections: [
    {
      id: 'colloquial-future',
      title: 'Colloquial Future: o să + Subjunctive',
      blocks: [
        {
          type: 'rule',
          title: 'Formation',
          content:
            'The colloquial future is formed with "o să" + the subjunctive form of the verb (which uses "să" + present tense conjugation). In practice, "o" does not change for person — only the verb conjugates.',
        },
        {
          type: 'table',
          headers: ['Person', 'Pronoun', 'Future Form (a lucra)', 'English'],
          rows: [
            ['1st sg.', 'eu', 'o să lucrez', 'I will work'],
            ['2nd sg.', 'tu', 'o să lucrezi', 'you will work'],
            ['3rd sg.', 'el/ea', 'o să lucreze', 'he/she will work'],
            ['1st pl.', 'noi', 'o să lucrăm', 'we will work'],
            ['2nd pl.', 'voi', 'o să lucrați', 'you all will work'],
            ['3rd pl.', 'ei/ele', 'o să lucreze', 'they will work'],
          ],
          caption: 'Colloquial future with "o să" — a lucra',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'O să merg la mare în august.',
          english: 'I will go to the seaside in August.',
          highlights: [
            { text: 'O să merg', role: 'verb' },
            { text: 'la mare', role: 'object' },
            { text: 'în august', role: 'time' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'In very informal speech, you may hear "o să" shortened to just "o" or "oi": "Oi vedea" (I\'ll see). Stick with "o să" for now — it is universally understood.',
        },
      ],
    },
    {
      id: 'literary-future',
      title: 'Literary Future: voi + Infinitive',
      blocks: [
        {
          type: 'text',
          content:
            'The literary future uses the auxiliary "voi" (derived from "a vrea" — to want) conjugated for person, followed by the short infinitive (without "a"). This form appears in writing, formal speech, and news broadcasts.',
        },
        {
          type: 'table',
          headers: ['Person', 'Pronoun', 'Auxiliary', 'Example (a lucra)'],
          rows: [
            ['1st sg.', 'eu', 'voi', 'voi lucra'],
            ['2nd sg.', 'tu', 'vei', 'vei lucra'],
            ['3rd sg.', 'el/ea', 'va', 'va lucra'],
            ['1st pl.', 'noi', 'vom', 'vom lucra'],
            ['2nd pl.', 'voi', 'veți', 'veți lucra'],
            ['3rd pl.', 'ei/ele', 'vor', 'vor lucra'],
          ],
          caption: 'Literary future with "voi" — a lucra',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Vom ajunge mâine dimineață.',
          english: 'We will arrive tomorrow morning.',
          highlights: [
            { text: 'Vom ajunge', role: 'verb' },
            { text: 'mâine dimineață', role: 'time' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'The literary future is considered more formal. You will encounter it in written texts, but in conversation, Romanians almost always prefer "o să" + subjunctive.',
        },
      ],
    },
    {
      id: 'negation-future',
      title: 'Negation & Questions',
      blocks: [
        {
          type: 'rule',
          title: 'Negating the Future',
          content:
            'For "o să": place "nu" before the entire construction — "nu o să lucrez." For "voi": place "nu" before the auxiliary — "nu voi lucra."',
        },
        {
          type: 'example',
          romanian: 'Nu o să plec devreme.',
          english: 'I will not leave early.',
          highlights: [
            { text: 'Nu', role: 'negation' },
            { text: 'o să plec', role: 'verb' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'Colloquial Negation',
            items: ['Nu o să merg.', 'Nu o să plouă.', 'Nu o să vină.'],
          },
          right: {
            title: 'Literary Negation',
            items: ['Nu voi merge.', 'Nu va ploua.', 'Nu va veni.'],
          },
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Negation', content: 'Nu', role: 'other' },
            { position: 2, label: 'Future marker', content: 'o să', role: 'verb' },
            { position: 3, label: 'Verb (subj.)', content: 'plec', role: 'verb' },
            { position: 4, label: 'Adverb', content: 'devreme', role: 'time' },
          ],
          caption: 'Word order in negated colloquial future',
        },
      ],
    },
    {
      id: 'choosing-future',
      title: 'Which Future to Use?',
      blocks: [
        {
          type: 'decision',
          question: 'Are you speaking informally or in everyday conversation?',
          yes: {
            answer: 'Use "o să" + subjunctive',
            explanation: 'This is the standard spoken form. E.g., "O să merg la piață."',
          },
          no: {
            answer: 'Consider the literary form',
            explanation: 'Use "voi/vei/va/vom/veți/vor" + infinitive for formal writing or speeches.',
            followUp: {
              question: 'Is it a news broadcast or official document?',
              yes: {
                answer: 'Use "voi" + infinitive',
                explanation: 'E.g., "Președintele va vizita Bruxelles-ul."',
              },
              no: {
                answer: 'Either form is acceptable',
                explanation: 'In semi-formal contexts, both forms work. "O să" is always safe.',
              },
            },
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'When in doubt, use "o să" — it is correct in all contexts and sounds natural to native speakers.',
        },
      ],
    },
  ],
};

export default futureTenseTutorial;
