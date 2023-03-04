<script>
	// import Section from '@sveltejs/site-kit/components/Section.svelte';
	import cloudflare from './logos/cloudflare.svg';
	import html5 from './logos/html5.svg';
	import netlify from './logos/netlify.svg';
	import node from './logos/node.svg';
	import vercel from './logos/vercel.svg';
</script>

<div class="skills" style="--columns: 3">
	<p class="skills-title">Technologies I've learned</p>
    <p class="title">Professional</p>
    <div class="skills-professional">
        <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sveltejs/kit/tree/master/packages/adapter-static"
            class="invert"
        >
            <img src={html5} alt="" />
            <span><span class="large">Static</span> HTML</span>
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sveltejs/kit/tree/master/packages/adapter-node"
            class="invert"
        >
            <img src={node} alt="" />
            <span>Node.js</span>
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://vercel.com/templates/svelte/sveltekit-boilerplate"
            class="invert invert-hover"
        >
            <img src={vercel} alt="" style="transform: translate(0,-0.2rem)" />
            <span>Vercel</span>
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify"
        >
            <img src={netlify} alt="" />
            <span>Netlify</span>
        </a>
        <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sveltejs/kit/tree/master/packages/adapter-cloudflare"
        >
            <img src={cloudflare} alt="" />
            <span>Cloudflare</span>
        </a>
    </div>
</div>

<style>
	.skills {
		margin: 3vmin auto;
		margin-bottom: var(--spacer-lg);
	}

	.skills-title {
		font-size: var(--font-h2);
		text-align: center;
	}

    .title {
		text-align: center;
        font-size: var(--font-lg);
        margin: var(--spacer-md) auto;
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
        font-size: var(--sk-text-xs);
		color: var(--sk-text-3);
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
        scale: 1.3
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

	.large {
		display: none;
	}

	@media (min-width: 600px) {
		.large {
			display: initial;
		}
	}

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
