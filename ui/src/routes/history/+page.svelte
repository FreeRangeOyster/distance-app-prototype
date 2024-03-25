<script lang="ts">
	export let data: HistoryResponse;

	import Header from '$lib/Header.svelte';
	import type { SearchResult } from '$lib/searchResult';
	import Fa from 'svelte-fa';
	import { faCalculator } from '@fortawesome/free-solid-svg-icons';
	import type HistoryResponse from '$lib/historyResponse';

	const results: SearchResult[] = data.results;
</script>

<svelte:head>
	<title>History</title>
</svelte:head>

<Header>
	<a slot="button" class="button header" href="/">
		Back to Calculator
		<Fa icon={faCalculator} />
	</a>
</Header>
<div class="main">
	<div id="crawls">
		<div class="data-table">
			<div class="header">
				<h2>Historical Queries</h2>
				<span>History of the user's queries.</span>
			</div>
			<table>
				<tr>
					<th>Source Address</th>
					<th>Destination Address</th>
					<th>Miles</th>
					<th>Kilometers</th>
				</tr>
				{#if !results.length}
					<tr><td rowspan="4">No queries found</td></tr>
				{:else}
					{#each results as result}
						<tr>
							<td>{result.sourceAddress}</td>
							<td>{result.destinationAddress}</td>
							<td>{result.miles.toFixed(2)}</td>
							<td>{result.kilometers.toFixed(2)}</td>
						</tr>
					{/each}
				{/if}
			</table>
		</div>
	</div>
</div>

<style>
	.main {
		gap: 32px;
	}
	.button.header {
		background-color: white;
		color: black;
		border: 1px solid black;
		display: flex;
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th,
	td {
		text-align: left;
		padding: 11px 16px;
		gap: 16px;
	}
	th {
		background-color: #e0e0de;
	}
	td {
		background-color: #f8f8f6;
		border-top: 1px #e0e0de;
	}
	tr:has(td) {
		border-bottom: 1px solid #e0e0de;
	}
</style>
