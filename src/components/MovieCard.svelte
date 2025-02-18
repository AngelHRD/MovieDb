<script>
	import { createSlug } from '$utils/createSlug';

	export let data = {}; // Movie or TV show

	const isMovie = data?.title !== undefined;
	const mediaTitle = data?.title ?? data?.name ?? 'Titre inconnu';
	const mediaId = data?.id ?? 'inconnu';
	const slug = createSlug(mediaTitle, mediaId);
	const posterUrl = data?.poster_path
		? `https://image.tmdb.org/t/p/w500${data.poster_path}`
		: 'https://placehold.co/400x400';
	const rating = data?.vote_average !== undefined ? data.vote_average.toFixed(1) : 'N/A';
	const mediaUrl = `/${isMovie ? 'films' : 'series'}/${slug}`;
</script>

<div class="flex flex-col overflow-hidden rounded-xl bg-zinc-800 text-white shadow-lg">
	<div class="relative aspect-[2/3] w-full">
		<a href={mediaUrl} class="block h-full w-full">
			<img src={posterUrl} alt={mediaTitle} class="h-full w-full object-cover" />
		</a>
	</div>

	<div class="flex flex-1 flex-col p-4">
		<h3
			class="flex min-h-[3rem] items-center justify-center text-center text-xl font-bold text-white"
		>
			{mediaTitle}
		</h3>

		<div class="mt-auto flex items-center justify-between">
			<div
				class="flex h-14 w-14 items-center justify-center rounded-full border-4 border-red-500 bg-zinc-900 shadow-md"
			>
				<span class="text-lg font-bold">{rating}</span>
			</div>

			<a
				href={mediaUrl}
				class="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white transition-all hover:bg-red-600 focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-none"
			>
				Voir {isMovie ? 'le film' : 'la série'}
			</a>
		</div>
	</div>
</div>
