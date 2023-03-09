<script>
	import { slide } from 'svelte/transition';
	import github from '$lib/icons/github.svg';
	import linkedin from '$lib/icons/linkedin.svg';
</script>

<div>
	<ul class="socials" transition:slide={{ delay: 3000 }}>
		<li><a href="https://github.com/heisenberglar"><img src={github} alt="github" /></a></li>
		<li>
			<a href="https://linkedin.com/in/richardlitang"><img src={linkedin} alt="linkedin" /></a>
		</li>
	</ul>
</div>

<style>
	.socials {
		display: flex;
		flex-flow: column;
		position: absolute;
		bottom: var(--bottom, calc(2vw));
		left: calc(1vw + 0.5rem);
		--size: calc(1vw + 1rem);
		gap: calc(var(--size) / 2);
		width: var(--size);
	}

	.socials img {
		width: var(--size);
		height: var(--size);
		object-fit: contain;
	}

	li:nth-child(2)::after {
		content: '';
		display: block;
		width: 1px;
		height: calc(var(--size) * 3);
		margin: 0 auto;
		margin-top: calc(var(--size) / 2);
		background-color: black;
	}
</style>
