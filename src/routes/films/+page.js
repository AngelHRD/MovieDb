import { getPopularMovies } from '$lib/api';

export async function load({ fetch, url }) {
	const page = Number(url.searchParams.get('page')) || 1;
	const data = await getPopularMovies(fetch, page);

	return {
		movies: data?.results || [],
		currentPage: data?.page || 1,
		totalPages: data?.total_pages || 1
	};
}
