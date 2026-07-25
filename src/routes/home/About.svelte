<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section id="about" --bgColor="var(--paper-2)">
	<div class="about">
		<InView>
			<p class="eyebrow">about</p>
			<p class="section-title">The messy middle is where I work best.</p>
		</InView>
		<div class="copy">
			<InView>
				<p>
					I'm a full-stack software engineer working mainly in TypeScript, Node.js, React, and
					PostgreSQL. I've shipped production software at a YC-backed healthtech startup
					(Dashlabs.ai, W21) and a fast-growing construction-tech SaaS (BuildPass) — clinical lab
					workflows, site operations, async pipelines, and AI features that hold up in production,
					not just demos.
				</p>
			</InView>
			<InView --delay="0.15s">
				<p>
					I'm strongest in the messy middle of product engineering: unclear workflows, operational
					bottlenecks, and features that are technically “done” but still frustrating to use. Give
					me a rough problem and I'll work out what actually matters, make pragmatic calls, and push
					it through until it's genuinely usable.
				</p>
			</InView>
			<InView --delay="0.3s">
				<p>
					Before software, I ran shifts in a 24/7 power plant — promoted to shift supervisor within
					a few years, in a room where reliability, ownership, and clean handoffs mattered every
					single shift. That still shapes how I work: I take responsibility for ambiguous problems,
					coordinate across moving parts, and make sure things hold up under real conditions.
				</p>
			</InView>
		</div>
	</div>
</Section>

<style>
	.about {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem clamp(2rem, 6vw, 5rem);
	}

	.section-title {
		max-width: 14em;
	}

	.copy {
		max-width: 38em;
	}

	.copy p {
		line-height: 1.75;
		font-size: var(--font-md);
		margin-bottom: 1.4rem;
	}

	@media (min-width: 900px) {
		.about {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		}
	}
</style>
