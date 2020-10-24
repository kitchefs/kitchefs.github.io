import {writable} from "svelte/store";

export let saved_items = writable([]);

if (typeof window !== "undefined") {
    if (localStorage.getItem("kitchefs") === null) {
        localStorage.setItem("kitchefs", JSON.stringify([]));
    }

    saved_items = writable(JSON.parse(localStorage.getItem("kitchefs")));

    saved_items.subscribe(val => localStorage.setItem("kitchefs", JSON.stringify(val)));
}

