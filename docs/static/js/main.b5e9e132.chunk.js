(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0);function j(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],j=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){j(t.target.value)}})})}var o=n(10),d=n(6),f=n.n(d),p=n(8),b=function(){var t=Object(p.a)(f.a.mark((function t(e){var n,a,r,c,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=DT9UWgW5mJ7AygyOXas2NCsI92qCbiVf"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function l(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})}function m(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){return c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),Object(u.jsx)("p",{className:"animate__animated animate__flash",children:c&&"Cargando"}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(l,Object(o.a)({},t),t.id)}))})]})}function O(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:r}),Object(u.jsx)("hr",{}),n.map((function(t){return Object(u.jsx)(m,{category:t},t)}))]})}n(17);c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b5e9e132.chunk.js.map