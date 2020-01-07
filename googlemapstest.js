require('dotenv').config();

const googleMapsClient = require('@google/maps').createClient({
	key: process.env.GOOGLEMAPS_API_KEY,
	Promise: Promise
});


async function geocoder(location) {
	try {
		let response = await googleMapsClient
			.geocode({
				address: location
			})
			.asPromise();
		console.log(response.json.results[0].geometry.location)
	} catch (err) {
		console.log(err.message)
	}
};

geocoder('Alaska, US');