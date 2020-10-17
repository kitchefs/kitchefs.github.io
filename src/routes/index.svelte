<script context="module">
	import FeaturedItem     from "../components/featured_item.svelte";
    import Item             from "../components/item.svelte";
    import featured_recipes from './recipes/_featured_recipes.js';

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
        {#each featured_recipes as featured_recipe}
            {#each recipes as recipe}
                {#if featured_recipe == recipe.slug}
                    <FeaturedItem
                        name={recipe.name}
                        category={recipe.category}
                        image={recipe.image}
                        description={recipe.description}
                        href={'recipes/' + recipe.slug} />
                {/if}
            {/each}
        {/each}
        {#each recipes as recipe}
            <Item
                name={recipe.name}
                category={recipe.category}
                image={recipe.image}
                description={recipe.description}
                href={'recipes/' + recipe.slug} />
		{/each}
        
	</div>
</div>