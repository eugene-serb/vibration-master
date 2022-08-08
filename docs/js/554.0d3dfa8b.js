"use strict";(self["webpackChunkwavelovers"]=self["webpackChunkwavelovers"]||[]).push([[554],{4554:function(a,t,e){e.r(t),e.d(t,{default:function(){return F}});var s=e(3396);function n(a,t,e,n,u,i){const p=(0,s.up)("AppDiagnostic");return(0,s.wg)(),(0,s.j4)(p)}const u={key:0,class:"content-item"};function i(a,t,e,n,i,p){const d=(0,s.up)("DiagnosticItem");return a.gamepads.length>0?((0,s.wg)(),(0,s.iD)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.gamepads,(t=>((0,s.wg)(),(0,s.j4)(d,{key:t.id,gamepad:t,timestamp:a.timestamp},null,8,["gamepad","timestamp"])))),128))])):(0,s.kq)("",!0)}var p=e(1746),d=e(7139);const o={class:"output-gamepad"},l={class:"gamepad-group"};function m(a,t,e,n,u,i){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("h3",null,"#"+(0,d.zw)(a.gamepad.unit.index+1)+". "+(0,d.zw)(a.gamepad.unit.id),1),(0,s._)("div",l,[(0,s._)("div",null,[(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[0].value?"pressed":""])},"A: "+(0,d.zw)(a.gamepad.unit.buttons[0].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[1].value?"pressed":""])},"B: "+(0,d.zw)(a.gamepad.unit.buttons[1].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[2].value?"pressed":""])},"X: "+(0,d.zw)(a.gamepad.unit.buttons[2].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[3].value?"pressed":""])},"Y: "+(0,d.zw)(a.gamepad.unit.buttons[3].value.toFixed(2)),3)]),(0,s._)("div",null,[(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[4].value?"pressed":""])},"LB: "+(0,d.zw)(a.gamepad.unit.buttons[4].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[5].value?"pressed":""])},"RB: "+(0,d.zw)(a.gamepad.unit.buttons[5].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[6].value?"pressed":""])},"LT: "+(0,d.zw)(a.gamepad.unit.buttons[6].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[7].value?"pressed":""])},"RT: "+(0,d.zw)(a.gamepad.unit.buttons[7].value.toFixed(2)),3)]),(0,s._)("div",null,[(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[8].value?"pressed":""])},"Back: "+(0,d.zw)(a.gamepad.unit.buttons[8].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[9].value?"pressed":""])},"Start: "+(0,d.zw)(a.gamepad.unit.buttons[9].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[10].value?"pressed":""])},"Left Stick: "+(0,d.zw)(a.gamepad.unit.buttons[10].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[11].value?"pressed":""])},"Right Stick: "+(0,d.zw)(a.gamepad.unit.buttons[11].value.toFixed(2)),3)]),(0,s._)("div",null,[(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[12].value?"pressed":""])},"Forward: "+(0,d.zw)(a.gamepad.unit.buttons[12].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[13].value?"pressed":""])},"Backward: "+(0,d.zw)(a.gamepad.unit.buttons[13].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[14].value?"pressed":""])},"Left: "+(0,d.zw)(a.gamepad.unit.buttons[14].value.toFixed(2)),3),(0,s._)("span",{class:(0,d.C_)([1===a.gamepad.unit.buttons[15].value?"pressed":""])},"Right: "+(0,d.zw)(a.gamepad.unit.buttons[15].value.toFixed(2)),3)]),(0,s._)("div",null,[(0,s._)("span",null,"Left Stick X: "+(0,d.zw)(a.gamepad.unit.axes[0]?a.gamepad.unit.axes[0].toFixed(2):"missing"),1),(0,s._)("span",null,"Left Stick Y: "+(0,d.zw)(a.gamepad.unit.axes[1]?a.gamepad.unit.axes[1].toFixed(2):"missing"),1),(0,s._)("span",null,"Right Stick X: "+(0,d.zw)(a.gamepad.unit.axes[2]?a.gamepad.unit.axes[2].toFixed(2):"missing"),1),(0,s._)("span",null,"Right Stick Y: "+(0,d.zw)(a.gamepad.unit.axes[3]?a.gamepad.unit.axes[3].toFixed(2):"missing"),1)])]),(0,s._)("span",null,"Vibration Actuator: "+(0,d.zw)(a.gamepad.unit.vibrationActuator?"Available":"missing"),1)])}var g=(0,s.aZ)({name:"DiagnosticItem",props:{gamepad:{type:Object},timestamp:{type:Number}}}),r=e(89);const c=(0,r.Z)(g,[["render",m]]);var v=c,_=(0,s.aZ)({name:"AppDiagnostic",components:{DiagnosticItem:v},data:()=>({timestamp:0,interval:0}),computed:{gamepads:function(){const a=this.timestamp,t=p.Z.getters.gamepads;return t.forEach((t=>{t.interval=a})),t}},methods:{updateTimestamp:function(){this.timestamp=Date.now()}},mounted(){this.interval=setInterval(this.updateTimestamp,1)},unmounted(){clearInterval(this.interval)}});const b=(0,r.Z)(_,[["render",i]]);var w=b,x=(0,s.aZ)({name:"DiagnosticView",components:{AppDiagnostic:w}});const z=(0,r.Z)(x,[["render",n]]);var F=z}}]);
//# sourceMappingURL=554.0d3dfa8b.js.map