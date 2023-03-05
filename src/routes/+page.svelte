<script>
	// import Features from './home/Features.svelte';
	import Hero from './home/Hero.svelte';
	import Showcase from './home/Showcase.svelte';
	// // import Try from './home/Try.svelte';
	// import Deployment from './home/Deployment.svelte';
	// // import Svelte from './home/Svelte.svelte';
	import About from './home/About.svelte';
	import Work from './home/Work.svelte';
	import Skills from './home/Skills.svelte';
	import './home/common.css';
</script>

<svelte:head>
	<title>Richard • Web Developer</title>

	<meta name="twitter:title" content="Richard" />
	<meta name="twitter:description" content="Web developer" />
	<meta name="description" content="Richard is the official Svelte application framework" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Richard • Web development, streamlined" />
	<meta property="og:description" content="Richard is the official Svelte application framework" />
	<meta property="og:url" content="https://litang.dev/" />
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg"
	/>
	<!-- 
	{#if schema}
		{@html schema}
	{/if} -->
</svelte:head>

<div class="home">
	<Hero />
	<About />
	<Work />
	<Skills />
	<!-- <Showcase /> -->
	<footer>
		<p>
			This portfolio is <a
				target="_blank"
				rel="noreferrer"
				href="https://github.com/heisenberglar/portfolio">free and open source.</a
			>
		</p>
	</footer>
</div>

<style>
	footer {
		margin: 2rem auto;
		padding: 1em var(--sk-page-padding-side);
		text-align: center;
		background: var(--sk-back-2);
	}

	footer p {
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
