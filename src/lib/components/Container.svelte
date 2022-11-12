<script lang="ts">
	import type { ThemeColor } from '$lib/types/colors';
	import { getBgColorClass } from '$lib/utils/color-classes';
	import Footer from './Footer.svelte';

	export let imageLocation: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
	export let color: ThemeColor;
</script>

<main class="grid flex-grow grid-cols-1 xl:grid-cols-2">
	<div class="flex w-full flex-col gap-5 px-14 pt-10 lg:px-24">
		<slot name="left" />
	</div>
	<div class={`flex w-full flex-col gap-5 ${getBgColorClass(color)} px-14 pt-10 lg:px-24`}>
		<slot name="right" />
	</div>
</main>
<Footer {imageAlt} {imageLocation} />
