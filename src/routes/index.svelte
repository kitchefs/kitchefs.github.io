<script>
    import Recipe         from "../components/recipe.svelte";
    import FeaturedRecipe from "../components/featured_recipe.svelte";
</script>

<svelte:head>
    <title>Kitchefs</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="row mb-2">
            <FeaturedRecipe
                name={'Hot Cross Buns'}
                category={'Festive'}
                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hot_cross_buns_-_fig_and_pecan.jpg/1200px-Hot_cross_buns_-_fig_and_pecan.jpg'}
                description={'A perfect Easter snack for the whole family.'}
                href={'recipe'} />
            
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
                description={'Perfect for any sweet-tooth, this Caramel Slice is bound to turn a few heads!'}
                href={'#'} />

                <Recipe
                name={'Caramel Slice'}
                category={'Sweet'}
                image={'https://www.sweetestmenu.com/wp-content/uploads/2020/04/caramelslice2a.jpg'}
                description={'Perfect for any sweet-tooth, this Caramel Slice is bound to turn a few heads!'}
                href={'#'} />

                <Recipe
                name={'Caramel Slice'}
                category={'Sweet'}
                image={'https://www.sweetestmenu.com/wp-content/uploads/2020/04/caramelslice2a.jpg'}
                description={'Perfect for any sweet-tooth, this Caramel Slice is bound to turn a few heads!'}
                href={'#'} />

                <Recipe
                name={'Caramel Slice'}
                category={'Sweet'}
                image={'https://www.sweetestmenu.com/wp-content/uploads/2020/04/caramelslice2a.jpg'}
                description={'Perfect for any sweet-tooth, this Caramel Slice is bound to turn a few heads!'}
                href={'#'} />
        </div>
    </div>
</div>