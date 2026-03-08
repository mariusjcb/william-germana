import type { GrammarTutorial } from '../../store/types';

const accusativePronounsTutorial: GrammarTutorial = {
  topicId: 'accusative-pronouns',
  title: 'Accusative Pronouns (Direct Object)',
  introduction:
    'Accusative pronouns replace direct objects — the thing or person directly receiving the action. Romanian has both unstressed (clitic) and stressed forms. The unstressed forms are used most frequently and have specific placement rules that differ from English word order.',
  sections: [
    {
      id: 'forms',
      title: 'Accusative Pronoun Forms',
      blocks: [
        {
          type: 'table',
          headers: ['Person', 'Unstressed', 'Stressed', 'English'],
          rows: [
            ['1st sg.', 'mă', 'pe mine', 'me'],
            ['2nd sg.', 'te', 'pe tine', 'you'],
            ['3rd sg. m.', 'îl', 'pe el', 'him'],
            ['3rd sg. f.', 'o', 'pe ea', 'her'],
            ['1st pl.', 'ne', 'pe noi', 'us'],
            ['2nd pl.', 'vă', 'pe voi', 'you (pl.)'],
            ['3rd pl. m.', 'îi', 'pe ei', 'them (m.)'],
            ['3rd pl. f.', 'le', 'pe ele', 'them (f.)'],
          ],
          caption: 'Accusative pronoun forms — unstressed and stressed',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Unstressed pronouns are the default choice. Stressed forms are used for emphasis or contrast: "Pe mine mă cheamă Ana" (ME, they call Ana / My name is Ana).',
        },
      ],
    },
    {
      id: 'placement',
      title: 'Placement Rules',
      blocks: [
        {
          type: 'rule',
          title: 'Basic Placement',
          content:
            'Unstressed accusative pronouns come before the conjugated verb in most cases: "Îl văd" (I see him), "Mă cunoști?" (Do you know me?). In the past tense, they come before the auxiliary: "L-am văzut" (I saw him).',
        },
        {
          type: 'example',
          romanian: 'Te sun diseară.',
          english: 'I will call you tonight.',
          highlights: [
            { text: 'Te', role: 'object' },
            { text: 'sun', role: 'verb' },
            { text: 'diseară', role: 'time' },
          ],
        },
        {
          type: 'example',
          romanian: 'Nu o cunosc pe Maria.',
          english: 'I do not know Maria.',
          highlights: [
            { text: 'Nu', role: 'negation' },
            { text: 'o', role: 'object' },
            { text: 'cunosc', role: 'verb' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Negation', content: 'Nu', role: 'other' },
            { position: 2, label: 'Pronoun', content: 'o', role: 'object' },
            { position: 3, label: 'Verb', content: 'cunosc', role: 'verb' },
            { position: 4, label: 'Marker', content: 'pe', role: 'other' },
            { position: 5, label: 'Name', content: 'Maria', role: 'object' },
          ],
          caption: 'Word order with accusative pronoun and pronoun doubling',
        },
      ],
    },
    {
      id: 'doubling',
      title: 'Pronoun Doubling',
      blocks: [
        {
          type: 'rule',
          title: 'When to Double',
          content:
            'Romanian frequently "doubles" a direct object noun with a clitic pronoun. This is mandatory when the direct object is a person introduced by "pe": "Îl văd pe Andrei" (I see Andrei). The clitic (îl) doubles the noun (Andrei).',
        },
        {
          type: 'example',
          romanian: 'O chem pe mama.',
          english: 'I am calling (my) mom.',
          highlights: [
            { text: 'O', role: 'object' },
            { text: 'chem', role: 'verb' },
            { text: 'pe mama', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Îi aștept pe copii.',
          english: 'I am waiting for the children.',
          highlights: [
            { text: 'Îi', role: 'object' },
            { text: 'aștept', role: 'verb' },
            { text: 'pe copii', role: 'object' },
          ],
        },
        {
          type: 'decision',
          question: 'Is the direct object a specific person (or personified being)?',
          yes: {
            answer: 'Use "pe" + noun AND double with a clitic pronoun',
            explanation: 'E.g., "Îl sun pe Mihai" (I call Mihai). Both the clitic "îl" and "pe" are needed.',
          },
          no: {
            answer: 'No doubling needed for things',
            explanation: 'E.g., "Citesc cartea" (I read the book). No "pe," no clitic doubling.',
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Pronoun doubling is one of the most distinctive features of Romanian. It may feel redundant at first, but it is grammatically required for person direct objects.',
        },
      ],
    },
    {
      id: 'contractions',
      title: 'Contractions in Past Tense',
      blocks: [
        {
          type: 'text',
          content:
            'When accusative clitics appear before the past tense auxiliary "a avea," contractions occur. These are written with a hyphen.',
        },
        {
          type: 'table',
          headers: ['Full Form', 'Contraction', 'Example'],
          rows: [
            ['mă + am', 'm-am', 'M-am spălat. (I washed.)'],
            ['te + ai', 'te-ai', 'Te-ai trezit. (You woke up.)'],
            ['îl + am', 'l-am', 'L-am văzut. (I saw him.)'],
            ['o + am', 'am ... -o', 'Am văzut-o. (I saw her.)'],
            ['ne + am', 'ne-am', 'Ne-am oprit. (We stopped.)'],
            ['îi + am', 'i-am', 'I-am chemat. (I called them.)'],
          ],
          caption: 'Common contractions with past tense auxiliary',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'The feminine 3rd person "o" is special: it typically moves after the participle in past tense — "Am văzut-o" (I saw her), not "O am văzut."',
        },
      ],
    },
  ],
};

export default accusativePronounsTutorial;
