// JavaScript Document
var myCenter=new google.maps.LatLng(-37.97512392052657,145.2195382118225);


function initialize()
{
	var imageBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(-37.976477076889466, 145.21638929843903),
		new google.maps.LatLng(-37.973999090313114, 145.22266030311584));
		//Bottom Left corner Co-ordinates are first. the Top Right Co-ordinates are second.

	
	var mapProp = {
		center: myCenter,
		zoom:17,
		mapTypeId:google.maps.MapTypeId.HYBRID
	};
 	//centering the map, setting how zoomed in and the type of map
 
 
	var map=new google.maps.Map(document.getElementById("Map"),mapProp);
  
	ChisholmDandenong = new google.maps.GroundOverlay('DandenongLayout2.png', imageBounds);
	ChisholmDandenong.setMap(map);	
	
}

google.maps.event.addDomListener(window, 'load', initialize);