# PLAN — Romanian A1 (Sibling App)

## Strategy: Option A — Sibling App (`romanianmeister/`)

Create `romanianmeister/` alongside `deutschmeister/` with its own package.json, data, and deployment. Shared component patterns are copied and adapted (field names changed from `german`/`english` to `romanian`/`english`).

---

## 1. Project Structure

```
william-germana/
├── deutschmeister/          # Existing — untouched
├── romanianmeister/         # New
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── LearnPage.tsx
│   │   │   ├── GrammarPage.tsx
│   │   │   └── SettingsPage.tsx
│   │   ├── components/
│   │   │   ├── layout/        (Layout, BottomNav)
│   │   │   ├── flashcard/     (FlashCard, StarRating)
│   │   │   ├── dashboard/     (StreakCounter, DailyProgress, OverallProgress, MotivationalQuote)
│   │   │   └── tutorial/      (TutorialView, BlockRenderer, blocks/)
│   │   ├── data/
│   │   │   ├── vocabulary.ts          (~600 words)
│   │   │   ├── grammar.ts             (15 topics, ~120 cards)
│   │   │   ├── quotes.ts
│   │   │   └── tutorials/             (12 tutorial files + index.ts)
│   │   ├── store/
│   │   │   ├── types.ts
│   │   │   └── AppContext.tsx
│   │   ├── hooks/
│   │   │   └── useFlashcard.ts
│   │   └── utils/
│   │       ├── db.ts
│   │       ├── spacedRepetition.ts
│   │       └── notifications.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── eslint.config.js
```

---

## 2. Key Type Changes (vs. DeutschMeister)

### `store/types.ts`

```typescript
// VocabWord: "german" → "romanian"
export interface VocabWord {
  id: string;
  romanian: string;      // was: german
  english: string;
  category: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'other';
  gender?: 'm' | 'f' | 'n';   // Romanian has m/f/n (neuter)
  plural?: string;
  exampleRO?: string;    // was: exampleDE
  exampleEN?: string;
}

// CardDirection: "de-en" → "ro-en"
export type CardDirection = 'ro-en' | 'en-ro';

// UserSettings.cardDirection updated
export interface UserSettings {
  // ...
  cardDirection: 'ro-en' | 'en-ro' | 'mixed';
}
```

All other types (`GrammarCard`, `CardProgress`, `DailySession`, `TutorialBlock`, etc.) remain identical — they are language-agnostic.

---

## 3. Data Layer

### 3.1 Vocabulary (~600 words across 18 categories)

IDs: `rv001`–`rv600` (prefix `rv` for Romanian vocab)

| Category | Target Count | Examples |
|----------|-------------|----------|
| Greetings & Politeness | 35 | bună ziua, mulțumesc, vă rog |
| Personal Information | 30 | nume, vârstă, adresă |
| Numbers | 40 | unu, doi, trei... douăzeci |
| Days, Months & Seasons | 35 | luni, marți, ianuarie, primăvară |
| Colors | 20 | roșu, albastru, verde |
| Family & Relationships | 35 | mamă, tată, frate, soră |
| Food & Drink | 50 | pâine, apă, cafea, mâncare |
| Shopping | 30 | magazin, preț, scump, ieftin |
| Housing & Living | 35 | casă, cameră, bucătărie |
| Travel & Transport | 40 | tren, autobuz, bilet, aeroport |
| Daily Routine & Time | 35 | dimineață, oră, a se trezi |
| Body & Health | 35 | cap, mână, doctor, bolnav |
| Work & School | 30 | școală, profesor, student |
| Hobbies & Free Time | 30 | sport, muzică, film, carte |
| Clothing | 25 | haină, pantaloni, rochie |
| Weather & Environment | 25 | soare, ploaie, cald, frig |
| Communication | 25 | telefon, mesaj, a vorbi |
| Common Words | 45 | și, dar, sau, foarte, acum |

### 3.2 Grammar Topics (15) & Cards (~120 total)

IDs: `rg001`–`rg120` (prefix `rg` for Romanian grammar)

| # | Topic ID | Topic Name | Cards |
|---|----------|-----------|-------|
| 1 | `noun-gender` | Noun Gender (m/f/n) | 10 |
| 2 | `indefinite-articles` | Indefinite Articles (un/o) | 8 |
| 3 | `definite-articles` | Definite Articles (Enclitic) | 10 |
| 4 | `plural-formation` | Plural Formation | 10 |
| 5 | `personal-pronouns` | Personal Pronouns | 8 |
| 6 | `regular-verbs` | Regular Verbs (Present Tense) | 10 |
| 7 | `irregular-verbs` | Irregular Verbs (a fi, a avea, a face) | 8 |
| 8 | `adjective-agreement` | Adjective Agreement | 8 |
| 9 | `prepositions` | Prepositions (în, la, pe, cu, de) | 8 |
| 10 | `sentence-structure` | Sentence Structure (SVO) | 8 |
| 11 | `questions` | Questions & Question Words | 8 |
| 12 | `negation` | Negation (nu) | 6 |
| 13 | `demonstratives` | Demonstrative Pronouns | 6 |
| 14 | `numbers-time` | Numbers & Telling Time | 6 |
| 15 | `common-expressions` | Common Expressions & Politeness | 6 |

### 3.3 Tutorials (12 files)

One tutorial per major grammar topic (topics 1–12 get tutorials; topics 13–15 are simpler and covered by cards alone).

Each tutorial includes: introduction, 3–5 sections with mixed block types (text, rule, table, example, diagram, decision, callout, comparison).

**Key visual elements per tutorial:**
- `noun-gender`: Table of noun endings by gender, comparison of m/f/n patterns
- `definite-articles`: Table showing noun → noun+article transformation, decision tree for article selection
- `plural-formation`: Table of plural patterns by gender, examples with highlights
- `regular-verbs`: Conjugation tables for all 4 verb classes (-a, -ea, -e, -i)
- `irregular-verbs`: Side-by-side conjugation of a fi/a avea/a face
- `sentence-structure`: Diagram slots showing SVO order

---

## 4. Branding & Visual Theme

- **App name**: RomânMeister
- **Primary color**: #0D9488 (Teal 600)
- **Secondary color**: #F59E0B (Amber — kept same)
- **Success/Error**: Same as DeutschMeister (#10B981 / #EF4444)
- **PWA manifest**: Updated name, description, theme_color
- **Icons**: New icon-192.png and icon-512.png with teal theme

---

## 5. IndexedDB

- Database name: `romanmeister` (separate from `deutschmeister`)
- Same stores: `cardProgress`, `dailySessions`, `settings`
- Same version: 1
- **No interference** with DeutschMeister data — completely separate DB

---

## 6. Deployment

- Separate GitHub Pages path or subdirectory
- `vite.config.ts` base path: `/william-germana/romanianmeister/` (if deployed under same repo)
- OR separate deployment — TBD based on preference
- Deploy workflow updated to build both apps

---

## 7. Spaced Repetition

- Same SM-2 algorithm — no changes needed
- Same mastery criteria (rating >= 4 AND timesReviewed >= 2)
- Same session logic (40% reviews, 60% new words)

---

## 8. Implementation Phases

### Phase A — Scaffold (est. files: ~15)
1. Initialize `romanianmeister/` with package.json, vite config, tsconfig
2. Copy and adapt: index.html, main.tsx, App.tsx, index.css
3. Copy shared utils: spacedRepetition.ts, notifications.ts
4. Adapt: db.ts (change DB name), types.ts (romanian fields)
5. Copy and adapt: AppContext.tsx, useFlashcard.ts

### Phase B — Components (est. files: ~15)
1. Copy all components from deutschmeister, adapting any German-specific references
2. Update color theme in CSS (primary color → teal)
3. Update branding text (DeutschMeister → RomânMeister)

### Phase C — Data (est. files: ~15)
1. Create vocabulary.ts with ~600 Romanian A1 words
2. Create grammar.ts with 15 topics and ~120 cards
3. Create 12 tutorial files
4. Create quotes.ts with Romanian-themed motivational quotes

### Phase D — Pages & Polish (est. files: ~5)
1. Adapt all 4 pages for Romanian context
2. Update PWA manifest and icons
3. Test build and lint

### Phase E — Deployment
1. Update GitHub Actions workflow to build romanianmeister
2. Test deployment

---

## 9. Files Modified in Existing Codebase

- `.github/workflows/deploy.yml` — add romanianmeister build step
- Root `package.json` — add romanianmeister to workspace (if using workspaces)

**No changes to any file inside `deutschmeister/`.**

---

## 10. Testing Plan

- `npm run build` must pass with zero errors
- `npm run lint` must pass
- Manual testing: all 4 pages render, flashcard sessions work, tutorials load, progress persists across sessions
- Verify DeutschMeister still builds and works independently
