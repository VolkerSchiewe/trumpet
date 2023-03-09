<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const sortedChoirs = Object.keys(data).sort((a, b) => data[b].total - data[a].total);
</script>

<div class="p-5">
	<h1 class="text-2xl">Statistics</h1>
	<details>
		<summary>Download CSV</summary>
		<a
			href="/admin/csv-download?header=name,email,address,zip_city,type,choir,voice,departure,state,notes"
			><button class="rounded border-2 px-2 py-1">Full List</button></a
		>
		<a href="/admin/csv-download?header=name,type,choir"
			><button class="rounded border-2 px-2 py-1">Names</button></a
		>
	</details>
	<div class="flex gap-5">
		<details>
			<summary>Chor Verteilung</summary>
			{#each sortedChoirs as choir}
				<h2 class="mt-4 text-lg">{choir}</h2>
				{#each Object.keys(data[choir]) as voice}
					<span class="mx-2">{voice}: {data[choir][voice]} </span>
				{/each}
			{/each}
		</details>
	</div>
</div>
