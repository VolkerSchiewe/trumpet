<script lang="ts">
	import { createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();

	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	interface Props {
		open: boolean;
		body?: import('svelte').Snippet;
		buttons?: import('svelte').Snippet;
	}

	let { open, body, buttons }: Props = $props();
	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}
</script>

{#if open}
	<div
		class="relative z-30"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		transition:fade={{ duration: 50 }}
	>
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

		<!-- svelte-ignore a11y_interactive_supports_focus -->
		<div
			role="button"
			class="fixed inset-0 z-10 overflow-y-auto"
			onclick={close}
			onkeyup={(e) => {
				if (e.key === 'Escape') close();
			}}
		>
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div
					role="button"
					onclick={stopPropagation(bubble('click'))}
					class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
				>
					<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						{@render body?.()}
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						{@render buttons?.()}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
