<script lang="ts">
	import { onMount } from 'svelte';
	import Glide from '@glidejs/glide';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import './glide-theme.css';
	import { images } from '$lib/utils/images';

	onMount(() => {
		new Glide('.glide', {
			autoplay: 5000,
			hoverpause: true
		}).mount();
	});
</script>

<div class="glide">
	<div data-glide-el="track" class="glide__track">
		<div class="glide__slides h-[16rem] md:h-[50vw]">
			{#each images as image}
				<img class={`object-cover`} src={image.src} alt={image.alt} />
			{/each}
		</div>
		<div class="glide__bullets" data-glide-el="controls[nav]">
			{#each images as _, i}
				<button
					class="slider_bullet glide__bullet"
					data-glide-dir={`=${i}`}
					aria-label={`Bild ${i + 1}`}
				/>
			{/each}
		</div>
	</div>
</div>
