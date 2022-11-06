<script lang="ts">
	import { WidgetInstance } from 'friendly-challenge';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	onMount(() => {
		const widget = new WidgetInstance(container);

		return () => {
			widget.destroy();
		};
	});
</script>

<div bind:this={container} class="frc-captcha" data-sitekey="FCMU8T2TH41K5TK7" />
