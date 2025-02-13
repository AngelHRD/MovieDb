export async function load({ fetch, url }) {
	const API_KEY = import.meta.env.VITE_API_KEY;
	const BASE = 'https://api.themoviedb.org/3/';

	const headers = {
		Authorization: `Bearer ${API_KEY}`,
		accept: 'application/json'
	};

	const page = Number(url.searchParams.get('page')) || 1;
	const apiUrl = new URL(`${BASE}tv/popular`);
	const paramsQuery = new URLSearchParams();

	paramsQuery.append('language', 'fr-FR');
	paramsQuery.append('page', page);
	apiUrl.search = paramsQuery.toString();

	try {
		const response = await fetch(apiUrl, { method: 'GET', headers });
		const data = await response.json();
		console.log(data);
		return {
			series: data.results,
			currentPage: data.page,
			totalPages: data.total_pages
		};
	} catch (error) {
		console.error('Erreur lors de la récupération des films :', error);
	}
}
