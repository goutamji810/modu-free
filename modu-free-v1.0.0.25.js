(function() {
"use strict";

let id="rect_ad_view_modufree",url_id="modufree_download_url";
if(document.getElementsByClassName(id)[0]==null||document.getElementById(url_id)==null){return;}


$(document).ready(() => {
  
  document.querySelectorAll("."+id).forEach((e)=>{
   addOnScrollListener(e,2);
 });//query
 
 
 download_link_loader();
 
 
 
 
 
 
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
  urld=(urld!="url"&&url!="")? url:"#";
  download_url_btn.href=urld;
  if(urld=="#"){
    download_url_btn.onclick=()=>{
      location.reload()
    };
  }
  download_url_btn.parentElement.style.display="block";
   }else{
   download_cou.innerHTML='Wait <font color="yellowgreen"> '+cou+' </font> for download link';
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
 












function addOnScrollListener(element,timeafter) {
  
  loadAdsReact($(element),true)
  
  let cond2=true,saf=(timeafter!=undefined)?timeafter:2,cond3=saf;
  
  document.addEventListener("scroll",() => {
 
 let o=$(element);
 let cond=$(document).scrollTop()>(o.offset().top-600)&&$(document).scrollTop()<(o.offset().top+300);
 
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
 let st=i.style;
 st.boxShadow= "0px 0px 5px 0px #b8b4b4";
 i.width="300";
 i.height="250";
 st.border="none";
 st.padding="0px";
 st.margin="0px";
 st.borderRadius="4px";
 i.srcdoc=`<html><body style="margin:0px; padding:0px; overflow:hidden; text-align: center;"><script type="text/javascript">
	atOptions = {
		'key' : '9107021bda86af1c978cb74fe0552c54',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://abandonrecommendationwars.com/9107021bda86af1c978cb74fe0552c54/invoke.js"></scr' + 'ipt>')
</script></body></html>`;
 element.append(i);
}

})()
