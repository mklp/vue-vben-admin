import{B as c}from"./BasicForm.06f19830.js";import"./componentMap.b6a8f2da.js";import{u as a}from"./useForm.28f6b429.js";import"./RadioButtonGroup.b84bfba6.js";import{au as B,a as d,cD as f,aw as r,o as b,j as P,z as n,n as t}from"./index.327fb789.js";import{P as h}from"./index.8a211077.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.2b94fb67.js";import"./index.49ca6065.js";import"./index.fd34655f.js";import"./_baseIteratee.e708f3dc.js";import"./get.7d2d7f8d.js";import"./DeleteOutlined.0283d414.js";import"./index.0382e6bb.js";import"./useRefs.4c25035d.js";import"./Form.f9cbd672.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./useSize.60585e88.js";import"./index.a6b14919.js";import"./uniqBy.449933bc.js";import"./index.907eaa07.js";import"./useWindowSizeFn.54c185ab.js";import"./FullscreenOutlined.434c612e.js";import"./index.a3264c1c.js";import"./index.a5fde969.js";import"./Checkbox.27815f1e.js";import"./index.1552bc6e.js";import"./index.4ee776ce.js";import"./index.32a955cb.js";import"./index.735a6694.js";import"./index.54832512.js";import"./index.91f40545.js";import"./useFormItem.16f3f9a0.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./transButton.d6d2fca7.js";import"./index.27c1cc60.js";import"./index.877ce531.js";import"./index.e2db19c1.js";import"./isNumber.b7d57b8f.js";import"./uuid.2b29000c.js";import"./download.c4e457d1.js";import"./base64Conver.08b9f4ec.js";import"./index.fa882cfc.js";import"./index.7ebc4ed9.js";import"./index.945a3551.js";import"./index.62f637e8.js";import"./useContentViewHeight.1136c467.js";import"./ArrowLeftOutlined.dbd8d954.js";import"./index.d1088aad.js";const m=()=>[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}];function C(){return[{field:"field10",component:"Input",label:"\u5B57\u6BB510",colProps:{span:8}},{field:"field11",component:"Input",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field12",component:"Input",label:"\u5B57\u6BB512",colProps:{span:8}},{field:"field13",component:"Input",label:"\u5B57\u6BB513",colProps:{span:8}}]}const F=d({components:{BasicForm:c,CollapseContainer:f,PageWrapper:h},setup(){const[o]=a({labelWidth:120,schemas:m(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),p=[];for(let e=14;e<30;e++)p.push({field:"field"+e,component:"Input",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[i]=a({labelWidth:120,schemas:[...m(),...C(),{field:"",component:"Divider",label:"\u66F4\u591A\u5B57\u6BB5"},...p],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:i}}});function g(o,p,i,e,_,A){const l=r("BasicForm"),u=r("CollapseContainer"),s=r("PageWrapper");return b(),P(s,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:n(()=>[t(u,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:n(()=>[t(l,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(u,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:n(()=>[t(l,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var Ao=B(F,[["render",g]]);export{Ao as default};
