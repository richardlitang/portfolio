<script>
	import Section from '$lib/components/Section.svelte';
	import InView from '$lib/components/InView.svelte';

	const groups = [
		{ label: 'languages', items: ['TypeScript', 'JavaScript', 'SQL', 'Python'] },
		{
			label: 'frontend',
			items: [
				'React',
				'Next.js',
				'React Native / Expo',
				'Svelte',
				'Tailwind CSS',
				'shadcn/ui',
				'MUI',
				'Ant Design'
			]
		},
		{
			label: 'backend & data',
			items: [
				'Node.js',
				'Express',
				'FastAPI',
				'GraphQL',
				'REST',
				'PostgreSQL',
				'MongoDB',
				'Prisma',
				'Redis',
				'Supabase',
				'pgvector'
			]
		},
		{
			label: 'ai engineering',
			items: [
				'OpenAI',
				'Anthropic',
				'Vercel AI SDK',
				'RAG',
				'Embeddings',
				'LLM evals',
				'Promptfoo',
				'MCP'
			]
		},
		{ label: 'cloud & infra', items: ['AWS', 'Docker', 'Vercel', 'Inngest'] },
		{
			label: 'testing & observability',
			items: ['Jest', 'Vitest', 'Playwright', 'Checkly', 'Sentry', 'Datadog', 'PostHog']
		}
	];
</script>

<Section id="stack" --bgColor="var(--paper-2)">
	<div class="stack">
		<InView>
			<p class="eyebrow">stack</p>
			<p class="section-title">Working set.</p>
		</InView>
		<div class="sheet">
			{#each groups as { label, items }, i}
				<InView --delay={`${0.06 * i}s`}>
					<div class="spec">
						<p class="spec-label">{label}</p>
						<p class="spec-items">{items.join(' · ')}</p>
					</div>
				</InView>
			{/each}
		</div>
	</div>
</Section>

<style>
	.stack {
		max-width: 56rem;
	}

	.sheet {
		display: flex;
		flex-flow: column;
	}

	.spec {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.35rem 2rem;
		padding: 1.1rem 0;
		border-top: 1px solid var(--line);
	}

	.spec-label {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--ink-2);
		padding-top: 0.2em;
	}

	.spec-items {
		font-size: var(--font-sm);
		line-height: 1.8;
		color: var(--ink);
	}

	@media (min-width: 720px) {
		.spec {
			grid-template-columns: 14rem 1fr;
		}
	}
</style>
