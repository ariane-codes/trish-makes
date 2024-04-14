<script lang="ts">
	import "../app.css";

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from "../components/Header.svelte";
	import type { LayoutServerData } from "./$types";
	import { useQuery } from "@sanity/svelte-loader";
	import Loading from "../components/Loading.svelte";
	import { LucideInstagram } from "lucide-svelte";
	import { sanitizeSpaces } from "$lib/utils/formatUtils";

	export let data: LayoutServerData;
	const q = useQuery(data.siteSettingsQuery);

	$: ({ data: siteSettings, loading } = $q);
	
</script>

{#if loading}
	<Loading />
{:else}
<AppShell 
	class="md:pr-24 md:pl-24 lg:pr-[200px] lg:pl-[200px]" 
>
	<svelte:fragment slot="header"><Header {siteSettings} /></svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<hr class="w-full" />
		<div class="grid grid-cols-2 h-24">
			<div class="flex flex-col justify-center">
				<span>
					Copyright © {new Date().getFullYear()} {sanitizeSpaces(siteSettings?.title || '')} 
				</span>
			</div>
			<div class="flex flex-col justify-center">
				{#if siteSettings?.instagram}
				<a class="flex gap-2"
				target="_blank"
				href={sanitizeSpaces(siteSettings.instagram.url)}> <LucideInstagram />{sanitizeSpaces(siteSettings.instagram.username)}</a>
				{/if}
			</div>
		</div>
	</svelte:fragment>
</AppShell>
{/if}



