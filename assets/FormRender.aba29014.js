import C from"./index.dc9c7c32.js";import{a as g,au as y,aw as t,o as m,j as n,z as p,h as s,F as a,az as i,ay as v,aA as R}from"./index.327fb789.js";/* empty css              */import{R as $}from"./index.a3264c1c.js";import{C as k}from"./index.a6b14919.js";import"./formItemConfig.946ed330.js";import"./componentMap.b6a8f2da.js";import"./index.a5fde969.js";import"./Checkbox.27815f1e.js";import"./index.1552bc6e.js";import"./index.4ee776ce.js";import"./index.32a955cb.js";import"./index.735a6694.js";import"./index.54832512.js";import"./index.91f40545.js";import"./index.49ca6065.js";import"./useFormItem.16f3f9a0.js";import"./RadioButtonGroup.b84bfba6.js";import"./get.7d2d7f8d.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./index.fd34655f.js";import"./_baseIteratee.e708f3dc.js";import"./DeleteOutlined.0283d414.js";import"./index.0382e6bb.js";import"./useRefs.4c25035d.js";import"./Form.f9cbd672.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./useSize.60585e88.js";import"./transButton.d6d2fca7.js";import"./index.27c1cc60.js";import"./index.907eaa07.js";import"./useWindowSizeFn.54c185ab.js";import"./FullscreenOutlined.434c612e.js";import"./index.877ce531.js";import"./index.e2db19c1.js";import"./isNumber.b7d57b8f.js";import"./uuid.2b29000c.js";import"./download.c4e457d1.js";import"./base64Conver.08b9f4ec.js";import"./index.fa882cfc.js";import"./index.7ebc4ed9.js";import"./index.191592e0.js";import"./useFormDesignState.65089724.js";const w=g({name:"FormRender",components:{VFormItem:C,Row:$,Col:k},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function D(o,e,M,b,j,P){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(m(),n(d,{key:0,class:"grid-row"},{default:p(()=>[(m(!0),s(a,null,i(o.schema.columns,(r,c)=>(m(),n(f,{class:"grid-col",key:c,span:r.span},{default:p(()=>[(m(!0),s(a,null,i(r.children,(F,h)=>(m(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(m(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=r=>o.$emit("change",{schema:o.schema,value:r})),onSubmit:e[1]||(e[1]=r=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=r=>o.$emit("reset"))},v({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:p(()=>[R(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}var $o=y(w,[["render",D]]);export{$o as default};
