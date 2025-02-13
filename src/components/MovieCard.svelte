<script>
	export let movie = undefined;
	export let serie = undefined;

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

	// Déterminer si c'est un film ou une série
	const isMovie = movie !== undefined;
	const data = isMovie ? movie : serie;

	const title = data?.title ?? data?.name;
	const slug = createSlug(title);
	const poster = data?.poster_path
		? `https://image.tmdb.org/t/p/w500${data.poster_path}`
		: '/placeholder.jpg';
	const vote = data?.vote_average !== undefined ? data.vote_average.toFixed(1) : 'N/A';
	const detailUrl = isMovie ? `/films/${slug}` : `/series/${slug}`;
</script>

<div
	class="flex flex-col overflow-hidden rounded-xl bg-zinc-800 text-white shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
>
	<div class="relative aspect-[2/3] w-full">
		<a href={detailUrl} class="block h-full w-full">
			<img src={poster} alt={title} class="h-full w-full object-cover" />
		</a>
	</div>

	<div class="flex flex-1 flex-col p-4">
		<h3
			class="flex min-h-[3rem] items-center justify-center text-center text-xl font-bold text-white"
		>
			{title}
		</h3>

		<div class="mt-auto flex items-center justify-between">
			<div
				class="flex h-14 w-14 items-center justify-center rounded-full border-4 border-red-500 bg-zinc-900 shadow-md"
			>
				<span class="text-lg font-bold">{vote}</span>
			</div>

			<a
				href={detailUrl}
				class="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white transition-all hover:bg-red-600 focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-none"
			>
				Voir {isMovie ? 'le film' : 'la série'}
			</a>
		</div>
	</div>
</div>
