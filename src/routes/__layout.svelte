<script>
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";

	import Header from "$lib/Header.svelte";

	import { labs } from "./data.json";

	import "../reset.css";
	import "../global.css";
</script>

<style>
	main {
		display: flex;
	}

	section {
		display: flex;
		position: relative;
		box-sizing: border-box;
		height: 100vh;
		width: 5vw;
		transition: width ease-out 250ms;
		overflow-x: hidden;
		overflow-y: scroll;
		background: linear-gradient(90deg, var(--labColor) 0%, white 100%);
	}

	a {
		box-sizing: border-box;
		position: sticky;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		writing-mode: vertical-lr;
		text-transform: uppercase;
		letter-spacing: 0.075em;
		z-index: 20;
	}

	div {
		position: relative;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 0 10vw;
		margin-left: -44px;
		width: 85vw;
		flex-shrink: 0;
	}

	.selected {
		width: 85vw;
	}

	.selected a {
		width: auto;
		height: auto;
	}
</style>

<main>
	{#each labs as lab}
		<section
			class:selected={$page.path.includes(lab.id)}
			style="--labColor: {lab.color}"
		>
			<a href={`/${lab.id}`}>{lab.name}</a>
			{#if $page.path.includes(lab.id)}
				<div transition:fade={{ duration: 250 }}>
					<Header currentLab={lab.id} />
					<slot />
				</div>
			{/if}
		</section>
	{/each}
</main>
