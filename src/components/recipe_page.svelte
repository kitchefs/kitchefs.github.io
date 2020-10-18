<script>
    import { onMount }  from 'svelte';

    export let name;
    export let image;
    export let ingredients;
    export let steps;
    export let tips;
    export let preparation_time;
    export let cook_time;
    export let total_time;

    function lowercase(x) {
        x = x.toLowerCase();
        x = x.split(' ').join('-');
        return x;
    }

    let saved = false;

    let saved_items;

    onMount(() => {
        document.getElementById("save-button").addEventListener("click", () => {
            saved = !saved;

            if (saved) {
                if (localStorage.hasOwnProperty("kitchefs_saved_items")) {
                    saved_items = localStorage.getItem("kitchefs_saved_item");
                    saved_items = JSON.parse(saved_items);
                    saved_items.push(name);
                    localStorage.setItem("kitchefs_saved_items", JSON.stringify(saved_items));
                } else {
                    saved_items = []
                    saved_items.push(name);
                    localStorage.setItem("kitchefs_saved_items", JSON.stringify(saved_items));
                }
            } else {
                saved_items = localStorage.getItem("kitchefs_saved_item");
                saved_items = JSON.parse(saved_items);
                saved_items = saved_items.filter(e => e !== name)
                localStorage.setItem("kitchefs_saved_items", JSON.stringify(saved_items));
            }
        });
    });
</script>

<style>
    img {
        object-fit: cover;
    }
    h3, h5 {
        font-family: "Playfair Display";
        font-size: 150%;
    }
    hr {
        border: 0;
        clear: both;
        display: block;
        width: 96%;
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
    }
    .badge {
        margin: 5px;
    }
    .badge-ff3e00 {
        background-color: #ff3e00 !important;
    }
    .save-button {
        cursor: pointer;
    }
</style>

<div class="container-fluid">
    <div
        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 position-relative">
        <div class="col-auto d-none d-lg-block">
            <img src={image} width="150px" height="150px" alt={name} />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
            <div class="d-flex justify-content-between row">
                <h3 class="mb-0 pl-3">{name}</h3>
                <h3 class="mb-0 pr-3 save-button" id="save-button"><span class="material-icons">{#if saved}favorite{:else}favorite_outline{/if}</span></h3>
            </div>
            <hr />
            <div class="row">
                <span class="col badge badge-pill badge-secondary">Preparation
                    Time:
                    {preparation_time}</span>
                <span
                    class="col badge badge-pill badge-secondary">Cook
                    Time:
                    {cook_time}</span>
                <span class="col badge badge-pill badge-primary badge-ff3e00">Total Time:
                    {total_time}</span>
            </div>
        </div>
    </div>
    <div>
        <div class="col" />
        <h5>Ingredients</h5>
        {#each ingredients as item}
            <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkbox-{item}">
            <label class="custom-control-label" for="checkbox-{item}">{item}</label>
          </div>
        {/each}
    </div>
</div>
<hr />
<div>
    <div class="col">
        <h5>Method</h5>
        <ol>
            {#each steps as step}
                <li>{step}</li>
            {/each}
        </ol>
    </div>
</div>
<hr />
<div>
    <div class="col">
        <h5>Tips</h5>
        <ul>
            {#each tips as tip}
                <li>{tip}</li>
            {/each}
        </ul>
    </div>
</div>
