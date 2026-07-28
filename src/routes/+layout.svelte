<script>
	import '@fontsource/bricolage-grotesque/600.css';
	import '@fontsource/bricolage-grotesque/700.css';
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/500.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Nav from '$lib/components/Nav.svelte';
	import { social, localeFromPath } from '$lib/content';
	import { dicts } from '$lib/i18n';

	$: lang = localeFromPath($page.url.pathname);
	$: t = dicts[lang];

	// Locale links force a full load, but keep the attribute honest for any
	// client-side navigation that still reaches here.
	$: if (browser) document.documentElement.lang = lang;
</script>

<Nav t={t.nav} {lang} />
<main id="main">
	<slot />
	<footer>
		<p>
			{t.footer.built}
			<a target="_blank" rel="noreferrer" href={social.repo}>{t.footer.openSource}</a>.
		</p>
	</footer>
</main>

<style>
	main {
		margin: 0 auto;
		overflow: hidden;
		background-color: var(--paper);
	}

	footer {
		text-align: center;
		color: var(--pine-ink-2);
		background: var(--pine);
		padding: 1.25rem 1rem 1.5rem;
	}

	footer p {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		margin: 0 auto;
	}

	footer p a {
		color: inherit;
		text-decoration: underline;
	}
</style>
