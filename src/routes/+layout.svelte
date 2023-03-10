<script>
	import '@fontsource/italiana';
	import '@fontsource/cormorant';
	import '@fontsource/poppins';
	import '@fontsource/raleway';
</script>

<main id="main">
	<slot />
	<footer>
		<p>
			Built by Richard Litang. It's free and
			<a target="_blank" rel="noreferrer" href="https://github.com/heisenberglar/portfolio"
				>open source.</a
			>
		</p>
	</footer>
</main>

<style>
	main {
		margin: 0 auto;
		overflow: hidden;
		background-color: var(--bg_1);
	}

	footer {
		text-align: center;
		color: var(--bg_2);
		padding: 1rem;
	}

	footer p {
		font-family: var(--font--heading);
		font-size: var(--font-sm);
		max-width: 20em;
		margin: 0 auto;
	}

	footer p a {
		color: inherit;
		text-decoration: underline;
	}

	@media (min-width: 680px) {
		footer p {
			max-width: none;
		}
	}
</style>
