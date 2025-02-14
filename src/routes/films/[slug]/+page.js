import { searchMovies } from '$lib/api';

export async function load({ fetch, params }) {
	const slug = params.slug;
	const data = await searchMovies(fetch, slug);
	console.log(data);

	return { movies: data?.results || [] };
}
