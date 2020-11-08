function Recipe(name, description, category, ingredients, steps, tips, preparation_time, cook_time, total_time, serves) {
	function lowercase(x) {
        x = x.toLowerCase();
        x = x.split(' ').join('-');
        return x;
    }
	
	return {
		name: name,
		slug: lowercase(name),
		description: description,
		category: category,
		image: "/media/" + lowercase(name) + ".jpg",
		ingredients: ingredients,
		steps: steps,
		tips: tips,
		preparation_time: preparation_time,
		cook_time: cook_time,
		total_time: total_time,
		serves: serves,
	}
}

const recipes = [
	new Recipe(
		'Anzac Biscuits',
		'Crunchy golden biscuits to celebrate Anzac day.',
		'Festive',
		[
			'1 Cup Coconut', 
			'1 Cup Plan Flour', 
			'1 Cup Caster Sugar', 
			'1 Cup Rolled Oats', 
			'125g Butter', 
			'2 Tbs Golden Syrup', 
			'2 Tsp Bicarbonate Soda', 
			'2 Tbs Bolling Water'
		],
		[
			'1 Cup Coconut', 
			'1 Cup Plan Flour', 
			'1 Cup Caster Sugar', 
			'1 Cup Rolled Oats', 
			'125g Butter', 
			'2 Tbs Golden Syrup', 
			'2 Tsp Bicarbonate Soda', 
			'2 Tbs Bolling Water'
		],
		[],
		'20 Minutes',
		'20 Minutes',
		'45 Minutes',
		'20'
	),
	new Recipe(
		'Chocolate Caramel Slice',
		'Awesome for a tasty dessert treat.',
		'Dessert',
		[
			'1 cup Plain Flour',
			'1 cup Brown Sugar', 
			'½ Desiccated Coconut', 
			'125g Butter, Melted', 
			'100g Butter, Extra', 
			'2 Cans Condensed Milk', 
			'⅓ Golden Syrup', 
			'200g Dark Chocolate', 
			'1 tbspp Vegtable Oil'
		],
		[
			'Line a 20cm x 10cm tray, preheat oven to 180°C.',
			'In a medium sized bowl, combine Flour, Sugar and Coconut.', 
			'Add in Melted Butter, mix will.', 
			'Press mixture firmly into pan, Bake for 15-20 minutes or until brown. Leave to cool.', 
			'Place Extra Butter, Condensed Milk and Golden Syrup in a medium sized saucepan. Stir over low heat until smooth.', 
			'Pour over base. Bake For 20-25 minutes or until golden. Leave to cool', 
			'Combine Chocolate and Oil, stir until smooth, pour evenly over slice. Refrigerate for 5-6 hours.'
		],
		[],
		'30 Minutes',
		'45 Minutes',
		'6 Hours, 15 Minutes',
		'20'
	),
	new Recipe(
		'Guacamole',
		'Great with Nachos or Corn Chips.',
		'Sides/Dips',
		[
			'2 avocados', 
			'¼ cup onion, Finely Chopped', 
			'¼ cup Tomato, Seeds Removed', 
			'1 tsp Pepper', 
			'1 tsp Salt', 
			'2 tsp Fresh Lemon Juice'
		],
		[
			'In a small bowl mash avocados well.', 
			'Add in onion, tomato, pepper, salt and lemon juice and mix well.'
		],
		[],
		'5 Minutes',
		'0 Minutes',
		'5 Minutes',
		'8-10'
	),
	new Recipe(
		'Hot Cross Buns',
		'A perfect Easter snack for the whole family.',
		'Festive',
		[
			'3 ¼ cups plain flour', 
			'1 cup sultanas', 
			'2 tbsp orange peel', 
			'2 tbsp caster sugar', 
			'1 tsp dried yeast', 
			'1 tsp mixed spice', 
			'1 tsp ground cinnamon', 
			'1 tsp ground nutmeg', 
			'1 tsp Salt', 
			'1 cup Warm Milk', 
			'50g Butter, Melted', 
			'1 Egg, Whisked'
		],
		[
			'Line baking tray with baking paper', 
			'In a large bowl combine Flour, Sultanas, Orange Peel, Sugar, Yeast, Spices, Nutmeg and salt.', 
			'Make a well in the center ad mix in Milk, Butter and Egg. Use your hands to bring the dough together in the bowl.', 
			'Turn the dough onto a floured surface and knead for 10-15 minutes or until smooth.', 
			'Coat with Melted Butter and leave to rise for 1 ½ hours.', 
			'Preheat oven to 180°C. knead dough for 3-5 minutes, until smooth.', 
			'Divide into 12 balls, Place onto prepared tray. Set aside for 30 minutes.', 
			'For the Cross Paste, mix ¼ cup Flour and 2 tbsp water. Transfer into piping bag and make Crosses', 
			'Bake for 20-25 minutes, Leave to cool.'
		],
		[
			'You can use any citrus peel instead of Orange Peel'
		],
		'30 Minutes',
		'25 Minutes',
		'2 Hours, 55 Minutes',
		'8'
	),
];

export default recipes;

