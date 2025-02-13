<script>
	export let data = undefined;
	// const movie = data.movies.find((m) => m.slug === params.slug);
	const movie = data?.movies[0];

	console.log(data.movies);
</script>

{#if movie}
	<div class="container mx-auto mt-5 grid grid-cols-2 gap-4 px-4 text-white">
		<div class="mt-10 flex items-center justify-center">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
				alt={movie?.title}
				class="max-h-full w-[400px] max-w-full rounded-lg object-cover shadow-lg"
			/>
		</div>
		<div>
			<div class="mt-10">
				<h2 class="text-center text-4xl font-black text-white">
					{movie?.title} <span class="text-xl text-zinc-300">({movie?.original_title})</span>
				</h2>
			</div>

			<div>
				<h3 class="mt-10 mb-2 text-xl font-semibold">Résumé :</h3>
				<p>{movie.overview}</p>
			</div>

			<div class="mt-10">
				<p class="text-lg">
					<span class="font-semibold">Sortie :</span>
					{movie.release_date}
				</p>
			</div>
		</div>
	</div>
{:else}
	<div class="h-full w-full text-center text-5xl text-white">Aucun film trouvé</div>
{/if}
