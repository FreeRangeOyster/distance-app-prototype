<script lang="ts">
	const ALL_UNITS = <const>['Miles', 'Kilometers', 'Both'];
	type UnitTuple = typeof ALL_UNITS;
	type Unit = UnitTuple[number];
	export let selectedUnit: Unit = 'Miles';
</script>

<div class="vertical-radio">
	<span>Unit</span>
	{#each ALL_UNITS as unit}
		<label>
			<input type="radio" bind:group={selectedUnit} value={unit} />
			{unit}
		</label>
	{/each}
</div>

<style>
	.vertical-radio {
		display: flex;
		flex-direction: column;
	}
</style>
