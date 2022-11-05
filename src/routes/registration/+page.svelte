<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import Dropdown from '$lib/components/forms/Dropdown.svelte';
	import RadioGroup from '$lib/components/forms/RadioGroup.svelte';
	import TextInput from '$lib/components/forms/TextInput.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { Hotel } from '$lib/types/hotel';
	import HotelCard from '../HotelCard.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;

	let type: 'blaeser' | 'jungblaeser' | 'gast';
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
	imageLocation="/images/herrnhuter_weg_02.jpg"
	imageAlt="Straßenschild vom Herrnhuter Weg mit Logoafkleber"
>
	<slot slot="left">
		<img alt="Logo" src="bear-magenta.svg" width="200" />
		<Header
			title="Wo kann ich schlafen?"
			subTitle="Alle Informationen"
			link={'/'}
			color={'magenta'}
		/>

		<p class="hyphen text-justify font-semibold">
			Für das Bläsertreffen 2023 in Berlin wird es eine entscheidende Neuerung geben: Wir bitten
			diesmal alle Teilnehmer sich selbst um ein Quartier zu kümmern.
		</p>

		<p class="word-break hyphens text-justify">
			Liebe Bläserinnen und Bläser, nach gründlicher Überlegung im Vorbereitungsteam, sind wir zu
			dem Entschluss gekommen, dass es für die gesamte Organisation des Bläsertreffens einfacher
			ist, wenn sich alle Teilnehmer selbst um ein Quartier kümmern. Im Blick auf Vorfinanzierung,
			Bezahlung oder Stornierung macht sich dies unkomlizierter und das Vorbereitungsteam hat mehr
			Zeit sich um das eigentliche Ereignis zu kümmern. Wer Interesse am MoravianBrass Festival
			Berlin 2023 teilzunehmen, wende sich am besten an seinen Chorleiter, eine gemeinsame Buchen
			per Chor macht natürlich Sinn. Die Mahlzeiten nehmen wir dann auf dem Festivalgelände ein.
			<br />
			<br />
			Hier einige Links zu möglichen Unterkünften in der Nähe:
		</p>
		<div class="flex flex-col max-h-64 min-h-[400px] overflow-y-auto gap-5">
			{#each hotels as hotel}
				<HotelCard {hotel} />
			{/each}
		</div>
		<div class="h-20" />
	</slot>
	<slot slot="right">
		<div class="h-40" />
		<Header title="Anmeldung" subTitle="Moravian Brass Festival" link={'/'} />
		<p class="hyphen text-justify font-bold">
			Um gut planen zu können benötigen wir natürlich einige Angaben von euch.
		</p>
		<p>
			Wichtig ist natürlich welche Stimme ihr spielt und wir wollen natürlich auch wissen wer ihr
			seid und wo ihr herkommt.
		</p>
		<form
			id="registration-form"
			method="POST"
			action="/registration"
			class="mb-10 flex flex-col gap-3"
			use:enhance
		>
			{#if form?.message}
				<span>&#x26A0; {form?.message}</span>
			{/if}

			<TextInput label="Name" required name="name" {form} />
			<TextInput label="E-Mail" required name="email" type="email" {form} />
			<TextInput label="Addresse" required name="address" {form} />
			<TextInput label="PLZ & Ort" required name="zip_city" {form} />
			<Dropdown
				label="Ich bin"
				name="type"
				bind:value={type}
				required
				values={[
					{ label: 'Bläser:in', value: 'blaeser' },
					{ label: 'Jungbläser:in', value: 'jungblaeser' },
					{ label: 'Gast', value: 'gast' }
				]}
				{form}
			/>
			<TextInput label="Zu welchem Chor gehörst du?" name="choir" {form} />
			{#if type != 'gast'}
				<RadioGroup
					label="Welche Stimme spielst du?"
					name="voice"
					required
					values={[
						{ label: 'I', value: 'sopran' },
						{ label: 'II', value: 'alt' },
						{ label: 'III', value: 'tenor' },
						{ label: 'IV', value: 'bass' }
					]}
					{form}
				/>
			{:else}
				<div class="h-16" />
			{/if}
			<button class="mt-3 bg-white p-3 font-bold uppercase text-theme-magenta" type="submit"
				>Anmelden</button
			>
		</form>
	</slot>
</Container>

<style>
	.hyphens {
		hyphens: auto;
	}
</style>
