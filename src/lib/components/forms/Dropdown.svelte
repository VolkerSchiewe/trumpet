<script lang="ts">
	import type { ActionFormData } from '../../../routes/registration/+page.server';

	interface Props {
		form: ActionFormData | null;
		label: string;
		name: string;
		value?: string | File;
		values: Array<{ label: string; value: string }>;
		required?: boolean;
	}

	let {
		form,
		label,
		name,
		value = $bindable(form?.data?.[name]?.value ?? ''),
		values,
		required = false
	}: Props = $props();
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
