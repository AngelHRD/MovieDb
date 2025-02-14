import { getPopularSeries } from '$lib/api';

export async function load({ fetch, url }) {
	const page = Number(url.searchParams.get('page')) || 1;
	const data = await getPopularSeries(fetch, page);

	return {
		series: data?.results || [],
		currentPage: data?.page || 1,
		totalPages: data?.total_pages || 1
	};
}
