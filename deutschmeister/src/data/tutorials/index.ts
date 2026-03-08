import type { GrammarTutorial } from '../../store/types';

const loaders: Record<string, () => Promise<{ default: GrammarTutorial }>> = {
  'noun-gender': () => import('./noun-gender'),
  'indefinite-articles': () => import('./indefinite-articles'),
  'plural-formation': () => import('./plural-formation'),
  'personal-pronouns': () => import('./personal-pronouns'),
  'regular-verbs': () => import('./regular-verbs'),
  'irregular-verbs': () => import('./irregular-verbs'),
  'separable-verbs': () => import('./separable-verbs'),
  'modal-verbs': () => import('./modal-verbs'),
  'nominative-case': () => import('./nominative-case'),
  'accusative-case': () => import('./accusative-case'),
  'sentence-structure': () => import('./sentence-structure'),
  'questions': () => import('./questions'),
  'negation': () => import('./negation'),
  'possessive-pronouns': () => import('./possessive-pronouns'),
  'prepositions': () => import('./prepositions'),
};

export async function loadTutorial(topicId: string): Promise<GrammarTutorial | null> {
  const loader = loaders[topicId];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
