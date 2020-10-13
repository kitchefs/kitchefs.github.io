<script>
    import RecipePage from "../components/recipe_page.svelte";
</script>

<div class="container">
    <div class="row">
        <RecipePage 
            name={'Hot Cross Bun'}
            description={'A perfect Easter snack for the whole family.'}
            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hot_cross_buns_-_fig_and_pecan.jpg/1200px-Hot_cross_buns_-_fig_and_pecan.jpg'}
            ingredients={['Chocolate', 'hello']}
            steps={['Mash the chocolate', 'enjoy']}
            tips={['Have fun']}
            preparation_time={'35 Minutes'}
            cook_time={'20 Minutes'}
            total_time={'6 Hours, 5 Minutes'}/>
    </div>
</div>