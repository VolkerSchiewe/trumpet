<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { Hotel } from '$lib/types/hotel';
	import HotelCard from './HotelCard.svelte';
	import type { ActionData, PageData } from './$types';
	import RegistrationForm from './RegistrationForm.svelte';

	export let form: ActionData;

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

<Container
	color="magenta"
	imageLocation="/images/herrnhuter_weg_02.jpeg"
	imageAlt="Straßenschild vom Herrnhuter Weg mit Logoaufkleber"
>
	<slot slot="left">
		<img alt="Bär mit Waldhorn" src="/bear-magenta.svg" width="200" height="200" />
		<Header title="Wo kann ich schlafen?" subTitle="Alle Informationen" color={'magenta'} />

		<p class="hyphen text-justify font-semibold">
			Für das Bläsertreffen 2023 in Berlin wird es eine entscheidende Neuerung geben: Wir bitten
			diesmal alle Teilnehmer sich selbst um ein Quartier zu kümmern.
		</p>

		<p class="word-break hyphens text-justify">
			Liebe Bläserinnen und Bläser, nach gründlicher Überlegung im Vorbereitungsteam, sind wir zu
			dem Entschluss gekommen, dass es für die gesamte Organisation des Bläsertreffens einfacher
			ist, wenn sich alle Teilnehmer selbst um ein Quartier kümmern. Im Blick auf Vorfinanzierung,
			Bezahlung oder Stornierung macht sich dies unkomlizierter und das Vorbereitungsteam hat mehr
			Zeit sich um das eigentliche Ereignis zu kümmern. Wer Interesse hat am Moravian Brass Festival
			Berlin 2023 teilzunehmen, wende sich am besten an seinen Chorleiter, eine gemeinsame Buchung
			pro Chor macht natürlich Sinn. Die Mahlzeiten nehmen wir dann auf dem Festivalgelände ein.
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
	<slot slot="right">
		<div class="h-40" />
		<RegistrationForm {form} />
	</slot>
</Container>

<style>
	.hyphens {
		hyphens: auto;
	}
</style>
