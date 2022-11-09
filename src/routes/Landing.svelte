<script lang="ts">
	import Carousel from './Carousel.svelte';
</script>

<div class="w-full md:relative">
	<div
		class="z-10 flex w-full flex-col items-center gap-8 bg-theme-purple/80 p-4 py-8 text-white md:absolute md:top-0 md:right-0 md:bottom-0 md:w-96 md:items-start md:p-8"
	>
		<div class="flex flex-col items-center md:items-start">
			<h1 class="mt-6 text-lg md:mt-3 font-light">39. Brüderisches Bläsertreffen</h1>
			<hr class="mt-2 w-20 border-2 border-theme-yellow" />
		</div>
		<img class="max-w-xl md:hidden" src="logo.svg" alt="" />
		<div class="hidden flex-grow md:block" />
		<img
			class="max-w-xl"
			src="/moravian_brass_23_weiss.svg"
			alt="Moravian Brass Festival Berlin 2023"
		/>
	</div>
	<Carousel />
	<img class="hidden max-w-sm md:absolute md:top-5 md:left-5 md:block" src="logo.svg" alt="" />
</div>
