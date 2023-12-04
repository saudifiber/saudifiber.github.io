"use strict";var $=window.jQuery,win=$(window),doc=$(document);$.fn.stick_in_parent=function(t){null==t&&(t={});var i=t,o=i.sticky_class,e=i.inner_scrolling,r=i.recalc_every,s=i.parent,n=i.offset_top,a=i.spacer,l=i.bottoming,c=win.height(),p=doc.height();null==n&&(n=0),null==s&&(s=void 0),null==e&&(e=!0),null==o&&(o="is_stuck"),null==l&&(l=!0);for(var d=function(t){if(window.getComputedStyle){var i=(t[0],window.getComputedStyle(t[0])),o=parseFloat(i.getPropertyValue("width"))+parseFloat(i.getPropertyValue("margin-left"))+parseFloat(i.getPropertyValue("margin-right"));return"border-box"!==i.getPropertyValue("box-sizing")&&(o+=parseFloat(i.getPropertyValue("border-left-width"))+parseFloat(i.getPropertyValue("border-right-width"))+parseFloat(i.getPropertyValue("padding-left"))+parseFloat(i.getPropertyValue("padding-right"))),o}return t.outerWidth(!0)},u=Array.from(this),f=0;f<u.length;f++){var g=u[f];!function(t,i,u,f,g,h,v,k){if(!t.data("sticky_kit")){t.data("sticky_kit",!0);var w=p,y=t.parent();if(null!=s&&(y=y.closest(s)),!y.length)throw"failed to find stick parent";var m=!1,b=!1,_=null!=a?a&&t.closest(a):$("<div />",{class:"stuck"});_&&_.css("position",t.css("position"));var x=function(){var e;if(!k){c=win.height(),p=doc.height(),w=p;var r=parseInt(y.css("border-top-width"),10),s=parseInt(y.css("padding-top"),10);return i=parseInt(y.css("padding-bottom"),10),u=y.offset().top+r+s,f=y.height(),m&&(m=!1,b=!1,null==a&&(t.insertAfter(_),_.detach()),t.css({position:"",top:"",width:"",bottom:""}).removeClass(o),e=!0),g=t.offset().top-(parseInt(t.css("margin-top"),10)||0)-n,h=t.outerHeight(!0),v=t.css("float"),_&&_.css({width:d(t),height:h,display:t.css("display"),"vertical-align":t.css("vertical-align"),float:v}),e?C():void 0}};if(x(),h!==f){var P=void 0,V=n,F=r,C=function(){var s,d,$;if(!k){var C=!1;null!=F&&(F-=1)<=0&&(F=r,x(),C=!0),C||p===w||(x(),C=!0);var z=win.scrollTop();return null!=P&&(d=z-P),P=z,m?(l&&($=z+h+V>f+u,b&&!$&&(b=!1,t.css({position:"fixed",bottom:"",top:V}).trigger("sticky_kit:unbottom"))),z<g&&(m=!1,V=n,null==a&&("left"!==v&&"right"!==v||t.insertAfter(_),_.detach()),s={position:"",width:"",top:""},t.css(s).removeClass(o).trigger("sticky_kit:unstick")),e&&h+n>c&&(b||(V-=d,V=Math.max(c-h,V),V=Math.min(n,V),m&&t.css({top:V+"px"})))):z>g&&(m=!0,s={position:"fixed",top:V},s.width="border-box"===t.css("box-sizing")?t.outerWidth()+"px":t.width()+"px",t.css(s).addClass(o),null==a&&(t.after(_),"left"!==v&&"right"!==v||_.append(t)),t.trigger("sticky_kit:stick")),m&&l&&(null==$&&($=z+h+V>f+u),!b&&$)?(b=!0,"static"===y.css("position")&&y.css({position:"relative"}),t.css({position:"absolute",bottom:i,top:"auto"}).trigger("sticky_kit:bottom")):void 0}},z=function(){return x(),C()},A=function i(){if(k=!0,win.off("touchmove",C),win.off("scroll",C),win.off("resize",z),$(document.body).off("sticky_kit:recalc",z),t.off("sticky_kit:detach",i),t.removeData("sticky_kit"),t.css({position:"",bottom:"",top:"",width:""}),y.position("position",""),m)return null==a&&("left"!==v&&"right"!==v||t.insertAfter(_),_.remove()),t.removeClass(o)};win.on("touchmove",C),win.on("scroll",C),win.on("resize",z),$(document.body).on("sticky_kit:recalc",z),t.on("sticky_kit:detach",A),setTimeout(C,0)}}}($(g))}return this};