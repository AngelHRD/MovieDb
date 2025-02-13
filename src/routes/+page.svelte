<script>
	import Pagination from '../components/Pagination.svelte';
	import MovieCard from '../components/MovieCard.svelte';

	export let data = undefined;
	const { movies, currentPage, totalPages } = data;
</script>

<svelte:head>
	<title>Movie-DB | Recommandations</title>
</svelte:head>

<div class="my-10 text-center">
	<h1 class="text-5xl font-extrabold text-white drop-shadow-md">Nos Recommandations</h1>
</div>

<Pagination {currentPage} {totalPages} />

<div class="container mx-auto mt-8 px-6">
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>

<Pagination {currentPage} {totalPages} />
