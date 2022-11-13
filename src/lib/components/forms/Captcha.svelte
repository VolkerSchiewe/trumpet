<script lang="ts">
	import { WidgetInstance } from 'friendly-challenge';
	import { onMount } from 'svelte';

	export const captcha = {
		reset() {
			widget?.reset();
		}
	};

	let container: HTMLDivElement;
	let widget: WidgetInstance;
	onMount(() => {
		widget = new WidgetInstance(container);

		return () => {
			widget.destroy();
		};
	});
</script>

<div bind:this={container} class="frc-captcha" data-sitekey="FCMU8T2TH41K5TK7" />
