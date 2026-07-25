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
					I'm a full-stack software engineer working mainly in TypeScript, Node.js, React, and
					PostgreSQL. I've shipped production software at a YC-backed healthtech startup
					(Dashlabs.ai, W21) and a fast-growing construction-tech SaaS (BuildPass) — clinical lab
					workflows, site operations, async pipelines, and AI features that hold up in production,
					not just demos.
				</p>
			</InView>
			<InView --delay="0.3s">
				<p>
					I'm strongest in the messy middle of product engineering: unclear workflows, operational
					bottlenecks, and features that are technically “done” but still frustrating to use. Give
					me a rough problem and I'll work out what actually matters, make pragmatic calls, and push
					it through until it's genuinely usable.
				</p>
			</InView>
			<InView --delay="0.6s">
				<p>
					Before software, I worked in the energy industry, promoted to shift supervisor within a
					few years — where reliability, ownership, and clean handoffs mattered every shift. That
					still shapes how I work: I take responsibility for ambiguous problems, coordinate across
					moving parts, and make sure things hold up under real conditions. I'm based in Belgium,
					open to software engineering roles in SaaS and AI-enabled products.
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
