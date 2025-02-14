<script>
	import MovieCard from '$components/MovieCard.svelte';
	import Pagination from '$components/Pagination.svelte';

	export let data = undefined;
	console.log(data);
	const { movies, currentPage, totalPages } = data;
</script>

<svelte:head>
	<title>Movie-DB | Séries</title>
</svelte:head>

<div>
	<h1 class="my-10 text-center text-4xl font-black text-white">NOS FILMS</h1>
</div>

<Pagination {currentPage} {totalPages} />

<div class="container mx-auto mt-5 px-4">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each movies as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</div>

<Pagination {currentPage} {totalPages} />
