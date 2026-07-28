import '$theme/reset.css';
import '$theme/theme.css';

export const prerender = true;
// GitHub Pages serves directory indexes, so emit /fr/index.html not /fr.html.
export const trailingSlash = 'always';
