<script>
	export let popularity;
	export let maxPopularity = 5000;

	let percent = Math.min((popularity / maxPopularity) * 100, 100);
</script>

<div class="mt-2 flex items-center">
	<div class="relative h-5 w-xl overflow-hidden rounded-full bg-gray-200">
		<div class="absolute h-full bg-red-500 transition-all" style="width: {percent}%"></div>

		<div class="absolute inset-0 flex items-center justify-center font-bold text-black">
			{Math.round(percent)}%
		</div>
	</div>
</div>
