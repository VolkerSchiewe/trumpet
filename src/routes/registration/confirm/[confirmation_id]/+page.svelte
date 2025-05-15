<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageData } from './$types';
	import Header from '$lib/components/Header.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Anmeldebestätigung - Moravian Brass Festival Berlin 2023</title>
</svelte:head>

<Container color="green">
	{#snippet left()}
		<img class="max-w-xs self-center pb-10" src="/bear_green.svg" alt="Logo" />
	{/snippet}
	{#snippet right()}
		<div class="py-10">
			<Header title="Herzlichen Glückwunsch" subTitle="Deine Anmeldung war erfolgreich!" link="/" />
			<p class="mt-5">
				Du bist jetzt für den Brüderischen Bläsertag 2023 in Berlin angemeldet, wir freuen uns schon
				auf dich! Weitere Informationen findest du auf unserer Website und schicken wir an deine
				E-Mail Adresse {data.email}.
				<br />
				Wenn noch Fragen offen bleiben kannst du dich jederzeit an
				<a href="mailto:info@blaesertag2023.de" target="_blank">info@blaesertag2023.de</a> wenden.
			</p>
			<a href="/"
				><button class="mt-3 bg-white p-3 font-bold uppercase text-theme-green"
					>Zurück zur Startseite</button
				></a
			>
		</div>
	{/snippet}
</Container>
