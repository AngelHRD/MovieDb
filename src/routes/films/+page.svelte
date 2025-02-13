<script>
	import Pagination from '../../components/Pagination.svelte';

	// Ces props sont injectées via le load function dans +page.js
	export let data;
	const { movies, currentPage, totalPages } = data;

	function createSlug(title) {
		return title
			.normalize('NFKD')
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\p{L}\p{N}-]+/gu, '')
			.replace(/-+/g, '-')
			.replace(/^-+|-+$/g, '');
	}
</script>

<svelte:head>
	<title>Movie-DB | Films</title>
</svelte:head>

<div>
	<h1 class="my-10 text-center text-4xl font-black text-white">NOS FILMS</h1>
</div>

<Pagination {currentPage} {totalPages} />

<div class="container mx-auto mt-5 px-4">
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each movies as movie}
			{@const slug = createSlug(movie.title)}
			<div class="flex flex-col rounded-lg bg-zinc-800 text-white shadow-lg">
				<div class="relative aspect-[2/3] w-full">
					<a href={`/films/${slug}`}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
							alt={movie?.title}
							class="absolute h-full w-full rounded-t-lg object-cover"
						/>
					</a>
				</div>

				<div class="flex flex-col">
					<div class="flex h-20 flex-col justify-center">
						<h3 class="mt-2 text-center text-2xl font-bold">
							{movie?.title}
						</h3>
					</div>

					<div class="flex w-full items-center justify-between p-4">
						<div
							class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-500 bg-zinc-900"
						>
							<span class="font-bold">{movie?.vote_average}</span>
						</div>

						<a
							href={`/films/${slug}`}
							class="rounded-lg bg-red-500 px-6 py-2 font-medium text-white transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-none"
						>
							Voir le film
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<Pagination {currentPage} {totalPages} />
