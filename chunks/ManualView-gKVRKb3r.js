import{d as f,u as L,s as N,r as a,i as T,j as U,o as _,c as m,g as t,h as c,v as p,k as q,f as A,a as C,F as E}from"./main-KcFCjSha.js";/* empty css                                                */const F={class:"content-item app-manual"},R={class:"manual-form__input"},W=t("span",null,"Weak Magnitude",-1),$={class:"manual-form__input"},j=t("span",null,"Strong Magnitude",-1),G=q('<div class="manual-controls"><div><kbd>RT</kbd><span> — Vibrate</span></div><div><kbd>A</kbd><span> — Combined Mode</span></div><div><kbd>X</kbd><span> — Strong Mode</span></div><div><kbd>Y</kbd><span> — Light Mode</span></div><div><kbd>B</kbd><span> — Lock Intensity</span></div></div>',1),O=f({__name:"OManual",setup(b){const d=L(),{gamepads:e,isActive:g,patternMode:k}=N(d),{vibrate:M,reset:h}=d,r=a(0),n=a(0),l=a(!1),V=a(0),w=a(260),s=a(0),u=a(0);function x(){const o={startDelay:V.value,duration:w.value,weakMagnitude:s.value,strongMagnitude:u.value};M(o)}function y(){h(),g.value=!1,k.value=0}function B(){e.value.length&&e.value.forEach(o=>{o.device.buttons[7].value||l.value?x():y()})}function S(){e.value.length&&(l.value||(n.value===0&&(s.value=e.value[0].device.buttons[7].value,u.value=e.value[0].device.buttons[7].value),n.value===1&&(s.value=0,u.value=e.value[0].device.buttons[7].value),n.value===2&&(s.value=e.value[0].device.buttons[7].value,u.value=0)))}function D(){e.value.length&&(e.value[0].device.buttons[1].pressed&&(l.value=!l.value),l.value||(e.value[0].device.buttons[0].pressed&&(n.value=0),e.value[0].device.buttons[2].pressed&&(n.value=1),e.value[0].device.buttons[3].pressed&&(n.value=2)))}function I(){D(),S(),B()}return T(()=>r.value=window.setInterval(I,250)),U(()=>clearInterval(r.value)),(o,i)=>(_(),m("div",F,[t("label",R,[W,c(t("input",{"onUpdate:modelValue":i[0]||(i[0]=v=>s.value=v),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[p,s.value]])]),t("label",$,[j,c(t("input",{"onUpdate:modelValue":i[1]||(i[1]=v=>u.value=v),type:"range",required:"",disabled:"",min:"0.0",max:"1.0",step:"0.01"},null,512),[[p,u.value]])]),G]))}}),P=t("h1",{class:"visually-hidden"},"Wavelovers — Manual",-1),z=f({__name:"ManualView",setup(b){return(d,e)=>(_(),m(E,null,[P,A(C(O))],64))}});export{z as default};