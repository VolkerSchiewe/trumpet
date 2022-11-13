<script lang="ts">
	import Carousel from './Carousel.svelte';
</script>

<div class="w-full md:relative">
	<div
		class="z-10 flex w-full flex-col items-center gap-8 bg-theme-purple/80 p-4 py-8 text-white md:absolute md:top-0 md:right-0 md:bottom-0 md:w-2/6 md:items-start md:p-8"
	>
		<div class="flex flex-col items-center md:items-start">
			<h1 class="mt-6 text-lg xl:text-2xl md:mt-3 font-light">39. Brüderisches Bläsertreffen</h1>
			<hr class="mt-2 w-20 md:w-30 xl:w-40 border-2 border-theme-yellow" />
		</div>
		<img class="max-w-xl md:hidden" src="logo.svg" alt="Logo mit 4 Berliner Bären die Waldhorn, Trompete, Posaune und Tuba spielen" />
		<div class="hidden flex-grow md:block" />
		<img
			class="max-w-xl xl:max-w-5xl md:mb-20"
			src="/slogan.svg"
			alt="Moravian Brass Festival Berlin 2023"
		/>
	</div>
	<Carousel />
	<img class="hidden h-3/4 md:absolute md:top-5 md:left-5 md:block" src="logo.svg" alt="Logo mit 4 Berliner Bären die Waldhorn, Trompete, Posaune und Tuba spielen" />
</div>
