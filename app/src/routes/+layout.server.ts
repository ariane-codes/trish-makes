import { type SiteSettings, siteSettingsQuery } from '$lib/sanity/queries';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	// The `event.locals.preview` value received here is set by the helper function
	// in `hooks.server.ts`. It indicates whether the app is in preview mode or not.
	const { preview, loadQuery } = event.locals;
	// As `event.locals` is only available on the server, we can expose the value
	// to the client by returning it here.

	const initial = await loadQuery<SiteSettings>(siteSettingsQuery);

	return { 
		preview, 
		siteSettingsQuery: await {
			query: siteSettingsQuery,
			options: { initial }
		},
	};
};
