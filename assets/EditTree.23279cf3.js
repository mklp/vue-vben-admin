import{au as d,a as B,aw as i,o as E,j as C,z as u,n as e,B as m,t as c,bS as F}from"./index.327fb789.js";/* empty css              */import{_ as g}from"./index.9c325fab.js";import{t as h,a as _,b as A}from"./data.ec134722.js";import{P as b}from"./index.8a211077.js";import{D as k}from"./DeleteOutlined.0283d414.js";import{R as L}from"./index.a3264c1c.js";import{C as R}from"./index.a6b14919.js";import{P as M}from"./PlusOutlined.2384949c.js";import"./fromPairs.84aabb58.js";import"./index.b4057fb3.js";import"./eagerComputed.f3852fc1.js";import"./useContextMenu.f1d20705.js";import"./index.49ca6065.js";import"./get.7d2d7f8d.js";import"./index.945a3551.js";import"./index.62f637e8.js";import"./useSize.60585e88.js";import"./useWindowSizeFn.54c185ab.js";import"./useContentViewHeight.1136c467.js";import"./ArrowLeftOutlined.dbd8d954.js";import"./index.d1088aad.js";import"./transButton.d6d2fca7.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";const N=B({components:{BasicTree:g,PageWrapper:b,Row:L,Col:R},setup(){function t(a){}function s(a){return[{label:"\u65B0\u589E",handler:()=>{},icon:"bi:plus"},{label:"\u5220\u9664",handler:()=>{},icon:"bx:bxs-folder-open"}]}const l=[{render:a=>F(M,{class:"ml-2",onClick:()=>{}})},{render:()=>F(k)}];function p({level:a}){return a===1?"ion:git-compare-outline":a===2?"ion:home":a===3?"ion:airplane":""}return{treeData:h,treeData2:_,treeData3:A,actionList:l,getRightMenuList:s,createIcon:p}}});function P(t,s,l,p,a,T){const o=i("BasicTree"),r=i("Col"),D=i("Row"),f=i("PageWrapper");return E(),C(f,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B"},{default:u(()=>[e(D,{gutter:[16,16]},{default:u(()=>[e(r,{span:8},{default:u(()=>[e(o,{title:"\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE/\u81EA\u5B9A\u4E49\u56FE\u6807",helpMessage:"\u5E2E\u52A9\u4FE1\u606F",treeData:t.treeData,actionList:t.actionList,renderIcon:t.createIcon},null,8,["treeData","actionList","renderIcon"])]),_:1}),e(r,{span:8},{default:u(()=>[e(o,{title:"\u53F3\u952E\u83DC\u5355",treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),e(r,{span:8},{default:u(()=>[e(o,{title:"\u5DE5\u5177\u680F\u4F7F\u7528",toolbar:"",checkable:"",search:"",treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])]),_:1}),e(r,{span:8},{default:u(()=>[e(o,{title:"\u6CA1\u6709fieldNames\uFF0C\u63D2\u69FD\u6709\u6548",helpMessage:"\u6B63\u786E\u7684\u793A\u4F8B",treeData:t.treeData3},{title:u(n=>[m(" \u63D2\u69FD\uFF1A"+c(n.name),1)]),_:1},8,["treeData"])]),_:1}),e(r,{span:8},{default:u(()=>[e(o,{title:"\u6709fieldNames\u540E\uFF0C\u63D2\u69FD\u5931\u6548",helpMessage:"\u9519\u8BEF\u7684\u793A\u4F8B, \u5E94\u8BE5\u663E\u793A\u63D2\u69FD\u7684\u5185\u5BB9\u624D\u5BF9",fieldNames:{key:"id",title:"name"},treeData:t.treeData2},{title:u(n=>[m(" \u63D2\u69FD\uFF1A"+c(n.title),1)]),_:1},8,["treeData"])]),_:1}),e(r,{span:8},{default:u(()=>[e(o,{title:"\u6709fieldNames\u540E\uFF0CactionList\u5931\u6548",helpMessage:"\u9519\u8BEF\u7684\u793A\u4F8B\uFF0C\u5E94\u8BE5\u5728\u9F20\u6807\u79FB\u4E0A\u53BB\u65F6\uFF0C\u663E\u793A\u65B0\u589E\u548C\u5220\u9664\u6309\u94AE\u624D\u5BF9",treeData:t.treeData3,actionList:t.actionList,fieldNames:{key:"key",title:"name"}},null,8,["treeData","actionList"])]),_:1})]),_:1})]),_:1})}var ae=d(N,[["render",P]]);export{ae as default};
