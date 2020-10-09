<script>
    export let name;
    export let image_src;
    export let description;
    export let href;
</script>

<div class="col-md-4">
    <div onclick="window.location='{href}'" class="card mb-4 shadow-sm">
        <img src="{image_src}" width="100%" height="200px" alt="{name}">
        <div class="card-body">
            <h3 class="card-text">{name}</h3>
            <p class="card-text">{description}</p>
        </div>
    </div>
</div>

<style>
    img {
        object-fit: cover;
    }
</style>
