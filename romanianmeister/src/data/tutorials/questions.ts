import type { GrammarTutorial } from '../../store/types';

const questionsTutorial: GrammarTutorial = {
  topicId: 'questions',
  title: 'Asking Questions in Romanian',
  introduction:
    'Asking questions is one of the most practical skills for a beginner. Romanian offers two main ways to form questions: raising your intonation at the end of a statement (for yes/no questions), or using question words like "ce" (what), "unde" (where), and "cine" (who). Both methods are straightforward once you learn the patterns.',
  sections: [
    {
      id: 'yes-no-questions',
      title: 'Yes/No Questions (Intonation)',
      blocks: [
        {
          type: 'rule',
          title: 'Just Raise Your Intonation',
          content:
            'The simplest way to ask a yes/no question in Romanian is to say a normal statement with rising intonation at the end. No word order change is needed. The word order stays exactly the same as a statement.',
        },
        {
          type: 'comparison',
          left: {
            title: 'Statement',
            items: ['Ești student.', 'Maria lucrează aici.', 'Ai un câine.'],
          },
          right: {
            title: 'Question (same words, rising intonation)',
            items: ['Ești student?', 'Maria lucrează aici?', 'Ai un câine?'],
          },
        },
        {
          type: 'example',
          romanian: 'Vorbești engleza?',
          english: 'Do you speak English?',
          highlights: [
            { text: 'Vorbești', role: 'verb' },
            { text: 'engleza', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'E bine?',
          english: 'Is it OK?',
          highlights: [
            { text: 'E', role: 'verb' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'In writing, the only difference between a statement and a yes/no question is the question mark. In speech, it is all about the rising tone at the end. This makes yes/no questions very easy to form.',
        },
      ],
    },
    {
      id: 'question-words',
      title: 'Question Words (Cuvinte Interogative)',
      blocks: [
        {
          type: 'text',
          content:
            'To ask for specific information, use a question word at the beginning of the sentence. Romanian question words correspond closely to English ones.',
        },
        {
          type: 'table',
          headers: ['Romanian', 'English', 'Example Question'],
          rows: [
            ['Cine?', 'Who?', 'Cine este acolo? (Who is there?)'],
            ['Ce?', 'What?', 'Ce faci? (What are you doing?)'],
            ['Unde?', 'Where?', 'Unde locuiești? (Where do you live?)'],
            ['Când?', 'When?', 'Când pleci? (When are you leaving?)'],
            ['Cum?', 'How?', 'Cum te cheamă? (What is your name?)'],
            ['De ce?', 'Why?', 'De ce ești trist? (Why are you sad?)'],
            ['Cât? / Câți? / Câte?', 'How much? / How many?', 'Cât costă? (How much does it cost?)'],
            ['Care?', 'Which?', 'Care este camera ta? (Which is your room?)'],
          ],
          caption: 'Essential Romanian question words',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            '"Cum te cheamă?" literally means "How do they call you?" and is the standard way to ask someone\'s name. The answer is "Mă cheamă..." (My name is... / They call me...).',
        },
      ],
    },
    {
      id: 'forming-questions-with-words',
      title: 'Forming Questions with Question Words',
      blocks: [
        {
          type: 'rule',
          title: 'Question Word + Verb + Rest',
          content:
            'When using a question word, place it at the beginning of the sentence, followed by the verb, then any remaining elements. The subject pronoun is usually omitted since the verb ending shows the person.',
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Question Word', content: 'Unde', role: 'other' },
            { position: 2, label: 'Verb', content: 'mergi', role: 'verb' },
            { position: 3, label: 'Complement', content: '?', role: 'other' },
          ],
          caption: 'Unde mergi? (Where are you going?)',
        },
        {
          type: 'example',
          romanian: 'Ce mâncați la prânz?',
          english: 'What do you eat for lunch?',
          highlights: [
            { text: 'Ce', role: 'object' },
            { text: 'mâncați', role: 'verb' },
            { text: 'la prânz', role: 'time' },
          ],
        },
        {
          type: 'example',
          romanian: 'Când începe filmul?',
          english: 'When does the movie start?',
          highlights: [
            { text: 'Când', role: 'time' },
            { text: 'începe', role: 'verb' },
            { text: 'filmul', role: 'subject' },
          ],
        },
        {
          type: 'example',
          romanian: 'De ce înveți română?',
          english: 'Why are you learning Romanian?',
          highlights: [
            { text: 'De ce', role: 'object' },
            { text: 'înveți', role: 'verb' },
            { text: 'română', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'common-question-patterns',
      title: 'Common Question Patterns for Daily Life',
      blocks: [
        {
          type: 'table',
          headers: ['Romanian', 'English', 'Situation'],
          rows: [
            ['Cum te cheamă?', 'What is your name?', 'Meeting someone'],
            ['Ce faci?', 'How are you? / What are you doing?', 'Greeting'],
            ['Unde este...?', 'Where is...?', 'Asking for locations'],
            ['Cât costă?', 'How much does it cost?', 'Shopping'],
            ['Vorbiți engleza?', 'Do you speak English?', 'Communication'],
            ['Puteți să mă ajutați?', 'Can you help me?', 'Asking for help'],
          ],
          caption: 'Essential questions for everyday situations',
        },
        {
          type: 'example',
          romanian: 'Scuzați, unde este gara?',
          english: 'Excuse me, where is the train station?',
          highlights: [
            { text: 'unde', role: 'object' },
            { text: 'este', role: 'verb' },
            { text: 'gara', role: 'subject' },
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            'Memorize these common questions as fixed phrases. They will be immediately useful in real conversations, even before you fully understand all the grammar behind them.',
        },
      ],
    },
  ],
};

export default questionsTutorial;
