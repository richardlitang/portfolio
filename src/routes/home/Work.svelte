<script>
	// import Section from '@sveltejs/site-kit/components/Section.svelte';
	import profile from '$lib/components/images/profile.jpg';
	import viewport from '../../lib/utils/useViewportAction';
</script>

<section class="work">
	<div class="flex">
		<p class="work-title">Where I've worked</p>
		<div class="flex-item">
			<p>
				For a year now, I've been a part of a startup that aims to simplify healthcare. Being part
				of the patient management team, I worked on our registration forms, ... I also built the
				prototype for our queue management system.
			</p>
			<br />
			<p>
				Before becoming a developer, I was an engineer in a power plant. I learned how to solve
				problems of varying complexities, work under pressure, and communicate effectively with
				people from different backgrounds and across multiple channels.
			</p>
		</div>
		<div class="flex-item" />
	</div>
</section>

<style>
	.work {
		max-width: none;
		background: var(--bg_2);
		padding: calc(10vmin);
	}

	.flex {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 2vw;
		gap: 2rem;
	}

	.work-title {
		font-size: var(--font-h2);
	}

	.flex-item {
		position: relative;
	}

	.flex-item p {
		font-size: var(--font-md);
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
	}

	@media (min-width: 680px) {
		img {
			max-width: 20rem;
			position: relative;
		}
	}
</style>
