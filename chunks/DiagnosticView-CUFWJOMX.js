import{d as x,l as t,a as l,c as i,h as e,t as s,n as u,u as G,s as M,b as o,F as $,m as N,e as Y,g as P}from"./index-Cvk4L2kJ.js";/* empty css                                                */const U={class:"output-gamepad"},z={class:"gamepad-group"},O="Available",m="Missing",n="pressed",E=x({__name:"MDiagnosticPanel",props:{gamepad:{default:null},timestamp:{}},setup(v){const a=v,d=t(()=>a.gamepad?String(a.gamepad.index+1):"1"),c=t(()=>a.gamepad?a.gamepad.id:"Gamepad is missing"),r=t(()=>a.gamepad&&a.gamepad.buttons[0].value?a.gamepad.buttons[0].value:0),b=t(()=>a.gamepad&&a.gamepad.buttons[1].value?a.gamepad.buttons[1].value:0),p=t(()=>a.gamepad&&a.gamepad.buttons[2].value?a.gamepad.buttons[2].value:0),_=t(()=>a.gamepad&&a.gamepad.buttons[3].value?a.gamepad.buttons[3].value:0),B=t(()=>a.gamepad&&a.gamepad.buttons[4].value?a.gamepad.buttons[4].value:0),S=t(()=>a.gamepad&&a.gamepad.buttons[5].value?a.gamepad.buttons[5].value:0),F=t(()=>a.gamepad&&a.gamepad.buttons[6].value?a.gamepad.buttons[6].value:0),f=t(()=>a.gamepad&&a.gamepad.buttons[7].value?a.gamepad.buttons[7].value:0),k=t(()=>a.gamepad&&a.gamepad.buttons[8].value?a.gamepad.buttons[8].value:0),h=t(()=>a.gamepad&&a.gamepad.buttons[9].value?a.gamepad.buttons[9].value:0),A=t(()=>a.gamepad&&a.gamepad.buttons[10].value?a.gamepad.buttons[10].value:0),y=t(()=>a.gamepad&&a.gamepad.buttons[11].value?a.gamepad.buttons[11].value:0),L=t(()=>a.gamepad&&a.gamepad.buttons[12].value?a.gamepad.buttons[12].value:0),R=t(()=>a.gamepad&&a.gamepad.buttons[13].value?a.gamepad.buttons[13].value:0),T=t(()=>a.gamepad&&a.gamepad.buttons[14].value?a.gamepad.buttons[14].value:0),D=t(()=>a.gamepad&&a.gamepad.buttons[15].value?a.gamepad.buttons[15].value:0),w=t(()=>a.gamepad&&a.gamepad.axes[0]?a.gamepad.axes[0]:0),I=t(()=>a.gamepad&&a.gamepad.axes[1]?a.gamepad.axes[1]:0),V=t(()=>a.gamepad&&a.gamepad.axes[2]?a.gamepad.axes[2]:0),X=t(()=>a.gamepad&&a.gamepad.axes[3]?a.gamepad.axes[3]:0),C=t(()=>a.gamepad&&a.gamepad.vibrationActuator?O:m);return(g,H)=>(l(),i("div",U,[e("h3",null,"#"+s(d.value)+". "+s(c.value),1),e("div",z,[e("div",null,[e("span",{class:u([r.value?n:""])},"A: "+s(r.value.toFixed(2)),3),e("span",{class:u([b.value?n:""])},"B: "+s(b.value.toFixed(2)),3),e("span",{class:u([p.value?n:""])},"X: "+s(p.value.toFixed(2)),3),e("span",{class:u([_.value?n:""])},"Y: "+s(_.value.toFixed(2)),3)]),e("div",null,[e("span",{class:u([B.value?n:""])},"LB: "+s(B.value.toFixed(2)),3),e("span",{class:u([S.value?n:""])},"RB: "+s(S.value.toFixed(2)),3),e("span",{class:u([F.value?n:""])},"LT: "+s(F.value.toFixed(2)),3),e("span",{class:u([f.value?n:""])},"RT: "+s(f.value.toFixed(2)),3)]),e("div",null,[e("span",{class:u([k.value?n:""])},"Back: "+s(k.value.toFixed(2)),3),e("span",{class:u([h.value?n:""])},"Start: "+s(h.value.toFixed(2)),3),e("span",{class:u([A.value?n:""])}," Left Stick: "+s(A.value.toFixed(2)),3),e("span",{class:u([y.value?n:""])}," Right Stick: "+s(y.value.toFixed(2)),3)]),e("div",null,[e("span",{class:u([L.value?n:""])}," Forward: "+s(L.value.toFixed(2)),3),e("span",{class:u([R.value?n:""])}," Backward: "+s(R.value.toFixed(2)),3),e("span",{class:u([T.value?n:""])},"Left: "+s(T.value.toFixed(2)),3),e("span",{class:u([D.value?n:""])},"Right: "+s(D.value.toFixed(2)),3)]),e("div",null,[e("span",null," Left Stick X: "+s(typeof w.value=="number"||!g.gamepad?w.value.toFixed(2):m),1),e("span",null," Left Stick Y: "+s(typeof I.value=="number"||!g.gamepad?I.value.toFixed(2):m),1),e("span",null," Right Stick X: "+s(typeof V.value=="number"||!g.gamepad?V.value.toFixed(2):m),1),e("span",null," Right Stick Y: "+s(typeof X.value=="number"||!g.gamepad?X.value.toFixed(2):m),1)])]),e("span",null,"Vibration Actuator: "+s(C.value),1)]))}}),W={class:"content-item"},j=x({__name:"ODiagnostic",setup(v){const a=G(),{gamepads:d,timestamp:c}=M(a);return(r,b)=>(l(),i("div",W,[o(d).length?(l(!0),i($,{key:0},N(o(d),p=>(l(),Y(o(E),{key:p.id,gamepad:p.device,timestamp:o(c)},null,8,["gamepad","timestamp"]))),128)):(l(),Y(o(E),{key:1,timestamp:o(c)},null,8,["timestamp"]))]))}}),q=e("h1",{class:"visually-hidden"},"Wavelovers — Diagnostic",-1),Q=x({__name:"DiagnosticView",setup(v){return(a,d)=>(l(),i($,null,[q,P(o(j))],64))}});export{Q as default};
