<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { Post } from '$lib/sanity/queries';
	import { sanitizeSpaces } from '$lib/utils/formatUtils';

	export let post: Post;
</script>

<a class="flex flex-column flex-wrap card card-hover" href={`/post/${post.slug.current}`}>
	<img
		class=""
		alt="Cover image for [{sanitizeSpaces(post.title)}"
		src={urlFor(post.mainImage).url()}
	/>
</a>

