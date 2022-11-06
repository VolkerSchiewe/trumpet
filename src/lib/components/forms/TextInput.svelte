<script lang="ts">
	import type { ActionFormData } from "src/routes/registration/+page.server";


	export let label: string;
	export let name: string;
	export let required = false;
	export let type = 'text';
	export let form: ActionFormData | undefined;

</script>

<label>
	<span class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</span>
	<input {type} class="w-full" placeholder="" {name} {required} value={form?.data?.[name]?.value || ''} />
	{#if form?.data?.[name]?.message}
		<span>&#x26A0; {form?.data?.[name]?.message}</span>
	{/if}
</label>
