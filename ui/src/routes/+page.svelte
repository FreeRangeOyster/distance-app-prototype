<script lang="ts">
	import Header from '$lib/Header.svelte';
	import type { SearchResult } from '$lib/SearchResult';
	import AddressInput from './AddressInput.svelte';
	import DistanceUnitSelector from './DistanceUnitSelector.svelte';

	const ALL_UNITS = <const>['Miles', 'Kilometers', 'Both'];
	type UnitTuple = typeof ALL_UNITS;
	type Unit = UnitTuple[number];
	let selectedUnit: Unit = 'Miles';

	let sourceAddress: string, destinationAddress: string;
	let searchResult: SearchResult | null = null;

	function calculate() {
		searchResult = {
			id: 1,
			datetime: Date.now(),
			sourceAddress,
			destinationAddress,
			miles: 5,
			kilometers: 5 * 1.6
		};
	}
</script>

<Header>
	<a class="header button" slot="button" href="/history">View Historical Queries</a>
</Header>
<div class="main">
	<div class="address-section">
		<div class="row">
			<AddressInput label="Source Address" bind:address={sourceAddress} />
			<AddressInput label="Destination Address" bind:address={destinationAddress} />
			<DistanceUnitSelector bind:selectedUnit />
			<div class="results">
				<span>Distance</span>
				{#if searchResult}
					{#if ['Miles', 'Both'].includes(selectedUnit)}
						<div>{searchResult.miles}mi</div>
					{/if}
					{#if ['Kilometers', 'Both'].includes(selectedUnit)}
						<div>{searchResult.kilometers}km</div>
					{/if}
				{/if}
			</div>
		</div>
		<button
			class="calculate button"
			disabled={!sourceAddress || !destinationAddress}
			type="submit"
			on:click={calculate}
		>
			Calculate Distance
		</button>
	</div>
</div>

<style>
	.main {
		gap: 32px;
	}
	.address-section {
		padding: 16px;
		gap: 32px;
	}
	.row {
		display: flex;
		flex-direction: row;
		gap: 32px;
	}
	.button {
		border: none;
	}
	.button.header {
		background-color: #313030;
		color: white;
	}
	.button.calculate {
		background-color: #d10001;
		color: white;
	}
	.button.calculate:disabled {
		background-color: #bbbbb9;
		color: #7d7d7c;
	}
</style>
