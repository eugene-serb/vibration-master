(function(){"use strict";var e={4862:function(e,t,a){var n=a(9242),o=a(3396);const r={class:"page container"},i={class:"wavelovers"};function s(e,t,a,n,s,c){const d=(0,o.up)("HeaderItem"),u=(0,o.up)("router-view"),m=(0,o.up)("FooterItem");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(d),(0,o._)("main",r,[(0,o._)("div",i,[(0,o.Wm)(u)])]),(0,o.Wm)(m)],64)}var c=a(1746);const d={class:"header"},u={class:"header-wrapper container"},m=(0,o._)("div",{class:"logo-wrapper"},[(0,o._)("span",{class:"logo-wrapper__logo",translate:"no"},"Wavelovers")],-1),l={class:"menu-wrapper"},v={class:"navigation"},p={class:"navigation__item"},g=(0,o.Uk)("Home"),f={class:"navigation__item"},h=(0,o.Uk)("FAQ"),b={class:"navigation__item"},w=(0,o.Uk)("About"),y={class:"navigation__item"},W=(0,o.Uk)("Donate");function k(e,t,a,n,r,i){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",d,[(0,o._)("div",u,[m,(0,o._)("nav",l,[(0,o._)("ul",v,[(0,o._)("li",p,[(0,o.Wm)(s,{to:"/",class:"navigation-item"},{default:(0,o.w5)((()=>[g])),_:1})]),(0,o._)("li",f,[(0,o.Wm)(s,{to:"/faq",class:"navigation-item"},{default:(0,o.w5)((()=>[h])),_:1})]),(0,o._)("li",b,[(0,o.Wm)(s,{to:"/about",class:"navigation-item"},{default:(0,o.w5)((()=>[w])),_:1})]),(0,o._)("li",y,[(0,o.Wm)(s,{to:"/donate",class:"navigation-item"},{default:(0,o.w5)((()=>[W])),_:1})])])])])])}var _=(0,o.aZ)({name:"HeaderItem"}),V=a(89);const M=(0,V.Z)(_,[["render",k]]);var A=M;const G={class:"footer"},T=(0,o.uE)('<div class="footer-wrapper container"><div class="annotation"><span class="annotation__text">© 2022 Wavelovers. Content licensed under </span><a href="https://wavelovers.ru/LICENSE.md" target="_blank">GNU General Public License v3.0</a><br><span class="annotation__text">This site is open source. </span><a href="https://github.com/eugene-serb/wavelovers/" target="_blank">Improve this page.</a></div><div class="annotation created-by"><span class="annotation__text">Created by</span><a href="https://eugene-serb.github.io/" target="_blank" translate="no">Eugene Serb</a></div></div>',1),P=[T];function Z(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("footer",G,P)}var C=(0,o.aZ)({name:"FooterItem"});const E=(0,V.Z)(C,[["render",Z]]);var L=E,x=(0,o.aZ)({name:"App",components:{HeaderItem:A,FooterItem:L},methods:{addEventListeners(){window.addEventListener("gamepadconnected",(e=>c.Z.dispatch("addGamepad",e))),window.addEventListener("gamepaddisconnected",(e=>c.Z.dispatch("deleteGamepad",e)))},removeEventListeners(){window.removeEventListener("gamepadconnected",(e=>c.Z.dispatch("addGamepad",e))),window.removeEventListener("gamepaddisconnected",(e=>c.Z.dispatch("deleteGamepad",e)))}},mounted(){this.addEventListeners()},unmounted(){this.removeEventListeners()}});const D=(0,V.Z)(x,[["render",s]]);var I=D,j=a(2483);const U=(0,o._)("h1",{class:"visually-hidden"},"Wavelovers",-1);function S(e,t,a,n,r,i){const s=(0,o.up)("AppPatterns");return(0,o.wg)(),(0,o.iD)(o.HY,null,[U,(0,o.Wm)(s)],64)}const O={class:"app-patterns"},N=(0,o.Uk)("Loading..."),q=(0,o.Uk)("Press any gamepad button or connect a new gamepad to vibrate.");function F(e,t,a,n,r,i){const s=(0,o.up)("NavigationList"),c=(0,o.up)("PatternList"),d=(0,o.up)("MessageItem"),u=(0,o.up)("GamepadList");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o._)("div",O,[e.patterns.length>0?((0,o.wg)(),(0,o.j4)(c,{key:0,patterns:e.patterns,mode:e.mode,isActive:e.isActive,onChange:e.change},null,8,["patterns","mode","isActive","onChange"])):((0,o.wg)(),(0,o.j4)(d,{key:1},{default:(0,o.w5)((()=>[N])),_:1}))]),e.gamepads.length>0?((0,o.wg)(),(0,o.j4)(u,{key:0,gamepads:e.gamepads},null,8,["gamepads"])):((0,o.wg)(),(0,o.j4)(d,{key:1},{default:(0,o.w5)((()=>[q])),_:1}))],64)}var z=a(4509),H=a(1850),R=a(2347);const B={class:"content-item pattern-list"};function Q(e,t,a,n,r,i){const s=(0,o.up)("PatternItem");return(0,o.wg)(),(0,o.iD)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.patterns,((t,a)=>((0,o.wg)(),(0,o.j4)(s,{key:t.name,pattern:t,index:a,mode:e.mode,isActive:e.isActive,onChange:e.change},null,8,["pattern","index","mode","isActive","onChange"])))),128))])}var Y=a(7139);const K=["textContent"],$={class:"pattern-item__info-container"},J=["textContent"],X=["textContent"];function ee(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",{onClick:t[0]||(t[0]=t=>e.change(e.index)),class:(0,Y.C_)(["pattern-item",e.index===e.mode&&!0===e.isActive?"pattern-item_selected":""])},[(0,o._)("span",{class:"pattern-item__icon",textContent:(0,Y.zw)(e.pattern.icon)},null,8,K),(0,o._)("div",$,[(0,o._)("span",{class:"pattern-item__name",textContent:(0,Y.zw)(e.pattern.name)},null,8,J),(0,o._)("span",{class:"pattern-item__type",textContent:(0,Y.zw)(e.pattern.type)},null,8,X)])],2)}var te=(0,o.aZ)({name:"PatternItem",props:{pattern:{type:Object},index:{type:Number},mode:{type:Number},isActive:{type:Boolean}},methods:{change:function(e){this.$emit("change",e)}}});const ae=(0,V.Z)(te,[["render",ee]]);var ne=ae,oe=(0,o.aZ)({name:"PatternList",props:{patterns:{type:Array},mode:{type:Number},isActive:{type:Boolean}},components:{PatternItem:ne},methods:{change:function(e){this.$emit("change",e)}}});const re=(0,V.Z)(oe,[["render",Q]]);var ie=re,se=(0,o.aZ)({name:"AppPatterns",components:{PatternList:ie,NavigationList:z.Z,GamepadList:H.Z,MessageItem:R.Z},computed:{gamepads:function(){return c.Z.getters.gamepads},patterns:function(){return c.Z.getters.patterns},mode:function(){return c.Z.getters.mode},isActive:function(){return c.Z.getters.isActive}},methods:{change(e){c.Z.dispatch("change",e)}},mounted(){c.Z.dispatch("loadPatterns")}});const ce=(0,V.Z)(se,[["render",F]]);var de=ce,ue=(0,o.aZ)({name:"PatternsView",components:{AppPatterns:de}});const me=(0,V.Z)(ue,[["render",S]]);var le=me;function ve(e,t,a){switch(e.fullPath){case"/?custom":ke.push("/custom");break;case"/?manual":ke.push("/manual");break;case"/?diagnostic":ke.push("/diagnostic");break;case"/?faq":ke.push("/faq");break;case"/?about":ke.push("/about");break;case"/?donate":ke.push("/donate");break}return a()}const pe={update:ve};var ge=pe;function fe(e,t){e.map((e=>{const a=document.createElement(t);return Object.keys(e).forEach((t=>{a.setAttribute(t,e[t])})),a.setAttribute("data-vue-router-controlled",""),a})).forEach((e=>document.head.appendChild(e)))}function he(e,t,a){const n=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags&&e.meta.linkTags));if(n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>{e.parentNode&&e.parentNode.removeChild(e)})),!o)return a();const r=o.meta.linkTags,i=o.meta.metaTags;return fe(r,"link"),fe(i,"meta"),a()}const be={update:he};var we=be;const ye=[{path:"/",name:"patterns-view",component:le,meta:{title:"Wavelovers",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона"},{name:"description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:title",content:"Wavelovers"},{name:"og:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:url",content:"https://wavelovers.ru/"},{name:"twitter:title",content:"Wavelovers"},{name:"twitter:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/"}]}},{path:"/custom",name:"custom-view",component:()=>a.e(991).then(a.bind(a,4991)),meta:{title:"Wavelovers – Custom",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона"},{name:"description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:title",content:"Wavelovers – Custom"},{name:"og:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:url",content:"https://wavelovers.ru/custom"},{name:"twitter:title",content:"Wavelovers – Custom"},{name:"twitter:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/custom"}]}},{path:"/manual",name:"manual-view",component:()=>a.e(741).then(a.bind(a,741)),meta:{title:"Wavelovers – Manual",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона"},{name:"description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:title",content:"Wavelovers – Manual"},{name:"og:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:url",content:"https://wavelovers.ru/manual"},{name:"twitter:title",content:"Wavelovers – Manual"},{name:"twitter:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/manual"}]}},{path:"/diagnostic",name:"diagnostic-view",component:()=>a.e(835).then(a.bind(a,9835)),meta:{title:"Wavelovers – Diagnostic",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона"},{name:"description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:title",content:"Wavelovers – Diagnostic"},{name:"og:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."},{name:"og:url",content:"https://wavelovers.ru/diagnostic"},{name:"twitter:title",content:"Wavelovers – Diagnostic"},{name:"twitter:description",content:"Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/diagnostic"}]}},{path:"/faq",name:"faq-view",component:()=>a.e(479).then(a.bind(a,1479)),meta:{title:"Wavelovers – FAQ",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, FAQ, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, часто задаваемые вопросы"},{name:"description",content:"Wavelovers. Frequently asked questions page."},{name:"og:title",content:"Wavelovers – FAQ"},{name:"og:description",content:"Wavelovers. Frequently asked questions page."},{name:"og:url",content:"https://wavelovers.ru/faq"},{name:"twitter:title",content:"Wavelovers – FAQ"},{name:"twitter:description",content:"Wavelovers. Frequently asked questions page."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/faq"}]}},{path:"/about",name:"about-view",component:()=>a.e(34).then(a.bind(a,2034)),meta:{title:"Wavelovers – About",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, advertise, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, реклама"},{name:"description",content:"Wavelovers. Page with information about the project and data on donations."},{name:"og:title",content:"Wavelovers – About"},{name:"og:description",content:"Wavelovers. Page with information about the project and data on donations."},{name:"og:url",content:"https://wavelovers.ru/about"},{name:"twitter:title",content:"Wavelovers – About"},{name:"twitter:description",content:"Wavelovers. Page with information about the project and data on donations."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/about"}]}},{path:"/donate",name:"donate-view",component:()=>a.e(442).then(a.bind(a,8442)),meta:{title:"Wavelovers – Donate",metaTags:[{name:"keywords",content:"Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, Donate, Support, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, задонатить, пожертвовать, помочь, поблагодарить"},{name:"description",content:"Wavelovers. Donate to the author."},{name:"og:title",content:"Wavelovers – Donate"},{name:"og:description",content:"Wavelovers. Donate to the author."},{name:"og:url",content:"https://wavelovers.ru/donate"},{name:"twitter:title",content:"Wavelovers – Donate"},{name:"twitter:description",content:"Wavelovers. Donate to the author."}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/donate"}]}},{path:"/404",name:"404",component:()=>a.e(284).then(a.bind(a,6284)),meta:{title:"Wavelovers – Page not found",metaTags:[{name:"og:title",content:"Wavelovers – Page not found"},{name:"og:url",content:"https://wavelovers.ru/404"}],linkTags:[{rel:"canonical",href:"https://wavelovers.ru/404"}]}},{path:"/:catchAll(.*)*",redirect:"/404"}],We=(0,j.p7)({history:(0,j.PO)("/"),routes:ye});We.beforeEach(ge.update),We.beforeEach(we.update);var ke=We;(0,n.ri)(I).use(c.Z).use(ke).mount("#app")},1746:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(65),o=a(2482);class r{constructor(e){(0,o.Z)(this,"unit",void 0),(0,o.Z)(this,"id",void 0),(0,o.Z)(this,"canVibrate",void 0),(0,o.Z)(this,"isVibrating",void 0),(0,o.Z)(this,"interval",void 0),this.unit=e,this.id=Date.now(),this.canVibrate=!!this.unit.vibrationActuator,this.isVibrating=!1,this.update=this.update.bind(this),this.interval=setInterval(this.update,1)}update(){const e=navigator.getGamepads();this.unit=e[this.unit.index]}async loop(e){this.isVibrating=!0;const t=10;while(!0===this.isVibrating)for(let a=0;a<e.length;a++){if(!0!==this.isVibrating)return;this.vibrate(e[a]),await this.sleep(e[a].startDelay+e[a].duration-t)}}vibrate(e){this.unit.vibrationActuator.playEffect("dual-rumble",e)}reset(){this.isVibrating=!1,this.unit.vibrationActuator.reset()}sleep(e){return new Promise((t=>setTimeout(t,e)))}}var i=r;const s={state:()=>({gamepads:[]}),getters:{gamepads:function(e){return e.gamepads}},mutations:{addGamepad:function(e,t){e.gamepads.push(t)},deleteGamepad:function(e,t){e.gamepads.splice(t,1)}},actions:{addGamepad:function(e,t){const a=t;e.getters.gamepads.length>=1||e.commit("addGamepad",new i(a.gamepad))},deleteGamepad:function(e,t){e.getters.gamepads.forEach(((a,n)=>{a.unit.id===t.gamepad.id&&e.commit("deleteGamepad",n)}))},loop:function(e,t){e.getters.gamepads.forEach((e=>{e.loop(t)}))},vibrate:function(e,t){e.getters.gamepads.forEach((e=>{e.vibrate(t)}))},reset:function(e){e.getters.gamepads.forEach((e=>{e.reset()}))}}};var c=s;const d={state:()=>({patterns:[]}),getters:{patterns:function(e){return e.patterns}},mutations:{setPatterns:function(e,t){e.patterns=t}},actions:{loadPatterns:async function(e){const t="https://wavelovers.ru/assets/patterns.json";try{const a=await fetch(t);if(a.ok){const t=await a.json();e.commit("setPatterns",t)}else console.log("Connect to the Internet for download more patterns...")}catch(a){console.log(a)}}}};var u=d;const m=(0,n.MT)({state:()=>({mode:0,isActive:!1}),getters:{mode:function(e){return e.mode},isActive:function(e){return e.isActive}},mutations:{setMode:function(e,t){e.mode=t},setIsActive:function(e,t){e.isActive=t}},actions:{setMode:function(e,t){e.commit("setMode",t)},setIsActive:function(e,t){e.commit("setIsActive",t)},change:function(e,t){e.getters.mode===t?e.dispatch("setIsActive",!e.getters.isActive):(e.dispatch("setIsActive",!0),e.dispatch("setMode",t)),!0===e.getters.isActive?(e.dispatch("reset"),e.dispatch("loop",e.getters.patterns[e.getters.mode].pattern)):e.dispatch("reset")},startCustom:function(e,t){e.dispatch("setIsActive",!1),e.dispatch("setMode",0),e.dispatch("reset"),e.dispatch("loop",t)}},modules:{MGamepads:c,MPatterns:u}});var l=m},1850:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3396),o=a(7139);const r={class:"content-item device-list"};function i(e,t,a,i,s,c){const d=(0,n.up)("GamepadItem");return(0,n.wg)(),(0,n.iD)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.gamepads,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.id,textContent:(0,o.zw)(e.unit.id)},null,8,["textContent"])))),128))])}const s={class:"list-item"};function c(e,t,a,o,r,i){return(0,n.wg)(),(0,n.iD)("div",s)}var d=(0,n.aZ)({name:"GamepadItem"}),u=a(89);const m=(0,u.Z)(d,[["render",c]]);var l=m,v=(0,n.aZ)({name:"GamepadList",props:{gamepads:{type:Array}},components:{GamepadItem:l}});const p=(0,u.Z)(v,[["render",i]]);var g=p},2347:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3396);const o={class:"content-item message"};function r(e,t,a,r,i,s){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("span",null,[(0,n.WI)(e.$slots,"default")])])}var i=(0,n.aZ)({name:"MessageItem"}),s=a(89);const c=(0,s.Z)(i,[["render",r]]);var d=c},4509:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(3396);const o={class:"content-item navigation-list"},r=(0,n.Uk)("Patterns"),i=(0,n.Uk)("Custom"),s=(0,n.Uk)("Manual"),c=(0,n.Uk)("Diagnostic");function d(e,t,a,d,u,m){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)(l,{to:"/",class:"navigation-list__item"},{default:(0,n.w5)((()=>[r])),_:1}),(0,n.Wm)(l,{to:"/custom",class:"navigation-list__item"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(l,{to:"/manual",class:"navigation-list__item"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(l,{to:"/diagnostic",class:"navigation-list__item"},{default:(0,n.w5)((()=>[c])),_:1})])}var u=(0,n.aZ)({name:"NavigationList"}),m=a(89);const l=(0,m.Z)(u,[["render",d]]);var v=l}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{34:"7ff8bfa5",284:"e47dcb1b",442:"d79586f7",479:"b4912f46",741:"bb44ffd2",835:"17b1ecd3",991:"04357823"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+e+"."+{741:"06b3a622",835:"10b8ac32",991:"19a8cda3"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="wavelovers:";a.l=function(n,o,r,i){if(e[n])e[n].push(o);else{var s,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var m=d[u];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==t+r){s=m;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[o];var l=function(t,a){s.onerror=s.onload=null,clearTimeout(v);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(a)})),t)return t(a)},v=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e=function(e,t,a,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)a();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],r=o.getAttribute("data-href");if(r===e||r===t)return o}},n=function(n){return new Promise((function(o,r){var i=a.miniCssF(n),s=a.p+i;if(t(i,s))return o();e(n,s,o,r)}))},o={143:0};a.f.miniCss=function(e,t){var a={741:1,835:1,991:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var i=a.p+a.u(t),s=new Error,c=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};a.l(i,c,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],s=n[1],c=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(c)var u=c(a)}for(t&&t(n);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4862)}));n=a.O(n)})();
//# sourceMappingURL=app.6006a533.js.map