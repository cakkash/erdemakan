// for deploy on Vercel (auto-detects the platform)
import adapter from '@sveltejs/adapter-auto';

// for deploy on Ubuntu / NodeJS
//import adapter from '@sveltejs/adapter-node';

// for deploy on Cpanel 
//import adapter from '@sveltejs/adapter-static';

import preprocessor from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	preprocess: preprocessor({}),
	kit: {
		// for deploy on Cpanel
		//adapter: adapter({ pages: 'build', fallback: "index.html", precompress: true }),

		// for deploy on Ubuntu / NodeJS
		adapter: adapter({}),
	},
	clientSideRendering: true,
	clientSideRouting: true
};

export default config;
