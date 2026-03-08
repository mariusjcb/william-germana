import type { GrammarTutorial } from '../../store/types';

const sentenceStructureTutorial: GrammarTutorial = {
  topicId: 'sentence-structure',
  title: 'Romanian Sentence Structure',
  introduction:
    'Romanian follows a Subject-Verb-Object (SVO) word order, similar to English. However, because Romanian is a highly inflected language (nouns and verbs change form to show their role), word order is more flexible than in English. Understanding the basic structure and when you can deviate from it is key to forming natural sentences.',
  sections: [
    {
      id: 'basic-svo',
      title: 'Basic SVO Order',
      blocks: [
        {
          type: 'rule',
          title: 'Subject + Verb + Object',
          content:
            'The default sentence structure in Romanian is Subject-Verb-Object (SVO), just like English. In a simple statement, the subject comes first, followed by the verb, then the object or complement.',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Subject', content: 'Maria', role: 'subject' },
            { position: 2, label: 'Verb', content: 'citește', role: 'verb' },
            { position: 3, label: 'Object', content: 'o carte', role: 'object' },
          ],
          caption: 'Basic SVO: Maria citește o carte. (Maria reads a book.)',
        },
        {
          type: 'example',
          romanian: 'Copilul mănâncă un măr.',
          english: 'The child eats an apple.',
          highlights: [
            { text: 'Copilul', role: 'subject' },
            { text: 'mănâncă', role: 'verb' },
            { text: 'un măr', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Eu beau apă.',
          english: 'I drink water.',
          highlights: [
            { text: 'Eu', role: 'subject' },
            { text: 'beau', role: 'verb' },
            { text: 'apă', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'statements-without-subject',
      title: 'Statements Without an Explicit Subject',
      blocks: [
        {
          type: 'text',
          content:
            'Since Romanian verb conjugations indicate the subject, the subject pronoun is often omitted. The sentence still follows a V-O pattern, but the subject is understood from the verb ending.',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Subject (hidden)', content: '(eu)', role: 'subject' },
            { position: 2, label: 'Verb', content: 'Merg', role: 'verb' },
            { position: 3, label: 'Complement', content: 'la școală', role: 'other' },
          ],
          caption: 'Merg la școală. (I go to school.) — subject omitted',
        },
        {
          type: 'comparison',
          left: {
            title: 'With subject pronoun',
            items: ['Eu lucrez acasă.', 'Tu înveți româna.', 'Noi mergem la piață.'],
          },
          right: {
            title: 'Without subject pronoun (natural)',
            items: ['Lucrez acasă.', 'Înveți româna.', 'Mergem la piață.'],
          },
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Dropping the subject pronoun is the more natural choice in Romanian. Only include it when you want to emphasize who is performing the action or to contrast with someone else.',
        },
      ],
    },
    {
      id: 'adverb-position',
      title: 'Position of Adverbs and Time Expressions',
      blocks: [
        {
          type: 'rule',
          title: 'Adverbs Are Flexible',
          content:
            'Time adverbs (azi, mâine, acum, mereu) and manner adverbs (bine, repede, ușor) can appear at the beginning, middle, or end of the sentence. The most common positions are at the beginning or end.',
        },
        {
          type: 'table',
          headers: ['Adverb', 'Meaning', 'Example'],
          rows: [
            ['azi', 'today', 'Azi merg la piață.'],
            ['mâine', 'tomorrow', 'Mâine avem curs.'],
            ['acum', 'now', 'Acum mănânc.'],
            ['mereu / întotdeauna', 'always', 'Mereu beau cafea dimineața.'],
            ['bine', 'well', 'Vorbesc bine româna.'],
            ['repede', 'quickly', 'Merg repede la magazin.'],
          ],
          caption: 'Common adverbs used in Romanian sentences',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Time', content: 'Mâine', role: 'time' },
            { position: 2, label: 'Subject', content: '(eu)', role: 'subject' },
            { position: 3, label: 'Verb', content: 'merg', role: 'verb' },
            { position: 4, label: 'Complement', content: 'la doctor', role: 'other' },
          ],
          caption: 'Mâine merg la doctor. (Tomorrow I go to the doctor.)',
        },
        {
          type: 'example',
          romanian: 'Azi am multă treabă.',
          english: 'Today I have a lot of work.',
          highlights: [
            { text: 'Azi', role: 'time' },
            { text: 'am', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Merg la serviciu în fiecare zi.',
          english: 'I go to work every day.',
          highlights: [
            { text: 'Merg', role: 'verb' },
            { text: 'în fiecare zi', role: 'time' },
          ],
        },
      ],
    },
    {
      id: 'topic-fronting',
      title: 'Topic-Fronting for Emphasis',
      blocks: [
        {
          type: 'text',
          content:
            'Romanian allows you to move an element to the front of the sentence to emphasize it. This is called topic-fronting. The fronted element becomes the focus of the sentence.',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Fronted Object', content: 'Cartea', role: 'object' },
            { position: 2, label: 'Pronoun', content: 'o', role: 'other' },
            { position: 3, label: 'Verb', content: 'citesc', role: 'verb' },
            { position: 4, label: 'Time', content: 'acum', role: 'time' },
          ],
          caption: 'Cartea o citesc acum. (The book, I am reading it now.) — object fronted',
        },
        {
          type: 'example',
          romanian: 'Pe Maria o văd în fiecare zi.',
          english: 'Maria, I see her every day.',
          highlights: [
            { text: 'Pe Maria', role: 'object' },
            { text: 'o văd', role: 'verb' },
            { text: 'în fiecare zi', role: 'time' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'When you front the object, Romanian requires a resumptive pronoun (o, îl, etc.) before the verb. "Cartea o citesc" literally means "The book, it-I-read." At A1 level, stick to basic SVO — just be aware of this pattern when you hear it.',
        },
      ],
    },
  ],
};

export default sentenceStructureTutorial;
