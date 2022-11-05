<script lang="ts">
	export let title: string;
	const calculateDaysLeft = (start: Date) => {
		const distance = start.getTime() - new Date().getTime();
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		return days;
	};
	const number = calculateDaysLeft(new Date('2023-05-26'));
</script>

{#if number > 0}
	<div class="module mb-2 min-w-[200px] border-2 border-b-0 border-theme-blue">
		<div
			class="bottomBorder 
        before:border-b-2 before:border-theme-blue 
        after:border-b-2 after:border-theme-blue"
		>
			<div class="borderText text-gray-600">
				<span class="text-lg font-bold">{title}</span>
			</div>
		</div>
		<div class="flex justify-center">
			<span class="text-center text-6xl font-medium">{number || '. . .'}</span>
		</div>
	</div>
{/if}

<style>
	.module {
		position: relative;
		padding: 20px 50px;
		min-width: 10;
	}
	.borderText {
		padding-left: 10px;
		padding-right: 10px;
		margin-bottom: -10px;
		text-align: center;
	}
	.bottomBorder {
		display: flex;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.bottomBorder::before {
		display: block;
		content: '';
		flex: 2 0 0;
	}
	.bottomBorder::after {
		display: block;
		content: '';
		flex: 2 0 0;
	}
</style>
