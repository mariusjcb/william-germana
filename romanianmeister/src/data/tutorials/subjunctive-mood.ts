import type { GrammarTutorial } from '../../store/types';

const subjunctiveMoodTutorial: GrammarTutorial = {
  topicId: 'subjunctive-mood',
  title: 'Subjunctive Mood (Conjunctivul)',
  introduction:
    'The subjunctive is one of the most important and frequently used moods in Romanian. It is formed with the particle "să" followed by a conjugated verb and is used after verbs of desire, necessity, possibility, and emotion. Unlike in many other Romance languages, the Romanian subjunctive is alive and well in everyday speech.',
  sections: [
    {
      id: 'formation',
      title: 'Formation: să + Verb',
      blocks: [
        {
          type: 'rule',
          title: 'Subjunctive Formation',
          content:
            'The subjunctive is formed with "să" + the present tense conjugation of the verb. For most verbs, the subjunctive forms are identical to the present indicative, except the 3rd person singular and plural, which often differ.',
        },
        {
          type: 'table',
          headers: ['Person', 'Indicative (a lucra)', 'Subjunctive (a lucra)', 'Subjunctive (a merge)'],
          rows: [
            ['eu', 'lucrez', 'să lucrez', 'să merg'],
            ['tu', 'lucrezi', 'să lucrezi', 'să mergi'],
            ['el/ea', 'lucrează', 'să lucreze', 'să meargă'],
            ['noi', 'lucrăm', 'să lucrăm', 'să mergem'],
            ['voi', 'lucrați', 'să lucrați', 'să mergeți'],
            ['ei/ele', 'lucrează', 'să lucreze', 'să meargă'],
          ],
          caption: 'Indicative vs. subjunctive forms',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'The key difference is in the 3rd person: indicative "lucrează" vs. subjunctive "lucreze"; indicative "merge" vs. subjunctive "meargă." Always pay attention to this change.',
        },
      ],
    },
    {
      id: 'triggers',
      title: 'Verbs That Trigger the Subjunctive',
      blocks: [
        {
          type: 'text',
          content:
            'The subjunctive appears after certain "trigger" verbs and expressions. These express desire, necessity, ability, or emotion. The pattern is: trigger verb + "să" + subjunctive verb.',
        },
        {
          type: 'table',
          headers: ['Trigger', 'Meaning', 'Example'],
          rows: [
            ['a vrea', 'to want', 'Vreau să merg. (I want to go.)'],
            ['a trebui', 'must / to need', 'Trebuie să pleci. (You must leave.)'],
            ['a putea', 'can / to be able', 'Pot să te ajut. (I can help you.)'],
            ['a ști', 'to know how to', 'Știu să înot. (I know how to swim.)'],
            ['a-i plăcea', 'to like', 'Îmi place să citesc. (I like to read.)'],
            ['a spera', 'to hope', 'Sper să vină. (I hope he comes.)'],
            ['a se teme', 'to be afraid', 'Mă tem să nu plouă. (I\'m afraid it might rain.)'],
          ],
          caption: 'Common subjunctive triggers',
        },
        {
          type: 'example',
          romanian: 'Vreau să învăț limba română.',
          english: 'I want to learn Romanian.',
          highlights: [
            { text: 'Vreau', role: 'verb' },
            { text: 'să învăț', role: 'verb' },
            { text: 'limba română', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Trebuie să plecăm acum.',
          english: 'We must leave now.',
          highlights: [
            { text: 'Trebuie', role: 'verb' },
            { text: 'să plecăm', role: 'verb' },
            { text: 'acum', role: 'time' },
          ],
        },
      ],
    },
    {
      id: 'impersonal-expressions',
      title: 'Impersonal Expressions + Subjunctive',
      blocks: [
        {
          type: 'text',
          content:
            'Many impersonal expressions (those without a specific subject) are followed by "să" + subjunctive. These are extremely common in daily Romanian.',
        },
        {
          type: 'table',
          headers: ['Expression', 'Meaning', 'Example'],
          rows: [
            ['trebuie să', 'it is necessary to', 'Trebuie să mâncăm.'],
            ['e bine să', 'it is good to', 'E bine să dormi suficient.'],
            ['e important să', 'it is important to', 'E important să înveți.'],
            ['e posibil să', 'it is possible that', 'E posibil să plouă.'],
            ['e nevoie să', 'it is needed to', 'E nevoie să vorbim.'],
          ],
          caption: 'Impersonal expressions with subjunctive',
        },
        {
          type: 'comparison',
          left: {
            title: 'Romanian: Subjunctive',
            items: [
              'Vreau să merg. (I want to go.)',
              'Pot să citesc. (I can read.)',
              'Uses "să" + conjugated verb',
            ],
          },
          right: {
            title: 'English: Infinitive',
            items: [
              'I want to go.',
              'I can read.',
              'Uses "to" + base verb',
            ],
          },
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Romanian almost never uses the infinitive where English does. Instead of "I want to eat," Romanian says "Vreau să mănânc" (I want that-I-eat). The subjunctive replaces the infinitive in most cases.',
        },
      ],
    },
    {
      id: 'negation-special',
      title: 'Negation & Special Uses',
      blocks: [
        {
          type: 'rule',
          title: 'Negating the Subjunctive',
          content:
            'To negate the subjunctive, place "nu" between "să" and the verb: "să nu mergi" (that you don\'t go / don\'t go). This is also how commands and prohibitions are expressed politely.',
        },
        {
          type: 'example',
          romanian: 'Încearcă să nu întârzii.',
          english: 'Try not to be late.',
          highlights: [
            { text: 'să nu întârzii', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'E mai bine să nu spui nimic.',
          english: 'It is better not to say anything.',
          highlights: [
            { text: 'să nu spui', role: 'verb' },
            { text: 'nimic', role: 'negation' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Trigger', content: 'Încearcă', role: 'verb' },
            { position: 2, label: 'Particle', content: 'să', role: 'prefix' },
            { position: 3, label: 'Negation', content: 'nu', role: 'other' },
            { position: 4, label: 'Subj. verb', content: 'întârzii', role: 'verb' },
          ],
          caption: 'Word order: trigger + să + nu + subjunctive verb',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The subjunctive with "să" is also used as a polite imperative: "Să ai grijă!" (Take care!), "Să-mi spui!" (Tell me! / Let me know!).',
        },
      ],
    },
  ],
};

export default subjunctiveMoodTutorial;
