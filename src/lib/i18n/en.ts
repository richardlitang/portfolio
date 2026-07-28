const en = {
	code: 'en',
	name: 'English',
	meta: {
		title: 'Richard Litang • Software Engineer',
		description:
			'Richard Litang — full-stack software engineer building AI-grounded products end to end.',
		ogDescription: 'Full-stack engineer building AI-grounded products end to end.'
	},
	nav: {
		about: 'about',
		work: 'work',
		builds: 'builds',
		stack: 'stack',
		contact: 'contact',
		status: 'open to roles'
	},
	hero: {
		eyebrow: 'based in Belgium',
		log: 'Full-stack engineer building AI-grounded products end to end',
		statusLabel: 'status',
		statusValue: 'open to mid–senior roles',
		focusLabel: 'focus',
		focusValue: 'full-stack product engineering · AI',
		linksLabel: 'links',
		github: 'github',
		linkedin: 'linkedin',
		email: 'email'
	},
	about: {
		eyebrow: 'about',
		title: 'The messy middle is where I work best.',
		paragraphs: [
			'I’m a full-stack software engineer working mainly in TypeScript, Node.js, React, and PostgreSQL. I’ve shipped production software at a YC-backed healthtech startup (Dashlabs.ai, W21) and a fast-growing construction-tech SaaS (BuildPass) — clinical lab workflows, site operations, async pipelines, and AI features that hold up in production, not just demos.',
			'I’m strongest in the messy middle of product engineering: unclear workflows, operational bottlenecks, and features that are technically “done” but still frustrating to use. Give me a rough problem and I’ll work out what actually matters, make pragmatic calls, and push it through until it’s genuinely usable.',
			'Before software, I ran shifts in a 24/7 power plant — promoted to shift supervisor within a few years, in a room where reliability, ownership, and clean handoffs mattered every single shift. That still shapes how I work: I take responsibility for ambiguous problems, coordinate across moving parts, and make sure things hold up under real conditions.'
		]
	},
	work: {
		eyebrow: 'work log',
		title: 'Where I’ve shipped.',
		roles: [
			{
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
		]
	},
	projects: {
		eyebrow: 'selected builds',
		title: 'Built to learn.',
		moreLabel: 'more builds',
		live: 'live',
		code: 'code',
		flagships: [
			{
				blurb:
					'Trains a churn model on any customer table — and keeps the LLM out of the prediction.',
				highlights: [
					'The LLM works only at the semantic boundary, mapping arbitrary columns onto a standard feature contract.',
					'Prediction stays classical ML: XGBoost per dataset, SHAP explanations, held-out validation.',
					'One pipeline ingests structurally different tables with zero hand-written column mappings.'
				]
			},
			{
				blurb: 'A local-first video studio: story in, narrated and rendered video out.',
				highlights: [
					'Multi-surface system — Studio web app, CLI, MCP server, provider adapters, shared Zod schemas.',
					'AI turns a story into a structured production plan; narration runs locally, Remotion renders.',
					'Guarded by a full quality gate and a deterministic portfolio proof.'
				]
			}
		],
		more: [
			{
				oneliner: 'Support investigations where every claim is cited — or routed to a human.',
				highlights: [
					'A real RAG pipeline over uploaded docs: dense retrieval, literal candidate expansion, optional reranking.',
					'Deterministic routing between docs-only, docs-plus-context, and human-review modes.',
					'AI fallibility is a first-class needs_human_review state; ships with ADRs, a threat model, and a verify gate.'
				]
			},
			{
				oneliner: 'A programmatic-SEO site researched and published by an agent.',
				highlights: [
					'A "Hunter Agent" autonomously researches tools, analyzes reviews, and publishes structured comparisons.',
					'Semantic search over the catalog via pgvector; invisible Turnstile for bot protection.'
				]
			},
			{
				oneliner: 'A Chrome extension that binds every new tab to one commitment.',
				highlights: [
					'Every new tab shows the single task you are bound to, turning the drift moment into a refocus.',
					'A capture-to-"Next up" flow keeps planning fast without breaking the current commitment.'
				]
			}
		]
	},
	skills: {
		eyebrow: 'stack',
		title: 'Working set.',
		labels: [
			'languages',
			'frontend',
			'backend & data',
			'ai engineering',
			'cloud & infra',
			'testing & observability'
		]
	},
	contact: {
		eyebrow: 'contact',
		title: 'Got a rough problem?',
		sub: 'I’m open to mid-to-senior software engineering roles. SaaS and AI products are home turf, but any messy workflow is fair game.',
		cta: 'Email me'
	},
	footer: {
		built: 'Built by Richard Litang. It’s free and',
		openSource: 'open source'
	}
};

export default en;
export type Dict = typeof en;
