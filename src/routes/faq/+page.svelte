<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Header from '$lib/components/Header.svelte';
	import { images } from '$lib/utils/images';
	import Faq from './Faq.svelte';
</script>

<svelte:head>
	<title>Häufige Fragen - Moravian Brass Festival Berlin 2023</title>
</svelte:head>

<Container color="blue" image={images[1]}>
	<slot slot="left">
		<img alt="Bär mit Trompete" src="/bear_blue.svg" width="200" height="200" />
		<Header color={'blue'} title="Fragen und Antworten" subTitle="Alle Informationen" />
		<div class="my-8 flex flex-col">
			<Faq question="Wann findet das Bläsertreffen statt?">
				Fr. 26.05.2023 (Anreise) bis Mo. 29.05.2023 (Abreise)
			</Faq>
			<Faq question="Wo findet das Bläsertreffen statt?">
				Wir freuen uns, euch ins Böhmische Dorf in Berlin einladen zu dürfen. Den Großteil der Zeit
				werden wir auf dem Gelände der Gemeinde verbringen. Es wird aber auch Gelegenheiten geben,
				die Stadt etwas kennenzulernen.

				<a
					href="https://goo.gl/maps/FJaHy7ys4AEAhd9p6"
					class="mt-2 inline-flex items-center border-2 p-3"
					target="_blank"
					rel="noreferrer"
				>
					<img width="20" height="20" alt="Google Maps Logo" src="/google_maps.svg" class="mr-3" />
					In Google Maps anzeigen
				</a>
			</Faq>
		</div>
	</slot>
	<div slot="right" class="my-8 flex flex-col items-start">
		<Faq question="Wie viel kostet das Bläsertreffen?">
			Der Teilnehmerbeitrag beträgt für Vollzahler <b>120 €</b> und ermäßigt <b>90 €</b>. Ermäßigt
			sind Kinder, Jugendliche in Ausbildung und Studierende. <br />
			Zuschüsse können bei jeder Gemeinde beantragt werden.
			<br />
			Darin enthalten ist die Verpflegung auf dem Festivalgelände sowie die Teilnahme an allen Programmpunkten.
			Nicht enthalten ist die Unterkunft (und Frühstück), da diese dieses Mal selbst organisiert werden
			muss.
			<br />
			Da das Programm sich für Gäste, bis auf die Proben, nicht unterscheidet, wird es hier auch keinen
			preislichen Unterschied geben.
		</Faq>
		<Faq question="Wo werden wir untergebracht?">
			Das Vorbereitungsteam hat dieses Mal entschieden, dass es einfacher für alle ist, wenn jeder
			sich selbst ein Quartier sucht. Eine Liste von Hotels in der Umgebung findet ihr auf der <a
				href="/registration"
				class="text-blue-50">Anmeldungsseite</a
			>.
			<br />
			Zurzeit versuchen wir noch ein Massenquartier für Jugendliche zu organisieren, um eine kostengünstige
			Teilnahme zu ermöglichen. Details hierzu folgen in Kürze.
		</Faq>
	</div>
</Container>
