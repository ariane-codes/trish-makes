<script lang="ts">
	import "../app.css";

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from "../components/Header.svelte";
	import type { LayoutServerData } from "./$types";
	import { useQuery } from "@sanity/svelte-loader";

	export let data: LayoutServerData;
	const q = useQuery(data.siteSettingsQuery);

	$: ({ data: siteSettings } = $q);

</script>

<div class="flex w-full h-full">
	<div class="w-[200px] h-full  border-r-2 border-r-primary-500">
		<div class="h-28 border-b-primary-500 border-b-2" />
	</div>
	<AppShell>
		<svelte:fragment slot="header"><Header {siteSettings} /></svelte:fragment>
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
		<!-- (footer) -->
	</AppShell>
	<div class="w-[200px] h-full  border-l-2 border-l-primary-500">
		<div class="h-28 border-b-primary-500 border-b-2" />

	</div>
</div>

