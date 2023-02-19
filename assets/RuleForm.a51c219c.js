var f=(e,u,r)=>new Promise((p,i)=>{var d=o=>{try{l(r.next(o))}catch(s){i(s)}},t=o=>{try{l(r.throw(o))}catch(s){i(s)}},l=o=>o.done?p(o.value):Promise.resolve(o.value).then(d,t);l((r=r.apply(e,u)).next())});import{B as g}from"./BasicForm.06f19830.js";import"./componentMap.b6a8f2da.js";import{u as b}from"./useForm.28f6b429.js";import"./RadioButtonGroup.b84bfba6.js";import{au as A,a as P,cD as E,aw as B,o as v,j as _,z as a,i as k,n,B as c,E as D}from"./index.327fb789.js";import{P as h}from"./index.8a211077.js";import{i as V}from"./system.9952e87f.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.2b94fb67.js";import"./index.49ca6065.js";import"./index.fd34655f.js";import"./_baseIteratee.e708f3dc.js";import"./get.7d2d7f8d.js";import"./DeleteOutlined.0283d414.js";import"./index.0382e6bb.js";import"./useRefs.4c25035d.js";import"./Form.f9cbd672.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./useSize.60585e88.js";import"./index.a6b14919.js";import"./uniqBy.449933bc.js";import"./index.907eaa07.js";import"./useWindowSizeFn.54c185ab.js";import"./FullscreenOutlined.434c612e.js";import"./index.a3264c1c.js";import"./index.a5fde969.js";import"./Checkbox.27815f1e.js";import"./index.1552bc6e.js";import"./index.4ee776ce.js";import"./index.32a955cb.js";import"./index.735a6694.js";import"./index.54832512.js";import"./index.91f40545.js";import"./useFormItem.16f3f9a0.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./transButton.d6d2fca7.js";import"./index.27c1cc60.js";import"./index.877ce531.js";import"./index.e2db19c1.js";import"./isNumber.b7d57b8f.js";import"./uuid.2b29000c.js";import"./download.c4e457d1.js";import"./base64Conver.08b9f4ec.js";import"./index.fa882cfc.js";import"./index.7ebc4ed9.js";import"./index.945a3551.js";import"./index.62f637e8.js";import"./useContentViewHeight.1136c467.js";import"./ArrowLeftOutlined.dbd8d954.js";import"./index.d1088aad.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}],onChange:e=>{}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,u)=>f(void 0,null,function*(){return u?u==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,u){return new Promise((r,p)=>{V(u).then(()=>r()).catch(i=>{p(i.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],q=P({components:{BasicForm:g,CollapseContainer:E,PageWrapper:h},setup(){const{createMessage:e}=D(),[u,{validateFields:r,clearValidate:p,getFieldsValue:i,resetFields:d,setFieldsValue:t}]=b({labelWidth:120,schemas:C,actionColOptions:{span:24}});function l(){return f(this,null,function*(){try{const m=yield r()}catch(m){}})}function o(){return f(this,null,function*(){p()})}function s(){const m=i();e.success("values:"+JSON.stringify(m))}function F(){t({field1:1111,field4:["1"],field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:u,schemas:C,handleSubmit:m=>{e.success("click search,values:"+JSON.stringify(m))},getFormValues:s,setFormValues:F,validateForm:l,resetValidate:o,resetFields:d}}}),y={class:"mb-4"};function S(e,u,r,p,i,d){const t=B("a-button"),l=B("BasicForm"),o=B("CollapseContainer"),s=B("PageWrapper");return v(),_(s,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:a(()=>[k("div",y,[n(t,{onClick:e.validateForm,class:"mr-2"},{default:a(()=>[c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 ")]),_:1},8,["onClick"]),n(t,{onClick:e.resetValidate,class:"mr-2"},{default:a(()=>[c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F ")]),_:1},8,["onClick"]),n(t,{onClick:e.getFormValues,class:"mr-2"},{default:a(()=>[c(" \u83B7\u53D6\u8868\u5355\u503C ")]),_:1},8,["onClick"]),n(t,{onClick:e.setFormValues,class:"mr-2"},{default:a(()=>[c(" \u8BBE\u7F6E\u8868\u5355\u503C ")]),_:1},8,["onClick"]),n(t,{onClick:e.resetFields,class:"mr-2"},{default:a(()=>[c(" \u91CD\u7F6E ")]),_:1},8,["onClick"])]),n(o,{title:"\u8868\u5355\u6821\u9A8C"},{default:a(()=>[n(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var we=A(q,[["render",S]]);export{we as default};
