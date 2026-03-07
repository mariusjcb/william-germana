# DeutschMeister - German A1 Learning Progressive Web App

## Comprehensive Implementation Plan

---

## 1. Project Overview

**DeutschMeister** is a mobile-first Progressive Web App (PWA) that helps users learn German at the A1 (CEFR) level through interactive flashcards, daily word goals, grammar exercises, and motivational notifications. All progress is persisted locally in the browser — no authentication required.

### Core Features
1. **Flashcard System** — Vocabulary flashcards with bidirectional language switching (DE→EN and EN→DE), 5-star self-rating
2. **Daily 100 Words Goal** — Structured daily learning with progress tracking
3. **Grammar Flashcards** — Interactive cards covering all A1 grammar topics
4. **Session Persistence** — All progress saved in browser (IndexedDB) across sessions
5. **Daily Motivational Notifications** — Push notifications via PWA/Service Worker
6. **Progressive Web App** — Installable, works offline, responsive

---

## 2. German A1 Curriculum Scope

### 2.1 Vocabulary (~700 words organized in 17 topic categories)

| # | Category | German Name | Word Count | Examples |
|---|----------|-------------|------------|----------|
| 1 | Greetings & Politeness | Begrüßung | ~25 | Guten Morgen, Danke, Bitte, Entschuldigung |
| 2 | Personal Information | Person | ~35 | Name, Alter, Adresse, Beruf, Nationalität |
| 3 | Numbers | Zahlen | ~40 | eins–hundert, erste–zehnte |
| 4 | Days, Months & Seasons | Kalender | ~30 | Montag–Sonntag, Januar–Dezember |
| 5 | Colors | Farben | ~12 | rot, blau, grün, gelb, schwarz, weiß |
| 6 | Family & Relationships | Familie | ~25 | Vater, Mutter, Bruder, Schwester, Freund |
| 7 | Food & Drink | Essen und Trinken | ~60 | Brot, Milch, Kaffee, Obst, Gemüse |
| 8 | Shopping | Einkaufen | ~30 | Preis, Geld, teuer, billig, kaufen |
| 9 | Housing & Living | Wohnen | ~45 | Wohnung, Zimmer, Küche, Bad, Möbel |
| 10 | Travel & Transport | Reisen/Verkehr | ~40 | Zug, Bus, Fahrkarte, Flughafen |
| 11 | Daily Routine & Time | Tagesablauf | ~40 | Uhr, Morgen, aufstehen, schlafen |
| 12 | Body & Health | Körper/Gesundheit | ~30 | Kopf, Arm, Arzt, krank, Apotheke |
| 13 | Work & School | Arbeit/Schule | ~35 | Arbeit, Lehrer, Kurs, lernen |
| 14 | Hobbies & Free Time | Freizeit | ~30 | spielen, lesen, Musik, Sport, Kino |
| 15 | Clothing | Kleidung | ~20 | Hose, Hemd, Schuhe, Jacke |
| 16 | Environment & Weather | Umwelt/Wetter | ~25 | Wetter, kalt, warm, Regen, Sonne |
| 17 | Communication | Bank/Post/Telefon | ~25 | Brief, E-Mail, anrufen, Konto |

**Key Rule**: All nouns are stored WITH their article (der/die/das) and plural form.

### 2.2 Grammar Topics (15 lessons)

| # | Topic | Content |
|---|-------|---------|
| 1 | Noun Gender & Articles | der (m), die (f), das (n) — definite articles |
| 2 | Indefinite & Negative Articles | ein/eine/ein, kein/keine/kein |
| 3 | Plural Formation | Patterns: -e, -en, -er, -s, umlaut |
| 4 | Personal Pronouns | ich, du, er/sie/es, wir, ihr, sie/Sie |
| 5 | Present Tense — Regular Verbs | machen: mache, machst, macht, machen, macht, machen |
| 6 | Present Tense — Irregular Verbs | sein, haben (full conjugation) |
| 7 | Separable Verbs | anfangen, aufstehen, einkaufen |
| 8 | Modal Verbs | können, müssen, dürfen, wollen, sollen, möchten |
| 9 | Nominative Case | Subject: der Mann, eine Frau |
| 10 | Accusative Case | Direct object: den Mann, einen Mann |
| 11 | Sentence Structure | V2 rule, SVO, question word order |
| 12 | Yes/No & W-Questions | Verb-first vs. W-word + verb |
| 13 | Negation | nicht vs. kein |
| 14 | Possessive Pronouns | mein, dein, sein, ihr, unser, euer |
| 15 | Prepositions & Conjunctions | in, auf, mit, nach, zu / und, oder, aber |

---

## 3. UI/UX Design Specification

### 3.1 Design Philosophy

Modern, clean, and playful — inspired by Duolingo's approachability and Anki's effectiveness. Mobile-first responsive design with smooth animations.

### 3.2 Color Palette

```
Primary:        #4F46E5  (Indigo 600 — main actions, headers)
Primary Light:  #818CF8  (Indigo 400 — hover states)
Primary Dark:   #3730A3  (Indigo 800 — active states)
Secondary:      #F59E0B  (Amber 500 — stars, streaks, accents)
Success:        #10B981  (Emerald 500 — correct, completed)
Error:          #EF4444  (Red 500 — incorrect)
Background:     #F8FAFC  (Slate 50 — app background)
Surface:        #FFFFFF  (White — cards, modals)
Text Primary:   #1E293B  (Slate 800)
Text Secondary: #64748B  (Slate 500)
German Flag:    #000000 / #DD0000 / #FFCC00 (used as decorative accent)
```

### 3.3 Typography

- **Headings**: Inter (700 weight) — clean, modern sans-serif
- **Body**: Inter (400/500 weight)
- **German words**: Inter (600 weight, slightly larger) — emphasis on the word being learned
- **Sizes**: 14px base, 18px card text, 24px headings, 32px hero numbers

### 3.4 Page Layouts & Wireframes

#### Navigation (Bottom Tab Bar — mobile-first)
```
┌─────────────────────────────────────┐
│                                     │
│           [Page Content]            │
│                                     │
├─────────┬─────────┬─────────┬───────┤
│  🏠     │  📚     │  📝     │  ⚙️   │
│  Home   │  Learn  │ Grammar │ Settings│
└─────────┴─────────┴─────────┴───────┘
```

#### A. Home / Dashboard
```
┌─────────────────────────────────────┐
│  DeutschMeister          🔔         │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐    │
│  │  🔥 Day 12 Streak!         │    │
│  │  ████████████░░░  73/100    │    │
│  │  words learned today        │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  📊 Overall Progress        │    │
│  │  ████████░░░░░░░  312/700   │    │
│  │  words mastered             │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │ ▶ Start  │  │ 📝 Grammar│        │
│  │  Today's │  │  Practice │        │
│  │  Words   │  │           │        │
│  └──────────┘  └──────────┘        │
│                                     │
│  "Jeder Tag ist ein neuer Anfang"   │
│  — Every day is a new beginning     │
│                                     │
├─────────┬─────────┬─────────┬───────┤
│  Home   │  Learn  │ Grammar │ Settings│
└─────────┴─────────┴─────────┴───────┘
```

#### B. Flashcard Screen
```
┌─────────────────────────────────────┐
│  ← Back            Card 23 of 100   │
├─────────────────────────────────────┤
│                                     │
│            ┌───────────┐            │
│            │  🇩🇪 → 🇬🇧  │            │
│            └───────────┘            │
│                                     │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │                             │    │
│  │       der Tisch             │    │
│  │       (noun, masculine)     │    │
│  │                             │    │
│  │                             │    │
│  │   [ Tap to reveal ]        │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  After reveal:                      │
│  ┌─────────────────────────────┐    │
│  │       the table             │    │
│  │                             │    │
│  │  How well did you know it?  │    │
│  │  ☆  ☆  ☆  ☆  ☆             │    │
│  │  1   2   3   4   5          │    │
│  │                             │    │
│  │  1=No idea  5=Perfect       │    │
│  └─────────────────────────────┘    │
│                                     │
│  ████████████░░░  23/100 today      │
│                                     │
├─────────┬─────────┬─────────┬───────┤
│  Home   │  Learn  │ Grammar │ Settings│
└─────────┴─────────┴─────────┴───────┘
```

**Flashcard Behavior:**
- Card appears with word in one language (randomly DE→EN or EN→DE)
- User mentally translates, then taps to reveal answer
- User rates themselves 1-5 stars
- Stars affect spaced repetition scheduling:
  - 1 star: show again in same session
  - 2 stars: show again in 1 day
  - 3 stars: show again in 3 days
  - 4 stars: show again in 7 days
  - 5 stars: show again in 14 days
- Card flips with a smooth 3D CSS animation

#### C. Grammar Practice Screen
```
┌─────────────────────────────────────┐
│  Grammar Topics                     │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐    │
│  │ ✅ 1. Noun Gender & Articles │    │
│  │    12/12 cards mastered     │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │ 🔵 2. Indefinite Articles   │    │
│  │    8/10 cards mastered      │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │ ⬜ 3. Plural Formation      │    │
│  │    0/15 cards mastered      │    │
│  └─────────────────────────────┘    │
│  ...                                │
│                                     │
├─────────┬─────────┬─────────┬───────┤
│  Home   │  Learn  │ Grammar │ Settings│
└─────────┴─────────┴─────────┴───────┘
```

#### D. Settings Screen
```
┌─────────────────────────────────────┐
│  Settings                           │
├─────────────────────────────────────┤
│                                     │
│  Daily Goal                         │
│  ┌─────────────────────────────┐    │
│  │ Words per day:  [100] ▼     │    │
│  └─────────────────────────────┘    │
│                                     │
│  Notifications                      │
│  ┌─────────────────────────────┐    │
│  │ Daily reminder   [ON] 🔘    │    │
│  │ Time:           [09:00] ▼   │    │
│  └─────────────────────────────┘    │
│                                     │
│  Learning Preferences               │
│  ┌─────────────────────────────┐    │
│  │ Card direction:             │    │
│  │ ○ German → English only     │    │
│  │ ○ English → German only     │    │
│  │ ● Mixed (recommended)      │    │
│  └─────────────────────────────┘    │
│                                     │
│  Data                               │
│  ┌─────────────────────────────┐    │
│  │ [Reset Progress]            │    │
│  │ [Export Progress]           │    │
│  └─────────────────────────────┘    │
│                                     │
├─────────┬─────────┬─────────┬───────┤
│  Home   │  Learn  │ Grammar │ Settings│
└─────────┴─────────┴─────────┴───────┘
```

### 3.5 Animations & Interactions

- **Card flip**: 3D CSS transform (rotateY) with 0.5s ease-in-out
- **Star rating**: Stars fill with scale bounce animation on tap
- **Progress bar**: Smooth width transition (0.3s ease)
- **Page transitions**: Fade + slight slide (0.2s)
- **Streak fire**: Subtle pulse animation on streak counter
- **Correct answer**: Brief green glow on card border
- **Card swipe**: Optional swipe left/right for next/previous

### 3.6 Responsive Breakpoints

- **Mobile**: 320px–480px (primary target, single column)
- **Tablet**: 481px–768px (slightly larger cards, more padding)
- **Desktop**: 769px+ (centered content max-width 480px, mimicking phone layout)

---

## 4. Technical Architecture

### 4.1 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | React 18 + TypeScript | Component-based, excellent PWA support |
| **Build Tool** | Vite | Fast builds, excellent PWA plugin |
| **Styling** | Tailwind CSS | Utility-first, rapid UI development |
| **PWA** | vite-plugin-pwa (Workbox) | Service worker, manifest, offline |
| **Storage** | IndexedDB (via idb) | Structured data, large capacity, persistent |
| **Routing** | React Router v6 | Client-side routing |
| **State** | React Context + useReducer | Simple, no external dependency |
| **Notifications** | Web Push API + Service Worker | Native push notifications |
| **Deployment** | Netlify or Vercel | Free tier, instant deploys, HTTPS |
| **Icons** | Lucide React | Lightweight, modern icon set |

### 4.2 Project Structure

```
deutschmeister/
├── public/
│   ├── icons/                  # PWA icons (192x192, 512x512)
│   ├── manifest.json
│   └── sw.js                   # Service worker (generated)
├── src/
│   ├── main.tsx                # Entry point
│   ├── App.tsx                 # Root component with router
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BottomNav.tsx   # Bottom tab navigation
│   │   │   ├── Header.tsx      # Top header bar
│   │   │   └── Layout.tsx      # Main layout wrapper
│   │   ├── flashcard/
│   │   │   ├── FlashCard.tsx   # Main flashcard component
│   │   │   ├── StarRating.tsx  # 5-star rating component
│   │   │   ├── CardStack.tsx   # Card stack/queue manager
│   │   │   └── ProgressBar.tsx # Session progress bar
│   │   ├── grammar/
│   │   │   ├── GrammarCard.tsx # Grammar flashcard
│   │   │   ├── TopicList.tsx   # Grammar topics list
│   │   │   └── TopicDetail.tsx # Grammar topic detail
│   │   ├── dashboard/
│   │   │   ├── StreakCounter.tsx
│   │   │   ├── DailyProgress.tsx
│   │   │   ├── OverallProgress.tsx
│   │   │   └── MotivationalQuote.tsx
│   │   └── settings/
│   │       ├── NotificationToggle.tsx
│   │       ├── DailyGoalPicker.tsx
│   │       └── CardDirectionPicker.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LearnPage.tsx       # Vocabulary flashcards
│   │   ├── GrammarPage.tsx     # Grammar flashcards
│   │   └── SettingsPage.tsx
│   ├── data/
│   │   ├── vocabulary.ts       # All ~700 words with categories
│   │   ├── grammar.ts          # All grammar cards
│   │   └── quotes.ts           # Motivational quotes
│   ├── hooks/
│   │   ├── useFlashcard.ts     # Flashcard logic & spaced repetition
│   │   ├── useProgress.ts      # Progress tracking
│   │   ├── useNotifications.ts # Push notification management
│   │   └── useStorage.ts       # IndexedDB operations
│   ├── store/
│   │   ├── AppContext.tsx       # Global state context
│   │   └── types.ts            # TypeScript interfaces
│   ├── utils/
│   │   ├── spacedRepetition.ts # SM-2 algorithm (simplified)
│   │   ├── db.ts               # IndexedDB wrapper
│   │   └── notifications.ts    # Notification helpers
│   └── styles/
│       └── index.css           # Tailwind imports + custom CSS
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── netlify.toml                # Deployment config
```

### 4.3 Data Models

```typescript
// Vocabulary Word
interface VocabWord {
  id: string;
  german: string;          // "der Tisch"
  english: string;         // "the table"
  category: string;        // "housing"
  partOfSpeech: "noun" | "verb" | "adjective" | "adverb" | "other";
  gender?: "m" | "f" | "n";
  plural?: string;         // "die Tische"
  exampleDE?: string;      // "Der Tisch ist groß."
  exampleEN?: string;      // "The table is big."
}

// Grammar Card
interface GrammarCard {
  id: string;
  topicId: string;         // "noun-gender"
  question: string;        // "What article does 'Tisch' take?"
  answer: string;          // "der (masculine)"
  explanation: string;     // "Tisch is masculine..."
  difficulty: 1 | 2 | 3;
}

// User Progress (per card)
interface CardProgress {
  cardId: string;
  cardType: "vocab" | "grammar";
  lastRating: number;      // 1-5
  timesReviewed: number;
  nextReviewDate: string;  // ISO date
  easeFactor: number;      // SM-2 ease factor
  interval: number;        // days until next review
  lastReviewedAt: string;
}

// Daily Session
interface DailySession {
  date: string;            // "2026-03-07"
  wordsReviewed: number;
  wordsNew: number;
  grammarReviewed: number;
  totalCards: number;
  ratings: number[];       // array of ratings given
}

// User Settings
interface UserSettings {
  dailyGoal: number;       // default 100
  notificationsEnabled: boolean;
  notificationTime: string; // "09:00"
  cardDirection: "de-en" | "en-de" | "mixed";
  streak: number;
  lastActiveDate: string;
}
```

### 4.4 Spaced Repetition Algorithm

Simplified SM-2 algorithm based on user's 5-star self-rating:

```
Rating 1 (No idea):     interval = 0 (repeat in same session), ease -= 0.2
Rating 2 (Hard):        interval = 1 day, ease -= 0.1
Rating 3 (Moderate):    interval = 3 days, ease unchanged
Rating 4 (Easy):        interval = previous * ease, ease += 0.1
Rating 5 (Perfect):     interval = previous * ease * 1.3, ease += 0.15
```

### 4.5 Session Persistence Strategy

**IndexedDB** with the `idb` library (lightweight Promise wrapper):

- **Store: `cardProgress`** — Individual card progress records (key: cardId)
- **Store: `dailySessions`** — Daily session summaries (key: date)
- **Store: `settings`** — User preferences (single record)

Data is written immediately after each card rating. On app load:
1. Load settings from IndexedDB
2. Calculate streak (compare lastActiveDate with today)
3. Load today's session or create new one
4. Load all cardProgress to build review queue

### 4.6 Push Notifications

Using the **Notifications API** + **Service Worker**:

1. On first visit, prompt user for notification permission
2. Service Worker schedules a daily notification at the configured time
3. Notification content: randomly selected motivational quote + progress summary
4. Example: "🔥 Your streak is 12 days! Keep going — 'Übung macht den Meister!'"

**Motivational quotes pool** (~30 quotes):
- German proverbs with English translations
- Learning encouragement messages
- Progress milestones

---

## 5. Step-by-Step Implementation Plan

### Phase 1: Project Scaffolding & Core Infrastructure (Step 1-3)

**Step 1: Initialize Project**
- Create Vite + React + TypeScript project
- Install dependencies: tailwindcss, react-router-dom, idb, lucide-react, vite-plugin-pwa
- Configure Tailwind with custom color palette
- Set up PWA manifest and basic service worker
- Create base `index.html` with meta tags for PWA

**Step 2: Build Layout & Navigation**
- Create `Layout.tsx` with header + bottom nav + content area
- Implement `BottomNav.tsx` with 4 tabs (Home, Learn, Grammar, Settings)
- Set up React Router with 4 routes
- Make layout responsive (mobile-first, max-width container for desktop)
- Add page transition animations

**Step 3: Set Up Data Layer**
- Create IndexedDB wrapper using `idb`
- Implement `useStorage` hook for CRUD operations
- Create `AppContext` with global state (settings, progress, session)
- Build settings persistence (load on mount, save on change)

### Phase 2: Vocabulary Data & Flashcard Engine (Step 4-6)

**Step 4: Build Vocabulary Dataset**
- Create `vocabulary.ts` with all ~700 A1 words
- Organize by 17 categories
- Include: german, english, gender, plural, part of speech, example sentences
- All nouns include article (der/die/das)

**Step 5: Build Flashcard Component**
- Create `FlashCard.tsx` with front/back faces
- Implement 3D flip animation (CSS transform)
- Show word in one language, reveal in other on tap
- Randomly alternate direction (DE→EN / EN→DE) based on settings
- Display word type, gender badge, example sentence on back

**Step 6: Build Star Rating & Card Logic**
- Create `StarRating.tsx` — 5 interactive stars with bounce animation
- Implement spaced repetition algorithm in `spacedRepetition.ts`
- Build card queue logic: due cards first, then new cards
- Save progress to IndexedDB after each rating
- Show session progress bar (X of 100 today)

### Phase 3: Daily Learning & Progress (Step 7-9)

**Step 7: Implement Daily 100-Word System**
- Build `LearnPage.tsx` — the main flashcard session
- Select 100 cards per day: mix of due reviews + new words
- Track daily progress (words reviewed, new words learned)
- Show completion screen when daily goal reached
- Handle edge case: fewer than 100 words remaining as new

**Step 8: Build Dashboard / Home Page**
- Create `HomePage.tsx` with:
  - Streak counter with fire animation
  - Daily progress bar (X/100)
  - Overall progress (X/700 words mastered)
  - Quick-start buttons (Start Today's Words, Grammar Practice)
  - Daily motivational quote (German proverb + translation)
- Calculate streak from consecutive active days

**Step 9: Progress Tracking System**
- Track per-category completion (e.g., "Food & Drink: 45/60 mastered")
- Define "mastered" = rated 4+ stars at least twice
- Show overall statistics on dashboard
- Store daily session summaries for historical data

### Phase 4: Grammar System (Step 10-11)

**Step 10: Build Grammar Dataset**
- Create `grammar.ts` with flashcards for all 15 grammar topics
- Each topic has 8-15 flashcards
- Cards test: article selection, verb conjugation, word order, case usage
- Include clear explanations on card backs
- Example: Front: "Conjugate 'machen' for 'ich'" → Back: "ich mache"

**Step 11: Build Grammar Practice UI**
- Create `GrammarPage.tsx` with topic list
- Show completion status per topic (progress ring)
- Tap topic → flashcard session for that topic
- Reuse flashcard component with grammar-specific styling
- Track grammar progress separately in IndexedDB

### Phase 5: Notifications & PWA (Step 12-13)

**Step 12: Implement Push Notifications**
- Request notification permission on first visit (with nice UI prompt)
- Build notification scheduling in service worker
- Create pool of ~30 motivational messages
- Include progress data in notifications
- Allow time customization in settings
- Handle permission denied gracefully

**Step 13: Complete PWA Setup**
- Configure `vite-plugin-pwa` with:
  - App manifest (name, icons, colors, display: standalone)
  - Service worker for offline caching (cache-first for assets)
  - Precache vocabulary and grammar data
- Generate PWA icons (192x192, 512x512)
- Add install prompt banner
- Test offline functionality

### Phase 6: Polish & Settings (Step 14-15)

**Step 14: Build Settings Page**
- Daily goal picker (50, 75, 100, 150 words)
- Notification toggle + time picker
- Card direction preference (DE→EN, EN→DE, Mixed)
- Reset progress (with confirmation dialog)
- Export progress as JSON
- App version info

**Step 15: UI Polish & Animations**
- Refine all animations (card flip, star rating, progress bars)
- Add haptic feedback hints (vibration API on mobile)
- Implement dark mode support (auto-detect system preference)
- Add loading states and skeleton screens
- Accessibility: proper ARIA labels, keyboard navigation
- Test on multiple screen sizes

### Phase 7: Deployment (Step 16)

**Step 16: Deploy & Test**
- Build production bundle (`vite build`)
- Deploy to **Netlify** (or Vercel):
  - Connect git repo or manual deploy
  - Configure `_redirects` for SPA routing
  - Enable HTTPS (automatic)
- Run Lighthouse PWA audit — target 90+ score
- Test on:
  - Mobile Chrome (Android)
  - Mobile Safari (iOS)
  - Desktop Chrome
  - Desktop Firefox
- Verify:
  - PWA install works
  - Offline mode works
  - Notifications work
  - Data persists across sessions
  - Responsive on all screen sizes
- Share deployment URL

---

## 6. Deployment Configuration

### Netlify Config (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### PWA Manifest (key fields)
```json
{
  "name": "DeutschMeister - German A1 Learning",
  "short_name": "DeutschMeister",
  "description": "Learn German A1 vocabulary and grammar with flashcards",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F8FAFC",
  "theme_color": "#4F46E5",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## 7. Key Design Decisions & Rationale

| Decision | Choice | Why |
|----------|--------|-----|
| No backend/auth | IndexedDB only | Simplicity, privacy, works offline, no server costs |
| React + Vite | Over Next.js | No SSR needed, simpler PWA setup, faster builds |
| Tailwind CSS | Over CSS modules | Rapid prototyping, consistent design system |
| SM-2 algorithm | Over random order | Proven spaced repetition for long-term retention |
| 5-star self-rating | Over correct/incorrect | More nuanced, user controls their learning pace |
| Bottom nav | Over hamburger menu | Better mobile UX, always visible, standard pattern |
| Mixed direction | Default card mode | Forces active recall in both directions |

---

## 8. Estimated Implementation Breakdown

| Phase | Steps | Description |
|-------|-------|-------------|
| Phase 1 | Steps 1-3 | Project setup, layout, data layer |
| Phase 2 | Steps 4-6 | Vocabulary data, flashcard engine |
| Phase 3 | Steps 7-9 | Daily learning, dashboard, progress |
| Phase 4 | Steps 10-11 | Grammar system |
| Phase 5 | Steps 12-13 | Notifications, PWA |
| Phase 6 | Steps 14-15 | Settings, polish |
| Phase 7 | Step 16 | Deployment & testing |

---

## 9. Success Criteria

- [ ] All ~700 A1 vocabulary words available as flashcards
- [ ] All 15 grammar topics with interactive flashcards
- [ ] Flashcards alternate DE→EN and EN→DE randomly
- [ ] 5-star self-rating system affects review scheduling
- [ ] Daily 100-word learning goal with progress tracking
- [ ] Streak counter tracks consecutive active days
- [ ] All progress persists in browser between sessions (IndexedDB)
- [ ] Daily motivational push notifications
- [ ] Installable as PWA (works offline)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Lighthouse PWA score 90+
- [ ] Deployed and accessible via public URL
