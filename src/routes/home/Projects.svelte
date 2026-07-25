<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';

	import support from './projects/support.png';
	import scriptorium from './projects/scriptorium.png';
	import churn from './projects/churn.png';
	import stackhunt from './projects/stackhunt.png';
	import bound from './projects/bound.png';

	const flagships = [
		{
			title: 'ChurnAdapter',
			image: churn,
			blurb:
				'Trains a churn model on any customer table — and keeps the LLM out of the prediction.',
			highlights: [
				'The LLM works only at the semantic boundary, mapping arbitrary columns onto a standard feature contract.',
				'Prediction stays classical ML: XGBoost per dataset, SHAP explanations, held-out validation.',
				'One pipeline ingests structurally different tables with zero hand-written column mappings.'
			],
			tags: ['Python', 'FastAPI', 'XGBoost', 'SHAP', 'LLM'],
			repo: 'https://github.com/richardlitang/churn-adapter',
			live: null
		},
		{
			title: 'Scriptorium',
			image: scriptorium,
			blurb: 'A local-first video studio: story in, narrated and rendered video out.',
			highlights: [
				'Multi-surface system — Studio web app, CLI, MCP server, provider adapters, shared Zod schemas.',
				'AI turns a story into a structured production plan; narration runs locally, Remotion renders.',
				'Guarded by a full quality gate and a deterministic portfolio proof.'
			],
			tags: ['TypeScript', 'MCP', 'Zod', 'Remotion', 'CLI'],
			repo: 'https://github.com/richardlitang/scriptorium-video',
			live: null
		}
	];

	const more = [
		{
			title: 'Support Copilot',
			image: support,
			oneliner: 'Support investigations where every claim is cited — or routed to a human.',
			highlights: [
				'A real RAG pipeline over uploaded docs: dense retrieval, literal candidate expansion, optional reranking.',
				'Deterministic routing between docs-only, docs-plus-context, and human-review modes.',
				'AI fallibility is a first-class needs_human_review state; ships with ADRs, a threat model, and a verify gate.'
			],
			tags: ['Next.js', 'TypeScript', 'RAG', 'pgvector'],
			repo: 'https://github.com/richardlitang/support-copilot',
			live: null
		},
		{
			title: 'StackHunt',
			image: stackhunt,
			oneliner: 'A programmatic-SEO site researched and published by an agent.',
			highlights: [
				'A "Hunter Agent" autonomously researches tools, analyzes reviews, and publishes structured comparisons.',
				'Semantic search over the catalog via pgvector; invisible Turnstile for bot protection.'
			],
			tags: ['Astro', 'React', 'Supabase', 'Gemini'],
			repo: 'https://github.com/richardlitang/stackhunt',
			live: 'https://stackhunt.io'
		},
		{
			title: 'Bound',
			image: bound,
			imgPos: 'center left',
			oneliner: 'A Chrome extension that binds every new tab to one commitment.',
			highlights: [
				'Every new tab shows the single task you are bound to, turning the drift moment into a refocus.',
				'A capture-to-"Next up" flow keeps planning fast without breaking the current commitment.'
			],
			tags: ['TypeScript', 'Chrome MV3', 'Vite'],
			repo: null,
			live: null
		}
	];
</script>

<Section id="builds">
	<InView>
		<p class="eyebrow">selected builds</p>
		<p class="section-title">Built to prove a point.</p>
	</InView>

	<div class="flagships">
		{#each flagships as { title, image, blurb, highlights, tags, repo, live }, i}
			<InView --delay={`${0.12 * i}s`}>
				<article class="card">
					<a class="media" href={repo ?? live} target="_blank" rel="noreferrer" tabindex="-1">
						<img src={image} alt={`${title} screenshot`} loading="lazy" />
					</a>
					<div class="body">
						<div class="head">
							<h3>{title}</h3>
							<div class="links">
								{#if live}<a href={live} target="_blank" rel="noreferrer">live ↗</a>{/if}
								{#if repo}<a href={repo} target="_blank" rel="noreferrer">code ↗</a>{/if}
							</div>
						</div>
						<p class="blurb">{blurb}</p>
						<ul>
							{#each highlights as point}
								<li>{point}</li>
							{/each}
						</ul>
						<p class="tags">{tags.join(' · ')}</p>
					</div>
				</article>
			</InView>
		{/each}
	</div>

	<InView>
		<p class="more-label">more builds</p>
	</InView>
	<div class="rows">
		{#each more as { title, image, imgPos, oneliner, highlights, tags, repo, live }, i}
			<InView --delay={`${0.08 * i}s`}>
				<details class="row">
					<summary>
						<img
							class="thumb"
							src={image}
							alt=""
							loading="lazy"
							style={imgPos ? `object-position: ${imgPos}` : ''}
						/>
						<span class="row-head">
							<span class="row-title">{title}</span>
							<span class="row-oneliner">{oneliner}</span>
						</span>
						<span class="chevron" aria-hidden="true">+</span>
					</summary>
					<div class="row-body">
						<ul>
							{#each highlights as point}
								<li>{point}</li>
							{/each}
						</ul>
						<p class="row-foot">
							<span class="tags">{tags.join(' · ')}</span>
							<span class="links">
								{#if live}<a href={live} target="_blank" rel="noreferrer">live ↗</a>{/if}
								{#if repo}<a href={repo} target="_blank" rel="noreferrer">code ↗</a>{/if}
							</span>
						</p>
					</div>
				</details>
			</InView>
		{/each}
	</div>
</Section>

<style>
	.flagships {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1.25rem, 3vw, 2rem);
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}

	.card {
		display: flex;
		flex-flow: column;
		height: 100%;
		overflow: hidden;
		background: color-mix(in srgb, var(--paper) 45%, white);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		transition: transform 0.2s ease, border-color 0.2s ease;
	}

	.card:hover {
		transform: translateY(-3px);
		border-color: var(--pine);
	}

	.media {
		display: block;
		border-bottom: 1px solid var(--line);
	}

	.media img {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top center;
	}

	.body {
		display: flex;
		flex-flow: column;
		flex: 1;
		padding: clamp(1.25rem, 2.5vw, 1.9rem);
	}

	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.6rem;
	}

	h3 {
		font-family: var(--font--display);
		font-weight: 600;
		font-size: var(--font-xl);
		letter-spacing: -0.01em;
		line-height: 1.1;
	}

	.links {
		display: flex;
		gap: 0.9rem;
		flex-shrink: 0;
	}

	.links a {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--ink);
		text-decoration: none;
		border-bottom: 1px solid var(--amber);
		padding-bottom: 1px;
		white-space: nowrap;
	}

	.links a:hover {
		color: var(--amber);
	}

	.blurb {
		font-size: var(--font-md);
		line-height: 1.55;
		margin-bottom: 1.1rem;
		max-width: 32em;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0 0 1.4rem;
		display: flex;
		flex-flow: column;
		gap: 0.55rem;
		flex: 1;
	}

	li {
		position: relative;
		padding-left: 1.3rem;
		font-size: var(--font-sm);
		line-height: 1.6;
		color: var(--ink-2);
	}

	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--amber);
		font-family: var(--font--mono);
		font-weight: 500;
	}

	.tags {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--ink-2);
		margin-top: auto;
	}

	/* ── collapsible rows ── */

	.more-label {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--ink-2);
		margin-bottom: 0.9rem;
	}

	.rows {
		display: flex;
		flex-flow: column;
	}

	.row {
		border-top: 1px solid var(--line);
	}

	.row:last-child {
		border-bottom: 1px solid var(--line);
	}

	summary {
		display: flex;
		align-items: center;
		gap: clamp(0.9rem, 2vw, 1.4rem);
		padding: 1rem 0.25rem;
		cursor: pointer;
		list-style: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary:hover .row-title {
		color: var(--pine);
	}

	.thumb {
		width: clamp(3.5rem, 8vw, 5.5rem);
		aspect-ratio: 16 / 11;
		object-fit: cover;
		object-position: top center;
		border-radius: var(--radius-sm);
		border: 1px solid var(--line);
		flex-shrink: 0;
	}

	.row-head {
		display: flex;
		flex-flow: column;
		gap: 0.15rem;
		min-width: 0;
	}

	.row-title {
		font-family: var(--font--display);
		font-weight: 600;
		font-size: var(--font-lg);
		line-height: 1.2;
	}

	.row-oneliner {
		font-size: var(--font-sm);
		color: var(--ink-2);
		line-height: 1.5;
	}

	.chevron {
		margin-left: auto;
		font-family: var(--font--mono);
		font-size: var(--font-lg);
		color: var(--amber);
		transition: transform 0.2s ease;
		flex-shrink: 0;
	}

	.row[open] .chevron {
		transform: rotate(45deg);
	}

	.row-body {
		padding: 0 0.25rem 1.4rem;
	}

	.row-body ul {
		margin-bottom: 1rem;
	}

	.row-foot {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	@media (min-width: 820px) {
		.flagships {
			grid-template-columns: 1fr 1fr;
		}
		.row-body {
			padding-left: calc(clamp(3.5rem, 8vw, 5.5rem) + clamp(0.9rem, 2vw, 1.4rem));
		}
	}
</style>
