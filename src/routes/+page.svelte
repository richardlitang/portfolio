<script>
	import Hero from './home/Hero.svelte';
	import Projects from './home/Projects.svelte';
	import About from './home/About.svelte';
	import Work from './home/Work.svelte';
	import Skills from './home/Skills.svelte';
	import Contact from './home/Contact.svelte';
</script>

<svelte:head>
	<title>Richard Litang • Software Engineer</title>

	<meta name="twitter:title" content="Richard Litang • Software Engineer" />
	<meta
		name="twitter:description"
		content="Full-stack engineer building AI-grounded products end to end."
	/>
	<meta
		name="description"
		content="Richard Litang — full-stack software engineer building AI-grounded products end to end."
	/>

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Richard Litang • Software Engineer" />
	<meta
		property="og:description"
		content="Full-stack engineer building AI-grounded products end to end."
	/>
	<meta property="og:url" content="https://richardlitang.github.io/" />
	<meta property="og:image" content="https://richardlitang.github.io/og.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://richardlitang.github.io/og.png" />
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
		background-color: var(--paper);
	}
</style>
