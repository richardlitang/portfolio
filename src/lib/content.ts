// Non-translated structure: images, links, and proper nouns.
// Locale files supply only the prose, keyed by the same order.

import buildpassShot from '../routes/home/work/buildpass.png';
import dashlabsShot from '../routes/home/work/dashlabs.png';

import support from '../routes/home/projects/support.png';
import scriptorium from '../routes/home/projects/scriptorium.png';
import churn from '../routes/home/projects/churn.png';
import stackhunt from '../routes/home/projects/stackhunt.png';
import bound from '../routes/home/projects/bound.png';
import fitfinder from '../routes/home/projects/fitfinder.png';

export const roleMeta = [
	{
		company: 'BuildPass',
		url: 'https://www.buildpass.ai/us',
		domain: 'buildpass.ai',
		image: buildpassShot
	},
	{
		company: 'Dashlabs.ai',
		url: 'https://www.dashlabs.ai/',
		domain: 'dashlabs.ai',
		image: dashlabsShot
	},
	{
		company: 'THPAL',
		url: null,
		domain: null,
		image: null
	}
];

export const flagshipMeta = [
	{
		title: 'ChurnAdapter',
		image: churn,
		tags: ['Python', 'FastAPI', 'XGBoost', 'SHAP', 'LLM'],
		repo: 'https://github.com/richardlitang/churn-adapter',
		live: null
	},
	{
		title: 'Scriptorium',
		image: scriptorium,
		tags: ['TypeScript', 'MCP', 'Zod', 'Remotion', 'CLI'],
		repo: 'https://github.com/richardlitang/scriptorium-video',
		live: null
	}
];

export const moreMeta = [
	{
		title: 'FitFinder',
		image: fitfinder,
		imgPos: null,
		tags: ['Rental intelligence', 'Search workflows', 'Evidence review'],
		repo: null,
		live: null
	},
	{
		title: 'Support Copilot',
		image: support,
		imgPos: null,
		tags: ['Next.js', 'TypeScript', 'RAG', 'pgvector'],
		repo: 'https://github.com/richardlitang/support-copilot',
		live: null
	},
	{
		title: 'StackHunt',
		image: stackhunt,
		imgPos: null,
		tags: ['Astro', 'React', 'Supabase', 'Gemini'],
		repo: 'https://github.com/richardlitang/stackhunt',
		live: 'https://stackhunt.io'
	},
	{
		title: 'Bound',
		image: bound,
		imgPos: 'center left',
		tags: ['TypeScript', 'Chrome MV3', 'Vite'],
		repo: null,
		live: null
	}
];

// Tool names stay as-is in every locale; only the group label is translated.
export const skillItems = [
	['TypeScript', 'JavaScript', 'SQL', 'Python'],
	[
		'React',
		'Next.js',
		'React Native / Expo',
		'Svelte',
		'Tailwind CSS',
		'shadcn/ui',
		'MUI',
		'Ant Design'
	],
	[
		'Node.js',
		'Express',
		'FastAPI',
		'GraphQL',
		'REST',
		'PostgreSQL',
		'MongoDB',
		'Prisma',
		'Redis',
		'Supabase',
		'pgvector'
	],
	['OpenAI', 'Anthropic', 'Vercel AI SDK', 'RAG', 'Embeddings', 'LLM evals', 'Promptfoo', 'MCP'],
	['AWS', 'Docker', 'Vercel', 'Inngest'],
	['Jest', 'Vitest', 'Playwright', 'Checkly', 'Sentry', 'Datadog', 'PostHog']
];

export const social = {
	github: 'https://github.com/richardlitang',
	linkedin: 'https://linkedin.com/in/richardlitang',
	email: 'richardjasonlitang@gmail.com',
	repo: 'https://github.com/richardlitang/richardlitang.github.io'
};

export const locales = ['en', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = {
	en: '/',
	fr: '/fr/',
	nl: '/nl/'
};

export const siteUrl = 'https://richardlitang.github.io';

export function localeFromPath(pathname: string): Locale {
	if (pathname.startsWith('/fr')) return 'fr';
	if (pathname.startsWith('/nl')) return 'nl';
	return 'en';
}
