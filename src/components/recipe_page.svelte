<script>
    export let name;
    export let image;
    export let ingredients;
    export let steps;
    export let tips;
    export let preparation_time;
    export let cook_time;
    export let total_time;
</script>

<style>
    img {
        object-fit: cover;
    } 
    h3 {
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
        border-radius: 0;
    }

    .badge:first-child {
        border-radius: 2em 0 0 2em;
        margin-left: 20px;
    }

    .badge:last-child {
        border-radius: 0 2em 2em 0;
        margin-right: 20px
    }
</style>


<div class="container-fluid">
    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 position-relative">
        <div class="col-auto d-none d-lg-block">
            <img src={image} width="150px" height="100%" alt={name} />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">{name}</h3>
            <hr />
            <div class="row">
                <span class="col badge badge-pill badge-success">Preparation Time: {preparation_time}</span>
                <span class="col badge badge-pill badge-warning">Cook Time: {cook_time}</span>
                <span class="col badge badge-pill badge-danger">Total Time: {total_time}</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h5>Tips & Hints</h5>
            <ul>
                {#each tips as tip}
                    <li>{tip}</li>
                {/each}
            </ul>
        </div>
        <div class="col">
            <h5>Ingredients</h5>
            <ul>
                {#each ingredients as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </div>
    </div>
    <hr />
    <div class="row">
        <div class="col">
            <h5>Method</h5>
            <ol>
                {#each steps as step}
                    <li>{step}</li>
                {/each}
            </ol>
        </div>
    </div>
</div>
