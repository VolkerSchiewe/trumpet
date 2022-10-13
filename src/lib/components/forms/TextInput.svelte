<script lang="ts">
	export let label: string;
	export let name: string;
	export let required = false;
	export let type = 'text';
	export let form: any;
</script>

<label>
	<span class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</span>
	<input {type} class="w-full" placeholder="" {name} {required} value={form?.[name]?.value || ''} />
	{#if form?.[name].message}
		<span>{form?.[name].message}</span>
	{/if}
</label>
