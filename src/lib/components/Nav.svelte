<script>
	import { locales, localePath } from '$lib/content';

	/** @type {import('$lib/i18n').Dict['nav']} */
	export let t;
	/** @type {import('$lib/content').Locale} */
	export let lang;
</script>

<nav>
	<div class="inner">
		<a class="brand" href={localePath[lang]}>richardlitang</a>
		<ul class="links">
			<li><a href="#about">{t.about}</a></li>
			<li><a href="#work">{t.work}</a></li>
			<li><a href="#builds">{t.builds}</a></li>
			<li><a href="#stack">{t.stack}</a></li>
			<li><a href="#contact">{t.contact}</a></li>
		</ul>
		<span class="status"><span class="dot" /> {t.status}</span>
		<ul class="langs" aria-label="Language">
			{#each locales as code}
				<li>
					<a
						href={localePath[code]}
						class:current={code === lang}
						hreflang={code}
						data-sveltekit-reload
						aria-current={code === lang ? 'true' : undefined}>{code}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--paper) 88%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--line);
	}

	.inner {
		max-width: var(--container);
		margin: 0 auto;
		height: var(--nav-h);
		padding: 0 clamp(1rem, 4vw, 2rem);
		display: flex;
		align-items: center;
		gap: 1.25rem;
		font-family: var(--font--mono);
		font-size: var(--font-xs);
	}

	a {
		color: var(--ink);
		text-decoration: none;
	}

	.brand {
		font-weight: 500;
		letter-spacing: 0.04em;
	}

	.links {
		display: none;
		list-style: none;
		margin: 0 auto;
		padding: 0;
		gap: 1.4rem;
	}

	.links a {
		color: var(--ink-2);
		transition: color 0.15s ease;
	}

	.links a:hover {
		color: var(--ink);
	}

	.status {
		display: none;
		align-items: center;
		gap: 0.45rem;
		color: var(--ink-2);
		white-space: nowrap;
	}

	.dot {
		width: 0.5em;
		height: 0.5em;
		border-radius: 50%;
		background: var(--amber);
		animation: pulse 2.4s ease-in-out infinite;
	}

	.langs {
		display: flex;
		list-style: none;
		margin: 0 0 0 auto;
		padding: 0;
		gap: 0.5rem;
		text-transform: uppercase;
	}

	.langs a {
		color: var(--ink-2);
		padding: 0.15rem 0.1rem;
		transition: color 0.15s ease;
	}

	.langs a:hover {
		color: var(--ink);
	}

	.langs a.current {
		color: var(--ink);
		border-bottom: 1px solid var(--amber);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.35;
		}
	}

	@media (min-width: 720px) {
		.links {
			display: flex;
		}
		.status {
			display: flex;
			margin-left: auto;
		}
		.langs {
			margin-left: 0;
			padding-left: 1.25rem;
			border-left: 1px solid var(--line);
		}
	}
</style>
