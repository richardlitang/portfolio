<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';

	/** @type {import('$lib/i18n').Dict['about']} */
	export let t;
</script>

<Section id="about" --bgColor="var(--paper-2)">
	<div class="about">
		<InView>
			<p class="eyebrow">{t.eyebrow}</p>
			<p class="section-title">{t.title}</p>
		</InView>
		<div class="copy">
			{#each t.paragraphs as paragraph, i}
				<InView --delay={`${0.15 * i}s`}>
					<p>{paragraph}</p>
				</InView>
			{/each}
		</div>
	</div>
</Section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem clamp(2rem, 6vw, 5rem);
	}

	.section-title {
		max-width: 14em;
	}

	.copy {
		max-width: 38em;
	}

	.copy p {
		line-height: 1.75;
		font-size: var(--font-md);
		margin-bottom: 1.4rem;
	}

	@media (min-width: 900px) {
		.about {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		}
	}
</style>
