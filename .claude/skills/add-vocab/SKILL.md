---
name: add-vocab
description: Add new German A1 vocabulary words to the dataset
argument-hint: "<german_word> - <english_translation> [category]"
allowed-tools:
  - Read
  - Edit
  - Grep
  - Glob
  - Bash
---

# Add Vocabulary Words

Add one or more German A1 vocabulary words to the dataset.

## Instructions

1. Read `@deutschmeister/src/store/types.ts` to confirm the `VocabWord` interface
2. Read the end of `@deutschmeister/src/data/vocabulary.ts` to find the current last ID
3. Parse `$ARGUMENTS` to extract:
   - German word (include `der/die/das` for nouns)
   - English translation (after the `-`)
   - Category in brackets (optional — if omitted, infer the best fit from the 18 existing categories)
4. For each word:
   - Assign the next sequential ID (v702, v703, etc.)
   - Determine `partOfSpeech`: noun, verb, adjective, adverb, phrase, or other
   - For nouns: extract `gender` from the article (der→m, die→f, das→n) and provide `plural` form
   - Optionally add `exampleDE` and `exampleEN` for context
5. Append the new `VocabWord` object(s) to the `vocabulary` array in `deutschmeister/src/data/vocabulary.ts` before the closing `];`
6. Run `npm run build` from `deutschmeister/` to verify TypeScript compiles
7. Report the added word(s) with their IDs

## Example Usage

```
/add-vocab der Hund - dog [Family & Relationships]
/add-vocab sprechen - to speak
/add-vocab die Katze - cat, der Vogel - bird
```

## Validation Rules

- Every noun MUST have an article (der/die/das) in the german field
- Every noun MUST have a gender field (m/f/n)
- IDs must be strictly sequential — never skip or reuse
- Categories must match one of the 18 existing categories exactly
- No duplicate german words (search existing data first)
