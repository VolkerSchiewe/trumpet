<script lang="ts">
	interface Props {
		name: string;
		label: string;
		values: Array<{ label: string; value: string }>;
		required?: boolean;
	}

	let { name, label, values, required = false }: Props = $props();
</script>

<fieldset class="flex items-start gap-5">
	<legend class={`text-white ${required ? "after:ml-1 after:content-['*']" : ''}`}>{label}</legend>
	{#each values as { label, value }}
		<label class="relative">
			<input
				class="peer absolute bottom-0 right-1/2 w-0 opacity-0"
				type="radio"
				{name}
				{value}
				{required}
			/>
			<span
				class={`flex h-10 w-10 items-center justify-center border-2 border-white  bg-white text-xl font-bold text-theme-magenta peer-checked:bg-theme-magenta peer-checked:text-white`}
			>
				{label}
			</span>
		</label>
	{/each}
</fieldset>
