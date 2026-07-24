# Portfolio Revamp Plan — Staff-Level Positioning

**Goal:** Refresh `litang.dev` (this SvelteKit site) so it reads like a staff-level software engineer's portfolio, while targeting senior roles. Scope is the **portfolio site only** — the résumé PDF is a content source, not a deliverable.

**Locked decisions**

- Project section: **rich cards** (screenshot + one-liner + stack chips + 2–3 architecture/impact bullets + repo/live links, inline).
- THPAL power-plant role: **condensed to one line** (reliability framing), not a full tab.
- Design: **evolve the current serif/cream look** — keep the DNA, tighten hierarchy, add card structure + chips.

**Keep as-is:** serif display + cream palette, single-page scroll, `InView` reveal animations, `Socials`, `Section` primitive.

---

## Reference: what staff/senior portfolios do

One-page, project-first; 3–5 projects with problem→approach→impact and **real metrics**; skimmable; GitHub + live links; architecture/depth signals. Sources: [sitebuilderreport](https://www.sitebuilderreport.com/inspiration/software-engineer-portfolios), [opendoorscareers case-study guide](https://blog.opendoorscareers.com/p/how-to-write-a-strong-case-study-for-your-portfolio-in-2025-a14b).

---

## Section-by-section changes

### 1. Hero (`src/routes/home/Hero.svelte`)

- Replace tagline **"I make ideas digital"** → confident staff line, e.g. _"Full-stack engineer building AI-grounded products end to end."_
- Add location line: **Liège, Belgium**.
- Fix email everywhere: **`richardjasonlitang@gmail.com`** (currently `litang.richard@gmail.com`).
- Keep serif look, name treatment, typewriter (optional: tighten).

### 2. About (`src/routes/home/About.svelte`) — rewrite

Draft:

> I'm a full-stack engineer who ships production features end to end — from zero-to-one builds to 10x performance work. Most recently at BuildPass (construction SaaS) and before that Dashlabs.ai (YC W21 healthtech), I've owned modules across the stack and shipped real AI features that hold up in production, not demos. I care about systems that stay reliable under load and interfaces that make complex workflows feel simple.
>
> I started in a different control room: three years running a 24/7 power plant with a zero-shutdown record. That reliability mindset — real-time incident response, root-cause discipline — is how I approach software.

Removes deferential "had the privilege of working with a startup" framing.

### 3. Experience (`src/routes/home/Work.svelte`)

Add **BuildPass as the default/first tab**. Add title + dates + location per role. Impact-led bullets (from résumé):

**BuildPass — Software Engineer — Melbourne, AU (Remote) — Oct 2024 – Feb 2026**

- Led "Lighthouse," a delivery stream for urgent customer requests and market-localized workflows; shipped the workflow, dashboard, and config changes behind the US market launch.
- Built AI-assisted product workflows across template generation, document analysis, scheduling, and action suggestions.
- Delivered the subcontractor Plant & Equipment module (registers, checklist linking, multi-step review), enabling hundreds of construction companies to self-manage equipment.
- Drove the Photos Uplift: moved heavy exports to async background jobs; rebuilt UX with drag-and-drop folders, annotations, threads, and metadata stamping.
- Improved reliability/perf: optimized React forms, tuned GraphQL queries/caching, replaced server-fetched translations with build-time bundling, extended Sentry coverage, and eliminated cascading retry loops.
- 200+ shipped fixes/features; onboarded engineers and pair-programmed to unblock peers; won the company hackathon (AI bulk-import prototype, hours→minutes).

**Dashlabs.ai (YC W21) — Full Stack Engineer — Manila, PH (Remote) — Mar 2022 – Sep 2024**

- Owned EHR/EMR modules: result entry, patient intake, patient portal, B2B client portals; contributed to result certificates, appointments, POS, auth.
- Built a patient queue management system zero-to-one, cutting wait times and unlocking a new B2B revenue stream.
- Cut backend load with caching, background job queues, and MongoDB schema/index tuning — enabling a DB tier downgrade that cut infra cost.
- Migrated search to MongoDB Atlas Search, improving relevance and scalability.
- Refactored core APIs for high-volume lab workflows, improving throughput up to **10x** at peak.

**THPAL (condensed, one line, e.g. below tabs or as a muted footnote):**

> Earlier: 3 years as a power-plant shift supervisor — led a 24/7 operations team to a zero-shutdown record. Where the reliability and root-cause habits started.

### 4. Selected Work (`src/routes/home/Projects.svelte`) — replace carousel with rich cards

Swap the auto-scrolling toy carousel for a scannable card grid. Five projects:

**Support Copilot** — RAG support-investigation workspace
`Next.js · TypeScript · OpenAI/Anthropic · pgvector · RAG`

- Real dense retrieval + literal candidate expansion + optional reranking over uploaded docs.
- Deterministic routing (docs-only / docs+context / human-review) with claim-level citations.
- Encodes AI fallibility as a first-class `needs_human_review` state; ships with ADRs, threat model, and a verify gate.

**Scriptorium** — local-first video studio
`TypeScript · MCP · Zod · Remotion · CLI`

- Multi-surface system: Studio web app + CLI + **MCP server** + provider adapters + shared domain schemas.
- AI turns a story into a structured production plan; local narration + Remotion render.
- Full quality gate (`pnpm verify`) + deterministic portfolio proof.

**ChurnAdapter** — churn modeling with an LLM-bounded schema layer
`Python · XGBoost · SHAP · LLM`

- LLM used **only** at the semantic boundary (arbitrary table → feature contract); prediction stays classical ML.
- Per-dataset gradient-boosted models with SHAP explanations and a reserved validation sample.
- Ingests structurally different customer tables without hand-written column mappings.

**StackHunt** — programmatic SEO + autonomous research agent
`Astro · React · Tailwind · Supabase/pgvector · Gemini · Serper`

- "Hunter Agent" autonomously researches tools, analyzes reviews, and publishes comparison pages.
- Semantic search via pgvector; invisible Turnstile; Vercel.

**Bound** — commitment tool for ADHD (Chrome extension)
`TypeScript · Chrome MV3 · Vite`

- New-tab surface shows the single task you're "bound" to, turning the drift moment into a refocus.
- Capture-to-"Next up" flow for fast planning.

Card component: image + title + one-liner + chip row + bullets + links (GitHub / live).

### 5. Skills (`src/routes/home/Skills.svelte`) — regroup by domain, drop "Amateur"

Remove the Professional/**Amateur** tiering. Group (matches résumé; drop WordPress/Strapi/Go which aren't on the résumé):

- **Languages:** TypeScript, JavaScript, SQL, Python
- **Frontend:** React, Next.js, React Native/Expo, Svelte, Tailwind, shadcn/ui, MUI, Ant Design
- **Backend & Data:** Node.js, Express, GraphQL, REST, PostgreSQL, MongoDB, Prisma, Redis, Supabase, pgvector
- **AI Engineering:** OpenAI, Anthropic, Vercel AI SDK, RAG, embeddings, LLM evals, Promptfoo, MCP
- **Cloud & Infra:** AWS, Docker, Vercel, Inngest
- **Testing & Observability:** Jest, Vitest, Playwright, Checkly, Sentry, Datadog, PostHog

> Implementation note: the current logo grid only has ~16 SVGs and lacks Python/AI/observability logos. Simplest path that matches "evolve the look" is **grouped text chips** instead of hunting 20+ logos. Decide during build.

### 6. Contact + meta (`Contact.svelte`, `+page.svelte`)

- Fix email → `richardjasonlitang@gmail.com`.
- `<title>` → **"Richard Litang • Software Engineer"**; update OG/twitter description (drop "Web developer").
- Add location; optional **résumé download** link (drop `Software.pdf` into `/static`).

---

## Implementation sequence

1. **Content/data pass:** Work (add BuildPass, rewrite, condense THPAL), Projects (5-card data model + component), Skills (regroup), About, Hero, Contact, meta.
2. **Media pass:** reuse Scriptorium (`docs/media/studio-screenshot.png`) and ChurnAdapter (`docs/images/*.png`); **capture screenshots for Support Copilot, StackHunt, Bound** (run each locally).
3. **Design polish:** card hierarchy + chips, tighten type scale/spacing, verify serif/cream still coheres.
4. **Verify:** `npm run check`, `npm run lint`, `npm run build`, plus a visual pass in the browser.

## Open items to confirm before/while building

- **Live links + repo URLs:** which of the 5 are public on GitHub and which have live deploys? (GitHub handle appears as both `heisenberglar` and `richardlitang`.) Cards need working links.
- **Screenshots:** OK to run Support Copilot / StackHunt / Bound locally to capture images? Any need env keys?
- **Résumé download:** include a PDF download link on the site?
