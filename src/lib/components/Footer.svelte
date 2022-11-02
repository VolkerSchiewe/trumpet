<script lang="ts">
	export let imageLocation: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
</script>

<footer>
	{#if imageLocation}
		<img class="aspect-[16/6] w-full object-cover" src={imageLocation} alt={imageAlt} />
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
