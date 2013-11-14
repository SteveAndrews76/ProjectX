// JavaScript Document
var myCenter=new google.maps.LatLng(-37.97512392052657,145.2195382118225);
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
var BuildN=new google.maps.LatLng(-37.97597810338406,145.21961331367493);
var BuildO=new google.maps.LatLng(-37.97619376184075,145.22030800580978);
var BuildP=new google.maps.LatLng(-37.975208493530104,145.2220782637596);
var BuildQ=new google.maps.LatLng(-37.97438813128418,145.22109925746918);
var BuildR=new google.maps.LatLng(-37.9750858626432,145.21703839302063);
var BuildS=new google.maps.LatLng(-37.975178892989945,145.2178055047989);
var BuildT=new google.maps.LatLng(-37.97521695082509,145.21816492080688);
var BuildU=new google.maps.LatLng(-37.97473065478011,145.2199673652649);
var BuildV=new google.maps.LatLng(-37.97461648045906,145.21842777729034);
var BuildW=new google.maps.LatLng(-37.97439235997906,145.21745681762695);
var BuildY=new google.maps.LatLng(-37.975035118768,145.21964013576508);
var BuildPt1=new google.maps.LatLng(-37.97563981433231,145.21886229515076);
var BuildPt2=new google.maps.LatLng(-37.97563981433231,145.21900713443756);
var BuildPt3=new google.maps.LatLng(-37.97565250019989,145.21915197372437);
var BuildPt4=new google.maps.LatLng(-37.97504357608296,145.22158473730087);
var ChisholmDandenong;

function initialize()
{
	var imageBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(-37.976477076889466, 145.21638929843903),
		new google.maps.LatLng(-37.973999090313114, 145.22266030311584));
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