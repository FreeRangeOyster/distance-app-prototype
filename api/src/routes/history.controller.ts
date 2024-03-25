import { RequestHandler } from 'express';
import SearchResult from '@/models/searchResult.js';
import { getAll } from '../connectors/db.js';

export const getHistory: RequestHandler = async (req, res, next) => {
	const searchResults: Array<SearchResult> = await getAll();
	res.status(200).json({ results: searchResults });
};
