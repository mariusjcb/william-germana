---
name: deploy
description: Build the app and trigger deployment to GitHub Pages
allowed-tools:
  - Bash
  - Read
---

# Build and Deploy

Build both language apps and trigger GitHub Pages deployment.

## Instructions

1. Lint and build DeutschMeister:
   - `cd deutschmeister && npm run lint` — report any linting issues
   - `npm run build` — report the build output
2. Lint and build RomanMeister:
   - `cd romanianmeister && npm run lint` — report any linting issues
   - `npm run build` — report the build output
3. Verify the landing page exists: `ls landing/index.html landing/favicon.svg`
4. If any step fails, report errors and stop
5. If all builds succeed:
   - Stage and commit changes with a descriptive message
   - Push to the current branch to trigger the GitHub Actions deploy workflow
6. Report the deployment status:
   - Landing page URL: `https://<username>.github.io/william-germana/`
   - DeutschMeister URL: `https://<username>.github.io/william-germana/deutschmeister/`
   - RomanMeister URL: `https://<username>.github.io/william-germana/romanianmeister/`
   - Check status: `gh run list --workflow=deploy.yml --limit 3`
