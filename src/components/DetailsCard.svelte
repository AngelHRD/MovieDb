<script>
	import StarsPopularity from './StarsPopularity.svelte';
	import { createSlug } from '$utils/createSlug';

	export let data = {};
	const media = data.movie || data.serie;
	console.log('detailcard', media);

	// Detect if movies or series
	const isMovie = media?.title !== undefined;
	const mediatitle = media?.title ?? media?.name ?? 'Titre inconnu';
	const originalTitle = media?.original_title ?? media?.original_name ?? 'Titre original inconnu';
	const overview = media?.overview ?? 'Aucune description disponible.';
	const releaseDate = media?.release_date ?? media?.first_air_date ?? 'Date inconnue';
	const poster = media?.poster_path
		? `https://image.tmdb.org/t/p/w500${media.poster_path}`
		: 'https://placehold.co/400x400';
	const popularity = media?.popularity ?? 0;
</script>

{#if data}
	<div class="container mx-auto mt-5 grid grid-cols-1 gap-4 px-4 text-white md:grid-cols-2">
		<div class="mt-10 flex items-center justify-center">
			<img
				src={poster}
				alt={mediatitle}
				class="max-h-full w-[400px] max-w-full rounded-lg object-cover shadow-lg"
			/>
		</div>

		<!-- Détails du film ou de la série -->
		<div>
			<div class="mt-10">
				<h2 class="text-center text-4xl font-black text-white">
					{mediatitle} <span class="text-xl text-zinc-300">({originalTitle})</span>
				</h2>
			</div>

			<div>
				<h3 class="mt-10 mb-2 text-xl font-semibold">Résumé :</h3>
				<p>{overview}</p>
			</div>

			<div class="mt-7">
				<p class="text-lg">
					<span class="font-semibold">Sortie :</span>
					{releaseDate}
				</p>
			</div>

			<div class="mt-7">
				<h3 class="text-lg font-semibold">
					Popularité : <StarsPopularity {popularity} />
				</h3>
			</div>
		</div>
	</div>
{:else}
	<div class="h-full w-full text-center text-5xl text-white">
		Aucun {isMovie ? 'film' : 'série'} trouvé
	</div>
{/if}
