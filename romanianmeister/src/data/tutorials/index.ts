import type { GrammarTutorial } from '../../store/types';

const loaders: Record<string, () => Promise<{ default: GrammarTutorial }>> = {
  'noun-gender': () => import('./noun-gender'),
  'indefinite-articles': () => import('./indefinite-articles'),
  'definite-articles': () => import('./definite-articles'),
  'plural-formation': () => import('./plural-formation'),
  'personal-pronouns': () => import('./personal-pronouns'),
  'regular-verbs': () => import('./regular-verbs'),
  'irregular-verbs': () => import('./irregular-verbs'),
  'adjective-agreement': () => import('./adjective-agreement'),
  'prepositions': () => import('./prepositions'),
  'sentence-structure': () => import('./sentence-structure'),
  'questions': () => import('./questions'),
  'negation': () => import('./negation'),
  // A2 Tutorials
  'past-tense': () => import('./past-tense'),
  'future-tense': () => import('./future-tense'),
  'reflexive-verbs': () => import('./reflexive-verbs'),
  'accusative-pronouns': () => import('./accusative-pronouns'),
  'dative-pronouns': () => import('./dative-pronouns'),
  'genitive-dative-case': () => import('./genitive-dative-case'),
  'comparatives-superlatives': () => import('./comparatives-superlatives'),
  'conjunctions-connectors': () => import('./conjunctions-connectors'),
  'imperfect-tense': () => import('./imperfect-tense'),
  'subjunctive-mood': () => import('./subjunctive-mood'),
  'conditional-mood': () => import('./conditional-mood'),
  'possessive-articles': () => import('./possessive-articles'),
  'relative-pronouns': () => import('./relative-pronouns'),
  'adverbs': () => import('./adverbs'),
  'passive-voice': () => import('./passive-voice'),
};

export async function loadTutorial(topicId: string): Promise<GrammarTutorial | null> {
  const loader = loaders[topicId];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
