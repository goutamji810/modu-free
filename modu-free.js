window.onload = function() {
  var list = [getRectAd(),
    getBannerAd(),
    getNativeAd(),
    getBigAd()];
function getRan(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
https://drive.google.com/file/d//view?usp=sharing
var div = document.getElementById("iskaajjajajaajajajsbhwbshsvsbshsbssnajsjsbuejdbsllsbd");

if(div!==null){
  
div.innerHTML=list[getRan(0,list.length-1)];
alert(div.innerHTML);
}


function getBigAd(){
  return "<script type=\"text/javascript\">	atOptions = {		'key' : '80e210bb18950e75da2d7acdf4b9da83',		'format' : 'iframe',		'height' : 600,		'width' : 160,		'params' : {}	};	document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/80e210bb18950e75da2d7acdf4b9da83/invoke.js\"></scr' + 'ipt>'); </script>";
}
function getNativeAd(){
  return "<script async=\"async\" data-cfasync=\"false\" src=\"//abandonrecommendationwars.com/7bbead7bb73b15bb822cdd775fdd25db/invoke.js\"></script> <div id=\"container-7bbead7bb73b15bb822cdd775fdd25db\"></div>";
}
function getBannerAd(){
  return "<script type=\"text/javascript\">	atOptions = {		'key' : 'e5ff2ee77fad9f6f2239cac3e396bc6e',		'format' : 'iframe',		'height' : 50,		'width' : 320,		'params' : {}	};	document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/e5ff2ee77fad9f6f2239cac3e396bc6e/invoke.js\"></scr' + 'ipt>');</script>";
}
function getRectAd(){
 return "<script type='text/javascript'>	atOptions = {	'key' : '9107021bda86af1c978cb74fe0552c54',		'format' : 'iframe',		'height' : 250,		'width' : 300,		'params' : {}	};	document.write('<scr' + 'ipt type=\"text/javascript\" src=\"http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/9107021bda86af1c978cb74fe0552c54/invoke.js\"></scr' + 'ipt>');</script>"; 
}

};