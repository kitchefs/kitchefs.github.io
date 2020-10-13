<script>
    export let name;
    export let description;
    export let image;
    export let ingredients;
    export let steps;
    export let tips;
</script>

<div class="container">
        <div>
          <img src="{image}" alt="{name}" width="25%" style="float: left; padding-right: 10px;">
          <div>
            <h3>{name}</h3>
            <button class="btn btn-outline-primary">Preparation: 30 minutes</button>
            <button class="btn btn-outline-primary">Cook Time: 45 minutes</button>
            <button class="btn btn-outline-primary">Total Time: 6 hours, 15 minutes</button>

            <div>
              <p>Tips & Hints:</p>
                {#each tips as tip}
                    <ul>{tip}</ul>
                {/each}
            </div>

          </div>
        </div>

        <div style="float: left;width: 25%; border-style: solid; border-width: 1px; padding: 5px;">
          <h5>Ingredients</h5>
            {#each ingredients as item}
                <p>{item}</p>
            {/each}
      </div>

      <div style="float: right; width: 75%; padding: 5px;">
        <p>Method</p>
        <ol>
            {#each steps as step}
                <li>{step}</li>
            {/each}
        </ol>
      </div>
</div>
