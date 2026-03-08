import type { GrammarTutorial } from '../../store/types';

const pastTenseTutorial: GrammarTutorial = {
  topicId: 'past-tense',
  title: 'Past Tense: Perfectul Compus',
  introduction:
    'The perfectul compus (compound past) is the most common past tense in spoken Romanian. It is formed with the auxiliary verb "a avea" (to have) conjugated in the present tense plus the past participle of the main verb. This is similar to English "I have worked" but is used for all completed past actions.',
  sections: [
    {
      id: 'auxiliary-verb',
      title: 'The Auxiliary: a avea',
      blocks: [
        {
          type: 'rule',
          title: 'Formation Rule',
          content:
            'Perfectul compus = auxiliary "a avea" (present tense) + past participle. The auxiliary is always conjugated to match the subject, while the participle stays the same regardless of subject.',
        },
        {
          type: 'table',
          headers: ['Person', 'Pronoun', 'Auxiliary', 'Example (a lucra)'],
          rows: [
            ['1st sg.', 'eu', 'am', 'am lucrat'],
            ['2nd sg.', 'tu', 'ai', 'ai lucrat'],
            ['3rd sg.', 'el/ea', 'a', 'a lucrat'],
            ['1st pl.', 'noi', 'am', 'am lucrat'],
            ['2nd pl.', 'voi', 'ați', 'ați lucrat'],
            ['3rd pl.', 'ei/ele', 'au', 'au lucrat'],
          ],
          caption: 'Auxiliary "a avea" forms for perfectul compus',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'The 1st person singular (eu am) and 1st person plural (noi am) share the same auxiliary form "am." Context or the pronoun clarifies which is meant.',
        },
      ],
    },
    {
      id: 'regular-participles',
      title: 'Regular Past Participles',
      blocks: [
        {
          type: 'text',
          content:
            'The past participle is formed by replacing the infinitive ending with the appropriate participle suffix. Each conjugation class has its own regular participle ending.',
        },
        {
          type: 'table',
          headers: ['Conjugation', 'Infinitive', 'Participle Ending', 'Example'],
          rows: [
            ['1st (-a)', 'a lucra', '-at', 'lucrat'],
            ['2nd (-ea)', 'a vedea', '-ut', 'văzut'],
            ['3rd (-e)', 'a merge', '-s / -ut', 'mers'],
            ['4th (-i/-î)', 'a dormi', '-it', 'dormit'],
          ],
          caption: 'Regular past participle formation by conjugation class',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Am lucrat toată ziua.',
          english: 'I worked all day.',
          highlights: [
            { text: 'Am', role: 'verb' },
            { text: 'lucrat', role: 'verb' },
            { text: 'toată ziua', role: 'time' },
          ],
        },
        {
          type: 'example',
          romanian: 'Ai dormit bine aseară?',
          english: 'Did you sleep well last night?',
          highlights: [
            { text: 'Ai dormit', role: 'verb' },
            { text: 'aseară', role: 'time' },
          ],
        },
      ],
    },
    {
      id: 'irregular-participles',
      title: 'Common Irregular Participles',
      blocks: [
        {
          type: 'text',
          content:
            'Many frequently used verbs have irregular past participles that must be memorized. Here are the most important ones for A2 level.',
        },
        {
          type: 'table',
          headers: ['Infinitive', 'English', 'Past Participle'],
          rows: [
            ['a fi', 'to be', 'fost'],
            ['a avea', 'to have', 'avut'],
            ['a face', 'to do/make', 'făcut'],
            ['a spune', 'to say', 'spus'],
            ['a scrie', 'to write', 'scris'],
            ['a bea', 'to drink', 'băut'],
            ['a lua', 'to take', 'luat'],
            ['a veni', 'to come', 'venit'],
            ['a vedea', 'to see', 'văzut'],
            ['a ști', 'to know', 'știut'],
          ],
          caption: 'Common irregular past participles',
        },
        {
          type: 'example',
          romanian: 'Am fost în România vara trecută.',
          english: 'I was in Romania last summer.',
          highlights: [
            { text: 'Am fost', role: 'verb' },
            { text: 'în România', role: 'object' },
            { text: 'vara trecută', role: 'time' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The participle of "a fi" is "fost." "Am fost" can mean both "I was" and "I have been." Romanian uses the compound past for both meanings.',
        },
      ],
    },
    {
      id: 'usage-negation',
      title: 'Usage & Negation',
      blocks: [
        {
          type: 'rule',
          title: 'Negation in the Past Tense',
          content:
            'To negate a past tense sentence, place "nu" before the auxiliary: nu am lucrat, nu ai dormit, nu a venit. The word "nu" always comes directly before the auxiliary.',
        },
        {
          type: 'example',
          romanian: 'Nu am mâncat nimic azi.',
          english: 'I did not eat anything today.',
          highlights: [
            { text: 'Nu', role: 'negation' },
            { text: 'am mâncat', role: 'verb' },
            { text: 'azi', role: 'time' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Negation', content: 'Nu', role: 'other' },
            { position: 2, label: 'Auxiliary', content: 'am', role: 'verb' },
            { position: 3, label: 'Participle', content: 'mâncat', role: 'verb' },
            { position: 4, label: 'Object', content: 'nimic', role: 'object' },
            { position: 5, label: 'Time', content: 'azi', role: 'time' },
          ],
          caption: 'Word order in a negated past tense sentence',
        },
        {
          type: 'comparison',
          left: {
            title: 'Present Tense',
            items: ['Lucrez acum.', 'Nu lucrez acum.', 'Uses conjugated verb only'],
          },
          right: {
            title: 'Past Tense (Perfectul Compus)',
            items: ['Am lucrat ieri.', 'Nu am lucrat ieri.', 'Auxiliary + participle'],
          },
        },
      ],
    },
  ],
};

export default pastTenseTutorial;
