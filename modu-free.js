//create by goutam
//https://cdn.jsdelivr.net/gh/{username}/{repo}/
//btn id = download_btn-oeneksbdosndofnmemend
//ads container = ads-container-modu-sjsowjsishsjshajajbshdkensodnw



window.onload = function() {
  var list = [getRectAd(),
   getBannerAd(),
    getNativeAd(),
    getBigAd()
    ];

 
var id_contener="ads-container-modu-sjsowjsishsjshajajbshdkensodnw",
id_info="adinfotoclickad-odndkdndidnsksndidneodbeown",
id_download_btn="download_btn-oeneksbdosndofnmemend";



var info_code="<div class\""+id_info+"\"><h3 style=\"text-align: center;\">Click one of this Ad to unlock the</h3><h3 style=\"text-align: center;\">👇👇download button. 👇👇</b></h3></div>";

var divs = document.getElementsByClassName(id_contener),
download_btn=document.getElementsByClassName(id_download_btn)[0],
download_btn_parents=(download_btn!=null)?download_btn.parentElement:null;

if(download_btn!=null&&download_btn!=undefined){
  download_btn.style.display="none";
  
}


var web_blur=false,timero;
window.onblur = function(){
  if(download_btn_parents==null||web_blur)return;
  web_blur=true;
  var text =document.createElement("B");
  text.style.textAlign="center";
  text.innerHTML="wait..";
  download_btn_parents.insertBefore(text,download_btn);
  timero=setInterval(fun,1000,download_btn,text);
 
};
var int_var_count=10;
function fun(btn,text){
 text.innerHTML="wait... "+int_var_count; 
  if(int_var_count<1){
   clearInterval(timero);
   visible_download_btn(btn,text,download_btn_parents);
  }
  int_var_count--;
}

function visible_download_btn(btn,txt,part){
  part.removeChild(txt);
  btn.style.display="block";
}







for(var i=0; i<divs.length; i++){
 updatediv(divs[i]); 
}



function updatediv(actualDivToBeUpdated){
if(actualDivToBeUpdated!=null){
  
  actualDivToBeUpdated.style.textAlign="center";
var rand=getRan(0,list.length-1),  val=list[rand];
var s =document.createElement("script");
s.type = "text/javascript";
switch (val.type){
  case "native":{
    s.src=val.src;
    actualDivToBeUpdated.innerHTML+=(info_code)+val.extra;
    actualDivToBeUpdated.appendChild(s);
    
  } break;
  default :{
    s.src=val.src;
    actualDivToBeUpdated.innerHTML+=(info_code)+val.extra;
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.innerHTML=val.script;
    actualDivToBeUpdated.appendChild(s);
    actualDivToBeUpdated.appendChild(s2);
    
  }//default
}



}
}









 










function getRan(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
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
