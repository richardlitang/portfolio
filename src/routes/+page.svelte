<script>
	import Hero from './home/Hero.svelte';
	import Projects from './home/Projects.svelte';
	import About from './home/About.svelte';
	import Work from './home/Work.svelte';
	import Skills from './home/Skills.svelte';
	import Contact from './home/Contact.svelte';
</script>

<svelte:head>
	<title>Richard • Web Developer</title>

	<meta name="twitter:title" content="Richard Litang" />
	<meta name="twitter:description" content="Web developer" />
	<meta name="description" content="Richard Litang's portfolio" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Richard • Web development" />
	<meta property="og:description" content="Richard Litang's portfolio" />
	<meta property="og:url" content="https://litang.dev/" />
	<meta property="og:image" />
</svelte:head>

<div class="home">
	<Hero />
	<About />
	<div class="textured">
		<Work />
	</div>
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

	.textured {
		background-image: radial-gradient(black 0.5px, transparent 0px);
		background-size: 30px 30px;
		background-position: 0 0, 15px 15px;
	}
</style>
