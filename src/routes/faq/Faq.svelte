<script lang="ts">
	export let question: string;
</script>

<h2 class="mb-1 mt-5 text-xl font-semibold">{question}</h2>
<p>
	<slot />
</p>
