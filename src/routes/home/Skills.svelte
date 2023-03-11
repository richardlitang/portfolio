<script>
	import typescript from './logos/typescript.svg';
	import graphql from './logos/graphql.svg';
	import react from './logos/react.svg';
	import mongodb from './logos/mongodb.svg';
	import nextjs from './logos/nextjs.svg';
	import docker from './logos/docker.svg';
	import jest from './logos/jest.svg';
	import material from './logos/material.svg';
	import svelte from './logos/svelte.svg';
	import node from './logos/node.svg';
	import go from './logos/go.svg';
	import git from './logos/git.svg';
	import strapi from './logos/strapi.svg';
	import wordpress from './logos/wordpress.svg';
	import postgres from './logos/postgres.svg';
	import javascript from './logos/javascript.svg';

	import Section from '$lib/components/Section.svelte';
	import InView from '$lib/components/InView.svelte';
</script>

<Section --padding="8rem" --bgColor="var(--bg_2)">
	<div class="skills" style="--columns: 3">
		<InView>
			<p class="section-title">Technologies I've learned</p>
		</InView>
		<InView>
			<p class="skills-level">Professional</p>
			<div class="skills-professional">
				<a rel="noreferrer" href="https://www.typescriptlang.org/">
					<img src={typescript} alt="Typescript logo" />
					<span class="skills-name">TypeScript</span>
				</a>
				<a rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
					<img src={javascript} alt="Javascript logo" />
					<span class="skills-name">JavaScript</span>
				</a>
				<a rel="noreferrer" href="https://reactjs.org/">
					<img src={react} alt="React logo" />
					<span class="skills-name">React</span>
				</a>
				<a rel="noreferrer" href="https://nextjs.org/">
					<img src={nextjs} alt="Next.js logo" />
					<span class="skills-name">Next.js</span>
				</a>
				<a rel="noreferrer" href="https://mui.com/">
					<img src={material} alt="MUI logo" />
					<span class="skills-name">MaterialUI</span>
				</a>
				<a rel="noreferrer" href="https://graphql.org/">
					<img src={graphql} alt="GraphQL logo" />
					<span class="skills-name">GraphQL</span>
				</a>
				<a rel="noreferrer" href="https://nodejs.org/en/">
					<img src={node} alt="Nodejs logo" />
					<span class="skills-name">Node.js</span>
				</a>
				<a rel="noreferrer" href="https://www.mongodb.com/">
					<img src={mongodb} alt="MongoDB logo" />
					<span class="skills-name">MongoDB</span>
				</a>
			</div>
		</InView>
		<InView>
			<p class="skills-level">Amateur</p>
			<div class="skills-professional">
				<a rel="noreferrer" href="https://jestjs.io/">
					<img src={jest} alt="Jest logo" />
					<span class="skills-name">Jest</span>
				</a>
				<a rel="noreferrer" href="https://www.docker.com/">
					<img src={docker} alt="Docker logo" />
					<span class="skills-name">Docker</span>
				</a>
				<a rel="noreferrer" href="https://svelte.dev/">
					<img src={svelte} alt="Svelte logo" />
					<span class="skills-name">Svelte</span>
				</a>
				<a rel="noreferrer" href="https://go.dev/">
					<img src={go} alt="Go logo" />
					<span class="skills-name">Go</span>
				</a>
				<a rel="noreferrer" href="https://git-scm.com/">
					<img src={git} alt="Git logo" />
					<span class="skills-name">Git</span>
				</a>
				<a rel="noreferrer" href="https://www.postgresql.org/">
					<img src={postgres} alt="Postgres logo" />
					<span class="skills-name">PostgreSQL</span>
				</a>
				<a rel="noreferrer" href="https://wordpress.org/">
					<img src={wordpress} alt="WordPress logo" />
					<span class="skills-name">WordPress</span>
				</a>
				<a rel="noreferrer" href="https://strapi.io/">
					<img src={strapi} alt="Strapi logo" />
					<span class="skills-name">Strapi</span>
				</a>
			</div>
		</InView>
	</div>
</Section>

<style>
	.skills {
		height: 100%;
		max-width: 40rem;
		margin: 0 auto;
		padding: 0.5rem 1rem;
	}

	.skills-level {
		text-align: center;
		font-size: var(--font-h4);
		font-family: var(--font--heading);
		margin: var(--spacer-lg) auto;
		margin-top: var(--spacer-xl);
	}

	.skills div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: calc(1vw + 0.75rem);
	}

	.skills a {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: inherit;
		text-decoration: none;
		background-color: var(--bg_1);

		--size: calc(1.5vw + 1.85rem);
		width: var(--size);

		padding: calc(var(--size) / 3) calc(var(--size) / 1.5);
		border-radius: calc(var(--size) / 3);
		box-shadow: 2px 6px var(--bg_3);
		gap: 0.5rem;
	}

	.skills a:hover {
		scale: 1.1;
	}

	.skills a span {
		font-size: var(--font-sm);
		text-align: center;
	}

	.skills img {
		padding-bottom: 0.25rem;
		width: var(--size);
		height: var(--size);
		object-fit: contain;
	}

	.skills img:hover {
		scale: 1.2;
	}

	@media (min-width: 900px) {
		.skills a {
			--direction: 1;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			height: 100%;
		}
	}
</style>
