<script lang="ts">
	import type { ThemeColors } from '$lib/types/colors';
	import Footer from './Footer.svelte';

	export let imageLocation: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
	export let color: ThemeColors = 'magenta';
</script>

<main class="grid flex-grow grid-cols-1 xl:grid-cols-2">
	<div class="flex w-full flex-col gap-5 px-14 pt-10 lg:px-24">
		<slot name="left" />
	</div>
	<div
		class={`flex w-full flex-col gap-5 ${
			color === 'magenta'
				? 'bg-theme-magenta'
				: color === 'blue'
				? 'bg-theme-blue'
				: color === 'green'
				? 'bg-theme-green'
				: 'bg-theme-yellow'
		} px-14 pt-10 lg:px-24`}
	>
		<slot name="right" />
	</div>
</main>
<Footer {imageAlt} {imageLocation} />
