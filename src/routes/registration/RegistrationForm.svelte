<script lang="ts">
	import { enhance } from '$app/forms';
	import Captcha from '$lib/components/forms/Captcha.svelte';
	import Dropdown from '$lib/components/forms/Dropdown.svelte';
	import RadioGroup from '$lib/components/forms/RadioGroup.svelte';
	import TextInput from '$lib/components/forms/TextInput.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
	import { dev } from '$app/environment';
	import Loading from '$lib/components/Loading.svelte';

	let type: 'blaeser' | 'jungblaeser' | 'gast';
	let loading = false;
	function formEnhancement() {
		loading = true;
		return () => {
			loading = false;
		};
	}
</script>

<Header title="Anmeldung" subTitle="Moravian Brass Festival" link={'/'} />
<p class="hyphen text-justify font-bold">
	Um gut planen zu können benötigen wir natürlich einige Angaben von euch.
</p>
<p>
	Wichtig ist natürlich welche Stimme ihr spielt und wir wollen natürlich auch wissen wer ihr seid
	und wo ihr herkommt.
</p>
<form
	id="registration-form"
	method="POST"
	action="/registration"
	class="mb-10 flex flex-col gap-3"
	use:enhance={formEnhancement}
>
	{#if form?.message}
		<span>&#x26A0; {form?.message}</span>
	{/if}
	{#if form?.success}
		Danke für deine Anmeldung. Bitte vergiss nicht deine E-Mail Addresse zu bestätigen.
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
	{#if !dev}
		<Captcha />
	{/if}
	<button
		class="mt-3 bg-white p-3 font-bold uppercase text-theme-magenta disabled:text-theme-magenta/50 "
		disabled={loading}
		type="submit"
	>
		<span class="flex items-center justify-center">
			{#if loading}
				<Loading />
			{/if}
			Anmelden
		</span>
	</button>
</form>
