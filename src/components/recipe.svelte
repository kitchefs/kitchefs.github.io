<script>
    export let name;
    export let category;
    export let image;
    export let description;
    export let href;

    function lowercase(x) {
        x = x.toLowerCase();
        x = x.split(' ').join('-');
        return x;
    }
</script>

<style>
    img {
        object-fit: cover;
    } 
    h3 {
        font-family: "Playfair Display";
        font-size: 150%;
    }
    .item-card {
        height: 370px;
    }
</style>

<div class="col-md-4" item-name="{lowercase(name)}" category-name="{lowercase(category)}">
    <div onclick="window.location='{href}'" class="card mb-4 shadow-sm item-card">
        <img src={image} width="100%" height="200px" alt={name} />
        <div class="card-body">
            <h3 class="card-text">{name}</h3>
            <p class="card-text">{description}</p>
        </div>
    </div>
</div>
