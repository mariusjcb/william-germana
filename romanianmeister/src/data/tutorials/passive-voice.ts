import type { GrammarTutorial } from '../../store/types';

const passiveVoiceTutorial: GrammarTutorial = {
  topicId: 'passive-voice',
  title: 'Passive Voice Basics',
  introduction:
    'The passive voice shifts focus from the doer of the action to the receiver. In Romanian, the passive is formed with "a fi" (to be) + past participle, similar to English. However, Romanian also uses reflexive constructions ("se" + verb) as an alternative to the passive, which is often preferred in everyday speech.',
  sections: [
    {
      id: 'formation',
      title: 'Formation: a fi + Past Participle',
      blocks: [
        {
          type: 'rule',
          title: 'Passive Voice Structure',
          content:
            'The passive is formed with "a fi" conjugated in the desired tense + the past participle of the main verb. The participle agrees in gender and number with the subject: "Cartea este scrisă" (The book is written, f. sg.), "Cărțile sunt scrise" (The books are written, f. pl.).',
        },
        {
          type: 'table',
          headers: ['Subject', 'a fi (present)', 'Participle', 'English'],
          rows: [
            ['Cartea (f. sg.)', 'este', 'scrisă', 'The book is written'],
            ['Cărțile (f. pl.)', 'sunt', 'scrise', 'The books are written'],
            ['Raportul (m. sg.)', 'este', 'scris', 'The report is written'],
            ['Rapoartele (n. pl.)', 'sunt', 'scrise', 'The reports are written'],
          ],
          caption: 'Passive voice with participle agreement',
          colorCoded: true,
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'The past participle in the passive voice must agree with the subject in gender and number. This is different from the perfectul compus, where the participle is invariable.',
        },
      ],
    },
    {
      id: 'agent-marking',
      title: 'The Agent: de (către)',
      blocks: [
        {
          type: 'text',
          content:
            'The agent (the doer of the action) is introduced by "de" or "de către" (by). The agent is optional — it can be omitted when unknown, unimportant, or obvious from context.',
        },
        {
          type: 'example',
          romanian: 'Această carte a fost scrisă de Mircea Eliade.',
          english: 'This book was written by Mircea Eliade.',
          highlights: [
            { text: 'a fost scrisă', role: 'verb' },
            { text: 'de Mircea Eliade', role: 'subject' },
          ],
        },
        {
          type: 'example',
          romanian: 'Drumul este reparat de către primărie.',
          english: 'The road is being repaired by the city hall.',
          highlights: [
            { text: 'este reparat', role: 'verb' },
            { text: 'de către primărie', role: 'subject' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Subject (receiver)', content: 'Cartea', role: 'subject' },
            { position: 2, label: 'Auxiliary', content: 'a fost', role: 'verb' },
            { position: 3, label: 'Participle', content: 'scrisă', role: 'verb' },
            { position: 4, label: 'Agent marker', content: 'de', role: 'other' },
            { position: 5, label: 'Agent (doer)', content: 'Eliade', role: 'subject' },
          ],
          caption: 'Structure of a passive sentence with agent',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            '"De către" is slightly more formal and unambiguous than "de" alone. In everyday speech, "de" is sufficient: "construit de un inginer" (built by an engineer).',
        },
      ],
    },
    {
      id: 'reflexive-alternative',
      title: 'Reflexive Passive: se + Verb',
      blocks: [
        {
          type: 'rule',
          title: 'The Reflexive Passive',
          content:
            'Romanian frequently uses "se" + the 3rd person of the verb as a passive alternative. This is especially common in signs, instructions, and impersonal statements: "Se vorbește română" (Romanian is spoken), "Aici se vinde pâine" (Bread is sold here).',
        },
        {
          type: 'example',
          romanian: 'Aici se vorbește engleza.',
          english: 'English is spoken here.',
          highlights: [
            { text: 'se vorbește', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Aceste produse se fabrică în România.',
          english: 'These products are manufactured in Romania.',
          highlights: [
            { text: 'se fabrică', role: 'verb' },
            { text: 'în România', role: 'prefix' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'True Passive (a fi + participle)',
            items: [
              'Ușa este deschisă de portar.',
              'More formal / literary',
              'Agent can be specified',
              'Participle agrees with subject',
            ],
          },
          right: {
            title: 'Reflexive Passive (se + verb)',
            items: [
              'Ușa se deschide.',
              'More common in speech',
              'Agent usually omitted',
              'Simpler construction',
            ],
          },
        },
      ],
    },
    {
      id: 'tenses-active-vs-passive',
      title: 'Passive in Different Tenses',
      blocks: [
        {
          type: 'table',
          headers: ['Tense', 'Active', 'Passive', 'English Passive'],
          rows: [
            ['Present', 'Ei construiesc casa.', 'Casa este construită.', 'The house is built.'],
            ['Past (perf. compus)', 'Ei au construit casa.', 'Casa a fost construită.', 'The house was built.'],
            ['Imperfect', 'Ei construiau casa.', 'Casa era construită.', 'The house was being built.'],
            ['Future (o să)', 'Ei o să construiască casa.', 'Casa o să fie construită.', 'The house will be built.'],
          ],
          caption: 'Passive voice across different tenses',
          colorCoded: true,
        },
        {
          type: 'decision',
          question: 'Do you want to emphasize who performed the action?',
          yes: {
            answer: 'Use the active voice',
            explanation: 'Active voice keeps the doer as the subject: "Echipa a reparat drumul" (The team repaired the road).',
          },
          no: {
            answer: 'Consider the passive voice or reflexive construction',
            explanation: 'Passive shifts focus to the result: "Drumul a fost reparat" or "Drumul s-a reparat" (The road was repaired).',
            followUp: {
              question: 'Is this a sign, instruction, or general statement?',
              yes: {
                answer: 'Use the reflexive passive (se + verb)',
                explanation: 'E.g., "Se interzice fumatul" (Smoking is prohibited).',
              },
              no: {
                answer: 'Either form works — choose based on formality',
                explanation: 'True passive for formal/written text; reflexive for everyday speech.',
              },
            },
          },
        },
      ],
    },
  ],
};

export default passiveVoiceTutorial;
