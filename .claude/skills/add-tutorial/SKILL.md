---
name: add-tutorial
description: Create a new grammar tutorial with rich interactive content blocks
argument-hint: "<topic-id>"
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash
---

# Create Grammar Tutorial

Create a comprehensive, interactive grammar tutorial for a given topic.

## Instructions

1. Parse `$ARGUMENTS` to extract the grammar topic ID (kebab-case slug)
2. Read `@deutschmeister/src/data/grammar.ts` to verify the topic exists in `grammarTopics`
3. Check if a tutorial already exists in `deutschmeister/src/data/tutorials/` for this topic — if so, report and stop
4. Read `@deutschmeister/src/data/tutorials/noun-gender.ts` as a reference template for structure and style
5. Read `@deutschmeister/src/store/types.ts` for `GrammarTutorial`, `TutorialSection`, and `TutorialBlock` type definitions
6. Create the tutorial file at `deutschmeister/src/data/tutorials/<topic-id>.ts`:
   - Default export a `GrammarTutorial` object
   - Include a clear `introduction` paragraph
   - Create multiple `sections`, each with a mix of block types:
     - `text` — explanatory paragraphs
     - `rule` — key grammar rules with title and content
     - `table` — conjugation tables, declension tables, etc. (use `colorCoded: true` where helpful)
     - `example` — German/English sentence pairs with optional `highlights` for color-coded grammar roles
     - `diagram` — sentence structure diagrams with positional slots
     - `decision` — decision trees for choosing the right form (e.g., which article to use)
     - `callout` — tips, warnings, or info callouts
     - `comparison` — side-by-side comparison of related concepts
   - Aim for 4–8 sections covering the topic progressively
   - Use accurate A1-level German throughout
7. Register the new tutorial in `deutschmeister/src/data/tutorials/index.ts` by adding a loader entry to the `loaders` object
8. Run `npm run build` from `deutschmeister/` to verify TypeScript compiles
9. Report the tutorial structure (sections and block types used)

## Scope

This skill is for DeutschMeister (German) tutorials. Romanian tutorials live in `romanianmeister/src/data/tutorials/`.

## Quality Guidelines

- Every section should have at least 2–3 different block types for visual variety
- Include at least one decision tree for topics with rule-based choices
- Use highlights in examples to visually connect grammar roles (subject, verb, object, article, etc.)
- Tables should be used for paradigms (conjugations, declensions, etc.)
- End with a section that summarizes key takeaways using callout blocks

## Example Usage

```
/add-tutorial noun-gender
/add-tutorial accusative-case
```
