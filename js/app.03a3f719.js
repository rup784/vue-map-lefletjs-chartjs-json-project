(function(e){function t(t){for(var o,r,i=t[0],c=t[1],p=t[2],l=0,u=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(u.length)u.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00b5":function(e,t,n){},"034f":function(e,t,n){"use strict";var o=n("85ec"),s=n.n(o);s.a},"243e":function(e,t,n){},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=a,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[e._m(0),n("div",[n("button",{staticClass:"btn btn-success",on:{click:function(t){e.toggle=!e.toggle}}},[n("span",{class:{active:!e.toggle}},[e._v("PincodeComp")]),e._v(" / "),n("span",{class:{active:e.toggle}},[e._v("LocalityComp")])]),n("div",{staticClass:"pincode_container",class:{active:!e.toggle}},[n("PincodeComp",{attrs:{msg:"Welcome to PincodeComp"}}),n("h3",[e._v("Click on region to check related Pincode details")])],1),n("div",{staticClass:"Locality_container",class:{active:e.toggle}},[n("LocalityComp",{attrs:{msg:"Welcome to LocalityComp"}}),n("h3",[e._v("Click on region to check related Locality details")])],1)])]),n("div",{staticClass:"container"},[n("div",{staticClass:"income_container"},[n("h1",[e._v("IncomeComp")]),n("IncomeComp",{attrs:{localityAppComp:e.localityAppComp}})],1),n("div",{staticClass:"expenditure_container"},[n("h1",[e._v("ExpenditureComp")]),n("ExpenditureComp",{attrs:{pincodeAppComp:e.pincodeAppComp}})],1)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"report_container"},[n("h1",[e._v("Report")]),n("div",{attrs:{id:"details"}}),n("div",[n("p",[e._v("Enter pincode number for Seeing Graph view")])])])}],r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"mapid"}})])}],c=(n("d81d"),n("96cf"),n("1da1")),p=n("bc3a"),d=n.n(p),l={name:"PincodeComp",props:{msg:String},data:function(){return{pincode:[],population:[],households:[],todos:[],rings:[],popupContent:[]}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://api.jsonbin.io/b/5e96c68a435f5604bb41be7c");case 3:for(n=t.sent,e.todos=n.data,o=0;o<e.todos.features.length;o++)e.rings[o]=e.todos.features[o].geometry.rings,e.pincode[o]=e.todos.features[o].attributes.pincode,e.population[o]=e.todos.features[o].attributes.population,e.households[o]=e.todos.features[o].attributes.households;e.mapWork(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},methods:{mapWork:function(){var e=window.L,t=e.map("mapid").setView([77,12],9),n='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',o="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",s=e.tileLayer(o,{attribution:n});s.addTo(t);for(var a=0;a<this.todos.features.length;a++){var r=this.rings[a],i=e.polygon(r,{color:"#ff0000"}).addTo(t);i.bindPopup("<p> Pincode:"+this.pincode[a]+"<br>Population:"+this.population[a]+"<br>Households:"+this.households[a]+"</p>").openPopup()}t.on("popupopen",(function(e){var t=e.popup._content,n=document.getElementById("details");n&&(n.innerHTML=t)}))}}},u=l,f=(n("cbdb"),n("2877")),h=Object(f["a"])(u,r,i,!1,null,"6e8b8bf4",null),b=h.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"localityMapid"}})])}],v={name:"LocalityComp",props:{msg:String},data:function(){return{locality:[],population:[],households:[],todos:[],rings:[]}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://api.jsonbin.io/b/5e96c65c2940c704e1d86721");case 3:for(n=t.sent,e.todos=n.data,o=0;o<e.todos.features.length;o++)e.rings[o]=e.todos.features[o].geometry.rings,e.locality[o]=e.todos.features[o].attributes.locality,e.population[o]=e.todos.features[o].attributes.population,e.households[o]=e.todos.features[o].attributes.households;e.mapWork(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},methods:{mapWork:function(){var e=window.L,t=e.map("localityMapid").setView([77,12],9),n='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',o="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",s=e.tileLayer(o,{attribution:n});s.addTo(t);for(var a=0;a<this.todos.features.length;a++){var r=this.rings[a],i=e.polygon(r,{color:"#99b2e5"}).addTo(t);i.bindPopup("<p> LocalityComp:"+this.locality[a]+"<br>Population:"+this.population[a]+"<br>Households:"+this.households[a]+"</p>").openPopup()}t.on("popupopen",(function(e){var t=e.popup._content,n=document.getElementById("details");n&&(n.innerHTML=t)}))}}},g=v,y=(n("d2cd"),Object(f["a"])(g,m,j,!1,null,"189bd60e",null)),k=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("input",{attrs:{id:"titlePin",placeholder:"Enter pincode number for Seeing Graph view"},domProps:{value:e.pincodeAppComp},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePin(t)}}}),n("button",{on:{click:e.updatePin}},[e._v(" Show Graph view ")]),n("div",{staticClass:"chart-container"},[e._m(0),n("column-chart",{attrs:{data:[["other",e.otherD],["house",e.houseD],["food",e.foodD],["apparel",e.apparelD],["house",e.teansportD],["health",e.healthD],["finance",e.financeD],["education",e.educationD],["entertainment",e.entertainmentD]]}})],1),n("p",[e._v("Expenditure for Pincode "+e._s(e.pincodeD))])])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left-copy"},[n("p",[e._v("Total expenditure in Lakhs")])])}],w=(n("a9e3"),{name:"ExpenditureComp",props:{pincodeAppComp:Number},data:function(){return{targetExpen:[],otherD:[],houseD:[],foodD:[],apparelD:[],teansportD:[],healthD:[],financeD:[],educationD:[],entertainmentD:[],pincodeD:[],todos:[]}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://api.jsonbin.io/b/5e96c5f2435f5604bb41be46");case 3:n=t.sent,e.todos=n.data,e.updateValue(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{updateValue:function(){for(var e=0;e<this.todos.length;e++)this.todos[e].pincode==this.pincodeAppComp&&(this.otherD=this.todos[e].other,this.houseD=this.todos[e].house,this.foodD=this.todos[e].food,this.apparelD=this.todos[e].apparel,this.teansportD=this.todos[e].teansport,this.healthD=this.todos[e].health,this.financeD=this.todos[e].finance,this.educationD=this.todos[e].education,this.entertainmentD=this.todos[e].entertainment,this.pincodeD=this.todos[e].pincode)},updatePin:function(){this.pincodeAppComp=document.getElementById("titlePin").value,console.log(this.pincodeAppComp),this.updateValue()}}}),D=w,x=(n("abab"),Object(f["a"])(D,_,C,!1,null,"92ee9d82",null)),P=x.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("input",{attrs:{id:"title",placeholder:"Enter pincode number for Seeing Graph view"},domProps:{value:e.localityAppComp},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updatePin(t)}}}),n("button",{on:{click:e.updatePin}},[e._v(" Show Graph view ")]),n("div",[n("pie-chart",{attrs:{data:[[e.localityD,e.incomeD]]}}),n("p",[e._v("Monthly income Distribution")]),n("p",[e._v(e._s(e.localityD)+" = "+e._s(e.incomeD))])],1)])},O=[],z={name:"IncomeComp",props:{localityAppComp:String},data:function(){return{localityD:[],incomeD:[],todos:[]}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get("https://api.jsonbin.io/b/5e96c62f435f5604bb41be5a");case 3:n=t.sent,e.todos=n.data,e.updateValue(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{updateValue:function(){for(var e=0;e<this.todos.length;e++)this.todos[e].locality==this.localityAppComp&&(this.incomeD=this.todos[e].income,this.localityD=this.todos[e].locality)},updatePin:function(){this.localityAppComp=document.getElementById("title").value,console.log(this.localityAppComp),this.updateValue()}}},A=z,S=(n("c134"),Object(f["a"])(A,E,O,!1,null,"1961de6a",null)),L=S.exports,M={name:"App",props:{msg:String},components:{PincodeComp:b,LocalityComp:k,ExpenditureComp:P,IncomeComp:L},data:function(){return{toggle:!0,pincodeAppComp:560110,localityAppComp:"Attiguppe"}}},T=M,$=(n("034f"),Object(f["a"])(T,s,a,!1,null,null,null)),R=$.exports,I=n("d842"),V=n("30ef"),W=n.n(V);function G(){location.reload()}o["a"].use(I["a"].use(W.a)),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(R)}}).$mount("#app");var B=window.innerWidth||document.documentElement.clientWidth;B<640&&(window.addEventListener("resize",G),console.log("small viewport"))},"85ec":function(e,t,n){},"93be":function(e,t,n){},abab:function(e,t,n){"use strict";var o=n("243e"),s=n.n(o);s.a},c134:function(e,t,n){"use strict";var o=n("cbf9"),s=n.n(o);s.a},cbdb:function(e,t,n){"use strict";var o=n("00b5"),s=n.n(o);s.a},cbf9:function(e,t,n){},d2cd:function(e,t,n){"use strict";var o=n("93be"),s=n.n(o);s.a}});
//# sourceMappingURL=app.03a3f719.js.map