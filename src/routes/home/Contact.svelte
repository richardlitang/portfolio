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
</Section>
<InView>
	<div class="socials-footer">
		<Socials --bottom="0" />
	</div>
</InView>

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
		margin: calc(1vw + 2rem) auto;
		color: var(--bg_0);
	}

	button:hover {
		scale: 1.01;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.socials-footer {
		visibility: hidden;
	}

	@media (min-width: 680px) {
		.socials-footer {
			visibility: visible;
		}
	}
</style>
