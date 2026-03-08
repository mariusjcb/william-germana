import type { GrammarTutorial } from '../../store/types';

const conditionalMoodTutorial: GrammarTutorial = {
  topicId: 'conditional-mood',
  title: 'Conditional Mood (Condiționalul)',
  introduction:
    'The conditional mood expresses hypothetical situations, polite requests, and wishes. It is formed with the auxiliary "aș/ai/ar/am/ați/ar" followed by the infinitive (without "a"). It corresponds to English "would + verb." Mastering the conditional allows you to be polite, express preferences, and discuss hypothetical scenarios.',
  sections: [
    {
      id: 'formation',
      title: 'Formation: Auxiliary + Infinitive',
      blocks: [
        {
          type: 'rule',
          title: 'Conditional Formation',
          content:
            'The conditional is formed with the conditional auxiliary (derived from "a avea") + the short infinitive of the main verb (without "a"). The auxiliary changes for person; the infinitive stays the same.',
        },
        {
          type: 'table',
          headers: ['Person', 'Auxiliary', 'Example (a lucra)', 'English'],
          rows: [
            ['eu', 'aș', 'aș lucra', 'I would work'],
            ['tu', 'ai', 'ai lucra', 'you would work'],
            ['el/ea', 'ar', 'ar lucra', 'he/she would work'],
            ['noi', 'am', 'am lucra', 'we would work'],
            ['voi', 'ați', 'ați lucra', 'you all would work'],
            ['ei/ele', 'ar', 'ar lucra', 'they would work'],
          ],
          caption: 'Conditional mood formation',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'The conditional auxiliaries "am" and "ați" look identical to the past tense auxiliaries. Context tells them apart: conditional is followed by the infinitive (am lucra), past tense by the participle (am lucrat).',
        },
      ],
    },
    {
      id: 'polite-requests',
      title: 'Polite Requests & Preferences',
      blocks: [
        {
          type: 'text',
          content:
            'The conditional is commonly used for polite requests, offering suggestions, and expressing preferences. This is the equivalent of English "Would you...?" or "I would like...".',
        },
        {
          type: 'example',
          romanian: 'Aș vrea o cafea, vă rog.',
          english: 'I would like a coffee, please.',
          highlights: [
            { text: 'Aș vrea', role: 'verb' },
            { text: 'o cafea', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Ai putea să mă ajuți?',
          english: 'Could you help me?',
          highlights: [
            { text: 'Ai putea', role: 'verb' },
            { text: 'să mă ajuți', role: 'verb' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'Direct (less polite)',
            items: [
              'Vreau o cafea. (I want a coffee.)',
              'Dă-mi sarea. (Give me the salt.)',
              'Ajută-mă. (Help me.)',
            ],
          },
          right: {
            title: 'Conditional (polite)',
            items: [
              'Aș vrea o cafea. (I would like a coffee.)',
              'Mi-ai da sarea? (Would you give me the salt?)',
              'M-ai putea ajuta? (Could you help me?)',
            ],
          },
        },
      ],
    },
    {
      id: 'conditional-sentences',
      title: 'Conditional Sentences (If...then)',
      blocks: [
        {
          type: 'rule',
          title: 'If-Then Structure',
          content:
            'Romanian conditional sentences use "dacă" (if) + imperfect/subjunctive in the if-clause, and the conditional mood in the main clause: "Dacă aș avea bani, aș călători" (If I had money, I would travel).',
        },
        {
          type: 'example',
          romanian: 'Dacă aș avea mai mult timp, aș învăța să cânt la pian.',
          english: 'If I had more time, I would learn to play the piano.',
          highlights: [
            { text: 'Dacă', role: 'prefix' },
            { text: 'aș avea', role: 'verb' },
            { text: 'aș învăța', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Dacă ar fi frumos afară, am merge la plimbare.',
          english: 'If the weather were nice, we would go for a walk.',
          highlights: [
            { text: 'Dacă', role: 'prefix' },
            { text: 'ar fi', role: 'verb' },
            { text: 'am merge', role: 'verb' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'If', content: 'Dacă', role: 'other' },
            { position: 2, label: 'Cond. aux.', content: 'aș', role: 'verb' },
            { position: 3, label: 'Infinitive', content: 'avea bani', role: 'verb' },
            { position: 4, label: 'Cond. aux.', content: 'aș', role: 'verb' },
            { position: 5, label: 'Infinitive', content: 'călători', role: 'verb' },
          ],
          caption: 'Structure of a conditional sentence',
        },
      ],
    },
    {
      id: 'negation-past-conditional',
      title: 'Negation & Past Conditional',
      blocks: [
        {
          type: 'rule',
          title: 'Negating the Conditional',
          content:
            'Place "nu" before the conditional auxiliary: "Nu aș merge" (I would not go). The past conditional (for unreal past situations) uses the conditional of "a fi" + past participle: "Aș fi mers" (I would have gone).',
        },
        {
          type: 'table',
          headers: ['Type', 'Affirmative', 'Negative'],
          rows: [
            ['Present cond.', 'Aș lucra', 'Nu aș lucra'],
            ['Present cond.', 'Ar veni', 'Nu ar veni'],
            ['Past cond.', 'Aș fi lucrat', 'Nu aș fi lucrat'],
            ['Past cond.', 'Ar fi venit', 'Nu ar fi venit'],
          ],
          caption: 'Conditional mood: present and past, affirmative and negative',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Dacă aș fi știut, nu aș fi plecat.',
          english: 'If I had known, I would not have left.',
          highlights: [
            { text: 'aș fi știut', role: 'verb' },
            { text: 'nu aș fi plecat', role: 'verb' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The past conditional is used for regrets and unreal past situations. It is more advanced, but very useful: "Aș fi vrut să vin" (I would have liked to come).',
        },
      ],
    },
  ],
};

export default conditionalMoodTutorial;
