<nav>
	<div class="inner">
		<a class="brand" href="#main">richardlitang</a>
		<ul class="links">
			<li><a href="#about">about</a></li>
			<li><a href="#work">work</a></li>
			<li><a href="#builds">builds</a></li>
			<li><a href="#stack">stack</a></li>
			<li><a href="#contact">contact</a></li>
		</ul>
		<span class="status"><span class="dot" /> open to roles</span>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--paper) 88%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--line);
	}

	.inner {
		max-width: var(--container);
		margin: 0 auto;
		height: var(--nav-h);
		padding: 0 clamp(1rem, 4vw, 2rem);
		display: flex;
		align-items: center;
		gap: 1.5rem;
		font-family: var(--font--mono);
		font-size: var(--font-xs);
	}

	a {
		color: var(--ink);
		text-decoration: none;
	}

	.brand {
		font-weight: 500;
		letter-spacing: 0.04em;
	}

	.links {
		display: none;
		list-style: none;
		margin: 0 auto;
		padding: 0;
		gap: 1.4rem;
	}

	.links a {
		color: var(--ink-2);
		transition: color 0.15s ease;
	}

	.links a:hover {
		color: var(--ink);
	}

	.status {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		color: var(--ink-2);
		white-space: nowrap;
	}

	.dot {
		width: 0.5em;
		height: 0.5em;
		border-radius: 50%;
		background: var(--amber);
		animation: pulse 2.4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.35;
		}
	}

	@media (min-width: 720px) {
		.links {
			display: flex;
		}
		.status {
			margin-left: 0;
		}
	}
</style>
