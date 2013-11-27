// JavaScript Document
var BuildA=new google.maps.LatLng(-37.97555312751185,145.22160351276398);
var BuildB=new google.maps.LatLng(-37.9758597023933,145.2209436893463);
var BuildC=new google.maps.LatLng(-37.97509854860651,145.22115290164948);
var BuildD=new google.maps.LatLng(-37.975449526055534,145.2207425236702);
var BuildE=new google.maps.LatLng(-37.97494843123337,145.22068351507187);
var BuildF=new google.maps.LatLng(-37.975764558601604,145.22041529417038);
var BuildG=new google.maps.LatLng(-37.975961188968505,145.22180199623108);
var BuildH=new google.maps.LatLng(-37.976003475000084,145.21999955177307);
var BuildJ=new google.maps.LatLng(-37.97515352108889,145.22020876407623);
var BuildK=new google.maps.LatLng(-37.9754156969769,145.21946847438812);
var BuildL=new google.maps.LatLng(-37.97466722462367,145.21931290626526);
var BuildM=new google.maps.LatLng(-37.97562712846254,145.2186155319214);

function BuildAM()
{
	
	//Building A
	var markerA=new google.maps.Marker({
		position:BuildA,
		animation: google.maps.Animation.DROP,
	});
	
	markerA.setMap(map);
	
	var infowindowA = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building A</div>",
	});
	
	infowindowA.close(map,markerA);
	
	google.maps.event.addListener(markerA, 'click', function() {
		infowindowA.open(map,markerA);
	});
	
	//Building B
	var markerB=new google.maps.Marker({
		position:BuildB,
		animation: google.maps.Animation.DROP,
	});
	
	markerB.setMap(map);
	
	var infowindowB = new google.maps.InfoWindow({
		content:"Building B"
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
	
	//Building D
	var markerD=new google.maps.Marker({
		position:BuildD,
		animation: google.maps.Animation.DROP,
	});
	
	markerD.setMap(map);
	
	var infowindowD = new google.maps.InfoWindow({
		content:"Building D",
	});
	
	google.maps.event.addListener(markerD, 'click', function() {
		infowindowD.open(map,markerD);
	});
	
	//Building E
	var markerE=new google.maps.Marker({
		position:BuildE,
		animation: google.maps.Animation.DROP,
	});
	
	markerE.setMap(map);
	
	var infowindowE = new google.maps.InfoWindow({
		content:"Building E",
	});
	
	google.maps.event.addListener(markerE, 'click', function() {
		infowindowE.open(map,markerE);
	});
	
	//Building F
	var markerF=new google.maps.Marker({
		position:BuildF,
		animation: google.maps.Animation.DROP,
	});
	
	markerF.setMap(map);
	
	var infowindowF = new google.maps.InfoWindow({
		content:"Building F",
	});
	
	google.maps.event.addListener(markerF, 'click', function() {
		infowindowF.open(map,markerF);
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
	
	//Building H
	var markerH=new google.maps.Marker({
		position:BuildH,
		animation: google.maps.Animation.DROP,
	});
	
	markerH.setMap(map);
	
	var infowindowH = new google.maps.InfoWindow({
		content:"Building H",
	});
	
	google.maps.event.addListener(markerH, 'click', function() {
		infowindowH.open(map,markerH);
	});
	
	//Building J
	var markerJ=new google.maps.Marker({
		position:BuildJ,
		animation: google.maps.Animation.DROP,
	});
	
	markerJ.setMap(map);
	
	var infowindowJ = new google.maps.InfoWindow({
		content:"Building J",
	});
	
	google.maps.event.addListener(markerJ, 'click', function() {
		infowindowJ.open(map,markerJ);
	});
	
	//Building K
	var markerK=new google.maps.Marker({
		position:BuildK,
		animation: google.maps.Animation.DROP,
	});
	
	markerK.setMap(map);
	
	var infowindowK = new google.maps.InfoWindow({
		content:"Building K",
	});
	
	google.maps.event.addListener(markerK, 'click', function() {
		infowindowK.open(map,markerK);
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
	
	//Building M
	var markerM=new google.maps.Marker({
		position:BuildM,
		animation: google.maps.Animation.DROP,
	});
	
	markerM.setMap(map);
	
	var infowindowM = new google.maps.InfoWindow({
		content:"Building M",
	});
	
	google.maps.event.addListener(markerM, 'click', function() {
		infowindowM.open(map,markerM);
	});
}