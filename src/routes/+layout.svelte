<script>
	import '@fontsource/italiana';
	import '@fontsource/cormorant';
	import '@fontsource/poppins';
	import '@fontsource/raleway';
</script>

<main id="main">
	<nav>
		<p class="logo">rj</p>
	</nav>
	<slot />
	<footer>
		<p>
			This portfolio is <a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/heisenberglar/portfolio">free and open source.</a
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

	p {
		font-family: var(--font--heading);
		font-size: var(--font-lg);
		line-height: 1;
	}

	nav {
		background-color: var(--bg_1);
	}

	.logo {
		padding: calc(1vw + 0.25rem) calc(2vw + 1rem);
		z-index: -5;
	}

	footer {
		text-align: center;
		font-size: var(--font-md);
		display: block;
		padding: 2rem 1rem;
		color: var(--bg_2);
	}

	footer p {
		max-width: 20em;
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

	.small {
		display: inline;
	}

	.large {
		display: none;
	}

	/* duplicating content from <Nav> — bit hacky but will do for now */
	.separator {
		display: block;
		position: relative;
		height: 1px;
		margin: 0.5rem 0;
		background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
	}

	@media (min-width: 800px) {
		.small {
			display: none;
		}
	}

	@media (min-width: 960px) {
		/* this is an unfortunate hack, but necessary to temporarily avoid
		breaking changes to site-kit */
		:global(ul.external) {
			width: 30rem !important;
		}
	}

	:global(body) {
		font-size: 1.6rem !important;
	}
</style>
