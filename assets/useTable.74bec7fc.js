var g=(n,s,r)=>new Promise((u,l)=>{var i=e=>{try{c(r.next(e))}catch(a){l(a)}},t=e=>{try{c(r.throw(e))}catch(a){l(a)}},c=e=>e.done?u(e.value):Promise.resolve(e.value).then(i,t);c((r=r.apply(n,s)).next())});import{v as R,b$ as m,k as d,cE as f,e7 as w,a7 as b,am as o,d2 as p}from"./index.327fb789.js";function h(n){const s=R(null),r=R(!1),u=R(null);let l;function i(e,a){m(()=>{s.value=null,r.value=null}),!(d(r)&&f()&&e===d(s))&&(s.value=e,u.value=a,n&&e.setProps(w(n)),r.value=!0,l==null||l(),l=b(()=>n,()=>{n&&e.setProps(w(n))},{immediate:!0,deep:!0}))}function t(){const e=d(s);return e||p("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[i,{reload:e=>g(this,null,function*(){return yield t().reload(e)}),setProps:e=>{t().setProps(e)},redoHeight:()=>{t().redoHeight()},setSelectedRows:e=>o(t().setSelectedRows(e)),setLoading:e=>{t().setLoading(e)},getDataSource:()=>t().getDataSource(),getRawDataSource:()=>t().getRawDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const a=t().getColumns({ignoreIndex:e})||[];return o(a)},setColumns:e=>{t().setColumns(e)},setTableData:e=>t().setTableData(e),setPagination:e=>t().setPagination(e),deleteSelectRowByKey:e=>{t().deleteSelectRowByKey(e)},getSelectRowKeys:()=>o(t().getSelectRowKeys()),getSelectRows:()=>o(t().getSelectRows()),clearSelectedRowKeys:()=>{t().clearSelectedRowKeys()},setSelectedRowKeys:e=>{t().setSelectedRowKeys(e)},getPaginationRef:()=>t().getPaginationRef(),getSize:()=>o(t().getSize()),updateTableData:(e,a,S)=>t().updateTableData(e,a,S),deleteTableDataRecord:e=>t().deleteTableDataRecord(e),insertTableDataRecord:(e,a)=>t().insertTableDataRecord(e,a),updateTableDataRecord:(e,a)=>t().updateTableDataRecord(e,a),findTableDataRecord:e=>t().findTableDataRecord(e),getRowSelection:()=>o(t().getRowSelection()),getCacheColumns:()=>o(t().getCacheColumns()),getForm:()=>d(u),setShowPagination:e=>g(this,null,function*(){t().setShowPagination(e)}),getShowPagination:()=>o(t().getShowPagination()),expandAll:()=>{t().expandAll()},expandRows:e=>{t().expandRows(e)},collapseAll:()=>{t().collapseAll()},scrollTo:e=>{t().scrollTo(e)}}]}export{h as u};
