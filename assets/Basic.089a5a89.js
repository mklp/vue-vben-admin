import{B as f}from"./TableImg.e3d418f8.js";import"./componentMap.b6a8f2da.js";import{getBasicColumns as B,getBasicData as v}from"./tableData.ed5d7df7.js";import{au as b,a as h,v as i,aw as c,o as A,h as E,n as e,z as r,B as m,t as l}from"./index.327fb789.js";import"./index.a5fde969.js";import"./Checkbox.27815f1e.js";import"./index.1552bc6e.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./BasicForm.06f19830.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.2b94fb67.js";import"./index.49ca6065.js";import"./index.fd34655f.js";import"./_baseIteratee.e708f3dc.js";import"./get.7d2d7f8d.js";import"./DeleteOutlined.0283d414.js";import"./index.0382e6bb.js";import"./useRefs.4c25035d.js";import"./Form.f9cbd672.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./useSize.60585e88.js";import"./index.a6b14919.js";import"./uniqBy.449933bc.js";import"./index.907eaa07.js";import"./useWindowSizeFn.54c185ab.js";import"./FullscreenOutlined.434c612e.js";import"./index.a3264c1c.js";import"./useForm.28f6b429.js";import"./RadioButtonGroup.b84bfba6.js";import"./useFormItem.16f3f9a0.js";import"./index.8a211077.js";import"./index.945a3551.js";import"./index.62f637e8.js";import"./useContentViewHeight.1136c467.js";import"./ArrowLeftOutlined.dbd8d954.js";import"./index.d1088aad.js";import"./transButton.d6d2fca7.js";import"./index.735a6694.js";import"./index.54832512.js";import"./index.32a955cb.js";import"./index.4ee776ce.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6fd9b0f6.js";import"./index.e2db19c1.js";import"./isNumber.b7d57b8f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.959dc712.js";import"./index.c042f31c.js";import"./index.91f40545.js";import"./index.27c1cc60.js";import"./index.877ce531.js";import"./download.c4e457d1.js";import"./base64Conver.08b9f4ec.js";import"./index.fa882cfc.js";import"./index.7ebc4ed9.js";import"./select.0f445232.js";const k=h({components:{BasicTable:f},setup(){const o=i(!1),a=i(!1),p=i(!0),n=i(!0),u=i(!1);function d(){o.value=!o.value}function t(){p.value=!p.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,u.value={pageSize:20}},3e3)}function g(){n.value=!n.value}function C(F){}return{columns:B(),data:v(),canResize:o,loading:a,striped:p,border:n,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:u,handleColumnChange:C}}}),y={class:"p-4"};function z(o,a,p,n,u,d){const t=c("a-button"),s=c("BasicTable");return A(),E("div",y,[e(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[e(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[m(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[m(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[m(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[m(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Lo=b(k,[["render",z]]);export{Lo as default};