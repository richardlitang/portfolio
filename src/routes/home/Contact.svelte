<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import { social } from '$lib/content';

	/** @type {import('$lib/i18n').Dict['contact']} */
	export let t;
</script>

<Section id="contact" class="on-dark" --bgColor="var(--pine)">
	<div class="contact">
		<InView>
			<p class="eyebrow">{t.eyebrow}</p>
			<p class="section-title">{t.title}</p>
			<p class="sub">{t.sub}</p>
			<div class="actions">
				<a class="cta" href="mailto:{social.email}">{t.cta}</a>
				<a class="alt" href={social.github} target="_blank" rel="noreferrer">github ↗</a>
				<a class="alt" href={social.linkedin} target="_blank" rel="noreferrer">linkedin ↗</a>
			</div>
		</InView>
	</div>
</Section>

<style>
	.contact {
		color: var(--pine-ink);
		text-align: left;
		max-width: 44rem;
	}

	.section-title {
		color: var(--pine-ink);
		margin-bottom: 1rem;
	}

	.sub {
		font-size: var(--font-md);
		color: var(--pine-ink-2);
		line-height: 1.7;
		max-width: 36em;
		margin-bottom: 2.25rem;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		background: var(--amber);
		color: var(--ink);
		font-family: var(--font--body);
		font-weight: 500;
		font-size: var(--font-sm);
		padding: 0.8rem 1.6rem;
		border-radius: var(--radius-sm);
		text-decoration: none;
		transition: transform 0.15s ease;
	}

	.cta:hover {
		transform: translateY(-2px);
	}

	.alt {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--pine-ink);
		text-decoration: none;
		border-bottom: 1px solid var(--amber);
		padding-bottom: 1px;
	}

	.alt:hover {
		color: var(--amber);
	}
</style>
