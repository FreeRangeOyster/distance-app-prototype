import { RequestHandler, response } from 'express';
import SearchResult from '@/models/searchResult.js';
const searchResults: SearchResult[] = [
	{
		id: 1,
		datetime: Date.now(),
		sourceAddress: '123 Main Street',
		destinationAddress: '456 Broadway',
		miles: 5,
		kilometers: 8
	},
	{
		id: 2,
		datetime: Date.now(),
		sourceAddress: '456 Broadway',
		destinationAddress: '123 Main Street',
		miles: 5,
		kilometers: 8
	}
];

export const getHistory: RequestHandler = (req, res, next) => {
	res.status(200).json({ results: searchResults });
};
