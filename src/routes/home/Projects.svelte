<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import github from '$lib/icons/github.svg';
	import arrowright from '$lib/icons/arrowright.svg';

	import support from './projects/support.png';
	import scriptorium from './projects/scriptorium.png';
	import churn from './projects/churn.png';
	import stackhunt from './projects/stackhunt.png';
	import bound from './projects/bound.png';

	const projects = [
		{
			title: 'Support Copilot',
			image: support,
			blurb:
				'A support-investigation workspace that shows its retrieval and grounding instead of hiding it behind a chat box.',
			tags: ['Next.js', 'TypeScript', 'RAG', 'pgvector', 'OpenAI / Anthropic'],
			highlights: [
				'Real dense retrieval with literal candidate expansion and optional reranking over uploaded docs.',
				'Deterministic routing between docs-only, docs-plus-context, and human-review, with claim-level citations.',
				'Treats AI fallibility as a first-class needs_human_review state; ships with ADRs, a threat model, and a verify gate.'
			],
			repo: 'https://github.com/richardlitang/support-copilot',
			live: null
		},
		{
			title: 'ChurnAdapter',
			image: churn,
			blurb:
				'A churn-modeling pipeline that ingests any customer table and keeps the LLM out of the actual prediction.',
			tags: ['Python', 'FastAPI', 'XGBoost', 'SHAP', 'LLM'],
			highlights: [
				'The LLM is used only at the semantic boundary — mapping an arbitrary table onto a standard feature contract.',
				'Prediction stays classical ML: a gradient-boosted model trained per dataset, with SHAP explanations.',
				'Ingests structurally different tables with no hand-written column mappings, validated on a held-out sample.'
			],
			repo: 'https://github.com/richardlitang/churn-adapter',
			live: null
		},
		{
			title: 'StackHunt',
			image: stackhunt,
			blurb:
				'A programmatic-SEO platform with an agent that researches software alternatives and publishes comparison pages.',
			tags: ['Astro', 'React', 'Supabase / pgvector', 'Gemini', 'Serper'],
			highlights: [
				'A "Hunter Agent" autonomously researches tools, analyzes reviews, and publishes structured comparisons.',
				'Semantic search over the catalog via pgvector; invisible Turnstile for bot protection.'
			],
			repo: 'https://github.com/richardlitang/stackhunt',
			live: 'https://stackhunt.io'
		},
		{
			title: 'Scriptorium',
			image: scriptorium,
			blurb:
				'A local-first video studio for planning, narrating, and rendering videos from structured project data.',
			tags: ['TypeScript', 'MCP', 'Zod', 'Remotion', 'CLI'],
			highlights: [
				'Multi-surface system: a Studio web app, a CLI, an MCP server, provider adapters, and shared domain schemas.',
				'AI turns a story into a structured production plan; narration runs locally and renders through Remotion.',
				'Guarded by a full quality gate (pnpm verify) and a deterministic portfolio proof.'
			],
			repo: 'https://github.com/richardlitang/scriptorium-video',
			live: null
		},
		{
			title: 'Bound',
			image: bound,
			blurb:
				'A commitment tool for ADHD brains, built as a Chrome extension — not another to-do list.',
			tags: ['TypeScript', 'Chrome MV3', 'Vite'],
			highlights: [
				'Every new tab shows the single task you are bound to, turning the drift moment into a refocus.',
				'A capture-to-"Next up" flow keeps planning fast without breaking the current commitment.'
			],
			repo: null,
			live: null
		}
	];
</script>

<Section --bgColor="var(--bg_3)" --padding="8rem">
	<InView>
		<p class="section-title">Selected work</p>
	</InView>
	<div class="projects-grid">
		{#each projects as { title, image, blurb, tags, highlights, repo, live }, i}
			<InView --delay={`${0.15 * i}s`}>
				<article class="card">
					<div class="card-media">
						<img src={image} alt={`${title} screenshot`} loading="lazy" />
					</div>
					<div class="card-body">
						<div class="card-head">
							<h3>{title}</h3>
							<div class="card-links">
								{#if live}
									<a href={live} target="_blank" rel="noreferrer" class="live">
										Live <img src={arrowright} alt="" />
									</a>
								{/if}
								{#if repo}
									<a href={repo} target="_blank" rel="noreferrer" aria-label={`${title} on GitHub`}>
										<img src={github} alt="" />
									</a>
								{/if}
							</div>
						</div>
						<p class="card-blurb">{blurb}</p>
						<ul class="card-highlights">
							{#each highlights as point}
								<li>{point}</li>
							{/each}
						</ul>
						<div class="card-tags">
							{#each tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>
				</article>
			</InView>
		{/each}
	</div>
</Section>

<style>
	.section-title {
		color: var(--bg_0);
		margin-bottom: 3rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: calc(1vw + 1.25rem);
		max-width: 68rem;
		margin: 0 auto;
	}

	.card {
		display: flex;
		flex-flow: column;
		height: 100%;
		overflow: hidden;
		background: var(--bg_1);
		color: var(--text_1);
		border-radius: calc(0.5vw + 0.5rem);
		box-shadow: 4px 6px var(--bg_2);
	}

	.card-media {
		aspect-ratio: 16 / 10;
		overflow: hidden;
		background: var(--bg_2);
		border-bottom: 1px solid var(--bg_2);
	}

	.card-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
	}

	.card-body {
		display: flex;
		flex-flow: column;
		flex: 1;
		padding: calc(1vw + 1.5rem);
	}

	.card-head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.card-head h3 {
		font-family: var(--font--heading);
		font-size: var(--font-h4);
		line-height: 1.1;
	}

	.card-links {
		display: flex;
		align-items: center;
		gap: 0.9rem;
		flex-shrink: 0;
	}

	.card-links a {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		color: inherit;
		text-decoration: none;
		font-size: var(--font-sm);
	}

	.card-links img {
		width: var(--font-md);
		height: var(--font-md);
		object-fit: contain;
	}

	.card-links a:hover {
		opacity: 0.7;
	}

	.card-links .live img {
		width: var(--font-sm);
		height: var(--font-sm);
	}

	.card-blurb {
		font-size: var(--font-md);
		line-height: 1.6;
		margin-bottom: 1.25rem;
	}

	.card-highlights {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
		display: flex;
		flex-flow: column;
		gap: 0.6rem;
		flex: 1;
	}

	.card-highlights li {
		position: relative;
		padding-left: 1.25rem;
		font-size: var(--font-sm);
		line-height: 1.55;
	}

	.card-highlights li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5em;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		background: var(--primary);
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	.tag {
		display: inline-flex;
		font-size: var(--font-xs);
		padding: 0.3rem 0.7rem;
		border-radius: 2rem;
		background: var(--bg_0);
		color: var(--text_2);
		white-space: nowrap;
	}

	@media (min-width: 720px) {
		.projects-grid {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
