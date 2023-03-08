<section>
	<div class="inner"><slot /></div>
</section>

<style>
	section {
		background-color: var(--bgColor, 'white');
		padding: var(--padding, 4rem) 0;
	}

	section::after {
		content: '';
		display: table;
		clear: both;
	}

	.inner {
		max-width: 120rem;
		margin: 0 auto;
	}
</style>
