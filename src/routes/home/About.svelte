<script>
	// import Section from '@sveltejs/site-kit/components/Section.svelte';
	import profile from '$lib/components/images/profile.jpg';
	import viewport from '../../lib/utils/useViewportAction';
	import Section from '$lib/components/Section.svelte';

	import { fade } from 'svelte/transition';

	$: showParagraphs = false;
</script>

<Section --padding="6rem">
	<div class="flex">
		<div class="flex-item" use:viewport on:enterViewport={() => (showParagraphs = true)}>
			{#if showParagraphs}
				<p>
					For a year now, I've been a part of a startup that aims to simplify healthcare. Being part
					of the patient management team, I worked on our registration forms, ... I also built the
					prototype for our queue management system.
				</p>
				<p>
					Before becoming a developer, I was an engineer in a power plant. I learned how to solve
					problems of varying complexities, work under pressure, and communicate effectively with
					people from different backgrounds and across multiple channels.
				</p>
			{/if}
		</div>
	</div>
</Section>

<style>
	.flex {
		margin: 4rem auto;
		display: flex;
		flex-flow: column;
	}

	.flex-item {
		margin: 0 auto;
		max-width: 80vw;
	}

	.flex-item p {
		opacity: 0;
		font-size: var(--font-md);
		transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
		margin-bottom: var(--font-lg);
		animation: 3s lineUp ease-out forwards;
	}

	@keyframes lineUp {
		0% {
			opacity: 0;
			transform: translateY(80%);
		}
		20% {
			opacity: 0;
		}
		50% {
			opacity: 1;
			transform: translateY(0%);
		}
		100% {
			opacity: 1;
			transform: translateY(0%);
		}
	}
	p:nth-child(2) {
		animation-delay: 1s;
	}

	img {
		max-width: 20rem;
	}

	@media (min-width: 400px) {
		img {
			max-width: 8rem;
			position: absolute;
			right: 0;
		}

		.flex-item {
			max-width: 25em;
		}
	}

	@media (min-width: 680px) {
		img {
			max-width: 20rem;
			position: relative;
		}
	}
</style>
