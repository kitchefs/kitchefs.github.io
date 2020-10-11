import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as claim_space, g as claim_text, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_data_dev, o as noop, p as create_component, q as query_selector_all, r as claim_component, u as mount_component, w as transition_in, x as transition_out, y as destroy_component } from './client.3031f80d.js';

/* src/components/recipe.svelte generated by Svelte v3.29.0 */

const file = "src/components/recipe.svelte";

function create_fragment(ctx) {
	let div2;
	let div1;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let h3;
	let t1;
	let t2;
	let p;
	let t3;
	let div1_onclick_value;
	let div2_item_name_value;
	let div2_category_name_value;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h3 = element("h3");
			t1 = text(/*name*/ ctx[0]);
			t2 = space();
			p = element("p");
			t3 = text(/*description*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", {
				class: true,
				"item-name": true,
				"category-name": true
			});

			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { onclick: true, class: true });
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", {
				src: true,
				width: true,
				height: true,
				alt: true,
				class: true
			});

			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, /*name*/ ctx[0]);
			h3_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, /*description*/ ctx[3]);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*image*/ ctx[2])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "100%");
			attr_dev(img, "height", "200px");
			attr_dev(img, "alt", /*name*/ ctx[0]);
			attr_dev(img, "class", "svelte-im00ab");
			add_location(img, file, 25, 8, 544);
			attr_dev(h3, "class", "card-text svelte-im00ab");
			add_location(h3, file, 27, 12, 647);
			attr_dev(p, "class", "card-text");
			add_location(p, file, 28, 12, 693);
			attr_dev(div0, "class", "card-body");
			add_location(div0, file, 26, 8, 611);
			attr_dev(div1, "onclick", div1_onclick_value = "window.location='" + /*href*/ ctx[4] + "'");
			attr_dev(div1, "class", "card mb-4 shadow-sm");
			add_location(div1, file, 24, 4, 467);
			attr_dev(div2, "class", "col-md-4");
			attr_dev(div2, "item-name", div2_item_name_value = lowercase(/*name*/ ctx[0]));
			attr_dev(div2, "category-name", div2_category_name_value = lowercase(/*category*/ ctx[1]));
			add_location(div2, file, 23, 0, 372);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h3);
			append_dev(h3, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*image*/ 4 && img.src !== (img_src_value = /*image*/ ctx[2])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*name*/ 1) {
				attr_dev(img, "alt", /*name*/ ctx[0]);
			}

			if (dirty & /*name*/ 1) set_data_dev(t1, /*name*/ ctx[0]);
			if (dirty & /*description*/ 8) set_data_dev(t3, /*description*/ ctx[3]);

			if (dirty & /*href*/ 16 && div1_onclick_value !== (div1_onclick_value = "window.location='" + /*href*/ ctx[4] + "'")) {
				attr_dev(div1, "onclick", div1_onclick_value);
			}

			if (dirty & /*name*/ 1 && div2_item_name_value !== (div2_item_name_value = lowercase(/*name*/ ctx[0]))) {
				attr_dev(div2, "item-name", div2_item_name_value);
			}

			if (dirty & /*category*/ 2 && div2_category_name_value !== (div2_category_name_value = lowercase(/*category*/ ctx[1]))) {
				attr_dev(div2, "category-name", div2_category_name_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function lowercase(x) {
	x = x.toLowerCase();
	x = x.split(" ").join("-");
	return x;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Recipe", slots, []);
	let { name } = $$props;
	let { category } = $$props;
	let { image } = $$props;
	let { description } = $$props;
	let { href } = $$props;
	const writable_props = ["name", "category", "image", "description", "href"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Recipe> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
		if ("image" in $$props) $$invalidate(2, image = $$props.image);
		if ("description" in $$props) $$invalidate(3, description = $$props.description);
		if ("href" in $$props) $$invalidate(4, href = $$props.href);
	};

	$$self.$capture_state = () => ({
		name,
		category,
		image,
		description,
		href,
		lowercase
	});

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
		if ("image" in $$props) $$invalidate(2, image = $$props.image);
		if ("description" in $$props) $$invalidate(3, description = $$props.description);
		if ("href" in $$props) $$invalidate(4, href = $$props.href);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, category, image, description, href];
}

class Recipe extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			name: 0,
			category: 1,
			image: 2,
			description: 3,
			href: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Recipe",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !("name" in props)) {
			console.warn("<Recipe> was created without expected prop 'name'");
		}

		if (/*category*/ ctx[1] === undefined && !("category" in props)) {
			console.warn("<Recipe> was created without expected prop 'category'");
		}

		if (/*image*/ ctx[2] === undefined && !("image" in props)) {
			console.warn("<Recipe> was created without expected prop 'image'");
		}

		if (/*description*/ ctx[3] === undefined && !("description" in props)) {
			console.warn("<Recipe> was created without expected prop 'description'");
		}

		if (/*href*/ ctx[4] === undefined && !("href" in props)) {
			console.warn("<Recipe> was created without expected prop 'href'");
		}
	}

	get name() {
		throw new Error("<Recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get category() {
		throw new Error("<Recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set category(value) {
		throw new Error("<Recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get image() {
		throw new Error("<Recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set image(value) {
		throw new Error("<Recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get description() {
		throw new Error("<Recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set description(value) {
		throw new Error("<Recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/featured_recipe.svelte generated by Svelte v3.29.0 */

const file$1 = "src/components/featured_recipe.svelte";

function create_fragment$1(ctx) {
	let div3;
	let div2;
	let div0;
	let strong;
	let t0;
	let t1;
	let h3;
	let t2;
	let t3;
	let hr;
	let t4;
	let p;
	let t5;
	let t6;
	let div1;
	let img;
	let img_src_value;
	let div2_onclick_value;
	let div3_item_name_value;
	let div3_category_name_value;

	const block = {
		c: function create() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			strong = element("strong");
			t0 = text(/*category*/ ctx[1]);
			t1 = space();
			h3 = element("h3");
			t2 = text(/*name*/ ctx[0]);
			t3 = space();
			hr = element("hr");
			t4 = space();
			p = element("p");
			t5 = text(/*description*/ ctx[3]);
			t6 = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", {
				class: true,
				"item-name": true,
				"category-name": true
			});

			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { onclick: true, class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			strong = claim_element(div0_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t0 = claim_text(strong_nodes, /*category*/ ctx[1]);
			strong_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, /*name*/ ctx[0]);
			h3_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			hr = claim_element(div0_nodes, "HR", { class: true });
			t4 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, /*description*/ ctx[3]);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", {
				src: true,
				width: true,
				height: true,
				alt: true,
				class: true
			});

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(strong, "class", "d-inline-block mb-2 text-success");
			add_location(strong, file$1, 36, 12, 875);
			attr_dev(h3, "class", "mb-0 svelte-pn740c");
			add_location(h3, file$1, 37, 12, 956);
			attr_dev(hr, "class", "svelte-pn740c");
			add_location(hr, file$1, 38, 12, 997);
			attr_dev(p, "class", "mb-auto");
			add_location(p, file$1, 39, 12, 1016);
			attr_dev(div0, "class", "col p-4 d-flex flex-column position-static");
			add_location(div0, file$1, 35, 8, 806);
			if (img.src !== (img_src_value = /*image*/ ctx[2])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "150px");
			attr_dev(img, "height", "100%");
			attr_dev(img, "alt", /*name*/ ctx[0]);
			attr_dev(img, "class", "svelte-pn740c");
			add_location(img, file$1, 42, 12, 1129);
			attr_dev(div1, "class", "col-auto d-none d-lg-block");
			add_location(div1, file$1, 41, 8, 1076);
			attr_dev(div2, "onclick", div2_onclick_value = "window.location='" + /*href*/ ctx[4] + "'");
			attr_dev(div2, "class", "row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative");
			add_location(div2, file$1, 32, 4, 633);
			attr_dev(div3, "class", "col-md-6");
			attr_dev(div3, "item-name", div3_item_name_value = lowercase$1(/*name*/ ctx[0]));
			attr_dev(div3, "category-name", div3_category_name_value = lowercase$1(/*category*/ ctx[1]));
			add_location(div3, file$1, 31, 0, 538);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, strong);
			append_dev(strong, t0);
			append_dev(div0, t1);
			append_dev(div0, h3);
			append_dev(h3, t2);
			append_dev(div0, t3);
			append_dev(div0, hr);
			append_dev(div0, t4);
			append_dev(div0, p);
			append_dev(p, t5);
			append_dev(div2, t6);
			append_dev(div2, div1);
			append_dev(div1, img);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*category*/ 2) set_data_dev(t0, /*category*/ ctx[1]);
			if (dirty & /*name*/ 1) set_data_dev(t2, /*name*/ ctx[0]);
			if (dirty & /*description*/ 8) set_data_dev(t5, /*description*/ ctx[3]);

			if (dirty & /*image*/ 4 && img.src !== (img_src_value = /*image*/ ctx[2])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*name*/ 1) {
				attr_dev(img, "alt", /*name*/ ctx[0]);
			}

			if (dirty & /*href*/ 16 && div2_onclick_value !== (div2_onclick_value = "window.location='" + /*href*/ ctx[4] + "'")) {
				attr_dev(div2, "onclick", div2_onclick_value);
			}

			if (dirty & /*name*/ 1 && div3_item_name_value !== (div3_item_name_value = lowercase$1(/*name*/ ctx[0]))) {
				attr_dev(div3, "item-name", div3_item_name_value);
			}

			if (dirty & /*category*/ 2 && div3_category_name_value !== (div3_category_name_value = lowercase$1(/*category*/ ctx[1]))) {
				attr_dev(div3, "category-name", div3_category_name_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function lowercase$1(x) {
	x = x.toLowerCase();
	x = x.split(" ").join("-");
	return x;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Featured_recipe", slots, []);
	let { name } = $$props;
	let { category } = $$props;
	let { image } = $$props;
	let { description } = $$props;
	let { href } = $$props;
	const writable_props = ["name", "category", "image", "description", "href"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Featured_recipe> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
		if ("image" in $$props) $$invalidate(2, image = $$props.image);
		if ("description" in $$props) $$invalidate(3, description = $$props.description);
		if ("href" in $$props) $$invalidate(4, href = $$props.href);
	};

	$$self.$capture_state = () => ({
		name,
		category,
		image,
		description,
		href,
		lowercase: lowercase$1
	});

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("category" in $$props) $$invalidate(1, category = $$props.category);
		if ("image" in $$props) $$invalidate(2, image = $$props.image);
		if ("description" in $$props) $$invalidate(3, description = $$props.description);
		if ("href" in $$props) $$invalidate(4, href = $$props.href);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, category, image, description, href];
}

class Featured_recipe extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			name: 0,
			category: 1,
			image: 2,
			description: 3,
			href: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Featured_recipe",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !("name" in props)) {
			console.warn("<Featured_recipe> was created without expected prop 'name'");
		}

		if (/*category*/ ctx[1] === undefined && !("category" in props)) {
			console.warn("<Featured_recipe> was created without expected prop 'category'");
		}

		if (/*image*/ ctx[2] === undefined && !("image" in props)) {
			console.warn("<Featured_recipe> was created without expected prop 'image'");
		}

		if (/*description*/ ctx[3] === undefined && !("description" in props)) {
			console.warn("<Featured_recipe> was created without expected prop 'description'");
		}

		if (/*href*/ ctx[4] === undefined && !("href" in props)) {
			console.warn("<Featured_recipe> was created without expected prop 'href'");
		}
	}

	get name() {
		throw new Error("<Featured_recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<Featured_recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get category() {
		throw new Error("<Featured_recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set category(value) {
		throw new Error("<Featured_recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get image() {
		throw new Error("<Featured_recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set image(value) {
		throw new Error("<Featured_recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get description() {
		throw new Error("<Featured_recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set description(value) {
		throw new Error("<Featured_recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Featured_recipe>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Featured_recipe>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.29.0 */
const file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let link0;
	let link1;
	let script0;
	let script0_src_value;
	let script1;
	let script1_src_value;
	let script2;
	let script2_src_value;
	let t0;
	let div2;
	let div1;
	let div0;
	let featuredrecipe0;
	let t1;
	let featuredrecipe1;
	let t2;
	let recipe;
	let current;

	featuredrecipe0 = new Featured_recipe({
			props: {
				name: "Hot Cross Buns",
				category: "Festive",
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hot_cross_buns_-_fig_and_pecan.jpg/1200px-Hot_cross_buns_-_fig_and_pecan.jpg",
				description: "A perfect Easter snack for the whole family.",
				href: "#"
			},
			$$inline: true
		});

	featuredrecipe1 = new Featured_recipe({
			props: {
				name: "Blueberry Muffins",
				category: "Sweet",
				image: "https://i2.wp.com/smittenkitchen.com/wp-content/uploads//2010/08/perfect-blueberry-muffins.jpg",
				description: "A sweet treat famous for its aroma.",
				href: "#"
			},
			$$inline: true
		});

	recipe = new Recipe({
			props: {
				name: "Caramel Slice",
				category: "Sweet",
				image: "https://www.sweetestmenu.com/wp-content/uploads/2020/04/caramelslice2a.jpg",
				description: "Perfect for any sweet-tooth, this Caramal Slice is bound to turn a few heads!",
				href: "#"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			link0 = element("link");
			link1 = element("link");
			script0 = element("script");
			script1 = element("script");
			script2 = element("script");
			t0 = space();
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			create_component(featuredrecipe0.$$.fragment);
			t1 = space();
			create_component(featuredrecipe1.$$.fragment);
			t2 = space();
			create_component(recipe.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1xa0vkb\"]", document.head);
			link0 = claim_element(head_nodes, "LINK", { href: true, rel: true });

			link1 = claim_element(head_nodes, "LINK", {
				rel: true,
				href: true,
				integrity: true,
				crossorigin: true
			});

			script0 = claim_element(head_nodes, "SCRIPT", {
				defer: true,
				src: true,
				integrity: true,
				crossorigin: true
			});

			var script0_nodes = children(script0);
			script0_nodes.forEach(detach_dev);

			script1 = claim_element(head_nodes, "SCRIPT", {
				defer: true,
				src: true,
				integrity: true,
				crossorigin: true
			});

			var script1_nodes = children(script1);
			script1_nodes.forEach(detach_dev);

			script2 = claim_element(head_nodes, "SCRIPT", {
				defer: true,
				src: true,
				integrity: true,
				crossorigin: true
			});

			var script2_nodes = children(script2);
			script2_nodes.forEach(detach_dev);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(featuredrecipe0.$$.fragment, div0_nodes);
			t1 = claim_space(div0_nodes);
			claim_component(featuredrecipe1.$$.fragment, div0_nodes);
			t2 = claim_space(div0_nodes);
			claim_component(recipe.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Kitchefs";
			attr_dev(link0, "href", "https://fonts.googleapis.com/css?family=Playfair+Display:600,900");
			attr_dev(link0, "rel", "stylesheet");
			add_location(link0, file$2, 14, 4, 297);
			attr_dev(link1, "rel", "stylesheet");
			attr_dev(link1, "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
			attr_dev(link1, "integrity", "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z");
			attr_dev(link1, "crossorigin", "anonymous");
			add_location(link1, file$2, 18, 4, 442);
			script0.defer = true;
			if (script0.src !== (script0_src_value = "https://code.jquery.com/jquery-3.5.1.slim.min.js")) attr_dev(script0, "src", script0_src_value);
			attr_dev(script0, "integrity", "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj");
			attr_dev(script0, "crossorigin", "anonymous");
			add_location(script0, file$2, 25, 4, 719);
			script1.defer = true;
			if (script1.src !== (script1_src_value = "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js")) attr_dev(script1, "src", script1_src_value);
			attr_dev(script1, "integrity", "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN");
			attr_dev(script1, "crossorigin", "anonymous");
			add_location(script1, file$2, 31, 4, 948);
			script2.defer = true;
			if (script2.src !== (script2_src_value = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js")) attr_dev(script2, "src", script2_src_value);
			attr_dev(script2, "integrity", "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV");
			attr_dev(script2, "crossorigin", "anonymous");
			add_location(script2, file$2, 37, 4, 1196);
			attr_dev(div0, "class", "row mb-2");
			add_location(div0, file$2, 47, 8, 1512);
			attr_dev(div1, "class", "row");
			add_location(div1, file$2, 46, 4, 1486);
			attr_dev(div2, "class", "container svelte-424vga");
			add_location(div2, file$2, 45, 0, 1458);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link0);
			append_dev(document.head, link1);
			append_dev(document.head, script0);
			append_dev(document.head, script1);
			append_dev(document.head, script2);
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			mount_component(featuredrecipe0, div0, null);
			append_dev(div0, t1);
			mount_component(featuredrecipe1, div0, null);
			append_dev(div0, t2);
			mount_component(recipe, div0, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(featuredrecipe0.$$.fragment, local);
			transition_in(featuredrecipe1.$$.fragment, local);
			transition_in(recipe.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(featuredrecipe0.$$.fragment, local);
			transition_out(featuredrecipe1.$$.fragment, local);
			transition_out(recipe.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(link0);
			detach_dev(link1);
			detach_dev(script0);
			detach_dev(script1);
			detach_dev(script2);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			destroy_component(featuredrecipe0);
			destroy_component(featuredrecipe1);
			destroy_component(recipe);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Recipe, FeaturedRecipe: Featured_recipe });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjQxZDYzMjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlY2lwZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlZF9yZWNpcGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IG5hbWU7XG4gICAgZXhwb3J0IGxldCBjYXRlZ29yeTtcbiAgICBleHBvcnQgbGV0IGltYWdlO1xuICAgIGV4cG9ydCBsZXQgZGVzY3JpcHRpb247XG4gICAgZXhwb3J0IGxldCBocmVmO1xuXG4gICAgZnVuY3Rpb24gbG93ZXJjYXNlKHgpIHtcbiAgICAgICAgeCA9IHgudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgeCA9IHguc3BsaXQoJyAnKS5qb2luKCctJyk7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaW1nIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiIGl0ZW0tbmFtZT1cIntsb3dlcmNhc2UobmFtZSl9XCIgY2F0ZWdvcnktbmFtZT1cIntsb3dlcmNhc2UoY2F0ZWdvcnkpfVwiPlxuICAgIDxkaXYgb25jbGljaz1cIndpbmRvdy5sb2NhdGlvbj0ne2hyZWZ9J1wiIGNsYXNzPVwiY2FyZCBtYi00IHNoYWRvdy1zbVwiPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjIwMHB4XCIgYWx0PXtuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRleHRcIj57bmFtZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IG5hbWU7XG4gICAgZXhwb3J0IGxldCBjYXRlZ29yeTtcbiAgICBleHBvcnQgbGV0IGltYWdlO1xuICAgIGV4cG9ydCBsZXQgZGVzY3JpcHRpb247XG4gICAgZXhwb3J0IGxldCBocmVmO1xuXG4gICAgZnVuY3Rpb24gbG93ZXJjYXNlKHgpIHtcbiAgICAgICAgeCA9IHgudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgeCA9IHguc3BsaXQoJyAnKS5qb2luKCctJyk7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgaW1nIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIGgzIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiO1xuICAgIH1cbiAgICBociB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgIH1cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIGl0ZW0tbmFtZT1cIntsb3dlcmNhc2UobmFtZSl9XCIgY2F0ZWdvcnktbmFtZT1cIntsb3dlcmNhc2UoY2F0ZWdvcnkpfVwiPlxuICAgIDxkaXZcbiAgICAgICAgb25jbGljaz1cIndpbmRvdy5sb2NhdGlvbj0ne2hyZWZ9J1wiXG4gICAgICAgIGNsYXNzPVwicm93IG5vLWd1dHRlcnMgYm9yZGVyIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIGZsZXgtbWQtcm93IG1iLTQgc2hhZG93LXNtIGgtbWQtMjUwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcC00IGQtZmxleCBmbGV4LWNvbHVtbiBwb3NpdGlvbi1zdGF0aWNcIj5cbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJkLWlubGluZS1ibG9jayBtYi0yIHRleHQtc3VjY2Vzc1wiPntjYXRlZ29yeX08L3N0cm9uZz5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cIm1iLTBcIj57bmFtZX08L2gzPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1iLWF1dG9cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hdXRvIGQtbm9uZSBkLWxnLWJsb2NrXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IHdpZHRoPVwiMTUwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgYWx0PXtuYW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgUmVjaXBlICAgICAgICAgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVjaXBlLnN2ZWx0ZVwiO1xuICAgIGltcG9ydCBGZWF0dXJlZFJlY2lwZSBmcm9tIFwiLi4vY29tcG9uZW50cy9mZWF0dXJlZF9yZWNpcGUuc3ZlbHRlXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIC5jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPktpdGNoZWZzPC90aXRsZT5cbiAgICA8IS0tIEdvb2dsZSBGb250cyBDU1MgLS0+XG4gICAgPGxpbmsgXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTo2MDAsOTAwXCIgXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICA8IS0tIEJvb3RzdHJhcCBDU1MgLS0+XG4gICAgPGxpbmsgXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4yL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1KY0tiOHEzaXFKNjFnTlY5S0diOHRoU3NOanBTTDBuOFBBUm45SHVaT25JeE4waG9QK1ZtbURHTU41dDlVSjBaXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cblxuICAgIDwhLS0gQm9vdHN0cmFwIEpTIC0tPlxuICAgIDxzY3JpcHQgXG4gICAgICAgIGRlZmVyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjUuMS5zbGltLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1EZlhkejJodFBIMGxzU1NzNW5DVHB1ai96eTRDK09HcGFtb0ZWeTM4TVZCbkUrSWJiVllVZXcrT3JDWGFSa2ZqXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cbiAgICA8L3NjcmlwdD5cbiAgICA8c2NyaXB0XG4gICAgICAgIGRlZmVyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMS9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCJcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTkvcmVGVEdBVzgzRVcyUkR1MlMwVkthSXphcDNINjZsWkg4MVBvWWxGaGJHVSs2QlpwNkc3bml1NzM1U2s3bE5cIlxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxuICAgIDwvc2NyaXB0PlxuICAgIDxzY3JpcHRcbiAgICAgICAgZGVmZXJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC41LjIvanMvYm9vdHN0cmFwLm1pbi5qc1wiXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1CNGd0MWpyR0M3Smg0QWdUUFNkVXRPQnZmTzhzaHVmNTdCYWdocUZmUGxZeG9mdkw4L0tVRWZZaUpPTU1WK3JWXCJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj5cbiAgICA8L3NjcmlwdD5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItMlwiPlxuICAgICAgICAgICAgPEZlYXR1cmVkUmVjaXBlXG4gICAgICAgICAgICAgICAgbmFtZT17J0hvdCBDcm9zcyBCdW5zJ31cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17J0Zlc3RpdmUnfVxuICAgICAgICAgICAgICAgIGltYWdlPXsnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9hL2FjL0hvdF9jcm9zc19idW5zXy1fZmlnX2FuZF9wZWNhbi5qcGcvMTIwMHB4LUhvdF9jcm9zc19idW5zXy1fZmlnX2FuZF9wZWNhbi5qcGcnfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsnQSBwZXJmZWN0IEVhc3RlciBzbmFjayBmb3IgdGhlIHdob2xlIGZhbWlseS4nfVxuICAgICAgICAgICAgICAgIGhyZWY9eycjJ30gLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPEZlYXR1cmVkUmVjaXBlXG4gICAgICAgICAgICAgICAgbmFtZT17J0JsdWViZXJyeSBNdWZmaW5zJ31cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17J1N3ZWV0J31cbiAgICAgICAgICAgICAgICBpbWFnZT17J2h0dHBzOi8vaTIud3AuY29tL3NtaXR0ZW5raXRjaGVuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvLzIwMTAvMDgvcGVyZmVjdC1ibHVlYmVycnktbXVmZmlucy5qcGcnfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsnQSBzd2VldCB0cmVhdCBmYW1vdXMgZm9yIGl0cyBhcm9tYS4nfVxuICAgICAgICAgICAgICAgIGhyZWY9eycjJ30gLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFJlY2lwZVxuICAgICAgICAgICAgICAgIG5hbWU9eydDYXJhbWVsIFNsaWNlJ31cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17J1N3ZWV0J31cbiAgICAgICAgICAgICAgICBpbWFnZT17J2h0dHBzOi8vd3d3LnN3ZWV0ZXN0bWVudS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvY2FyYW1lbHNsaWNlMmEuanBnJ31cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17J1BlcmZlY3QgZm9yIGFueSBzd2VldC10b290aCwgdGhpcyBDYXJhbWFsIFNsaWNlIGlzIGJvdW5kIHRvIHR1cm4gYSBmZXcgaGVhZHMhJ31cbiAgICAgICAgICAgICAgICBocmVmPXsnIyd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il0sIm5hbWVzIjpbImxvd2VyY2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQTJCbUMsR0FBSTs7OzZCQUNMLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FEVixHQUFJOzs7Ozs0Q0FDTCxHQUFXOzs7Ozs7Ozs4Q0FIM0IsR0FBSzs7O2lDQUFtQyxHQUFJOzs7Ozs7Ozs7aUZBRDFCLEdBQUk7Ozs7c0RBRE4sU0FBUyxVQUFDLEdBQUk7OERBQW9CLFNBQVMsY0FBQyxHQUFROzs7Ozs7Ozs7Ozs7Ozs7O3FFQUVwRSxHQUFLOzs7OztrQ0FBbUMsR0FBSTs7O3FEQUUzQixHQUFJO21FQUNMLEdBQVc7OzBHQUpULEdBQUk7Ozs7OEVBRE4sU0FBUyxVQUFDLEdBQUk7Ozs7MEZBQW9CLFNBQVMsY0FBQyxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBaEJ6RSxTQUFTLENBQUMsQ0FBQztDQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVc7Q0FDakIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1FBQ2xCLENBQUM7Ozs7OztPQVRELElBQUk7T0FDSixRQUFRO09BQ1IsS0FBSztPQUNMLFdBQVc7T0FDWCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkMrQjJDLEdBQVE7OztzQkFDeEMsR0FBSTs7Ozs7NkJBRUYsR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBSG1CLEdBQVE7Ozs7O3NDQUN4QyxHQUFJOzs7Ozs7OzRDQUVGLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3JCLEdBQUs7OztpQ0FBbUMsR0FBSTs7Ozs7aUZBVC9CLEdBQUk7Ozs7c0RBRkxBLFdBQVMsVUFBQyxHQUFJOzhEQUFvQkEsV0FBUyxjQUFDLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkRBS3hCLEdBQVE7cURBQ3hDLEdBQUk7bUVBRUYsR0FBVzs7cUVBR3JCLEdBQUs7Ozs7O2tDQUFtQyxHQUFJOzs7MEdBVC9CLEdBQUk7Ozs7OEVBRkxBLFdBQVMsVUFBQyxHQUFJOzs7OzBGQUFvQkEsV0FBUyxjQUFDLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F4QnpFQSxXQUFTLENBQUMsQ0FBQztDQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVc7Q0FDakIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1FBQ2xCLENBQUM7Ozs7OztPQVRELElBQUk7T0FDSixRQUFRO09BQ1IsS0FBSztPQUNMLFdBQVc7T0FDWCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNENHLGdCQUFnQjtjQUNaLFNBQVM7V0FDWix3SUFBd0k7aUJBQ2xJLDhDQUE4QztVQUNyRCxHQUFHOzs7Ozs7O1VBR0gsbUJBQW1CO2NBQ2YsT0FBTztXQUNWLGdHQUFnRztpQkFDMUYscUNBQXFDO1VBQzVDLEdBQUc7Ozs7Ozs7VUFHSCxlQUFlO2NBQ1gsT0FBTztXQUNWLDRFQUE0RTtpQkFDdEUsK0VBQStFO1VBQ3RGLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
