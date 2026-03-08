# LanguageMeister Platform - Multi-Language Learning PWAs

## Project Overview

LanguageMeister is a multi-language learning platform consisting of a static landing page and independent language-specific PWA apps. Each app uses interactive flashcards with spaced repetition (SM-2 algorithm). Currently supports:

- **DeutschMeister** — German A1: 701 vocabulary words across 18 categories, 154 grammar cards across 15 topics, 15 interactive grammar tutorials
- **RomanMeister** — Romanian A1

All user progress is stored locally in the browser via IndexedDB. No backend or authentication.

## Tech Stack

- React 19 + TypeScript + Vite 7 + Tailwind CSS 4
- React Router v7 for client-side routing
- IndexedDB via `idb` library for persistence
- vite-plugin-pwa with Workbox for offline/PWA support
- Lucide React for icons
- Deployed to GitHub Pages

## Repository Layout

The git root is `william-germana/`. The landing page and each language app live in their own subdirectories.

- `landing/` — Static language selection page (no build step)
  - `index.html` — Landing page with flag-based language cards
  - `favicon.svg` — Platform favicon
- `deutschmeister/` — German A1 learning app
- `romanianmeister/` — Romanian A1 learning app

### DeutschMeister Layout

- `deutschmeister/src/pages/` — 4 pages: HomePage, LearnPage, GrammarPage, SettingsPage
- `deutschmeister/src/components/` — UI components organized by domain:
  - `layout/` — Layout, BottomNav
  - `flashcard/` — FlashCard, StarRating
  - `dashboard/` — StreakCounter, DailyProgress, OverallProgress, MotivationalQuote
  - `tutorial/` — TutorialView, BlockRenderer, SectionNav, and block renderers in `blocks/`
- `deutschmeister/src/data/` — Static datasets:
  - `vocabulary.ts` — 701 VocabWord entries (IDs: v001–v701)
  - `grammar.ts` — 154 GrammarCard entries (IDs: g001–g154), plus grammarTopics array (15 topics)
  - `tutorials/` — 15 tutorial files, lazy-loaded via `index.ts`
  - `quotes.ts` — Motivational quotes
- `deutschmeister/src/store/` — AppContext.tsx (React Context + useReducer), types.ts
- `deutschmeister/src/utils/` — db.ts (IndexedDB), spacedRepetition.ts, notifications.ts
- `deutschmeister/src/hooks/` — useFlashcard.ts (useVocabSession, useGrammarSession, useMasteredCount)

## Build & Dev Commands

Each language app has its own `package.json`. Run commands from the respective directory:

### DeutschMeister (`deutschmeister/`)
- `npm run dev` — Start Vite dev server
- `npm run build` — TypeScript check (`tsc -b`) + Vite production build
- `npm run lint` — ESLint (flat config, TS + React hooks + React Refresh)
- `npm run preview` — Preview production build locally

### RomanMeister (`romanianmeister/`)
- Same commands as DeutschMeister

### Landing Page (`landing/`)
- Static HTML — no build step needed

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Pushes to main/master trigger build and deploy.

### URL Structure
- `/william-germana/` — Landing page (language selector)
- `/william-germana/deutschmeister/` — DeutschMeister (German A1)
- `/william-germana/romanianmeister/` — RomanMeister (Romanian A1)

The deploy workflow builds both apps, then combines outputs into a `_site/` directory with the landing page at root and each app in its subdirectory. The `base` path is conditionally set in each app's `vite.config.ts` using the `GITHUB_PAGES` env var.

## Architecture Patterns

### State Management

Global state via React Context + useReducer in `AppContext.tsx`.
- Action types: INIT, UPDATE_SETTINGS, UPDATE_SESSION, SET_MASTERED, INCREMENT_REVIEWED
- Settings and sessions auto-persist to IndexedDB on change via useEffect

### Data Types (defined in store/types.ts)

- `VocabWord` — id, german, english, category, partOfSpeech, gender?, plural?, exampleDE?, exampleEN?
- `GrammarCard` — id, topicId, topicName, question, answer, explanation
- `CardProgress` — cardId, cardType, lastRating, timesReviewed, nextReviewDate, easeFactor, interval, lastReviewedAt
- `GrammarTutorial` — topicId, title, introduction, sections (each with TutorialBlock[])
- `TutorialBlock` — union type: text, rule, table, example, diagram, decision, callout, comparison

### Spaced Repetition (SM-2)

Implemented in `spacedRepetition.ts`. Rating 1–5 maps to intervals:
- 1: repeat same session, ease −0.2
- 2: 1 day, ease −0.1
- 3: 3 days (or prev×1.2), ease unchanged
- 4: prev×ease (or 7 days if first), ease +0.1
- 5: prev×ease×1.3 (or 14 days if first), ease +0.15

A card is "mastered" when lastRating >= 4 AND timesReviewed >= 2.

### Flashcard Session Logic

In `useFlashcard.ts`: sessions prioritize due reviews (40% of limit), then new words. Cards are shuffled. Direction (DE→EN / EN→DE) is determined by user preference.

## Coding Conventions

- TypeScript strict mode, no `any`
- Functional components only, hooks for logic
- Tailwind CSS 4 utility classes for styling (imported via @tailwindcss/vite plugin, no tailwind.config.js)
- File naming: PascalCase for components, camelCase for utilities and hooks
- Data IDs: vocab uses `v###` (v001–v701), grammar uses `g###` (g001–g154)
- Grammar topic IDs are kebab-case slugs (e.g., `noun-gender`, `modal-verbs`)
- Tutorials are individual files in `data/tutorials/`, default-exporting a GrammarTutorial object, lazy-loaded in `index.ts`
- Color palette: Primary #4F46E5 (Indigo), Secondary #F59E0B (Amber), Success #10B981, Error #EF4444

## Vocabulary Categories (18)

Greetings & Politeness, Personal Information, Numbers, Days Months & Seasons, Colors, Family & Relationships, Food & Drink, Shopping, Housing & Living, Travel & Transport, Daily Routine & Time, Body & Health, Work & School, Hobbies & Free Time, Clothing, Weather & Environment, Communication, Common Words

## Grammar Topics (15)

noun-gender, indefinite-articles, plural-formation, personal-pronouns, regular-verbs, irregular-verbs, separable-verbs, modal-verbs, nominative-case, accusative-case, sentence-structure, questions, negation, possessive-pronouns, prepositions

## Common Tasks

- **Adding vocabulary**: Append to `vocabulary` array in `deutschmeister/src/data/vocabulary.ts`, using next sequential ID (v702+), matching the VocabWord interface
- **Adding grammar cards**: Append to `grammarCards` array in `deutschmeister/src/data/grammar.ts`, using next sequential ID (g155+), matching the GrammarCard interface
- **Adding a tutorial**: Create new file in `deutschmeister/src/data/tutorials/`, export default a GrammarTutorial object, register it in `tutorials/index.ts`
- **Adding a new page**: Create in `src/pages/`, add route in `App.tsx`, add nav item in `BottomNav.tsx`
- **Adding a new language**: Create new directory (e.g., `spanishmeister/`), add flag card to `landing/index.html`, add build + copy steps in deploy workflow

## Important Notes

- The `deutschmeister/` directory has its own `package.json` and `node_modules/`
- The `romanianmeister/` directory has its own `package.json` and `node_modules/`
- The root `package.json` is minimal (just a workspace marker)
- IndexedDB database name is `deutschmeister`, version 1, with stores: cardProgress, dailySessions, settings
- PWA icons are in `deutschmeister/public/` (icon-192.png, icon-512.png)
- Each app's service worker is scoped to its own sub-path — no cross-app interference
