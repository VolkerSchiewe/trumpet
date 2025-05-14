<!-- @migration task: review uses of `navigating` -->
<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/state';
	import LoadingHorizontal from '$lib/components/LoadingHorizontal.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Moravian Brass Festival Berlin 2023 - 39. Brüderisches Bläsertreffen</title>
	<meta
		name="description"
		content="Das Moravian Brass Festival Berlin findet über Pfingsten 2023 im Böhmischen Dorf statt. Wir freuen uns ca. 250 Blechbläser:innen der Herrnhuter Brüdergemeine aus Deutschland und der ganzen Welt begrüßen zu dürfen."
	/>
</svelte:head>

{#if navigating}
	<div class="fixed top-0 z-50 h-[5px] w-screen">
		<LoadingHorizontal />
	</div>
{/if}
{@render children?.()}
