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
};

export async function loadTutorial(topicId: string): Promise<GrammarTutorial | null> {
  const loader = loaders[topicId];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
