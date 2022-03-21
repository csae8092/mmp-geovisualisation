(function(t){function e(e){for(var r,l,i=e[0],s=e[1],c=e[2],p=0,d=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},a=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container my-4",staticStyle:{"text-align":"center"},attrs:{id:"app"}},[n("Leaflet")],1)},a=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("l-map",{staticStyle:{height:"500px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.places,(function(t){return n("l-marker",{key:t.id,attrs:{"lat-lng":t.coords}},[n("l-icon",{attrs:{iconSize:[32,37],iconAnchor:[16,37],"icon-url":t.iconUrl}})],1)})),n("l-rectangle",{attrs:{bounds:t.rectangle.bounds,"l-style":t.rectangle.style}}),n("l-geo-json",{attrs:{geojson:t.geojson,"options-style":t.spatialStyle}})],2)],1)])},i=[],s=n("e11e"),c=n.n(s),u=n("2699"),p=n("a40a"),d=n("4e2b"),f=n("fb8e"),h=n("044a"),m=n("fbba"),g=n("e118"),b=n.n(g),y=n("7872"),v=n.n(y),w={name:"GeometryTest",components:{LMap:u["a"],LTileLayer:p["a"],LMarker:d["a"],LRectangle:f["a"],LGeoJson:h["a"],LIcon:m["a"]},data(){return{zoom:4,center:[53.1017567989627,5.9478799299367004],geojson:null,places:[],rectangle:{bounds:[[48.4289313631231,-1.9558074747836995],[46.678651824788524,4.044055024736411]],style:{weight:3,dashArray:"10 10"}},icon:new c.a.icon({}),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},computed:{spatialStyle(){return()=>({color:"#E53935",weight:5,dashArray:"10 10"})}},created(){fetch("https://mmp.acdh-dev.oeaw.ac.at/api/spatialcoverage/?format=json&id=3").then(t=>t.json()).then(t=>{this.geojson=t});const t=[3,4,5,6];for(let e of t){const t="https://mmp.acdh-dev.oeaw.ac.at/api/ort/?format=json&id="+e;fetch(t).then(t=>t.json()).then(t=>{this.data=t;const n=this.data.results[0].coords.coordinates;let r={};r.id=e,r.coords=[n[1],n[0]],[3,6].includes(e)?r.iconUrl=v.a:r.iconUrl=b.a,this.places.push(r)}).catch(t=>{console.error(t)}).finally(()=>{this.loading=!1})}},updated(){var t=document.getElementsByClassName("leaflet-overlay-pane")[0].firstChild,e=document.createElementNS("http://www.w3.org/2000/svg","filter"),n=document.createElementNS("http://www.w3.org/2000/svg","feGaussianBlur");e.setAttribute("id","blur"),e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width","500%"),e.setAttribute("height","500%"),n.setAttribute("stdDeviation",3),e.appendChild(n),t.appendChild(e);for(let r=0;r<document.getElementsByClassName("leaflet-interactive").length;r++)document.getElementsByClassName("leaflet-interactive")[r].setAttribute("filter","url(#blur)")}},j=w,x=n("2877"),O=Object(x["a"])(j,l,i,!1,null,null,null),S=O.exports,A={name:"App",components:{Leaflet:S},data(){return{}},methods:{},async created(){}},_=A,L=Object(x["a"])(_,o,a,!1,null,null,null),E=L.exports,k=(n("6cc5"),n("eb2e")),C=n.n(k);r["a"].component("jw-pagination",C.a),r["a"].component("l-map",u["a"]),r["a"].component("l-tile-layer",p["a"]),r["a"].component("l-marker",d["a"]),r["a"].config.productionTip=!1,new r["a"]({render:t=>t(E)}).$mount("#app")},7872:function(t,e,n){t.exports=n.p+"img/city.fb646e00.svg"},e118:function(t,e,n){t.exports=n.p+"img/burg.4d1f8133.png"}});
//# sourceMappingURL=app.db85d49c.js.map