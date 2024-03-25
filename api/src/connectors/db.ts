import mariadb from 'mariadb';
import SearchResult from '@/models/searchResult.js';

type SearchResultToSave = Omit<SearchResult, 'id' | 'datetime' | 'kilometers'>;

const pool = mariadb.createPool({
	host: 'db',
	user: 'distance_app_user',
	password: 'secretpassword',
	database: 'distance_app'
});

const kilometersPerMile = 1.609;

export const insert = async function (data: SearchResultToSave): Promise<SearchResult> {
	console.debug('Getting connection');
	const conn = await pool.getConnection();
	console.debug('Querying');
	const res = await conn.query(
		'INSERT INTO search_history(sourceAddress, destinationAddress, miles) VALUES (?,?,?)',
		[data.sourceAddress, data.destinationAddress, data.miles]
	);
	console.debug('Insert complete, getting result for ' + res.insertId);
	const savedResult = (
		await conn.query('SELECT * FROM search_history WHERE id=? LIMIT 1', res.insertId)
	)[0];
	const miles = Number.parseFloat(savedResult.miles);
	const kilometers = miles * kilometersPerMile;
	return { ...savedResult, miles, kilometers };
};

export const getAll = async function (): Promise<Array<SearchResult>> {
	console.debug('Getting connection');
	const conn = await pool.getConnection();
	console.debug('Querying');
	const results: Array<SearchResult> = await conn.query('SELECT * FROM search_history');
	console.debug('Got results, correcting numbers');
	return results.map(function (val: SearchResult): SearchResult {
		const miles = Number.parseFloat(val.miles.toString());
		const kilometers = miles * kilometersPerMile;
		return { ...val, miles, kilometers };
	});
};
