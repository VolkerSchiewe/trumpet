<script lang="ts">
	import ArrowUp from '../lib/components/ArrowUp.svelte';

	export let header: string;
	export let subHeader: string;
	export let href: string;
	export let color: 'magenta' | 'blue';
</script>

<a
	{href}
	class={`relative flex h-36 w-36 flex-col justify-end p-2 text-white ${
		color === 'magenta' ? 'bg-theme-magenta' : color === 'blue' ? 'bg-theme-blue' : ''
	}`}
>
	<span class="font-bold uppercase">{header}</span>
	<span class="text-sm font-light">{subHeader}</span>

	<span class="absolute -top-1 -right-1 h-10 w-10 text-theme-purple">
		<ArrowUp />
	</span>
</a>
