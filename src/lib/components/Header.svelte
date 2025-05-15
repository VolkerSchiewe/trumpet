<script lang="ts">
	import type { ThemeColor } from '$lib/types/colors';
	import { getTextColorClass } from '$lib/utils/color-classes';
	import ArrowUp from './ArrowUp.svelte';

	interface Props {
		title: string;
		subTitle: string;
		link?: string;
		color?: ThemeColor | null;
	}

	let { title, subTitle, link = '/', color = null }: Props = $props();
</script>

<div class="relative -mx-14 font-bold lg:-mx-24">
	<a href={link}>
		<ArrowUp
			clazz={`absolute w-[40px] lg:w-[80px] h-[40px] lg:h-[80px] top-1/2 left-0 -translate-y-1/2 ${
				color ? getTextColorClass(color) : 'text-white'
			}`}
		/>
	</a>

	<h1 class={`mx-14 text-2xl uppercase lg:mx-24 lg:text-4xl `}>{title}</h1>
	<h2
		class={`mx-14 text-2xl uppercase lg:mx-24 lg:text-4xl ${
			color ? getTextColorClass(color) : 'text-white'
		}`}
	>
		{subTitle}
	</h2>
</div>
