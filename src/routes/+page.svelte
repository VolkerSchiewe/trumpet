<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Countdown from './Countdown.svelte';
	import Landing from './Landing.svelte';
	import Link from './Link.svelte';
</script>

<main class="flex flex-col items-center">
	<Landing />
	<div class="mt-5 grid grid-cols-2 gap-5">
		<Link href="/registration" header="Anmeldung" subHeader="alle Informationen" color="magenta" />
		<Link
			href="https://www.herrnhuter-in-berlin.de/"
			header="Berlin"
			subHeader="unsere Gemeinde"
			color="blue"
		/>
	</div>
	<div class="my-5 self-center">
		<Countdown title="Tage bis Beginn" />
	</div>
</main>
<div class="flex-grow"></div>
<Footer />
