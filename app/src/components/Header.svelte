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
    border="border-b-primary-500 border-b-2" 
    background="bg-transparent"
>
    <h1 class="h1 font-light tracking-widest ">
        {siteSettings?.title?.toUpperCase()}
    </h1>
    <nav slot="trail" class="flex items-baseline">
        <a href="/" class={linkClasses}
        class:active={$page.url.pathname === "/"}
        >work</a>
        <div class="w-5 h-8 bg-secondary-500" />
        <a href="/about" class={linkClasses}
        class:active={$page.url.pathname === "/about"}
        >about</a>
        <div class="w-5 h-8 bg-secondary-500" />
        <a href="/shop" class={linkClasses}
        class:active={$page.url.pathname === "/shop"}
        >shop</a>
        <div class="w-5 h-8 bg-secondary-500" />
        <a href="/contact" class={linkClasses}
        class:active={$page.url.pathname === "/contact"}
        >contact</a>
    </nav>
</AppBar>
