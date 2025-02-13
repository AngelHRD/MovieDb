<script>
	let isOpen = false;
	let darkMode = false;

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<nav class="bg-zinc-900">
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-bold text-white">Movie-DB</a>
			</div>

			<!-- Barre de recherche  -->
			<div class="hidden flex-1 justify-center px-4 md:flex">
				<div class="relative w-full max-w-md">
					<input
						type="text"
						placeholder="Recherche..."
						class="w-full rounded-md bg-zinc-700 py-2 pr-10 pl-4 text-white placeholder-zinc-400 focus:bg-zinc-600 focus:outline-none"
					/>
					<div class=" absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
						<svg
							class="h-5 w-5 text-zinc-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>
				</div>
			</div>

			<!-- Menu et Dark Mode Toggle -->
			<div class="flex items-center">
				<!-- Liens Desktop -->
				<div class="hidden items-center space-x-4 md:flex">
					<a
						href="/"
						class="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white"
						>Accueil</a
					>
					<a
						href="/films"
						class="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white"
						>Films</a
					>
					<a
						href="/série"
						class="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white"
						>Série</a
					>
				</div>

				<!-- Dark Mode Toggle -->
				<button
					on:click={toggleDarkMode}
					class="ml-4 text-zinc-300 hover:text-white focus:outline-none"
				>
					{#if darkMode}
						<!-- Icône soleil -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 cursor-pointer"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
							<path
								fill-rule="evenodd"
								d="M10 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zm4.22 2.22a1 1 0 010 1.42l-1.42 1.42a1 1 0 11-1.42-1.42l1.42-1.42a1 1 0 011.42 0zM17 9a1 1 0 110 2h-2a1 1 0 110-2h2zm-2.22 4.78a1 1 0 01-1.42 0l-1.42-1.42a1 1 0 111.42-1.42l1.42 1.42a1 1 0 010 1.42zM10 15a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm-4.22-.78a1 1 0 010-1.42l1.42-1.42a1 1 0 111.42 1.42L7.2 15.22a1 1 0 01-1.42 0zM3 9a1 1 0 110 2H1a1 1 0 110-2h2zm2.22-4.78a1 1 0 011.42 0L7.2 6.64a1 1 0 11-1.42 1.42L3.4 5.24a1 1 0 010-1.42z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
						<!-- Icône lune (mode sombre) -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 cursor-pointer"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.002 8.002 0 1010.586 10.586z" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>
