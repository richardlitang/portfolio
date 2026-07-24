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
					I'm a full-stack engineer who ships production features end to end — from zero-to-one
					builds to 10x performance work. Most recently at BuildPass (construction SaaS) and before
					that Dashlabs.ai (YC W21 healthtech), I've owned modules across the stack and shipped real
					AI features that hold up in production, not just demos.
				</p>
			</InView>
			<InView --delay="0.6s">
				<p>
					I care about systems that stay reliable under load and interfaces that make complex
					workflows feel simple. I started in a different control room: three years running a 24/7
					power plant with a zero-shutdown record. That reliability mindset — real-time incident
					response and root-cause discipline — is how I approach software.
				</p>
			</InView>
		</div>
	</div>
</Section>

<style>
	.flex {
		margin: 0 auto;
		display: flex;
		flex-flow: column;
	}

	.section-title {
		margin-bottom: 2rem;
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
			max-width: 32em;
		}
	}
</style>
