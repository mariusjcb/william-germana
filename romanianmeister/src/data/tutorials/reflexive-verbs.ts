import type { GrammarTutorial } from '../../store/types';

const reflexiveVerbsTutorial: GrammarTutorial = {
  topicId: 'reflexive-verbs',
  title: 'Reflexive Verbs',
  introduction:
    'Reflexive verbs in Romanian use reflexive pronouns to indicate that the subject performs and receives the action. Many common everyday verbs are reflexive in Romanian even though their English equivalents are not (e.g., "a se spăla" — to wash oneself). Romanian has both accusative and dative reflexive pronouns.',
  sections: [
    {
      id: 'reflexive-pronouns',
      title: 'Reflexive Pronouns',
      blocks: [
        {
          type: 'table',
          headers: ['Person', 'Accusative Reflexive', 'Dative Reflexive', 'English'],
          rows: [
            ['eu', 'mă', 'îmi', 'myself'],
            ['tu', 'te', 'îți', 'yourself'],
            ['el/ea', 'se', 'își', 'himself/herself'],
            ['noi', 'ne', 'ne', 'ourselves'],
            ['voi', 'vă', 'vă', 'yourselves'],
            ['ei/ele', 'se', 'își', 'themselves'],
          ],
          caption: 'Reflexive pronouns — accusative and dative forms',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'The accusative reflexive is more common. It is used when the subject does something to itself directly. The dative reflexive is used when the subject does something for itself or to a body part.',
        },
      ],
    },
    {
      id: 'conjugation-patterns',
      title: 'Conjugating Reflexive Verbs',
      blocks: [
        {
          type: 'rule',
          title: 'Word Order',
          content:
            'The reflexive pronoun comes before the conjugated verb: "Eu mă spăl" (I wash myself). In dictionaries, reflexive verbs are listed with "se": a se spăla, a se trezi, a se îmbrăca.',
        },
        {
          type: 'table',
          headers: ['Person', 'a se spăla (to wash)', 'a se trezi (to wake up)'],
          rows: [
            ['eu', 'mă spăl', 'mă trezesc'],
            ['tu', 'te speli', 'te trezești'],
            ['el/ea', 'se spală', 'se trezește'],
            ['noi', 'ne spălăm', 'ne trezim'],
            ['voi', 'vă spălați', 'vă treziți'],
            ['ei/ele', 'se spală', 'se trezesc'],
          ],
          caption: 'Present tense conjugation of two reflexive verbs',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Mă trezesc la șapte în fiecare dimineață.',
          english: 'I wake up at seven every morning.',
          highlights: [
            { text: 'Mă trezesc', role: 'verb' },
            { text: 'la șapte', role: 'time' },
          ],
        },
        {
          type: 'example',
          romanian: 'Copiii se îmbracă singuri.',
          english: 'The children get dressed by themselves.',
          highlights: [
            { text: 'Copiii', role: 'subject' },
            { text: 'se îmbracă', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'common-reflexive',
      title: 'Common Reflexive Verbs',
      blocks: [
        {
          type: 'text',
          content:
            'Many daily routine verbs are reflexive in Romanian. Some verbs are always reflexive, while others can be used both reflexively and non-reflexively with a change in meaning.',
        },
        {
          type: 'table',
          headers: ['Romanian', 'English', 'Category'],
          rows: [
            ['a se spăla', 'to wash (oneself)', 'Daily routine'],
            ['a se trezi', 'to wake up', 'Daily routine'],
            ['a se îmbrăca', 'to get dressed', 'Daily routine'],
            ['a se culca', 'to go to bed', 'Daily routine'],
            ['a se simți', 'to feel', 'Emotions'],
            ['a se bucura', 'to be glad', 'Emotions'],
            ['a se gândi (la)', 'to think (about)', 'Mental'],
            ['a se uita (la)', 'to look (at) / watch', 'Perception'],
            ['a se plimba', 'to take a walk', 'Movement'],
            ['a se opri', 'to stop', 'Movement'],
          ],
          caption: 'Essential reflexive verbs for A2',
        },
        {
          type: 'comparison',
          left: {
            title: 'Reflexive',
            items: ['Mă spăl. (I wash myself.)', 'Se uită la TV. (He watches TV.)', 'Ne plimbăm. (We take a walk.)'],
          },
          right: {
            title: 'Non-reflexive',
            items: ['Spăl hainele. (I wash the clothes.)', 'Uită cheia. (He forgets the key.)', 'Plimbă câinele. (He walks the dog.)'],
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Notice that "a se uita" (to look at/watch) and "a uita" (to forget) are completely different verbs. The reflexive pronoun changes the meaning entirely.',
        },
      ],
    },
    {
      id: 'past-negative',
      title: 'Reflexives in Past & Negative',
      blocks: [
        {
          type: 'rule',
          title: 'Past Tense of Reflexive Verbs',
          content:
            'In the past tense, the reflexive pronoun comes before the auxiliary "a avea": "M-am spălat" (I washed myself). Note the contraction: "mă + am" becomes "m-am."',
        },
        {
          type: 'table',
          headers: ['Person', 'a se spăla (past)', 'English'],
          rows: [
            ['eu', 'm-am spălat', 'I washed (myself)'],
            ['tu', 'te-ai spălat', 'you washed (yourself)'],
            ['el/ea', 's-a spălat', 'he/she washed'],
            ['noi', 'ne-am spălat', 'we washed (ourselves)'],
            ['voi', 'v-ați spălat', 'you all washed'],
            ['ei/ele', 's-au spălat', 'they washed'],
          ],
          caption: 'Past tense of reflexive verbs (with contractions)',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Nu m-am trezit la timp azi.',
          english: 'I did not wake up on time today.',
          highlights: [
            { text: 'Nu', role: 'negation' },
            { text: 'm-am trezit', role: 'verb' },
            { text: 'azi', role: 'time' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The contractions (m-am, te-ai, s-a, ne-am, v-ați, s-au) are always written with a hyphen. These are mandatory in standard Romanian — never write "mă am."',
        },
      ],
    },
  ],
};

export default reflexiveVerbsTutorial;
