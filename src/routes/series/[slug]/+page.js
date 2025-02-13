import { searchSeries } from '$lib/api';

export async function load({ fetch, params }) {
	const slug = params.slug;
	const data = await searchSeries(fetch, slug);
	console.log(data);

	return {
		series: data?.results || [],
		currentPage: data?.page || 1,
		totalPages: data?.total_pages || 1
	};
}
