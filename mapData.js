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
	
	map=new google.maps.Map(document.getElementById("Map"),mapProp);
  
	ChisholmDandenong = new google.maps.GroundOverlay('DandenongLayout2.png', imageBounds);
	ChisholmDandenong.setMap(map);
	// Adding the campus overlay
  
}

function buildAM() {
	//Building A
	var markerA=new google.maps.Marker({
		position:BuildA,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerA);
	
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
	
	markersAM.push(markerB);
	
	var infowindowB = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building B</div>"
	});
	
	google.maps.event.addListener(markerB, 'click', function() {
		infowindowB.open(map,markerB);
	});
	
	//Building C
	var markerC=new google.maps.Marker({
		position:BuildC,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerC);
	
	var infowindowC = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building C</div>"
	});
	
	google.maps.event.addListener(markerC, 'click', function() {
		infowindowC.open(map,markerC);
	});
	
	//Building D
	var markerD=new google.maps.Marker({
		position:BuildD,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerD);
	
	var infowindowD = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building D</div>"
	});
	
	google.maps.event.addListener(markerD, 'click', function() {
		infowindowD.open(map,markerD);
	});
	
	//Building E
	var markerE=new google.maps.Marker({
		position:BuildE,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerE);
	
	var infowindowE = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building E</div>"
	});
	
	google.maps.event.addListener(markerE, 'click', function() {
		infowindowE.open(map,markerE);
	});
	
	//Building F
	var markerF=new google.maps.Marker({
		position:BuildF,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerF);
	
	var infowindowF = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building F</div>"
	});
	
	google.maps.event.addListener(markerF, 'click', function() {
		infowindowF.open(map,markerF);
	});
	
	//Building G
	var markerG=new google.maps.Marker({
		position:BuildG,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerG);
	
	var infowindowG = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building G</div>"
	});
	
	google.maps.event.addListener(markerG, 'click', function() {
		infowindowG.open(map,markerG);
	});
	
	//Building H
	var markerH=new google.maps.Marker({
		position:BuildH,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerH);
	
	var infowindowH = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building H</div>"
	});
	
	google.maps.event.addListener(markerH, 'click', function() {
		infowindowH.open(map,markerH);
	});
	
	//Building J
	var markerJ=new google.maps.Marker({
		position:BuildJ,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerJ);
	
	var infowindowJ = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building J</div>"
	});
	
	google.maps.event.addListener(markerJ, 'click', function() {
		infowindowJ.open(map,markerJ);
	});
	
	//Building K
	var markerK=new google.maps.Marker({
		position:BuildK,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerK);
	
	var infowindowK = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building K</div>"
	});
	
	google.maps.event.addListener(markerK, 'click', function() {
		infowindowK.open(map,markerK);
	});
		
	//Building L
	var markerL=new google.maps.Marker({
		position:BuildL,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerL);
	
	var infowindowL = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building L</div>"
	});
	
	google.maps.event.addListener(markerL, 'click', function() {
		infowindowL.open(map,markerL);
	});
	
	//Building M
	var markerM=new google.maps.Marker({
		position:BuildM,
		animation: google.maps.Animation.DROP,
	});
	
	markersAM.push(markerM);
	
	var infowindowM = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building M</div>"
	});
	
	google.maps.event.addListener(markerM, 'click', function() {
		infowindowM.open(map,markerM);
	});
	
}

function buildNZ() {
	//Building N
	var markerN=new google.maps.Marker({
		position:BuildN,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerN);
	
	var infowindowN = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building N</div>"
	});
	
	google.maps.event.addListener(markerN, 'click', function() {
		infowindowN.open(map,markerN);
	});
	
	//Building O
	var markerO=new google.maps.Marker({
		position:BuildO,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerO);
	
	var infowindowO = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building O</div>"
	});
	
	google.maps.event.addListener(markerO, 'click', function() {
		infowindowO.open(map,markerO);
	});
	
	//Building P
	var markerP=new google.maps.Marker({
		position:BuildP,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerP);
	
	var infowindowP = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building P</div>"
	});
	
	google.maps.event.addListener(markerP, 'click', function() {
		infowindowP.open(map,markerP);
	});
	
	//Building Q
	var markerQ=new google.maps.Marker({
		position:BuildQ,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerQ);
	
	var infowindowQ = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building Q</div>"
	});
	
	google.maps.event.addListener(markerQ, 'click', function() {
		infowindowQ.open(map,markerQ);
	});
	
	//Building R
	var markerR=new google.maps.Marker({
		position:BuildR,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerR);
	
	var infowindowR = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building R</div>"
	});
	
	google.maps.event.addListener(markerR, 'click', function() {
		infowindowR.open(map,markerR);
	});
	
	//Building S
	var markerS=new google.maps.Marker({
		position:BuildS,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerS);
	
	var infowindowS = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building S</div>"
	});
	
	google.maps.event.addListener(markerS, 'click', function() {
		infowindowS.open(map,markerS);
	});
	
	//Building T
	var markerT=new google.maps.Marker({
		position:BuildT,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerT);
	
	var infowindowT = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building T</div>"
	});
	
	google.maps.event.addListener(markerT, 'click', function() {
		infowindowT.open(map,markerT);
	});
	
	//Building U
	var markerU=new google.maps.Marker({
		position:BuildU,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerU);
	
	var infowindowU = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building U</div>"
	});
	
	google.maps.event.addListener(markerU, 'click', function() {
		infowindowU.open(map,markerU);
	});
	
	//Building V
	var markerV=new google.maps.Marker({
		position:BuildV,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerV);
	
	var infowindowV = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building V</div>"
	});
	
	google.maps.event.addListener(markerV, 'click', function() {
		infowindowV.open(map,markerV);
	});
	
	//Building W
	var markerW=new google.maps.Marker({
		position:BuildW,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerW);
	
	var infowindowW = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building W</div>"
	});
	
	google.maps.event.addListener(markerW, 'click', function() {
		infowindowW.open(map,markerW);
	});
	
	//Building Y
	var markerY=new google.maps.Marker({
		position:BuildY,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerY);
	
	var infowindowY = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building Y</div>"
	});
	
	google.maps.event.addListener(markerY, 'click', function() {
		infowindowY.open(map,markerY);
	});
	
	//Building Z
	var markerZ=new google.maps.Marker({
		position:BuildZ,
		animation: google.maps.Animation.DROP,
	});
	
	markersNZ.push(markerZ);
	
	var infowindowZ = new google.maps.InfoWindow({
		content:"<div class=\"infobox\">Building Z</div>"
	});
	
	google.maps.event.addListener(markerZ, 'click', function() {
		infowindowB.open(map,markerZ);
	});
}

function buildPT() {
	//Building PT1
	var markerPT1=new google.maps.Marker({
		position:BuildPT1,
		animation: google.maps.Animation.DROP,
	});
	
	markersPT.push(markerPT1);
	
	var infowindowPT1 = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building PT1</div>"
	});
	
	google.maps.event.addListener(markerPT1, 'click', function() {
		infowindowPT1.open(map,markerPT1);
	});
	
	//Building PT2
	var markerPT2=new google.maps.Marker({
		position:BuildPT2,
		animation: google.maps.Animation.DROP,
	});
	
	markersPT.push(markerPT2);
	
	var infowindowPT2 = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building PT2</div>"
	});
	
	google.maps.event.addListener(markerPT2, 'click', function() {
		infowindowPT2.open(map,markerPT2);
	});
	
	//Building PT3
	var markerPT3=new google.maps.Marker({
		position:BuildPT3,
		animation: google.maps.Animation.DROP,
	});
	
	markersPT.push(markerPT3);
	
	var infowindowPT3 = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building PT3</div>"
	});
	
	google.maps.event.addListener(markerPT3, 'click', function() {
		infowindowPT3.open(map,markerPT3);
	});
	
	//Building PT4
	var markerPT4=new google.maps.Marker({
		position:BuildPT4,
		animation: google.maps.Animation.DROP,
	});
	
	markersPT.push(markerPT4);
	
	var infowindowPT4 = new google.maps.InfoWindow({
		content: "<div class=\"infobox\">Building PT4</div>"
	});
	
	google.maps.event.addListener(markerPT4, 'click', function() {
		infowindowPT4.open(map,markerPT4);
	});
}

function setFirstMap(map) {
	for( var i = 0; i < markersAM.length; i++) {
		markersAM[i].setMap(map);
	}
}

function clearFirstMarkers() {
	setFirstMap(null);
}

function showFirstMarkers() {
	setFirstMap(map);
	setSecondMap(null);
	setThirdMap(null);
}

function setSecondMap(map) {
	for( var i = 0; i < markersNZ.length; i++) {
		markersNZ[i].setMap(map);
	}
}

function clearSecondMarkers() {
	setSecondMap(null);
}

function showSecondMarkers() {
	setFirstMap(null);
	setSecondMap(map);
	setThirdMap(null);
}

function setThirdMap(map) {
	for( var i = 0; i < markersPT.length; i++) {
		markersPT[i].setMap(map);
	}
}

function clearThirdMarkers() {
	setThirdMap(null);
}

function showThirdMarkers() {
	setFirstMap(null);
	setSecondMap(null);
	setThirdMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);