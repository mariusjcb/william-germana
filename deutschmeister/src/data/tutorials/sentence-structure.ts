import type { GrammarTutorial } from '../../store/types';

const tutorial: GrammarTutorial = {
  topicId: 'sentence-structure',
  title: 'Sentence Structure',
  introduction:
    'German sentence structure follows strict rules, especially the famous V2 (verb-second) rule. Understanding word order is essential for building correct German sentences at every level.',
  sections: [
    {
      id: 'v2-rule',
      title: 'The V2 Rule',
      blocks: [
        {
          type: 'rule',
          title: 'Verb in Position 2',
          content:
            'In German statements (declarative sentences), the conjugated verb ALWAYS occupies the second position. This is the most important rule in German word order and is known as the V2 rule.',
        },
        {
          type: 'diagram',
          caption: 'The verb is always second!',
          slots: [
            { position: 1, label: 'Position 1', content: 'Subject / Time / etc.', role: 'subject' },
            { position: 2, label: 'Position 2', content: 'VERB', role: 'verb' },
            { position: 3, label: 'Position 3+', content: 'Rest of the sentence', role: 'other' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Position 1 can be filled by different elements — the subject, a time expression, or even an object — but the verb always stays in position 2.',
        },
      ],
    },
    {
      id: 'normal-word-order',
      title: 'Normal Word Order',
      blocks: [
        {
          type: 'text',
          content:
            'The default word order in German is Subject–Verb–Object (SVO), just like English. When the subject is in position 1, this is called "normal" or "straight" word order.',
        },
        {
          type: 'diagram',
          caption: 'Subject – Verb – Object',
          slots: [
            { position: 1, label: 'Position 1', content: 'Ich', role: 'subject' },
            { position: 2, label: 'Position 2', content: 'spiele', role: 'verb' },
            { position: 3, label: 'Position 3', content: 'Fußball', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Ich spiele Fußball.',
          english: 'I play football.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'spiele', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Wir lernen Deutsch.',
          english: 'We are learning German.',
          highlights: [
            { text: 'Wir', role: 'subject' },
            { text: 'lernen', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Er trinkt Kaffee.',
          english: 'He drinks coffee.',
          highlights: [
            { text: 'Er', role: 'subject' },
            { text: 'trinkt', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'inverted-word-order',
      title: 'Inverted Word Order',
      blocks: [
        {
          type: 'rule',
          title: 'Inversion',
          content:
            'When something other than the subject comes first (e.g., a time expression), the subject moves to the position directly after the verb. The verb stays in position 2 — always!',
        },
        {
          type: 'diagram',
          caption: 'Time first — subject moves after the verb',
          slots: [
            { position: 1, label: 'Position 1', content: 'Heute', role: 'time' },
            { position: 2, label: 'Position 2', content: 'spiele', role: 'verb' },
            { position: 3, label: 'Position 3', content: 'ich', role: 'subject' },
            { position: 4, label: 'Position 4', content: 'Fußball', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Heute spiele ich Fußball.',
          english: 'Today I play football.',
          highlights: [
            { text: 'Heute', role: 'time' },
            { text: 'spiele', role: 'verb' },
            { text: 'ich', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Morgen fahren wir nach Berlin.',
          english: 'Tomorrow we are going to Berlin.',
          highlights: [
            { text: 'Morgen', role: 'time' },
            { text: 'fahren', role: 'verb' },
            { text: 'wir', role: 'subject' },
          ],
        },
      ],
    },
    {
      id: 'time-manner-place',
      title: 'Time–Manner–Place',
      blocks: [
        {
          type: 'rule',
          title: 'TMP Order',
          content:
            'When a German sentence has multiple adverbial elements, they follow the Time–Manner–Place order (TMP). Think: WHEN – HOW – WHERE.',
        },
        {
          type: 'table',
          headers: ['Order', 'Type', 'Example'],
          rows: [
            ['1st', 'Time (wann?)', 'heute'],
            ['2nd', 'Manner (wie?)', 'gern'],
            ['3rd', 'Place (wo?)', 'im Park'],
          ],
          caption: 'Time – Manner – Place',
        },
        {
          type: 'example',
          german: 'Ich spiele heute gern im Park Fußball.',
          english: 'I like playing football in the park today.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'spiele', role: 'verb' },
            { text: 'heute', role: 'time' },
          ],
        },
      ],
    },
    {
      id: 'key-points',
      title: 'Key Points',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The V2 rule applies to main clauses (statements) only. In subordinate clauses introduced by words like "weil" or "dass," the verb goes to the very end.',
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'In yes/no questions, the verb moves to position 1 — that is the only time the verb is not in position 2 in a main clause.',
        },
      ],
    },
  ],
};

export default tutorial;
