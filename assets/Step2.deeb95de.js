var f=(n,m,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(p){r(p)}},s=o=>{try{t(i.throw(o))}catch(p){r(p)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,s);t((i=i.apply(n,m)).next())});import{B as v}from"./BasicForm.06f19830.js";import"./componentMap.b6a8f2da.js";import{u as E}from"./useForm.28f6b429.js";import"./RadioButtonGroup.b84bfba6.js";import{step2Schemas as b}from"./data.1866c55a.js";import{a as x,au as g,aw as u,o as h,h as C,n as e,z as a,B as l}from"./index.327fb789.js";import{A as B}from"./index.877ce531.js";import{D}from"./index.49ca6065.js";import{D as d}from"./index.b42a7925.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.2b94fb67.js";import"./index.fd34655f.js";import"./_baseIteratee.e708f3dc.js";import"./get.7d2d7f8d.js";import"./DeleteOutlined.0283d414.js";import"./index.0382e6bb.js";import"./useRefs.4c25035d.js";import"./Form.f9cbd672.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./useSize.60585e88.js";import"./index.a6b14919.js";import"./uniqBy.449933bc.js";import"./index.907eaa07.js";import"./useWindowSizeFn.54c185ab.js";import"./FullscreenOutlined.434c612e.js";import"./index.a3264c1c.js";import"./index.a5fde969.js";import"./Checkbox.27815f1e.js";import"./index.1552bc6e.js";import"./index.4ee776ce.js";import"./index.32a955cb.js";import"./index.735a6694.js";import"./index.54832512.js";import"./index.91f40545.js";import"./useFormItem.16f3f9a0.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./transButton.d6d2fca7.js";import"./index.27c1cc60.js";import"./index.e2db19c1.js";import"./isNumber.b7d57b8f.js";import"./uuid.2b29000c.js";import"./download.c4e457d1.js";import"./base64Conver.08b9f4ec.js";import"./index.fa882cfc.js";import"./index.7ebc4ed9.js";const A=x({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(n,{emit:m}){const[i,{validate:c,setProps:r}]=E({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:s});function _(){return f(this,null,function*(){m("prev")})}function s(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),m("next",t)},1500)}catch(t){}})}return{register:i}}}),y={class:"step2"};function w(n,m,i,c,r,_){const s=u("a-alert"),t=u("a-descriptions-item"),o=u("a-descriptions"),p=u("a-divider"),F=u("BasicForm");return h(),C("div",y,[e(s,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:a(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:a(()=>[l(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:a(()=>[l(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:a(()=>[l(" Vben ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:a(()=>[l(" 500\u5143 ")]),_:1})]),_:1}),e(p),e(F,{onRegister:n.register},null,8,["onRegister"])])}var ht=g(A,[["render",w],["__scopeId","data-v-01481d2f"]]);export{ht as default};