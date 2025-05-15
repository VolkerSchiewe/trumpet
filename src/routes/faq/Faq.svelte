<script lang="ts">
	interface Props {
		question: string;
		children?: import('svelte').Snippet;
	}

	let { question, children }: Props = $props();
</script>

<h2 class="mb-1 mt-5 text-xl font-semibold">{question}</h2>
<p>
	{@render children?.()}
</p>
