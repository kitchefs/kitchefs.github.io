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
    hr {
        border: 0;
        clear: both;
        display: block;
        width: 96%;
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    .text-ff3e00 {
        color: #ff3e00;
    }
</style>

<div class="col-md-6" item-name="{lowercase(name)}" category-name="{lowercase(category)}">
    <a href="{href}">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative featured-item-card">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-ff3e00">{category}</strong>
                <h3 class="mb-0">{name}</h3>
                <hr />
                <p class="mb-auto">{description}</p>
            </div>
            <div class="col-auto d-none d-lg-block">
                <img src={image} width="150px" height="100%" alt={name} />
            </div>
        </div>
    </a>
</div>
