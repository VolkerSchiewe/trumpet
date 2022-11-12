<script lang="ts">
	export let question: string;
</script>

<h2 class="mt-5 mb-1 text-xl font-semibold">{question}</h2>
<p>
	<slot />
</p>
