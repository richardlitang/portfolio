<script>
	import typewriter from '$lib/utils/typewriter';
	import { social } from '$lib/content';

	/** @type {import('$lib/i18n').Dict['hero']} */
	export let t;
</script>

<section class="hero">
	<div class="inner">
		<div class="hero-main">
			<p class="eyebrow">{t.eyebrow}</p>
			<h1>Richard Litang<span class="mark">.</span></h1>
			<p class="log js-typewriter" use:typewriter>{t.log}</p>
		</div>

		<dl class="strip">
			<div class="readout">
				<dt>{t.statusLabel}</dt>
				<dd>{t.statusValue}</dd>
			</div>
			<div class="readout">
				<dt>{t.focusLabel}</dt>
				<dd>{t.focusValue}</dd>
			</div>
			<div class="readout">
				<dt>{t.linksLabel}</dt>
				<dd>
					<a href={social.github} target="_blank" rel="noreferrer">{t.github}</a>
					<span class="sep">/</span>
					<a href={social.linkedin} target="_blank" rel="noreferrer">{t.linkedin}</a>
					<span class="sep">/</span>
					<a href="mailto:{social.email}">{t.email}</a>
				</dd>
			</div>
		</dl>
	</div>
</section>

<style>
	.hero {
		/* nav = --nav-h + 1px border */
		min-height: calc(100vh - var(--nav-h) - 1px);
		min-height: calc(100svh - var(--nav-h) - 1px);
		display: flex;
	}

	.inner {
		max-width: var(--container);
		width: 100%;
		margin: 0 auto;
		padding: 0 clamp(1rem, 4vw, 2rem);
		display: flex;
		flex-flow: column;
	}

	.hero-main {
		margin: auto 0;
		padding-top: clamp(3rem, 8vh, 6rem);
	}

	h1 {
		font-family: var(--font--display);
		font-weight: 700;
		font-size: var(--font-h1);
		letter-spacing: -0.03em;
		line-height: 0.98;
		margin: 0 0 1.4rem;
	}

	.mark {
		color: var(--amber);
	}

	.log {
		font-family: var(--font--mono);
		font-size: var(--font-lg);
		color: var(--ink-2);
		max-width: 34em;
		min-height: 1.6em;
		line-height: 1.5;
	}

	.log::before {
		content: '> ';
		color: var(--amber);
	}

	.log::after {
		content: '▍';
		color: var(--amber);
		animation: blink 1.1s steps(1) infinite;
	}

	/* JS present: hold the line invisible until the typewriter starts. */
	:global(html:not(.no-js)) .js-typewriter {
		visibility: hidden;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}

	.strip {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem 2.5rem;
		border-top: 1px solid var(--line);
		margin: 0 0 clamp(1.5rem, 4vh, 3rem);
		padding-top: 1.25rem;
		font-family: var(--font--mono);
		font-size: var(--font-xs);
	}

	.readout {
		display: flex;
		flex-flow: column;
		gap: 0.3rem;
	}

	dt {
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--ink-2);
	}

	dd {
		margin: 0;
		font-size: var(--font-sm);
		color: var(--ink);
	}

	dd a {
		color: var(--ink);
		text-decoration: none;
		border-bottom: 1px solid var(--amber);
		padding-bottom: 1px;
	}

	dd a:hover {
		color: var(--amber);
	}

	.sep {
		color: var(--ink-2);
		margin: 0 0.35rem;
	}

	@media (min-width: 720px) {
		.strip {
			grid-template-columns: repeat(3, auto);
			justify-content: start;
			gap: 1rem 4.5rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.log::after {
			animation: none;
		}
	}
</style>
