<script>
	// import Section from '@sveltejs/site-kit/components/Section.svelte';
	import InView from '$lib/components/InView.svelte';
	import Section from '$lib/components/Section.svelte';
	import arrowright from '$lib/icons/arrowright.svg';
	import viewport from '../../lib/utils/useViewportAction';

	let current = 'Dashlabs.ai';

	const dashlabsTasks = [
		'Built a patient duplicate-catching system that saved resources and enhanced user experience',
		'Made the prototype for our queue management system to improve client processes',
		'Diagnosed and improved patient form performance improving usability on lower-end devices',
		"Worked on implementing the company's updated auth policy to our team's modules",
		'Developed custom scripts for migration and cleansing of data stored in the database'
	];

	const thpalTasks = [
		'Operated a steam power plant and all its auxiliaries without a single emergency shutdown event',
		'Troubleshot and prevented major equipment and system failures',
		'Mentored new control room operators and contributed to our process documentation to improve knowledge base',
		'Started as a field engineer conducting operation checklists, diagnosing equipment failures, and designing improvements for the field'
	];

	$: tasks = current === 'Dashlabs.ai' ? dashlabsTasks : thpalTasks;
</script>

<Section --padding="2rem">
	<InView>
		<div class="work">
			<div class="work-animation">
				<div>
					<div class="work-tabs">
						<button
							class={current === 'Dashlabs.ai' ? 'selected' : ''}
							on:click={() => (current = 'Dashlabs.ai')}>Dashlabs.ai</button
						>
						<button
							class={current === 'THPAL' ? 'selected' : ''}
							on:click={() => (current = 'THPAL')}>THPAL</button
						>
					</div>
				</div>
				<div class="work-box">
					<InView>
						<div class="work-details">
							{#each tasks as task}
								<span>
									<img src={arrowright} alt="" />
									{task}
								</span>
							{/each}
						</div>
					</InView>
				</div>
			</div>
		</div>
	</InView>
</Section>

<style>
	.work {
		max-width: fit-content;
		border-radius: 0.5rem;
		padding: calc(2.5vw + 1rem);
		margin: 0 auto;
		margin-bottom: 8rem;
		color: var(--bg_0);
	}
	.work-box {
		display: flex;
		flex-flow: column;
		justify-content: center;
		background: var(--bg_2);
		line-height: 2;

		max-width: 30em;
		min-height: 40vh;
		margin: 0 auto;
		padding: calc(4vw + 1rem) calc(2vw + 0.25rem);
		box-shadow: 2px 5px var(--bg_3);

		border-radius: calc(0.5vw + 0.25rem);
		border-top-left-radius: 0;
	}

	.selected {
		background-color: var(--bg_2);
	}

	.hidden {
		visibility: hidden;
	}

	.work-tabs {
		display: flex;
		flex-flow: row;
	}

	.work-tabs button {
		box-shadow: none;
		font-size: var(--font-sm);
		color: var(--bg_0);

		min-width: calc(1vw + 7rem);
		margin: 0;
		border-right: solid 2px var(--bg_3);
		border-radius: 0;
		border-top-right-radius: calc(0.25vw + 0.25rem);
		border-top-left-radius: calc(0.25vw + 0.1rem);
	}

	.work-title {
		text-align: center;
		font-size: var(--font-h2);
		font-family: var(--font--heading);
	}

	.work-details {
		font-size: var(--font-sm);
	}

	.work-details img {
		--size: var(--font-sm);
		width: var(--size);
		height: var(--size);
		object-fit: contain;
		margin-top: calc(var(--size) / 2);
		margin-right: var(--size);
	}

	.work-details span {
		margin-bottom: 1rem;
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
