<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import Socials from '$lib/components/Socials.svelte';
</script>

<Section --padding="6rem" --bgColor="var(--bg_1)">
	<div class="flex">
		<div class="flex-item">
			<InView>
				<p class="section-title">That's all for now</p>
				<a href="mailto:litang.richard@gmail.com"><button> Say hello!</button></a>
			</InView>
		</div>
	</div>
	<InView>
		<Socials --bottom="0" />
	</InView>
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

	button {
		font-size: var(--font-md);
		margin: calc(0.5vw + 1rem) auto;
		color: var(--bg_0);
	}

	a {
		color: inherit;
		text-decoration: none;
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
