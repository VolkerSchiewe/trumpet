<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Container from '$lib/components/Container.svelte';
	import { images } from '$lib/utils/images';
	import Timetable from '$lib/components/Timetable.svelte';
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
		<Timetable
			data={[
				{ time: '16:00 Uhr', label: 'Anreise' },
				{ time: '18:00 Uhr', label: 'Abendbrot' },
				{ time: '20:30 Uhr', label: 'Eröffnung/Abendsegen' },
				{ time: 'anschl.', label: 'gemütliches Beisammensein' }
			]}
		/>
		<Header color={'green'} title="Samstag" subTitle="27.05.2023" />
		<Timetable
			data={[
				{ time: '08:45 Uhr', label: 'Morgensegen' },
				{ time: '09:30 Uhr', label: '1. Gesamtprobe' },
				{ time: '10:30 Uhr', label: 'Kaffee/Teepause' },
				{ time: '11:00 Uhr', label: '2. Gesamtprobe' },
				{ time: '12:30 Uhr', label: 'Mittagessen' },
				{ time: '13:30 Uhr', label: '3. Gesamtprobe' },
				{ time: '15:00 Uhr', label: 'Kaffee/Teepause' },
				{ time: '15:30 Uhr', label: 'Workshops' },
				{ time: '18:00 Uhr', label: 'Abendbrot' },
				{ time: '19:30 Uhr', label: 'Singstunde & Vorstellung der Ergebnisse der Workshops' },
				{ time: 'anschl.', label: 'gemütliches Beisammensein' }
			]}
		/>
		<div class="mt-3" />
	</slot>
	<slot slot="right">
		<Header title="Sonntag" subTitle="28.05.2023" />
		<Timetable
			data={[
				{ time: '10:00 Uhr', label: 'Gottesdienste in verschiedenen Gemeinden' },
				{ time: '12:30 Uhr', label: 'Mittagessen' },
				{ time: '13:30 Uhr', label: '4. Gesamtprobe' },
				{ time: '16:00 Uhr', label: 'Konzert Gutshof Schloss Britz' },
				{ time: '17:30 Uhr', label: 'Gruppenfoto' },
				{ time: '18:00 Uhr', label: 'Abendbrot' },
				{ time: '20:00 Uhr', label: 'Bunter Abend' },
				{ time: 'anschl.', label: 'gemütliches Beisammensein' }
			]}
		/>
		<Header title="Montag" subTitle="29.05.2023" />
		<Timetable
			data={[
				{ time: '09:00 Uhr', label: 'Aufblasen der Jungbläser' },
				{ time: '10:00 Uhr ', label: 'Gemeinsame Abendmahlsfeier mit Predigt' },
				{ time: '12:00 Uhr ', label: 'Mittagessen' },
				{ time: '14:00 Uhr ', label: 'Verabschiedung' }
			]}
		/>
	</slot>
</Container>
