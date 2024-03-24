<script lang="ts">
	import Header from '$lib/Header.svelte';
	import type { SearchResult } from '$lib/SearchResult';

	export let data: { results: SearchResult[] };

	let results: SearchResult[] = data.results;
</script>

<Header>
	<a slot="button" class="button header" href="/">Back to Calculator</a>
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
							<td>{result.miles}</td>
							<td>{result.kilometers}</td>
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
</style>
