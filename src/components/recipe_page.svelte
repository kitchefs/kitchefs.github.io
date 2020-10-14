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
</style>

<div class="container-fluid">
    <div
        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 position-relative">
        <div class="col-auto d-none d-lg-block">
            <img src={image} width="150px" height="100%" alt={name} />
        </div>
        <div class="col p-4 d-flex flex-column position-static">
            <h3 class="mb-0">{name}</h3>
            <hr />
            <div class="row">
                <span class="col badge badge-pill badge-secondary">Preparation
                    Time:
                    {preparation_time}</span>
                <span
                    class="col badge badge-pill badge-secondary">Cook
                    Time:
                    {cook_time}</span>
                <span class="col badge badge-pill badge-primary">Total Time:
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
