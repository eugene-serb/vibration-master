(function(){"use strict";var t={4421:function(t,e,n){var a=n(9242),i=n(3396);const o={class:"wavelovers"},r=(0,i.Uk)("Press any gamepad button or connect a new gamepad to vibrate.");function s(t,e,n,a,s,c){const u=(0,i.up)("NavigationList"),d=(0,i.up)("router-view"),p=(0,i.up)("GamepadList"),m=(0,i.up)("MessageItem");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(u),(0,i.Wm)(d),t.gamepads.length>0?((0,i.wg)(),(0,i.j4)(p,{key:0,gamepads:t.gamepads},null,8,["gamepads"])):((0,i.wg)(),(0,i.j4)(m,{key:1},{default:(0,i.w5)((()=>[r])),_:1}))])}var c=n(1746);const u={class:"content-item navigation-list"},d=(0,i.Uk)("Patterns"),p=(0,i.Uk)("Custom"),m=(0,i.Uk)("Manual"),l=(0,i.Uk)("Diagnostic");function f(t,e,n,a,o,r){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(s,{to:"/",class:"navigation-item"},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(s,{to:"/custom",class:"navigation-item"},{default:(0,i.w5)((()=>[p])),_:1}),(0,i.Wm)(s,{to:"/manual",class:"navigation-item"},{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)(s,{to:"/diagnostic",class:"navigation-item"},{default:(0,i.w5)((()=>[l])),_:1})])}var v=(0,i.aZ)({name:"NavigationList"}),g=n(89);const h=(0,g.Z)(v,[["render",f]]);var w=h,b=n(7139);const y={class:"content-item device-list"};function A(t,e,n,a,o,r){const s=(0,i.up)("GamepadItem");return(0,i.wg)(),(0,i.iD)("div",y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.gamepads,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t.id,textContent:(0,b.zw)(t.unit.id)},null,8,["textContent"])))),128))])}const Z={class:"list-item"};function k(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",Z)}var C=(0,i.aZ)({name:"GamepadItem"});const _=(0,g.Z)(C,[["render",k]]);var P=_,E=(0,i.aZ)({name:"GamepadList",props:{gamepads:{type:Array}},components:{GamepadItem:P}});const L=(0,g.Z)(E,[["render",A]]);var j=L;const I={class:"content-item message"};function x(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",I,[(0,i._)("span",null,[(0,i.WI)(t.$slots,"default")])])}var G=(0,i.aZ)({name:"MessageItem"});const M=(0,g.Z)(G,[["render",x]]);var O=M,D=(0,i.aZ)({name:"App",components:{NavigationList:w,GamepadList:j,MessageItem:O},computed:{gamepads:function(){return c.Z.getters.gamepads}},methods:{addEventListeners(){window.addEventListener("gamepadconnected",(t=>c.Z.dispatch("addGamepad",t))),window.addEventListener("gamepaddisconnected",(t=>c.Z.dispatch("deleteGamepad",t)))},removeEventListeners(){window.removeEventListener("gamepadconnected",(t=>c.Z.dispatch("addGamepad",t))),window.removeEventListener("gamepaddisconnected",(t=>c.Z.dispatch("deleteGamepad",t)))}},mounted(){this.addEventListeners()},unmounted(){this.removeEventListeners()}});const N=(0,g.Z)(D,[["render",s]]);var T=N,S=n(2483);function V(t,e,n,a,o,r){const s=(0,i.up)("AppPatterns");return(0,i.wg)(),(0,i.j4)(s)}const U={class:"app-patterns"},W=(0,i.Uk)("Loading...");function B(t,e,n,a,o,r){const s=(0,i.up)("PatternList"),c=(0,i.up)("MessageItem");return(0,i.wg)(),(0,i.iD)("div",U,[t.patterns.length>0?((0,i.wg)(),(0,i.j4)(s,{key:0,patterns:t.patterns,mode:t.mode,isActive:t.isActive,onChange:t.change},null,8,["patterns","mode","isActive","onChange"])):((0,i.wg)(),(0,i.j4)(c,{key:1},{default:(0,i.w5)((()=>[W])),_:1}))])}const z={class:"content-item pattern-list"};function F(t,e,n,a,o,r){const s=(0,i.up)("PatternItem");return(0,i.wg)(),(0,i.iD)("div",z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.patterns,((e,n)=>((0,i.wg)(),(0,i.j4)(s,{key:e.name,pattern:e,index:n,mode:t.mode,isActive:t.isActive,onChange:t.change},null,8,["pattern","index","mode","isActive","onChange"])))),128))])}const H=["textContent"],K={class:"pattern-item__info-container"},$=["textContent"],q=["textContent"];function Y(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",{onClick:e[0]||(e[0]=e=>t.change(t.index)),class:(0,b.C_)(["pattern-item",t.index===t.mode&&!0===t.isActive?"pattern-item_selected":""])},[(0,i._)("span",{class:"pattern-item__icon",textContent:(0,b.zw)(t.pattern.icon)},null,8,H),(0,i._)("div",K,[(0,i._)("span",{class:"pattern-item__name",textContent:(0,b.zw)(t.pattern.name)},null,8,$),(0,i._)("span",{class:"pattern-item__type",textContent:(0,b.zw)(t.pattern.type)},null,8,q)])],2)}var J=(0,i.aZ)({name:"PatternItem",props:{pattern:{type:Object},index:{type:Number},mode:{type:Number},isActive:{type:Boolean}},methods:{change:function(t){this.$emit("change",t)}}});const Q=(0,g.Z)(J,[["render",Y]]);var R=Q,X=(0,i.aZ)({name:"PatternList",props:{patterns:{type:Array},mode:{type:Number},isActive:{type:Boolean}},components:{PatternItem:R},methods:{change:function(t){this.$emit("change",t)}}});const tt=(0,g.Z)(X,[["render",F]]);var et=tt,nt=(0,i.aZ)({name:"AppPatterns",components:{PatternList:et,MessageItem:O},computed:{patterns:function(){return c.Z.getters.patterns},mode:function(){return c.Z.getters.mode},isActive:function(){return c.Z.getters.isActive}},methods:{change(t){c.Z.dispatch("change",t)}},mounted(){c.Z.dispatch("loadPatterns")}});const at=(0,g.Z)(nt,[["render",B]]);var it=at,ot=(0,i.aZ)({name:"PatternsView",components:{AppPatterns:it}});const rt=(0,g.Z)(ot,[["render",V]]);var st=rt;const ct=[{path:"/",name:"patterns-view",component:st},{path:"/custom",name:"custom-view",component:()=>n.e(441).then(n.bind(n,441))},{path:"/manual",name:"manual-view",component:()=>n.e(941).then(n.bind(n,8941))},{path:"/diagnostic",name:"diagnostic-view",component:()=>n.e(264).then(n.bind(n,2264))},{path:"/404",name:"404",component:()=>n.e(567).then(n.bind(n,7567))},{path:"/:catchAll(.*)",redirect:"/404"}],ut=(0,S.p7)({history:(0,S.PO)("/"),routes:ct});var dt=ut;(0,a.ri)(T).use(c.Z).use(dt).mount("#app")},1746:function(t,e,n){n.d(e,{Z:function(){return m}});var a=n(65),i=n(2482);class o{constructor(t){(0,i.Z)(this,"unit",void 0),(0,i.Z)(this,"id",void 0),(0,i.Z)(this,"canVibrate",void 0),(0,i.Z)(this,"isVibrating",void 0),(0,i.Z)(this,"interval",void 0),this.unit=t,this.id=Date.now(),this.canVibrate=!!this.unit.vibrationActuator,this.isVibrating=!1,this.update=this.update.bind(this),this.interval=setInterval(this.update,1)}update(){const t=navigator.getGamepads();this.unit=t[this.unit.index]}async loop(t){this.isVibrating=!0;const e=10;while(!0===this.isVibrating)for(let n=0;n<t.length;n++){if(!0!==this.isVibrating)return;this.vibrate(t[n]),await this.sleep(t[n].startDelay+t[n].duration-e)}}vibrate(t){this.unit.vibrationActuator.playEffect("dual-rumble",t)}reset(){this.isVibrating=!1,this.unit.vibrationActuator.reset()}sleep(t){return new Promise((e=>setTimeout(e,t)))}}var r=o;const s={state:()=>({gamepads:[]}),getters:{gamepads:function(t){return t.gamepads}},mutations:{addGamepad:function(t,e){t.gamepads.push(e)},deleteGamepad:function(t,e){t.gamepads.splice(e,1)}},actions:{addGamepad:function(t,e){const n=e;t.getters.gamepads.length>=1||t.commit("addGamepad",new r(n.gamepad))},deleteGamepad:function(t,e){t.getters.gamepads.forEach(((n,a)=>{n.unit.id===e.gamepad.id&&t.commit("deleteGamepad",a)}))},loop:function(t,e){t.getters.gamepads.forEach((t=>{t.loop(e)}))},vibrate:function(t,e){t.getters.gamepads.forEach((t=>{t.vibrate(e)}))},reset:function(t){t.getters.gamepads.forEach((t=>{t.reset()}))}}};var c=s;const u={state:()=>({patterns:[]}),getters:{patterns:function(t){return t.patterns}},mutations:{setPatterns:function(t,e){t.patterns=e}},actions:{loadPatterns:async function(t){const e="https://wavelovers.ru/assets/patterns.json";try{const n=await fetch(e);if(n.ok){const e=await n.json();t.commit("setPatterns",e)}else console.log("Connect to the Internet for download more patterns...")}catch(n){console.log(n)}}}};var d=u;const p=(0,a.MT)({state:()=>({mode:0,isActive:!1}),getters:{mode:function(t){return t.mode},isActive:function(t){return t.isActive}},mutations:{setMode:function(t,e){t.mode=e},setIsActive:function(t,e){t.isActive=e}},actions:{setMode:function(t,e){t.commit("setMode",e)},setIsActive:function(t,e){t.commit("setIsActive",e)},change:function(t,e){t.getters.mode===e?t.dispatch("setIsActive",!t.getters.isActive):(t.dispatch("setIsActive",!0),t.dispatch("setMode",e)),!0===t.getters.isActive?(t.dispatch("reset"),t.dispatch("loop",t.getters.patterns[t.getters.mode].pattern)):t.dispatch("reset")},startCustom:function(t,e){t.dispatch("setIsActive",!1),t.dispatch("setMode",0),t.dispatch("reset"),t.dispatch("loop",e)}},modules:{MGamepads:c,MPatterns:d}});var m=p}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],o=t[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<r&&(r=o));if(s){t.splice(d--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{264:"5a60390d",441:"be7aaf75",567:"681eca51",941:"6295b5fd"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{264:"10b8ac32",441:"19a8cda3",941:"06b3a622"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="wavelovers:";n.l=function(a,i,o,r){if(t[a])t[a].push(i);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var p=u[d];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==e+o){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[i];var m=function(e,n){s.onerror=s.onload=null,clearTimeout(l);var i=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},l=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],o=i.getAttribute("data-href");if(o===t||o===e)return i}},a=function(a){return new Promise((function(i,o){var r=n.miniCssF(a),s=n.p+r;if(e(r,s))return i();t(a,s,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={264:1,441:1,941:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise((function(n,a){i=t[e]=[n,a]}));a.push(i[2]=o);var r=n.p+n.u(e),s=new Error,c=function(a){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,i[1](s)}};n.l(r,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,r=a[0],s=a[1],c=a[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var d=c(n)}for(e&&e(a);u<r.length;u++)o=r[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},a=self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4421)}));a=n.O(a)})();
//# sourceMappingURL=app.b6f99632.js.map