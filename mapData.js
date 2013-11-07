// JavaScript Document
var myCenter=new google.maps.LatLng(-37.97512392052657,145.2195382118225);
var BuildA=new google.maps.LatLng(-37.97563135708604,145.2215874195099);
var BuildB=new google.maps.LatLng(-37.976020389405896,145.22093296051025);
var BuildC=new google.maps.LatLng(-37.97511546322086,145.22116899490356);
var BuildD=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildE=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildF=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildG=new google.maps.LatLng(-37.9761049613765,145.22192001342773);
var BuildH=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildJ=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildK=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildL=new google.maps.LatLng(-37.97473488345525,145.2194631099701);
var BuildM=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildN=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildO=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildP=new google.maps.LatLng(-37.9753099810057,145.22210240364075);
var BuildQ=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildR=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildS=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildT=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildU=new google.maps.LatLng(-37.97415,145.2175491231842);
var BuildV=new google.maps.LatLng(-37.974717968753204,145.21843314170837);
var BuildW=new google.maps.LatLng(-37.97438813128418,145.21743535995483);
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
		new google.maps.LatLng(-37.97396526056601, 145.22268176078796));
		//Bottom Left corner Co-ordinates are first. the Top Right Co-ordinates are second.

	
	var mapProp = {
		center: myCenter,
		zoom:17,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
 	//centering the map, setting how zoomed in and the type of map
 
 
	var map=new google.maps.Map(document.getElementById("Map"),mapProp);
  
	ChisholmDandenong = new google.maps.GroundOverlay('DandenongLayout2.png', imageBounds);
	ChisholmDandenong.setMap(map);
	// Adding the campus overlay
  
	var markerDand=new google.maps.Marker({
		animation: google.maps.Animation.DROP,
		position:myCenter
	});
	//Adding the marker
	
	markerDand.setMap(map);

	var infowindow = new google.maps.InfoWindow({
		content:"Chisholm Dandenong",
	});
	//Adding text to the marker
	
	google.maps.event.addListener(markerDand, 'click', function(){
		infowindow.open(map,markerDand);
	});
	// event listener so that pop up bubble appears when marker is clicked
	
	//Building A

	var markerA=new google.maps.Marker({
		position:BuildA,
		animation: google.maps.Animation.DROP,
	});
	
	markerA.setMap(map);
	
	var infowindowA = new google.maps.InfoWindow({
		content:"Building A",
	});
	
	google.maps.event.addListener(markerA, 'click', function() {
		infowindowA.open(map,markerL);
	});
	
	//Building B

	var markerB=new google.maps.Marker({
		position:BuildB,
		animation: google.maps.Animation.DROP,
	});
	
	markerB.setMap(map);
	
	var infowindowB = new google.maps.InfoWindow({
		content:"Building B",
	});
	
	google.maps.event.addListener(markerB, 'click', function() {
		infowindowB.open(map,markerB);
	});
	
	//Building C

	var markerC=new google.maps.Marker({
		position:BuildC,
		animation: google.maps.Animation.DROP,
	});
	
	markerC.setMap(map);
	
	var infowindowC = new google.maps.InfoWindow({
		content:"Building C",
	});
	
	google.maps.event.addListener(markerC, 'click', function() {
		infowindowC.open(map,markerC);
	});

	//Building G

	var markerG=new google.maps.Marker({
		position:BuildG,
		animation: google.maps.Animation.DROP,
	});
	
	markerG.setMap(map);
	
	var infowindowG = new google.maps.InfoWindow({
		content:"Building G",
	});
	
	google.maps.event.addListener(markerG, 'click', function() {
		infowindowG.open(map,markerG);
	});
	
	//Building L
	var markerL=new google.maps.Marker({
		position:BuildL,
		animation: google.maps.Animation.DROP,
	});
	
	markerL.setMap(map);
	
	var infowindowL = new google.maps.InfoWindow({
		content:"Building L",
	});
	
	google.maps.event.addListener(markerL, 'click', function() {
		infowindowL.open(map,markerL);
	});
	
	//Building P

	var markerP=new google.maps.Marker({
		position:BuildP,
		animation: google.maps.Animation.DROP,
	});
	
	markerP.setMap(map);
	
	var infowindowP = new google.maps.InfoWindow({
		content:"Building P",
	});
	
	google.maps.event.addListener(markerP, 'click', function() {
		infowindowP.open(map,markerP);
	});
	
	//Building V
	var markerV=new google.maps.Marker({
		position:BuildV,
		animation: google.maps.Animation.DROP,
	});
	
	markerV.setMap(map);
	
	var infowindowV = new google.maps.InfoWindow({
		content:"Building V",
	});
	
	google.maps.event.addListener(markerV, 'click', function() {
		infowindowV.open(map,markerV);
	});
	
	//Building W
	var markerW=new google.maps.Marker({
		position:BuildW,
		animation: google.maps.Animation.DROP,
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