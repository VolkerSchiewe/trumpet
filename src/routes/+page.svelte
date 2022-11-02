<script lang="ts">
	import ArrowUp from '$lib/components/ArrowUp.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Carousel from './Carousel.svelte';
	import Countdown from './Countdown.svelte';
	import Link from './Link.svelte';
</script>

<main class="flex flex-col items-center">
	<div class="flex w-full flex-col items-center gap-8 bg-theme-purple/80 p-4 py-8 text-white">
		<div class="flex flex-col items-center">
			<h1 class="mt-6 text-lg">39. Brüderisches Bläsertreffen</h1>
			<hr class="mt-2 w-20 border-2 border-theme-yellow" />
		</div>
		<img class="max-w-xl" src="logo.svg" alt="" />

		<img
			class="max-w-xl"
			src="/moravian_brass_23_weiss.svg"
			alt="Moravian Brass Festival Berlin 2023"
		/>
		<!-- <h2 class="text-4xl font-light uppercase leading-none">
			<span class="font-bold">Moravian</span><span>Brass</span><br />
			<span class="tracking-[.06em]">Festival</span><span class="font-bold tracking-[.07em]">Berlin</span><br />
			<span class="font-bold">2023</span>
		</h2> -->
	</div>
	<Carousel />
	<div class="my-5 self-center">
		<Countdown title="Tage bis Beginn" />
	</div>
	<div class="grid grid-cols-2 gap-5 mb-5">
		<Link href="/registration" header="Anmeldung" subHeader="alle Informationen" color="magenta" />
		<Link href="https://www.herrnhuter-in-berlin.de/" header="Berlin" subHeader="unsere Gemeinde" color="blue"/>
		
	</div>
</main>
<Footer />
