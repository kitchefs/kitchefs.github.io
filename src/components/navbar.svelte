<script>
    export let items;
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Kitchefs</a>
    <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            {#each items as item}
                <li class="nav-item {item['active'] == true ? 'active' : '' }">
                    <a class="nav-link" href="{item["href"]}">{item["name"]} {#if item["active"]} <span class="sr-only">(current)</span> {/if}</a>
                </li>
            {/each}
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search" />
            <button
                class="btn btn-secondary my-2 my-sm-0"
                type="submit">Search</button>
        </form>
    </div>
</nav>
