<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import Card from '../components/Card.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>


{#if posts.length}
	<section class="p-5 sm:p-8 h-full">
		<div class="h-full columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 [&>a:not(:first-child)]:mt-8">
			{#each posts as post}
				<Card post={post} />
			{/each}
		</div>
	</section>
{/if}
