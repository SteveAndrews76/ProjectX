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
var BuildZ=new google.maps.LatLng(-37.97530152372143,145.2213567495346);
var BuildPT1=new google.maps.LatLng(-37.97563981433231,145.21886229515076);
var BuildPT2=new google.maps.LatLng(-37.97563981433231,145.21900713443756);
var BuildPT3=new google.maps.LatLng(-37.97565250019989,145.21915197372437);
var BuildPT4=new google.maps.LatLng(-37.97504357608296,145.22158473730087);
var ChisholmDandenong;
var markersAM = [];
var markersNZ = [];
var markersPT = [];

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
	// Adding the campus overlay
  
	//Building A
	var markerA=new google.maps.Marker({
		position:BuildA,
		animation: google.maps.Animation.DROP,
		map: map
	});
	
	markersAM.push(markerA);
	
	var infowindowA = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building A</div>",
	});
	
	infowindowA.close(map,markerA);
	
	google.maps.event.addListener(markerA, 'click', function() {
		infowindowA.open(map,markerA);
	});
	
}

function setFirstMap(map) {
	for( var i = 0; i < markers.length; i++) {
		markersAM[i].setMap(Map);
	}
}

function clearFirstMarkers() {
	setFirstMap(null);
}

function showFirstMarkers() {
	setFirstMap(map);
}

function clearSecondMarkers() {
	
}

function showSecondMarkers() {
	
}



google.maps.event.addDomListener(window, 'load', initialize);