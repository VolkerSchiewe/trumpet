<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const sortedChoirs = Object.keys(data.distribution).sort(
		(a, b) => data.distribution[b].total - data.distribution[a].total
	);
</script>

<div class="p-5">
	<h1 class="text-2xl">Statistics</h1>
	<div class="flex gap-5">
		<details>
			<summary>Actions</summary>
			<!-- <form action="?/reminder" method="POST">
				<button class="rounded border-2 px-2 py-1" type="submit">Send verification reminder</button>
			</form> -->
		</details>
		<details>
			<summary>Download CSV</summary>
			<a
				href="/admin/csv-download?header=name,email,address,zip_city,type,choir,voice,departure,state,notes,confirmation_id"
			>
				<button class="rounded border-2 px-2 py-1">Full List</button>
			</a>
			<a href="/admin/csv-download?header=name,type,choir">
				<button class="rounded border-2 px-2 py-1">Names</button>
			</a>
		</details>
		<details>
			<summary>Chor Verteilung</summary>
			{#each sortedChoirs as choir}
				<h2 class="mt-4 text-lg">{choir}</h2>
				{#each Object.keys(data.distribution[choir]) as voice}
					<span class="mx-2">{voice}: {data.distribution[choir][voice]} </span>
				{/each}
			{/each}
		</details>
		<details>
			<summary>Preis Übersicht</summary>
			<div class="flex flex-col">
				{#each Object.keys(data.prices) as price}
					<span class="mx-2">{price}: {data.prices[price]} </span>
				{/each}
			</div>
		</details>
	</div>
</div>
