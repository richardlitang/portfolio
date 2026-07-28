<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import { roleMeta } from '$lib/content';

	/** @type {import('$lib/i18n').Dict['work']} */
	export let t;

	$: roles = roleMeta.map((meta, i) => ({ ...meta, ...t.roles[i] }));

	let current = roleMeta[0].company;
</script>

<Section id="work" class="on-dark" --bgColor="var(--pine)">
	<div class="work">
		<InView>
			<p class="eyebrow">{t.eyebrow}</p>
			<p class="section-title">{t.title}</p>
		</InView>
		<InView>
			<div class="tabs" role="tablist">
				{#each roles as { company }}
					<button
						role="tab"
						class="tab"
						class:selected={current === company}
						aria-selected={current === company}
						on:click={() => (current = company)}>{company}</button
					>
				{/each}
			</div>

			<!-- Every role is rendered so the full history is in the served HTML
			     (crawlers, link previews, no-JS). JS only decides which is shown. -->
			{#each roles as role}
				<div class="panel" class:is-active={current === role.company} class:is-solo={!role.image}>
					<div class="detail">
						<p class="panel-company">{role.company}</p>
						<p class="role-title">{role.title}</p>
						<p class="role-meta">{role.meta}</p>
						<ul>
							{#each role.tasks as task}
								<li>{task}</li>
							{/each}
						</ul>
					</div>

					{#if role.image}
						<a class="site-card" href={role.url} target="_blank" rel="noreferrer">
							<img src={role.image} alt={`${role.company} website`} loading="lazy" />
							<span class="caption">{role.domain} ↗</span>
						</a>
					{/if}
				</div>
			{/each}
		</InView>
	</div>
</Section>

<style>
	.work {
		color: var(--pine-ink);
	}

	.section-title {
		color: var(--pine-ink);
	}

	.tabs {
		display: flex;
		gap: 0.25rem;
		border-bottom: 1px solid var(--line-dark);
		margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
	}

	.tab {
		background: transparent;
		border: none;
		border-bottom: 2px solid transparent;
		border-radius: 0;
		color: var(--pine-ink-2);
		font-family: var(--font--mono);
		font-size: var(--font-sm);
		font-weight: 500;
		padding: 0.6rem 1rem;
		margin-bottom: -1px;
	}

	.tab:hover {
		background: transparent;
		color: var(--pine-ink);
		transform: none;
	}

	.tab.selected {
		color: var(--pine-ink);
		border-bottom-color: var(--amber);
	}

	.panel {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1.75rem, 4vw, 3.5rem);
		align-items: start;
	}

	/* With JS, the tabs pick one role. Without it, all roles stack and each
	   keeps its own company heading. */
	:global(html:not(.no-js)) .panel:not(.is-active) {
		display: none;
	}

	:global(html:not(.no-js)) .panel-company {
		display: none;
	}

	:global(html.no-js) .tabs {
		display: none;
	}

	.panel + .panel {
		margin-top: clamp(2.5rem, 5vw, 4rem);
	}

	.panel-company {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--amber);
		margin-bottom: 0.5rem;
	}

	.role-title {
		font-family: var(--font--display);
		font-weight: 600;
		font-size: var(--font-xl);
		line-height: 1.15;
	}

	.role-meta {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--pine-ink-2);
		margin: 0.4rem 0 1.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-flow: column;
		gap: 0.85rem;
	}

	li {
		position: relative;
		padding-left: 1.4rem;
		font-size: var(--font-sm);
		line-height: 1.65;
		color: var(--pine-ink);
	}

	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--amber);
		font-family: var(--font--mono);
		font-weight: 500;
	}

	.site-card {
		display: block;
		text-decoration: none;
		border: 1px solid var(--line-dark);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--pine-2);
		transition: transform 0.2s ease, border-color 0.2s ease;
	}

	.site-card:hover {
		transform: translateY(-3px);
		border-color: var(--amber);
	}

	.site-card img {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top center;
	}

	.caption {
		display: block;
		padding: 0.6rem 0.9rem;
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--pine-ink-2);
		border-top: 1px solid var(--line-dark);
	}

	.site-card:hover .caption {
		color: var(--amber);
	}

	@media (min-width: 900px) {
		.panel {
			grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		}
		/* Roles without a company screenshot run full width, but the text
		   still stops at a readable measure. */
		.panel.is-solo {
			grid-template-columns: minmax(0, 9fr);
		}
		.panel.is-solo .detail {
			max-width: 60em;
		}
		.site-card {
			position: sticky;
			top: 5rem;
		}
	}
</style>
