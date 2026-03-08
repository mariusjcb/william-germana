import type { GrammarTutorial } from '../../store/types';

const accusativeCase: GrammarTutorial = {
  topicId: 'accusative-case',
  title: 'Accusative Case',
  introduction:
    'The accusative case (der Akkusativ) marks the direct object of a sentence — the person or thing that receives the action. To find the direct object, ask "Wen?" (Whom?) or "Was?" (What?). The great news for beginners: only masculine articles change in the accusative. Feminine, neuter, and plural articles stay the same as in the nominative.',
  sections: [
    {
      id: 'what-is-accusative',
      title: 'What is Accusative?',
      blocks: [
        {
          type: 'rule',
          title: 'The Direct Object Case',
          content:
            'The accusative case identifies the direct object of a verb — the person or thing that is directly affected by the action. To find the direct object, ask "Wen?" (Whom?) for people or "Was?" (What?) for things after the verb.',
        },
        {
          type: 'text',
          content:
            'In the sentence "Ich kaufe den Apfel" (I buy the apple), "den Apfel" is the direct object. The apple is the thing being bought — it receives the action. Ask: "Was kaufe ich?" → "Den Apfel." That answer is in the accusative case.',
        },
        {
          type: 'example',
          german: 'Ich sehe den Mann.',
          english: 'I see the man.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'sehe', role: 'verb' },
            { text: 'den Mann', role: 'object' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Ask: "Wen sehe ich?" → "Den Mann." The answer is the direct object, so it takes the accusative case.',
        },
      ],
    },
    {
      id: 'what-changes',
      title: 'What Changes?',
      blocks: [
        {
          type: 'rule',
          title: 'Only Masculine Changes!',
          content:
            'The accusative case only affects masculine articles. "Der" becomes "den," "ein" becomes "einen," and "kein" becomes "keinen." Feminine, neuter, and plural articles remain exactly the same as in the nominative.',
        },
        {
          type: 'table',
          headers: ['Gender', 'Nominative', 'Accusative'],
          rows: [
            ['Masculine', 'der / ein / kein', 'den / einen / keinen'],
            ['Feminine', 'die / eine / keine', 'die / eine / keine'],
            ['Neuter', 'das / ein / kein', 'das / ein / kein'],
            ['Plural', 'die / — / keine', 'die / — / keine'],
          ],
          caption: 'Nominative vs. accusative articles — only masculine changes',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Remember the pattern: masculine adds "-en" in the accusative. der → den, ein → einen, kein → keinen. Everything else stays the same!',
        },
      ],
    },
    {
      id: 'nominative-vs-accusative',
      title: 'Nominative vs. Accusative',
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Nominative (Subject)',
            items: [
              'Der Mann liest. — The man reads.',
              'Ein Hund schläft. — A dog is sleeping.',
              'Ask: "Wer?" (Who?)',
              'The one DOING the action',
            ],
          },
          right: {
            title: 'Accusative (Direct Object)',
            items: [
              'Ich sehe den Mann. — I see the man.',
              'Sie hat einen Hund. — She has a dog.',
              'Ask: "Wen/Was?" (Whom/What?)',
              'The one RECEIVING the action',
            ],
          },
        },
        {
          type: 'example',
          german: 'Der Mann kauft den Apfel.',
          english: 'The man buys the apple.',
          highlights: [
            { text: 'Der Mann', role: 'subject' },
            { text: 'kauft', role: 'verb' },
            { text: 'den Apfel', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Eine Frau liest einen Brief.',
          english: 'A woman reads a letter.',
          highlights: [
            { text: 'Eine Frau', role: 'subject' },
            { text: 'liest', role: 'verb' },
            { text: 'einen Brief', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Das Kind trinkt die Milch.',
          english: 'The child drinks the milk.',
          highlights: [
            { text: 'Das Kind', role: 'subject' },
            { text: 'trinkt', role: 'verb' },
            { text: 'die Milch', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'common-accusative-verbs',
      title: 'Common Accusative Verbs',
      blocks: [
        {
          type: 'text',
          content:
            'Many common German verbs take a direct object in the accusative case. Here are the most important ones you will use at the A1 level.',
        },
        {
          type: 'table',
          headers: ['Verb', 'English'],
          rows: [
            ['haben', 'to have'],
            ['kaufen', 'to buy'],
            ['sehen', 'to see'],
            ['lesen', 'to read'],
            ['trinken', 'to drink'],
            ['essen', 'to eat'],
            ['brauchen', 'to need'],
          ],
          caption: 'Common verbs that take accusative objects',
          colorCoded: true,
        },
        {
          type: 'example',
          german: 'Ich brauche einen Computer.',
          english: 'I need a computer.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'brauche', role: 'verb' },
            { text: 'einen Computer', role: 'object' },
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
            'Only masculine articles change in the accusative case. Feminine, neuter, and plural articles stay exactly the same as in the nominative. If you know the gender of the noun, you only need to worry about masculine!',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Certain prepositions ALWAYS require the accusative case: für (for), durch (through), gegen (against), ohne (without), um (around/at). After these prepositions, the noun is always in the accusative — even if it is not a direct object.',
        },
        {
          type: 'text',
          content:
            'For example: "Das Geschenk ist für den Mann" (The gift is for the man). Even though "den Mann" is not the direct object of a verb, the preposition "für" forces the accusative case.',
        },
      ],
    },
  ],
};

export default accusativeCase;
