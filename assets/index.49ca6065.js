import{U as z,a as y,J as C,f as a,Q as M,n as f,S as n,_ as g}from"./index.327fb789.js";var S=function(){return{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"},plain:{type:Boolean,default:!1},orientationMargin:[String,Number]}},_=y({name:"ADivider",props:S(),setup:function(i,u){var o=u.slots,l=C("divider",i),d=l.prefixCls,c=l.direction,v=a(function(){return i.orientation==="left"&&i.orientationMargin!=null}),h=a(function(){return i.orientation==="right"&&i.orientationMargin!=null}),x=a(function(){var t,r=i.type,b=i.dashed,m=i.plain,e=d.value;return t={},n(t,e,!0),n(t,"".concat(e,"-").concat(r),!0),n(t,"".concat(e,"-dashed"),!!b),n(t,"".concat(e,"-plain"),!!m),n(t,"".concat(e,"-rtl"),c.value==="rtl"),n(t,"".concat(e,"-no-default-orientation-margin-left"),v.value),n(t,"".concat(e,"-no-default-orientation-margin-right"),h.value),t}),w=a(function(){var t=typeof i.orientationMargin=="number"?"".concat(i.orientationMargin,"px"):i.orientationMargin;return g(g({},v.value&&{marginLeft:t}),h.value&&{marginRight:t})}),p=a(function(){return i.orientation.length>0?"-"+i.orientation:i.orientation});return function(){var t,r=M((t=o.default)===null||t===void 0?void 0:t.call(o));return f("div",{class:[x.value,r.length?"".concat(d.value,"-with-text ").concat(d.value,"-with-text").concat(p.value):""],role:"separator"},[r.length?f("span",{class:"".concat(d.value,"-inner-text"),style:w.value},[r]):null])}}}),P=z(_);export{P as D};
