(this["webpackJsonphttps://Hrishabh8080.github.io/code-editor"]=this["webpackJsonphttps://Hrishabh8080.github.io/code-editor"]||[]).push([[0],{17:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(10),i=n.n(s),o=(n(17),n(3)),r=(n(9),n(18),n(19),n(20),n(21),n(22),n(11)),l=n(12),u=n(8),j=n(1),b=function(e){var t=e.displayName,n=e.language,c=e.value,s=e.onChange,i=Object(a.useState)(!0),b=Object(o.a)(i,2),d=b[0],h=b[1];return Object(j.jsxs)("div",{className:"editor-container ".concat(d?"":"collapsed"),children:[Object(j.jsxs)("div",{className:"editor-title",children:[t,Object(j.jsx)("button",{className:"expand-collapse-btn",onClick:function(){return h((function(e){return!e}))},children:Object(j.jsx)(l.a,{icon:d?u.a:u.b})})]}),Object(j.jsx)(r.Controlled,{onBeforeChange:function(e,t,n){s(n)},value:c,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:n,lineNumbers:!0,theme:"material"}})]})};var d=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(o.a)(s,2),r=i[0],l=i[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),h=d[0],p=d[1],m=Object(a.useState)(""),O=Object(o.a)(m,2),g=O[0],f=O[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){f("\n        <html>\n        <body>".concat(n,"</body>\n        <style>").concat(r,"</style>\n        <script>").concat(h,"<\/script>\n        </html>\n        "))}),1e3);return function(){return clearTimeout(e)}}),[n,r,h]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"pane top-pane",children:[Object(j.jsx)(b,{language:"xml",displayName:"HTML",value:n,onChange:c}),Object(j.jsx)(b,{language:"css",displayName:"CSS",value:r,onChange:l}),Object(j.jsx)(b,{language:"javascript",displayName:"JAVASCRIPT",value:h,onChange:p})]}),Object(j.jsx)("div",{className:"pane ",children:Object(j.jsx)("iframe",{srcDoc:g,title:"output",sendbox:"allow-script",frameBorder:"0",width:"100%",height:"100%"})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[29,1,2]]]);
//# sourceMappingURL=main.9b2a941a.chunk.js.map