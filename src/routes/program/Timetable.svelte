<script lang="ts">
	export let data: Array<{ time: string; label: string }>;
</script>

<table class="block">
	{#each data as item}
		<tr
			><td class="whitespace-nowrap pr-1 text-right">{item.time}</td><td class="pl-1"
				>{item.label}</td
			></tr
		>
	{/each}
</table>
