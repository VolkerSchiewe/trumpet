<script lang="ts">
	import type { ThemeColor } from '$lib/types/colors';
	import { getBgColorClass } from '$lib/utils/color-classes';
	import ArrowUp from '../lib/components/ArrowUp.svelte';

	export let header: string;
	export let subHeader: string;
	export let href: string;
	export let color: ThemeColor;
</script>

<a
	{href}
	class={`relative flex h-36 w-36 md:h-56 md:w-56 xl:h-72 xl:w-72 flex-col justify-end p-2 py-6 text-white ${getBgColorClass(
		color
	)}`}
>
	<span class="font-bold uppercase md:text-3xl xl:text-4xl">{header}</span>
	<span class="text-sm font-light md:text-2xl xl:text-3xl">{subHeader}</span>

	<span
		class="absolute -top-1 -right-1 h-10 w-10 text-theme-purple md:h-14 md:w-14 xl:-top-2 xl:-right-2 xl:h-20 xl:w-20"
	>
		<ArrowUp />
	</span>
</a>
