<script>
	// `item` est une propriété fournie par le parent
	export let item = undefined;

	// Log pour vérifier la réception des données
	console.log('Item reçu dans SearchCard:', item);

	// Image de fond si disponible
	const imageUrl = item?.backdrop_path
		? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
		: 'https://via.placeholder.com/500x300?text=Image+non+disponible';
</script>

{#if item}
	<div
		class="relative w-full max-w-md transform overflow-hidden rounded-xl bg-gray-900 shadow-lg transition hover:scale-105 hover:shadow-2xl"
	>
		<!-- Image -->
		<img
			class="h-48 w-full object-cover opacity-80"
			src={imageUrl}
			alt="Image de {item.name ?? item.title}"
		/>

		<!-- Contenu -->
		<div class="p-4">
			<h3 class="mb-2 text-xl font-bold text-white">
				{item.name ?? item.title ?? 'Nom inconnu'}
			</h3>
			<p class="text-sm text-gray-300">ID : <span class="font-semibold">{item.id}</span></p>
			<p class="text-sm text-gray-400">
				Type : <span class="uppercase">{item.media_type ?? 'Type inconnu'}</span>
			</p>

			<!-- Description (limité à 3 lignes) -->
			<p class="mt-2 line-clamp-3 text-sm text-gray-400">
				{item.overview || 'Aucune description disponible.'}
			</p>

			<!-- Bouton d'action -->
			<div class="mt-4">
				<a
					href="#"
					class="inline-block rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
				>
					Découvrir
				</a>
			</div>
		</div>
	</div>
{:else}
	<p class="text-center text-red-500">Aucune donnée reçue.</p>
{/if}
