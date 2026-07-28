<script>
	import Hero from '../routes/home/Hero.svelte';
	import About from '../routes/home/About.svelte';
	import Work from '../routes/home/Work.svelte';
	import Projects from '../routes/home/Projects.svelte';
	import Skills from '../routes/home/Skills.svelte';
	import Contact from '../routes/home/Contact.svelte';
	import { locales, localePath, siteUrl } from './content';

	/** @type {import('./i18n').Dict} */
	export let t;
	/** @type {import('./content').Locale} */
	export let lang;

	$: canonical = siteUrl + localePath[lang];
</script>

<svelte:head>
	<title>{t.meta.title}</title>

	<meta name="description" content={t.meta.description} />
	<link rel="canonical" href={canonical} />

	{#each locales as code}
		<link rel="alternate" hreflang={code} href={siteUrl + localePath[code]} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={siteUrl + localePath.en} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.ogDescription} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={lang} />
	<meta property="og:image" content="{siteUrl}/og.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={t.meta.title} />
	<meta name="twitter:description" content={t.meta.ogDescription} />
	<meta name="twitter:image" content="{siteUrl}/og.png" />
</svelte:head>

<div class="home">
	<Hero t={t.hero} />
	<About t={t.about} />
	<Work t={t.work} />
	<Projects t={t.projects} />
	<Skills t={t.skills} />
	<Contact t={t.contact} />
</div>

<style>
	.home {
		background-color: var(--paper);
	}
</style>
