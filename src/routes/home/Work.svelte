<script>
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import arrowright from '$lib/icons/arrowright.svg';

	const roles = [
		{
			company: 'BuildPass',
			url: 'https://www.buildpass.ai/us',
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

<Section --padding="2rem" --bgColor="var(--bg_1)">
	<div class="work-parent">
		<InView>
			<p class="section-title">Where I've worked</p>
		</InView>
		<InView>
			<div class="work">
				<div class="work-animation">
					<div class="work-tabs">
						{#each roles as { company }}
							<button
								class={current === company ? 'selected' : ''}
								aria-selected={current === company}
								on:click={() => (current = company)}>{company}</button
							>
						{/each}
					</div>
					<div class="work-box">
						<a class="role-company" href={role.url} target="_blank" rel="noreferrer"
							>{role.company} ↗</a
						>
						<p class="role-title">{role.title}</p>
						<p class="role-meta">{role.meta}</p>
						<div class="work-details">
							{#each role.tasks as task}
								<span>
									<img src={arrowright} alt="" />
									{task}
								</span>
							{/each}
						</div>
					</div>
				</div>
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
		max-width: fit-content;
		border-radius: 0.5rem;
		padding: calc(2.5vw + 1rem) calc(2.5vw + 1rem) 0;
		margin: 0 auto;
		color: var(--bg_0);
	}
	.work-box {
		display: flex;
		flex-flow: column;
		background: var(--bg_2);
		line-height: 2;

		max-width: 34em;
		min-height: 40vh;
		margin: 0 auto;
		padding: calc(3vw + 1rem) calc(2vw + 0.75rem);
		box-shadow: 2px 5px var(--bg_3);

		border-radius: calc(0.5vw + 0.25rem);
		border-top-left-radius: 0;
	}

	.role-company {
		display: inline-block;
		font-size: var(--font-sm);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text_2);
		text-decoration: none;
		margin-bottom: 0.35rem;
	}

	.role-company:hover {
		color: var(--bg_0);
		text-decoration: underline;
	}

	.role-title {
		font-family: var(--font--heading);
		font-size: var(--font-lg);
		line-height: 1.2;
	}

	.role-meta {
		font-size: var(--font-sm);
		color: var(--text_2);
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}

	.section-title {
		margin-top: 4rem;
	}

	.selected {
		background-color: var(--bg_2);
	}

	.work-tabs {
		display: flex;
		flex-flow: row;
		flex-wrap: wrap;
	}

	.work-tabs button {
		box-shadow: none;
		font-size: var(--font-sm);
		color: var(--bg_0);

		min-width: calc(1vw + 7rem);
		margin: 0;
		border-right: solid 2px var(--bg_3);
		border-radius: 0;
		border-top-right-radius: calc(0.25vw + 0.25rem);
		border-top-left-radius: calc(0.25vw + 0.1rem);
	}

	.work-details {
		font-size: var(--font-sm);
	}

	.work-details img {
		--size: var(--font-sm);
		width: var(--size);
		height: var(--size);
		object-fit: contain;
		margin-top: calc(var(--size) / 2);
		margin-right: var(--size);
	}

	.work-details span {
		margin-bottom: 1rem;
	}

	.prior {
		max-width: 40em;
		margin: 1.5rem auto 8rem;
		padding: 0 1rem;
		text-align: center;
		font-size: var(--font-sm);
		color: var(--text_2);
		line-height: 1.7;
	}
</style>
