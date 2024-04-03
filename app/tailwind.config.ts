
import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { theme } from './src/theme';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		fontFamily: {
			sans: ['Karla', 'sans-serif'],
			serif: ['Karla', 'sans-serif'],
			display: ['Karla', 'sans-serif'],
			body: ['Karla', 'sans-serif']
		},
		extend: {},
	},
	plugins: [
		skeleton({
			themes: { custom: [ theme ] }
		})
	]
} satisfies Config;

export default config;
						