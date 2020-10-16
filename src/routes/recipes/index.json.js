import recipes from './_recipes.js';

const contents = JSON.stringify(recipes.map(recipe => {
	return {
		name: recipe.name,
		slug: recipe.slug,
		description: recipe.description,
		category: recipe.category,
		image: recipe.image,
		ingredients: recipe.ingredients,
		steps: recipe.steps,
		tips: recipe.tips,
   		preparation_time: recipe.preparation_time,
   		cook_time: recipe.cook_time,
		total_time: recipe.total_time,
		featured: recipe.featured
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}