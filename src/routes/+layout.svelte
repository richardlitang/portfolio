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

	slot {
		background-color: blue;
	}
	footer {
		text-align: center;
		font-size: var(--font-md);
		display: block;
		padding: 2rem 1rem;
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

		.large {
			display: inline;
		}

		.separator {
			display: flex;
			align-items: center;
			justify-content: center;
			background: none;
			height: 100%;
			margin: 0;
			border: none;
			text-align: center;
		}

		.separator::before {
			content: '•';
			margin: 0 0.3rem;
			color: #ccc;
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

	li {
		display: flex;
		align-items: center;
	}

	/* :global(.examples-container, .repl-outer, .tutorial-outer) {
		height: calc(100vh - var(--sk-nav-height)) !important;
	}

	:global(.toggle) {
		bottom: 0 !important;
	} */

	@media (max-width: 830px) {
		:global(aside) {
			z-index: 9999 !important;
		}
	}
</style>
