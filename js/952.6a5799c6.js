"use strict";(self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[]).push([[952],{7013:function(a,t,e){e.d(t,{Z:function(){return v}});var n=e(3396),s=e(7139);const i={class:"content-item device-list"};function u(a,t,e,u,o,d){const p=(0,n.up)("GamepadItem");return(0,n.wg)(),(0,n.iD)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.gamepads,(a=>((0,n.wg)(),(0,n.j4)(p,{key:a.id,textContent:(0,s.zw)(a.unit.id)},null,8,["textContent"])))),128))])}const o={class:"list-item"};function d(a,t,e,s,i,u){return(0,n.wg)(),(0,n.iD)("div",o)}var p=(0,n.aZ)({name:"GamepadItem"}),l=e(89);const m=(0,l.Z)(p,[["render",d]]);var g=m,r=(0,n.aZ)({name:"GamepadList",props:{gamepads:{type:Array}},components:{GamepadItem:g}});const c=(0,l.Z)(r,[["render",u]]);var v=c},4094:function(a,t,e){e.d(t,{Z:function(){return p}});var n=e(3396);const s={class:"content-item message"};function i(a,t,e,i,u,o){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("span",null,[(0,n.WI)(a.$slots,"default")])])}var u=(0,n.aZ)({name:"MessageItem"}),o=e(89);const d=(0,o.Z)(u,[["render",i]]);var p=d},1709:function(a,t,e){e.d(t,{Z:function(){return p}});var n=e(3396);const s={class:"content-item navigation-list"};function i(a,t,e,i,u,o){const d=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(d,{to:"/",class:"navigation-list__item"},{default:(0,n.w5)((()=>[(0,n.Uk)("Patterns")])),_:1}),(0,n.Wm)(d,{to:"/custom",class:"navigation-list__item"},{default:(0,n.w5)((()=>[(0,n.Uk)("Custom")])),_:1}),(0,n.Wm)(d,{to:"/manual",class:"navigation-list__item"},{default:(0,n.w5)((()=>[(0,n.Uk)("Manual")])),_:1}),(0,n.Wm)(d,{to:"/diagnostic",class:"navigation-list__item"},{default:(0,n.w5)((()=>[(0,n.Uk)("Diagnostic")])),_:1})])}var u=(0,n.aZ)({name:"NavigationList"}),o=e(89);const d=(0,o.Z)(u,[["render",i]]);var p=d},4003:function(a,t,e){e.d(t,{Z:function(){return o}});var n=e(3396),s=e(1746),i=(0,n.aZ)({name:"ComputedGamepads",data:()=>({timestamp:0,interval:0}),computed:{gamepads:function(){const a=this.timestamp,t=s.Z.getters.gamepads;return t.forEach((t=>{t.interval=a})),t}},methods:{updateComputed:function(){this.timestamp=Date.now()}},mounted(){this.interval=setInterval(this.updateComputed,1)},unmounted(){clearInterval(this.interval)}});const u=i;var o=u},1952:function(a,t,e){e.r(t),e.d(t,{default:function(){return F}});var n=e(3396);const s=(0,n._)("h1",{class:"visually-hidden"},"Wavelovers — Diagnostic",-1);function i(a,t,e,i,u,o){const d=(0,n.up)("AppDiagnostic");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n.Wm)(d)],64)}const u={key:0,class:"content-item"};function o(a,t,e,s,i,o){const d=(0,n.up)("NavigationList"),p=(0,n.up)("DiagnosticItem"),l=(0,n.up)("GamepadList"),m=(0,n.up)("MessageItem");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(d),a.gamepads.length>0?((0,n.wg)(),(0,n.iD)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.gamepads,(t=>((0,n.wg)(),(0,n.j4)(p,{key:t.id,gamepad:t,timestamp:a.timestamp},null,8,["gamepad","timestamp"])))),128))])):(0,n.kq)("",!0),a.gamepads.length>0?((0,n.wg)(),(0,n.j4)(l,{key:1,gamepads:a.gamepads},null,8,["gamepads"])):((0,n.wg)(),(0,n.j4)(m,{key:2},{default:(0,n.w5)((()=>[(0,n.Uk)("Press any gamepad button or connect a new gamepad to vibrate.")])),_:1}))],64)}var d=e(1709),p=e(7013),l=e(4094),m=e(7139);const g={class:"output-gamepad"},r={class:"gamepad-group"};function c(a,t,e,s,i,u){return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("h3",null,"#"+(0,m.zw)(a.gamepad.unit.index+1)+". "+(0,m.zw)(a.gamepad.unit.id),1),(0,n._)("div",r,[(0,n._)("div",null,[(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[0].value?"pressed":""])}," A: "+(0,m.zw)(a.gamepad.unit.buttons[0].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[1].value?"pressed":""])}," B: "+(0,m.zw)(a.gamepad.unit.buttons[1].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[2].value?"pressed":""])}," X: "+(0,m.zw)(a.gamepad.unit.buttons[2].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[3].value?"pressed":""])}," Y: "+(0,m.zw)(a.gamepad.unit.buttons[3].value.toFixed(2)),3)]),(0,n._)("div",null,[(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[4].value?"pressed":""])}," LB: "+(0,m.zw)(a.gamepad.unit.buttons[4].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[5].value?"pressed":""])}," RB: "+(0,m.zw)(a.gamepad.unit.buttons[5].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[6].value?"pressed":""])}," LT: "+(0,m.zw)(a.gamepad.unit.buttons[6].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[7].value?"pressed":""])}," RT: "+(0,m.zw)(a.gamepad.unit.buttons[7].value.toFixed(2)),3)]),(0,n._)("div",null,[(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[8].value?"pressed":""])}," Back: "+(0,m.zw)(a.gamepad.unit.buttons[8].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[9].value?"pressed":""])}," Start: "+(0,m.zw)(a.gamepad.unit.buttons[9].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[10].value?"pressed":""])}," Left Stick: "+(0,m.zw)(a.gamepad.unit.buttons[10].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[11].value?"pressed":""])}," Right Stick: "+(0,m.zw)(a.gamepad.unit.buttons[11].value.toFixed(2)),3)]),(0,n._)("div",null,[(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[12].value?"pressed":""])}," Forward: "+(0,m.zw)(a.gamepad.unit.buttons[12].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[13].value?"pressed":""])}," Backward: "+(0,m.zw)(a.gamepad.unit.buttons[13].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[14].value?"pressed":""])}," Left: "+(0,m.zw)(a.gamepad.unit.buttons[14].value.toFixed(2)),3),(0,n._)("span",{class:(0,m.C_)([1===a.gamepad.unit.buttons[15].value?"pressed":""])}," Right: "+(0,m.zw)(a.gamepad.unit.buttons[15].value.toFixed(2)),3)]),(0,n._)("div",null,[(0,n._)("span",null," Left Stick X: "+(0,m.zw)(a.gamepad.unit.axes[0]?a.gamepad.unit.axes[0].toFixed(2):"missing"),1),(0,n._)("span",null," Left Stick Y: "+(0,m.zw)(a.gamepad.unit.axes[1]?a.gamepad.unit.axes[1].toFixed(2):"missing"),1),(0,n._)("span",null," Right Stick X: "+(0,m.zw)(a.gamepad.unit.axes[2]?a.gamepad.unit.axes[2].toFixed(2):"missing"),1),(0,n._)("span",null," Right Stick Y: "+(0,m.zw)(a.gamepad.unit.axes[3]?a.gamepad.unit.axes[3].toFixed(2):"missing"),1)])]),(0,n._)("span",null,"Vibration Actuator: "+(0,m.zw)(a.gamepad.unit.vibrationActuator?"Available":"missing"),1)])}var v=(0,n.aZ)({name:"DiagnosticItem",props:{gamepad:{type:Object},timestamp:{type:Number}}}),_=e(89);const w=(0,_.Z)(v,[["render",c]]);var b=w,f=e(4003),x=(0,n.aZ)({name:"AppDiagnostic",mixins:[f.Z],components:{DiagnosticItem:b,NavigationList:d.Z,GamepadList:p.Z,MessageItem:l.Z}});const k=(0,_.Z)(x,[["render",o]]);var z=k,C=(0,n.aZ)({name:"DiagnosticView",components:{AppDiagnostic:z}});const Z=(0,_.Z)(C,[["render",i]]);var F=Z}}]);
//# sourceMappingURL=952.6a5799c6.js.map