<script lang="ts">
	import viewport from '../utils/useViewportAction';
	export let threshold = 0.5;
	let animated: boolean;
</script>

<div
	use:viewport={{ threshold }}
	on:enter={() => {
		animated = true;
	}}
	on:exit={() => {
		animated = false;
	}}
>
	<slot {animated} />
</div>
