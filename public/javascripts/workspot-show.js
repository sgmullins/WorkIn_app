let map;
	
function initMap() {
	let myLatLng = {
		lat: workspot.lat,
		lng: workspot.lng
	};

	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 9
	});

	let marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: workspot.name
	});
}