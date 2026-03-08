---
name: review-pr
description: Review a pull request for DeutschMeister code quality and correctness
argument-hint: "<pr-number>"
allowed-tools:
  - Bash
  - Read
  - Grep
  - Glob
---

# Review Pull Request

Review a pull request for code quality, type safety, and adherence to project conventions.

## Instructions

1. Fetch PR details: `gh pr view $ARGUMENTS --json title,body,additions,deletions,changedFiles`
2. Get the diff: `gh pr diff $ARGUMENTS`
3. Review the changes against project conventions:
   - TypeScript strict mode — no `any` types
   - Functional components only, proper hook usage
   - Tailwind CSS 4 utility classes (no deprecated v3 patterns)
   - Correct data ID sequencing (v### for vocab, g### for grammar)
   - Proper `VocabWord` / `GrammarCard` interface compliance
   - Correct import paths
4. Check for common issues:
   - Missing `gender` or `plural` on noun entries
   - Incorrect `topicId` references in grammar cards
   - Missing tutorial registrations in `tutorials/index.ts`
   - Broken imports or type errors
   - Accessibility issues (missing ARIA labels)
5. Run validation for both apps:
   - `cd deutschmeister && npm run lint && npm run build`
   - `cd romanianmeister && npm run lint && npm run build`
6. Post the review using `gh pr review $ARGUMENTS` with appropriate verdict:
   - `--approve` if all checks pass
   - `--request-changes` if issues are found
   - Include specific file:line references for each finding
