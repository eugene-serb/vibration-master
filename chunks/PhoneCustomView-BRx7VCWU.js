import{d as m,r as i,o as D,a as _,c as p,h as t,i as l,v as c,t as V,b as d,g as x,F as y}from"./index-BPSCwmb-.js";/* empty css                                                */import{u as C}from"./usePhoneVibration-aCLLDIP5.js";const P={class:"content-item app-custom"},S={class:"custom-form"},k={class:"custom-form__input"},B=t("span",null,"Start Delay (ms)",-1),g={class:"custom-form__input"},U=t("span",null,"Duration (ms)",-1),q={class:"custom-form__buttons"},w=m({__name:"OPhoneCustom",setup(f){const{isActive:s,stopVibrate:e,startVibrateLoop:h}=C(),n=i(250),a=i(250);function v(){const u=[n.value,a.value];e(),h(u)}function b(){if(s.value){e();return}v()}return D(()=>{e()}),(u,o)=>(_(),p("div",P,[t("fieldset",S,[t("label",k,[B,l(t("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>n.value=r),type:"number",placeholder:"Start Delay",min:"0",max:"10000",step:"25",required:""},null,512),[[c,n.value]])]),t("label",g,[U,l(t("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>a.value=r),type:"number",placeholder:"Duration",min:"0",max:"10000",step:"25",required:""},null,512),[[c,a.value]])]),t("div",q,[t("button",{onClick:b,class:"custom-form__button"},V(d(s)?"Stop":"Start"),1)])])]))}}),F=t("h1",{class:"visually-hidden"},"Wavelovers — Phone Custom Pattern",-1),E=m({__name:"PhoneCustomView",setup(f){return(s,e)=>(_(),p(y,null,[F,x(d(w))],64))}});export{E as default};
