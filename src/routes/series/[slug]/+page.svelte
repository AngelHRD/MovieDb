<script>
	import DetailsCard from '../../../components/DetailsCard.svelte';
	export let data = undefined;

	// Détection automatique : film ou série ?
	const item = data?.movies?.[0] ?? data?.series?.[0];
</script>

<DetailsCard {item} />
