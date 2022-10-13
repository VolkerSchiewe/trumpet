<script lang="ts">
    export let form: any;
    
	export let label: string;
	export let name: string;
	export let value: string | undefined = form?.[name]?.value || '';
	export let values: Array<{ label: string; value: string }>;
	export let required = false;

</script>

<label class="flex flex-col">
	<span class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</span>
	<select {name} bind:value {required} >
		<option value="">-- Bitte wählen --</option>
		{#each values as { label, value: v }}
			<option value={v}>{label}</option>
		{/each}
	</select>
	{#if form?.[name].message}
		<span>{form?.[name].message}</span>
	{/if}
</label>
