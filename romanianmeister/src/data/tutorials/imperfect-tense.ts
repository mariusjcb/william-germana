import type { GrammarTutorial } from '../../store/types';

const imperfectTenseTutorial: GrammarTutorial = {
  topicId: 'imperfect-tense',
  title: 'Imperfect Tense (Imperfectul)',
  introduction:
    'The imperfect tense describes ongoing, habitual, or repeated actions in the past. It is equivalent to English "was doing," "used to do," or "would do (habitually)." Unlike the perfectul compus (which describes completed actions), the imperfect paints the background of a story and describes states or routines.',
  sections: [
    {
      id: 'formation',
      title: 'Formation by Conjugation Class',
      blocks: [
        {
          type: 'rule',
          title: 'How to Form the Imperfect',
          content:
            'The imperfect is formed by adding specific endings to the verb stem. The endings are largely the same across all conjugation classes: -am, -ai, -a, -am, -ați, -au. The distinguishing element is the stem vowel that precedes these endings.',
        },
        {
          type: 'table',
          headers: ['Person', 'a lucra (I)', 'a vedea (II)', 'a merge (III)', 'a dormi (IV)'],
          rows: [
            ['eu', 'lucram', 'vedeam', 'mergeam', 'dormeam'],
            ['tu', 'lucrai', 'vedeai', 'mergeai', 'dormeai'],
            ['el/ea', 'lucra', 'vedea', 'mergea', 'dormea'],
            ['noi', 'lucram', 'vedeam', 'mergeam', 'dormeam'],
            ['voi', 'lucrați', 'vedeați', 'mergeați', 'dormeați'],
            ['ei/ele', 'lucrau', 'vedeau', 'mergeau', 'dormeau'],
          ],
          caption: 'Imperfect tense across all four conjugation classes',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Notice that 1st person singular and 1st person plural are identical in the imperfect (just as in the perfectul compus with "am"). Context or the pronoun clarifies the meaning.',
        },
      ],
    },
    {
      id: 'irregular-imperfect',
      title: 'Irregular Verbs in the Imperfect',
      blocks: [
        {
          type: 'text',
          content:
            'Only a few verbs are irregular in the imperfect. The most important ones are "a fi" (to be) and "a avea" (to have).',
        },
        {
          type: 'table',
          headers: ['Person', 'a fi (to be)', 'a avea (to have)'],
          rows: [
            ['eu', 'eram', 'aveam'],
            ['tu', 'erai', 'aveai'],
            ['el/ea', 'era', 'avea'],
            ['noi', 'eram', 'aveam'],
            ['voi', 'erați', 'aveați'],
            ['ei/ele', 'erau', 'aveau'],
          ],
          caption: 'Imperfect of "a fi" and "a avea"',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Când eram mic, aveam un câine.',
          english: 'When I was little, I had a dog.',
          highlights: [
            { text: 'eram', role: 'verb' },
            { text: 'aveam', role: 'verb' },
            { text: 'Când', role: 'time' },
          ],
        },
      ],
    },
    {
      id: 'usage',
      title: 'When to Use the Imperfect',
      blocks: [
        {
          type: 'text',
          content:
            'The imperfect is used for: (1) habitual past actions ("used to"), (2) ongoing/progressive past actions ("was doing"), (3) descriptions and background in narratives, (4) simultaneous past actions.',
        },
        {
          type: 'example',
          romanian: 'În copilărie, mâncam înghețată în fiecare vară.',
          english: 'In childhood, I used to eat ice cream every summer.',
          highlights: [
            { text: 'mâncam', role: 'verb' },
            { text: 'În copilărie', role: 'time' },
            { text: 'în fiecare vară', role: 'time' },
          ],
        },
        {
          type: 'example',
          romanian: 'Citea o carte când a sunat telefonul.',
          english: 'She was reading a book when the phone rang.',
          highlights: [
            { text: 'Citea', role: 'verb' },
            { text: 'a sunat', role: 'verb' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Time expressions that signal the imperfect: "în fiecare zi/an" (every day/year), "de obicei" (usually), "mereu" (always), "când eram..." (when I was...), "pe vremea aceea" (at that time).',
        },
      ],
    },
    {
      id: 'imperfect-vs-perfect',
      title: 'Imperfect vs. Perfectul Compus',
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Imperfect (Imperfectul)',
            items: [
              'Ongoing / background action',
              'Habitual past ("used to")',
              'No defined endpoint',
              'Mergeam la școală. (I was going / used to go to school.)',
            ],
          },
          right: {
            title: 'Compound Past (Perfectul Compus)',
            items: [
              'Completed / single event',
              'Specific past action',
              'Clear endpoint or result',
              'Am mers la școală. (I went to school.)',
            ],
          },
        },
        {
          type: 'decision',
          question: 'Was the action habitual or repeated in the past?',
          yes: {
            answer: 'Use the imperfect',
            explanation: 'E.g., "Mergeam la piață în fiecare sâmbătă" (I used to go to the market every Saturday).',
          },
          no: {
            answer: 'Was it a single completed action?',
            explanation: 'Use perfectul compus for one-time events.',
            followUp: {
              question: 'Was it a background/ongoing action interrupted by another event?',
              yes: {
                answer: 'Use the imperfect for the background action',
                explanation: 'E.g., "Dormeam când a sunat telefonul" (I was sleeping when the phone rang).',
              },
              no: {
                answer: 'Use perfectul compus',
                explanation: 'E.g., "Am mâncat la ora 12" (I ate at 12 o\'clock).',
              },
            },
          },
        },
      ],
    },
  ],
};

export default imperfectTenseTutorial;
