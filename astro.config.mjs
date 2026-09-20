// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blade3000a.github.io',
	// Project page: the site is served from a subpath, not the domain root.
	base: '/amer-blog-coders51/',
	integrations: [mdx(), sitemap()],
	// The CV post is the only page; send the root there.
	// Destinations must carry the base; Astro does not add it to these values.
	redirects: {
		'/': '/amer-blog-coders51/blog/amer-abu-joudeh/',
		'/blog': '/amer-blog-coders51/blog/amer-abu-joudeh/',
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
