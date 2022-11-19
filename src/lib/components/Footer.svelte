<script lang="ts">
	import type { Image } from '$lib/utils/images';

	export let image: Image | undefined = undefined;
</script>

<footer>
	{#if image}
		<img class="aspect-[16/6] w-full object-cover object-bottom" src={image.src} alt={image.alt} />
	{/if}
	<div class="flex flex-col items-center gap-5 bg-theme-purple py-10 text-white">
		<div class="flex gap-5 font-bold">
			<a href="mailto:info@blaesertag2023.de"> Kontakt </a>
			<a href="https://www.herrnhuter-in-berlin.de/impressum"> Impressum </a>
			<a href="https://www.herrnhuter-in-berlin.de/datenschutz/"> Datenschutz </a>
		</div>
		<span class="text-sm">© 2022 Evangelische Brüdergemeine Berlin </span>
	</div>
</footer>
