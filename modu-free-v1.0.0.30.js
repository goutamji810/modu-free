(function() {
"use strict";

let id="rect_ad_view_modufree",url_id="modufree_download_url";





$(document).ready(() => {
  (function(){
    if(document.getElementsByClassName(id)[0]==null)return;
  document.querySelectorAll("."+id).forEach((e)=>{
   addOnScrollListener(e);
 });//query
})();
 
 (function(){
 if(document.getElementById(url_id)==null){return;}
 download_link_loader();
 })();
 
 
 
 
 
});


function download_link_loader(){
  let cou=10,download_cou=document.getElementById("download_count_up"),download_url_btn=document.getElementById("download_btn_url");
  let interval_i=setInterval(()=>{
  if(cou<1){ 
   download_cou.innerHTML='<font color="yellowgreen"> Scroll down to get </font>';
   let ee=document.createElement("b");
   ee.onclick=()=>{scroll_to_download()};
   ee.innerHTML="download link";
   download_cou.appendChild(ee);
   clearInterval(interval_i);
  
  let urld= $("#"+url_id).val().trim();
  urld=(urld!="url"&&urld!="")? urld:"#";
  download_url_btn.href=urld;
  if(urld=="#"){
    download_url_btn.onclick=()=>{
      location.reload()
    };
  }
  download_url_btn.parentElement.style.display="block";
   }else{
   download_cou.innerHTML='<br>Wait <font color="yellowgreen"> '+cou+' </font> for download link <br>';
   cou--;
   }
  },1100);
 
 
}

  
 
 
  function scroll_to_download(){
  let a=document.createElement("a");
  a.href="#scroll_class_dbtn";
  document.body.appendChild(a);
  a.click();
  a.remove();
  
  }
 


function getTimeAfter(e) {
  if(e.hasAttribute("timeAfter")){
    let i=parseInt(e.getAttribute("timeAfter"));
     if(i!=NaN){
      return i; 
     }
  }
  return 2;
}









function addOnScrollListener(element) {
  
 let i=loadAdsReact($(element),true)
  
  let cond2=true,saf=getTimeAfter(element),cond3=saf;
  
  document.addEventListener("scroll",() => {
 
 let o=$(element);
 let cond=$(document).scrollTop()>(o.offset().top-(i.height*2))&&$(document).scrollTop()<(o.offset().top+i.height);
 
 if(cond){
 if(cond2){
   if(cond3<1){
   loadAdsReact($(element),true);
   cond3=saf;
   }
  cond3--;
  cond2=false;
 }
 }else{
 cond2=true;
   
 }
 
 
 
 });//event scroll
 
 

}




function loadAdsReact(element,b) {
  if(b)element.html("");
  element[0].style.textAlign="center";
 let i=document.createElement("iframe");
 $(i).attr("scrolling","no");
 let st=i.style;
 st.border="none";
 st.padding="0px";
 st.margin="0px";
 element.append(i);
  loadRandom([1,1,1,1,2,2,2,1,1,2,2,3,1,2],i);
  return i;
}


function loadRandom(p,i) {
 
 var doc = i.contentDocument ? i.contentDocument :(i.contentWindow ? i.contentWindow.document : i.document),
 ind=(p[getRandomI(0,p.length)]),
 text=getAdsS(ind);
 i.height=getAdsHeight(ind);
 i.width=getAdsWidth(ind);
 
 
doc.open();

doc.write(text);

doc.close();

}


function getRandomI(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getAdsHeight(i) {
  return (i==3)?600:(i==2)?50:250;
}


function getAdsWidth(i) {
   return (i==3)? 320:(i==2)?330:300;
}




function getAdsS(r){
  
  var a=`<html><body style="margin:0px; padding:0px; overflow:hidden; text-align: center;"><script type="text/javascript">
	atOptions = {
		'key' : '9107021bda86af1c978cb74fe0552c54',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/9107021bda86af1c978cb74fe0552c54/invoke.js"></scr' + 'ipt>')
</script></body></html>`
,b=`<script type="text/javascript">
	atOptions = {
		'key' : 'e5ff2ee77fad9f6f2239cac3e396bc6e',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/e5ff2ee77fad9f6f2239cac3e396bc6e/invoke.js"></scr' + 'ipt>');
</script>`,
c=`<script async="async" data-cfasync="false" src="//abandonrecommendationwars.com/7bbead7bb73b15bb822cdd775fdd25db/invoke.js"></script>
<div id="container-7bbead7bb73b15bb822cdd775fdd25db"></div>`;
return (r==3)?c:(r==2)?b:a;
  
}








})()
