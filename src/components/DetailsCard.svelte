<script>
	import StarsPopularity from './StarsPopularity.svelte';

	export let item = undefined;

	function createSlug(title) {
		if (!title) return 'inconnu';
		return title
			.normalize('NFKD')
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\p{L}\p{N}-]+/gu, '')
			.replace(/-+/g, '-')
			.replace(/^-+|-+$/g, '');
	}

	// Detect if movies or series
	const isMovie = item?.title !== undefined;
	const title = item?.title ?? item?.name ?? 'Titre inconnu';
	const originalTitle = item?.original_title ?? item?.original_name ?? 'Titre original inconnu';
	const overview = item?.overview ?? 'Aucune description disponible.';
	const releaseDate = item?.release_date ?? item?.first_air_date ?? 'Date inconnue';
	const poster = item?.poster_path
		? `https://image.tmdb.org/t/p/w500${item.poster_path}`
		: '/placeholder.jpg';
</script>

{#if item}
	<div class="container mx-auto mt-5 grid grid-cols-1 gap-4 px-4 text-white md:grid-cols-2">
		<div class="mt-10 flex items-center justify-center">
			<img
				src={poster}
				alt={title}
				class="max-h-full w-[400px] max-w-full rounded-lg object-cover shadow-lg"
			/>
		</div>

		<!-- Détails du film ou de la série -->
		<div>
			<div class="mt-10">
				<h2 class="text-center text-4xl font-black text-white">
					{title} <span class="text-xl text-zinc-300">({originalTitle})</span>
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
					Popularité : <StarsPopularity popularity={item.popularity} />
				</h3>
			</div>
		</div>
	</div>
{:else}
	<div class="h-full w-full text-center text-5xl text-white">
		Aucun {isMovie ? 'film' : 'série'} trouvé
	</div>
{/if}
