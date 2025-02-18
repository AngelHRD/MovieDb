const API_KEY = import.meta.env.VITE_API_KEY;

console.log('API_KEY:', API_KEY);

const BASE = 'https://api.themoviedb.org/3/';

const headers = {
	Authorization: `Bearer ${API_KEY}`,
	accept: 'application/json'
};

async function fetchFromAPI(fetch, endpoint, params = {}) {
	const url = new URL(`${BASE}${endpoint}`);
	const paramsQuery = new URLSearchParams({ language: 'fr-FR', ...params });

	url.search = paramsQuery.toString();

	try {
		const response = await fetch(url, { method: 'GET', headers });
		return await response.json();
	} catch (error) {
		console.error(`Erreur lors de l'appel à l'API (${endpoint}):`, error);
		return null;
	}
}

// Récupérer les films les mieux notés
export function getTopRatedMovies(fetch, page = 1) {
	return fetchFromAPI(fetch, 'movie/top_rated', { page });
}

// Récupérer les films populaires
export function getPopularMovies(fetch, page = 1) {
	return fetchFromAPI(fetch, 'movie/popular', { page });
}

//	Récupérer les séries populaires
export function getPopularSeries(fetch, page = 1) {
	return fetchFromAPI(fetch, 'tv/popular', { page });
}

// Rechercher un film
export function searchMovies(fetch, query) {
	return fetchFromAPI(fetch, 'search/movie', { query });
}

// Rechercher une série
export function searchSeries(fetch, query) {
	return fetchFromAPI(fetch, 'search/tv', { query });
}

// Obtenir les détails d'un film ou série
export function getDetails(fetch, type, id) {
	return fetchFromAPI(fetch, `${type}/${id}`);
}

// Rechercher des films , séries et personnes
export function searchMulti(fetch, query) {
	return fetchFromAPI(fetch, 'search/multi', { query });
}

export function getMovieById(fetch, id) {
	return fetchFromAPI(fetch, `movie/${id}`);
}

export function getSeriesById(fetch, id) {
	return fetchFromAPI(fetch, `tv/${id}`);
}
