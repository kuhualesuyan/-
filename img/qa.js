Object.extend=function(t,e){for(var i in e){t[i]=e[i]}return t};window.lib=window.lib||{};if(!lib.SITE_DOMAIN){var getDomain=function(){var t=2;var e=window.location.hostname.split(".");e=e.slice(e.length-t);return e.join(".")};lib.SITE_DOMAIN=getDomain()}lib.PROJECT_VERSION="20160708091428";lib.developer="liujinjuan";lib.action=lib.action||{};lib.action.Qa=function(){this.init=function(t){var e=this;var i=lib.SITE_DOMAIN.match(/pps/);try{var r;var o=navigator.userAgent.toLowerCase();this.par={};this.pars=[];this.custom={};this.filter=[];this.time=0;this.w=window;this.l=window.location;this.d=window.document;this.urlMap={rdm:"rdm",qtcurl:"qtcurl",rfr:"rfr",lrfr:"lrfr",jsuid:"jsuid",qtsid:"qtsid",ppuid:"ppuid",platform:"platform",weid:"weid",pru:"pru",flshuid:"flshuid",fcode:"fcode",ffcode:"ffcode",coop:"coop",odfrm:"odfrm",fvcode:"fvcode",mod:"mod"};this.cookieMap={flshuid:"QC005",jsuid:"QC006",pru:"P00PRU",lrfr:"QC007",qtsid:"QC008",QY_FC:"QC009",QY_FFC:"QC014",gaflag:"QC011",odfrm:"QC132",QY_FV:"QC142"};t=t||{};this.times=t.times||5;this.timeouts=t.timeouts||1e3;this.url=t.url||window.location.protocol+"//msg.71.am/jspb.gif";if(this.url.indexOf("?")==-1){this.url+="?"}else if(this.url.slice(-1)!="&"){this.url+="&"}this.flag=t.flag||"QC010";this.callback=t.callback||function(){};if(typeof t.urlMap=="object"){Object.extend(this.urlMap,t.urlMap)}if(typeof t.cookieMap=="object"){Object.extend(this.cookieMap,t.cookieMap)}if(typeof t.custom=="object"){Object.extend(this.custom,t.custom)}if(t.filter instanceof Array){this.filter=t.filter}var n=this.urlMap;this.par[n.rdm]=this.rand();this.par[n.qtcurl]=this.u(this.l.href);this.par[n.rfr]=this.u(this.d.referrer);this.par[n.lrfr]=this.getLrfr();this.par[n.jsuid]=this.getJsuid();this.par[n.qtsid]=this.getQtsid();this.par[n.ppuid]=this.getUserInfoUid();this.par[n.platform]=/ipad/i.test(o)?"21":/iphone os/i.test(o)?"31":"11";if(i){this.par[n.platform]="20"+this.par[n.platform]}this.par[n.fcode]=this.getFc();this.par[n.ffcode]=this.getFfc();this.par[n.coop]=this.getCoop();this.par[n.weid]=this.getWeid();this.par[n.pru]=this.getPRU();this.par[n.fvcode]=this.getFv();this.par[n.mod]=this.getMod();Object.extend(this.par,this.custom);r=setTimeout(function(){var t=navigator.userAgent.toLowerCase();var i=/ipad/i.test(t)||/iphone os/i.test(t)||/lepad_hls/i.test(t);var o;if(lib.qa_postServerUID||e.time>=e.times||i){e.par[n.flshuid]=e.setFlashId(lib.qa_postServerUID||"");var a="ChEnYH0415dadrrEDFf2016";var s=i?e.par[n.flshuid]:e.getJsuid();e.par["as"]=lib.md5V2(e.par[n.platform]+s+e.par[n.weid]+a);e.post();o=true}else{e.time+=1;o=false}if(o===false){r=setTimeout(arguments.callee,e.timeouts);return}},0);var a=this.queryToJson(this.l.href);var s=this.cookieMap[this.urlMap.odfrm];var c=a[this.urlMap.odfrm]||this.cookieGet(s)||"";if(c){c=c;this.par[n.odfrm]=c;this.cookieSet(s,c,0,"/",lib.SITE_DOMAIN);var f=this.d.getElementsByTagName("body")[0];var u=this.queryToJson(f.getAttribute("data-pb")||"")||{};u[n.odfrm]=c;var h=this.jsonToQuery(u);f.setAttribute("data-pb",h)}var l=document.getElementById("block-B");if(l&&l.getAttribute("data-pb")){var d=l.getAttribute("data-pb");var p=d.match(/(^|&)?tmplt=([^&]+)/i);if(p&&p[2]){e.par["tmplt"]=p[2]}}}catch(v){}};this.getUserInfoUid=function(){try{var userInfo=this.cookieGet("P00002");if(userInfo){userInfo=userInfo==window.JSON?window.JSON.parse(userInfo):eval("("+userInfo+")")}if(userInfo&&userInfo.uid){return userInfo.uid}else{return""}}catch(e){return""}};this.u=function(t){try{var e=encodeURIComponent;return e instanceof Function?e(t):escape(t)}catch(i){return""}};this.hash=function(t){try{var e=1,i=0;if(t){e=0;for(var r=t.length-1;r>=0;r--){i=t.charCodeAt(r);e=(e<<6&268435455)+i+(i<<14);i=e&266338304;e=i!==0?e^i>>21:e}}return e}catch(o){return""}};this.rand=function(t){try{var e=[];if(!isNaN(t)){for(var i=0;i<t;i++){e.push(Math.round(Math.random()*2147483647).toString(36))}}else{e.push(Math.round(Math.random()*2147483647))}return e.join("")}catch(r){return""}};this.cookieGet=function(t){var e=function(t){if(new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(t)){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),i=e.exec(document.cookie);if(i){return i[2]||""}}return""};try{t=e(t);if("string"==typeof t){if(t.length>1&&t=="deleted"){return""}else{return decodeURIComponent(t)||""}}else{return""}}catch(i){return""}};this.cookieSet=function(t,e,i,r,o,n){try{var a=[];a.push(t+"="+encodeURIComponent(e));if(i){var s=new Date;var c=s.getTime()+i*36e5;s.setTime(c);a.push("expires="+s.toGMTString())}if(r){a.push("path="+r)}if(o){a.push("domain="+o)}if(n){a.push(n)}document.cookie=a.join(";")}catch(f){return""}};this.getJsuid=function(){try{var t;var e=this.cookieMap.jsuid;t=this.cookieGet(e);if(!t||!isNaN(t)){t=this.rand(4)}this.cookieSet(e,t,365*24,"/",lib.SITE_DOMAIN);return t}catch(i){return""}};this.getQtsid=function(){try{var t,e=/^\d{10}\.\d{10}\.\d{10}\.\d+$/;var i=this.cookieMap.qtsid;var r=function(){return parseInt(new Date/1e3,10).toString()};t=this.cookieGet(i);if(this.cookieGet(this.flag)){return t}if(!e.test(t)){var o=r();t=[o,o,o,"1"]}else{t=t.split(".");t[1]=t[2];t[2]=r();t[3]=parseInt(t[3],10)+1}this.cookieSet(i,t.join("."),365*24,"/",lib.SITE_DOMAIN);return t}catch(n){return""}};this.getLrfr=function(){try{var t,e=this;var i=this.cookieMap.lrfr;var r=this.d.referrer.match(/http[s]?:\/\/([^\/]*)/);r=r?r[1]:"";t=this.cookieGet(i);t=t=="undefined"?"":t;var o=this.l.hostname;var n=r&&r.match(/i?qiyi\.com|pps\.tv/);var a=t;if(!t){if(!this.d.referrer||n){a="DIRECT"}else{a=this.u(this.d.referrer)}}else if(!this.d.referrer){a="DIRECT"}else if(r!==o&&r.indexOf(lib.SITE_DOMAIN)===-1){if(!n){a=this.u(this.d.referrer)}}this.cookieSet(i,a,0,"/",lib.SITE_DOMAIN);if(t!=a){this.syncCookie(o,i,a)}return a}catch(s){return""}};this.setFlashId=function(t){var e=this.cookieMap.flshuid;var i=this.cookieGet(e);if(t&&t!=i){this.cookieSet(e,t,365*24,"/",lib.SITE_DOMAIN)}return t};this.getFc=function(){try{var t=this.l.search.match(/[\?&]fc=([^&]*)(&|$)/i);var e=this.cookieMap.QY_FC;var i=this.cookieGet(e);if(i=="b22dab601821a896"){return i}if(t){t=t[1];this.cookieSet(e,t,0,"/",lib.SITE_DOMAIN)}else{t=this.cookieGet(e);if(!t||t=="undefined"){t=""}}return t}catch(r){return""}};this.getFv=function(){try{var t=this.l.search.match(/[\?&]fv=([^&]*)(&|$)/i);var e=this.cookieMap.QY_FV;if(t){var i=encodeURIComponent(t[1]);if(i.length>146){i=i.substring(0,146)}i=decodeURIComponent(i);t=i;this.cookieSet(e,t,24*3,"/",lib.SITE_DOMAIN)}else{t=this.cookieGet(e);if(!t||t=="undefined"){t=""}}return t}catch(r){return""}};this.getFfc=function(){try{var t=this.l.search.match(/[\?&]ffc=([^&]*)(&|$)/i);var e=this.cookieMap.QY_FFC;if(t){t=t[1];this.cookieSet(e,t,0,"/",lib.SITE_DOMAIN)}else{t=this.cookieGet(e);if(!t||t=="undefined"){t=""}}return t}catch(i){return""}};this.getCoop=function(){var t="";var e;if(this.l.host.split(".")[0]=="mini"){e=lib.$url(this.l.href,"app");e=e&&e["app"]||"";if(e){t="coop_"+e.replace("bdbrowser","bdexplorer")}}else{if(this.w.INFO&&this.w.INFO.flashVars&&this.w.INFO.flashVars.coop){t=this.w.INFO.flashVars.coop}}return t};this.getWeid=function(){return window.webEventID||""};this.getPRU=function(){return this.cookieGet("P00PRU")||""};this.getMod=function(){var t=window.Q&&Q.PageInfo||{};var e=t.i18n==="tw_t"?false:true;var i;if(e){i="cn_s"}else{i="tw_t"}return i};this.post=function(){var t=this;try{t.pars=[];var e,i=t.filter.length,r;if(i===0){for(e in t.par){t.pars.push([e,t.par[e]].join("="))}}else{for(e=0;e<i;e++){r=t.filter[e];t.pars.push([r,t.par[r]].join("="))}}t.pars=t.pars.join("&");window.jsQa=new Image(1,1);window.jsQa.src=t.url+t.pars;t.cookieSet(t.flag,t.hash(t.pars),0,"/",lib.SITE_DOMAIN);t.callback()}catch(o){return""}};this.iframeRequest=function(t){var e=document.createElement("iframe");e.scrolling="no";e.style.display="none";e.frameborder=0;e.src=t;document.body.appendChild(e)};this.syncCookie=function(t,e,i){var r=this;var o;if(t.indexOf("iqiyi.com")!==-1){o="http://passport.pps.tv/pages/user/proxy.action"}else if(t.indexOf("pps.tv")!==-1){o="http://passport.iqiyi.com/pages/user/proxy.action"}if(o){setTimeout(function(){var t=o+"#"+e+"="+i;try{window.JSHandler.logToConsole("xxx")}catch(n){if(!window.external.GetLoginJsonInfo){r.iframeRequest(t)}}},0)}};this.queryToJson=function(t){var e=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"};t=t||this.l.href;var i=t.substr(t.lastIndexOf("?")+1),r=i.split("&"),o=r.length,n={},a=0,s,c,f,u;for(;a<o;a++){if(!r[a]){continue}u=r[a].split("=");s=u.shift();c=u.join("=");f=n[s];if("undefined"==typeof f){n[s]=c}else if(e(f)){f.push(c)}else{n[s]=[f,c]}}return n};this.jsonToQuery=function(t,e){var i=Array.isArray||function(t){return Object.prototype.toString.call(t)=="[object Array]"};var r=function(t,e){var i,r,o;if("function"==typeof e){for(r in t){if(t.hasOwnProperty(r)){o=t[r];i=e.call(t,o,r);if(i===false){break}}}}return t};var o=function(t){return String(t).replace(/[#%&+=\/\\\ \u3000\f\r\n\t]/g,function(t){return"%"+(256+t.charCodeAt()).toString(16).substring(1).toUpperCase()})};var n=[],a,s=e||function(t){return o(t)};r(t,function(t,e){if(i(t)){a=t.length;while(a--){n.push(e+"="+s(t[a],e))}}else{n.push(e+"="+s(t,e))}});return n.join("&")}};(function(){var t=new lib.action.Qa;try{t.init({url:window.location.protocol+"//msg.71.am/jpb.gif"})}catch(e){}})();(function(){var t=new lib.action.Qa;var e=t.cookieGet("QC001")=="1";var i=t.cookieGet("QC005");var r;if(e||!i||window.location.protocol=="https:"||lib.SITE_DOMAIN.match(/pps/)){return}t.cookieSet("QC001","1",24,"/",lib.SITE_DOMAIN);var o="324";var n={qiyi_cookie:i};var a={sid:i,p:"iqiyi"};var s="http://nsclick.baidu.com/v.gif",c=[],f="BD_QIYI_LOG_"+(new Date).getTime(),u=window[f]=new Image;c.push("pid="+o);for(r in n){c.push(r+"="+encodeURIComponent(n[r]))}u.src=s+"?"+c.join("&")+"&t="+(new Date).getTime();var h="http://cpro.baidu.com/cpro/ui/html/sync.htm",l=[],d="BD_QIYI_LOG_"+(new Date).getTime(),p=window[d]=new Image;for(r in a){l.push(r+"="+encodeURIComponent(a[r]))}p.src=h+"?"+l.join("&")+"&t="+(new Date).getTime();if(!parseInt(Math.random()*10,10)){var v="http://m.wrating.com/m.gif?a=&c=860010-2370010124&mcookie="+i,m="WRATING_LOG_"+(new Date).getTime(),g=window[m]=new Image;g.src=v+"&t="+(new Date).getTime()}if(!parseInt(Math.random()*5,10)){var w="http://irs09.com/t.htm?t=10762,12380,0,2,1&q="+i,b="IRS_LOG_"+(new Date).getTime(),I=window[b]=new Image;I.src=w+"&r="+(new Date).getTime()}})();var md5V2=function(){var t=function(t,e){return t<<e|t>>>32-e};var e=function(t,e){var r,i,n,o,a;n=t&2147483648;o=e&2147483648;r=t&1073741824;i=e&1073741824;a=(t&1073741823)+(e&1073741823);if(r&i){return a^2147483648^n^o}if(r|i){if(a&1073741824){return a^3221225472^n^o}else{return a^1073741824^n^o}}else{return a^n^o}};var r=function(t,e,r){return t&e|~t&r};var i=function(t,e,r){return t&r|e&~r};var n=function(t,e,r){return t^e^r};var o=function(t,e,r){return e^(t|~r)};var a=function(i,n,o,a,s,f,c){i=e(i,e(e(r(n,o,a),s),c));return e(t(i,f),n)};var s=function(r,n,o,a,s,f,c){r=e(r,e(e(i(n,o,a),s),c));return e(t(r,f),n)};var f=function(r,i,o,a,s,f,c){r=e(r,e(e(n(i,o,a),s),c));return e(t(r,f),i)};var c=function(r,i,n,a,s,f,c){r=e(r,e(e(o(i,n,a),s),c));return e(t(r,f),i)};var u=function(t){var e;var r=t.length;var i=r+8;var n=(i-i%64)/64;var o=(n+1)*16;var a=Array(o-1);var s=0;var f=0;while(f<r){e=(f-f%4)/4;s=f%4*8;a[e]=a[e]|t.charCodeAt(f)<<s;f++}e=(f-f%4)/4;s=f%4*8;a[e]=a[e]|128<<s;a[o-2]=r<<3;a[o-1]=r>>>29;return a};var h=function(t){var e="",r="",i,n;for(n=0;n<=3;n++){i=t>>>n*8&255;r="0"+i.toString(16);e=e+r.substr(r.length-2,2)}return e};var l=function(t){t=t.replace(/\x0d\x0a/g,"\n");var e="";for(var r=0;r<t.length;r++){var i=t.charCodeAt(r);if(i<128){e+=String.fromCharCode(i)}else if(i>127&&i<2048){e+=String.fromCharCode(i>>6|192);e+=String.fromCharCode(i&63|128)}else{e+=String.fromCharCode(i>>12|224);e+=String.fromCharCode(i>>6&63|128);e+=String.fromCharCode(i&63|128)}}return e};return function(t){t+="";var r=Array();var i,n,o,d,p,v,m,g,w;var b=7,I=12,y=17,_=22;var C=5,k=9,M=14,S=20;var A=4,j=11,O=16,T=23;var Q=6,E=10,N=15,D=21;t=l(t);r=u(t);v=1732584193;m=4023233417;g=2562383102;w=271733878;for(i=0;i<r.length;i+=16){n=v;o=m;d=g;p=w;v=a(v,m,g,w,r[i+0],b,3614090360);w=a(w,v,m,g,r[i+1],I,3905402710);g=a(g,w,v,m,r[i+2],y,606105819);m=a(m,g,w,v,r[i+3],_,3250441966);v=a(v,m,g,w,r[i+4],b,4118548399);w=a(w,v,m,g,r[i+5],I,1200080426);g=a(g,w,v,m,r[i+6],y,2821735955);m=a(m,g,w,v,r[i+7],_,4249261313);v=a(v,m,g,w,r[i+8],b,1770035416);w=a(w,v,m,g,r[i+9],I,2336552879);g=a(g,w,v,m,r[i+10],y,4294925233);m=a(m,g,w,v,r[i+11],_,2304563134);v=a(v,m,g,w,r[i+12],b,1804603682);w=a(w,v,m,g,r[i+13],I,4254626195);g=a(g,w,v,m,r[i+14],y,2792965006);m=a(m,g,w,v,r[i+15],_,1236535329);v=s(v,m,g,w,r[i+1],C,4129170786);w=s(w,v,m,g,r[i+6],k,3225465664);g=s(g,w,v,m,r[i+11],M,643717713);m=s(m,g,w,v,r[i+0],S,3921069994);v=s(v,m,g,w,r[i+5],C,3593408605);w=s(w,v,m,g,r[i+10],k,38016083);g=s(g,w,v,m,r[i+15],M,3634488961);m=s(m,g,w,v,r[i+4],S,3889429448);v=s(v,m,g,w,r[i+9],C,568446438);w=s(w,v,m,g,r[i+14],k,3275163606);g=s(g,w,v,m,r[i+3],M,4107603335);m=s(m,g,w,v,r[i+8],S,1163531501);v=s(v,m,g,w,r[i+13],C,2850285829);w=s(w,v,m,g,r[i+2],k,4243563512);g=s(g,w,v,m,r[i+7],M,1735328473);m=s(m,g,w,v,r[i+12],S,2368359562);v=f(v,m,g,w,r[i+5],A,4294588738);w=f(w,v,m,g,r[i+8],j,2272392833);g=f(g,w,v,m,r[i+11],O,1839030562);m=f(m,g,w,v,r[i+14],T,4259657740);v=f(v,m,g,w,r[i+1],A,2763975236);w=f(w,v,m,g,r[i+4],j,1272893353);g=f(g,w,v,m,r[i+7],O,4139469664);m=f(m,g,w,v,r[i+10],T,3200236656);v=f(v,m,g,w,r[i+13],A,681279174);w=f(w,v,m,g,r[i+0],j,3936430074);g=f(g,w,v,m,r[i+3],O,3572445317);m=f(m,g,w,v,r[i+6],T,76029189);v=f(v,m,g,w,r[i+9],A,3654602809);w=f(w,v,m,g,r[i+12],j,3873151461);g=f(g,w,v,m,r[i+15],O,530742520);m=f(m,g,w,v,r[i+2],T,3299628645);v=c(v,m,g,w,r[i+0],Q,4096336452);w=c(w,v,m,g,r[i+7],E,1126891415);g=c(g,w,v,m,r[i+14],N,2878612391);m=c(m,g,w,v,r[i+5],D,4237533241);v=c(v,m,g,w,r[i+12],Q,1700485571);w=c(w,v,m,g,r[i+3],E,2399980690);g=c(g,w,v,m,r[i+10],N,4293915773);m=c(m,g,w,v,r[i+1],D,2240044497);v=c(v,m,g,w,r[i+8],Q,1873313359);w=c(w,v,m,g,r[i+15],E,4264355552);g=c(g,w,v,m,r[i+6],N,2734768916);m=c(m,g,w,v,r[i+13],D,1309151649);v=c(v,m,g,w,r[i+4],Q,4149444226);w=c(w,v,m,g,r[i+11],E,3174756917);g=c(g,w,v,m,r[i+2],N,718787259);m=c(m,g,w,v,r[i+9],D,3951481745);v=e(v,n);m=e(m,o);g=e(g,d);w=e(w,p)}var x=h(v)+h(m)+h(g)+h(w);return x.toLowerCase()}}();lib.md5V2=md5V2;(function(){var t=function(){var t=2;var e=window.location.hostname.split(".");e=e.slice(e.length-t);return e.join(".")}();var e=t.match(/pps/);var r="http://msg.71.am/b?t=20&p=10&p1=101"+("&pf="+(e?"20":"")+"1");var i=function(t,e){t=t||{};if(e.indexOf("?")==-1){e+="?"}else{e+="&"}var r=+new Date;t._=r;for(var i in t){if(t.hasOwnProperty(i)){e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i])+"&"}}if(e[e.length-1]==="&"){e=e.slice(0,-1)}var n=new Image;n.src=e};if(!document.querySelectorAll){var n=function(t){if(!t){return}var e=[];var r=document;var i=r.getElementsByTagName("*")||r.all;for(var n=0,o=i.length;n<o;n++){if(i[n].id==t){e.push(i[n])}}return e}}function o(){var t=[];var e="block-";var r,i,o,a;var s="A".charCodeAt();var c=function(t){return document.getElementById(t)};var f=String.fromCharCode;var u;for(u=0;u<26;u++){r=f(s+u);o=e+r;var h="*[id="+o+"]";var l="";if(document.querySelectorAll){l=document.querySelectorAll(h)}else{l=n(o)}var d=l.length;if(d){if(d>1){var p=0;var v=1;while(p<d){a=l[p];if(p){a["__bid__"]=r+v;a["id"]=o+v;v++}else{a["__bid__"]=r}t.push(a);p++}}else{a=c(o);a["__bid__"]=r;t.push(a)}}}for(u=0;u<26;u++){i=f(s+u);var m=false;for(var g=0;g<26;g++){r=f(s+g);o=e+i+r;a=c(o);if(a){m=true;a["__bid__"]=i+r;t.push(a)}}}return t}function a(){var t={};var e=[];var r="block-";var i=document.getElementsByTagName("qchunk");var n,o;for(var a=0,s=i.length;a<s;a++){n=i[a];o=n.getAttribute("data-id")||"";if(o.substr(0,r.length).toLowerCase()==r){var c=o.substr(r.length);if(!t[c]){t[c]=1}else{var f=++t[c];var u;do{u=c[0];u=u+f;f++}while(t[u]);t[u]=1;n.setAttribute("data-id",u);c=u}n["__bid__"]=c;e.push(n)}}return e}function s(t,e,r){if(t._clickMapPBSent){return false}t._clickMapPBSent=true;if(e===r){e._c=1;return true}if(e._c>=1){e._c++;return false}else{if(typeof e._c!=="number"){e._c=1}else{e._c++}if(!e._adjustClickMap){var i=function(){this._c=0};e._adjustClickMap=i.bind(e);try{if(e.addEventListener){e.addEventListener("mousedown",e._adjustClickMap,false)}else{e.attachEvent("onmousedown",e._adjustClickMap)}}catch(n){}}}return true}var c=function(t){t=t||window.event;var e=t.target||t.srcElement;var n=t.currentTarget||this;if(!s(t,e,n)){return}var o=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;var a=document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft;var c=document.documentElement&&document.documentElement.scrollWidth||document.body.scrollWidth;var f=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;var u=document.documentElement&&document.documentElement.clientHeight||document.body.clientHeight;var h=document.documentElement&&document.documentElement.clientWidth||document.body.clientWidth;var l=Math.max(f,u);var d=Math.max(c,h);var p=this["__bid__"]||"";var v=g(document.getElementsByTagName("body")[0].getAttribute("data-pb"),"&");var m=g(this.getAttribute("data-pb"),"&");var b,_,I;do{b=e;_=b.getAttribute("rseat");I=b.tagName.toUpperCase();e=e.parentNode;if(b==this){break}}while(!_&&I!=="A"&&I!=="IMG");var y=g(b.getAttribute("data-pb"),"&");var C,k,M;if(_){y.rseat=_}if(I==="A"){C=b.title||"";k="a";M=b.getAttribute("href")||""}else if(I==="IMG"){C=b.alt||"";k="i";M=""}else{C=b.title||"";k="e";M=""}var S,A,j,O;O=g(document.cookie,";");S=O["P00003"]||"";A=O["QC005"]||"";j=O["QC006"]||"";var E=window.Q&&Q.PageInfo||{};var T=E.i18n==="tw_t"?false:true;var N;if(T){N="cn_s"}else{N="tw_t"}var D={block:p,rt:k,r:C,rlink:M,pu:decodeURIComponent(S),u:decodeURIComponent(A),jsuid:decodeURIComponent(j),ce:window.webEventID||"",re:d+"*"+l,clkx:t.clientX+a,clky:t.clientY+o,mod:N,tm:window.__qlt&&window.__qlt.statisticsStart?new Date-window.__qlt.statisticsStart:""};i(w(D,v,m,y),r)};var f=o();var u=a();var h,l;for(var d=0,p=f.length;d<p;d++){if(u.indexOf(f[d])==-1){u.push(f[d])}}var v=document.getElementsByTagName("body")[0];v.__bid__="body";u.push(v);var m=function(t){var e=u||[];if(t&&t.data){e=t.data.down("[data-block-name]")||[];if(e.length===0){return}var r="block-";e.forEach(function(t){t["__bid__"]=t.id.substr(r.length)})}for(var i=0,n=e.length;i<n;i++){var o=e[i];var a=Q(o);if(a.attr("data-asyn-pb")){continue}var s=c.bind(o);if(o.addEventListener){o.addEventListener("mousedown",s,false)}else{o.attachEvent("onmousedown",s)}a.attr("data-asyn-pb","true")}};if(window.Q){Q.$(window).on("scroll",m);Q.$(window).on("resize",m);Q.event.customEvent.on("bindingPingback",m);m()}function g(t,e){var r={};e=e||"&";if(t){var i=t.split(e),n;for(var o=0,a=i.length;o<a;o++){n=i[o];if(n){n=n.split(/\s*=\s*/g);if(n[0]){r[n[0].replace(/^\s*|\s*$/g,"")]=n[1]||""}}}}return r}function w(t,e){var r=t||{};var i;for(var n=1,o=arguments.length;n<o;n++){i=arguments[n];if(i){for(var a in i){if(i.hasOwnProperty(a)){r[a]=i[a]}}}}return r}})();