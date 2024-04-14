<script lang="ts">
	import type { SiteSettings } from "$lib/sanity/queries";
    import {AppBar} from "@skeletonlabs/skeleton";

    export let siteSettings: SiteSettings;

    import { page } from '$app/stores';  
	import { sanitizeSpaces } from "$lib/utils/formatUtils";

    const linkClasses = `tracking-widest text-2xl [&.active]:text-primary-500
    md:text-xl
    sm:text-2xl
    `

    const navItems = [
        {
            title: "work",
            href: "/"
        },
        {
            title: "about",
            href: "/about"
        },
        {
            title: "shop",
            href: "/shop"
        },
        {
            title: "contact",
            href: "/contact"
        }
    ]

    $: isMenuOpen = false;

</script>

<AppBar 
    class="h-16 justify-center md:h-28 md:justify-end"
    padding="pt-4 pr-4 pl-4"
    slotTrail="justify-end self-end" 
    background="bg-transparent"
    gap="gap-0"
>
    <a href="/">
        <h1 class="h2 md:h2 xl:h1 font-light tracking-widest ">
            {sanitizeSpaces(siteSettings?.title?.toUpperCase() || '')}
        </h1>
    </a>
    <nav slot="trail" class="flex flex-column relative items-baseline gap-5">

        <button data-collapse-toggle="navbar-default" 
        type="button" 
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" 
        aria-controls="navbar-default" 
        aria-expanded="false"
        on:click={() => isMenuOpen = !isMenuOpen}
        >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <ul class={
        `${isMenuOpen ? "flex": "hidden"} absolute top-9 w-screen right-0 flex-col gap-2 items-end py-4
        md:flex md:flex-row md:relative md:top-0 md:right-0 md:w-full md:gap-5 md:items-baseline md:py0
        bg-surface-50`} 
        id="navbar-default">
            {#each navItems as navItem}
                <li>
                    <a href={navItem.href} class={linkClasses}
                    class:active={$page.url.pathname === navItem.href}
                    >{navItem.title}</a>
                </li>
            {/each}
        </ul>
    </nav>
</AppBar>
