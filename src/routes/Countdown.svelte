<script lang="ts">
	import FramedNumber from '$lib/components/FramedNumber.svelte';
	export let targetDate: Date;
	function calculateDaysLeft(start: Date): number {
		const distance = start.getTime() - new Date().getTime();
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		return days;
	}
	const number = calculateDaysLeft(targetDate);
</script>

{#if number > 0}
	<FramedNumber title={'Tage bis Beginn'} {number} />
{/if}
