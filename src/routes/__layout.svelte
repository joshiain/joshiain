<script>
	import '$src/styles/reset.css';
	import '$src/styles/theme.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		max-width: 30rem;
		flex-direction: column;
		margin: auto;
		padding: 2rem;
		width: 100%;
		border-width: 0.1rem;
		border-color: var(--accent-color);
	}
</style>
