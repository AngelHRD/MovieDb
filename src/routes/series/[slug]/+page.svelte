<script>
	import DetailsCard from '$components/DetailsCard.svelte';
	export let data = {};

	// Check if there is at least one movie
	const title = data.serie ?? { title: 'Film not found' };
</script>

<DetailsCard {data} />

<svelte:head>
	<title>Movie-DB | Films | {title}</title>
</svelte:head>
