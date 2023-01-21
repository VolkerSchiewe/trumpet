<script lang="ts">
	import type { ActionFormData } from '../../../routes/registration/+page.server';

	export let form: ActionFormData | null;

	export let label: string;
	export let name: string;
	export let value = form?.data?.[name]?.value ?? '';
	export let values: Array<{ label: string; value: string }>;
	export let required = false;
</script>

<label class="flex flex-col">
	<span class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</span>
	<select {name} bind:value {required}>
		<option value="">-- Bitte wählen --</option>
		{#each values as { label, value: v }}
			<option value={v}>{label}</option>
		{/each}
	</select>
	{#if form?.data?.[name]?.message}
		<span>&#x26A0; {form?.data?.[name]?.message}</span>
	{/if}
</label>
