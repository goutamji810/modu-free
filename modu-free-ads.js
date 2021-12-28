window.onload = function() {
  var list = [getRectAd(),
   getBannerAd(),
    getNativeAd(),
    getBigAd()
    ];
function getRan(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  
var id1="iskaajjajajaajajajsbhwbshsvsbshsbssnajsjsbuejdbsllsbd";
var actualDivToBeUpdated = document.getElementById(id1);
actualDivToBeUpdated.style.textAlign="center";


if(actualDivToBeUpdated!=null){
  
var rand=getRan(0,list.length-1),  val=list[rand];
var s = document.createElement("script");
s.type = "text/javascript";
switch (val.type){
  case "native":{
    s.src=val.src;
    actualDivToBeUpdated.innerHTML+=val.extra;
    actualDivToBeUpdated.appendChild(s);
  } break;
  default :{
    s.src=val.src;
    actualDivToBeUpdated.innerHTML+=val.extra;
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.innerHTML=val.script;
    actualDivToBeUpdated.appendChild(s);
    actualDivToBeUpdated.appendChild(s2);
    
  }
}



}


function getBigAd(){
  var val= {
    type:"big",
    src:"//abandonrecommendationwars.com/80e210bb18950e75da2d7acdf4b9da83/invoke.js",
    extra:"",
    script:"atOptions = {		'key' : '80e210bb18950e75da2d7acdf4b9da83',		'format' : 'iframe',		'height' : 600,		'width' : 160,		'params' : {}	};" 
  };
  return val;
}
function getNativeAd(){
var val= {
    type:"native",
    src:"//abandonrecommendationwars.com/7bbead7bb73b15bb822cdd775fdd25db/invoke.js",
    extra:"<div id=\"container-7bbead7bb73b15bb822cdd775fdd25db\"></div>",
    script:""
  };
  return val;
}
function getBannerAd(){
  var val= {
   type:"banner",
    src:"//abandonrecommendationwars.com/e5ff2ee77fad9f6f2239cac3e396bc6e/invoke.js",
    extra:"",
    script:"atOptions = {		'key' : 'e5ff2ee77fad9f6f2239cac3e396bc6e',		'format' : 'iframe',		'height' : 50,		'width' : 320,		'params' : {}	};"
  };
  return val;
}
function getRectAd(){
  var val= {
    type:"rect",
    src:"//abandonrecommendationwars.com/9107021bda86af1c978cb74fe0552c54/invoke.js",
    extra:"",
    script:"atOptions = {	'key' : '9107021bda86af1c978cb74fe0552c54',		'format' : 'iframe',		'height' : 250,		'width' : 300,		'params' : {}	};"
  };
  return val;
}




};