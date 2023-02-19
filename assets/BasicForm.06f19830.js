var Le=Object.defineProperty;var ve=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ge=(e,i,o)=>i in e?Le(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,O=(e,i)=>{for(var o in i||(i={}))Pe.call(i,o)&&ge(e,o,i[o]);if(ve)for(var o of ve(i))Me.call(i,o)&&ge(e,o,i[o]);return e};var C=(e,i,o)=>new Promise((m,b)=>{var h=l=>{try{r(o.next(l))}catch(u){b(u)}},c=l=>{try{r(o.throw(l))}catch(u){b(u)}},r=l=>l.done?m(l.value):Promise.resolve(l.value).then(h,c);r((o=o.apply(e,i)).next())});import{bi as Ne,bh as ke,a as Ce,cW as _e,cX as xe,aE as B,f as _,au as De,c as ze,aw as Y,o as q,j as X,z as x,i as Ye,n as le,aA as H,ax as te,B as ue,t as fe,l as ie,bm as He,aB as re,br as W,cY as K,av as ne,k as n,aF as ce,cZ as be,c_ as J,c$ as pe,ah as G,aL as We,cR as Ue,a7 as ee,d0 as qe,cz as Ge,bt as Ve,bq as Xe,al as he,am as Be,d1 as Fe,d2 as we,d3 as je,d4 as Ke,L as Je,w as Oe,v as Q,b as Ze,N as Qe,h as et,az as de,F as tt,ay as Te,aC as me,D as nt}from"./index.327fb789.js";/* empty css              *//* empty css              */import{d as ot,h as st,a as Re,_ as at}from"./FormItem.vue_vue_type_script_lang.2b94fb67.js";import"./index.fd34655f.js";import{F as $e}from"./Form.f9cbd672.js";import{C as Ie}from"./index.a6b14919.js";import{u as it}from"./uniqBy.449933bc.js";import{u as rt}from"./index.907eaa07.js";import{R as ct}from"./index.a3264c1c.js";const Ee=Symbol();function lt(e){return ke(e,Ee)}function ut(){return Ne(Ee)}const ft=Ce({name:"BasicFormAction",components:{FormItem:$e.Item,Button:_e,BasicArrow:xe,[Ie.name]:Ie},props:{showActionButtonGroup:B.bool.def(!0),showResetButton:B.bool.def(!0),showSubmitButton:B.bool.def(!0),showAdvancedButton:B.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:B.number.def(6),isAdvanced:B.bool,hideAdvanceBtn:B.bool},emits:["toggle-advanced"],setup(e,{emit:i}){const{t:o}=ze(),m=_(()=>{const{showAdvancedButton:r,actionSpan:l,actionColOptions:u}=e,v=24-l,w=r?{span:v<6?24:v}:{};return O(O({style:{textAlign:"right"},span:r?6:4},w),u)}),b=_(()=>Object.assign({text:o("common.resetText")},e.resetButtonOptions)),h=_(()=>Object.assign({text:o("common.queryText")},e.submitButtonOptions));function c(){i("toggle-advanced")}return O({t:o,actionColOpt:m,getResetBtnOptions:b,getSubmitBtnOptions:h,toggleAdvanced:c},ut())}});function dt(e,i,o,m,b,h){const c=Y("Button"),r=Y("BasicArrow"),l=Y("FormItem"),u=Y("a-col");return e.showActionButtonGroup?(q(),X(u,re(te({key:0},e.actionColOpt)),{default:x(()=>[Ye("div",{style:He([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[le(l,null,{default:x(()=>[H(e.$slots,"resetBefore"),e.showResetButton?(q(),X(c,te({key:0,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:x(()=>[ue(fe(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):ie("",!0),H(e.$slots,"submitBefore"),e.showSubmitButton?(q(),X(c,te({key:1,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:x(()=>[ue(fe(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):ie("",!0),H(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(q(),X(c,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:x(()=>[ue(fe(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),le(r,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):ie("",!0),H(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):ie("",!0)}var mt=De(ft,[["render",dt]]);function pt(e,i,o){const m=/^\[(.+)\]$/;if(m.test(e)){const b=e.match(m);if(b&&b[1]){const h=b[1].split(",");return i=Array.isArray(i)?i:[i],h.forEach((c,r)=>{be(o,c.trim(),i[r])}),!0}}}function bt(e,i,o){const m=/^\{(.+)\}$/;if(m.test(e)){const b=e.match(m);if(b&&b[1]){const h=b[1].split(",");return i=W(i)?i:{},h.forEach(c=>{be(o,c.trim(),i[c.trim()])}),!0}}}function ht({defaultValueRef:e,getSchema:i,formModel:o,getProps:m}){function b(r){var u,v;if(!W(r))return{};const l={};for(const w of Object.entries(r)){let[,s]=w;const[j]=w;if(!j||K(s)&&s.length===0||ne(s))continue;const D=n(m).transformDateFunc;W(s)&&(s=D==null?void 0:D(s)),K(s)&&((u=s[0])==null?void 0:u.format)&&((v=s[1])==null?void 0:v.format)&&(s=s.map(L=>D==null?void 0:D(L))),ce(s)&&(s===""?s=void 0:s=s.trim()),!pt(j,s,l)&&!bt(j,s,l)&&be(l,j,s)}return h(l)}function h(r){const l=n(m).fieldMapToTime;if(!l||!Array.isArray(l))return r;for(const[u,[v,w],s="YYYY-MM-DD"]of l){if(!u||!v||!w)continue;if(!r[u]){Reflect.deleteProperty(r,u);continue}const[j,D]=r[u],[L,p]=Array.isArray(s)?s:[s,s];r[v]=J(j).format(L),r[w]=J(D).format(p),Reflect.deleteProperty(r,u)}return r}function c(){const r=n(i),l={};r.forEach(u=>{const{defaultValue:v}=u;pe(v)||(l[u.field]=v,o[u.field]===void 0&&(o[u.field]=v))}),e.value=G(l)}return{handleFormValues:b,initDefault:c}}const U=24;function yt({advanceState:e,emit:i,getProps:o,getSchema:m,formModel:b,defaultValueRef:h}){const c=We(),{realWidthRef:r,screenEnum:l,screenRef:u}=Ue(),v=_(()=>{if(!e.isAdvanced)return 0;const p=n(o).emptySpan||0;if(Ge(p))return p;if(W(p)){const{span:F=0}=p,M=n(u);return p[M.toLowerCase()]||F||0}return 0}),w=Ve(D,30);ee([()=>n(m),()=>e.isAdvanced,()=>n(r)],()=>{const{showAdvancedButton:p}=n(o);p&&w()},{immediate:!0});function s(p,F=0,M=!1){const P=n(r),R=parseInt(p.md)||parseInt(p.xs)||parseInt(p.sm)||p.span||U,V=parseInt(p.lg)||R,N=parseInt(p.xl)||V,t=parseInt(p.xxl)||N;return P<=l.LG?F+=R:P<l.XL?F+=V:P<l.XXL?F+=N:F+=t,M?(e.hideAdvanceBtn=!1,F<=U*2?(e.hideAdvanceBtn=!0,e.isAdvanced=!0):F>U*2&&F<=U*(n(o).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced),{isAdvanced:e.isAdvanced,itemColSum:F}):F>U*(n(o).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:F}:{isAdvanced:!0,itemColSum:F}}const j=qe({});function D(){var P;let p=0,F=0;const{baseColProps:M={}}=n(o);for(const R of n(m)){const{show:V,colProps:N}=R;let t=!0;if(Xe(V)&&(t=V),ne(V)&&(t=V({schema:R,model:b,field:R.field,values:O(O({},n(h)),b)})),t&&(N||M)){const{itemColSum:a,isAdvanced:g}=s(O(O({},M),N),p);p=a||0,g&&(F=p),j[R.field]=g}}(P=c==null?void 0:c.proxy)==null||P.$forceUpdate(),e.actionSpan=F%U+n(v),s(n(o).actionColOptions||{span:U},p,!0),i("advanced-change")}function L(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:L,fieldsIsAdvancedMap:j}}function At({emit:e,getProps:i,formModel:o,getSchema:m,defaultValueRef:b,formElRef:h,schemaRef:c,handleFormValues:r}){function l(){return C(this,null,function*(){const{resetFunc:t,submitOnReset:a}=n(i);t&&ne(t)&&(yield t()),n(h)&&(Object.keys(o).forEach(f=>{const d=n(m).find($=>$.field===f),A=(d==null?void 0:d.component)&&ot.includes(d.component),T=G(b.value[f]);o[f]=A?T||"":T}),he(()=>R()),e("reset",Be(o)),a&&N())})}function u(t){return C(this,null,function*(){const a=n(m).map(A=>A.field).filter(Boolean),g=".",f=a.filter(A=>A.indexOf(g)>=0),d=[];Object.keys(t).forEach(A=>{const T=n(m).find(S=>S.field===A);let $=t[A];const oe=Reflect.has(t,A);$=st(T==null?void 0:T.component,$);const{componentProps:se}=T||{};let E=se;if(typeof se=="function"&&(E=E({formModel:n(o)})),oe&&a.includes(A)){if(F(A))if(Array.isArray($)){const S=[];for(const z of $)S.push(z?J(z):null);n(o)[A]=S}else n(o)[A]=$?E!=null&&E.valueFormat?$:J($):null;else n(o)[A]=$;E!=null&&E.onChange&&(E==null||E.onChange($)),d.push(A)}else f.forEach(S=>{try{const z=S.split(".").reduce((Z,y)=>Z[y],t);Fe(z)&&(n(o)[S]=n(z),d.push(S))}catch(z){Fe(b.value[S])&&(n(o)[S]=G(n(b.value[S])))}})}),M(d).catch(A=>{})})}function v(t){return C(this,null,function*(){const a=G(n(m));if(!t)return;let g=ce(t)?[t]:t;ce(t)&&(g=[t]);for(const f of g)w(f,a);c.value=a})}function w(t,a){if(ce(t)){const g=a.findIndex(f=>f.field===t);g!==-1&&(delete o[t],a.splice(g,1))}}function s(t,a,g=!1){return C(this,null,function*(){const f=G(n(m)),d=f.findIndex(T=>T.field===a),A=W(t)?[t]:t;if(!a||d===-1||g){g?f.unshift(...A):f.push(...A),c.value=f,L(t);return}d!==-1&&f.splice(d+1,0,...A),L(t),c.value=f})}function j(t){return C(this,null,function*(){let a=[];if(W(t)&&a.push(t),K(t)&&(a=[...t]),!a.every(f=>f.component==="Divider"||Reflect.has(f,"field")&&f.field)){we("All children of the form Schema array that need to be updated must contain the `field` field");return}c.value=a})}function D(t){return C(this,null,function*(){let a=[];if(W(t)&&a.push(t),K(t)&&(a=[...t]),!a.every(d=>d.component==="Divider"||Reflect.has(d,"field")&&d.field)){we("All children of the form Schema array that need to be updated must contain the `field` field");return}const f=[];n(m).forEach(d=>{let A;if(a.forEach(T=>{d.field===T.field&&(A=T)}),A!==void 0&&d.field===A.field){const T=je(d,A);f.push(T)}else f.push(d)}),L(f),c.value=it(f,"field")})}function L(t){let a=[];W(t)&&a.push(t),K(t)&&(a=[...t]);const g={},f=p();a.forEach(d=>{d.component!="Divider"&&Reflect.has(d,"field")&&d.field&&!pe(d.defaultValue)&&(!(d.field in f)||pe(f[d.field])||Ke(f[d.field]))&&(g[d.field]=d.defaultValue)}),u(g)}function p(){return n(h)?r(Be(n(o))):{}}function F(t){return n(m).some(a=>a.field===t?Re.includes(a.component):!1)}function M(t){return C(this,null,function*(){var a;return(a=n(h))==null?void 0:a.validateFields(t)})}function P(t){return C(this,null,function*(){var a;return yield(a=n(h))==null?void 0:a.validate(t)})}function R(t){return C(this,null,function*(){var a;yield(a=n(h))==null?void 0:a.clearValidate(t)})}function V(t,a){return C(this,null,function*(){var g;yield(g=n(h))==null?void 0:g.scrollToField(t,a)})}function N(t){return C(this,null,function*(){t&&t.preventDefault();const{submitFunc:a}=n(i);if(a&&ne(a)){yield a();return}if(!!n(h))try{const f=yield P(),d=r(f);e("submit",d)}catch(f){throw new Error(f)}})}return{handleSubmit:N,clearValidate:R,validate:P,validateFields:M,getFieldsValue:p,updateSchema:D,resetSchema:j,appendSchemaByField:s,removeSchemaByField:v,resetFields:l,setFieldsValue:u,scrollToField:V}}function vt(b){return C(this,arguments,function*({getSchema:e,getProps:i,formElRef:o,isInitedDefault:m}){Je(()=>C(this,null,function*(){if(n(m)||!n(i).autoFocusFirstItem)return;yield he();const h=n(e),c=n(o),r=c==null?void 0:c.$el;if(!c||!r||!h||h.length===0||!h[0].component.includes("Input"))return;const u=r.querySelector(".ant-row:first-child input");!u||u==null||u.focus()}))})}const gt={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:B.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:B.bool.def(!0),autoSubmitOnEnter:B.bool.def(!1),submitOnReset:B.bool,submitOnChange:B.bool,size:B.oneOf(["default","small","large"]).def("default"),disabled:B.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:B.bool,transformDateFunc:{type:Function,default:e=>{var i,o;return(o=(i=e==null?void 0:e.format)==null?void 0:i.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?o:e}},rulesMessageJoinLabel:B.bool.def(!0),autoAdvancedLine:B.number.def(3),alwaysShowLines:B.number.def(1),showActionButtonGroup:B.bool.def(!0),actionColOptions:Object,showResetButton:B.bool.def(!0),autoFocusFirstItem:B.bool,resetButtonOptions:Object,showSubmitButton:B.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:B.bool,labelCol:Object,layout:B.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:B.bool,labelAlign:B.string,rowProps:Object};const Bt=Ce({name:"BasicForm",components:{FormItem:at,Form:$e,Row:ct,FormAction:mt},props:gt,emits:["advanced-change","reset","submit","register","field-value-change"],setup(e,{emit:i,attrs:o}){const m=Oe({}),b=rt(),h=Oe({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),c=Q({}),r=Q(!1),l=Q({}),u=Q(null),v=Q(null),{prefixCls:w}=Ze("basic-form"),s=_(()=>O(O({},e),n(l))),j=_(()=>[w,{[`${w}--compact`]:n(s).compact}]),D=_(()=>{const{baseRowStyle:y={},rowProps:I}=n(s);return O({style:y},I)}),L=_(()=>O(O(O({},o),e),n(s))),p=_(()=>{const y=n(u)||n(s).schemas;for(const I of y){const{defaultValue:k,component:ae,isHandleDateDefaultValue:ye=!0}=I;if(ye&&k&&Re.includes(ae))if(!Array.isArray(k))I.defaultValue=J(k);else{const Ae=[];k.forEach(Se=>{Ae.push(J(Se))}),I.defaultValue=Ae}}return n(s).showAdvancedButton?G(y.filter(I=>I.component!=="Divider")):G(y)}),{handleToggleAdvanced:F,fieldsIsAdvancedMap:M}=yt({advanceState:h,emit:i,getProps:s,getSchema:p,formModel:m,defaultValueRef:c}),{handleFormValues:P,initDefault:R}=ht({getProps:s,defaultValueRef:c,getSchema:p,formModel:m});vt({getSchema:p,getProps:s,isInitedDefault:r,formElRef:v});const{handleSubmit:V,setFieldsValue:N,clearValidate:t,validate:a,validateFields:g,getFieldsValue:f,updateSchema:d,resetSchema:A,appendSchemaByField:T,removeSchemaByField:$,resetFields:oe,scrollToField:se}=At({emit:i,getProps:s,formModel:m,getSchema:p,defaultValueRef:c,formElRef:v,schemaRef:u,handleFormValues:P});lt({resetAction:oe,submitAction:V}),ee(()=>n(s).model,()=>{const{model:y}=n(s);!y||N(y)},{immediate:!0}),ee(()=>n(s).schemas,y=>{A(y!=null?y:[])}),ee(()=>p.value,y=>{he(()=>{var I;(I=b==null?void 0:b.redoModalHeight)==null||I.call(b)}),!n(r)&&y!=null&&y.length&&(R(),r.value=!0)}),ee(()=>m,Ve(()=>{n(s).submitOnChange&&V()},300),{deep:!0});function E(y){return C(this,null,function*(){l.value=je(n(l)||{},y)})}function S(y,I,k){m[y]=I;const{validateTrigger:ae}=n(L);ne(k.dynamicRules)||K(k.rules)||((!ae||ae==="change")&&g([y]).catch(ye=>{}),i("field-value-change",y,I))}function z(y){const{autoSubmitOnEnter:I}=n(s);if(!!I&&y.key==="Enter"&&y.target&&y.target instanceof HTMLElement){const k=y.target;k&&k.tagName&&k.tagName.toUpperCase()=="INPUT"&&V()}}const Z={getFieldsValue:f,setFieldsValue:N,resetFields:oe,updateSchema:d,resetSchema:A,setProps:E,removeSchemaByField:$,appendSchemaByField:T,clearValidate:t,validateFields:g,validate:a,submit:V,scrollToField:se};return Qe(()=>{R(),i("register",Z)}),O({getBindValue:L,handleToggleAdvanced:F,handleEnterPress:z,formModel:m,defaultValueRef:c,advanceState:h,getRow:D,getProps:s,formElRef:v,getSchema:p,formActionType:Z,setFormModel:S,getFormClass:j,getFormActionBindProps:_(()=>O(O({},s.value),h)),fieldsIsAdvancedMap:M},Z)}});function Ft(e,i,o,m,b,h){const c=Y("FormItem"),r=Y("FormAction"),l=Y("Row"),u=Y("Form");return q(),X(u,te(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:nt(e.handleEnterPress,["enter"])}),{default:x(()=>[le(l,re(me(e.getRow)),{default:x(()=>[H(e.$slots,"formHeader"),(q(!0),et(tt,null,de(e.getSchema,v=>(q(),X(c,{key:v.field,isAdvanced:e.fieldsIsAdvancedMap[v.field],tableAction:e.tableAction,formActionType:e.formActionType,schema:v,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},Te({_:2},[de(Object.keys(e.$slots),w=>({name:w,fn:x(s=>[H(e.$slots,w,re(me(s||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))),128)),le(r,te(e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),Te({_:2},[de(["resetBefore","submitBefore","advanceBefore","advanceAfter"],v=>({name:v,fn:x(w=>[H(e.$slots,v,re(me(w||{})))])}))]),1040,["onToggleAdvanced"]),H(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}var St=De(Bt,[["render",Ft]]);export{St as B};
