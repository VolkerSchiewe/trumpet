<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Container color="blue">
	{#snippet left()}
		<img class="max-w-xs self-center pb-10" src="/bear_blue.svg" alt="Logo" />
	{/snippet}
	{#snippet right()}
		<div>
			<Header title="Etwas ist schief gelaufen" subTitle="Ungültiger Link" link="/" />
			<p class="mt-5">
				Wir haben leider keine Anmeldung zu deinem Link gefunden. Versuche es gern noch mal oder
				melde dich bei <a href="mailto:info@blaesertag2023.de" target="_blank"
					>info@blaesertag2023.de</a
				>
			</p>
		</div>
	{/snippet}
</Container>
