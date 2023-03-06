<script>
	// import Section from '@sveltejs/site-kit/components/Section.svelte';
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
	import wordpress from './logos/wordpress.svg';
	import Section from '$lib/components/Section.svelte';
</script>

<Section>
	<div class="skills" style="--columns: 3">
		<p class="skills-title">Technologies I've learned</p>
		<p class="skills-level">Professional</p>
		<div class="skills-professional">
			<a
				rel="noreferrer"
				href="https://github.com/sveltejs/kit/tree/master/packages/adapter-static"
			>
				<img src={typescript} alt="" />
				<span class="skills-name">TypeScript</span>
			</a>
			<a
				rel="noreferrer"
				href="https://vercel.com/templates/svelte/sveltekit-boilerplate"
				class="invert invert-hover"
			>
				<img src={react} alt="" style="transform: translate(0,-0.2rem)" />
				<span class="skills-name">React</span>
			</a>
			<a
				rel="noreferrer"
				href="https://vercel.com/templates/svelte/sveltekit-boilerplate"
				class="invert invert-hover"
			>
				<img src={nextjs} alt="" style="transform: translate(0,-0.2rem)" />
				<span class="skills-name">Next.js</span>
			</a>
			<a
				rel="noreferrer"
				href="https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify"
			>
				<img src={material} alt="" />
				<span class="skills-name">MaterialUI</span>
			</a>
			<a rel="noreferrer" href="https://github.com/sveltejs/kit/tree/master/packages/adapter-node">
				<img src={graphql} alt="" />
				<span class="skills-name">GraphQL</span>
			</a>
			<a
				rel="noreferrer"
				href="https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify"
			>
				<img src={node} alt="" />
				<span class="skills-name">Node.js</span>
			</a>
			<a
				rel="noreferrer"
				href="https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare"
			>
				<img src={mongodb} alt="" />
				<span class="skills-name">MongoDB</span>
			</a>
		</div>
		<p class="skills-level">Amateur</p>
		<div class="skills-professional">
			<a
				rel="noreferrer"
				href="https://vercel.com/templates/svelte/sveltekit-boilerplate"
				class="invert invert-hover"
			>
				<img src={jest} alt="" style="transform: translate(0,-0.2rem)" />
				<span class="skills-name">Next.js</span>
			</a>
			<a rel="noreferrer" href="https://github.com/sveltejs/kit/tree/master/packages/adapter-node">
				<img src={docker} alt="" />
				<span class="skills-name">GraphQL</span>
			</a>
			<a
				rel="noreferrer"
				href="https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify"
			>
				<img src={svelte} alt="" />
				<span class="skills-name">Node.js</span>
			</a>
			<a
				rel="noreferrer"
				href="https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare"
			>
				<img src={wordpress} alt="" />
				<span class="skills-name">MongoDB</span>
			</a>
		</div>
	</div>
</Section>

<style>
	.skills {
		height: 100%;
	}

	.skills-title {
		font-size: var(--font-h2);
		text-align: center;
		font-family: var(--font--heading);
	}

	.skills-level {
		text-align: center;
		font-size: var(--font-xl);
		font-family: var(--font--heading);
		margin: var(--spacer-xl) auto;
	}

	.skills div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}

	.skills a {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		color: inherit;
	}

	.skills a span {
		font-size: var(--font-md);
		text-align: center;
	}

	.skills img {
		--size: 3rem;
		width: var(--size);
		height: var(--size);
		object-fit: contain;
	}

	.skills-professional img {
		--invert-hover: 0;
		filter: invert(var(--invert)) opacity(0.5) grayscale(50%);
	}

	.skills img:hover {
		scale: 1.3;
	}

	.skills-amateur img {
		--size: 3rem;
		--invert: 0;
		--invert-hover: 0;
		width: var(--size);
		height: var(--size);
		object-fit: contain;
		filter: invert(var(--invert)) opacity(0.5) grayscale(100%);
		transition: filter 0.2s;
	}

	.skills-amateur img {
		--size: 3rem;
		--invert-hover: 0;
		width: var(--size);
		height: var(--size);
		object-fit: contain;
		filter: invert(var(--invert)) opacity(0.5) grayscale(100%);
		transition: filter 0.2s;
	}

	.skills a:hover img,
	.skills a:focus-visible img {
		filter: invert(var(--invert-hover));
		transition: none;
	}

	.skills a:hover span,
	.skills a:focus-visible span {
		color: var(--sk-text-1);
	}

	p {
		margin-top: 0;
	}

	/* .large {
		display: none;
	}

	@media (min-width: 600px) {
		.large {
			display: initial;
		}
	} */

	@media (min-width: 900px) {
		.blurb {
			flex-column: 2 / 4;
		}

		.skills-flex {
			display: flex;
			max-width: 50vw;
			flex-wrap: wrap;
			align-items: center;
		}

		.skills a {
			--direction: 1;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			height: 100%;
		}
	}

	@media (prefers-color-scheme: dark) {
		.invert img {
			--invert: 1;
		}

		.invert-hover img {
			--invert-hover: 1;
		}
	}
</style>
