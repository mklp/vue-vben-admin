import{a as v,b6 as k,f as g,au as b,aw as D,o as I,h as N,i as d,n as i,q as p,bl as m}from"./index.327fb789.js";import{c as O}from"./index.191592e0.js";import{u as $}from"./useFormDesignState.65089724.js";import"./isNumber.b7d57b8f.js";const B=v({name:"FormNodeOperate",components:{Icon:k},props:{schema:{type:Object,default:()=>({})},currentItem:{type:Object,default:()=>({})}},setup(e){const{formConfig:o,formDesignMethods:s}=$();return{activeClass:g(()=>e.schema.key===e.currentItem.key?"active":"unactivated"),handleDelete:()=>{const n=t=>{t.some((l,a)=>{var c;const{component:y,key:h}=l;if(["Grid","Tabs"].includes(y)&&((c=l.columns)==null||c.forEach(r=>n(r.children))),h===e.currentItem.key){let r=t.length===1?{component:""}:t.length-1>a?t[a+1]:t[a-1];return s.handleSetSelectItem(r),O(t,a),!0}})};n(o.value.schemas)},handleCopy:()=>{s.handleCopy()}}}}),F={class:"copy-delete-box"};function S(e,o,s,u,f,C){const n=D("Icon");return I(),N("div",F,[d("a",{class:p(["copy",e.activeClass]),onClick:o[0]||(o[0]=m((...t)=>e.handleCopy&&e.handleCopy(...t),["stop"]))},[i(n,{icon:"ant-design:copy-outlined"})],2),d("a",{class:p(["delete",e.activeClass]),onClick:o[1]||(o[1]=m((...t)=>e.handleDelete&&e.handleDelete(...t),["stop"]))},[i(n,{icon:"ant-design:delete-outlined"})],2)])}var V=b(B,[["render",S]]);export{V as default};
