import{a as i,v as r,a7 as s,o as l,j as n,z as m,i as d,bm as u,k as p}from"./index.327fb789.js";import{C as f}from"./index.b8fb3e56.js";import"./index.24b9ea59.js";/* empty css              */import{u as c}from"./useECharts.b0d865c9.js";import"./index.3a4dc285.js";import"./index.a3264c1c.js";import"./Col.6cc20e93.js";import"./useFlexGapSupport.453d01e3.js";import"./index.a6b14919.js";import"./useRefs.4c25035d.js";import"./PlusOutlined.2384949c.js";const R=i({__name:"SaleRadar",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=e,t=r(null),{setOptions:o}=c(t);return s(()=>a.loading,()=>{a.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(h,g)=>(l(),n(p(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:m(()=>[d("div",{ref_key:"chartRef",ref:t,style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{R as default};
