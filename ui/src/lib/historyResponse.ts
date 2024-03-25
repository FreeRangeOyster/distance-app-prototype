import type { SearchResult } from './searchResult';

export default interface HistoryResponse {
	results: Array<SearchResult>;
}
