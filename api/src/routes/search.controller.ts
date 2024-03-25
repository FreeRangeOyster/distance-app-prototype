import { RequestHandler } from 'express';
import SearchResult from '@/models/searchResult.js';
import SearchRequest from '@/models/searchRequest.js';
import NominatimResponse from '@/models/nominatimResponse.js';
import { insert } from '../connectors/db.js';

const searchApiUrl = 'https://nominatim.openstreetmap.org/search';
const nauticalMilesPerDegreeLat = 60;
const landMilesPerNauticalMile = 1.151;
const degreeLongitudeInMilesAtEquator = 69.172;

export const search: RequestHandler = async (req, res) => {
	try {
		console.debug(req.body);
		const { sourceAddress, destinationAddress } = req.body as SearchRequest;

		const source = await getAddress(sourceAddress);
		if (!source) {
			res.status(400);
			return;
		}
		console.debug(source);
		const destination = await getAddress(destinationAddress);
		if (!destination) {
			res.status(400);
			return;
		}
		console.debug(destination);

		const miles = getDistance(source, destination);

		// Save to database
		const searchResult: SearchResult = await insert({ sourceAddress, destinationAddress, miles });

		console.debug(searchResult);
		res.status(201).json(searchResult);
	} catch (err) {
		console.error(err);
		throw err;
	}
};

async function getAddress(address: string): Promise<NominatimResponse> {
	const response = await fetch(
		`${searchApiUrl}?q=${encodeURIComponent(address)}&format=json&limit=1`
	);
	const data: NominatimResponse[] = (await response.json()) as NominatimResponse[];
	if (!data?.length) throw 'Invalid';
	return data[0];
}

function getDistance(source: NominatimResponse, destination: NominatimResponse): number {
	const latitudeDifference: number = Math.abs(
		Number.parseFloat(source.lat) - Number.parseFloat(destination.lat)
	);
	const averageLatitude = (Number.parseFloat(source.lat) - Number.parseFloat(destination.lat)) / 2;
	const longitudeDifference: number = Math.abs(
		Number.parseFloat(source.lon) - Number.parseFloat(destination.lon)
	);
	const latitudeDifferenceInMiles =
		latitudeDifference * nauticalMilesPerDegreeLat * landMilesPerNauticalMile;
	// This ends up being an approximation, but I'm not willing to do the more complex math
	const longitudeDifferenceInMiles = degreesLongitudeInMiles(longitudeDifference, averageLatitude);
	const distanceInMiles = getHypotenuse(latitudeDifferenceInMiles, longitudeDifferenceInMiles);
	return distanceInMiles;
}

function degreesLongitudeInMiles(degreesLongitude: number, latitude: number): number {
	const latitudeRadians = latitude * (Math.PI / 180);
	const degreeLongitudeInMiles = Math.cos(latitudeRadians) * degreeLongitudeInMilesAtEquator;
	return degreeLongitudeInMiles * degreesLongitude;
}

function getHypotenuse(a: number, b: number): number {
	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
