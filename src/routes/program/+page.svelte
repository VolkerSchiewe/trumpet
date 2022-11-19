<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Container from '$lib/components/Container.svelte';
	import { images } from '$lib/utils/images';
</script>

<svelte:head>
	<title>Programm - Moravian Brass Festival Berlin 2023</title>
</svelte:head>

<Container color="green" image={images[0]}>
	<slot slot="left">
		<img alt="Bär mit Tuba" src="/bear_green.svg" width="200" height="200" />
		<p class="hyphen text-justify font-semibold">
			Hierbei handelt es sich, um ein vorläufiges Programm, um eine grobe Orientierung zu geben. Bis
			zum Bläsertreffen werdet ihr hier immer neue Informationen finden.
		</p>
		<Header color={'green'} title="Freitag" subTitle="26.05.2023" />
		<table class="block">
			<tr>
				<td class="text-end">ab 16:00 Uhr •</td> <td class="p-1"> Anreise</td>
			</tr>
			<tr>
				<td class="text-end">18:00 Uhr •</td> <td class="p-1"> Abendbrot</td>
			</tr>
			<tr>
				<td class="text-end">20:30 Uhr •</td> <td class="p-1"> Eröffnung</td>
			</tr>
		</table>
		<Header color={'green'} title="Samstag" subTitle="27.05.2023" />
		<ul class="mb-8 list-disc">
			<li>Morgensegen Gesamtprobe</li>
			<li>Workshops</li>
			<li>Mittagessen</li>
			<li>Führungen Böhm. Dorf, Comenius Garten</li>
			<li>Abendmahlsgottesdienst</li>
		</ul>
	</slot>
	<slot slot="right">
		<Header title="Sonntag" subTitle="28.05.2023" />
		<ul class="list-disc">
			<li>Gottesdienst in verschieden Gemeinden</li>
			<li>Hauptprobe</li>
			<li>Konzert</li>
			<li>Bunter Abend</li>
		</ul>
		<Header title="Montag" subTitle="29.05.2023" />
		<ul class="mb-8 list-disc">
			<li>Gottesdienst</li>
			<li>Ausflug (Schifffahrt ca. 3 Std.)</li>
			<li>Verabschiedung vorher für die die eher abfahren oder im Anschluss</li>
		</ul>
	</slot>
</Container>
