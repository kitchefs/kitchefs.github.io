
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.29.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev("SvelteDOMInsert", { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev("SvelteDOMInsert", { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev("SvelteDOMRemove", { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
        else
            dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
    }
    function set_data_dev(text, data) {
        data = '' + data;
        if (text.wholeText === data)
            return;
        dispatch_dev("SvelteDOMSetData", { node: text, data });
        text.data = data;
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/components/search_bar.svelte generated by Svelte v3.29.0 */

    const file = "src/components/search_bar.svelte";

    function create_fragment(ctx) {
    	let form;
    	let input;
    	let t0;
    	let button;

    	const block = {
    		c: function create() {
    			form = element("form");
    			input = element("input");
    			t0 = space();
    			button = element("button");
    			button.textContent = "Search";
    			attr_dev(input, "class", "form-control mr-sm-2");
    			attr_dev(input, "type", "text");
    			attr_dev(input, "placeholder", "Search");
    			attr_dev(input, "aria-label", "Search");
    			add_location(input, file, 1, 4, 60);
    			attr_dev(button, "class", "btn btn-secondary my-2 my-sm-0");
    			attr_dev(button, "type", "submit");
    			attr_dev(button, "id", "search-bar-submit");
    			add_location(button, file, 6, 4, 188);
    			attr_dev(form, "class", "form-inline my-2 my-lg-0");
    			attr_dev(form, "id", "search-bar");
    			add_location(form, file, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, form, anchor);
    			append_dev(form, input);
    			append_dev(form, t0);
    			append_dev(form, button);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(form);
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

    function instance($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Search_bar", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Search_bar> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Search_bar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Search_bar",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    /* src/components/navbar.svelte generated by Svelte v3.29.0 */
    const file$1 = "src/components/navbar.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[1] = list[i];
    	return child_ctx;
    }

    // (23:77) {#if item["active"]}
    function create_if_block(ctx) {
    	let span;

    	const block = {
    		c: function create() {
    			span = element("span");
    			span.textContent = "(current)";
    			attr_dev(span, "class", "sr-only");
    			add_location(span, file$1, 22, 98, 859);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, span, anchor);
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(span);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(23:77) {#if item[\\\"active\\\"]}",
    		ctx
    	});

    	return block;
    }

    // (21:12) {#each items as item}
    function create_each_block(ctx) {
    	let li;
    	let a;
    	let t0_value = /*item*/ ctx[1]["name"] + "";
    	let t0;
    	let t1;
    	let a_href_value;
    	let t2;
    	let li_class_value;
    	let if_block = /*item*/ ctx[1]["active"] && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			li = element("li");
    			a = element("a");
    			t0 = text(t0_value);
    			t1 = space();
    			if (if_block) if_block.c();
    			t2 = space();
    			attr_dev(a, "class", "nav-link");
    			attr_dev(a, "href", a_href_value = /*item*/ ctx[1]["href"]);
    			add_location(a, file$1, 22, 20, 781);
    			attr_dev(li, "class", li_class_value = "nav-item " + (/*item*/ ctx[1]["active"] == true ? "active" : ""));
    			add_location(li, file$1, 21, 16, 697);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, li, anchor);
    			append_dev(li, a);
    			append_dev(a, t0);
    			append_dev(a, t1);
    			if (if_block) if_block.m(a, null);
    			append_dev(li, t2);
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*items*/ 1 && t0_value !== (t0_value = /*item*/ ctx[1]["name"] + "")) set_data_dev(t0, t0_value);

    			if (/*item*/ ctx[1]["active"]) {
    				if (if_block) ; else {
    					if_block = create_if_block(ctx);
    					if_block.c();
    					if_block.m(a, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}

    			if (dirty & /*items*/ 1 && a_href_value !== (a_href_value = /*item*/ ctx[1]["href"])) {
    				attr_dev(a, "href", a_href_value);
    			}

    			if (dirty & /*items*/ 1 && li_class_value !== (li_class_value = "nav-item " + (/*item*/ ctx[1]["active"] == true ? "active" : ""))) {
    				attr_dev(li, "class", li_class_value);
    			}
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(li);
    			if (if_block) if_block.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(21:12) {#each items as item}",
    		ctx
    	});

    	return block;
    }

    function create_fragment$1(ctx) {
    	let nav;
    	let a;
    	let t1;
    	let button;
    	let span;
    	let t2;
    	let div;
    	let ul;
    	let t3;
    	let searchbar;
    	let current;
    	let each_value = /*items*/ ctx[0];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	searchbar = new Search_bar({ $$inline: true });

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			a = element("a");
    			a.textContent = "Kitchefs";
    			t1 = space();
    			button = element("button");
    			span = element("span");
    			t2 = space();
    			div = element("div");
    			ul = element("ul");

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t3 = space();
    			create_component(searchbar.$$.fragment);
    			attr_dev(a, "class", "navbar-brand");
    			attr_dev(a, "href", "./index.html");
    			add_location(a, file$1, 6, 4, 163);
    			attr_dev(span, "class", "navbar-toggler-icon");
    			add_location(span, file$1, 15, 8, 485);
    			attr_dev(button, "class", "navbar-toggler");
    			attr_dev(button, "type", "button");
    			attr_dev(button, "data-toggle", "collapse");
    			attr_dev(button, "data-target", "#navbarsExampleDefault");
    			attr_dev(button, "aria-controls", "navbarsExampleDefault");
    			attr_dev(button, "aria-expanded", "false");
    			attr_dev(button, "aria-label", "Toggle navigation");
    			add_location(button, file$1, 7, 4, 224);
    			attr_dev(ul, "class", "navbar-nav mr-auto");
    			add_location(ul, file$1, 19, 8, 615);
    			attr_dev(div, "class", "collapse navbar-collapse");
    			attr_dev(div, "id", "navbarsExampleDefault");
    			add_location(div, file$1, 18, 4, 541);
    			attr_dev(nav, "class", "navbar navbar-expand-md navbar-dark bg-dark fixed-top");
    			add_location(nav, file$1, 5, 0, 91);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, a);
    			append_dev(nav, t1);
    			append_dev(nav, button);
    			append_dev(button, span);
    			append_dev(nav, t2);
    			append_dev(nav, div);
    			append_dev(div, ul);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(ul, null);
    			}

    			append_dev(div, t3);
    			mount_component(searchbar, div, null);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*items*/ 1) {
    				each_value = /*items*/ ctx[0];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(ul, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}

    				each_blocks.length = each_value.length;
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(searchbar.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(searchbar.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    			destroy_each(each_blocks, detaching);
    			destroy_component(searchbar);
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

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Navbar", slots, []);
    	let { items } = $$props;
    	const writable_props = ["items"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Navbar> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    	};

    	$$self.$capture_state = () => ({ SearchBar: Search_bar, items });

    	$$self.$inject_state = $$props => {
    		if ("items" in $$props) $$invalidate(0, items = $$props.items);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [items];
    }

    class Navbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { items: 0 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Navbar",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*items*/ ctx[0] === undefined && !("items" in props)) {
    			console.warn("<Navbar> was created without expected prop 'items'");
    		}
    	}

    	get items() {
    		throw new Error("<Navbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set items(value) {
    		throw new Error("<Navbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/recipe.svelte generated by Svelte v3.29.0 */

    const file$2 = "src/components/recipe.svelte";

    function create_fragment$2(ctx) {
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
    			if (img.src !== (img_src_value = /*image*/ ctx[2])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "width", "100%");
    			attr_dev(img, "height", "200px");
    			attr_dev(img, "alt", /*name*/ ctx[0]);
    			attr_dev(img, "class", "svelte-im00ab");
    			add_location(img, file$2, 25, 8, 544);
    			attr_dev(h3, "class", "card-text svelte-im00ab");
    			add_location(h3, file$2, 27, 12, 647);
    			attr_dev(p, "class", "card-text");
    			add_location(p, file$2, 28, 12, 693);
    			attr_dev(div0, "class", "card-body");
    			add_location(div0, file$2, 26, 8, 611);
    			attr_dev(div1, "onclick", div1_onclick_value = "window.location='" + /*href*/ ctx[4] + "'");
    			attr_dev(div1, "class", "card mb-4 shadow-sm");
    			add_location(div1, file$2, 24, 4, 467);
    			attr_dev(div2, "class", "col-md-4");
    			attr_dev(div2, "item-name", div2_item_name_value = lowercase(/*name*/ ctx[0]));
    			attr_dev(div2, "category-name", div2_category_name_value = lowercase(/*category*/ ctx[1]));
    			add_location(div2, file$2, 23, 0, 372);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function lowercase(x) {
    	x = x.toLowerCase();
    	x = x.replaceAll(" ", "-");
    	return x;
    }

    function instance$2($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
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
    			id: create_fragment$2.name
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

    const file$3 = "src/components/featured_recipe.svelte";

    function create_fragment$3(ctx) {
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
    			attr_dev(strong, "class", "d-inline-block mb-2 text-success");
    			add_location(strong, file$3, 36, 12, 875);
    			attr_dev(h3, "class", "mb-0 svelte-pn740c");
    			add_location(h3, file$3, 37, 12, 956);
    			attr_dev(hr, "class", "svelte-pn740c");
    			add_location(hr, file$3, 38, 12, 997);
    			attr_dev(p, "class", "mb-auto");
    			add_location(p, file$3, 39, 12, 1016);
    			attr_dev(div0, "class", "col p-4 d-flex flex-column position-static");
    			add_location(div0, file$3, 35, 8, 806);
    			if (img.src !== (img_src_value = /*image*/ ctx[2])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "width", "150px");
    			attr_dev(img, "height", "100%");
    			attr_dev(img, "alt", /*name*/ ctx[0]);
    			attr_dev(img, "class", "svelte-pn740c");
    			add_location(img, file$3, 42, 12, 1129);
    			attr_dev(div1, "class", "col-auto d-none d-lg-block");
    			add_location(div1, file$3, 41, 8, 1076);
    			attr_dev(div2, "onclick", div2_onclick_value = "window.location='" + /*href*/ ctx[4] + "'");
    			attr_dev(div2, "class", "row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative");
    			add_location(div2, file$3, 32, 4, 633);
    			attr_dev(div3, "class", "col-md-6");
    			attr_dev(div3, "item-name", div3_item_name_value = lowercase$1(/*name*/ ctx[0]));
    			attr_dev(div3, "category-name", div3_category_name_value = lowercase$1(/*category*/ ctx[1]));
    			add_location(div3, file$3, 31, 0, 538);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
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
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function lowercase$1(x) {
    	x = x.toLowerCase();
    	x = x.replacAall(" ", "-");
    	return x;
    }

    function instance$3($$self, $$props, $$invalidate) {
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

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
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
    			id: create_fragment$3.name
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

    /* src/App.svelte generated by Svelte v3.29.0 */
    const file$4 = "src/App.svelte";

    function create_fragment$4(ctx) {
    	let link0;
    	let link1;
    	let script0;
    	let script0_src_value;
    	let script1;
    	let script1_src_value;
    	let script2;
    	let script2_src_value;
    	let t0;
    	let navbar;
    	let t1;
    	let div2;
    	let div1;
    	let div0;
    	let featuredrecipe0;
    	let t2;
    	let featuredrecipe1;
    	let t3;
    	let recipe;
    	let current;

    	navbar = new Navbar({
    			props: {
    				items: [
    					{
    						name: "Home",
    						href: "./index.html",
    						active: true
    					},
    					{ name: "Epic", href: "#", active: false }
    				]
    			},
    			$$inline: true
    		});

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
    			create_component(navbar.$$.fragment);
    			t1 = space();
    			div2 = element("div");
    			div1 = element("div");
    			div0 = element("div");
    			create_component(featuredrecipe0.$$.fragment);
    			t2 = space();
    			create_component(featuredrecipe1.$$.fragment);
    			t3 = space();
    			create_component(recipe.$$.fragment);
    			document.title = "Kitchefs";
    			attr_dev(link0, "href", "https://fonts.googleapis.com/css?family=Playfair+Display:600,900");
    			attr_dev(link0, "rel", "stylesheet");
    			add_location(link0, file$4, 15, 4, 356);
    			attr_dev(link1, "rel", "stylesheet");
    			attr_dev(link1, "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
    			attr_dev(link1, "integrity", "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z");
    			attr_dev(link1, "crossorigin", "anonymous");
    			add_location(link1, file$4, 19, 4, 501);
    			script0.defer = true;
    			if (script0.src !== (script0_src_value = "https://code.jquery.com/jquery-3.5.1.slim.min.js")) attr_dev(script0, "src", script0_src_value);
    			attr_dev(script0, "integrity", "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj");
    			attr_dev(script0, "crossorigin", "anonymous");
    			add_location(script0, file$4, 26, 4, 778);
    			script1.defer = true;
    			if (script1.src !== (script1_src_value = "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js")) attr_dev(script1, "src", script1_src_value);
    			attr_dev(script1, "integrity", "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN");
    			attr_dev(script1, "crossorigin", "anonymous");
    			add_location(script1, file$4, 32, 4, 1007);
    			script2.defer = true;
    			if (script2.src !== (script2_src_value = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js")) attr_dev(script2, "src", script2_src_value);
    			attr_dev(script2, "integrity", "sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV");
    			attr_dev(script2, "crossorigin", "anonymous");
    			add_location(script2, file$4, 38, 4, 1255);
    			attr_dev(div0, "class", "row mb-2");
    			add_location(div0, file$4, 51, 8, 1694);
    			attr_dev(div1, "class", "row");
    			add_location(div1, file$4, 50, 4, 1668);
    			attr_dev(div2, "class", "container svelte-424vga");
    			add_location(div2, file$4, 49, 0, 1640);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			append_dev(document.head, link0);
    			append_dev(document.head, link1);
    			append_dev(document.head, script0);
    			append_dev(document.head, script1);
    			append_dev(document.head, script2);
    			insert_dev(target, t0, anchor);
    			mount_component(navbar, target, anchor);
    			insert_dev(target, t1, anchor);
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div1);
    			append_dev(div1, div0);
    			mount_component(featuredrecipe0, div0, null);
    			append_dev(div0, t2);
    			mount_component(featuredrecipe1, div0, null);
    			append_dev(div0, t3);
    			mount_component(recipe, div0, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(featuredrecipe0.$$.fragment, local);
    			transition_in(featuredrecipe1.$$.fragment, local);
    			transition_in(recipe.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(navbar.$$.fragment, local);
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
    			destroy_component(navbar, detaching);
    			if (detaching) detach_dev(t1);
    			if (detaching) detach_dev(div2);
    			destroy_component(featuredrecipe0);
    			destroy_component(featuredrecipe1);
    			destroy_component(recipe);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Navbar, Recipe, FeaturedRecipe: Featured_recipe });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    const app = new App({
    	target: document.body
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map
