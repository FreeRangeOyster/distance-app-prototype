export function load() {
	return {
		results: [
			{
				id: 1,
				datetime: Date.now(),
				sourceAddress: '123 Main Street',
				destinationAddress: '456 Broadway',
				miles: 5,
				kilometers: 5 * 1.6
			},
			{
				id: 2,
				datetime: Date.now(),
				sourceAddress: '456 Broadway',
				destinationAddress: '123 Main Street',
				miles: 5,
				kilometers: 5 * 1.6
			}
		]
	};
}
