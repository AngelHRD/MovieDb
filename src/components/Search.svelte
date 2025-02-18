<script>
	import { Search } from '$components/Search.svelte';
	import { onMount } from 'svelte';

	let query = '';
	let results = [];
	let showResults = false;

	async function handleSearch(fetch) {
		if (query.length > 2) {
			const data = await searchMovies(fetch, query);
			results = data?.results || [];
			showResults = results.length > 0;
		} else {
			results = [];
			showResults = false;
		}
	}

	function selectMovie(movie) {
		query = movie.title;
		showResults = false;
	}
</script>
