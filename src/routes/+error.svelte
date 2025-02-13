<script>
	export let error;
	export let status;
</script>

<svelte:head>
	<title>Movie-DB | Erreur {status}</title>
	<style>
		nav,
		footer {
			display: none !important;
		}
	</style>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center bg-zinc-900 p-4 text-white">
	<div class="text-center">
		<h1 class="mb-4 text-5xl font-bold">Erreur {status}</h1>
		<p class="mb-6 text-xl">
			{error?.message || 'Oups, une erreur est survenue !'}
		</p>
		<a href="/" class="rounded bg-red-500 px-6 py-3 transition-colors hover:bg-red-600">
			Retour à l'accueil
		</a>
	</div>
</div>
