<script lang="ts">
	export let form: any;

	export let name: string;
	export let label: string;
	export let values: Array<{ label: string; value: string }>;
	export let required = false;
	let selected: string | undefined = form?.[name]?.value || undefined;
</script>

<fieldset type="radiogroup" class="flex items-start gap-5">
	<legend class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</legend>
	{#each values as { label, value }}
		<label class="relative">
			<input
				bind:group={selected}
				class="absolute bottom-0 right-1/2 w-0 opacity-0"
				type="radio"
				{name}
				{value}
				{required}
			/>
			<span
				class={`${
					selected == value ? 'bg-theme-magenta text-white' : 'bg-white text-theme-magenta'
				} flex w-10 h-10  border-white border-2 items-center justify-center font-bold text-xl`}
				>{label}</span
			>
		</label>
	{/each}
</fieldset>
