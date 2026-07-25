<script>
	import '@fontsource/bricolage-grotesque/600.css';
	import '@fontsource/bricolage-grotesque/700.css';
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/500.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<main id="main">
	<slot />
	<footer>
		<p>
			Built by Richard Litang. It's free and
			<a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/richardlitang/richardlitang.github.io">open source</a
			>.
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
