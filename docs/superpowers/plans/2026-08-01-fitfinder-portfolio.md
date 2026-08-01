# FitFinder Portfolio Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved FitFinder screenshot and localized project entry to the portfolio’s existing “more builds” list.

**Architecture:** Reuse the current data-driven SvelteKit project model. Add one image asset and one metadata object in `src/lib/content.ts`, then add matching prose objects at the same array index in the English, French, and Dutch locale dictionaries. `src/routes/home/Projects.svelte` remains unchanged.

**Tech Stack:** SvelteKit, Svelte 3, TypeScript, PNG image asset, Prettier, ESLint, svelte-check, Vite.

## Global Constraints

- Add FitFinder to the existing “more builds” list, not the flagship grid.
- Use the provided screenshot as the project thumbnail.
- Describe only behavior visible in the screenshot; do not invent a public URL, repository, or implementation stack.
- Keep the entry available in English, French, and Dutch.
- Preserve the current project data model and visual treatment.
- Do not add live/code links until they are provided.
- Do not create a dedicated case-study route or add dependencies.

---

### Task 1: Add the FitFinder screenshot asset

**Files:**

- Create: `src/routes/home/projects/fitfinder.png`

**Interfaces:**

- Produces: the image imported by `src/lib/content.ts` and rendered by the existing project-row component.

- [ ] **Step 1: Copy the approved Desktop screenshot into the project asset directory**

```bash
cp "/Users/richardlitang/Desktop/Screenshot 2026-07-31 at 3.06.54 PM.png" src/routes/home/projects/fitfinder.png
```

- [ ] **Step 2: Verify the copied asset is the expected PNG**

Run: `file src/routes/home/projects/fitfinder.png`

Expected: PNG image data, 2936 x 1574, 8-bit/color RGBA.

- [ ] **Step 3: Commit the asset**

```bash
git add src/routes/home/projects/fitfinder.png
git commit -m "feat(portfolio): add FitFinder project screenshot" -m "Use the approved rental-intelligence screenshot as the portfolio thumbnail." -m "Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

### Task 2: Add FitFinder to the shared project metadata

**Files:**

- Modify: `src/lib/content.ts`

**Interfaces:**

- Consumes: `src/routes/home/projects/fitfinder.png` from Task 1.
- Produces: a `moreMeta` entry with the same `{ title, image, imgPos, tags, repo, live }` shape consumed by `src/routes/home/Projects.svelte`.

- [ ] **Step 1: Import the new image beside the existing project imports**

Add:

```ts
import fitfinder from '../routes/home/projects/fitfinder.png';
```

- [ ] **Step 2: Insert FitFinder before Support Copilot in `moreMeta`**

Add this object as the first item in `moreMeta`:

```ts
{
	title: 'FitFinder',
	image: fitfinder,
	imgPos: null,
	tags: ['Rental intelligence', 'Search workflows', 'Evidence review'],
	repo: null,
	live: null
},
```

- [ ] **Step 3: Confirm the existing project metadata remains unchanged**

Run: `git diff -- src/lib/content.ts`

Expected: one new import and one new object; existing Support Copilot, StackHunt, and Bound metadata is unchanged.

### Task 3: Add localized FitFinder copy

**Files:**

- Modify: `src/lib/i18n/en.ts`
- Modify: `src/lib/i18n/fr.ts`
- Modify: `src/lib/i18n/nl.ts`

**Interfaces:**

- Consumes: the first `moreMeta` entry added in Task 2.
- Produces: the first `projects.more` translation object in each locale, preserving the index-based merge in `src/routes/home/Projects.svelte`.

- [ ] **Step 1: Add the English object as the first item in `projects.more`**

```ts
{
	oneliner: 'Rental intelligence for finding homes with fewer surprises.',
	highlights: [
		'Translates a natural-language search brief into a structured rental search.',
		'Ranks listings and exposes the evidence behind strong, possible, confirmed, and rejected outcomes.',
		'Keeps saved homes local to the browser by default.'
	]
},
```

- [ ] **Step 2: Add the French object as the first item in `projects.more`**

```ts
{
	oneliner: 'Une intelligence locative pour trouver un logement avec moins de mauvaises surprises.',
	highlights: [
		'Convertit une demande de recherche en langage naturel en recherche locative structurée.',
		'Classe les annonces et expose les éléments justifiant les résultats forts, possibles, confirmés ou rejetés.',
		'Conserve les logements sauvegardés localement dans le navigateur par défaut.'
	]
},
```

- [ ] **Step 3: Add the Dutch object as the first item in `projects.more`**

```ts
{
	oneliner: 'Huurintelligentie om woningen te vinden met minder verrassingen.',
	highlights: [
		'Zet een zoekopdracht in natuurlijke taal om in een gestructureerde zoektocht naar huurwoningen.',
		'Rangschikt woningen en toont het bewijs achter sterke, mogelijke, bevestigde en afgewezen resultaten.',
		'Bewaart opgeslagen woningen standaard lokaal in de browser.'
	]
},
```

- [ ] **Step 4: Verify all locale arrays stay aligned**

Run: `rg -n "FitFinder|Rental intelligence|intelligence locative|Huurintelligentie" src/lib/content.ts src/lib/i18n`

Expected: one `FitFinder` metadata title and one matching translated object in each locale; no locale has a missing or extra `projects.more` item.

- [ ] **Step 5: Commit the metadata and copy**

```bash
git add src/lib/content.ts src/lib/i18n/en.ts src/lib/i18n/fr.ts src/lib/i18n/nl.ts
git commit -m "feat(portfolio): add FitFinder project entry" -m "Expose the screenshot-backed rental intelligence project across all locales." -m "Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"
```

### Task 4: Run the portfolio verification gate

**Files:**

- Read: `package.json` scripts and generated build output.

**Interfaces:**

- Consumes: the complete FitFinder asset, metadata, and locale changes from Tasks 1–3.
- Produces: verified type safety, formatting/lint status, and production build output.

- [ ] **Step 1: Run Svelte and TypeScript checks**

Run: `npm run check`

Expected: command exits 0 with no new diagnostics.

- [ ] **Step 2: Run formatting and lint checks**

Run: `npm run lint`

Expected: command exits 0.

- [ ] **Step 3: Run the production build**

Run: `npm run build`

Expected: command exits 0 and produces the static SvelteKit build.

- [ ] **Step 4: Inspect the final diff and repository state**

Run: `git status --short --branch && git log -3 --oneline`

Expected: the working tree is clean, the two implementation commits are present, and no generated artifacts are staged unexpectedly.
