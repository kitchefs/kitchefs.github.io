<script>
    import {saved_items} from "../store.js";
    import {onMount} from "svelte";

    export let name;
    export let image;
    export let ingredients;
    export let steps;
    export let tips;
    export let preparation_time;
    export let cook_time;
    export let total_time;
    export let serves;

    function lowercase(x) {
        x = x.toLowerCase();
        x = x.split(' ').join('-');
        return x;
    }

    let saved = $saved_items.includes(lowercase(name));

    onMount(() => {
        document.getElementById("save-button").addEventListener("click", () => {
            if ($saved_items.includes(lowercase(name))) {
                $saved_items.splice($saved_items.indexOf(lowercase(name)), 1);
                $saved_items = $saved_items;
            } else {
                $saved_items = [...$saved_items, lowercase(name)];
            }

            saved = !saved;
        });
    });
</script>

<style>
    img {
        object-fit: cover;
    }
    h3, h5 {
        font-family: "Playfair Display";
        font-size: 140%;
    }
    .badge {
        margin: 5px;
    }
    .badge-ff3e00 {
        background-color: #ff3e00 !important;
    }
    .ff3e00 {
        color: #ff3e00 !important;
    }
    .save-button {
        cursor: pointer;
        margin-right: 10px;
    }
    .save-button:hover {
        color: #ff3e00 !important;
    }
    .dl-button {
        cursor: pointer;
        margin-left: 10px;
    }
    .dl-button, .save-button, .item_name {
        padding-right: 0.5rem !important;
        padding-left: 0.5rem !important;
    }
    .custom-control-label:before {
        background-color: inherit;
    }
    .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
        background-color: #ff3e00;
        border-color: #ff3e00;
    }
    .custom-checkbox .custom-control-input:focus~.custom-control-label::before{
        box-shadow: 0 0 0 0.2rem rgba(255, 64, 0, 0.2); 
        border-color: #ff3e00;
    }
    .custom-control-input:active~.custom-control-label::before {
        background-color: rgba(255, 64, 0, 0.2);
        border-color: #ff3e00;
    }
</style>

<div class="container-fluid">
    <div
        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 position-relative">
        <div class="col-auto d-none d-lg-block">
            <img src={image} width="150px" height="100%" alt={name} />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
            <div class="d-flex justify-content-md-between justify-content-center text-md-left text-center flex-md-row flex-column row">
                <h3 class="mb-0 pl-3 item-name">{name}</h3>
                <hr class="d-md-none hide-dl">
                <div class="d-flex justify-content-md-between justify-content-center row">
                    <h3 class="mb-0 pr-3 dl-button hide-dl" id="dl-button"><a href="../pdf/{lowercase(name)}.pdf"><span class="material-icons">get_app</span></a></h3>
                    <h3 class="mb-0 pr-3 save-button hide-dl" id="save-button"><span class="material-icons {saved ? 'ff3e00' : undefined}">{#if saved}favorite{:else}favorite_outline{/if}</span></h3>
                </div>
                
            </div>
            <hr />
            <div class="row">
                <span class="col badge badge-pill badge-secondary">Serves: {serves}</span>
                <span class="col badge badge-pill badge-secondary">Preparation Time: {preparation_time}</span>
                <span class="col badge badge-pill badge-secondary">Cook Time: {cook_time}</span>
            </div>
            <div class="row">
                <span class="col badge badge-pill badge-primary badge-ff3e00">Total Time: {total_time}</span>
            </div>
        </div>
    </div>
    <div>
        <div class="col" />
        <h5>Ingredients</h5>
        {#each ingredients as item}
            <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="checkbox-{lowercase(item)}">
            <label class="custom-control-label" for="checkbox-{lowercase(item)}">{@html item}</label>
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
                <li>{@html step}</li>
            {/each}
        </ol>
    </div>
</div>
{#if tips.length !== 0}
    <hr />
    <div>
        <div class="col">
            <h5>Tips</h5>
            <ul>
                {#each tips as tip}
                    <li>{@html tip}</li>
                {/each}
            </ul>
        </div>
    </div>
{/if}
