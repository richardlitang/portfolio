<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import { flagshipMeta, moreMeta } from '$lib/content';

	/** @type {import('$lib/i18n').Dict['projects']} */
	export let t;

	$: flagships = flagshipMeta.map((meta, i) => ({ ...meta, ...t.flagships[i] }));
	$: more = moreMeta.map((meta, i) => ({ ...meta, ...t.more[i] }));
</script>

<Section id="builds">
	<InView>
		<p class="eyebrow">{t.eyebrow}</p>
		<p class="section-title">{t.title}</p>
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
								{#if live}<a href={live} target="_blank" rel="noreferrer">{t.live} ↗</a>{/if}
								{#if repo}<a href={repo} target="_blank" rel="noreferrer">{t.code} ↗</a>{/if}
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
		<p class="more-label">{t.moreLabel}</p>
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
								{#if live}<a href={live} target="_blank" rel="noreferrer">{t.live} ↗</a>{/if}
								{#if repo}<a href={repo} target="_blank" rel="noreferrer">{t.code} ↗</a>{/if}
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
