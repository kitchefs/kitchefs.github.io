<script context="module">
	import { onMount }  from 'svelte';
    import Item         from "../components/item.svelte";

	export function preload() {
		return this.fetch(`recipes.json`).then(r => r.json()).then(recipes => {
			return { recipes };
		});
	}
</script>

<script>
    export let recipes;
    
	let saved_items = [];
	
	function set_saved_items(x) {
		saved_items = x;
	}
    
    onMount(() => {
		if (localStorage.hasOwnProperty("kitchefs_saved_items")) {
			set_saved_items(localStorage.getItem("kitchefs_saved_items"));
		}
	});

</script>

<svelte:head>
	<title>Kitchefs | Saved Items</title>
</svelte:head>

<style>
	h1 {
		font-family: "Playfair Display";
	}
</style>

<h1>Saved Items</h1>

<div class="container">
    <div class="row">
		{#each saved_items as saved_item}
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