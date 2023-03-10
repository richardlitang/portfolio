<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section --padding="6rem">
	<div class="flex">
		<InView>
			<p class="section-title">About me</p>
		</InView>
		<div class="flex-item">
			<InView>
				<p>
					Hi! My name's Richard and I'm a full stack developer. For a year now, I've been a part of
					a startup that aims to simplify healthcare. Being part of the patient management system,
					we build
				</p>
			</InView>
			<InView --delay="1s">
				<p>
					Before becoming a developer, I was an engineer in a power plant. I learned how to solve
					problems of varying complexities, work under pressure, and communicate effectively with
					people from different backgrounds and across multiple channels.
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
