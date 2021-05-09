<script>
	import { page } from "$app/stores";

	export let currentLab;

	const navItems = ["equipment", "books", "guidelines", "ressources"];
</script>

<style>
	header {
		box-sizing: border-box;
		padding: 0.5rem 10vw;
		margin-bottom: 2rem;
		position: sticky;
		top: 0;
		background: linear-gradient(90deg, var(--labColor) 0%, white 100%);
		width: 85vw;
		margin-left: -10vw;
		z-index: 10;
	}

	a {
		position: relative;
		text-transform: capitalize;
	}

	a:hover,
	a.selected {
		color: white;
	}

	li {
		display: inline-block;
		margin-right: 1rem;
	}
</style>

<header>
	<ul>
		{#each navItems as i}
			<li>
				<a
					href={`/${currentLab}/${i}`}
					class:selected={$page.path === `/${currentLab}/${i}`}>{i}</a
				>
			</li>
		{/each}
	</ul>
</header>
