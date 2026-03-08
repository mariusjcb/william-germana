import type { GrammarTutorial } from '../../store/types';

const possessiveArticlesTutorial: GrammarTutorial = {
  topicId: 'possessive-articles',
  title: 'Possessive Articles: al / a / ai / ale',
  introduction:
    'Romanian has a unique system of possessive articles (al, a, ai, ale) that link a possessor to the thing possessed. These articles agree in gender and number with the possessed noun, not the possessor. They are essential when the possessor is not directly attached to the noun, or when using possessive pronouns independently.',
  sections: [
    {
      id: 'forms-agreement',
      title: 'Forms & Agreement',
      blocks: [
        {
          type: 'rule',
          title: 'Agreement Rule',
          content:
            'The possessive article agrees with the POSSESSED noun (the thing owned), not the possessor (the owner). "al" = masc. sg., "a" = fem. sg., "ai" = masc. pl., "ale" = fem./neuter pl.',
        },
        {
          type: 'table',
          headers: ['Possessed Noun', 'Article', 'Example', 'English'],
          rows: [
            ['Masc. sg.', 'al', 'al meu', 'mine (m. sg.)'],
            ['Fem. sg.', 'a', 'a mea', 'mine (f. sg.)'],
            ['Masc. pl.', 'ai', 'ai mei', 'mine (m. pl.)'],
            ['Fem./N. pl.', 'ale', 'ale mele', 'mine (f./n. pl.)'],
          ],
          caption: 'Possessive article forms',
          colorCoded: true,
        },
        {
          type: 'example',
          romanian: 'Câinele acesta este al meu.',
          english: 'This dog is mine.',
          highlights: [
            { text: 'Câinele', role: 'subject' },
            { text: 'al meu', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Mașina aceasta este a ta.',
          english: 'This car is yours.',
          highlights: [
            { text: 'Mașina', role: 'subject' },
            { text: 'a ta', role: 'object' },
          ],
        },
      ],
    },
    {
      id: 'with-possessive-pronouns',
      title: 'With Possessive Pronouns',
      blocks: [
        {
          type: 'text',
          content:
            'The possessive articles are used with possessive pronouns (meu, tău, său, nostru, vostru, lor) when the pronoun stands alone or follows a noun without a definite article.',
        },
        {
          type: 'table',
          headers: ['Possessor', 'Masc. sg. (al)', 'Fem. sg. (a)', 'Masc. pl. (ai)', 'Fem. pl. (ale)'],
          rows: [
            ['my', 'al meu', 'a mea', 'ai mei', 'ale mele'],
            ['your (sg.)', 'al tău', 'a ta', 'ai tăi', 'ale tale'],
            ['his/her', 'al său/ei', 'a sa/ei', 'ai săi/ei', 'ale sale/ei'],
            ['our', 'al nostru', 'a noastră', 'ai noștri', 'ale noastre'],
            ['your (pl.)', 'al vostru', 'a voastră', 'ai voștri', 'ale voastre'],
            ['their', 'al lor', 'a lor', 'ai lor', 'ale lor'],
          ],
          caption: 'Possessive pronouns with possessive articles',
        },
        {
          type: 'callout',
          variant: 'tip',
          content:
            '"Lor" (their) never changes form regardless of the possessed noun\'s gender or number: al lor, a lor, ai lor, ale lor.',
        },
      ],
    },
    {
      id: 'when-to-use',
      title: 'When to Use Possessive Articles',
      blocks: [
        {
          type: 'decision',
          question: 'Does the possessed noun have a definite article (e.g., "cartea")?',
          yes: {
            answer: 'No possessive article needed',
            explanation: 'When the noun has a definite article, the possessive follows directly: "cartea mea" (my book).',
          },
          no: {
            answer: 'Use the possessive article (al/a/ai/ale)',
            explanation: 'When the noun is indefinite or the possessive stands alone: "o carte a mea" (a book of mine), "Este al meu" (It\'s mine).',
            followUp: {
              question: 'Is the possessive pronoun standing alone (without a noun)?',
              yes: {
                answer: 'Always use the possessive article',
                explanation: 'E.g., "Al cui este?" — "Al meu." (Whose is it? — Mine.)',
              },
              no: {
                answer: 'Use the possessive article before the possessive pronoun/noun',
                explanation: 'E.g., "un prieten al meu" (a friend of mine).',
              },
            },
          },
        },
        {
          type: 'comparison',
          left: {
            title: 'With Definite Article (no al/a/ai/ale)',
            items: [
              'cartea mea (my book)',
              'fratele tău (your brother)',
              'casa noastră (our house)',
            ],
          },
          right: {
            title: 'Without Definite Article (needs al/a/ai/ale)',
            items: [
              'o carte a mea (a book of mine)',
              'un frate al tău (a brother of yours)',
              'Este a noastră. (It\'s ours.)',
            ],
          },
        },
      ],
    },
    {
      id: 'with-genitive',
      title: 'Possessive Articles with Genitive Nouns',
      blocks: [
        {
          type: 'text',
          content:
            'The possessive article is also used to link a noun in the genitive case when the possessed noun does not have a definite article.',
        },
        {
          type: 'example',
          romanian: 'Un prieten al Mariei a venit la petrecere.',
          english: 'A friend of Maria\'s came to the party.',
          highlights: [
            { text: 'al Mariei', role: 'object' },
          ],
        },
        {
          type: 'example',
          romanian: 'Două cărți ale profesorului sunt pe masă.',
          english: 'Two of the teacher\'s books are on the table.',
          highlights: [
            { text: 'ale profesorului', role: 'object' },
          ],
        },
        {
          type: 'callout',
          variant: 'info',
          content:
            'Remember: "cartea profesorului" (the teacher\'s book) needs no possessive article because "cartea" already has the definite article. But "o carte a profesorului" (a book of the teacher\'s) requires "a" because "o carte" is indefinite.',
        },
      ],
    },
  ],
};

export default possessiveArticlesTutorial;
