<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';

	import earth from './projects/earth.jpg';
	import portfolio from './projects/portfolio.png';
	import taskjar from './projects/taskjar.png';
	import resource from './projects/resource.png';

	const projects = [
		{
			url: 'https://heisenberglar.github.io/task-jar/',
			image: taskjar,
			title: 'TaskJar',
			description: 'A to-do list with a twist made with React'
		},
		{
			url: 'https://litang.dev',
			image: portfolio,
			title: 'Portfolio',
			description: 'Personal website made with Svelte'
		},
		{
			url: 'https://github.com/heisenberglar/one-earth-api',
			image: earth,
			title: 'One Earth API',
			description: 'API using Go, Postgresql, and Docker'
		},
		{
			url: 'https://github.com/heisenberglar/resource-web',
			image: resource,
			title: 'ResourcePortal',
			description: 'Full stack app to share the best learning resources'
		}
	];

	const doubledProjects = [...projects, ...projects];
</script>

<Section --bgColor="var(--bg_3)" --padding="8rem">
	<InView>
		<p class="section-title">Projects I've made</p>
	</InView>
	<InView --delay="1s">
		<div class="projects-contents">
			{#each doubledProjects as { url, image, title, description }}
				<div class="projects-entry">
					<a href={url} target="_blank" rel="noreferrer">
						<img src={image} alt={title} />\
						<span>
							<p class="projects-title">{title}</p>
							<p>{description}</p>
						</span>
					</a>
				</div>
			{/each}
		</div>
	</InView>
</Section>

<style>
	.projects-contents {
		--max-size: 20rem;
		--gap: calc(1.5vw + 1rem);
		gap: var(--gap);

		margin: calc(var(--gap) * 2);
		display: flex;
		text-align: center;
		display: flex;
		animation: move-card 15s linear infinite;
	}

	.section-title {
		color: var(--bg_0);
		margin-bottom: 3rem;
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
		position: relative;
		aspect-ratio: 16 / 9;
		border-radius: var(--font-md);
		box-shadow: 4px 6px var(--bg_2);
		max-width: var(--max-size);
		max-height: var(--max-size);
		font-size: var(--font-md);
	}

	a img {
		scale: 1.01;
	}

	span {
		position: absolute;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: white;
		backdrop-filter: blur(2px) brightness(30%);
		opacity: 0;
	}

	span p {
		max-width: 80%;
	}
	a:hover span {
		opacity: 1;
	}

	@media (min-width: 400px) {
		.projects-contents {
			--max-size: 25rem;
			animation: move-card 20s linear infinite;
		}
	}
</style>
