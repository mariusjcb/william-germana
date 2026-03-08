import type { GrammarTutorial } from '../../store/types';

const modalVerbs: GrammarTutorial = {
  topicId: 'modal-verbs',
  title: 'Modal Verbs',
  introduction:
    'Modal verbs express ability, permission, obligation, or desire. German has six modal verbs, and they follow a special sentence pattern: the modal verb is conjugated in position 2, and the main verb goes to the end of the sentence in its infinitive form.',
  sections: [
    {
      id: 'the-six-modals',
      title: 'The Six Modal Verbs',
      blocks: [
        {
          type: 'text',
          content:
            'There are six modal verbs in German. Each expresses a different attitude toward an action. "Möchten" is technically a subjunctive form of "mögen," but at the A1 level it is treated as its own modal verb meaning "would like."',
        },
        {
          type: 'table',
          headers: ['Modal', 'Meaning', 'Example'],
          rows: [
            ['können', 'can / to be able to', 'Ich kann schwimmen.'],
            ['müssen', 'must / to have to', 'Ich muss arbeiten.'],
            ['dürfen', 'may / to be allowed to', 'Darf ich fragen?'],
            ['wollen', 'to want to', 'Er will nach Hause gehen.'],
            ['sollen', 'should / to be supposed to', 'Du sollst mehr lernen.'],
            ['möchten', 'would like to', 'Ich möchte Kaffee trinken.'],
          ],
          caption: 'Overview of German modal verbs',
          colorCoded: true,
        },
      ],
    },
    {
      id: 'conjugation',
      title: 'Conjugation',
      blocks: [
        {
          type: 'text',
          content:
            'Modal verbs have irregular conjugation patterns. Notice that the ich-form and er/sie/es-form are always identical, and most modals change their vowel in the singular forms.',
        },
        {
          type: 'table',
          headers: ['Pronoun', 'können', 'müssen', 'dürfen', 'wollen', 'sollen', 'möchten'],
          rows: [
            ['ich', 'kann', 'muss', 'darf', 'will', 'soll', 'möchte'],
            ['du', 'kannst', 'musst', 'darfst', 'willst', 'sollst', 'möchtest'],
            ['er/sie/es', 'kann', 'muss', 'darf', 'will', 'soll', 'möchte'],
            ['wir', 'können', 'müssen', 'dürfen', 'wollen', 'sollen', 'möchten'],
            ['ihr', 'könnt', 'müsst', 'dürft', 'wollt', 'sollt', 'möchtet'],
            ['sie/Sie', 'können', 'müssen', 'dürfen', 'wollen', 'sollen', 'möchten'],
          ],
          caption: 'Full conjugation of all six modal verbs',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The ich-form and the er/sie/es-form are always the same for modal verbs. No "-e" or "-t" ending — just the bare stem!',
        },
      ],
    },
    {
      id: 'sentence-structure',
      title: 'Sentence Structure',
      blocks: [
        {
          type: 'rule',
          title: 'Modal Verb Frame',
          content:
            'In a sentence with a modal verb, the modal is conjugated and placed in position 2 (the normal verb position). The main verb stays in its infinitive form and goes to the very end of the sentence. This creates a "frame" around the middle of the sentence.',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Subject', content: 'Ich', role: 'subject' },
            { position: 2, label: 'Modal Verb', content: 'kann', role: 'verb' },
            { position: 3, label: 'Object / Info', content: 'Deutsch', role: 'object' },
            { position: 4, label: 'Infinitive', content: 'sprechen', role: 'verb' },
          ],
          caption: '"Ich kann Deutsch sprechen." — The modal frame',
        },
        {
          type: 'example',
          german: 'Ich kann Deutsch sprechen.',
          english: 'I can speak German.',
          highlights: [
            { text: 'kann', role: 'verb' },
            { text: 'sprechen', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'examples',
      title: 'Examples',
      blocks: [
        {
          type: 'text',
          content:
            'Here is one example for each modal verb. Notice how the modal is conjugated and the main verb is at the end in its infinitive form.',
        },
        {
          type: 'example',
          german: 'Ich kann gut kochen.',
          english: 'I can cook well.',
          highlights: [
            { text: 'kann', role: 'verb' },
            { text: 'kochen', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Du musst deine Hausaufgaben machen.',
          english: 'You must do your homework.',
          highlights: [
            { text: 'musst', role: 'verb' },
            { text: 'machen', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Hier darf man nicht rauchen.',
          english: 'One may not smoke here.',
          highlights: [
            { text: 'darf', role: 'verb' },
            { text: 'rauchen', role: 'verb' },
            { text: 'nicht', role: 'negation' },
          ],
        },
        {
          type: 'example',
          german: 'Er will ein Auto kaufen.',
          english: 'He wants to buy a car.',
          highlights: [
            { text: 'will', role: 'verb' },
            { text: 'kaufen', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Wir sollen leise sein.',
          english: 'We should be quiet.',
          highlights: [
            { text: 'sollen', role: 'verb' },
            { text: 'sein', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Ich möchte einen Kaffee bestellen.',
          english: 'I would like to order a coffee.',
          highlights: [
            { text: 'möchte', role: 'verb' },
            { text: 'bestellen', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'koennen-vs-duerfen',
      title: 'können vs. dürfen',
      blocks: [
        {
          type: 'text',
          content:
            'English uses "can" for both ability and permission, but German distinguishes between them. This is one of the most common mistakes for English speakers.',
        },
        {
          type: 'comparison',
          left: {
            title: 'können (ability)',
            items: [
              'Expresses what you are able to do',
              'Ich kann schwimmen. — I can swim. (I have the ability)',
              'Er kann Klavier spielen. — He can play piano.',
              'Think: "I am physically/mentally capable"',
            ],
          },
          right: {
            title: 'dürfen (permission)',
            items: [
              'Expresses what you are allowed to do',
              'Darf ich hier sitzen? — May I sit here? (Do I have permission?)',
              'Man darf hier nicht parken. — One may not park here.',
              'Think: "The rules / someone allows it"',
            ],
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Saying "Ich kann hier nicht parken" means "I am unable to park here" (maybe the space is too small). Saying "Ich darf hier nicht parken" means "I am not allowed to park here" (there is a rule against it).',
        },
      ],
    },
  ],
};

export default modalVerbs;
