<script>
	// Propriétés reçues par le composant
	export let currentPage = 1;
	export let totalPages = 1;
	export let baseUrl = '';
</script>

<nav class="mt-8 flex items-center justify-center space-x-2">
	<a
		href={`${baseUrl}?page=${currentPage - 1}`}
		data-sveltekit-reload
		class="rounded-lg bg-red-500 px-6 py-2 font-medium text-white transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-none"
	>
		Précédent
	</a>

	<span class="px-3 py-2 text-white">
		Page {currentPage} sur {totalPages}
	</span>

	<a
		href={`${baseUrl}?page=${currentPage + 1}`}
		data-sveltekit-reload
		class="rounded-lg bg-red-500 px-6 py-2 font-medium text-white transition-colors hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:outline-none"
	>
		Suivant
	</a>
</nav>
