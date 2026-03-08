import type { GrammarTutorial } from '../../store/types';

const relativePronounsTutorial: GrammarTutorial = {
  topicId: 'relative-pronouns',
  title: 'Relative Pronouns & Relative Clauses',
  introduction:
    'Relative pronouns connect a main clause with a relative clause that provides additional information about a noun. The most important Romanian relative pronoun is "care" (who/which/that). Understanding relative clauses allows you to build longer, more complex sentences.',
  sections: [
    {
      id: 'care-basics',
      title: 'The Pronoun "care"',
      blocks: [
        {
          type: 'rule',
          title: 'Using "care"',
          content:
            '"Care" is the most versatile relative pronoun. It means "who," "which," or "that" and can refer to people or things. It does not change form for gender or number (but prepositions before it may change).',
        },
        {
          type: 'example',
          romanian: 'Femeia care vorbește este profesoara mea.',
          english: 'The woman who is speaking is my teacher.',
          highlights: [
            { text: 'Femeia', role: 'subject' },
            { text: 'care', role: 'prefix' },
            { text: 'vorbește', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Cartea care este pe masă este interesantă.',
          english: 'The book that is on the table is interesting.',
          highlights: [
            { text: 'Cartea', role: 'subject' },
            { text: 'care', role: 'prefix' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Unlike English, Romanian does not omit the relative pronoun. You must always include "care": "Cartea care îmi place" (The book [that] I like) — "care" cannot be dropped.',
        },
      ],
    },
    {
      id: 'pe-care',
      title: '"Pe care" for Direct Objects',
      blocks: [
        {
          type: 'rule',
          title: 'When "care" is the Object',
          content:
            'When the relative pronoun is the direct object of the relative clause (especially for people), use "pe care": "Omul pe care l-am văzut" (The man whom I saw). The clitic pronoun (l-, o, etc.) is also required.',
        },
        {
          type: 'example',
          romanian: 'Prietenul pe care l-am sunat nu a răspuns.',
          english: 'The friend whom I called did not answer.',
          highlights: [
            { text: 'pe care', role: 'prefix' },
            { text: 'l-am sunat', role: 'verb' },
          ],
        },
        {
          type: 'example',
          romanian: 'Filmul pe care l-am văzut a fost foarte bun.',
          english: 'The movie that I saw was very good.',
          highlights: [
            { text: 'pe care', role: 'prefix' },
            { text: 'l-am văzut', role: 'verb' },
          ],
        },
        {
          type: 'diagram',
          slots: [
            { position: 1, label: 'Antecedent', content: 'Filmul', role: 'subject' },
            { position: 2, label: 'Object marker', content: 'pe care', role: 'other' },
            { position: 3, label: 'Clitic + verb', content: 'l-am văzut', role: 'verb' },
            { position: 4, label: 'Main verb', content: 'a fost bun', role: 'verb' },
          ],
          caption: 'Structure of a relative clause with "pe care"',
        },
        {
          type: 'callout',
          variant: 'warning',
          content:
            'Do not forget the clitic pronoun (l-, o, i-, le) when using "pe care." It doubles the relative pronoun: "pe care l-am văzut" (not "pe care am văzut").',
        },
      ],
    },
    {
      id: 'prepositions-with-care',
      title: 'Prepositions + care',
      blocks: [
        {
          type: 'text',
          content:
            'When a preposition is needed, it comes before "care": "cu care" (with whom/which), "la care" (to which/at which), "despre care" (about which), "în care" (in which).',
        },
        {
          type: 'table',
          headers: ['Preposition + care', 'Meaning', 'Example'],
          rows: [
            ['cu care', 'with whom/which', 'Persoana cu care vorbesc (The person I\'m talking with)'],
            ['la care', 'to/at which', 'Restaurantul la care mergem (The restaurant we go to)'],
            ['despre care', 'about which', 'Filmul despre care vorbim (The movie we\'re talking about)'],
            ['în care', 'in which', 'Orașul în care locuiesc (The city I live in)'],
            ['pentru care', 'for which', 'Motivul pentru care am plecat (The reason I left)'],
          ],
          caption: 'Common preposition + care combinations',
        },
        {
          type: 'example',
          romanian: 'Orașul în care m-am născut este mic.',
          english: 'The city in which I was born is small.',
          highlights: [
            { text: 'Orașul', role: 'subject' },
            { text: 'în care', role: 'prefix' },
          ],
        },
        {
          type: 'comparison',
          left: {
            title: 'English (preposition at end)',
            items: [
              'The city I live in',
              'The person I\'m talking to',
              'The book I read about',
            ],
          },
          right: {
            title: 'Romanian (preposition before "care")',
            items: [
              'Orașul în care locuiesc',
              'Persoana la care vorbesc',
              'Cartea despre care am citit',
            ],
          },
        },
      ],
    },
    {
      id: 'ce-and-others',
      title: '"Ce" and Other Relative Words',
      blocks: [
        {
          type: 'text',
          content:
            '"Ce" (what/that which) is used as a relative pronoun when there is no specific antecedent — it refers to a general idea or thing. Other relative words include "unde" (where), "când" (when), and "cum" (how).',
        },
        {
          type: 'table',
          headers: ['Word', 'Meaning', 'Example'],
          rows: [
            ['ce', 'what / that which', 'Fac ce vreau. (I do what I want.)'],
            ['ceea ce', 'that which / what', 'Ceea ce spui e adevărat. (What you say is true.)'],
            ['unde', 'where', 'Locul unde ne-am întâlnit. (The place where we met.)'],
            ['când', 'when', 'Ziua când am ajuns. (The day when we arrived.)'],
            ['cum', 'how', 'Felul cum vorbește. (The way he/she speaks.)'],
          ],
          caption: 'Other relative words',
        },
        {
          type: 'example',
          romanian: 'Nu înțeleg ce spui.',
          english: 'I don\'t understand what you\'re saying.',
          highlights: [
            { text: 'ce', role: 'prefix' },
            { text: 'spui', role: 'verb' },
          ],
        },
        {
          type: 'decision',
          question: 'Does the relative clause refer to a specific noun (antecedent)?',
          yes: {
            answer: 'Use "care" (or "pe care" for objects)',
            explanation: 'E.g., "Omul care a venit" (The man who came).',
          },
          no: {
            answer: 'Use "ce" or "ceea ce"',
            explanation: 'E.g., "Ce spui este interesant" (What you say is interesting).',
          },
        },
      ],
    },
  ],
};

export default relativePronounsTutorial;
