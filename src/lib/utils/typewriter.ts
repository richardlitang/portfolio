// Client-only typewriter as a Svelte action.
//
// The element keeps its full text in markup so it is server-rendered (present
// for crawlers, link previews, and no-JS first paint). On the client the action
// clears the text and types it back in. Pair with a CSS rule that hides the
// element only when JS is active (html:not(.no-js)) so JS users never see the
// full text flash before typing begins.
export default function typewriter(node: HTMLElement, { speed = 45 } = {}) {
	const text = node.textContent ?? '';
	node.textContent = '';
	node.style.visibility = 'visible';

	let i = 0;
	const id = window.setInterval(() => {
		i += 1;
		node.textContent = text.slice(0, i);
		if (i >= text.length) window.clearInterval(id);
	}, speed);

	return {
		destroy() {
			window.clearInterval(id);
		}
	};
}
