<script>
    export let name;
    export let description;
    export let image;
    export let ingredients;
    export let steps;
    export let tips;
</script>

<div class="container">
    <h3>{name}</h3>
    <p>{description}</p>
    <img src={image} alt={name} />

    {#each ingredients as item}
        <p>{item}</p>
    {/each}

    {#each steps as step}
        <p>{step}</p>
    {/each}

    {#each tips as tip}
        <p>{tip}</p>
    {/each}
</div>
