import{r as v}from"./index-DmGhstzd.js";function b(){let i=0;const e=v(!1);function a(t){window.navigator.vibrate(t)}function n(t,r){i=window.setInterval(()=>{a(t)},r)}function o(){i&&clearInterval(i),window.navigator.vibrate(0),e.value=!1}function s(t){let r=0;typeof t=="number"&&(r=t),Array.isArray(t)&&(r=t.reduce((u,f)=>u+=f,0)),n(t,r),e.value=!0}return{isActive:e,stopVibrate:o,startVibrateLoop:s}}export{b as u};