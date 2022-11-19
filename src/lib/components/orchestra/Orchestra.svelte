<script lang="ts">
	import { getTextColorClass } from '$lib/utils/color-classes';
	import { colors, orchestraData } from './data';
	import type { DistributionArray } from './distribute-orchestra-data';

	export let orchestraDistribution: DistributionArray;
</script>

<svg
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	viewBox="0 0 1300 680"
	xml:space="preserve"
>
	{#each colors as color}
		<g class={getTextColorClass(color)}>
			{#each orchestraData[color] as item, index}
				<rect
					x={item.x}
					y={item.y}
					transform={item.transform}
					class={`stroke-current stroke-075 ${
						orchestraDistribution[color].includes(index) ? 'fill-current' : 'fill-none'
					}`}
					width="15.59"
					height="15.59"
				/>
			{/each}
		</g>
	{/each}
</svg>
