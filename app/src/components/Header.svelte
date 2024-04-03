<script lang="ts">
	import type { SiteSettings } from "$lib/sanity/queries";
    import {AppBar} from "@skeletonlabs/skeleton";

    export let siteSettings: SiteSettings;

    import { page } from '$app/stores';  

    const linkClasses = "tracking-widest text-2xl [&.active]:text-primary-500 "

</script>

<AppBar 
    class="h-28 justify-end"
    padding="pt-4 pr-4 pl-4"
    slotTrail="justify-end self-end" 
    background="bg-transparent"
>
    <h1 class="h1 font-light tracking-widest ">
        {siteSettings?.title?.toUpperCase()}
    </h1>
    <nav slot="trail" class="flex items-baseline gap-5">
        <a href="/" class={linkClasses}
        class:active={$page.url.pathname === "/"}
        >work</a>
        <a href="/about" class={linkClasses}
        class:active={$page.url.pathname === "/about"}
        >about</a>
        <a href="/shop" class={linkClasses}
        class:active={$page.url.pathname === "/shop"}
        >shop</a>
        <a href="/contact" class={linkClasses}
        class:active={$page.url.pathname === "/contact"}
        >contact</a>
    </nav>
</AppBar>
