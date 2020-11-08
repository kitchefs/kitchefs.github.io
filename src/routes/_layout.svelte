<script>
	import Nav from '../components/nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer class="footer">
	<div class="container">
		<p style="text-align: center;"><a href="https://mailchi.mp/5aaa86aeacdd/kitchefs-newsletter">Subscribe to our Newsletter</a></p>
	</div>
</footer>