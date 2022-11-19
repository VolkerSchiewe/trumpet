<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Orchestra from '$lib/components/orchestra/Orchestra.svelte';
	import type { PageData } from './$types';
	import Countdown from './Countdown.svelte';
	import Landing from './Landing.svelte';
	import Link from './Link.svelte';

	export let data: PageData;
</script>

<main class="flex flex-col items-center">
	<Landing />
	<div class="mt-5 grid grid-cols-2 gap-5 lg:gap-12 xl:grid-cols-4">
		<Link href="/registration" header="Anmeldung" subHeader="alle Informationen" color="magenta" />
		<Link href="/faq" header="Häufige Fragen" subHeader="und die Antworten" color="blue" />
		<Link href="/program" header="Programm" subHeader="Was, Wann und Wo" color="green" />
		<Link
			href="https://www.herrnhuter-in-berlin.de/"
			header="Berlin"
			subHeader="unsere Gemeinde"
			color="yellow"
		/>
	</div>
	<div class="h-full w-full p-3 md:my-10 md:p-10 md:py-14 xl:w-2/3">
		<Orchestra orchestraDistribution={data.orchestraDistribution} />
	</div>
	<div class="my-5 self-center">
		<Countdown title="Tage bis Beginn" />
	</div>
</main>
<div class="flex-grow" />
<Footer />
