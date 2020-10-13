<script>
    import RecipePage         from "../components/recipe_page.svelte";
</script>

<div class="container">
    <div class="row">
        <div class="row mb-2">
            <RecipePage 
                name={'Hot Cross Bun'}
                description={'A perfect Easter snack for the whole family.'}
                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hot_cross_buns_-_fig_and_pecan.jpg/1200px-Hot_cross_buns_-_fig_and_pecan.jpg'}
                ingredients={['Chocolate', 'hello']}
                steps={['Mash the chocolate', 'enjoy']}
                tips={['Have fun']} />
        </div>
    </div>
</div>