<script lang="ts">
	interface Props {
		data: Array<{ time: string; label: string }>;
	}

	let { data }: Props = $props();
</script>

<table class="block">
	<tbody>
		{#each data as item}
			<tr>
				<td class="whitespace-nowrap pr-1 text-right">{item.time}</td>
				<td class="pl-1">{item.label}</td>
			</tr>
		{/each}
	</tbody>
</table>
