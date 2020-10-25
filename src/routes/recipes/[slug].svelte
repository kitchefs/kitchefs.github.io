<script context="module">
	import RecipePage from "../../components/recipe_page.svelte";

	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`recipes/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { recipe: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let recipe;
</script>

<svelte:head>
	<title>Kitchefs | {recipe.name}</title>
</svelte:head>

<div class="container">
	<div class="row">
		<RecipePage
			name={recipe.name}
			image={recipe.image}
			ingredients={recipe.ingredients}
			steps={recipe.steps}
			tips={recipe.tips}
			preparation_time={recipe.preparation_time}
			cook_time={recipe.cook_time}
            total_time={recipe.total_time}
            serves={recipe.serves} />
	</div>
</div>
