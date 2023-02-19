import{a as $,aE as Q,b as Z,f as b,aF as ee,au as B,aw as _,o as I,h as N,n as o,z as L,aA as te,F as ne,az as oe,j as G,aB as re,ax as R,ay as ie,q as ae,w as se,v as O,L as le,k as p,c7 as ce,B as T,di as ue,dj as me,f8 as ge,f9 as de}from"./index.327fb789.js";import{I as W}from"./index.e2db19c1.js";import{P as pe}from"./index.8a211077.js";import"./isNumber.b7d57b8f.js";import"./index.945a3551.js";import"./index.62f637e8.js";import"./useSize.60585e88.js";import"./eagerComputed.f3852fc1.js";import"./useWindowSizeFn.54c185ab.js";import"./useContentViewHeight.1136c467.js";import"./ArrowLeftOutlined.dbd8d954.js";import"./index.d1088aad.js";import"./transButton.d6d2fca7.js";const fe=$({name:"ImagePreview",components:{Image:W,PreviewGroup:W.PreviewGroup},props:{functional:Q.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),c=b(()=>{const{imageList:s}=n;return s?s.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:c}}});function ve(n,u,c,s,t,h){const g=_("Image"),f=_("PreviewGroup");return I(),N("div",{class:ae(n.prefixCls)},[o(f,null,{default:L(()=>[!n.imageList||n.$slots.default?te(n.$slots,"default",{key:0}):(I(!0),N(ne,{key:1},oe(n.getImageList,l=>(I(),G(g,re(R({key:l.src},l)),ie({_:2},[l.placeholder?{name:"placeholder",fn:L(()=>[o(g,R(l,{src:l.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}var _e=B(fe,[["render",ve]]),he="/assets/resume.8f27866b.svg",we="/assets/p-rotate.cb8bbfc3.svg",xe="/assets/scale.44abde22.svg",be="/assets/unscale.c552f416.svg",Ie="/assets/unrotate.ef6a2daf.svg",d;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(d||(d={}));const Le={show:{type:Boolean,default:!1},imageList:{type:Array,default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},i="img-preview";var ye=$({name:"ImagePreview",props:Le,emits:["img-load","img-error"],setup(n,{expose:u,emit:c}){const s=new Map,t=se({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:d.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=O(null),g=O(null);function f(){X();const{index:e,imageList:r}=n;if(!r||!r.length)throw new Error("imageList is undefined");t.currentIndex=e,F(r[e])}function l(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function X(){const e=p(h);!e||(e.onmousewheel=y,document.body.addEventListener("DOMMouseScroll",y),document.ondragstart=function(){return!1})}const w=b(()=>{var r;const e=(r=n==null?void 0:n.scaleStep)!=null?r:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function y(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&x(w.value),e.delta<0&&x(-w.value)}function x(e){t.imgScale<=.2&&e<0||(t.imgScale+=e*.1,t.imgScale<0&&(t.imgScale=.02))}function k(e){t.imgRotate+=e}function Y(){const e=p(g);!e||(e.onmousemove=null)}function F(e){t.status=d.LOADING;const r=new Image;r.src=e,r.onload=a=>{if(t.currentUrl!==e){const m=a.composedPath();if(n.rememberState){s.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=s.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(l(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&c("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=d.DONE},r.onerror=a=>{const m=a.composedPath();m&&c("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=d.FAIL}}function A(e){e&&e.stopPropagation(),P()}function P(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",y),document.ondragstart=null}function E(){l()}u({resume:E,close:P,prev:C.bind(null,"left"),next:C.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function C(e){const{currentIndex:r}=t,{imageList:a}=n;e==="left"&&(t.currentIndex--,r<=0&&(t.currentIndex=a.length-1)),e==="right"&&(t.currentIndex++,r>=a.length-1&&(t.currentIndex=0)),F(a[t.currentIndex])}function U(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const r=p(g);r&&(r.onmousemove=j)}function j(e){e=e||window.event,e.preventDefault();const r=e.clientX-t.moveX,a=e.clientY-t.moveY;t.imgLeft+=r,t.imgTop+=a,t.moveX=e.clientX,t.moveY=e.clientY}const V=b(()=>{const{imgScale:e,imgRotate:r,imgTop:a,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${r}deg)`,marginTop:`${a}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),D=b(()=>{const{imageList:e}=n;return e.length>1});le(()=>{n.show&&f(),n.imageList&&l()});const q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${i}-content`)&&A(e)},H=()=>o("div",{class:`${i}__close`,onClick:A},[o(ce,{class:`${i}__close-icon`},null)]),J=()=>{if(!p(D))return null;const{currentIndex:e}=t,{imageList:r}=n;return o("div",{class:`${i}__index`},[e+1,T(" / "),r.length])},K=()=>o("div",{class:`${i}__controller`},[o("div",{class:`${i}__controller-item`,onClick:()=>x(-w.value)},[o("img",{src:be},null)]),o("div",{class:`${i}__controller-item`,onClick:()=>x(w.value)},[o("img",{src:xe},null)]),o("div",{class:`${i}__controller-item`,onClick:E},[o("img",{src:he},null)]),o("div",{class:`${i}__controller-item`,onClick:()=>k(-90)},[o("img",{src:Ie},null)]),o("div",{class:`${i}__controller-item`,onClick:()=>k(90)},[o("img",{src:we},null)])]),M=e=>p(D)?o("div",{class:[`${i}__arrow`,e],onClick:()=>C(e)},[e==="left"?o(ue,null,null):o(me,null,null)]):null;return()=>t.show&&o("div",{class:i,ref:h,onMouseup:Y,onClick:q},[o("div",{class:`${i}-content`},[o("img",{style:p(V),class:[`${i}-image`,t.status===d.DONE?"":"hidden"],ref:g,src:t.currentUrl,onMousedown:U},null),H(),J(),K(),M("left"),M("right")])])}});let S=null;function Ce(n){var s;if(!ge)return;const u={},c=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),S=o(ye,u),de(S,c),document.body.appendChild(c),(s=S.component)==null?void 0:s.exposed}const z=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],Se=$({components:{PageWrapper:pe,ImagePreview:_e},setup(){function n(){Ce({imageList:z,defaultWidth:700,rememberState:!0,onImgLoad:({index:c,url:s,dom:t})=>{}})}return{imgList:z,openImg:n}}});function $e(n,u,c,s,t,h){const g=_("ImagePreview"),f=_("a-button"),l=_("PageWrapper");return I(),G(l,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:L(()=>[o(g,{imageList:n.imgList},null,8,["imageList"]),o(f,{onClick:n.openImg,type:"primary"},{default:L(()=>[T("\u65E0\u9884\u89C8\u56FE")]),_:1},8,["onClick"])]),_:1})}var Ge=B(Se,[["render",$e]]);export{Ge as default};