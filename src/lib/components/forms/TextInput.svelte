<script lang="ts">
	import type { ActionFormData } from '../../../routes/registration/+page.server';

	interface Props {
		label: string;
		name: string;
		required?: boolean;
		type?: string;
		form: ActionFormData | null;
	}

	let { label, name, required = false, type = 'text', form }: Props = $props();
</script>

<label>
	<span class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</span>
	<input
		{type}
		class="w-full"
		placeholder=""
		{name}
		{required}
		value={form?.data?.[name]?.value || ''}
	/>
	{#if form?.data?.[name]?.message}
		<span>&#x26A0; {form?.data?.[name]?.message}</span>
	{/if}
</label>
