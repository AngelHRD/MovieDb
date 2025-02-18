<script>
	import MovieCard from '../components/MovieCard.svelte';
	import Pagination from '../components/Pagination.svelte';

	export let data = { movies: [], currentPage: 1, totalPages: 1 };
	let { movies, currentPage, totalPages } = data;
</script>

<svelte:head>
	<title>Movie-DB | Recommandations</title>
</svelte:head>

<div>
	<h1 class="my-10 text-center text-4xl font-black text-white">NOS RECOMMANDATIONS</h1>
</div>

<Pagination {currentPage} {totalPages} />

<div class="container mx-auto mt-5 px-6">
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each movies as data}
			<MovieCard {data} />
		{/each}
	</div>
</div>

<Pagination {currentPage} {totalPages} />
