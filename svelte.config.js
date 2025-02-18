import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// options de l'adaptateur ici si nécessaire
		}),
		prerender: {
			entries: ['*'] // Ceci prérendrera toutes les routes
		},
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$utils: './src/utils'
		}
	}
};

export default config;
