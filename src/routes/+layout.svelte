<script>
	import '../app.css';
	import { navigating } from '$app/stores';
	import LoadingHorizontal from '$lib/components/LoadingHorizontal.svelte';
</script>

<svelte:head>
	<title>Moravian Brass Festival Berlin 2023</title>
	<meta
		name="description"
		content="A get together of ~250 musician of the moravian church of Germany and all over the world."
	/>
</svelte:head>

{#if $navigating}
	<div class="fixed top-0 z-50 h-[5px] w-screen">
		<LoadingHorizontal />
	</div>
{/if}
<slot />
