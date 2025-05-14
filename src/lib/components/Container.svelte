<script lang="ts">
	import type { ThemeColor } from '$lib/types/colors';
	import { getBgColorClass } from '$lib/utils/color-classes';
	import type { Image } from '$lib/utils/images';
	import Footer from './Footer.svelte';

	interface Props {
		image?: Image | undefined;
		color: ThemeColor;
		left?: import('svelte').Snippet;
		right?: import('svelte').Snippet;
	}

	let { image = undefined, color, left, right }: Props = $props();
</script>

<main class="grid flex-grow grid-cols-1 xl:grid-cols-2">
	<div class="flex w-full flex-col gap-5 px-14 pt-10 lg:px-24">
		{@render left?.()}
	</div>
	<div class={`flex w-full flex-col gap-5 ${getBgColorClass(color)} px-14 pt-10 lg:px-24`}>
		{@render right?.()}
	</div>
</main>
<Footer {image} />
