// JavaScript Document
// JavaScript Document
var myCenter=new google.maps.LatLng(-37.97512392052657,145.2195382118225);
var BuildA=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildB=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildC=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildD=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildE=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildF=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildG=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildH=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildJ=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildK=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildL=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildM=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildN=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildO=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildP=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildQ=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildR=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildS=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildT=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildU=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildV=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildW=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildY=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildZ=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildPt1=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildPt2=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildPt3=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildPt4=new google.maps.LatLng(-37.97415,145.2175491231842);
var ChisholmDandenong;

function initialize()
{
	var imageBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-37.97668856261104, 145.21637320518494),
      new google.maps.LatLng(-37.9740004626132, 145.2226710319519));
	  //Bottom Left corner Co-ordinates are first. the Top Right Co-ordinates are second.

	
	var mapProp = {
	 center: myCenter,
 	 zoom:17,
 	 mapTypeId:google.maps.MapTypeId.ROADMAP
 	 };
 	//centering the map, setting how zoomed in and the type of map
 
 
	 var map=new google.maps.Map(document.getElementById("Map")
	  ,mapProp);
  
	  ChisholmDandenong = new google.maps.GroundOverlay(
 	     'DandenongLayout2.png',
	      imageBounds);
	  ChisholmDandenong.setMap(map);
	// Adding the campus overlay
  
	var markerDand=new google.maps.Marker({
	  position:myCenter
	  });
	//Adding the marker
	
	markerDand.setMap(map);

	var infowindow = new google.maps.InfoWindow({
	  content:"Chisholm Dandenong",
	  });
	//Adding text to the marker
	
	google.maps.event.addListener(markerDand, 'click', function() {
	  infowindow.open(map,markerDand);
	  });	  
	// event listener so that pop up bubble appears when marker is clicked
	
	var markerW=new google.maps.Marker({
	  position:BuildW,
	  });
	 
	 markerW.setMap(map);
	 
	 var infowindowW = new google.maps.InfoWindow({
	  content:"Building W",
	  });
	  
	  google.maps.event.addListener(markerW, 'click', function() {
	  infowindowW.open(map,markerW);
	  });
}

google.maps.event.addDomListener(window, 'load', initialize);
