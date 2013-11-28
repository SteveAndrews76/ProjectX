// JavaScript Document
var BuildPT1=new google.maps.LatLng(-37.97563981433231,145.21886229515076);
var BuildPT2=new google.maps.LatLng(-37.97563981433231,145.21900713443756);
var BuildPT3=new google.maps.LatLng(-37.97565250019989,145.21915197372437);
var BuildPT4=new google.maps.LatLng(-37.97504357608296,145.22158473730087);


function BuildPT14()
{
	//Building PT1
	var markerPT1=new google.maps.Marker({
		position:BuildPT1,
		animation: google.maps.Animation.DROP,
	});
	
	markerPT1.setMap(map);
	
	var infowindowPT1 = new google.maps.InfoWindow({
		content:"Building PT1",
	});
	
	google.maps.event.addListener(markerPT1, 'click', function() {
		infowindowPT1.open(map,markerPT1);
	});
	
	//Building PT2
	var markerPT2=new google.maps.Marker({
		position:BuildPT2,
		animation: google.maps.Animation.DROP,
	});
	
	markerPT2.setMap(map);
	
	var infowindowPT2 = new google.maps.InfoWindow({
		content:"Building PT2",
	});
	
	google.maps.event.addListener(markerPT2, 'click', function() {
		infowindowPT2.open(map,markerPT2);
	});
	
	//Building PT3
	var markerPT3=new google.maps.Marker({
		position:BuildPT3,
		animation: google.maps.Animation.DROP,
	});
	
	markerPT3.setMap(map);
	
	var infowindowPT3 = new google.maps.InfoWindow({
		content:"Building PT3",
	});
	
	google.maps.event.addListener(markerPT3, 'click', function() {
		infowindowPT3.open(map,markerPT3);
	});
	
	//Building PT4
	var markerPT4=new google.maps.Marker({
		position:BuildPT4,
		animation: google.maps.Animation.DROP,
	});
	
	markerPT4.setMap(map);
	
	var infowindowPT4 = new google.maps.InfoWindow({
		content:"Building PT4",
	});
	
	google.maps.event.addListener(markerPT4, 'click', function() {
		infowindowPT4.open(map,markerPT4);
	});
}