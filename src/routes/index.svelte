<script>
    import Recipe         from "../components/recipe.svelte";
    import FeaturedRecipe from "../components/featured_recipe.svelte";
</script>

<svelte:head>
    <title>Kitchefs</title>
    <!-- Google Fonts CSS -->
    <link 
        href="https://fonts.googleapis.com/css?family=Playfair+Display:600,900" 
        rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link 
        rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous">

    <!-- Bootstrap JS -->
    <script 
        defer
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous">
    </script>
    <script
        defer
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous">
    </script>
    <script
        defer
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous">
    </script>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="row mb-2">
            <FeaturedRecipe
                name={'Hot Cross Buns'}
                category={'Festive'}
                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hot_cross_buns_-_fig_and_pecan.jpg/1200px-Hot_cross_buns_-_fig_and_pecan.jpg'}
                description={'A perfect Easter snack for the whole family.'}
                href={'#'} />
            
            <FeaturedRecipe
                name={'Blueberry Muffins'}
                category={'Sweet'}
                image={'https://i2.wp.com/smittenkitchen.com/wp-content/uploads//2010/08/perfect-blueberry-muffins.jpg'}
                description={'A sweet treat famous for its aroma.'}
                href={'#'} />
            
            <Recipe
                name={'Caramel Slice'}
                category={'Sweet'}
                image={'https://www.sweetestmenu.com/wp-content/uploads/2020/04/caramelslice2a.jpg'}
                description={'Perfect for any sweet-tooth, this Caramal Slice is bound to turn a few heads!'}
                href={'#'} />
        </div>
    </div>
</div>