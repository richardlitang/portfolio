// Runs during prerender, so each locale's HTML ships with the right
// <html lang>. Screen readers and search engines rely on it.
/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const path = event.url.pathname;
	const lang = path.startsWith('/fr') ? 'fr' : path.startsWith('/nl') ? 'nl' : 'en';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
