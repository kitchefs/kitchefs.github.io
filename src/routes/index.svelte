<script context="module">
	import FeaturedItem from "../components/featured_item.svelte";
	import Item         from "../components/item.svelte";

	export function preload() {
		return this.fetch(`recipes.json`).then(r => r.json()).then(recipes => {
			return { recipes };
		});
	}
</script>

<script>
	export let recipes;
</script>

<svelte:head>
	<title>Kitchefs</title>
</svelte:head>

<div class="container">
    <div class="row">
		{#each recipes as recipe}
			{#if recipe.featured}
				<FeaturedItem
					name={recipe.name}
					category={recipe.category}
					image={recipe.image}
					description={recipe.description}
					href={'recipes/' + recipe.slug} />
			{:else}
				<Item
					name={recipe.name}
					category={recipe.category}
					image={recipe.image}
					description={recipe.description}
					href={'recipes/' + recipe.slug} />
			{/if}
		{/each}
        
	</div>
</div>