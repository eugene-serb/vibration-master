(function(){"use strict";var t={6665:function(t,e,n){var a=n(9242),i=n(3396);function s(t,e,n,a,s,r){const o=(0,i.up)("WaveloversApp");return(0,i.wg)(),(0,i.j4)(o)}const r={class:"wavelovers"},o=(0,i.Uk)("Loading..."),c=(0,i.Uk)("Press any gamepad button or connect a new gamepad to vibrate.");function d(t,e,n,a,s,d){const p=(0,i.up)("PatternList"),u=(0,i.up)("MessageItem"),m=(0,i.up)("GamepadList");return(0,i.wg)(),(0,i.iD)("div",r,[t.patterns.length>0?((0,i.wg)(),(0,i.j4)(p,{key:0,patterns:t.patterns,mode:t.mode,isActive:t.isActive,onChange:t.change},null,8,["patterns","mode","isActive","onChange"])):((0,i.wg)(),(0,i.j4)(u,{key:1},{default:(0,i.w5)((()=>[o])),_:1})),t.gamepads.length>0?((0,i.wg)(),(0,i.j4)(m,{key:2,gamepads:t.gamepads},null,8,["gamepads"])):((0,i.wg)(),(0,i.j4)(u,{key:3},{default:(0,i.w5)((()=>[c])),_:1}))])}const p={class:"pattern-list"};function u(t,e,n,a,s,r){const o=(0,i.up)("PatternItem");return(0,i.wg)(),(0,i.iD)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.patterns,((e,n)=>((0,i.wg)(),(0,i.j4)(o,{key:e.name,pattern:e,index:n,mode:t.mode,isActive:t.isActive,onChange:t.change},null,8,["pattern","index","mode","isActive","onChange"])))),128))])}var m=n(7139);const v=["textContent"],g=["textContent"];function l(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",{onClick:e[0]||(e[0]=e=>t.change(t.index)),class:(0,m.C_)(["pattern-item",t.index===t.mode&&!0===t.isActive?"pattern-item_selected":""])},[(0,i._)("span",{class:"pattern-item__icon",textContent:(0,m.zw)(t.pattern.icon)},null,8,v),(0,i._)("span",{class:"pattern-item__name",textContent:(0,m.zw)(t.pattern.name)},null,8,g)],2)}var h=(0,i.aZ)({name:"PatternItem",props:{pattern:{type:Object},index:{type:Number},mode:{type:Number},isActive:{type:Boolean}},methods:{change:function(t){this.$emit("change",t)}}}),f=n(89);const w=(0,f.Z)(h,[["render",l]]);var b=w,A=(0,i.aZ)({name:"PatternList",props:{patterns:{type:Array},mode:{type:Number},isActive:{type:Boolean}},components:{PatternItem:b},methods:{change:function(t){this.$emit("change",t)}}});const y=(0,f.Z)(A,[["render",u]]);var Z=y;const G={class:"device-list"};function j(t,e,n,a,s,r){const o=(0,i.up)("GamepadItem");return(0,i.wg)(),(0,i.iD)("div",G,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.gamepads,(t=>((0,i.wg)(),(0,i.j4)(o,{key:t.id,textContent:(0,m.zw)(t.unit.id)},null,8,["textContent"])))),128))])}const x={class:"list-item"};function I(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",x)}var k=(0,i.aZ)({name:"GamepadItem"});const C=(0,f.Z)(k,[["render",I]]);var L=C,P=(0,i.aZ)({name:"GamepadList",props:{gamepads:{type:Array}},components:{GamepadItem:L}});const E=(0,f.Z)(P,[["render",j]]);var _=E;const O={class:"message"};function D(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("span",null,[(0,i.WI)(t.$slots,"default")])])}var M=(0,i.aZ)({name:"MessageItem"});const V=(0,f.Z)(M,[["render",D]]);var T=V,W=n(65),z=n(2482);class N{constructor(t){(0,z.Z)(this,"id",void 0),(0,z.Z)(this,"canVibrate",void 0),(0,z.Z)(this,"isVibrating",void 0),(0,z.Z)(this,"unit",void 0),(0,z.Z)(this,"pattern",void 0),this.unit=t,this.id=Date.now(),this.canVibrate=!!this.unit.vibrationActuator,this.isVibrating=!1,this.pattern=[]}update(){const t=navigator.getGamepads();this.unit=t[this.unit.index]}reset(){this.isVibrating=!1,this.unit.vibrationActuator.reset()}async vibrate(t){this.isVibrating=!0,this.pattern=t;while(!0===this.isVibrating)for(let t=0;t<this.pattern.length;t++){if(!0!==this.isVibrating)return;this.unit.vibrationActuator.playEffect("dual-rumble",this.pattern[t]),await this.sleep(this.pattern[t].startDelay+this.pattern[t].duration)}}sleep(t){return new Promise((e=>setTimeout(e,t)))}}var $=N,B=(0,W.MT)({state:{gamepads:[],patterns:[],mode:0,isActive:!1},getters:{gamepads:function(t){return t.gamepads},patterns:function(t){return t.patterns},mode:function(t){return t.mode},isActive:function(t){return t.isActive}},mutations:{setPatterns:function(t,e){t.patterns=e},setMode:function(t,e){t.mode=e},setIsActive:function(t,e){t.isActive=e},addGamepad:function(t,e){t.gamepads.push(e)},deleteGamepad:function(t,e){t.gamepads.splice(e,1)}},actions:{loadPatterns:async function(t){const e="https://wavelovers.ru/assets/patterns.json";try{const n=await fetch(e);if(n.ok){const e=await n.json();t.commit("setPatterns",e)}else console.log("Connect to the Internet for download more patterns...")}catch(n){console.log(n)}},setMode:function(t,e){t.commit("setMode",e)},setIsActive:function(t,e){t.commit("setIsActive",e)},addGamepad:function(t,e){const n=e;t.getters.gamepads.length>=1||t.commit("addGamepad",new $(n.gamepad))},deleteGamepad:function(t,e){t.getters.gamepads.forEach(((n,a)=>{n.unit.id===e.gamepad.id&&t.commit("deleteGamepad",a)}))},vibrate:function(t){t.getters.gamepads.forEach((e=>{e.vibrate(t.getters.patterns[t.getters.mode].pattern)}))},reset:function(t){t.getters.gamepads.forEach((t=>{t.reset()}))},change:function(t,e){t.getters.mode===e?t.dispatch("setIsActive",!t.getters.isActive):(t.dispatch("setIsActive",!0),t.dispatch("setMode",e)),!0===t.getters.isActive?(t.dispatch("reset"),t.dispatch("vibrate")):t.dispatch("reset")}},modules:{}}),H=(0,i.aZ)({name:"WaveloversApp",components:{PatternList:Z,GamepadList:_,MessageItem:T},computed:{gamepads:function(){return B.getters.gamepads},patterns:function(){return B.getters.patterns},mode:function(){return B.getters.mode},isActive:function(){return B.getters.isActive}},methods:{addEventListeners(){window.addEventListener("gamepadconnected",(t=>B.dispatch("addGamepad",t))),window.addEventListener("gamepaddisconnected",(t=>B.dispatch("deleteGamepad",t)))},removeEventListeners(){window.removeEventListener("gamepadconnected",(t=>B.dispatch("addGamepad",t))),window.removeEventListener("gamepaddisconnected",(t=>B.dispatch("deleteGamepad",t)))},change(t){B.dispatch("change",t)}},mounted(){B.dispatch("loadPatterns"),this.addEventListeners()},unmounted(){this.removeEventListeners()}});const K=(0,f.Z)(H,[["render",d]]);var U=K,Y=(0,i.aZ)({name:"App",components:{WaveloversApp:U}});const F=(0,f.Z)(Y,[["render",s]]);var q=F;(0,a.ri)(q).use(B).mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var r=1/0;for(p=0;p<t.length;p++){a=t[p][0],i=t[p][1],s=t[p][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,s<r&&(r=s));if(o){t.splice(p--,1);var d=i();void 0!==d&&(e=d)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,r=a[0],o=a[1],c=a[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var p=c(n)}for(e&&e(a);d<r.length;d++)s=r[d],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(p)},a=self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6665)}));a=n.O(a)})();
//# sourceMappingURL=app.b6a47de1.js.map