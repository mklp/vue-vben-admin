import{B as h}from"./TableImg.e3d418f8.js";import{k as C}from"./componentMap.b6a8f2da.js";import{u as g}from"./useTable.74bec7fc.js";import{a as _}from"./system.9952e87f.js";import{b as T}from"./index.907eaa07.js";import{D as B,c as k,s as D}from"./DeptModal.f1469d05.js";import{au as E,a as M,aw as e,o as d,h as S,n as a,z as m,B as y,j as w,l as R}from"./index.327fb789.js";import"./index.a5fde969.js";import"./Checkbox.27815f1e.js";import"./index.1552bc6e.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./BasicForm.06f19830.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.2b94fb67.js";import"./index.49ca6065.js";import"./index.fd34655f.js";import"./_baseIteratee.e708f3dc.js";import"./get.7d2d7f8d.js";import"./DeleteOutlined.0283d414.js";import"./index.0382e6bb.js";import"./useRefs.4c25035d.js";import"./Form.f9cbd672.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./useSize.60585e88.js";import"./index.a6b14919.js";import"./uniqBy.449933bc.js";import"./index.a3264c1c.js";import"./useForm.28f6b429.js";import"./RadioButtonGroup.b84bfba6.js";import"./useFormItem.16f3f9a0.js";import"./index.8a211077.js";import"./index.945a3551.js";import"./index.62f637e8.js";import"./useWindowSizeFn.54c185ab.js";import"./useContentViewHeight.1136c467.js";import"./ArrowLeftOutlined.dbd8d954.js";import"./index.d1088aad.js";import"./transButton.d6d2fca7.js";import"./index.735a6694.js";import"./index.54832512.js";import"./index.32a955cb.js";import"./index.4ee776ce.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.6fd9b0f6.js";import"./FullscreenOutlined.434c612e.js";import"./index.e2db19c1.js";import"./isNumber.b7d57b8f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.959dc712.js";import"./index.c042f31c.js";import"./index.91f40545.js";import"./index.27c1cc60.js";import"./index.877ce531.js";import"./download.c4e457d1.js";import"./base64Conver.08b9f4ec.js";import"./index.fa882cfc.js";import"./index.7ebc4ed9.js";const v=M({name:"DeptManagement",components:{BasicTable:h,DeptModal:B,TableAction:C},setup(){const[o,{openModal:r}]=T(),[p,{reload:s}]=g({title:"\u90E8\u95E8\u5217\u8868",api:_,columns:k,formConfig:{labelWidth:120,schemas:D},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function i(t){}function n(){s()}return{registerTable:p,registerModal:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}});function A(o,r,p,s,l,c){const i=e("a-button"),n=e("TableAction"),t=e("BasicTable"),f=e("DeptModal");return d(),S("div",null,[a(t,{onRegister:o.registerTable},{toolbar:m(()=>[a(i,{type:"primary",onClick:o.handleCreate},{default:m(()=>[y(" \u65B0\u589E\u90E8\u95E8 ")]),_:1},8,["onClick"])]),bodyCell:m(({column:b,record:u})=>[b.key==="action"?(d(),w(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var jo=E(v,[["render",A]]);export{jo as default};
