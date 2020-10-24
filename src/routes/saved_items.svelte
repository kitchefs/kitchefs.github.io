<script context="module">
	export function preload() {
		return this.fetch(`recipes.json`).then(r => r.json()).then(recipes => {
			return { recipes };
		});
	}
</script>

<script>
	import Item from "../components/item.svelte";
	import {saved_items} from "../store.js";

	export let recipes;
</script>

<svelte:head>
	<title>Kitchefs | Saved Items</title>
</svelte:head>

<style>
	h1 {
		font-family: "Playfair Display";
	}
</style>

<div class="container">
	<h1>Saved Items</h1>
    <div class="row">
		{#each $saved_items as saved_item}
            {#each recipes as recipe}
				{#if saved_item == recipe.slug}
					<Item
					name={recipe.name}
					category={recipe.category}
					image={recipe.image}
					description={recipe.description}
					href={'recipes/' + recipe.slug} />
				{/if}
			{/each}
        {/each}
	</div>
</div>