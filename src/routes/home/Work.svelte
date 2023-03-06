<script>
	// import Section from '@sveltejs/site-kit/components/Section.svelte';
	import Section from '$lib/components/Section.svelte';
	import arrowright from '$lib/icons/arrowright.svg';
	let activeButtonIndex = 0;
</script>

<Section>
	<div class="work">
		<p class="work-title">Where I've worked</p>
		<div class="work-box">
			<div class="work-tabs">
				<button>Dashlabs.ai</button>
				<button>THPAL</button>
			</div>
			<div class="work-details">
				<p>
					<span>
						<img src={arrowright} alt="" />
						Built a patient duplicate-catching system that saved resources and enhanced user experience
					</span>
					<span
						><img src={arrowright} alt="" />
						Made the prototype for our queue management system to improve client processes</span
					>
					<span
						><img src={arrowright} alt="" />
						Worked on implementing the company's updated auth policy to our team's modules
					</span>
					<span
						><img src={arrowright} alt="" />
						Developed custom scripts for migration and cleansing of data stored in MongoDB
					</span>
				</p>
				<!-- <p>
					<span>
						Operated a steam power plant and all its auxiliaries without a single emergency shutdown
						event in 3+ years
					</span>
					<span> Troubleshot and prevented major equipment and system failures </span>
					<span>
						Mentored new control room operators and contributed to our process documentation to
						improve knowledge base
					</span>
					<span>
						Started as a field engineer conducting operation checklists and diagnosing equipment
						failures
					</span>
				</p> -->
			</div>
		</div>
	</div>
</Section>

<style>
	.work {
		max-width: fit-content;
		border-radius: 0.5rem;
		background: var(--bg_2);
		padding: calc(2.5vw + 1rem);
		margin: 3rem auto;
	}

	.work-box {
		justify-content: center;
		display: flex;
		flex-flow: column;
		max-width: 40em;
		margin: 0 auto;
	}

	button {
		box-shadow: none;
		min-width: 10em;
	}
	.work-tabs {
		display: flex;
		flex-flow: row;
		margin: 0 auto;
	}

	.work-title {
		text-align: center;
		line-height: 2;
		font-size: var(--font-h2);
		font-family: var(--font--heading);
	}

	.work-details {
		font-size: var(--font-md);
	}

	.work-details img {
		--size: var(--font-sm);
		width: var(--size);
		height: var(--size);
		object-fit: contain;
		margin-top: calc(var(--size) / 3);
		margin-right: var(--size);
	}

	.flex-item {
		position: relative;
	}

	.flex-item p {
		font-size: var(--font-md);
	}

	img {
		max-width: 20rem;
	}

	@media (min-width: 800px) {
		.work-box {
			gap: 1rem;
			flex-flow: row;
		}
		.work-tabs {
			flex-flow: column;
		}
		img {
			max-width: 8rem;
			position: absolute;
			right: 0;
		}
	}

	@media (min-width: 680px) {
		img {
			max-width: 20rem;
			position: relative;
		}
	}
</style>
