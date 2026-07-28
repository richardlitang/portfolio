<script>
	import Section from '$lib/components/Section.svelte';
	import InView from '$lib/components/InView.svelte';
	import { skillItems } from '$lib/content';

	/** @type {import('$lib/i18n').Dict['skills']} */
	export let t;
</script>

<Section id="stack" --bgColor="var(--paper-2)">
	<div class="stack">
		<InView>
			<p class="eyebrow">{t.eyebrow}</p>
			<p class="section-title">{t.title}</p>
		</InView>
		<div class="sheet">
			{#each t.labels as label, i}
				<InView --delay={`${0.06 * i}s`}>
					<div class="spec">
						<p class="spec-label">{label}</p>
						<p class="spec-items">{skillItems[i].join(' · ')}</p>
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
