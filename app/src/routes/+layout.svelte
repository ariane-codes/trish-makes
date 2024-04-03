<script lang="ts">
	import "../app.css";

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from "../components/Header.svelte";
	import type { LayoutServerData } from "./$types";
	import { useQuery } from "@sanity/svelte-loader";
	import Loading from "../components/Loading.svelte";

	export let data: LayoutServerData;
	const q = useQuery(data.siteSettingsQuery);

	$: ({ data: siteSettings, loading } = $q);
	
</script>

{#if loading}
	<Loading />
{:else}
<AppShell class="pr-[200px] pl-[200px]">
	<svelte:fragment slot="header"><Header {siteSettings} /></svelte:fragment>
	<slot />
</AppShell>
{/if}



