// VideoLightBox
// http://videolightbox.com

jQuery(function(){var $=jQuery;if(!document.getElementById("voverlay")){$("#videogallery").append($("<div id='voverlay'></div>"));}$("#videogallery a[rel],#watch").overlay({api:true,expose:0.5?{color:"#0B0B0B",loadSpeed:400,opacity:0.7}:null,onClose:function(){swfobject.removeSWF("video_overlay");this.getBackgroundImage().hide();},onBeforeLoad:function(){var O=document.getElementById("video_overlay");if(!O)

{var oo=$("<div></div>");oo.attr({id:"video_overlay"});$("#voverlay").append(oo);}

var o0="";var Oo="";
/*var o0="VideoLightBox.com";var Oo="http://videolightbox.com";*/

O=o0?$("<div></div>"):0;if(O){O.css({position:"absolute",left:"26px",top:"54px",padding:"0 0 0 0"});$("#voverlay").append(O);}if(O&&document.all){var oO=$("<iframe src=\"javascript:false\"></iframe>");oO.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});oO.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});O.append(oO);}var oo=O?$(document.createElement("A")):O;if(oo){oo.css({position:"relative",display:"block",'background-color':"#E4EFEB",color:"#837F80",'font-family':"Lucida Grande,Arial,Verdana,sans-serif",'font-size':"11px",'font-weight':"normal",'font-style':"normal",padding:"1px 5px",opacity:0.7,filter:"alpha(opacity=70)",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});oo.attr({href:Oo});oo.html(o0);oo.bind("contextmenu",function(eventObject){return false;});O.append(oo);}var src=this.getTrigger().attr("href");if(typeof oo!="number"&&(!O||!O.html||!O.html())){return;}swfobject.createSWF({data:src,width:"100%",height:"100%",wmode:"opaque"},{allowScriptAccess:"always",allowFullScreen:true},"video_overlay");}});});