import { searchMulti } from '$lib/api';

export async function load({ fetch, params }) {
	const slug = params.slug;
	const data = await searchMulti(fetch, slug);
	console.log('toto', data);

	return {
		search: data,
		currentPage: data?.page || 1,
		totalPages: data?.total_pages || 1
	};
}
