<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import FramedNumber from '$lib/components/FramedNumber.svelte';
	import Orchestra from '$lib/components/orchestra/Orchestra.svelte';
	import type { PageData } from './$types';
	import Countdown from './Countdown.svelte';
	import Landing from './Landing.svelte';
	import Link from './Link.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<main class="flex flex-col items-center">
	<Landing />
	<div class="mt-5 grid grid-cols-2 gap-5 md:mt-10 md:grid-cols-4 md:gap-[4vw]">
		<Link href="/information" header="Details" subHeader="alle Informationen" color="magenta" />
		<Link href="/faq" header="Häufige Fragen" subHeader="und die Antworten" color="blue" />
		<Link href="/program" header="Programm" subHeader="Was, Wann und Wo" color="green" />
		<Link
			target="_blank"
			href="https://docs.google.com/viewer?url=https%3A%2F%2Fblaesertag2023.de%2Ffestschrift.pdf&embedded=true"
			header="Festschrift"
			subHeader="zum Bläsertag"
			color="yellow"
		/>
	</div>
	<div class="h-full w-full p-3 md:mt-10 md:p-10 md:py-14 xl:w-2/3">
		<Orchestra orchestraDistribution={data.orchestraDistribution} />
	</div>
	<div class="mb-5 flex flex-col gap-5 md:flex-row">
		<FramedNumber title="Anmeldungen" number={data.registrationCount} />
		<Countdown targetDate={new Date('2023-05-26')} />
	</div>
</main>
<div class="flex-grow"></div>
<Footer />
