import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
			resolve: {
				alias: {
					$src: resolve('./src')
				}
			}
		}
	}
};

export default config;
