<script>
	import viewport from '../../lib/utils/useViewportAction';
	import typewriter from '$lib/utils/typewriter';

	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Socials from '$lib/components/Socials.svelte';

	$: showText = false;
	$: ready = false;

	onMount(() => (ready = true));
</script>

<section class="hero">
	<div class="hero-contents">
		<div class="hero-text" use:viewport on:enterViewport={() => (showText = true)}>
			<span class="hero-intro">Hi, it's</span>
			<span class="hero-name">Richard</span>
			<div class="hero-tagline">
				{#if showText}
					<p transition:typewriter={{ speed: 1 }}>I make ideas digital</p>
				{/if}
			</div>
		</div>
	</div>
	{#if ready}
		<ul class="hero-email" transition:slide={{ delay: 3500 }}>
			<li><a href="mailto:litang.richard@gmail.com">litang.richard @ gmail.com</a></li>
		</ul>
	{/if}
	{#if ready}
		<Socials />
	{/if}
</section>

<style>
	.hero {
		max-width: 100vw;
		min-height: 100vh;
		background: var(--bg_1);

		position: relative;
	}

	.hero-contents {
		position: relative;
		padding: 5vh 2vw;
		top: calc(50vh - var(--font-h1) * 4);
		margin: 0 auto;
		padding-bottom: 10rem;
		font-family: var(--font--title);
	}

	.hero-text {
		margin: 0 auto;
	}

	.hero-intro {
		margin: 0.5rem 0;
		font-size: var(--font-h4);
		justify-content: center;
	}

	.hero-name {
		font-family: var(--font--heading);
		margin: 0 auto;
		line-height: 1;
		font-size: 12.5vw;
		justify-content: center;
	}

	.hero-tagline {
		display: grid;
		place-items: center;
	}
	.hero-tagline p {
		text-align: center;
		font-size: var(--font-h4);
		line-height: 1.2;
		margin: 1rem auto;
		animation: blinking 4s 1;
	}

	.hero-email {
		display: flex;
		flex-flow: column;
		position: absolute;
		top: calc(1vw + 0.5rem);
		right: calc(1vw + 0.5rem);
		--size: calc(1vw + 1rem);
		gap: calc(var(--size) / 2);
		width: var(--size);
	}

	.hero-email a {
		writing-mode: vertical-rl;
		color: inherit;
		text-decoration: none;
		font-size: var(--font-sm);
	}

	.hero-email li::before {
		content: '';
		display: block;
		width: 1px;
		height: calc(var(--size) * 3);
		margin: 0 auto;
		margin-bottom: calc(var(--size) / 2);
		background-color: black;
	}

	@keyframes blinking {
		0% {
			border-right: transparent;
		}
		50% {
			border-right: 2px solid black;
		}
		100% {
			border-right: transparent;
		}
	}

	@media (min-width: 800px) {
		.hero-name {
			font-size: 10vw;
		}
	}

	@media (min-width: 768px) {
		.hero {
			padding: calc(10rem + var(--sk-nav-height)) var(--sk-page-padding-side) 16rem;
		}
		.hero-contents {
			max-width: calc(120rem - 2);
			padding-bottom: 0rem;
		}

		.hero-text {
			text-align: left;
		}
	}
</style>
