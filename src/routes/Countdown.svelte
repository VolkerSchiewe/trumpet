<script lang="ts">
	export let title: string;
	function calculateDaysLeft(start: Date): number {
		const distance = start.getTime() - new Date().getTime();
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		return days;
	}
	const number = calculateDaysLeft(new Date('2023-05-26'));
</script>

{#if number > 0}
	<div class="relative mb-2 min-w-[200px] border-2 border-b-0 border-theme-blue py-5 px-12">
		<div
			class="bottomBorder absolute bottom-0 left-0 flex w-full
        before:block before:flex-grow before:border-b-2 before:border-theme-blue before:content-['']
        after:block after:flex-grow after:border-b-2 after:border-theme-blue after:content-['']"
		>
			<div class="-mb-[10px] px-3 text-center text-gray-600">
				<span class="text-lg font-semibold">{title}</span>
			</div>
		</div>
		<div class="flex justify-center">
			<span class="text-center text-6xl font-bold">{number || '. . .'}</span>
		</div>
	</div>
{/if}
