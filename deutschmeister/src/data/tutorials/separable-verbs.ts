import type { GrammarTutorial } from '../../store/types';

const separableVerbs: GrammarTutorial = {
  topicId: 'separable-verbs',
  title: 'Separable Verbs',
  introduction:
    'German has a special group of verbs called "trennbare Verben" (separable verbs). These verbs have a prefix that detaches from the verb and moves to the end of the sentence. Learning to recognize and use them is essential for building correct German sentences.',
  sections: [
    {
      id: 'what-are-separable-verbs',
      title: 'What Are Separable Verbs?',
      blocks: [
        {
          type: 'rule',
          title: 'The Splitting Rule',
          content:
            'Separable verbs consist of a base verb plus a prefix. In a main clause, the prefix separates from the verb and travels to the very end of the sentence. The conjugated verb stays in position 2, and the prefix lands at the end.',
        },
        {
          type: 'text',
          content:
            'For example, "aufstehen" (to get up) splits into "stehe … auf." The verb "stehen" is conjugated normally in position 2, and the prefix "auf" goes to the end. In the infinitive form (e.g., after modal verbs), the verb stays together: "Ich muss aufstehen."',
        },
        {
          type: 'example',
          german: 'Ich stehe um 7 Uhr auf.',
          english: 'I get up at 7 o\'clock.',
          highlights: [
            { text: 'stehe', role: 'verb' },
            { text: 'auf', role: 'prefix' },
          ],
        },
      ],
    },
    {
      id: 'how-they-split',
      title: 'How They Split',
      blocks: [
        {
          type: 'text',
          content:
            'The diagram below shows how a separable verb sentence is structured. The conjugated verb stem sits in position 2, and the separated prefix occupies the final position.',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Subject', content: 'Ich', role: 'subject' },
            { position: 2, label: 'Conjugated Verb', content: 'stehe', role: 'verb' },
            { position: 3, label: 'Time / Info', content: 'um 7 Uhr', role: 'time' },
            { position: 4, label: 'Prefix', content: 'auf', role: 'prefix' },
          ],
          caption: 'Sentence structure with separable verb "aufstehen"',
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'The prefix always goes to the very end of the main clause, no matter how long the sentence is.',
        },
      ],
    },
    {
      id: 'common-prefixes',
      title: 'Common Separable Prefixes',
      blocks: [
        {
          type: 'text',
          content:
            'Certain prefixes are always separable. Here are the most common ones you will encounter at the A1 level.',
        },
        {
          type: 'table',
          headers: ['Prefix', 'Meaning', 'Example Verb', 'English'],
          rows: [
            ['an-', 'on, at', 'anfangen', 'to begin'],
            ['auf-', 'up, open', 'aufstehen', 'to get up'],
            ['aus-', 'out', 'ausgehen', 'to go out'],
            ['ein-', 'in, into', 'einkaufen', 'to shop'],
            ['mit-', 'with, along', 'mitkommen', 'to come along'],
            ['vor-', 'before, in front', 'vorstellen', 'to introduce'],
            ['zu-', 'to, closed', 'zumachen', 'to close'],
            ['zurück-', 'back', 'zurückkommen', 'to come back'],
          ],
          caption: 'Common separable prefixes at A1 level',
          colorCoded: true,
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
            'Study these examples carefully. The separated prefix is highlighted in each sentence.',
        },
        {
          type: 'example',
          german: 'Ich stehe früh auf.',
          english: 'I get up early.',
          highlights: [
            { text: 'stehe', role: 'verb' },
            { text: 'auf', role: 'prefix' },
          ],
        },
        {
          type: 'example',
          german: 'Er kauft im Supermarkt ein.',
          english: 'He shops at the supermarket.',
          highlights: [
            { text: 'kauft', role: 'verb' },
            { text: 'ein', role: 'prefix' },
          ],
        },
        {
          type: 'example',
          german: 'Wir fangen um 8 Uhr an.',
          english: 'We begin at 8 o\'clock.',
          highlights: [
            { text: 'fangen', role: 'verb' },
            { text: 'an', role: 'prefix' },
          ],
        },
        {
          type: 'example',
          german: 'Sie macht die Tür zu.',
          english: 'She closes the door.',
          highlights: [
            { text: 'macht', role: 'verb' },
            { text: 'zu', role: 'prefix' },
          ],
        },
      ],
    },
    {
      id: 'remember',
      title: 'Remember',
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          content:
            'If the prefix is stressed (emphasized) when you say the infinitive, it is separable. For example, AUFstehen — the stress is on "auf," so it separates. Listen for the stress!',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'The prefixes be-, ver-, er-, ent-, emp-, ge-, zer-, and miss- are NEVER separable. For example: "verstehen" (to understand) stays together: "Ich verstehe das." These inseparable prefixes are always unstressed.',
        },
        {
          type: 'text',
          content:
            'A few prefixes like "über-," "um-," and "durch-" can be either separable or inseparable depending on the verb. At the A1 level, focus on the clearly separable prefixes listed above.',
        },
      ],
    },
  ],
};

export default separableVerbs;
