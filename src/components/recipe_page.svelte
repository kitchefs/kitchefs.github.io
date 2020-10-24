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
        })
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
    .ff3e00 {
        color: #ff3e00 !important;
    }
    .save-button {
        cursor: pointer;
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
            <img src={image} width="150px" height="150px" alt={name} />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
            <div class="d-flex justify-content-between row">
                <h3 class="mb-0 pl-3">{name}</h3>
                <h3 class="mb-0 pr-3 save-button" id="save-button"><span class="material-icons {saved ? 'ff3e00' : undefined}">{#if saved}favorite{:else}favorite_outline{/if}</span></h3>
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
            <input type="checkbox" class="custom-control-input" id="checkbox-{lowercase(item)}">
            <label class="custom-control-label" for="checkbox-{lowercase(item)}">{item}</label>
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
{#if tips.length !== 0}
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
{/if}
