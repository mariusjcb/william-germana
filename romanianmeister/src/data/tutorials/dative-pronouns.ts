import type { GrammarTutorial } from '../../store/types';

const dativePronounsTutorial: GrammarTutorial = {
  topicId: 'dative-pronouns',
  title: 'Dative Pronouns (Indirect Object)',
  introduction:
    'Dative pronouns replace indirect objects — the person who receives something or benefits from the action. In English, this is the "to whom" or "for whom." Romanian dative pronouns have unstressed (clitic) and stressed forms, and like accusative pronouns, they have specific placement rules.',
  sections: [
    {
      id: 'forms',
      title: 'Dative Pronoun Forms',
      blocks: [
        {
          type: 'table',
          headers: ['Person', 'Unstressed', 'Stressed', 'English'],
          rows: [
            ['1st sg.', 'îmi', 'mie', 'to me'],
            ['2nd sg.', 'îți', 'ție', 'to you'],
            ['3rd sg. m./f.', 'îi', 'lui / ei', 'to him / to her'],
            ['1st pl.', 'ne', 'nouă', 'to us'],
            ['2nd pl.', 'vă', 'vouă', 'to you (pl.)'],
            ['3rd pl.', 'le', 'lor', 'to them'],
          ],
          caption: 'Dative pronoun forms — unstressed and stressed',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'The stressed forms (mie, ție, lui, etc.) are used for emphasis or to clarify ambiguity. In everyday speech, the unstressed clitics (îmi, îți, îi, etc.) are far more common.',
        },
      ],
    },
    {
      id: 'placement-usage',
      title: 'Placement & Basic Usage',
      blocks: [
        {
          type: 'rule',
          title: 'Placement Rule',
          content:
            'Unstressed dative pronouns come before the verb, just like accusative pronouns: "Îmi dai cartea?" (Will you give me the book?). In negative sentences, "nu" comes first: "Nu îmi place" (I don\'t like it).',
        },
        {
          type: 'example',
          romanian: 'Îți dau numărul meu de telefon.',
          english: 'I give you my phone number.',
          highlights: [
            { text: 'Îți', role: 'object' },
            { text: 'dau', role: 'verb' },
            { text: 'numărul meu de telefon', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Îi spun adevărul.',
          english: 'I tell him/her the truth.',
          highlights: [
            { text: 'Îi', role: 'object' },
            { text: 'spun', role: 'verb' },
            { text: 'adevărul', role: 'object' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Dative pron.', content: 'Îți', role: 'object' },
            { position: 2, label: 'Verb', content: 'dau', role: 'verb' },
            { position: 3, label: 'Direct obj.', content: 'cartea', role: 'object' },
          ],
          caption: 'Standard word order: dative pronoun + verb + direct object',
        },
      ],
    },
    {
      id: 'verbs-with-dative',
      title: 'Verbs That Take Dative',
      blocks: [
        {
          type: 'text',
          content:
            'Several common Romanian verbs require a dative object rather than an accusative one. The most important is "a plăcea" (to please/to like), which works differently from English.',
        },
        {
          type: 'table',
          headers: ['Verb', 'English', 'Example'],
          rows: [
            ['a plăcea', 'to like (lit. to please)', 'Îmi place cafeaua.'],
            ['a da', 'to give', 'Îi dau un cadou.'],
            ['a spune', 'to tell', 'Le spun o poveste.'],
            ['a arăta', 'to show', 'Îți arăt drumul.'],
            ['a trimite', 'to send', 'Ne trimite o scrisoare.'],
            ['a răspunde', 'to answer', 'Îmi răspunzi la telefon?'],
          ],
          caption: 'Common verbs that take dative objects',
        },
        {
          type: 'comparison',
          left: {
            title: 'Romanian: "a plăcea"',
            items: [
              'Îmi place ciocolata. (Chocolate pleases me.)',
              'Îți plac filmele? (Do films please you?)',
              'Subject = the thing liked',
            ],
          },
          right: {
            title: 'English: "to like"',
            items: [
              'I like chocolate.',
              'Do you like films?',
              'Subject = the person who likes',
            ],
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'With "a plăcea," the verb agrees with the thing liked, not the person: "Îmi place cartea" (sg.) but "Îmi plac cărțile" (pl.). The dative pronoun stays the same.',
        },
      ],
    },
    {
      id: 'doubling-past',
      title: 'Doubling & Past Tense',
      blocks: [
        {
          type: 'rule',
          title: 'Dative Doubling',
          content:
            'Just like accusative doubling, when a dative noun is expressed, it is often doubled by a clitic: "Îi dau Mariei un cadou" (I give Maria a gift). The clitic "îi" doubles "Mariei."',
        },
        {
          type: 'example',
          romanian: 'Le-am trimis prietenelor o invitație.',
          english: 'I sent the friends (f.) an invitation.',
          highlights: [
            { text: 'Le-am trimis', role: 'verb' },
            { text: 'prietenelor', role: 'object' },
          ],
        },
        {
          type: 'table',
          headers: ['Present', 'Past (Contraction)', 'English'],
          rows: [
            ['Îmi dai...', 'Mi-ai dat...', 'You give/gave me...'],
            ['Îți spun...', 'Ți-am spus...', 'I tell/told you...'],
            ['Îi arăt...', 'I-am arătat...', 'I show/showed him...'],
            ['Ne trimite...', 'Ne-a trimis...', 'He sends/sent us...'],
          ],
          caption: 'Dative pronouns in present vs. past tense',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'In past tense, "îmi" contracts to "mi-" and "îți" contracts to "ți-" before the auxiliary: "Mi-a plăcut filmul" (I liked the movie).',
        },
      ],
    },
  ],
};

export default dativePronounsTutorial;
