<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section --padding="6rem">
	<div class="flex">
		<div class="flex-item">
			<InView>
				<p>
					For a year now, I've been a part of a startup that aims to simplify healthcare. Being part
					of the patient management team, I worked on our registration forms, ... I also built the
					prototype for our queue management system.
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
		font-size: var(--font-md);
		margin-bottom: var(--font-lg);
	}

	img {
		max-width: 20rem;
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
