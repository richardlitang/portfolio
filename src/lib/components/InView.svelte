<script>
	import viewport from '../utils/useViewportAction';

	$: showWork = false;
</script>

<div use:viewport on:enterViewport={() => (showWork = true)}>
	{#if showWork}
		<div class="animated">
			<slot />
		</div>
	{/if}
</div>

<style>
	.animated {
		opacity: 0;
		animation: 3s lineUp ease-out forwards;
		animation-delay: var(--delay, 0.5s);
	}

	@keyframes lineUp {
		0% {
			opacity: 0;
			transform: translateY(80%);
		}
		20% {
			opacity: 0;
		}
		50% {
			opacity: 0.8;
			transform: translateY(20%);
		}
		100% {
			opacity: 1;
			transform: translateY(0%);
		}
	}
</style>
