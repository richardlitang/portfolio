<script>
	// import Features from './home/Features.svelte';
	import Hero from './home/Hero.svelte';
	import Projects from './home/Projects.svelte';
	// // import Try from './home/Try.svelte';
	// import Deployment from './home/Deployment.svelte';
	// // import Svelte from './home/Svelte.svelte';
	import About from './home/About.svelte';
	import Work from './home/Work.svelte';
	import Skills from './home/Skills.svelte';
	import './home/common.css';
	import Contact from './home/Contact.svelte';
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
	<Projects />
	<Skills />
	<Contact />
</div>

<style>
	.home {
		background-color: var(--bg_0);
		border-bottom-left-radius: 2rem;
		border-bottom-right-radius: 2rem;
	}
</style>
