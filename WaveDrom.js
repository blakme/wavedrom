/*! wavedrom 2014-12-05 */
var JsonML;void 0===JsonML&&(JsonML={}),function(){"use strict";function a(a,b,c){"string"==typeof c&&(c=new Function("event",c)),"function"==typeof c&&(a[b]=c)}function b(b,c){if(c.name&&document.attachEvent)try{var d=document.createElement("<"+b.tagName+" name='"+c.name+"'>");b.tagName===d.tagName&&(b=d)}catch(e){}for(var f in c)if(c.hasOwnProperty(f)){var g=c[f];f&&null!==g&&"undefined"!=typeof g&&(f=j[f.toLowerCase()]||f,"style"===f?"undefined"!=typeof b.style.cssText?b.style.cssText=g:b.style=g:l[f]?(a(b,f,g),k[f]&&a(b,k[f],g)):"string"==typeof g||"number"==typeof g||"boolean"==typeof g?(b.setAttribute(f,g),k[f]&&b.setAttribute(k[f],g)):(b[f]=g,k[f]&&(b[k[f]]=g)))}return b}function c(a,b){if(b)if(a.tagName&&"table"===a.tagName.toLowerCase()&&a.tBodies){if(!b.tagName){if(11===b.nodeType)for(;b.firstChild;)c(a,b.removeChild(b.firstChild));return}var d=b.tagName.toLowerCase();if(d&&"tbody"!==d&&"thead"!==d){var e=a.tBodies.length>0?a.tBodies[a.tBodies.length-1]:null;e||(e=document.createElement("th"===d?"thead":"tbody"),a.appendChild(e)),e.appendChild(b)}else a.canHaveChildren!==!1&&a.appendChild(b)}else if(a.tagName&&"style"===a.tagName.toLowerCase()&&document.createStyleSheet)a.cssText=b;else if(a.canHaveChildren!==!1)a.appendChild(b);else if(a.tagName&&"object"===a.tagName.toLowerCase()&&b.tagName&&"param"===b.tagName.toLowerCase()){try{a.appendChild(b)}catch(f){}try{a.object&&(a.object[b.name]=b.value)}catch(g){}}}function d(a){return a&&3===a.nodeType&&(!a.nodeValue||!/\S/.exec(a.nodeValue))}function e(a){if(a){for(;d(a.firstChild);)a.removeChild(a.firstChild);for(;d(a.lastChild);)a.removeChild(a.lastChild)}}function f(a){var b=document.createElement("div");if(b.innerHTML=a,e(b),1===b.childNodes.length)return b.firstChild;for(var c=document.createDocumentFragment?document.createDocumentFragment():document.createElement("");b.firstChild;)c.appendChild(b.firstChild);return c}function g(a){this.value=a}function h(a){return document.createTextNode("["+a+"]")}function i(a,d,e){for(var h=1;h<d.length;h++)d[h]instanceof Array||"string"==typeof d[h]?c(a,JsonML.parse(d[h],e)):d[h]instanceof g?c(a,f(d[h].value)):"object"==typeof d[h]&&null!==d[h]&&1===a.nodeType&&(a=b(a,d[h]));return a}var j={rowspan:"rowSpan",colspan:"colSpan",cellpadding:"cellPadding",cellspacing:"cellSpacing",tabindex:"tabIndex",accesskey:"accessKey",hidefocus:"hideFocus",usemap:"useMap",maxlength:"maxLength",readonly:"readOnly",contenteditable:"contentEditable"},k={enctype:"encoding",onscroll:"DOMMouseScroll"},l=function(a){for(var b,c={};a.length;)b=a.shift(),c["on"+b.toLowerCase()]=b;return c}("blur,change,click,dblclick,error,focus,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,resize,scroll,select,submit,unload".split(","));JsonML.onerror=null,JsonML.parse=function(a,b){try{if(!a)return null;if("string"==typeof a)return document.createTextNode(a);if(a instanceof g)return f(a.value);if(!JsonML.isElement(a))throw new SyntaxError("invalid JsonML");var d=a[0];if(!d){for(var j=document.createDocumentFragment?document.createDocumentFragment():document.createElement(""),k=1;k<a.length;k++)c(j,JsonML.parse(a[k],b));return e(j),1===j.childNodes.length?j.firstChild:j}if("style"===d.toLowerCase()&&document.createStyleSheet)return JsonML.patch(document.createStyleSheet(),a,b),null;var l,m="http://www.w3.org/2000/svg";return l=i(document.createElementNS(m,d),a,b),e(l),l&&"function"==typeof b?b(l):l}catch(n){try{var o="function"==typeof JsonML.onerror?JsonML.onerror:h;return o(n,a,b)}catch(p){return document.createTextNode("["+p+"]")}}},JsonML.isElement=function(a){return a instanceof Array&&"string"==typeof a[0]}}();var WaveDrom={timer:0,lane:{xs:20,ys:20,xg:120,yh0:0,yh1:0,yf0:0,yf1:0,y0:5,yo:30,tgo:-10,ym:15,xlabel:6,xmax:1,scale:1,head:{},foot:{}},canvas:{heigth:85},panela:{ys:200},genBrick:function(a,b,c){"use strict";var d,e,f=[];if(4===a.length){for(e=0;c>e;e+=1){for(f.push(a[0]),d=0;b>d;d+=1)f.push(a[1]);for(f.push(a[2]),d=0;b>d;d+=1)f.push(a[3])}return f}for(1===a.length&&a.push(a[0]),f.push(a[0]),d=0;2*c*(b+1)-1>d;d+=1)f.push(a[1]);return f},genFirstWaveBrick:function(a,b,c){"use strict";var d=[];switch(a){case"p":d=this.genBrick(["pclk","111","nclk","000"],b,c);break;case"n":d=this.genBrick(["nclk","000","pclk","111"],b,c);break;case"P":d=this.genBrick(["Pclk","111","nclk","000"],b,c);break;case"N":d=this.genBrick(["Nclk","000","pclk","111"],b,c);break;case"l":case"L":case"0":d=this.genBrick(["000"],b,c);break;case"h":case"H":case"1":d=this.genBrick(["111"],b,c);break;case"=":d=this.genBrick(["vvv-2"],b,c);break;case"2":d=this.genBrick(["vvv-2"],b,c);break;case"3":d=this.genBrick(["vvv-3"],b,c);break;case"4":d=this.genBrick(["vvv-4"],b,c);break;case"5":d=this.genBrick(["vvv-5"],b,c);break;case"d":d=this.genBrick(["ddd"],b,c);break;case"u":d=this.genBrick(["uuu"],b,c);break;case"z":d=this.genBrick(["zzz"],b,c);break;default:d=this.genBrick(["xxx"],b,c)}return d},genWaveBrick:function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;return d={p:"pclk",n:"nclk",P:"Pclk",N:"Nclk",h:"pclk",l:"nclk",H:"Pclk",L:"Nclk"},e={0:"0",1:"1",x:"x",d:"d",u:"u",z:"z","=":"v",2:"v",3:"v",4:"v",5:"v"},f={0:"",1:"",x:"",d:"",u:"",z:"","=":"-2",2:"-2",3:"-3",4:"-4",5:"-5"},g={p:"0",n:"1",P:"0",N:"1",h:"1",l:"0",H:"1",L:"0",0:"0",1:"1",x:"x",d:"d",u:"u",z:"z","=":"v",2:"v",3:"v",4:"v",5:"v"},h={p:"",n:"",P:"",N:"",h:"",l:"",H:"",L:"",0:"",1:"",x:"",d:"",u:"",z:"","=":"-2",2:"-2",3:"-3",4:"-4",5:"-5"},i={p:"111",n:"000",P:"111",N:"000",h:"111",l:"000",H:"111",L:"000",0:"000",1:"111",x:"xxx",d:"ddd",u:"uuu",z:"zzz","=":"vvv-2",2:"vvv-2",3:"vvv-3",4:"vvv-4",5:"vvv-5"},j={p:"nclk",n:"pclk",P:"nclk",N:"pclk"},k={p:"000",n:"111",P:"000",N:"111"},l={hp:"111",Hp:"111",ln:"000",Ln:"000",nh:"111",Nh:"111",pl:"000",Pl:"000"},m=a.split(""),n=i[m[1]],o=d[m[1]],void 0===o?(p=e[m[1]],void 0===p?this.genBrick(["xxx"],b,c):(q=g[m[0]],void 0===q?this.genBrick(["xxx"],b,c):this.genBrick([q+"m"+p+h[m[0]]+f[m[1]],n],b,c))):(r=l[a],void 0!==r&&(o=r),p=j[m[1]],void 0===p?this.genBrick([o,n],b,c):this.genBrick([o,n,p,k[m[1]]],b,c))},parseWaveLane:function(a,b){"use strict";var c,d,e,f,g=[],h=[];for(g=a.split(""),e=g.shift(),c=1;"."===g[0]||"|"===g[0];)g.shift(),c+=1;for(h=h.concat(this.genFirstWaveBrick(e,b,c));g.length;){for(d=e,e=g.shift(),c=1;"."===g[0]||"|"===g[0];)g.shift(),c+=1;h=h.concat(this.genWaveBrick(d+e,b,c))}for(f=0;f<this.lane.phase;f+=1)h.shift();return h}};WaveDrom.parseWaveLanes=function(a){"use strict";function b(a){var b=a.data;return void 0===b?null:"string"==typeof b?b.split(" "):b}var c,d,e=[],f=[];for(c in a)d=a[c],this.lane.period=d.period?d.period:1,this.lane.phase=d.phase?2*d.phase:0,e.push([]),f[0]=d.name||" ",f[1]=d.phase||0,e[e.length-1][0]=f.slice(0),e[e.length-1][1]=d.wave?this.parseWaveLane(d.wave,this.lane.period*this.lane.hscale-1):null,e[e.length-1][2]=b(d);return e},WaveDrom.FindLaneMarkers=function(a){"use strict";var b,c=0,d=0,e=[];for(b in a)"vvv-2"===a[b]|"vvv-3"===a[b]|"vvv-4"===a[b]|"vvv-5"===a[b]?d+=1:0!==d&&(e.push(c-(d+1)/2),d=0),c+=1;return 0!==d&&e.push(c-(d+1)/2),e},WaveDrom.RenderWaveLane=function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m=[1],n=0,o=0,p=[],q="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",s="http://www.w3.org/XML/1998/namespace";for(e=0;e<b.length;e+=1)if(l=b[e][0][0]){g=JsonML.parse(["g",{id:"wavelane_"+e+"_"+c,transform:"translate(0,"+(this.lane.y0+e*this.lane.yo)+")"}]),a.insertBefore(g,null),"number"==typeof l&&(l+=""),i=JsonML.parse(["text",{x:this.lane.tgo,y:this.lane.ym,"class":"info","text-anchor":"end"},l]),i.setAttributeNS(s,"xml:space","preserve"),g.insertBefore(i,null),k=this.lane.xs*this.lane.hscale*2,p.push(i.getBBox().width);var t;if(t=b[e][0][1],t=t>0?Math.ceil(2*t)-2*t:-2*t,h=JsonML.parse(["g",{id:"wavelane_draw_"+e+"_"+c,transform:"translate("+t*this.lane.xs+", 0)"}]),g.insertBefore(h,null),b[e][1]){for(d=0;d<b[e][1].length;d+=1)j=document.createElementNS(q,"use"),j.setAttributeNS(r,"xlink:href","#"+b[e][1][d]),j.setAttribute("transform","translate("+d*this.lane.xs+")"),h.insertBefore(j,null);if(b[e][2]&&b[e][2].length&&(m=this.FindLaneMarkers(b[e][1]),0!==m.length))for(f in m)b[e][2]&&"undefined"!=typeof b[e][2][f]&&(i=JsonML.parse(["text",{x:m[f]*this.lane.xs+this.lane.xlabel,y:this.lane.ym,"text-anchor":"middle"},b[e][2][f]]),i.setAttributeNS(s,"xml:space","preserve"),h.insertBefore(i,null));b[e][1].length>n&&(n=b[e][1].length)}}return this.lane.xmax=n,this.lane.xg=o+20,p},WaveDrom.RenderMarks=function(a,b,c){"use strict";function d(a,b,c){var d;a[b]&&a[b].text&&(d=JsonML.parse(["text",{x:a.xmax*a.xs/2,y:c,"text-anchor":"middle",fill:"#000"},a[b].text]),d.setAttributeNS(l,"xml:space","preserve"),g.insertBefore(d,null))}function e(a,b,c,d,e,f,h){var i,j,k,m,n,o=1,p=0,q=[];if(void 0!==a[b]&&void 0!==a[b][c]){if(m=a[b][c],"string"==typeof m)m=m.split(" ");else if("number"==typeof m||"boolean"==typeof m)for(k=Number(m),m=[],i=0;h>i;i+=1)m.push(i+k);if("[object Array]"===Object.prototype.toString.call(m)&&0!==m.length){if(1===m.length)if(k=Number(m[0]),isNaN(k))q=m;else for(i=0;h>i;i+=1)q[i]=i+k;else if(2===m.length)if(k=Number(m[0]),o=Number(m[1]),n=m[1].split("."),2===n.length&&(p=n[1].length),isNaN(k)||isNaN(o))q=m;else for(k=o*k,i=0;h>i;i+=1)q[i]=(o*i+k).toFixed(p);else q=m;for(i=0;h>i;i+=1)n=q[i],"number"==typeof n&&(n+=""),j=JsonML.parse(["text",{x:i*e+d,y:f,"text-anchor":"middle","class":"muted"},n]),j.setAttributeNS(l,"xml:space","preserve"),g.insertBefore(j,null)}}}var f,g,h,i,j,k,l="http://www.w3.org/XML/1998/namespace";for(i=2*this.lane.hscale,j=i*this.lane.xs,h=this.lane.xmax/i,k=b.length*this.lane.yo,g=JsonML.parse(["g",{id:"gmarks_"+c}]),a.insertBefore(g,a.firstChild),f=0;h+1>f;f+=1)g.insertBefore(JsonML.parse(["path",{id:"gmark_"+f+"_"+c,d:"m "+f*j+",0 0,"+k,style:"stroke:#888;stroke-width:0.5;stroke-dasharray:1,3"}]),null);d(this.lane,"head",this.lane.yh0?-33:-13),d(this.lane,"foot",k+(this.lane.yf0?45:25)),e(this.lane,"head","tick",0,j,-5,h+1),e(this.lane,"head","tock",j/2,j,-5,h),e(this.lane,"foot","tick",0,j,k+15,h+1),e(this.lane,"foot","tock",j/2,j,k+15,h)},WaveDrom.RenderGroups=function(a,b,c){"use strict";var d,e,f,g,h,i,j="http://www.w3.org/2000/svg",k="http://www.w3.org/XML/1998/namespace";for(d in b)e=document.createElementNS(j,"path"),e.id="group_"+d+"_"+c,e.setAttribute("d","m "+(b[d].x+.5)+","+(b[d].y*this.lane.yo+3.5+this.lane.yh0+this.lane.yh1)+" c -3,0 -5,2 -5,5 l 0,"+(b[d].height*this.lane.yo-16)+" c 0,3 2,5 5,5"),e.setAttribute("style","stroke:#0041c4;stroke-width:1;fill:none"),a.insertBefore(e,null),i=b[d].name,"undefined"!=typeof i&&("number"==typeof i&&(i+=""),g=b[d].x-10,h=this.lane.yo*(b[d].y+b[d].height/2)+this.lane.yh0+this.lane.yh1,f=JsonML.parse(["text",{x:g,y:h,"text-anchor":"middle","class":"info",transform:"rotate(270,"+g+","+h+")"},i]),f.setAttributeNS(k,"xml:space","preserve"),a.insertBefore(f,null))},WaveDrom.RenderGaps=function(a,b,c){"use strict";var d,e,f,g,h,i,j=[],k="http://www.w3.org/2000/svg",l="http://www.w3.org/1999/xlink";if(b){e=document.createElementNS(k,"g"),e.id="wavegaps_"+c,a.insertBefore(e,null);for(d in b)if(this.lane.period=b[d].period?b[d].period:1,this.lane.phase=b[d].phase?2*b[d].phase:0,f=document.createElementNS(k,"g"),f.id="wavegap_"+d+"_"+c,f.setAttribute("transform","translate(0,"+(this.lane.y0+d*this.lane.yo)+")"),e.insertBefore(f,null),i=b[d].wave)for(j=i.split(""),h=0;j.length;)"|"===j.shift()&&(g=document.createElementNS(k,"use"),g.setAttributeNS(l,"xlink:href","#gap"),g.setAttribute("transform","translate("+this.lane.xs*((2*h+1)*this.lane.period*this.lane.hscale-this.lane.phase)+")"),f.insertBefore(g,null)),h+=1}},WaveDrom.RenderArcs=function(a,b,c,d){"use strict";function e(){p=document.createElementNS(u,"path"),p.id="gmark_"+s.from+"_"+s.to,p.setAttribute("d","M "+n.x+","+n.y+" "+o.x+","+o.y),p.setAttribute("style","fill:none;stroke:#00F;stroke-width:1"),f.insertBefore(p,null)}var f,g,h,i,j,k,l,m,n,o,p,q,r=[],s={words:[],from:0,shape:"",to:0,label:""},t={},u="http://www.w3.org/2000/svg",v="http://www.w3.org/XML/1998/namespace";if(b){for(g in b)if(this.lane.period=b[g].period?b[g].period:1,this.lane.phase=b[g].phase?2*b[g].phase:0,i=b[g].node)for(r=i.split(""),j=0;r.length;)k=r.shift(),"."!==k&&(t[k]={x:this.lane.xs*(2*j*this.lane.period*this.lane.hscale-this.lane.phase)+this.lane.xlabel,y:g*this.lane.yo+this.lane.y0+.5*this.lane.ys}),j+=1;if(f=document.createElementNS(u,"g"),f.id="wavearcs_"+c,a.insertBefore(f,null),d.edge)for(g in d.edge){s.words=d.edge[g].split(" "),s.label=d.edge[g].substring(s.words[0].length),s.label=s.label.substring(1),s.from=s.words[0].substr(0,1),s.to=s.words[0].substr(-1,1),s.shape=s.words[0].slice(1,-1),n=t[s.from],o=t[s.to],e(),s.label&&(l=JsonML.parse(["text",{style:"font-size:10px;","text-anchor":"middle"},s.label+""]),l.setAttributeNS(v,"xml:space","preserve"),m=JsonML.parse(["rect",{height:9,style:"fill:#FFF;"}]),f.insertBefore(m,null),f.insertBefore(l,null),q=l.getBBox().width,m.setAttribute("width",q));var w=o.x-n.x,x=o.y-n.y,y=(n.x+o.x)/2,z=(n.y+o.y)/2;switch(s.shape){case"-":break;case"~":p.setAttribute("d","M "+n.x+","+n.y+" c "+.7*w+", 0 "+.3*w+", "+x+" "+w+", "+x);break;case"-~":p.setAttribute("d","M "+n.x+","+n.y+" c "+.7*w+", 0 "+w+", "+x+" "+w+", "+x),s.label&&(y=n.x+.75*(o.x-n.x));break;case"~-":p.setAttribute("d","M "+n.x+","+n.y+" c 0, 0 "+.3*w+", "+x+" "+w+", "+x),s.label&&(y=n.x+.25*(o.x-n.x));break;case"-|":p.setAttribute("d","m "+n.x+","+n.y+" "+w+",0 0,"+x),s.label&&(y=o.x);break;case"|-":p.setAttribute("d","m "+n.x+","+n.y+" 0,"+x+" "+w+",0"),s.label&&(y=n.x);break;case"-|-":p.setAttribute("d","m "+n.x+","+n.y+" "+w/2+",0 0,"+x+" "+w/2+",0");break;case"->":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none");break;case"~>":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","M "+n.x+","+n.y+" c "+.7*w+", 0 "+.3*w+", "+x+" "+w+", "+x);break;case"-~>":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","M "+n.x+","+n.y+" c "+.7*w+", 0 "+w+", "+x+" "+w+", "+x),s.label&&(y=n.x+.75*(o.x-n.x));break;case"~->":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","M "+n.x+","+n.y+" c 0, 0 "+.3*w+", "+x+" "+w+", "+x),s.label&&(y=n.x+.25*(o.x-n.x));break;case"-|>":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","m "+n.x+","+n.y+" "+w+",0 0,"+x),s.label&&(y=o.x);break;case"|->":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","m "+n.x+","+n.y+" 0,"+x+" "+w+",0"),s.label&&(y=n.x);break;case"-|->":p.setAttribute("style","marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","m "+n.x+","+n.y+" "+w/2+",0 0,"+x+" "+w/2+",0");break;case"<->":p.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none");break;case"<~>":p.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","M "+n.x+","+n.y+" c "+.7*w+", 0 "+.3*w+", "+x+" "+w+", "+x);break;case"<-~>":p.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","M "+n.x+","+n.y+" c "+.7*w+", 0 "+w+", "+x+" "+w+", "+x),s.label&&(y=n.x+.75*(o.x-n.x));break;case"<-|>":p.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","m "+n.x+","+n.y+" "+w+",0 0,"+x),s.label&&(y=o.x);break;case"<-|->":p.setAttribute("style","marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"),p.setAttribute("d","m "+n.x+","+n.y+" "+w/2+",0 0,"+x+" "+w/2+",0");break;default:p.setAttribute("style","fill:none;stroke:#F00;stroke-width:1")}s.label&&(l.setAttribute("x",y),l.setAttribute("y",z+3),m.setAttribute("x",y-q/2),m.setAttribute("y",z-5))}for(h in t)h==h.toLowerCase()&&t[h].x>0&&(m=JsonML.parse(["rect",{y:t[h].y-4,height:8,style:"fill:#FFF;"}]),f.insertBefore(m,null),l=JsonML.parse(["text",{style:"font-size:8px;",x:t[h].x,y:t[h].y+2,"text-anchor":"middle"},h+""]),f.insertBefore(l,null),q=l.getBBox().width+2,m.setAttribute("x",t[h].x-q/2),m.setAttribute("width",q))}},WaveDrom.parseConfig=function(a){"use strict";function b(a){return a>0?Math.round(a):1}var c;this.lane.hscale=1,this.lane.hscale0&&(this.lane.hscale=this.lane.hscale0),a&&a.config&&a.config.hscale&&(c=Math.round(b(a.config.hscale)),c>0&&(c>100&&(c=100),this.lane.hscale=c)),this.lane.yh0=0,this.lane.yh1=0,this.lane.head=a.head,a&&a.head&&((a.head.tick||0===a.head.tick)&&(this.lane.yh0=20),(a.head.tock||0===a.head.tock)&&(this.lane.yh0=20),a.head.text&&(this.lane.yh1=46,this.lane.head.text=a.head.text)),this.lane.yf0=0,this.lane.yf1=0,this.lane.foot=a.foot,a&&a.foot&&((a.foot.tick||0===a.foot.tick)&&(this.lane.yf0=20),(a.foot.tock||0===a.foot.tock)&&(this.lane.yf0=20),a.foot.text&&(this.lane.yf1=46,this.lane.foot.text=a.foot.text))},WaveDrom.rec=function(a,b){"use strict";var c,d,e={},f={x:10};for(("string"==typeof a[0]||"number"==typeof a[0])&&(d=a[0],f.x=25),b.x+=f.x,c=0;c<a.length;c++)"object"==typeof a[c]&&("[object Array]"===Object.prototype.toString.call(a[c])?(e.y=b.y,b=this.rec(a[c],b),b.groups.push({x:b.xx,y:e.y,height:b.y-e.y,name:b.name})):(b.lanes.push(a[c]),b.width.push(b.x),b.y+=1));return b.xx=b.x,b.x-=f.x,b.name=d,b},WaveDrom.InsertSVGTemplate=function(a,b,c){"use strict";for(var d,e,f;b.childNodes.length;)b.removeChild(b.childNodes[0]);for(e in WaveSkin)break;f=WaveSkin["default"]||WaveSkin[e],c&&c.config&&c.config.skin&&WaveSkin[c.config.skin]&&(f=WaveSkin[c.config.skin]),0===a?(this.lane.xs=Number(f[3][1][2][1].width),this.lane.ys=Number(f[3][1][2][1].height),this.lane.xlabel=Number(f[3][1][2][1].x),this.lane.ym=Number(f[3][1][2][1].y)):f=["svg",{id:"svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"0"},["g",{id:"waves"},["g",{id:"lanes"}],["g",{id:"groups"}]]],f[f.length-1][1].id="waves_"+a,f[f.length-1][2][1].id="lanes_"+a,f[f.length-1][3][1].id="groups_"+a,f[1].id="svgcontent_"+a,f[1].height=0,d=JsonML.parse(f),b.insertBefore(d,null)},WaveDrom.InsertSVGTemplateAssign=function(a,b){"use strict";for(var c,d;b.childNodes.length;)b.removeChild(b.childNodes[0]);d=["svg",{id:"svgcontent_"+a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",overflow:"hidden"},["style",".pinname {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:end; font-family:Helvetica} .wirename {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:start; font-family:Helvetica} .wirename:hover {fill:blue} .gate {color:#000; fill:#ffc; fill-opacity: 1;stroke:#000; stroke-width:1; stroke-opacity:1} .gate:hover {fill:red !important; } .wire {fill:none; stroke:#000; stroke-width:1; stroke-opacity:1} .grid {fill:#fff; fill-opacity:1; stroke:none}"]],c=JsonML.parse(d),b.insertBefore(c,null)},WaveDrom.RenderAssign=function(a,b){"use strict";function c(a,b){var d,e,f,g;for(b.xmax=Math.max(b.xmax,b.x),d=a[0],e=b.y,g=a.length,f=1;g>f;f++)"[object Array]"===Object.prototype.toString.call(a[f])?b=c(a[f],{x:b.x+1,y:b.y,xmax:b.xmax}):(a[f]={name:a[f],x:b.x+1,y:b.y},b.y+=2);return a[0]={name:a[0],x:b.x,y:Math.round((e+(b.y-2))/2)},b.x--,b}function d(a,b,c){console.log(b,c);var d,e,f=" M 4,0 C 4,1.1 3.1,2 2,2 0.9,2 0,1.1 0,0 c 0,-1.1 0.9,-2 2,-2 1.1,0 2,0.9 2,2 z",g={"~":"M -11,-6 -11,6 0,0 z m -5,6 5,0"+f,"=":"M -11,-6 -11,6 0,0 z m -5,6 5,0","&":"m -16,-10 5,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -5,0 z","~&":"m -16,-10 5,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -5,0 z"+f,"|":"m -18,-10 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 2.5,-5 2.5,-15 0,-20 z","~|":"m -18,-10 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 2.5,-5 2.5,-15 0,-20 z"+f,"^":"m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 m 3,-20 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z","~^":"m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 m 3,-20 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z"+f,"+":"m -8,5 0,-10 m -5,5 10,0 m 3,0 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z","*":"m -4,4 -8,-8 m 0,8 8,-8 m 4,4 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z"},h={BUF:1,INV:1,AND:"&",NAND:"&",OR:"≥1",NOR:"≥1",XOR:"=1",XNOR:"=1",box:""},i={INV:1,NAND:1,NOR:1,XNOR:1};return c==b&&(c=4,b=-4),d=g[a],e=h[a],d?["path",{"class":"gate",d:d}]:e?["g",["path",{"class":"gate",d:"m -16,"+(b-3)+" 16,0 0,"+(c-b+6)+" -16,0 z"+(i[a]?f:"")}],["text",["tspan",{x:"-14",y:"4","class":"wirename"},e+""]]]:["text",["tspan",{x:"-14",y:"4","class":"wirename"},a+""]]}function e(a){var b,c,e,f=["g"],g=[],h=a.length;for(b=2;h>b;b++)g.push(a[b][1]);for(c=Math.min.apply(null,g),e=Math.max.apply(null,g),f.push(["g",{transform:"translate(16,0)"},["path",{d:"M  "+a[2][0]+","+c+" "+a[2][0]+","+e,"class":"wire"}]]),b=2;h>b;b++)f.push(["g",["path",{d:"m  "+a[b][0]+","+a[b][1]+" 16,0","class":"wire"}]]);return f.push(["g",{transform:"translate("+a[1][0]+","+a[1][1]+")"},["title",a[0]],d(a[0],c-a[1][1],e-a[1][1])]),f}function f(a,b){var c,d,g,h,i,j=["g"],k=[];if("[object Array]"===Object.prototype.toString.call(a)){for(d=a.length,k.push(a[0].name),k.push([32*(b-a[0].x),8*a[0].y]),c=1;d>c;c++)k.push("[object Array]"===Object.prototype.toString.call(a[c])?[32*(b-a[c][0].x),8*a[c][0].y]:[32*(b-a[c].x),8*a[c].y]);for(j.push(e(k)),c=1;d>c;c++)j.push(f(a[c],b))}else i=a.name,g=32*(b-a.x),h=8*a.y,j.push(["g",{transform:"translate("+g+","+h+")"},["title",i],["path",{d:"M 2,0 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z"}],["text",["tspan",{x:"-4",y:"4","class":"pinname"},i]]]);return j}var g,h,i,j,k,l,m,n,o,p,q=["g"],r=["g"];for(n=b.assign.length,h={x:0,y:2,xmax:0},g=b.assign,m=0;n>m;m++)h=c(g[m],h),h.x++;for(i=h.xmax+3,m=0;n>m;m++)q.push(f(g[m],i));for(k=32*(i+1)+1,l=8*(h.y+1)-7,n=4*(i+1),p=h.y+1,m=0;n>=m;m++)for(o=0;p>=o;o++)r.push(["rect",{height:1,width:1,x:8*m-.5,y:8*o-.5,"class":"grid"}]);j=document.getElementById("svgcontent_"+a),j.setAttribute("viewBox","0 0 "+k+" "+l),j.setAttribute("width",k),j.setAttribute("height",l),j.insertBefore(JsonML.parse(["g",{transform:"translate(0.5, 0.5)"},r,q]),null)},WaveDrom.eva=function(id){"use strict";function erra(a){return console.log(a.stack),{signal:[{name:["tspan",["tspan",{"class":"error h5"},"Error: "],a.message]}]}}var TheTextBox,source;if(TheTextBox=document.getElementById(id),TheTextBox.type&&"textarea"==TheTextBox.type)try{source=eval("("+TheTextBox.value+")")}catch(e){return erra(e)}else try{source=eval("("+TheTextBox.innerHTML+")")}catch(e){return erra(e)}if("[object Object]"!==Object.prototype.toString.call(source))return erra({message:"[Semantic]: The root has to be an Object: '{signal:[...]}'"});if(source.signal){if("[object Array]"!==Object.prototype.toString.call(source.signal))return erra({message:"[Semantic]: 'signal' object has to be an Array 'signal:[]'"})}else{if(!source.assign)return erra({message:"[Semantic]: 'signal:[...]' or 'assign:[...]' property is missing inside the root Object"});if("[object Array]"!==Object.prototype.toString.call(source.assign))return erra({message:"[Semantic]: 'assign' object hasto be an Array 'assign:[]'"})}return source},WaveDrom.RenderWaveForm=function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m=0;if(b.signal){this.InsertSVGTemplate(a,document.getElementById(c+a),b),this.parseConfig(b),d=this.rec(b.signal,{x:0,y:0,xmax:0,width:[],lanes:[],groups:[]}),e=document.getElementById("lanes_"+a),f=document.getElementById("groups_"+a),h=this.parseWaveLanes(d.lanes),k=this.RenderWaveLane(e,h,a);for(l in k)m=Math.max(m,k[l]+d.width[l]);this.RenderMarks(e,h,a),this.RenderArcs(e,d.lanes,a,b),this.RenderGaps(e,d.lanes,a),this.RenderGroups(f,d.groups,a),this.lane.xg=Math.ceil((m-this.lane.tgo)/this.lane.xs)*this.lane.xs,i=this.lane.xg+this.lane.xs*(this.lane.xmax+1),j=h.length*this.lane.yo+this.lane.yh0+this.lane.yh1+this.lane.yf0+this.lane.yf1,g=document.getElementById("svgcontent_"+a),g.setAttribute("viewBox","0 0 "+i+" "+j),g.setAttribute("width",i),g.setAttribute("height",j),g.setAttribute("overflow","hidden"),e.setAttribute("transform","translate("+(this.lane.xg+.5)+", "+(this.lane.yh0+this.lane.yh1+.5)+")")}else b.assign&&(this.InsertSVGTemplateAssign(a,document.getElementById(c+a),b),this.RenderAssign(a,b))},WaveDrom.ProcessAll=function(){"use strict";var a,b,c,d;for(c=0,a=document.getElementsByTagName("SCRIPT"),b=0;b<a.length;b++)a.item(b).type&&"WaveDrom"===a.item(b).type&&(a.item(b).setAttribute("id","InputJSON_"+c),d=document.createElement("div"),d.id="WaveDrom_Display_"+c,a.item(b).parentNode.insertBefore(d,a.item(b)),c+=1);for(b=0;c>b;b+=1)WaveDrom.RenderWaveForm(b,WaveDrom.eva("InputJSON_"+b),"WaveDrom_Display_"),WaveDrom.AppendSaveAsDialog(b,"WaveDrom_Display_");document.head.innerHTML+='<style type="text/css">div.wavedromMenu{position:fixed;border:solid 1pt#CCCCCC;background-color:white;box-shadow:0px 10px 20px #808080;cursor:default;margin:0px;padding:0px;}div.wavedromMenu>ul{margin:0px;padding:0px;}div.wavedromMenu>ul>li{padding:2px 10px;list-style:none;}div.wavedromMenu>ul>li:hover{background-color:#b5d5ff;}</style>'},WaveDrom.EditorRefresh=function(){"use strict";WaveDrom.RenderWaveForm(0,WaveDrom.eva("InputJSON_0"),"WaveDrom_Display_")},WaveDrom.AppendSaveAsDialog=function(a,b){"use strict";var c=document.getElementById(b+a);c.childNodes[0].addEventListener("contextmenu",function(d){var e=document.createElement("div");e.className="wavedromMenu",e.style.top=d.pageY+"px",e.style.left=d.pageX+"px";var f=document.createElement("ul"),g=document.createElement("li");g.innerHTML="Save as PNG",f.appendChild(g);var h=document.createElement("li");h.innerHTML="Save as SVG",f.appendChild(h),e.appendChild(f),document.body.appendChild(e),g.addEventListener("click",function(){var d="";if(0!==a){var f=document.getElementById(b+0);d+=f.innerHTML.substring(166,f.innerHTML.indexOf('<g id="waves_0">'))}d=[c.innerHTML.slice(0,166),d,c.innerHTML.slice(166)].join("");var g="data:image/svg+xml;base64,"+btoa(d),h=new Image;h.src=g;var j=document.createElement("canvas");j.width=h.width,j.height=h.height;var k=j.getContext("2d");k.drawImage(h,0,0);var l=j.toDataURL("image/png"),m=document.createElement("a");m.href=l,m.download="wavedrom.png",m.click(),e.parentNode.removeChild(e),document.body.removeEventListener("mousedown",i,!1)},!1),h.addEventListener("click",function(){var d="";if(0!==a){var f=document.getElementById(b+0);d+=f.innerHTML.substring(166,f.innerHTML.indexOf('<g id="waves_0">'))}d=[c.innerHTML.slice(0,166),d,c.innerHTML.slice(166)].join("");var g="data:image/svg+xml;base64,"+btoa(d),h=document.createElement("a");h.href=g,h.download="wavedrom.svg",h.click(),e.parentNode.removeChild(e),document.body.removeEventListener("mousedown",i,!1)},!1),e.addEventListener("contextmenu",function(a){a.preventDefault()},!1);var i=function(a){var b=parseInt(e.style.left,10),c=parseInt(e.style.top,10);(a.pageX<b||a.pageX>b+e.offsetWidth||a.pageY<c||a.pageY>c+e.offsetHeight)&&(e.parentNode.removeChild(e),document.body.removeEventListener("mousedown",i,!1))};document.body.addEventListener("mousedown",i,!1),d.preventDefault()},!1)};