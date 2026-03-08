---
name: add-language
description: Add a new language and proficiency level to the platform — comprehensive analysis, planning, and implementation
argument-hint: "<language> <level> (e.g. Romanian A1, Russian B2, Spanish Medical-C2)"
allowed-tools:
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - Bash
  - Agent
  - WebSearch
  - WebFetch
---

# Add New Language / Level to the Platform

This is a multi-phase orchestration skill that guides the full process of expanding the platform to support a new language at a specific CEFR level (or specialized level like Medical C2).

Parse `$ARGUMENTS` to extract the target language and level. Then execute the following 6 phases sequentially.

---

## Phase 1 — Comprehensive Language Analysis

Research the target language's unique characteristics relevant to learning:

1. **Writing system**: Latin, Cyrillic, Arabic, other? Special characters and diacritics needed (e.g., ă, â, î, ș, ț for Romanian; й, ы, э for Russian)
2. **Phonological features**: Tone, stress patterns, vowel harmony, palatalization, or other features critical for learners
3. **Morphological complexity**: Case system (how many cases?), verb conjugation patterns (regular/irregular classes), agglutination, grammatical gender system
4. **Core grammatical structures** specific to the target CEFR level — reference the CEFR descriptors for that level
5. **For specialized levels** (e.g., Medical C2): domain-specific vocabulary scope, register requirements, professional terminology systems
6. **Unique challenges**: What makes this language particularly challenging compared to the existing German content?

Document findings in a structured analysis section of the output.

---

## Phase 2 — Language Training Best Practices

Research evidence-based best practices for teaching THIS specific language:

1. **Pedagogical approach**: What methodology works best for this language family?
   - For Slavic languages: case-first vs. phrase-first approaches
   - For Romance languages: cognate-leveraging strategies
   - For languages with non-Latin scripts: script mastery timeline
2. **Vocabulary introduction order**: Optimal sequencing for this language at the target level
3. **Grammar topic sequencing**: Dependency graph — what builds on what?
4. **Common learner mistakes**: Frequent errors and how to preemptively address them through card design
5. **Cultural context**: How much cultural integration is needed for effective learning?
6. **For specialized levels**: Domain-specific training methodologies

### Content Scope by Level

| Level | Words | Grammar Topics | Tutorials |
|-------|-------|---------------|-----------|
| A1 | 500–800 | 12–18 | 10–15 |
| A2 | 800–1,200 | 15–22 | 15–20 |
| B1 | 1,200–2,000 | 20–30 | 20–30 |
| B2 | 2,000–3,500 | 25–35 | 25–35 |
| C1 | 3,500–5,000 | 30–40 | 30–40 |
| C2 | 5,000–8,000 | 35–50 | 35–50 |
| Specialized | Based on domain requirements |

Map CEFR descriptors for the target level to concrete competency milestones.

---

## Phase 3 — Visual Learning Elements Analysis

Analyze the importance and role of visual elements for learning THIS specific language:

1. **Script visualization needs**:
   - Non-Latin scripts: character comparison charts, stroke order guides, letter-form variants
   - Latin scripts with diacritics: accent/diacritic reference charts
2. **Grammar visualization**:
   - Case tables and declension paradigms
   - Verb conjugation wheels or grids
   - Decision trees for grammatical choices (article selection, case usage, aspect choice)
3. **Effective diagram types**: Which of the existing `TutorialBlock` types map well?
   - `table` — conjugation/declension paradigms
   - `diagram` — sentence structure visualization
   - `decision` — rule-based grammar choices
   - `comparison` — contrasting similar concepts
4. **New block types needed?**: Assess whether any new block types should be created (e.g., `character-practice` for non-Latin scripts, `audio-pair` for tonal languages)
5. **Color coding strategy**: Plan color associations for grammatical categories (gender, cases, verb aspects)
6. **Visual differentiation**: How to distinguish this language's content from existing German content (theme colors, iconography)

---

## Phase 4 — Codebase Integration Analysis

Analyze the current architecture for multi-language extension:

1. Read these key files:
   - `@deutschmeister/src/store/types.ts` — what types need language-parameterization?
   - `@deutschmeister/src/store/AppContext.tsx` — state management changes for multi-language
   - `@deutschmeister/src/utils/db.ts` — IndexedDB schema changes (new stores? version bump?)
   - `@deutschmeister/src/hooks/useFlashcard.ts` — is session logic language-agnostic?
   - `@deutschmeister/src/pages/` — routing and UI changes for language selection
   - `@deutschmeister/vite.config.ts` — build config changes

2. **Integration strategy**: New languages get their own directory (e.g., `spanishmeister/`) alongside existing apps. The platform uses a sibling app architecture:
   - Each language app is independent with its own `package.json`, build, and PWA config
   - The landing page (`landing/index.html`) needs a new flag card added
   - The deploy workflow (`.github/workflows/deploy.yml`) needs a new build step + copy step for the `_site/` output
   - Each app's service worker is scoped to its own sub-path — no cross-app interference

3. Identify all files needing modification vs. creation
4. Plan the data file structure for the new language

---

## Phase 5 — Comprehensive Implementation Plan

Produce a detailed implementation plan document covering:

- **Data layer**: All vocabulary categories/words, grammar topics/cards, tutorial content to create
- **Type changes**: New TypeScript interfaces or modifications to existing ones
- **State management**: Changes to AppContext, reducers, actions
- **Storage**: IndexedDB schema changes, migration strategy
- **UI/UX**: Language selector, routing changes, visual theme
- **Spaced repetition**: Algorithm adjustments if needed (e.g., different ease factors for harder languages)
- **PWA**: Service worker and caching updates
- **Content plan**: Full category/topic breakdown with specific word lists
- **Visual plan**: All diagrams, tables, and visual aids needed
- **Testing plan**: How to validate new content and integration
- **Deployment plan**: How to deploy with the new language enabled

Write this plan to: `PLAN-<Language>-<Level>.md` at the repo root (e.g., `PLAN-Romanian-A1.md`).

**STOP HERE and present the plan summary to the user for approval before proceeding to Phase 6.**

---

## Phase 6 — Guided Implementation (only after user approval)

1. Execute the plan step by step, starting with the data layer
2. Use the `content-creator` agent for bulk vocabulary and grammar card generation
3. Use the `test-runner` agent to validate after each major milestone
4. Commit after each logical phase (data, types, state, UI, PWA)
5. Run final `npm run build` and `npm run lint` to verify everything compiles
6. Summarize what was created and what remains for future iterations

---

## Key Constraints

- **Always present the implementation plan for user approval** before making code changes
- **Never assume the integration strategy** — present options and let the user choose
- **Respect existing German content** — ensure DeutschMeister remains fully functional
- **Maintain code quality** — TypeScript strict, no `any`, functional components, Tailwind CSS 4
