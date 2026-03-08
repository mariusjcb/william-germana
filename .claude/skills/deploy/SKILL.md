---
name: deploy
description: Build the app and trigger deployment to GitHub Pages
allowed-tools:
  - Bash
  - Read
---

# Build and Deploy

Build the DeutschMeister app and trigger GitHub Pages deployment.

## Instructions

1. Change to the `deutschmeister/` directory
2. Run `npm run lint` — report any linting issues
3. Run `npm run build` (runs `tsc -b && vite build`) — report the build output
4. If either step fails, report errors and stop
5. If build succeeds:
   - Stage and commit changes with a descriptive message
   - Push to the current branch to trigger the GitHub Actions deploy workflow
6. Report the deployment status:
   - GitHub Pages URL: `https://<username>.github.io/william-germana/`
   - Check status: `gh run list --workflow=deploy.yml --limit 3`
