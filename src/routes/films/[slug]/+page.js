import { getMovieById } from '$lib/api';

export async function load({ fetch, params }) {
	const slug = params.slug;
	const id = slug.split('-').pop();
	const data = await getMovieById(fetch, id);

	return { movie: data || [] };
}
