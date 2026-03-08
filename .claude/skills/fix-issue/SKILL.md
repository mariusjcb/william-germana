---
name: fix-issue
description: Investigate and fix a GitHub issue
argument-hint: "<issue-number>"
allowed-tools:
  - Bash
  - Read
  - Edit
  - Grep
  - Glob
---

# Fix GitHub Issue

Investigate, diagnose, and fix a GitHub issue.

## Instructions

1. Fetch issue details: `gh issue view $ARGUMENTS --json title,body,labels`
2. Analyze the issue description to identify:
   - Affected components and files
   - Steps to reproduce (if a bug)
   - Expected vs. actual behavior
3. Search the codebase for relevant code using Grep and Glob
4. Diagnose the root cause
5. Implement the fix following project conventions:
   - TypeScript strict, no `any`
   - Functional components, hooks for logic
   - Tailwind CSS 4 for styling
6. Validate the fix:
   - `npm run lint` from `deutschmeister/`
   - `npm run build` from `deutschmeister/`
7. Create a descriptive commit referencing the issue: `Fix #N: <description>`
8. Suggest creating a PR: `gh pr create --title "Fix #N: <short description>" --body "Closes #N\n\n<explanation>"`
