<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section --padding="8rem">
	<div class="flex">
		<InView>
			<p class="section-title">About me</p>
		</InView>
		<div class="flex-item">
			<InView>
				<p>
					Hi! I'm Richard, a full-stack developer. For a year now, I've had the privilege of working
					with a startup that aims to simplify healthcare. I work with a team that builds features
					for our forms, patient management system, and site operations among others.
				</p>
			</InView>
			<InView --delay="1s">
				<p>
					Although I work with software now, I actually started my career as an engineer in a power
					plant. It was there I learned how to solve complex problems, design solutions, and
					communicate effectively. Things I found helpful as I transitioned to the web.
				</p>
			</InView>
		</div>
	</div>
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

	.flex-item p {
		line-height: 1.8;
		font-size: var(--font-md);
		margin-bottom: var(--font-lg);
	}

	@media (min-width: 400px) {
		.flex-item {
			max-width: 25em;
		}
	}
</style>
