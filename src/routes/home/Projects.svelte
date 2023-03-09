<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';

	import asmeditor from './projects/asmeditor.png';
	import pausly from './projects/pausly.png';
	import pronauns from './projects/pronauns.png';
	import pudding from './projects/pudding.png';

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

<Section --bgColor="var(--bg_3)" --padding="8rem">
	<InView>
		<p class="section-title">Projects I've made</p>
	</InView>
	<InView --delay="2s">
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
	</InView>
</Section>

<style>
	.projects-contents {
		--max-size: 12rem;
		--gap: calc(1.5vw + 1rem);
		gap: var(--gap);

		margin: calc(var(--gap) * 2);
		display: flex;
		text-align: center;
		display: flex;
		animation: move-card 20s linear infinite;
	}

	.section-title {
		color: var(--bg_0);
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

	a {
		overflow: hidden;
		display: flex;
		overflow: hidden;
		aspect-ratio: 16/9;
		border-radius: var(--font-md);
		box-shadow: 4px 6px var(--bg_2);
		max-width: var(--max-size);
		max-height: var(--max-size);
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
