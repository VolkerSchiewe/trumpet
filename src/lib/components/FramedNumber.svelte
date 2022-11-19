<script lang="ts">
	export let title: string;
	export let number: number;
</script>

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
