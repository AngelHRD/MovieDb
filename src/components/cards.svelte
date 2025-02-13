<script>
	import { onMount } from 'svelte';

	let movies = [];
	let isLoading = true;
	let error = null;

	onMount(async () => {});
</script>

{#if isLoading}
	<p>Chargement...</p>
{:else if error}
	<p>Erreur: {error.message}</p>
{:else}
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each movies as movie}
				<div class="flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-md">
					<img
						src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
						alt={movie?.title}
						class="h-64 w-full object-cover"
					/>
					<h3 class="mt-4 text-center text-xl font-bold">{movie?.title}</h3>
				</div>
			{/each}
		</div>
	</div>
{/if}
