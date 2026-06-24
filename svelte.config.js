// for deploy on Vercel
import adapter from '@sveltejs/adapter-vercel';

import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({}),
	kit: {
		adapter: adapter({}),
	}
};

export default config;
