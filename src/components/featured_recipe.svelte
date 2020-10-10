<script>
    export let name;
    export let category;
    export let image_src;
    export let description;
    export let href;

    function lowercase(x) {
        x = x.toLowerCase();
        x = x.replaceall(" ", "-")
        return x;
    }
</script>

<style>
    img {
        object-fit: cover;
    }
    h3 {
        font-family: "Playfair Display";
    }
    hr {
        border: 0;
        clear: both;
        display: block;
        width: 96%;
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
    }
</style>

<div class="col-md-6" item-name="{lowercase(name)}" category-name="{lowercase(category)}">
    <div
        onclick="window.location='{href}'"
        class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">{category}</strong>
            <h3 class="mb-0">{name}</h3>
            <hr />
            <p class="mb-auto">{description}</p>
        </div>
        <div class="col-auto d-none d-lg-block">
            <img src={image_src} width="150px" height="100%" alt={name} />
        </div>
    </div>
</div>
