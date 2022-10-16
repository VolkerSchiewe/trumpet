<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import Dropdown from '$lib/components/forms/Dropdown.svelte';
	import RadioGroup from '$lib/components/forms/RadioGroup.svelte';
	import TextInput from '$lib/components/forms/TextInput.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;

	let type: 'blaeser' | 'jungblaeser' | 'gast';
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
