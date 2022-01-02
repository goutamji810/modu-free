//create by goutam
//https://cdn.jsdelivr.net/gh/{username}/{repo}/{file name}
//btn id = download_btn-oeneksbdosndofnmemend
//ads container = ads-container-modu-sjsowjsishsjshajajbshdkensodnw
var id="download_btn-oeneksbdosndofnmemend";


window.onload = function() {
  var div=document.getElementsByClassName(id)[0];
addS3(div);
addS2(div);
addS1(div);


};
function addS3(d){
var d_sub=document.createElement("div");
d_sub.style.textAlign="center";
d_sub.innerHTML='<br><br><img src="https://i.ibb.co/TLL2rVZ/20220102-120147.png" alt="20220102-120147" border="0" width="330" height="auto">';
d.appendChild(d_sub);
}
function addS2(d){
  var d_sub=document.createElement("div");
d_sub.innerHTML='<br><p style="margin-left:10px;"> ads.</p><div class="separator" style="clear: both; text-align: center;"><iframe allowfullscreen="" class="BLOG_video_class" height="211" src="https://www.youtube.com/embed/Yj53v4vtbkA" width="320" youtube-src-id="Lu28_k3zWUs"></iframe></div>'

d.appendChild(d_sub);
}
function addS1(d){
  var d_sub=document.createElement("div");
  var d_sub2=document.createElement("div");
  var s=document.createElement("script");
  s.type="text/javascript";
  s.src="https://apis.google.com/js/platform.js";
  d_sub.appendChild(s);
  d_sub2.style.marginLeft="10px";
  d_sub2.innerHTML+='<br> Please Support<br><br><div class="g-ytsubscribe" data-channelid="UCpAdTb1N1KiKoTi19zOh0ZA" data-layout="full" data-count="hidden"></div>';
  d.appendChild(d_sub2);
  d.appendChild(d_sub);
}

