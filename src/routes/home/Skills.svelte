<script>
	import Section from '$lib/components/Section.svelte';
	import InView from '$lib/components/InView.svelte';

	const groups = [
		{ label: 'Languages', items: ['TypeScript', 'JavaScript', 'SQL', 'Python'] },
		{
			label: 'Frontend',
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
			label: 'Backend & Data',
			items: [
				'Node.js',
				'Express',
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
			label: 'AI Engineering',
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
		{ label: 'Cloud & Infra', items: ['AWS', 'Docker', 'Vercel', 'Inngest'] },
		{
			label: 'Testing & Observability',
			items: ['Jest', 'Vitest', 'Playwright', 'Checkly', 'Sentry', 'Datadog', 'PostHog']
		}
	];
</script>

<Section --padding="8rem" --bgColor="var(--bg_2)">
	<div class="skills">
		<InView>
			<p class="section-title">What I work with</p>
		</InView>
		{#each groups as { label, items }, i}
			<InView --delay={`${0.1 * i}s`}>
				<div class="group">
					<p class="group-label">{label}</p>
					<div class="chips">
						{#each items as item}
							<span class="chip">{item}</span>
						{/each}
					</div>
				</div>
			</InView>
		{/each}
	</div>
</Section>

<style>
	.skills {
		max-width: 48rem;
		margin: 0 auto;
		padding: 0.5rem 1rem;
	}

	.group {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--bg_3);
	}

	.group:last-child {
		border-bottom: none;
	}

	.group-label {
		font-family: var(--font--heading);
		font-size: var(--font-lg);
		color: var(--bg_0);
		line-height: 1.2;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.chip {
		display: inline-flex;
		font-size: var(--font-sm);
		padding: 0.35rem 0.85rem;
		border-radius: 2rem;
		background: var(--bg_1);
		color: var(--text_1);
		box-shadow: 2px 3px var(--bg_3);
		white-space: nowrap;
	}

	@media (min-width: 720px) {
		.group {
			grid-template-columns: 12rem 1fr;
			gap: 1.5rem;
			align-items: baseline;
		}
	}
</style>
