<script>
	import viewport from '../utils/useViewportAction';

	let inView = false;
</script>

<div class="animated" class:in-view={inView} use:viewport on:enterViewport={() => (inView = true)}>
	<slot />
</div>

<style>
	.animated {
		opacity: 0;
	}

	.in-view {
		animation: 0.7s lineUp ease-out forwards;
		animation-delay: var(--delay, 0);
	}

	/* No JS (or no IntersectionObserver): render content immediately, no animation. */
	:global(html.no-js) .animated {
		opacity: 1;
		animation: none;
	}

	@keyframes lineUp {
		0% {
			opacity: 0;
			transform: translateY(24px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
