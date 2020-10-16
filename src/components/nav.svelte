<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}
	[aria-current] {
		position: relative;
		display: inline-block;
	}
	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}
	a {
		color: #ffffff !important;
		text-decoration: none !important;
		padding: 1em 0.5em !important;
		display: block !important;
	}
    @media screen and (max-width: 768px) {
        nav {
		    padding: 0.7em;
	    }
    }
    .kitchefs-brand {
        font-family: "Playfair Display";
        font-size: 1.2em;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin: 0 !important;
        padding-left: 0.4em !important;
        padding-right: 0.6em !important;
    }
</style>

<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
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
        <a class="kitchefs-brand" href=".">Kitchefs</a>
        <ul class="navbar-nav mr-auto">
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
			<li><a aria-current="{segment === 'saved_items' ? 'page' : undefined}" href="saved_items">Saved</a></li>
			<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		</ul>
		<form class="form-inline my-2 my-lg-0" id="search-bar">
			<input
				class="form-control mr-sm-2"
				type="text"
				placeholder="Search"
				aria-label="Search" />
			<button class="btn btn-secondary my-2 my-sm-0" type="submit" id="search-bar-submit">Search</button>
		</form>
    </div>
</nav>