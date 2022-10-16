<script lang="ts">
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
<footer>
	<img class="aspect-[16/6] w-full object-cover" src={imageLocation} alt={imageAlt} />
	<div class="flex flex-col items-center gap-5 bg-theme-purple py-10 text-white">
		<div class="flex gap-5 font-bold">
			<a href="mailto:info@blaesertag2023.de"> Kontakt </a>
			<a href="https://www.herrnhuter-in-berlin.de/impressum"> Impressum </a>
			<a href="https://www.herrnhuter-in-berlin.de/datenschutz/"> Datenschutz </a>
		</div>
		<span class="text-sm">© 2022 Evangelische Brüdergemeine Berlin </span>
	</div>
</footer>
