<script lang="ts">
	export let question: string;
</script>

<h2 class="text-xl font-semibold mt-5 mb-1">{question}</h2>
<p>
	<slot />
</p>
