<section id={$$props.id ?? undefined} class={$$props.class ?? ''}>
	<div class="inner"><slot /></div>
</section>

<style>
	section {
		background-color: var(--bgColor, var(--paper));
		padding: var(--padding, var(--space-band)) 0;
	}

	.inner {
		max-width: var(--container);
		margin: 0 auto;
		padding: 0 clamp(1rem, 4vw, 2rem);
	}
</style>
