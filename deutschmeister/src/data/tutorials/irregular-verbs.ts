import type { GrammarTutorial } from '../../store/types';

const irregularVerbs: GrammarTutorial = {
  topicId: 'irregular-verbs',
  title: 'Irregular Verbs: sein & haben',
  introduction:
    'The verbs "sein" (to be) and "haben" (to have) are the two most important verbs in German. They are used on their own and as helping verbs to form past tenses. Both are highly irregular, so you need to memorize their forms.',
  sections: [
    {
      id: 'sein',
      title: 'sein (to be)',
      blocks: [
        {
          type: 'rule',
          title: 'The Most Important German Verb',
          content:
            '"Sein" is the most important verb in German. It is used to describe identity, professions, nationality, feelings, and states of being. Like English "to be," it is completely irregular and must be memorized.',
        },
        {
          type: 'table',
          headers: ['Pronoun', 'sein', 'English'],
          rows: [
            ['ich', 'bin', 'I am'],
            ['du', 'bist', 'you are (informal)'],
            ['er/sie/es', 'ist', 'he/she/it is'],
            ['wir', 'sind', 'we are'],
            ['ihr', 'seid', 'you all are'],
            ['sie/Sie', 'sind', 'they are / you are (formal)'],
          ],
          caption: 'Full conjugation of "sein" in the present tense',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Notice that "wir" and "sie/Sie" share the same form: "sind." This is also true for many other German verbs.',
        },
      ],
    },
    {
      id: 'haben',
      title: 'haben (to have)',
      blocks: [
        {
          type: 'rule',
          title: 'The Second Most Important Verb',
          content:
            '"Haben" is the second most important verb in German. It expresses possession, and it is also used as a helper verb to form the past tense (Perfekt) for most verbs.',
        },
        {
          type: 'table',
          headers: ['Pronoun', 'haben', 'English'],
          rows: [
            ['ich', 'habe', 'I have'],
            ['du', 'hast', 'you have (informal)'],
            ['er/sie/es', 'hat', 'he/she/it has'],
            ['wir', 'haben', 'we have'],
            ['ihr', 'habt', 'you all have'],
            ['sie/Sie', 'haben', 'they have / you have (formal)'],
          ],
          caption: 'Full conjugation of "haben" in the present tense',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            '"Haben" drops the "b" in the du-form (hast) and er/sie/es-form (hat). Watch out for this pattern!',
        },
      ],
    },
    {
      id: 'side-by-side',
      title: 'Side by Side',
      blocks: [
        {
          type: 'text',
          content:
            'Comparing the two verbs side by side helps you see how different their conjugation patterns are. Neither follows the regular verb pattern.',
        },
        {
          type: 'comparison',
          left: {
            title: 'sein (to be)',
            items: [
              'ich bin',
              'du bist',
              'er/sie/es ist',
              'wir sind',
              'ihr seid',
              'sie/Sie sind',
            ],
          },
          right: {
            title: 'haben (to have)',
            items: [
              'ich habe',
              'du hast',
              'er/sie/es hat',
              'wir haben',
              'ihr habt',
              'sie/Sie haben',
            ],
          },
        },
      ],
    },
    {
      id: 'in-context',
      title: 'In Context',
      blocks: [
        {
          type: 'text',
          content:
            'Let\'s see "sein" and "haben" used in everyday sentences. Pay attention to the highlighted verbs.',
        },
        {
          type: 'example',
          german: 'Ich bin Student.',
          english: 'I am a student.',
          highlights: [{ text: 'bin', role: 'verb' }],
        },
        {
          type: 'example',
          german: 'Wir sind aus Deutschland.',
          english: 'We are from Germany.',
          highlights: [{ text: 'sind', role: 'verb' }],
        },
        {
          type: 'example',
          german: 'Ich habe einen Hund.',
          english: 'I have a dog.',
          highlights: [{ text: 'habe', role: 'verb' }],
        },
        {
          type: 'example',
          german: 'Er hat zwei Kinder.',
          english: 'He has two children.',
          highlights: [{ text: 'hat', role: 'verb' }],
        },
      ],
    },
    {
      id: 'common-expressions',
      title: 'Common Expressions',
      blocks: [
        {
          type: 'text',
          content:
            'Many everyday expressions use "sein" or "haben." Some of these translate differently than you might expect from English.',
        },
        {
          type: 'table',
          headers: ['Expression', 'English'],
          rows: [
            ['Ich bin müde.', 'I am tired.'],
            ['Ich bin krank.', 'I am sick.'],
            ['Er ist fertig.', 'He is done/ready.'],
            ['Wir sind spät dran.', 'We are running late.'],
            ['Ich habe Hunger.', 'I am hungry. (lit. I have hunger)'],
            ['Ich habe Durst.', 'I am thirsty. (lit. I have thirst)'],
            ['Sie hat Angst.', 'She is afraid. (lit. She has fear)'],
            ['Wir haben Zeit.', 'We have time.'],
          ],
          caption: 'Common sein & haben expressions',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'German uses "haben" where English uses "to be" for physical feelings: Hunger haben (to be hungry), Durst haben (to be thirsty), Angst haben (to be afraid).',
        },
      ],
    },
  ],
};

export default irregularVerbs;
