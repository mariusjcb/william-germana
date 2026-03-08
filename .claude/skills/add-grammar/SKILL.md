---
name: add-grammar
description: Add new grammar flashcards to an existing topic
argument-hint: "<topic-id> <question> | <answer> | <explanation>"
allowed-tools:
  - Read
  - Edit
  - Grep
  - Glob
  - Bash
---

# Add Grammar Flashcards

Add one or more grammar flashcards to an existing grammar topic.

## Instructions

1. Read `@deutschmeister/src/store/types.ts` to confirm the `GrammarCard` interface
2. Read `@deutschmeister/src/data/grammar.ts` to find:
   - The current last grammar card ID (currently g154)
   - The `grammarTopics` array to validate the topic ID and get the `topicName`
3. Parse `$ARGUMENTS`:
   - First token is the `topicId` (kebab-case slug, e.g., `noun-gender`)
   - Remaining text is pipe-separated: `<question> | <answer> | <explanation>`
4. Validate that the `topicId` exists in `grammarTopics`
5. Look up the `topicName` from `grammarTopics` for the matched topic
6. Assign the next sequential ID (g155, g156, etc.)
7. Construct the `GrammarCard` object:
   ```typescript
   { id: 'g155', topicId: 'noun-gender', topicName: 'Noun Gender (der/die/das)', question: '...', answer: '...', explanation: '...' }
   ```
8. Append to the `grammarCards` array in `deutschmeister/src/data/grammar.ts` before the closing `];`
9. Run `npm run build` from `deutschmeister/` to verify TypeScript compiles
10. Report the added card(s) with their IDs

## Valid Topic IDs

noun-gender, indefinite-articles, plural-formation, personal-pronouns, regular-verbs, irregular-verbs, separable-verbs, modal-verbs, nominative-case, accusative-case, sentence-structure, questions, negation, possessive-pronouns, prepositions

## Example Usage

```
/add-grammar noun-gender What gender is "Tisch" (table)? | der Tisch (masculine) | Most nouns ending in consonant clusters are masculine
```
