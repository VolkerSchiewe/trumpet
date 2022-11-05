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
	type ImageData = { src: string; alt: string; position: 'bottom' | 'center' | 'right' };
	const images: ImageData[] = [
		{ src: '/images/rix_panorama_01.jpg', alt: '', position: 'right' },
		{ src: '/images/rix_02.jpg', alt: '', position: 'center' },
		{ src: '/images/herrnhuter_weg_02.jpg', alt: '', position: 'center' },
		{ src: '/images/berlin_panorama_02.jpg', alt: '', position: 'bottom' }
	];
</script>

<div class="glide">
	<div data-glide-el="track" class="glide__track">
		<div class="glide__slides max-h-96 md:max-h-[30rem]">
			{#each images as image}
				<img
					class={`object-cover ${
						image.position === 'bottom'
							? 'object-bottom'
							: image.position === 'right'
							? 'object-right'
							: 'object-center'
					}`}
					src={image.src}
					alt={image.alt}
				/>
			{/each}
		</div>
		<div class="glide__bullets" data-glide-el="controls[nav]">
			{#each images as _, i}
				<button class="slider_bullet glide__bullet" data-glide-dir={`=${i}`} />
			{/each}
		</div>
	</div>
</div>
