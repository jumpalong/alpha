import{f as i,ao as m,o as v,B as x,n,q as e,E as p,F as c,a5 as s}from"./index-DRg9t0Vr.js";import{_ as u}from"./UploadButton.vue_vue_type_script_setup_true_lang-DviwWVZi.js";import{_ as f}from"./Input-csQmIHyV.js";const _={class:"mt-2 flex"},U={class:"ml-2"},b={class:"mt-2 flex"},y={class:"ml-2"},R=i({__name:"UserMetadataEditing",props:{userMetadata:{}},setup(r){const d=r,{userMetadata:a}=m(d);return(B,l)=>{const o=f;return v(),x(c,null,[n(o,{type:"text",placeholder:e(s)("username"),value:e(a).name,"onUpdate:value":l[0]||(l[0]=t=>e(a).name=t)},null,8,["placeholder","value"]),n(o,{type:"textarea",placeholder:e(s)("about"),value:e(a).about,"onUpdate:value":l[1]||(l[1]=t=>e(a).about=t),class:"mt-2"},null,8,["placeholder","value"]),p("div",_,[n(o,{type:"text",placeholder:e(s)("picture"),value:e(a).picture,"onUpdate:value":l[2]||(l[2]=t=>e(a).picture=t)},null,8,["placeholder","value"]),p("div",U,[n(u,{onUploadResult:l[3]||(l[3]=({url:t})=>{e(a).picture=t})})])]),p("div",b,[n(o,{type:"text",placeholder:e(s)("banner"),value:e(a).banner,"onUpdate:value":l[4]||(l[4]=t=>e(a).banner=t)},null,8,["placeholder","value"]),p("div",y,[n(u,{onUploadResult:l[5]||(l[5]=({url:t})=>{e(a).banner=t})})])]),n(o,{class:"mt-2",type:"text",placeholder:e(s)("nip5"),value:e(a).nip05,"onUpdate:value":l[6]||(l[6]=t=>e(a).nip05=t)},null,8,["placeholder","value"]),n(o,{class:"mt-2",type:"text",placeholder:`${e(s)("lud16")}: username@domain.xxx`,value:e(a).lud16,"onUpdate:value":l[7]||(l[7]=t=>e(a).lud16=t)},null,8,["placeholder","value"])],64)}}});export{R as _};
