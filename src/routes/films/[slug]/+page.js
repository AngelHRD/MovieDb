const API_KEY = import.meta.env.VITE_API_KEY;
const BASE = 'https://api.themoviedb.org/3/';

const headers = {
	Authorization: `Bearer ${API_KEY}`,
	accept: 'application/json'
};

export async function load({ params, fetch }) {
	const url = new URL(`${BASE}search/movie`);
	const paramsQuery = new URLSearchParams();

	paramsQuery.append('language', 'fr-FR');
	paramsQuery.append('query', params.slug);
	url.search = paramsQuery.toString();

	const response = await fetch(url, { method: 'GET', headers });

	if (!response.ok) {
		// Gérer l'erreur (par exemple, en affichant un message ou en retournant une erreur)
		throw new Error('Erreur lors de la récupération des données');
	}

	const data = await response.json();
	const movies = data.results;

	console.log(movies);

	return { movies };
}
