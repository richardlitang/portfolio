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
				'Led “Lighthouse,” a dedicated delivery stream for urgent customer requests and market-localized workflows, shipping the workflow, dashboard, and configuration changes that supported the company’s US market launch.',
				'Worked on AI-assisted product workflows across template generation, document analysis, scheduling, and action suggestions, using AI to improve existing operational flows.',
				'Delivered and maintained the subcontractor Plant & Equipment module (registers, checklist linking, multi-step review workflows), enabling hundreds of construction companies and their subcontractors to self-manage equipment.',
				'Drove the Photos Uplift project from design to implementation: moved heavy photo exports to async background jobs and rebuilt the UX with drag-and-drop folder organization, annotations, conversation threads, and metadata stamping.',
				'Improved platform reliability and performance by optimizing React forms, tuning GraphQL queries and caching, replacing slow server-fetched translations with build-time bundling, extending Sentry instrumentation to critical paths, and eliminating cascading API retry loops.',
				'Helped raise team velocity by onboarding engineers and pair programming to unblock peers; served as a domain expert across multiple modules while contributing 200+ shipped fixes, features, and improvements.',
				'Won the company hackathon leading a cross-functional team: an AI-assisted bulk import prototype that mapped customer spreadsheet data to internal schemas, cutting setup work from hours to minutes.'
			]
		},
		{
			company: 'Dashlabs.ai',
			url: 'https://www.dashlabs.ai/',
			domain: 'dashlabs.ai',
			image: dashlabsShot,
			title: 'Full Stack Software Engineer · YC W21',
			meta: 'Manila, PH (Remote) · Mar 2022 – Sep 2024',
			tasks: [
				'Owned the EHR/EMR modules for patient result entry, patient information intake, the patient portal, and B2B client portals; contributed across the platform including dynamic result certificates, appointments, the POS system, and auth.',
				'Built a fully integrated patient queue management system from zero to one, streamlining laboratory operations, reducing patient wait times, and unlocking a new B2B revenue stream.',
				'Reduced backend load by adding caching to critical code paths, offloading heavy operations to background job queues, tuning MongoDB schemas and indexes, and optimizing high-volume queries — enabling a database tier downgrade that cut infrastructure costs.',
				'Migrated the platform’s search workflows to MongoDB Atlas Search, improving search relevance and scalability while reducing pressure on primary database queries.',
				'Refactored core APIs supporting high-volume clinical laboratory workflows, removing execution bottlenecks and improving throughput by up to 10x during peak operational hours.'
			]
		},
		{
			company: 'THPAL',
			title: 'Shift Supervisor, Power Plant Operations',
			meta: 'THPAL Nickel Corporation · Philippines · Feb 2017 – Nov 2021',
			tasks: [
				'Led a shift team of engineers and operators in a 24/7 continuous-process power plant, maintaining a zero-shutdown record for 3 years through real-time incident response, root-cause analysis, and disciplined operational handoffs.',
				'Drove preventive system improvements, troubleshot complex operational problems, and standardized shift procedures adopted across operating teams.',
				'Troubleshot systems and issues across water treatment, the steam turbine generator, the boiler, and the coal handling system.',
				'Trained juniors in operations.',
				'Delivered daily reports for the power station unit (PSU) section.'
			]
		}
	];

	let current = 'BuildPass';
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

			<!-- Every role is rendered so the full history is in the served HTML
			     (crawlers, link previews, no-JS). JS only decides which is shown. -->
			{#each roles as role}
				<div class="panel" class:is-active={current === role.company} class:is-solo={!role.image}>
					<div class="detail">
						<p class="panel-company">{role.company}</p>
						<p class="role-title">{role.title}</p>
						<p class="role-meta">{role.meta}</p>
						<ul>
							{#each role.tasks as task}
								<li>{task}</li>
							{/each}
						</ul>
					</div>

					{#if role.image}
						<a class="site-card" href={role.url} target="_blank" rel="noreferrer">
							<img src={role.image} alt={`${role.company} website`} loading="lazy" />
							<span class="caption">{role.domain} ↗</span>
						</a>
					{/if}
				</div>
			{/each}
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

	/* With JS, the tabs pick one role. Without it, all roles stack and each
	   keeps its own company heading. */
	:global(html:not(.no-js)) .panel:not(.is-active) {
		display: none;
	}

	:global(html:not(.no-js)) .panel-company {
		display: none;
	}

	:global(html.no-js) .tabs {
		display: none;
	}

	.panel + .panel {
		margin-top: clamp(2.5rem, 5vw, 4rem);
	}

	.panel-company {
		font-family: var(--font--mono);
		font-size: var(--font-xs);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--amber);
		margin-bottom: 0.5rem;
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

	@media (min-width: 900px) {
		.panel {
			grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		}
		/* Roles without a company screenshot run full width, but the text
		   still stops at a readable measure. */
		.panel.is-solo {
			grid-template-columns: minmax(0, 9fr);
		}
		.panel.is-solo .detail {
			max-width: 60em;
		}
		.site-card {
			position: sticky;
			top: 5rem;
		}
	}
</style>
