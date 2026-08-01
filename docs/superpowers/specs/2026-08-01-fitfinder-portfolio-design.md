# FitFinder Portfolio Entry Design

## Status

Approved design for implementation.

## Context

The portfolio is a SvelteKit single-page site. Projects are split between a two-card flagship grid and a data-driven “more builds” list. The new FitFinder material is a Desktop screenshot showing a rental-intelligence workflow: a free-form search brief, ranked shortlist, evidence-backed listing verdicts, and browser-local saved homes.

## Goals

- Add FitFinder as a new entry in the existing “more builds” list.
- Use the provided screenshot as the project thumbnail.
- Describe only behavior visible in the screenshot; do not invent a public URL, repository, or implementation stack.
- Keep the entry available in all existing locales: English, French, and Dutch.
- Preserve the current project data model and visual treatment.

## Non-goals

- Do not promote FitFinder into the flagship grid.
- Do not create a dedicated case-study route.
- Do not add live/code links until they are provided.
- Do not claim specific libraries or frameworks based only on the screenshot.

## Design and copy

FitFinder will appear before the existing “Support Copilot” row so the newest addition is encountered first. The English copy will position it as “Rental intelligence for finding homes with fewer surprises.” Its supporting points will cover:

1. Translating a natural-language search brief into a structured rental search.
2. Ranking listings and exposing the evidence behind strong, possible, confirmed, and rejected outcomes.
3. Keeping saved homes local to the browser by default.

The tags will describe the product domain rather than unverified implementation details: `Rental intelligence`, `Search workflows`, and `Evidence review`. French and Dutch copy will preserve the same claims and structure.

## Implementation

1. Copy `/Users/richardlitang/Desktop/Screenshot 2026-07-31 at 3.06.54 PM.png` to `src/routes/home/projects/fitfinder.png`.
2. Import the image in `src/lib/content.ts` and add one `moreMeta` object with the FitFinder title, screenshot, tags, and null links.
3. Add the matching `more` translation object at the same array position in `src/lib/i18n/en.ts`, `src/lib/i18n/fr.ts`, and `src/lib/i18n/nl.ts`.
4. Leave `Projects.svelte` unchanged because it already renders the shared data shape and handles entries without links.

## Accessibility and responsive behavior

The existing project row remains the interaction surface. The screenshot thumbnail continues to use the existing decorative empty alt text, while the visible FitFinder title and description provide the accessible project label. Existing responsive sizing, disclosure behavior, and reduced-motion behavior remain unchanged.

## Verification

- `npm run check`
- `npm run lint`
- `npm run build`
- Confirm the new image is tracked and all three locale data arrays contain the new FitFinder entry.

