var me=Object.defineProperty,$e=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var ce=(e,t,a)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))Ue.call(t,a)&&ce(e,a,t[a]);if(se)for(var a of se(t))je.call(t,a)&&ce(e,a,t[a]);return e},ie=(e,t)=>$e(e,Pe(t));var oe=(e,t,a)=>new Promise((y,_)=>{var b=k=>{try{p(a.next(k))}catch(A){_(A)}},r=k=>{try{p(a.throw(k))}catch(A){_(A)}},p=k=>k.done?y(k.value):Promise.resolve(k.value).then(b,r);p((a=a.apply(e,t)).next())});import{eV as Ve,eW as He,eX as Re,eY as Ye,eZ as Xe,e_ as ze,ef as qe,el as de,e$ as We,f0 as Ge,f1 as Je,a as ve,v as Ce,f2 as Ze,c as Qe,f as M,a7 as $,o as I,h as U,k as c,aA as et,l as m,j as G,z as j,B as ue,t as he,dI as tt,q as fe,n as L,f3 as nt,b7 as at,F as Z,az as lt,cf as rt,aB as st,aC as ct,f4 as it,b6 as Q,bl as ot,cG as dt,bt as ut,bS as ht,ah as ee,f5 as ye,w as pe,am as X,cY as ft,ao as yt,av as J,f6 as pt,et as gt,L as V,N as kt,f7 as St,dF as bt,cB as xt,b1 as Kt,x as ge,y as ke,bE as vt,ax as Ct,ec as Se,d4 as Lt,bq as be,cC as At}from"./index.327fb789.js";import{f as _t}from"./fromPairs.84aabb58.js";import{b as Et}from"./index.b4057fb3.js";import{u as Tt}from"./useContextMenu.f1d20705.js";import{g as wt}from"./get.7d2d7f8d.js";var Bt=200;function Ft(e,t,a,y){var _=-1,b=Ye,r=!0,p=e.length,k=[],A=t.length;if(!p)return k;a&&(t=Ve(t,He(a))),y?(b=Xe,r=!1):t.length>=Bt&&(b=ze,r=!1,t=new Re(t));e:for(;++_<p;){var S=e[_],o=a==null?S:a(S);if(S=y||S!==0?S:0,r&&o===o){for(var n=A;n--;)if(t[n]===o)continue e;k.push(S)}else b(t,o,y)||k.push(S)}return k}var Nt=qe(function(e,t){return de(e)?Ft(e,We(t,1,de,!0)):[]}),Dt=Nt;function te(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,y)=>a+te(e,y),""):Object.keys(t).reduce((a,y)=>a+(t[y]?te(e,y):""),""):""}function It(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${te(t,a)}`)}function Le(e){return[It(`${Ge}-${e}`)]}const Mt=e=>typeof e=="string",Ot=e=>e!==null&&typeof e=="object",xe=Symbol(),Ke=Symbol();function mt(e,t){if(!Ot(e)||!!e[Ke])return e;const{values:a,required:y,default:_,type:b,validator:r}=e,p=a||r?k=>{let A=!1,S=[];if(a&&(S=[...a,_],A||(A=S.includes(k))),r&&(A||(A=r(k))),!A&&S.length>0){const o=[...new Set(S)].map(n=>JSON.stringify(n)).join(", ");Je(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${o}], got value ${JSON.stringify(k)}.`)}return A}:void 0;return{type:typeof b=="object"&&Object.getOwnPropertySymbols(b).includes(xe)?b[xe]:b,required:!!y,default:_,validator:p,[Ke]:!0}}const $t=e=>_t(Object.entries(e).map(([t,a])=>[t,mt(a,t)]));var T=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(T||{});const Pt=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],Ut=$t({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1},treeWrapperClassName:String}),jt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Vt=ve({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:t}){const a=e,y=Ce(""),[_]=Le("tree-header"),b=Ze(),{t:r}=Qe(),p=M(()=>{const n=b.headerTitle||a.title;return["mr-1","w-full",{["ml-5"]:n}]}),k=M(()=>{const{checkable:n}=a,s=[{label:r("component.tree.expandAll"),value:T.EXPAND_ALL},{label:r("component.tree.unExpandAll"),value:T.UN_EXPAND_ALL,divider:n}];return n?[{label:r("component.tree.selectAll"),value:T.SELECT_ALL},{label:r("component.tree.unSelectAll"),value:T.UN_SELECT_ALL,divider:n},...s,{label:r("component.tree.checkStrictly"),value:T.CHECK_STRICTLY},{label:r("component.tree.checkUnStrictly"),value:T.CHECK_UN_STRICTLY}]:s});function A(n){var i,d,h,u;const{key:s}=n;switch(s){case T.SELECT_ALL:(i=a.checkAll)==null||i.call(a,!0);break;case T.UN_SELECT_ALL:(d=a.checkAll)==null||d.call(a,!1);break;case T.EXPAND_ALL:(h=a.expandAll)==null||h.call(a,!0);break;case T.UN_EXPAND_ALL:(u=a.expandAll)==null||u.call(a,!1);break;case T.CHECK_STRICTLY:t("strictly-change",!1);break;case T.CHECK_UN_STRICTLY:t("strictly-change",!0);break}}function S(n){t("search",n)}const o=ut(S,200);return $(()=>y.value,n=>{o(n)}),$(()=>a.searchText,n=>{n!==y.value&&(y.value=n)}),(n,s)=>(I(),U("div",{class:fe([c(_)(),"flex px-2 py-1.5 items-center"])},[c(b).headerTitle?et(n.$slots,"headerTitle",{key:0}):m("",!0),!c(b).headerTitle&&n.title?(I(),G(c(tt),{key:1,helpMessage:n.helpMessage},{default:j(()=>[ue(he(n.title),1)]),_:1},8,["helpMessage"])):m("",!0),n.search||n.toolbar?(I(),U("div",jt,[n.search?(I(),U("div",{key:0,class:fe(c(p))},[L(c(nt),{placeholder:c(r)("common.searchText"),size:"small",allowClear:"",value:y.value,"onUpdate:value":s[0]||(s[0]=i=>y.value=i)},null,8,["placeholder","value"])],2)):m("",!0),n.toolbar?(I(),G(c(dt),{key:1,onClick:s[1]||(s[1]=ot(()=>{},["prevent"]))},{overlay:j(()=>[L(c(at),{onClick:A},{default:j(()=>[(I(!0),U(Z,null,lt(c(k),i=>(I(),U(Z,{key:i.value},[L(c(rt),st(ct({key:i.value})),{default:j(()=>[ue(he(i.label),1)]),_:2},1040),i.divider?(I(),G(c(it),{key:0})):m("",!0)],64))),128))]),_:1})]),default:j(()=>[L(c(Q),{icon:"ion:ellipsis-vertical"})]),_:1})):m("",!0)])):m("",!0)],2))}}),Ht=({icon:e})=>e?Mt(e)?ht(Q,{icon:e,class:"mr-1"}):Q:null;function Rt(e,t){function a(o){const n=[],s=o||c(e),{key:i,children:d}=c(t);if(!d||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];n.push(u[i]);const g=u[d];g&&g.length&&n.push(...a(g))}return n}function y(o){const n=[],s=o||c(e),{key:i,children:d}=c(t);if(!d||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];u.disabled!==!0&&u.selectable!==!1&&n.push(u[i]);const g=u[d];g&&g.length&&n.push(...y(g))}return n}function _(o,n){const s=[],i=n||c(e),{key:d,children:h}=c(t);if(!h||!d)return s;for(let u=0;u<i.length;u++){const g=i[u],E=g[h];o===g[d]?(s.push(g[d]),E&&E.length&&s.push(...a(E))):E&&E.length&&s.push(..._(o,E))}return s}function b(o,n,s){if(!o)return;const i=s||c(e),{key:d,children:h}=c(t);if(!(!h||!d))for(let u=0;u<i.length;u++){const g=i[u],E=g[h];if(g[d]===o){i[u]=O(O({},i[u]),n);break}else E&&E.length&&b(o,n,g[h])}}function r(o=1,n,s=1){if(!o)return[];const i=[],d=n||c(e)||[];for(let h=0;h<d.length;h++){const u=d[h],{key:g,children:E}=c(t),z=g?u[g]:"",P=E?u[E]:[];i.push(z),P&&P.length&&s<o&&(s+=1,i.push(...r(o,P,s)))}return i}function p({parentKey:o=null,node:n,push:s="push"}){const i=ee(c(e));if(!o){i[s](n),e.value=i;return}const{key:d,children:h}=c(t);!h||!d||(ye(i,u=>{if(u[d]===o)return u[h]=u[h]||[],u[h][s](n),!0}),e.value=i)}function k({parentKey:o=null,list:n,push:s="push"}){const i=ee(c(e));if(!(!n||n.length<1))if(o){const{key:d,children:h}=c(t);if(!h||!d)return;ye(i,u=>{if(u[d]===o){u[h]=u[h]||[];for(let g=0;g<n.length;g++)u[h][s](n[g]);return e.value=i,!0}})}else for(let d=0;d<n.length;d++)i[s](n[d])}function A(o,n){if(!o)return;const s=n||c(e),{key:i,children:d}=c(t);if(!(!d||!i))for(let h=0;h<s.length;h++){const u=s[h],g=u[d];if(u[i]===o){s.splice(h,1);break}else g&&g.length&&A(o,u[d])}}function S(o,n,s){return!o&&o!==0?null:((n||c(e)).forEach(d=>{if((s==null?void 0:s.key)||(s==null?void 0:s.key)===0)return s;if(d.key===o){s=d;return}d.children&&d.children.length&&(s=S(o,d.children,s))}),s||null)}return{deleteNodeByKey:A,insertNodeByKey:p,insertNodesByKey:k,filterByLevel:r,updateNodeByKey:b,getAllKeys:a,getChildrenKeys:_,getEnabledKeys:y,getSelectedNode:S}}function Yt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!xt(e)}var Zt=ve({name:"BasicTree",inheritAttrs:!1,props:Ut,emits:Pt,setup(e,{attrs:t,slots:a,emit:y,expose:_}){const[b]=Le("tree"),r=pe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=pe({startSearch:!1,searchText:"",searchData:[]}),k=Ce([]),[A]=Tt(),S=M(()=>{const{fieldNames:l}=e;return O({children:"children",title:"title",key:"key"},l)}),o=M(()=>{let l=ie(O(O({blockNode:!0},t),e),{expandedKeys:r.expandedKeys,selectedKeys:r.selectedKeys,checkedKeys:r.checkedKeys,checkStrictly:r.checkStrictly,fieldNames:c(S),"onUpdate:expandedKeys":f=>{r.expandedKeys=f,y("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{r.selectedKeys=f,y("update:selectedKeys",f)},onCheck:(f,v)=>{let x=X(r.checkedKeys);if(ft(x)&&p.startSearch){const C=v.node.eventKey;x=Dt(x,z(C)),v.checked&&x.push(C),r.checkedKeys=x}else r.checkedKeys=f;const K=X(r.checkedKeys);y("update:value",K),y("check",K,v)},onRightClick:Ee});return yt(l,"treeData","class")}),n=M(()=>p.startSearch?p.searchData:c(k)),s=M(()=>!n.value||n.value.length===0),{deleteNodeByKey:i,insertNodeByKey:d,insertNodesByKey:h,filterByLevel:u,updateNodeByKey:g,getAllKeys:E,getChildrenKeys:z,getEnabledKeys:P,getSelectedNode:Ae}=Rt(k,S);function _e(l,f){return!f&&e.renderIcon&&J(e.renderIcon)?e.renderIcon(l):f}function Ee(v){return oe(this,arguments,function*({event:l,node:f}){var F;const{rightMenuList:x=[],beforeRightClick:K}=e;let C={event:l,items:[]};if(K&&J(K)){let w=yield K(f,l);Array.isArray(w)?C.items=w:Object.assign(C,w)}else C.items=x;!((F=C.items)!=null&&F.length)||(C.items=C.items.filter(w=>!w.hidden),A(C))})}function H(l){r.expandedKeys=l}function Te(){return r.expandedKeys}function ne(l){r.selectedKeys=l}function we(){return r.selectedKeys}function ae(l){r.checkedKeys=l}function Be(){return r.checkedKeys}function le(l){r.checkedKeys=l?P():[]}function q(l){r.expandedKeys=l?E():[]}function Fe(l){r.checkStrictly=l}$(()=>e.searchValue,l=>{l!==p.searchText&&(p.searchText=l)},{immediate:!0}),$(()=>e.treeData,l=>{l&&W(p.searchText)});function W(l){if(l!==p.searchText&&(p.searchText=l),y("update:searchValue",l),!l){p.startSearch=!1;return}const{filterFn:f,checkable:v,expandOnSearch:x,checkOnSearch:K,selectedOnSearch:C}=c(e);p.startSearch=!0;const{title:F,key:w}=c(S),N=[];if(p.searchData=pt(c(k),B=>{var R,Y;const D=f?f(l,B,c(S)):(Y=(R=B[F])==null?void 0:R.includes(l))!=null?Y:!1;return D&&N.push(B[w]),D},c(S)),x){const B=gt(p.searchData).map(D=>D[w]);B&&B.length&&H(B)}K&&v&&N.length&&ae(N),C&&N.length&&ne(N)}function Ne(l,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!r.expandedKeys.includes(l))H([...r.expandedKeys,l]);else{const v=[...r.expandedKeys],x=v.findIndex(K=>K===l);x!==-1&&v.splice(x,1),H(v)}}V(()=>{k.value=e.treeData}),kt(()=>{const l=parseInt(e.defaultExpandLevel);l>0?r.expandedKeys=u(l):e.defaultExpandAll&&q(!0)}),V(()=>{r.expandedKeys=e.expandedKeys}),V(()=>{r.selectedKeys=e.selectedKeys}),V(()=>{r.checkedKeys=e.checkedKeys}),$(()=>e.value,()=>{r.checkedKeys=X(e.value||[])},{immediate:!0}),$(()=>r.checkedKeys,()=>{const l=X(r.checkedKeys);y("update:value",l),y("change",l)}),V(()=>{r.checkStrictly=e.checkStrictly});const De={setExpandedKeys:H,getExpandedKeys:Te,setSelectedKeys:ne,getSelectedKeys:we,setCheckedKeys:ae,getCheckedKeys:Be,insertNodeByKey:d,insertNodesByKey:h,deleteNodeByKey:i,updateNodeByKey:g,getSelectedNode:Ae,checkAll:le,expandAll:q,filterByLevel:l=>{r.expandedKeys=u(l)},setSearchValue:l=>{W(l)},getSearchValue:()=>p.searchText};function Ie(l){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((v,x)=>{var C;let K=!0;return J(v.show)?K=(C=v.show)==null?void 0:C.call(v,l):be(v.show)&&(K=v.show),K?L("span",{key:x,class:b("action")},[v.render(l)]):null})}const Me=M(()=>{const l=ee(n.value);return St(l,(f,v)=>{var re;const x=p.searchText,{highlight:K}=c(e),{title:C,key:F,children:w}=c(S),N=_e(f,f.icon),B=wt(f,C),D=x?B.indexOf(x):-1,R=p.startSearch&&!Lt(x)&&K&&D!==-1,Y=`color: ${be(K)?"#f50":K}`,Oe=R?L("span",{class:(re=c(o))!=null&&re.blockNode?`${b("content")}`:""},[L("span",null,[B.substr(0,D)]),L("span",{style:Y},[x]),L("span",null,[B.substr(D+x.length)])]):B;return f[C]=L("span",{class:`${b("title")} pl-2`,onClick:Ne.bind(null,f[F],f[w])},[a!=null&&a.title?At(a,"title",f):L(Z,null,[N&&L(Ht,{icon:N},null),Oe,L("span",{class:b("actions")},[Ie(f)])])]),f}),l});return _(De),()=>{let l;const{title:f,helpMessage:v,toolbar:x,search:K,checkable:C}=e,F=f||x||K||a.headerTitle,w={height:"calc(100% - 38px)"};return L("div",{class:[b(),"h-full",t.class]},[F&&L(Vt,{checkable:C,checkAll:le,expandAll:q,title:f,search:K,toolbar:x,helpMessage:v,onStrictlyChange:Fe,onSearch:W,searchText:p.searchText},Yt(l=bt(a))?l:{default:()=>[l]}),L(Kt,{wrapperClassName:c(e.treeWrapperClassName),spinning:c(e.loading),tip:"\u52A0\u8F7D\u4E2D..."},{default:()=>[ge(L(vt,{style:w},{default:()=>[L(Et,Ct(c(o),{showIcon:!1,treeData:Me.value}),null)]}),[[ke,!c(s)]]),ge(L(Se,{image:Se.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ke,c(s)]])]})])}}});export{Zt as _};
