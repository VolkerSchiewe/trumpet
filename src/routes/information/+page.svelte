<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { Hotel } from '$lib/types/hotel';
	import HotelCard from './HotelCard.svelte';
	import { images } from '$lib/utils/images';

	let hotels: Hotel[] = [
		{
			name: 'Mercure Hotel',
			address: 'Rollbergstr: 214-216, 12049 Berlin',
			phone: '030/627800',
			email: 'h1894@accor.com',
			website: 'https://all.accor.com/hotel/1894/index.de.shtml'
		},
		{
			name: 'Motel Plus',
			address: 'Silbersteinstr. 30-34, 12051 Berlin',
			phone: '030/68408680',
			email: 'info@motelplus-berlin.de',
			website: 'https://motelplus-berlin.de/'
		},
		{
			name: 'Hotel Ibis',
			address: 'Jahnstr: 13, 12347 Berlin',
			phone: '030/6850080',
			email: 'h5694@accor.com',
			website: 'https://all.accor.com/hotel/5694/index.de.shtml'
		},
		{
			name: 'Karibuni',
			address: 'Rollbergstr. 30, 12053 Berlin',
			phone: '030/6871517',
			email: 'Karibuni-berlin@web.de',
			website: 'https://karibuni-hotel.de/'
		},
		{
			name: 'Erlanger Hof',
			address: 'Erlangerstr. 4, 12053 Berlin',
			phone: '030/62989975',
			email: 'info@erlanger-hof.de',
			website: 'https://www.erlanger-hof.de/'
		},
		{
			name: 'Amaya Motel',
			address: 'Silbersteinstr. 5-7, 12051 Berlin',
			email: 'info@amaya-motel.de',
			website: 'http://amaya-motel.de/'
		},
		{
			name: 'Zafir Hostel',
			address: 'Karl-Marx-Str. 176, 12043 Berlin',
			phone: '15735981863',
			email: 'support@booked.net',
			website: 'https://www.booking.com/hotel/de/zerfir-gmbh.de.html'
		},
		{
			name: '2A Hostel',
			address: 'Saalestr. 76, 12055 Berlin',
			email: 'info@hotel.de',
			website: 'https://2ahostel.atberlinhotels.com/de/'
		},
		{
			name: 'Hotel Bohemia',
			address: 'Karl-Marx-Str. 262, 12057 Berlin',
			phone: '030/68081510',
			email: 'info@viverestays.com',
			website: 'https://viverestayshotels.com/hotel-bohemia-berlin/'
		},
		{
			name: 'Grand Hostel Berlin Urban',
			address: 'Sonnenallee 6, 12047 Berlin',
			phone: '030/613820',
			email: 'urban@grandhostel-berlin.de',
			website: 'https://grandhostel-berlin.de/urban/'
		},
		{
			name: 'Estrel Hotel',
			address: 'Sonnenallee 225, 12057 Berlin',
			phone: '030/68310',
			email: 'hotel@estrel.com',
			website: 'https://www.estrel.com/'
		},
		{
			name: 'Hotel am Hermannplatz',
			address: 'Kottbusser Damm 24, 10967 Berlin',
			phone: '030/6959130',
			email: 'info@hotel-am-hermannplatz.de',
			website: 'https://hotel-am-hermannplatz.de/'
		},
		{
			name: 'Hotel Ludwig van Beethoven',
			address: 'Hasenheide 14, 10967 Berlin',
			phone: '030/6957000',
			email: 'info@hotellvb.de',
			website: 'https://www.hotel-ludwig-van-beethoven.de/'
		}
	];
</script>

<svelte:head>
	<title>Anmeldung - Moravian Brass Festival Berlin 2023</title>
</svelte:head>

<Container color="magenta" image={images[2]}>
	<slot slot="left">
		<img alt="Bär mit Waldhorn" src="/bear-magenta.svg" width="200" height="200" />
		<Header title="Details" subTitle="Alle Informationen" color="magenta" />
		<p>
			Der Bläsertag 2023 in Berlin findet von Fr. 26.05.2023 bis zum Mo. 29.05.2023 statt. Wir
			freuen uns schon darauf, euch in unserer <a
				href="https://goo.gl/maps/FJaHy7ys4AEAhd9p6"
				class="text-theme-magenta"
				target="_blank"
				rel="noreferrer">Gemeinde in Neukölln</a
			> begrüßen zu dürfen.
		</p>
		<p>
			Wir haben ein tolles Programm vorbereitet, mit spannenden Workshops. Den aktuellen Stand
			unseres Programms findest du immer auf der Seite <a href="/program" class="text-theme-magenta"
				>"Programm"</a
			>. Bitte beachte, dass es sich dabei um ein vorläufiges Programm handelt, welches wir ständig
			aktualisieren.
		</p>
		<p>
			Der Teilnehmerbeitrag beträgt 120€ für Vollzahler:innen und 90€ für ermäßigte. Dieser ist
			bitte bis zum <b>02.05.2023</b>
			an das Konto der Brüdergemeine Berlin zu überweisen:<br />
		</p>
		<p class="-mt-3 ml-2 md:ml-3">
			IBAN: <b>DE34 3506 0190 1566 9530 10</b> (KD-Bank)<br />
			Verwendungszweck: <b>Dein Name</b> <br />
		</p>
		<p>
			Alternativ könnt ihr die Beiträge auch im Chor sammeln und dann gemeinsam an uns überweisen.
		</p>
		<div class="h-10" />
	</slot>
	<slot slot="right">
		<div class="xl:h-40" />

		<Header title="Unterbringung" subTitle="Alle Informationen" />

		<p class="hyphen text-justify font-semibold">
			Für das Bläsertreffen 2023 in Berlin wird es eine entscheidende Neuerung geben: Wir bitten
			diesmal alle Teilnehmer:innen, sich selbst um ein Quartier zu kümmern.
		</p>

		<p class="word-break hyphens text-justify">
			Liebe Bläserinnen und Bläser, nach gründlicher Überlegung im Vorbereitungsteam sind wir zu dem
			Entschluss gekommen, dass es für die gesamte Organisation des Bläsertreffens einfacher ist,
			wenn sich alle Teilnehmer:innen selbst um ein Quartier kümmern. Im Blick auf Vorfinanzierung,
			Bezahlung oder Stornierung macht sich dies unkomplizierter, und das Vorbereitungsteam hat mehr
			Zeit, sich um das eigentliche Ereignis zu kümmern. Alle Mahlzeiten, bis auf das Frühstück,
			nehmen wir dann auf dem Festivalgelände ein.
			<br />
			Jugendliche ab 14 Jahre können in einem Massenquartier in einer Turnhalle übernachten. Mehr Details
			dazu auf der Seite <a class="text-theme-magenta-50" href="/faq">"Häufige Fragen"</a>.
			<br />
			<br />
			Hier einige Links zu möglichen Unterkünften in der Nähe:
		</p>
		<div class="flex max-h-64 min-h-[400px] flex-col gap-5 overflow-y-auto">
			{#each hotels as hotel}
				<HotelCard {hotel} />
			{/each}
		</div>
		<div class="h-20" />
	</slot>
</Container>

<style>
	.hyphens {
		hyphens: auto;
	}
</style>
