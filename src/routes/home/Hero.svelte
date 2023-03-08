<script>
	import viewport from '../../lib/utils/useViewportAction';
	import typewriter from '$lib/utils/typewriter';

	let tagline = 'I build things for the web';
	$: showText = false;
</script>

<section class="hero">
	<div class="hero-contents">
		<div class="hero-text" use:viewport on:enterViewport={() => (showText = true)}>
			<span class="hero-intro">Hi, it's</span>
			<span class="hero-name">Richard</span>
			<div class="hero-tagline">
				{#if showText}
					<p transition:typewriter={{ speed: 1 }}>
						{tagline}
					</p>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		max-width: 100vw;
		min-height: calc(var(--font-h1) * 12);
		background: var(--bg_1);
		border-bottom-left-radius: 2rem;
		border-bottom-right-radius: 2rem;
		box-shadow: 0px 6px var(--bg_2);
		/* background: radial-gradient(
				34.14% 72.25% at 47.58% 31.75%,
				hsla(209, 100%, 95%, 0.52) 0%,
				hsla(0, 0%, 100%, 0) 100%
			),
			linear-gradient(
				92.4deg,
				hsl(210, 7%, 83%) 14.67%,
				hsla(208, 100%, 97%, 0.48) 54.37%,
				hsla(207, 22%, 84%, 0.62) 92.49%
			),
			linear-gradient(0deg, hsl(204, 38%, 90%), hsl(204, 38%, 90%)); */
		position: relative;
		/* padding: 8rem ; */
	}

	.hero-contents {
		position: relative;
		padding: 5vh 2vw;
		top: calc(var(--font-h1) * 2);
		margin: 0 auto;
		padding-bottom: 10rem;
		font-family: var(--font--title);
	}

	.hero-text {
		margin: 0 auto;
	}

	.hero-intro {
		margin: 1rem 0;
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
		margin: 0 auto;
		/* overflow: hidden;
		white-space: nowrap;
		width: 0;
		animation: typing 5s steps(40, end) forwards, blinking 1s forwards; */
		animation: blinking 4s 1;
	}

	.hero-tagline-letter {
		white-space: pre;
	}

	@keyframes typing {
		0% {
			width: 100%;
		}
		100% {
			width: 0%;
		}
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

	.hero-text h1 {
		font-size: var(--font-h3);
		line-height: 1.1;
	}

	.hero-text h2 {
		font-size: var(--font-h2);
	}

	.hero .tagline {
		font-size: var(--font-h1);
		line-height: 1.1;
	}

	.logotype {
		position: relative;
		width: 100%;
		max-width: 400px;
		margin: 0 0 1rem 0;
	}

	.hero-image {
		--size: 64rem;
		position: absolute;
		left: calc(50% - 0.53 * var(--size));
		bottom: -28rem;
		pointer-events: none;
	}

	.hero-image img {
		width: var(--size);
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.cta {
		display: inline-block;
		background: var(--sk-theme-1);
		padding: 0.5em 1em;
		font-size: var(--sk-text-m);
		border-radius: var(--sk-border-radius);
		color: white;
		margin: 1em 0;
	}

	@media (min-width: 400px) {
		.hero .tagline {
			max-width: none;
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

		.hero-image {
			--size: min(100vw, 108rem);
			left: auto;
			right: -20rem;
			bottom: calc(-5rem - 0.38 * var(--size));
		}
	}

	@media (prefers-color-scheme: dark) {
		.hero {
			background: hsl(210, 7%, 20%);
			background: radial-gradient(
					64.14% 72.25% at 47.58% 31.75%,
					hsl(209deg 6% 47% / 52%) 0%,
					hsla(0, 0%, 100%, 0) 100%
				),
				linear-gradient(
					92.4deg,
					hsl(210, 7%, 16%) 14.67%,
					hsl(0deg 0% 0% / 48%) 54.37%,
					hsla(207, 22%, 13%, 0.62) 92.49%
				),
				linear-gradient(0deg, hsl(204, 38%, 20%), hsl(204, 10%, 90%));
		}

		.hero-text img {
			mix-blend-mode: screen;
		}
	}
</style>
