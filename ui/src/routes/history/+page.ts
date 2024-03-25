import type HistoryResponse from '$lib/historyResponse.js';

export async function load({ fetch }) {
	try {
		const res = await fetch('http://localhost:4000/history');
		const data: HistoryResponse = await res.json();
		return data;
	} catch (err) {
		console.error(err);
		return { results: [] };
	}
}
