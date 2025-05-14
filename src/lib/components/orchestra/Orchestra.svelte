<script lang="ts">
	import { getTextColorClass } from '$lib/utils/color-classes';
	import { colors, orchestraData } from './data';
	import type { DistributionArray } from './distribute-orchestra-data';

	interface Props {
		orchestraDistribution: DistributionArray;
	}

	let { orchestraDistribution }: Props = $props();
</script>

<svg
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	viewBox="0 0 2000 1200"
	style="enable-background:new 0 0 2000 1200;"
	xml:space="preserve"
>
	{#each colors as color}
		<g class={getTextColorClass(color)}>
			{#each orchestraData[color] as item, index}
				<rect
					x={item.x}
					y={item.y}
					transform={item.transform}
					class={`stroke-075 stroke-current ${
						orchestraDistribution[color].includes(index) ? 'fill-current' : 'fill-none'
					}`}
					width="37.44"
					height="37.44"
				/>
			{/each}
		</g>
	{/each}
</svg>
