<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';

	import buildpassShot from './work/buildpass.png';
	import dashlabsShot from './work/dashlabs.png';

	const roles = [
		{
			company: 'BuildPass',
			url: 'https://www.buildpass.ai/us',
			domain: 'buildpass.ai',
			image: buildpassShot,
			title: 'Software Engineer',
			meta: 'Melbourne, AU (Remote) · Oct 2024 – Feb 2026',
			tasks: [
				'Led "Lighthouse," a delivery stream for urgent customer requests and market-localized workflows — shipping the workflow, dashboard, and configuration changes behind the company’s US market launch.',
				'Built AI-assisted product workflows across template generation, document analysis, scheduling, and action suggestions.',
				'Delivered the subcontractor Plant & Equipment module (registers, checklist linking, multi-step review), enabling hundreds of construction companies to self-manage equipment.',
				'Drove the Photos Uplift: moved heavy exports to async background jobs and rebuilt the UX with drag-and-drop folders, annotations, threads, and metadata stamping.',
				'Improved reliability and performance — optimizing React forms, tuning GraphQL queries and caching, replacing server-fetched translations with build-time bundling, extending Sentry coverage, and eliminating cascading retry loops.',
				'Shipped 200+ fixes and features, onboarded engineers, and won the company hackathon with an AI bulk-import prototype that cut setup from hours to minutes.'
			]
		},
		{
			company: 'Dashlabs.ai',
			url: 'https://www.dashlabs.ai/',
			domain: 'dashlabs.ai',
			image: dashlabsShot,
			title: 'Full Stack Engineer · YC W21',
			meta: 'Manila, PH (Remote) · Mar 2022 – Sep 2024',
			tasks: [
				'Owned the EHR/EMR modules — result entry, patient intake, the patient portal, and B2B client portals — and contributed to result certificates, appointments, the POS system, and auth.',
				'Built a patient queue management system from zero to one, cutting wait times and unlocking a new B2B revenue stream.',
				'Cut backend load with caching, background job queues, and MongoDB schema/index tuning — enabling a database-tier downgrade that reduced infra cost.',
				'Migrated search to MongoDB Atlas Search, improving relevance and scalability.',
				'Refactored core APIs for high-volume clinical lab workflows, improving throughput up to 10x at peak hours.'
			]
		}
	];

	let current = 'BuildPass';
	$: role = roles.find((r) => r.company === current) ?? roles[0];
</script>

<Section id="work" class="on-dark" --bgColor="var(--pine)">
	<div class="work">
		<InView>
			<p class="eyebrow">work log</p>
			<p class="section-title">Where I've shipped.</p>
		</InView>
		<InView>
			<div class="tabs" role="tablist">
				{#each roles as { company }}
					<button
						role="tab"
						class="tab"
						class:selected={current === company}
						aria-selected={current === company}
						on:click={() => (current = company)}>{company}</button
					>
				{/each}
			</div>

			<div class="panel">
				<div class="detail">
					<p class="role-title">{role.title}</p>
					<p class="role-meta">{role.meta}</p>
					<ul>
						{#each role.tasks as task}
							<li>{task}</li>
						{/each}
					</ul>
				</div>

				<a class="site-card" href={role.url} target="_blank" rel="noreferrer">
					<img src={role.image} alt={`${role.company} website`} loading="lazy" />
					<span class="caption">{role.domain} ↗</span>
				</a>
			</div>
		</InView>
		<InView>
			<p class="prior">
				Earlier: three years as a power-plant shift supervisor, leading a 24/7 operations team to a
				zero-shutdown record — where the reliability and root-cause habits started.
			</p>
		</InView>
	</div>
</Section>

<style>
	.work {
		color: var(--pine-ink);
	}

	.section-title {
		color: var(--pine-ink);
	}

	.tabs {
		display: flex;
		gap: 0.25rem;
		border-bottom: 1px solid var(--line-dark);
		margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
	}

	.tab {
		background: transparent;
		border: none;
		border-bottom: 2px solid transparent;
		border-radius: 0;
		color: var(--pine-ink-2);
		font-family: var(--font--mono);
		font-size: var(--font-sm);
		font-weight: 500;
		padding: 0.6rem 1rem;
		margin-bottom: -1px;
	}

	.tab:hover {
		background: transparent;
		color: var(--pine-ink);
		transform: none;
	}

	.tab.selected {
		color: var(--pine-ink);
		border-bottom-color: var(--amber);
	}

	.panel {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1.75rem, 4vw, 3.5rem);
		align-items: start;
	}

	.role-title {
		font-family: var(--font--display);
		font-weight: 600;
		font-size: var(--font-xl);
		line-height: 1.15;
	}

	.role-meta {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--pine-ink-2);
		margin: 0.4rem 0 1.5rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-flow: column;
		gap: 0.85rem;
	}

	li {
		position: relative;
		padding-left: 1.4rem;
		font-size: var(--font-sm);
		line-height: 1.65;
		color: var(--pine-ink);
	}

	li::before {
		content: '›';
		position: absolute;
		left: 0;
		color: var(--amber);
		font-family: var(--font--mono);
		font-weight: 500;
	}

	.site-card {
		display: block;
		text-decoration: none;
		border: 1px solid var(--line-dark);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--pine-2);
		transition: transform 0.2s ease, border-color 0.2s ease;
	}

	.site-card:hover {
		transform: translateY(-3px);
		border-color: var(--amber);
	}

	.site-card img {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top center;
	}

	.caption {
		display: block;
		padding: 0.6rem 0.9rem;
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		color: var(--pine-ink-2);
		border-top: 1px solid var(--line-dark);
	}

	.site-card:hover .caption {
		color: var(--amber);
	}

	.prior {
		margin-top: clamp(2rem, 4vw, 3rem);
		padding-top: 1.25rem;
		border-top: 1px solid var(--line-dark);
		max-width: 46em;
		font-size: var(--font-sm);
		color: var(--pine-ink-2);
		line-height: 1.7;
	}

	@media (min-width: 900px) {
		.panel {
			grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		}
		.site-card {
			position: sticky;
			top: 5rem;
		}
	}
</style>
