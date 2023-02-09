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
			Hierbei handelt es sich um ein vorläufiges Programm, um eine grobe Orientierung zu geben. Bis
			zum Bläsertreffen werdet ihr hier immer neue Informationen finden.
		</p>
		<Header color={'green'} title="Freitag" subTitle="26.05.2023" />
		<table class="block">
			<li>Anreise</li>
			<li>Abendbrot</li>
			<li>Eröffnung/Abendsegen</li>
			<li>anschl. gemütliches Beisammensein</li>
		</table>
		<Header color={'green'} title="Samstag" subTitle="27.05.2023" />
		<ul class="mb-8 list-disc">
			<li>Morgensegen</li>
			<li>1. Gesamtprobe</li>
			<li>Kaffee/Teepause</li>
			<li>2. Gesamtprobe</li>
			<li>Mittagessen</li>
			<li>3. Gesamtprobe</li>
			<li>Kaffee/Teepause</li>
			<li>Workshops</li>
			<li>Abendbrot</li>
			<li>Singstunde</li>
			<li>Vorstellung der Ergebnisse der Workshops</li>
			<li>anschl. gemütliches Beisammensein</li>
		</ul>
	</slot>
	<slot slot="right">
		<Header title="Sonntag" subTitle="28.05.2023" />
		<ul class="list-disc">
			<li>Gottesdienste in verschiedenen Gemeinden</li>
			<li>Mittagessen</li>
			<li>4. Gesamtprobe</li>
			<li>Konzert</li>
			<li>Gruppenfoto</li>
			<li>Abendbrot</li>
			<li>Bunter Abend</li>
			<li>anschl. gemütliches Beisammensein</li>
		</ul>
		<Header title="Montag" subTitle="29.05.2023" />
		<ul class="mb-8 list-disc">
			<li>Aufblasen der Jungbläser</li>
			<li>Gemeinsame Abendmahlsfeier mit Predigt</li>
			<li>Ausflug (Schifffahrt ca. 3 Std.) inkl. Mittagsimbiss</li>
			<li>Verabschiedung vorher für die, die eher abfahren oder im Anschluss</li>
		</ul>
	</slot>
</Container>
