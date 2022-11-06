<script lang="ts">
	export let open: boolean;

	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
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
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

		<div
			class="fixed inset-0 z-10 overflow-y-auto"
			on:click={close}
			on:keyup={(e) => {
				if (e.key === 'Escape') close();
			}}
		>
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click|stopPropagation
					class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl"
				>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<slot name="body" />
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<slot name="buttons" />
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
