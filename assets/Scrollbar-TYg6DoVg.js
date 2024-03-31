import{f as Be,H as Bt,k as y,ci as Et,G as Ot,O as Ke,I as Qe,r as Ht,bB as Mt,b9 as Pt,b as M,M as Ct,c as de,a as Se,d as fe,g as Ze,u as Wt,L as E,R as kt,cj as Dt,h as W,F as Lt,T as Le,a0 as $t}from"./index-DRg9t0Vr.js";import{u as It}from"./use-rtl-BRm_4Zal.js";import{u as Xt}from"./use-css-vars-class-CabheA3r.js";let we=[];const et=new WeakMap;function Nt(){we.forEach(e=>e(...et.get(e))),we=[]}function Bn(e,...t){et.set(e,t),!we.includes(e)&&we.push(e)===1&&requestAnimationFrame(Nt)}function _t(e){return e.composedPath()[0]||null}const $e=Be({render(){var e,t;return(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)}});function pe(e){return e.composedPath()[0]}const Yt={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function At(e,t,n){if(e==="mousemoveoutside"){const o=i=>{t.contains(pe(i))||n(i)};return{mousemove:o,touchstart:o}}else if(e==="clickoutside"){let o=!1;const i=f=>{o=!t.contains(pe(f))},u=f=>{o&&(t.contains(pe(f))||n(f))};return{mousedown:i,mouseup:u,touchstart:i,touchend:u}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function tt(e,t,n){const o=Yt[e];let i=o.get(t);i===void 0&&o.set(t,i=new WeakMap);let u=i.get(n);return u===void 0&&i.set(n,u=At(e,t,n)),u}function Ft(e,t,n,o){if(e==="mousemoveoutside"||e==="clickoutside"){const i=tt(e,t,n);return Object.keys(i).forEach(u=>{se(u,document,i[u],o)}),!0}return!1}function Vt(e,t,n,o){if(e==="mousemoveoutside"||e==="clickoutside"){const i=tt(e,t,n);return Object.keys(i).forEach(u=>{ee(u,document,i[u],o)}),!0}return!1}function Ut(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function o(){e.set(this,!0),t.set(this,!0)}function i(a,s,d){const v=a[s];return a[s]=function(){return d.apply(a,arguments),v.apply(a,arguments)},a}function u(a,s){a[s]=Event.prototype[s]}const f=new WeakMap,T=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function x(){var a;return(a=f.get(this))!==null&&a!==void 0?a:null}function m(a,s){T!==void 0&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:s??T.get})}const p={bubble:{},capture:{}},h={};function k(){const a=function(s){const{type:d,eventPhase:v,bubbles:g}=s,B=pe(s);if(v===2)return;const C=v===1?"capture":"bubble";let O=B;const z=[];for(;O===null&&(O=window),z.push(O),O!==window;)O=O.parentNode||null;const I=p.capture[d],F=p.bubble[d];if(i(s,"stopPropagation",n),i(s,"stopImmediatePropagation",o),m(s,x),C==="capture"){if(I===void 0)return;for(let X=z.length-1;X>=0&&!e.has(s);--X){const J=z[X],K=I.get(J);if(K!==void 0){f.set(s,J);for(const V of K){if(t.has(s))break;V(s)}}if(X===0&&!g&&F!==void 0){const V=F.get(J);if(V!==void 0)for(const ue of V){if(t.has(s))break;ue(s)}}}}else if(C==="bubble"){if(F===void 0)return;for(let X=0;X<z.length&&!e.has(s);++X){const J=z[X],K=F.get(J);if(K!==void 0){f.set(s,J);for(const V of K){if(t.has(s))break;V(s)}}}}u(s,"stopPropagation"),u(s,"stopImmediatePropagation"),m(s)};return a.displayName="evtdUnifiedHandler",a}function D(){const a=function(s){const{type:d,eventPhase:v}=s;if(v!==2)return;const g=h[d];g!==void 0&&g.forEach(B=>B(s))};return a.displayName="evtdUnifiedWindowEventHandler",a}const _=k(),Y=D();function P(a,s){const d=p[a];return d[s]===void 0&&(d[s]=new Map,window.addEventListener(s,_,a==="capture")),d[s]}function L(a){return h[a]===void 0&&(h[a]=new Set,window.addEventListener(a,Y)),h[a]}function $(a,s){let d=a.get(s);return d===void 0&&a.set(s,d=new Set),d}function A(a,s,d,v){const g=p[s][d];if(g!==void 0){const B=g.get(a);if(B!==void 0&&B.has(v))return!0}return!1}function q(a,s){const d=h[a];return!!(d!==void 0&&d.has(s))}function G(a,s,d,v){let g;if(typeof v=="object"&&v.once===!0?g=I=>{S(a,s,g,v),d(I)}:g=d,Ft(a,s,g,v))return;const C=v===!0||typeof v=="object"&&v.capture===!0?"capture":"bubble",O=P(C,a),z=$(O,s);if(z.has(g)||z.add(g),s===window){const I=L(a);I.has(g)||I.add(g)}}function S(a,s,d,v){if(Vt(a,s,d,v))return;const B=v===!0||typeof v=="object"&&v.capture===!0,C=B?"capture":"bubble",O=P(C,a),z=$(O,s);if(s===window&&!A(s,B?"bubble":"capture",a,d)&&q(a,d)){const F=h[a];F.delete(d),F.size===0&&(window.removeEventListener(a,Y),h[a]=void 0)}z.has(d)&&z.delete(d),z.size===0&&O.delete(s),O.size===0&&(window.removeEventListener(a,_,C==="capture"),p[C][a]=void 0)}return{on:G,off:S}}const{on:se,off:ee}=Ut();function En(e,t){return Bt(e,n=>{n!==void 0&&(t.value=n)}),y(()=>e.value===void 0?t.value:e.value)}const jt=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function qt(){return jt}function Ie(e,t){console.error(`[vueuc/${e}]: ${t}`)}const{c:On}=Et(),Hn="vueuc-style";var te=[],Gt=function(){return te.some(function(e){return e.activeTargets.length>0})},Jt=function(){return te.some(function(e){return e.skippedTargets.length>0})},Xe="ResizeObserver loop completed with undelivered notifications.",Kt=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Xe}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Xe),window.dispatchEvent(e)},ce;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(ce||(ce={}));var ne=function(e){return Object.freeze(e)},Qt=function(){function e(t,n){this.inlineSize=t,this.blockSize=n,ne(this)}return e}(),nt=function(){function e(t,n,o,i){return this.x=t,this.y=n,this.width=o,this.height=i,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,ne(this)}return e.prototype.toJSON=function(){var t=this,n=t.x,o=t.y,i=t.top,u=t.right,f=t.bottom,T=t.left,x=t.width,m=t.height;return{x:n,y:o,top:i,right:u,bottom:f,left:T,width:x,height:m}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Ee=function(e){return e instanceof SVGElement&&"getBBox"in e},rt=function(e){if(Ee(e)){var t=e.getBBox(),n=t.width,o=t.height;return!n&&!o}var i=e,u=i.offsetWidth,f=i.offsetHeight;return!(u||f||e.getClientRects().length)},Ne=function(e){var t;if(e instanceof Element)return!0;var n=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},Zt=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},le=typeof window<"u"?window:{},ve=new WeakMap,_e=/auto|scroll/,en=/^tb|vertical/,tn=/msie|trident/i.test(le.navigator&&le.navigator.userAgent),N=function(e){return parseFloat(e||"0")},oe=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=!1),new Qt((n?t:e)||0,(n?e:t)||0)},Ye=ne({devicePixelContentBoxSize:oe(),borderBoxSize:oe(),contentBoxSize:oe(),contentRect:new nt(0,0,0,0)}),it=function(e,t){if(t===void 0&&(t=!1),ve.has(e)&&!t)return ve.get(e);if(rt(e))return ve.set(e,Ye),Ye;var n=getComputedStyle(e),o=Ee(e)&&e.ownerSVGElement&&e.getBBox(),i=!tn&&n.boxSizing==="border-box",u=en.test(n.writingMode||""),f=!o&&_e.test(n.overflowY||""),T=!o&&_e.test(n.overflowX||""),x=o?0:N(n.paddingTop),m=o?0:N(n.paddingRight),p=o?0:N(n.paddingBottom),h=o?0:N(n.paddingLeft),k=o?0:N(n.borderTopWidth),D=o?0:N(n.borderRightWidth),_=o?0:N(n.borderBottomWidth),Y=o?0:N(n.borderLeftWidth),P=h+m,L=x+p,$=Y+D,A=k+_,q=T?e.offsetHeight-A-e.clientHeight:0,G=f?e.offsetWidth-$-e.clientWidth:0,S=i?P+$:0,a=i?L+A:0,s=o?o.width:N(n.width)-S-G,d=o?o.height:N(n.height)-a-q,v=s+P+G+$,g=d+L+q+A,B=ne({devicePixelContentBoxSize:oe(Math.round(s*devicePixelRatio),Math.round(d*devicePixelRatio),u),borderBoxSize:oe(v,g,u),contentBoxSize:oe(s,d,u),contentRect:new nt(h,x,s,d)});return ve.set(e,B),B},ot=function(e,t,n){var o=it(e,n),i=o.borderBoxSize,u=o.contentBoxSize,f=o.devicePixelContentBoxSize;switch(t){case ce.DEVICE_PIXEL_CONTENT_BOX:return f;case ce.BORDER_BOX:return i;default:return u}},nn=function(){function e(t){var n=it(t);this.target=t,this.contentRect=n.contentRect,this.borderBoxSize=ne([n.borderBoxSize]),this.contentBoxSize=ne([n.contentBoxSize]),this.devicePixelContentBoxSize=ne([n.devicePixelContentBoxSize])}return e}(),at=function(e){if(rt(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},rn=function(){var e=1/0,t=[];te.forEach(function(f){if(f.activeTargets.length!==0){var T=[];f.activeTargets.forEach(function(m){var p=new nn(m.target),h=at(m.target);T.push(p),m.lastReportedSize=ot(m.target,m.observedBox),h<e&&(e=h)}),t.push(function(){f.callback.call(f.observer,T,f.observer)}),f.activeTargets.splice(0,f.activeTargets.length)}});for(var n=0,o=t;n<o.length;n++){var i=o[n];i()}return e},Ae=function(e){te.forEach(function(n){n.activeTargets.splice(0,n.activeTargets.length),n.skippedTargets.splice(0,n.skippedTargets.length),n.observationTargets.forEach(function(i){i.isActive()&&(at(i.target)>e?n.activeTargets.push(i):n.skippedTargets.push(i))})})},on=function(){var e=0;for(Ae(e);Gt();)e=rn(),Ae(e);return Jt()&&Kt(),e>0},ze,st=[],an=function(){return st.splice(0).forEach(function(e){return e()})},sn=function(e){if(!ze){var t=0,n=document.createTextNode(""),o={characterData:!0};new MutationObserver(function(){return an()}).observe(n,o),ze=function(){n.textContent="".concat(t?t--:t++)}}st.push(e),ze()},ln=function(e){sn(function(){requestAnimationFrame(e)})},ge=0,cn=function(){return!!ge},un=250,dn={attributes:!0,characterData:!0,childList:!0,subtree:!0},Fe=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Ve=function(e){return e===void 0&&(e=0),Date.now()+e},ye=!1,fn=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var n=this;if(t===void 0&&(t=un),!ye){ye=!0;var o=Ve(t);ln(function(){var i=!1;try{i=on()}finally{if(ye=!1,t=o-Ve(),!cn())return;i?n.run(1e3):t>0?n.run(t):n.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,n=function(){return t.observer&&t.observer.observe(document.body,dn)};document.body?n():le.addEventListener("DOMContentLoaded",n)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),Fe.forEach(function(n){return le.addEventListener(n,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),Fe.forEach(function(n){return le.removeEventListener(n,t.listener,!0)}),this.stopped=!0)},e}(),Te=new fn,Ue=function(e){!ge&&e>0&&Te.start(),ge+=e,!ge&&Te.stop()},vn=function(e){return!Ee(e)&&!Zt(e)&&getComputedStyle(e).display==="inline"},hn=function(){function e(t,n){this.target=t,this.observedBox=n||ce.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=ot(this.target,this.observedBox,!0);return vn(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),bn=function(){function e(t,n){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=n}return e}(),he=new WeakMap,je=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},be=function(){function e(){}return e.connect=function(t,n){var o=new bn(t,n);he.set(t,o)},e.observe=function(t,n,o){var i=he.get(t),u=i.observationTargets.length===0;je(i.observationTargets,n)<0&&(u&&te.push(i),i.observationTargets.push(new hn(n,o&&o.box)),Ue(1),Te.schedule())},e.unobserve=function(t,n){var o=he.get(t),i=je(o.observationTargets,n),u=o.observationTargets.length===1;i>=0&&(u&&te.splice(te.indexOf(o),1),o.observationTargets.splice(i,1),Ue(-1))},e.disconnect=function(t){var n=this,o=he.get(t);o.observationTargets.slice().forEach(function(i){return n.unobserve(t,i.target)}),o.activeTargets.splice(0,o.activeTargets.length)},e}(),pn=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");be.connect(this,t)}return e.prototype.observe=function(t,n){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ne(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");be.observe(this,t,n)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Ne(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");be.unobserve(this,t)},e.prototype.disconnect=function(){be.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class gn{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||pn)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const n of t){const o=this.elHandlersMap.get(n.target);o!==void 0&&o(n)}}registerHandler(t,n){this.elHandlersMap.set(t,n),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}}const qe=new gn,Ge=Be({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=Ot().proxy;function o(i){const{onResize:u}=e;u!==void 0&&u(i)}Ke(()=>{const i=n.$el;if(i===void 0){Ie("resize-observer","$el does not exist.");return}if(i.nextElementSibling!==i.nextSibling&&i.nodeType===3&&i.nodeValue!==""){Ie("resize-observer","$el can not be observed (it may be a text node).");return}i.nextElementSibling!==null&&(qe.registerHandler(i.nextElementSibling,o),t=!0)}),Qe(()=>{t&&qe.unregisterHandler(n.$el.nextElementSibling)})},render(){return Ht(this.$slots,"default")}});function wn(e){const t={isDeactivated:!1};let n=!1;return Mt(()=>{if(t.isDeactivated=!1,!n){n=!0;return}e()}),Pt(()=>{t.isDeactivated=!0,n||(n=!0)}),t}const{cubicBezierEaseInOut:Je}=Ct;function mn({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:o=Je,leaveCubicBezier:i=Je}={}){return[M(`&.${e}-transition-enter-active`,{transition:`all ${t} ${o}!important`}),M(`&.${e}-transition-leave-active`,{transition:`all ${n} ${i}!important`}),M(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),M(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const Rn=de("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[M(">",[de("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,[M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),M(">",[de("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),M(">, +",[de("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[Se("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[M(">",[fe("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Se("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[M(">",[fe("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Se("disabled",[M(">",[fe("scrollbar","pointer-events: none;")])]),M(">",[fe("scrollbar",`
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[mn(),M("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),xn=Object.assign(Object.assign({},Ze.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),lt=Be({name:"Scrollbar",props:xn,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:o}=Wt(e),i=It("Scrollbar",o,t),u=E(null),f=E(null),T=E(null),x=E(null),m=E(null),p=E(null),h=E(null),k=E(null),D=E(null),_=E(null),Y=E(null),P=E(0),L=E(0),$=E(!1),A=E(!1);let q=!1,G=!1,S,a,s=0,d=0,v=0,g=0;const B=qt(),C=y(()=>{const{value:r}=k,{value:l}=p,{value:c}=_;return r===null||l===null||c===null?0:Math.min(r,c*r/l+e.size*1.5)}),O=y(()=>`${C.value}px`),z=y(()=>{const{value:r}=D,{value:l}=h,{value:c}=Y;return r===null||l===null||c===null?0:c*r/l+e.size*1.5}),I=y(()=>`${z.value}px`),F=y(()=>{const{value:r}=k,{value:l}=P,{value:c}=p,{value:b}=_;if(r===null||c===null||b===null)return 0;{const R=c-r;return R?l/R*(b-C.value):0}}),X=y(()=>`${F.value}px`),J=y(()=>{const{value:r}=D,{value:l}=L,{value:c}=h,{value:b}=Y;if(r===null||c===null||b===null)return 0;{const R=c-r;return R?l/R*(b-z.value):0}}),K=y(()=>`${J.value}px`),V=y(()=>{const{value:r}=k,{value:l}=p;return r!==null&&l!==null&&l>r}),ue=y(()=>{const{value:r}=D,{value:l}=h;return r!==null&&l!==null&&l>r}),ct=y(()=>{const{trigger:r}=e;return r==="none"||$.value}),ut=y(()=>{const{trigger:r}=e;return r==="none"||A.value}),Q=y(()=>{const{container:r}=e;return r?r():f.value}),dt=y(()=>{const{content:r}=e;return r?r():T.value}),Oe=wn(()=>{e.container||He({top:P.value,left:L.value})}),ft=()=>{Oe.isDeactivated||Z()},vt=r=>{if(Oe.isDeactivated)return;const{onResize:l}=e;l&&l(r),Z()},He=(r,l)=>{if(!e.scrollable)return;if(typeof r=="number"){re(r,l??0,0,!1,"auto");return}const{left:c,top:b,index:R,elSize:H,position:U,behavior:w,el:j,debounce:ae=!0}=r;(c!==void 0||b!==void 0)&&re(c??0,b??0,0,!1,w),j!==void 0?re(0,j.offsetTop,j.offsetHeight,ae,w):R!==void 0&&H!==void 0?re(0,R*H,H,ae,w):U==="bottom"?re(0,Number.MAX_SAFE_INTEGER,0,!1,w):U==="top"&&re(0,0,0,!1,w)},ht=(r,l)=>{if(!e.scrollable)return;const{value:c}=Q;c&&(typeof r=="object"?c.scrollBy(r):c.scrollBy(r,l||0))};function re(r,l,c,b,R){const{value:H}=Q;if(H){if(b){const{scrollTop:U,offsetHeight:w}=H;if(l>U){l+c<=U+w||H.scrollTo({left:r,top:l+c-w,behavior:R});return}}H.scrollTo({left:r,top:l,behavior:R})}}function bt(){mt(),Rt(),Z()}function pt(){me()}function me(){gt(),wt()}function gt(){a!==void 0&&window.clearTimeout(a),a=window.setTimeout(()=>{A.value=!1},e.duration)}function wt(){S!==void 0&&window.clearTimeout(S),S=window.setTimeout(()=>{$.value=!1},e.duration)}function mt(){S!==void 0&&window.clearTimeout(S),$.value=!0}function Rt(){a!==void 0&&window.clearTimeout(a),A.value=!0}function xt(r){const{onScroll:l}=e;l&&l(r),Me()}function Me(){const{value:r}=Q;r&&(P.value=r.scrollTop,L.value=r.scrollLeft*(i!=null&&i.value?-1:1))}function St(){const{value:r}=dt;r&&(p.value=r.offsetHeight,h.value=r.offsetWidth);const{value:l}=Q;l&&(k.value=l.offsetHeight,D.value=l.offsetWidth);const{value:c}=m,{value:b}=x;c&&(Y.value=c.offsetWidth),b&&(_.value=b.offsetHeight)}function Pe(){const{value:r}=Q;r&&(P.value=r.scrollTop,L.value=r.scrollLeft*(i!=null&&i.value?-1:1),k.value=r.offsetHeight,D.value=r.offsetWidth,p.value=r.scrollHeight,h.value=r.scrollWidth);const{value:l}=m,{value:c}=x;l&&(Y.value=l.offsetWidth),c&&(_.value=c.offsetHeight)}function Z(){e.scrollable&&(e.useUnifiedContainer?Pe():(St(),Me()))}function Ce(r){var l;return!(!((l=u.value)===null||l===void 0)&&l.contains(_t(r)))}function zt(r){r.preventDefault(),r.stopPropagation(),G=!0,se("mousemove",window,We,!0),se("mouseup",window,ke,!0),d=L.value,v=i!=null&&i.value?window.innerWidth-r.clientX:r.clientX}function We(r){if(!G)return;S!==void 0&&window.clearTimeout(S),a!==void 0&&window.clearTimeout(a);const{value:l}=D,{value:c}=h,{value:b}=z;if(l===null||c===null)return;const H=(i!=null&&i.value?window.innerWidth-r.clientX-v:r.clientX-v)*(c-l)/(l-b),U=c-l;let w=d+H;w=Math.min(U,w),w=Math.max(w,0);const{value:j}=Q;if(j){j.scrollLeft=w*(i!=null&&i.value?-1:1);const{internalOnUpdateScrollLeft:ae}=e;ae&&ae(w)}}function ke(r){r.preventDefault(),r.stopPropagation(),ee("mousemove",window,We,!0),ee("mouseup",window,ke,!0),G=!1,Z(),Ce(r)&&me()}function yt(r){r.preventDefault(),r.stopPropagation(),q=!0,se("mousemove",window,Re,!0),se("mouseup",window,xe,!0),s=P.value,g=r.clientY}function Re(r){if(!q)return;S!==void 0&&window.clearTimeout(S),a!==void 0&&window.clearTimeout(a);const{value:l}=k,{value:c}=p,{value:b}=C;if(l===null||c===null)return;const H=(r.clientY-g)*(c-l)/(l-b),U=c-l;let w=s+H;w=Math.min(U,w),w=Math.max(w,0);const{value:j}=Q;j&&(j.scrollTop=w)}function xe(r){r.preventDefault(),r.stopPropagation(),ee("mousemove",window,Re,!0),ee("mouseup",window,xe,!0),q=!1,Z(),Ce(r)&&me()}kt(()=>{const{value:r}=ue,{value:l}=V,{value:c}=t,{value:b}=m,{value:R}=x;b&&(r?b.classList.remove(`${c}-scrollbar-rail--disabled`):b.classList.add(`${c}-scrollbar-rail--disabled`)),R&&(l?R.classList.remove(`${c}-scrollbar-rail--disabled`):R.classList.add(`${c}-scrollbar-rail--disabled`))}),Ke(()=>{e.container||Z()}),Qe(()=>{S!==void 0&&window.clearTimeout(S),a!==void 0&&window.clearTimeout(a),ee("mousemove",window,Re,!0),ee("mouseup",window,xe,!0)});const Tt=Ze("Scrollbar","-scrollbar",Rn,Dt,e,t),De=y(()=>{const{common:{cubicBezierEaseInOut:r,scrollbarBorderRadius:l,scrollbarHeight:c,scrollbarWidth:b},self:{color:R,colorHover:H}}=Tt.value;return{"--n-scrollbar-bezier":r,"--n-scrollbar-color":R,"--n-scrollbar-color-hover":H,"--n-scrollbar-border-radius":l,"--n-scrollbar-width":b,"--n-scrollbar-height":c}}),ie=n?Xt("scrollbar",void 0,De,e):void 0;return Object.assign(Object.assign({},{scrollTo:He,scrollBy:ht,sync:Z,syncUnifiedContainer:Pe,handleMouseEnterWrapper:bt,handleMouseLeaveWrapper:pt}),{mergedClsPrefix:t,rtlEnabled:i,containerScrollTop:P,wrapperRef:u,containerRef:f,contentRef:T,yRailRef:x,xRailRef:m,needYBar:V,needXBar:ue,yBarSizePx:O,xBarSizePx:I,yBarTopPx:X,xBarLeftPx:K,isShowXBar:ct,isShowYBar:ut,isIos:B,handleScroll:xt,handleContentResize:ft,handleContainerResize:vt,handleYScrollMouseDown:yt,handleXScrollMouseDown:zt,cssVars:n?void 0:De,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender})},render(){var e;const{$slots:t,mergedClsPrefix:n,triggerDisplayManually:o,rtlEnabled:i,internalHoistYRail:u}=this;if(!this.scrollable)return(e=t.default)===null||e===void 0?void 0:e.call(t);const f=this.trigger==="none",T=(p,h)=>W("div",{ref:"yRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--vertical`,p],"data-scrollbar-rail":!0,style:[h||"",this.verticalRailStyle],"aria-hidden":!0},W(f?$e:Le,f?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?W("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),x=()=>{var p,h;return(p=this.onRender)===null||p===void 0||p.call(this),W("div",$t(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${n}-scrollbar`,this.themeClass,i&&`${n}-scrollbar--rtl`],style:this.cssVars,onMouseenter:o?void 0:this.handleMouseEnterWrapper,onMouseleave:o?void 0:this.handleMouseLeaveWrapper}),[this.container?(h=t.default)===null||h===void 0?void 0:h.call(t):W("div",{role:"none",ref:"containerRef",class:[`${n}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},W(Ge,{onResize:this.handleContentResize},{default:()=>W("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${n}-scrollbar-content`,this.contentClass]},t)})),u?null:T(void 0,void 0),this.xScrollable&&W("div",{ref:"xRailRef",class:[`${n}-scrollbar-rail`,`${n}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},W(f?$e:Le,f?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?W("div",{class:`${n}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:i?this.xBarLeftPx:void 0,left:i?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},m=this.container?x():W(Ge,{onResize:this.handleContainerResize},{default:x});return u?W(Lt,null,m,T(this.themeClass,this.cssVars)):m}}),Mn=lt,Pn=lt;export{Mn as N,Ge as V,$e as W,Pn as X,En as a,ee as b,Bn as c,Hn as d,On as e,mn as f,_t as g,se as o,qe as r,wn as u};
