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
            'Line baking tray, preheat oven to 160°C.',
            'In a large bowl, combine Coconut, Flour, Suga and oats. Make a well in the center.',
            'In a medium sauspan over medium heat, mix Butter and Golden Syrup until Butter is melted.',
            'Add Bicarbonate Soda and Water to Butter and pour into well.',
            'Mix until well combined.',
            'Roll into 20 equaly sized balls.',
            'Cook for 18-20 minutes, Leave to cool.'
        ],
		[],
		'20 Minutes',
		'20 Minutes',
		'45 Minutes',
		'20'
    ),
    new Recipe(
        'Banana Bread',
		'A healthy afternoon snack for every occasion.',
		'Snack',
		[
            '4 very ripe bananas',
            '1/3 cup melted coconut oil , or olive oil',
            '1/4 cup Greek yoghurt , or milk',
            '1/4 cup honey , or maple syrup',
            '2 eggs , beaten','1 tsp vanilla essence',
            '1 tsp baking soda',
            'Pinch of salt',
            '1 3/4 cups wholewheat flour'
        ],
		[
            'Preheat oven to 180°C, grease and lightly flour a loaf tin.',
            'In a large mixing bowl, mash the bananas well with a fork, stir in the melted coconut oil and Greek yoghurt. Now stir in the honey, eggs, vanilla essence, baking soda and salt.',
            'Gently stir in the flour until just combined, don’t over mix. Pour the batter into the loaf tin and level out by gently shaking the tin.',
            'Bake in the centre of the oven for 40 to 45 minutes or until a toothpick inserted into the middle of the loaf comes out free of batter.',
            'Remove from the oven and allow to cool completely in the loaf tin, on a wire rack. Turn the bread out onto the wire rack and allow the bottom of the loaf to cool before slicing.',
            'Enjoy!'
        ],   
		[
            'For the best experience, serve with tea or coffee.'
        ],
   		'10 Minutes',
   		'40 Minutes',
        '50 Minutes',
        '10'
    ),
	new Recipe(
		'Cinnamon Doughnuts',
		'A doughnut flavoured to perfection with cinnamon.',
		'Dessert',
		[
			'¾ Cup Milk, Lukewarm',
			'3 Tsp Dried Yeast',
			'2 Cups Plain Flour',
			'2 Egg Yolks',
			'25g Butter, Softened',
			'Vegtable Oil, for deep-frying',
			'1 Tsp Ground Cinnamon',
			'½ Cup White Sugar'
		],
		[
			'Mix together Milk, Yeast and 1 Tbs of white sugar in a small bowl and set aside for 10 minutes or until foamy.',
			'In a seperate bowl mix together the remaining Sugar, Flour, Yolks and Butter.',
			'Add in Yeast mixture and knead or use a dough hook attachment until dough is smooth (~4-5 minutes).',
			'Place dough into a lightly greased bowl.',
			'Cover with a damp cloth and set aside for 45 minutes or untill dough has doubled in size.',
			'Turn on floured surface and knead for 5 minutes or until smooth.',
			'Roll out the dough to 1cm thick and using an 8 cm circle cookie cutter cut the dough into even circles.',
			'Using a 3cm cookie cutter cut a hole in the center of each circle.',
			'Place on baking tray lined with baking paper and cover with cling wrap for 30 minutes.',
			'For the cinnamon sugar stir the Cinnamon and Sugar in a small bowl until combined.',
			'Half fill a small saucepan with oil and place on medium heat until temperature reaches 180°C.',
			'Cook one at a time for 30 seccond on each side or until golden.',
			'Use a teatowl to dry up extra oil and quickly drop into sugar mixture and flip over to coat both sides then place on tray or plate to serve.'
		],
		[],
		'20 Minutes',
		'30 Seconds',
		'1 Hour, 35 Minutes',
		'12'
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
		'Dark Choc Brownies',
		'Perfect for any occasion, these brownies will take your breath away.',
		'Dessert',
		[
			'250g Butter, Softened',
			'3 ½ cup Brown Sugar', 
			'4 Eggs', 
            '1 ½ cup Cocoa Powder', 
            '1 ½ cup All Purpose Flour',
			'½ tsp Salt',
			'1 tsp Baking Powder',
			'1 dash Vanilla Essence'
		],
		[
			'Line a 20cm x 10cm tray, preheat oven to 175°C.',
			'Add the Butter, Sugar, Eggs and Vanilla Essence into a bowl, then Beat',
			'Add the Flour, Cocoa Powder, Salt and Baking Powder, then Mix',
			'Pour into tray. Bake for 35 Minutes. Leave to cool'
		],
		[
			'For an Extra-dark flavour, serve with crushed Lindt Excellence 95% Cocoa Ultimate Dark',
			'Serve with Berries and Cream for a Fresh flavour'
		],
		'20 Minutes',
		'35 Minutes',
		'1 Hour',
		'24'
	),
	new Recipe(
		'Gingerbread House',
		'Enjoy this with your family for a christmas treat.',
		'Festive',
		[
			'125g butter, softened', 
			'½ cup brown sugar', 
			'½ cup golden sugar', 
			'1 egg', 
			'3 cups plain flour', 
			'3 tsp ground ginger*',
			'1 tsp ground cinnamon',
			'½ tsp baking powder',
			'½ tsp bicarbonate of soda',
			'2 ½ cups icing sugar',
			'2 egg whites',
			'¼ tsp lemon juice',
			'assorted lollies'
		],
		[
			'Line 2 baking trays with baking paper, preheat oven to 175°C.',
			'Beat butter and sugar until pale.', 
			'Beat in golden syrup and egg until combined.',
			'Bring dough together with your hands and cover with cling wrap.',
			'Refrigerate dough for 2 hours.',
			'Roll dough flat and cut 4 rectangles (roof and wall) and 2 pentagons (front Wall).*',
			'Bake for 12 minutes or until golden, leave to cool.',
			'To make the icing beat egg whites until foamy then mix in lemon juice.',
			'Beat in the icing sugar 1 tsp at a time until you get your prefered consistancy (This is called Royal Icing).',
			'Put house together with icing and stick on any lollies you like!**'
		],
		['Adjust ginger to taste', '*If you wish to take the easy path you can make a A-Frame with 2 triangles and 2 rectangles.', '*Cut any other parts you wish like doors and windows at this point.', '**Be Creative!'],
		'20 Minutes',
		'12 Minutes',
		'40 Minutes',
		'12'
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
	new Recipe(
		'Meringue',
		'Chewy desert merinuge for a festive desert.',
		'Festive',
		[
			'6 egg whites', 
			'1 ½ cups caster sugar', 
			'1 ½ tsp cornflour', 
			'1 tsp white vinegar', 
			'50g dark cooking chocolate, melted'
		],
		[
			'Line baking tray with baking paper, preheat oven to 150°C', 
			'Wisk egg whtes with eletric mixer until mixture holds.', 
			'Wisk in sugar 1 tbsp at a time for about 5-10 minutes.', 
			'Combine cornflour and vinegar in a seperate bowl then combine with egg mitxure.', 
			'Divide mixture into 18 and spoon onto baking tray 3cm apart.*', 
			'Twirl 1/2 tsp chocolate into each meringue.', 
			'Decrease oven temperature to 120°C and bake for 35-40 minutes.*', 
			'Turn off oven and do not open until completly cooled'
		],
		[
			'You can turn this into a pavlova by placing mixture in a large circle and baking for 1 hour.'
		],
		'15 Minutes',
		'40 Minutes',
		'1 Hour, 15 Minutes',
		'18'
	),
	new Recipe(
		'Pavlova',
		'There\'s no occasion a well-made pavlova can\'t improve',
		'Dessert',
		[
			'4 Egg Whites',
			'1 ¼ Cups Caster Sugar',
			'1 Tsp White Vinegar',
			'1 Tsp Cornflour',
			'1 Tsp Vanilla Extract',
			'350ml Whipping Cream and 2 Tbs Caster Sugar for Icing'
		],
		[
			'Line 2 baking trays with baking paper, preheat oven to 140°C.',
			'Using a pencil, mark out the circumference of a dinner plate on baking papert.',
			'Whisk egg whites with an eletric mixer until stiff peaks form, then whisk in caster sugar, 1 tbsp at a time, until the meringue looks glossy.',
			'Wisk in vinegar, cornflour and vanilla.',
			'Spread the meringue inside the circle, creating a crater by making the sides a little higher than the middle.',
			'Bake for 1 hour, then turn off the heat and let the Pavlova cool completely inside the oven.',
			'When Pavlova is cooled, whip together cream and sugar until fluffy and spead evenly.'
		],
		[
			'Serve with fresh fruit for a sweet and sour experience'
		],
		'25 Minutes',
		'1 Hour',
		'1 Hour, 30 Minutes',
		'8'

	)
];

export default recipes;

