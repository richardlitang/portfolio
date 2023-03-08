<script>
	import pudding from './projects/pudding.png';
	import pocketbase from './projects/pocketbase.png';
	import pronauns from './projects/pronauns.png';
	import pausly from './projects/pausly.png';
	import asmeditor from './projects/asmeditor.png';
	import monogram from './projects/monogram.png';
	import raster from './projects/raster.png';
	import tradingstrategy from './projects/tradingstrategy.png';
	import Section from '$lib/components/Section.svelte';

	const projects = [
		{
			url: 'pudding.cool',
			image: pudding,
			title: 'ResourcePortal',
			description: 'Nosce te ipsum dorma dow dada samada te amo tejada'
		},
		{
			url: 'www.pronauns.com',
			image: pronauns,
			title: 'ResourcePortal',
			description: 'Nosce te ipsum dorma dow dada samada te amo tejada'
		},
		{
			url: 'www.pausly.app',
			image: pausly,
			title: 'ResourcePortal',
			description: 'Nosce te ipsum dorma dow dada samada te amo tejada'
		},
		{
			url: 'asm-editor.specy.app',
			image: asmeditor,
			title: 'ResourcePortal',
			description: 'Nosce te ipsum dorma dow dada samada te amo tejada'
		}
	];
	const doubledProjects = [...projects, ...projects];
</script>

<Section --bgColor="var(--bg_1)" --padding="8rem">
	<p class="projects-title">Projects I've made</p>
	<div class="projects-contents">
		{#each doubledProjects as { url, image, title, description }}
			<div class="projects-entry">
				<a href="https://{url}" target="_blank" rel="noreferrer">
					<img src={image} alt="" />
				</a>
				<!-- <p>{title}</p>
				<p>{description}</p> -->
			</div>
		{/each}
	</div>
</Section>

<style>
	.projects-contents {
		--max-size: 12rem;
		--gap: calc(1.5vw + 1rem);
		gap: var(--gap);
		display: flex;
		text-align: center;
		animation: move-card 20s linear infinite;
		display: flex;
	}

	.projects-contents:hover {
		animation-play-state: paused;
	}

	@keyframes move-card {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc((var(--max-size) + var(--gap)) * -4));
		}
	}

	.projects-title {
		text-align: center;
		line-height: 2;
		font-size: var(--font-h2);
		font-family: var(--font--heading);
		margin-bottom: 4rem;
	}

	a {
		overflow: hidden;
		display: flex;
		overflow: hidden;
		aspect-ratio: 16/9;
		border-radius: var(--font-md);
		box-shadow: 4px 6px var(--bg_2);
		max-width: var(--max-size);
		max-height: var(--max-size);
		animation-play-state: paused;
	}

	span {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0;
		top: 0;
		/* background: rgba(0, 0, 0, 0.25); */
		color: white;
		/* backdrop-filter: blur(3px); */
		opacity: 0;
		/* transition: opacity 0.2s; */
		font-size: var(--sk-text-s);
		/* filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5)); */
	}

	a:hover span {
		max-width: 5%;
	}

	a:hover :global(img) {
		transform: scale(1.05);
	}

	@media (min-width: 400px) {
		.projects-contents {
			--max-size: 25rem;
		}
	}
</style>
