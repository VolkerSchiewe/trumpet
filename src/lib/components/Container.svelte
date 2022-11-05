<script lang="ts">
	import Footer from './Footer.svelte';

	export let imageLocation: string;
	export let imageAlt: string;
</script>

<main class="grid grid-cols-1 xl:grid-cols-2">
	<div class="flex w-full flex-col gap-5 px-14 pt-10 lg:px-24">
		<slot name="left" />
	</div>
	<div class="flex w-full flex-col gap-5 bg-theme-magenta px-14 pt-10 lg:px-24">
		<slot name="right" />
	</div>
</main>

<Footer {imageAlt} {imageLocation} />
