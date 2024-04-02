
import { join } from 'path';
import type { Config } from 'tailwindcss';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
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
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: { preset: [ "skeleton" ] }
		})
	]
} satisfies Config;

export default config;
						