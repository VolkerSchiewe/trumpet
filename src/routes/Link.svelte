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
	class={`relative flex h-36 w-36 md:h-[20vw] md:w-[20vw] flex-col justify-end p-2 py-6 md:p-[1vw] md:py-[2vw] text-white ${getBgColorClass(
		color
	)}`}
>
	<span class="text-md font-bold uppercase md:text-[2.5vw] md:leading-[3vw]">{header}</span>
	<span class="text-sm font-light md:text-[2vw] md:leading-[2.5vw]">{subHeader}</span>

	<span
		class="absolute -top-1 -right-1 h-10 w-10 text-theme-purple md:-top-[0.5vw] md:-right-[0.5vw] md:h-[5vw] md:w-[5vw]"
	>
		<ArrowUp />
	</span>
</a>
