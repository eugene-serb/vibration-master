import{d,r as c,o as h,a as n,c as a,h as t,i as _,v as p,b as r,g as V,F as y}from"./index-0tIw-02u.js";/* empty css                                                */import{u as D}from"./useMobileVibration-CfOcAEuj.js";const k={class:"content-item app-custom"},x={class:"custom-form"},C={class:"custom-form__input"},M=t("span",null,"Start Delay (ms)",-1),S={class:"custom-form__input"},B=t("span",null,"Duration (ms)",-1),U={class:"custom-form__buttons"},g=d({__name:"OMobileCustom",setup(b){const{isActive:i,stopVibrate:o,startVibrateLoop:f}=D(),u=c(250),l=c(250);function v(){const m=[u.value,l.value];o(),f(m)}return h(()=>{o()}),(m,e)=>(n(),a("div",k,[t("fieldset",x,[t("label",C,[M,_(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),type:"number",placeholder:"Start Delay",min:"0",max:"10000",step:"25",required:""},null,512),[[p,u.value]])]),t("label",S,[B,_(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),type:"number",placeholder:"Duration",min:"0",max:"10000",step:"25",required:""},null,512),[[p,l.value]])]),t("div",U,[r(i)?(n(),a("button",{key:1,onClick:e[2]||(e[2]=(...s)=>r(o)&&r(o)(...s)),class:"custom-form__button"},"Stop")):(n(),a("button",{key:0,onClick:v,class:"custom-form__button"},"Start"))])])]))}}),q=t("h1",{class:"visually-hidden"},"Wavelovers — Mobile Custom Pattern",-1),$=d({__name:"MobileCustomView",setup(b){return(i,o)=>(n(),a(y,null,[q,V(r(g))],64))}});export{$ as default};
