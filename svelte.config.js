import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({}),
		prerender: {
			entries: ['*']
		},
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$utils: './src/utils'
		}
	}
};

export default config;
