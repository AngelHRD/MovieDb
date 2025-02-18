<script>
	import SearchCard from '$components/searchCard.svelte';
	export let data = undefined;

	const search = data?.search?.results ?? [];
	const currentPage = data?.currentPage ?? 1;
	const totalPages = data?.totalPages ?? 1;
</script>

<h2 class="text-white">Résultats de recherche :</h2>

{#if search}
	{#each search as item}
		<p class="text-white">{item.name ?? item.title ?? 'Nom inconnu'}</p>
		<SearchCard {item} />
	{/each}
{:else}
	<p>Aucun résultat trouvé.</p>
{/if}
