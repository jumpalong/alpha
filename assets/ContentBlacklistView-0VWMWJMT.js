import{f as y,L as d,o as i,B as f,q as v,z as m,a5 as _,m as b,bm as h,k as g,h as D}from"./index-DRg9t0Vr.js";import{_ as B}from"./Input-csQmIHyV.js";import{w as S}from"./utils-D8FBasE8.js";const x={key:0,class:"w-full flex h-full"},C={key:0,class:"opacity-0"},R={key:1},w=y({__name:"DoubleClickToModifyInput",props:{value:{}},emits:["updateValue","update:value"],setup(e,{emit:a}){const s=e,u=a,c=d(!0),l=d(null);function t(){c.value=!1,setTimeout(()=>{var o;(o=l.value)==null||o.focus()},10)}return(o,n)=>{const r=B;return i(),f("div",{class:"w-full flex h-full",onDblclick:t},[v(c)?(i(),f("div",x,[s.value===""||s.value===void 0?(i(),f("span",C,m(v(_)("empty_text")),1)):(i(),f("span",R,m(s.value),1))])):(i(),b(r,{key:1,ref_key:"inputRef",ref:l,autofocus:"",value:s.value,onUpdateValue:n[0]||(n[0]=p=>{u("update:value",p),u("updateValue",p)}),onBlur:n[1]||(n[1]=()=>c.value=!0)},null,8,["value"]))],32)}}}),k=h("black-data",[]);let V=g(()=>k.value.reduce((e,a)=>a.key>e?a.key:e,0));function I(){function e(a){k.value.push(S(a,{key:Number(V.value)+1,title:"",ignoreContent:""}))}return{blackData:k,addRule:e}}function N(){const{blackData:e,addRule:a}=I(),s=()=>[{type:"selection",options:[{label:"反选",key:"ReverseSelection",onSelect:l=>{u.value=l.filter(t=>!u.value.includes(t.key)).map(t=>t.key)}},{label:"删除选中项",key:"delete",onSelect:l=>{u.value.forEach(t=>{const o=e.value.findIndex(n=>n.key===t);o!==-1&&e.value.splice(o,1)})}}]},...["key","title","ignoreContent"].map(l=>{const t=l;return{title:l,key:l,render(n,r){return D(w,{value:String(n[t]),onClick(){r===e.value.length-1&&a()},onUpdateValue(p){e.value[r][t]=p}})}}})],u=d([]),c=s();return e.value.length===0&&a(),{checkedRowKeys:u,columns:c}}export{I as a,N as u};
