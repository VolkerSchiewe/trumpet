<script lang="ts">
	import { enhance } from '$app/forms';
	import Captcha from '$lib/components/forms/Captcha.svelte';
	import Dropdown from '$lib/components/forms/Dropdown.svelte';
	import RadioGroup from '$lib/components/forms/RadioGroup.svelte';
	import TextInput from '$lib/components/forms/TextInput.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { ActionData } from './$types';
	import { dev } from '$app/environment';
	import Loading from '$lib/components/Loading.svelte';
	import Modal from '$lib/components/Modal.svelte';

	export let form: ActionData;
	$: modalOpen = Boolean(form?.success);

	let captcha: { reset: () => void };
	let type: 'blaeser' | 'jungblaeser' | 'gast';
	let loading = false;

	function formEnhancement(): ({ update }: { update: Function }) => void {
		loading = true;
		return ({ update }) => {
			loading = false;
			update();
			captcha.reset();
		};
	}

	function closeModal() {
		modalOpen = false;
	}
</script>

<Header title="Anmeldung" subTitle="Moravian Brass Festival" />
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
		<Modal open={modalOpen} on:close={closeModal}>
			<div slot="body">
				<h2 class="text-bold pb-2 text-xl">Anmeldung erfolgreich</h2>
				<p>Danke für deine Anmeldung. Bitte vergiss nicht deine E-Mail Addresse zu bestätigen.</p>
			</div>
			<button slot="buttons" on:click={closeModal}>Schließen</button>
		</Modal>
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
		/>
	{:else}
		<div class="h-16" />
	{/if}
	{#if dev}
		<Captcha bind:captcha />
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
