import type { GrammarTutorial } from '../../store/types';

const personalPronounsTutorial: GrammarTutorial = {
  topicId: 'personal-pronouns',
  title: 'Personal Pronouns',
  introduction:
    'Personal pronouns replace nouns and indicate who is speaking, being spoken to, or being spoken about. German has more pronoun forms than English, including a formal "you" (Sie) used with strangers, elders, and in professional settings.',
  sections: [
    {
      id: 'the-personal-pronouns',
      title: 'The Personal Pronouns',
      blocks: [
        {
          type: 'table',
          headers: ['German', 'English', 'Formal?'],
          rows: [
            ['ich', 'I', '—'],
            ['du', 'you (singular)', 'Informal'],
            ['er', 'he', '—'],
            ['sie', 'she', '—'],
            ['es', 'it', '—'],
            ['wir', 'we', '—'],
            ['ihr', 'you (plural)', 'Informal'],
            ['sie', 'they', '—'],
            ['Sie', 'you (singular & plural)', 'Formal'],
          ],
          caption: 'All German personal pronouns in the nominative case',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'German "ich" (I) is only capitalized at the beginning of a sentence, unlike English which always capitalizes "I".',
        },
      ],
    },
    {
      id: 'formal-vs-informal',
      title: 'Formal vs. Informal',
      blocks: [
        {
          type: 'comparison',
          left: {
            title: 'Informal (du / ihr)',
            items: [
              'Used with friends and family',
              'Used with children',
              'Used among young people',
              'du (one person), ihr (multiple people)',
            ],
          },
          right: {
            title: 'Formal (Sie)',
            items: [
              'Used with strangers and adults you don\'t know well',
              'Used in professional and business settings',
              'Used to show respect to elders',
              'Sie (one or multiple people — always capitalized)',
            ],
          },
        },
        {
          type: 'example',
          german: 'Wie heißt du?',
          english: 'What is your name? (informal)',
          highlights: [
            { text: 'du', role: 'subject' },
          ],
        },
        {
          type: 'example',
          german: 'Wie heißen Sie?',
          english: 'What is your name? (formal)',
          highlights: [
            { text: 'Sie', role: 'subject' },
            { text: 'heißen', role: 'verb' },
          ],
        },
      ],
    },
    {
      id: 'using-pronouns',
      title: 'Using Pronouns',
      blocks: [
        {
          type: 'text',
          content:
            'In German sentences, the pronoun usually appears as the subject and determines the verb conjugation. Here are some examples of personal pronouns in action.',
        },
        {
          type: 'example',
          german: 'Ich lerne Deutsch.',
          english: 'I am learning German.',
          highlights: [
            { text: 'Ich', role: 'subject' },
            { text: 'lerne', role: 'verb' },
            { text: 'Deutsch', role: 'object' },
          ],
        },
        {
          type: 'example',
          german: 'Er kommt aus Deutschland.',
          english: 'He comes from Germany.',
          highlights: [
            { text: 'Er', role: 'subject' },
            { text: 'kommt', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Wir wohnen in Berlin.',
          english: 'We live in Berlin.',
          highlights: [
            { text: 'Wir', role: 'subject' },
            { text: 'wohnen', role: 'verb' },
          ],
        },
        {
          type: 'example',
          german: 'Sie spielen Fußball.',
          english: 'They play soccer.',
          highlights: [
            { text: 'Sie', role: 'subject' },
            { text: 'spielen', role: 'verb' },
            { text: 'Fußball', role: 'object' },
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
          variant: 'info',
          content:
            'Formal "Sie" (you) is always capitalized, even in the middle of a sentence. This is the only way to distinguish it in writing from "sie" (she/they).',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'The word "sie" has three meanings depending on context: "sie" (lowercase) = she or they; "Sie" (capitalized) = formal you. Use the verb conjugation to tell them apart: "sie spielt" (she plays), "sie spielen" (they play), "Sie spielen" (you play, formal).',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'When in doubt about whether to use "du" or "Sie", always default to "Sie". It is better to be too formal than too informal in German culture. Wait for the other person to offer "du".',
        },
      ],
    },
  ],
};

export default personalPronounsTutorial;
