<script lang="ts">
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import './glide-theme.css';

	onMount(() => {
		new Glide('.glide', {
			autoplay: 5000,
			hoverpause: true
		}).mount();
	});
	type ImageData = {
		src: string;
		alt: string;
		positionClass: 'object-bottom' | 'object-center' | 'object-right';
	};
	const images: ImageData[] = [
		{ src: '/images/rix_panorama_01.jpeg', alt: '', positionClass: 'object-right' },
		{ src: '/images/rix_02.jpeg', alt: '', positionClass: 'object-center' },
		{ src: '/images/herrnhuter_weg_02.jpeg', alt: '', positionClass: 'object-center' },
		{ src: '/images/berlin_panorama_02.jpeg', alt: '', positionClass: 'object-bottom' }
	];
</script>

<div class="glide">
	<div data-glide-el="track" class="glide__track">
		<div class="glide__slides h-[16rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem]">
			{#each images as image}
				<img class={`object-cover ${image.positionClass}`} src={image.src} alt={image.alt} />
			{/each}
		</div>
		<div class="glide__bullets" data-glide-el="controls[nav]">
			{#each images as _, i}
				<button class="slider_bullet glide__bullet" data-glide-dir={`=${i}`} />
			{/each}
		</div>
	</div>
</div>
