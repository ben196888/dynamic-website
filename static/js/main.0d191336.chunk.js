(this["webpackJsonpdynamic-website"]=this["webpackJsonpdynamic-website"]||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},21:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(6),c=t.n(o),i=(t(21),t(3)),l=(t(28),t(2)),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_ELEMENTS":var t=function e(n){return"string"===typeof n?n:n.children?{key:n.key,type:n.type,children:n.children.map(e)}:{key:n.key,type:n.type}};return n.payload.map(t);default:return e}},d=t(1),s=t(4),y=t(15),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_ELEMENTS":var t=function e(n,t){if("string"===typeof t)return n;var r=t.children,a=Object(y.a)(t,["children"]),o=Object(s.a)({},n,Object(d.a)({},t.key,a));return r?r.reduce(e,o):o};return n.payload.reduce(t,e);default:return e}},p=Object(l.b)({tree:u,elements:f}),m="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,h=Object(l.d)(p,m()),b=t(13),v=[{key:"div-one",type:"div",children:["Hello world ",{key:"inner",type:"span",children:["John Doe"]}]},{key:"link",type:"a",href:"https://google.com",children:["link"]},{key:"_1",type:"br"},{key:"button",type:"button",onClick:{name:"alert",parameters:{message:"hello world"}},children:["click to alert"]},{key:"helloworld",type:"MyComponent",children:["my component does not take children"]},{key:"_2",type:"br"},"String can render straight away"],E=t(14),k=function(){return a.a.createElement(a.a.Fragment,null,"Hello World")},w=function(e){var n=e.message;return window.alert(n)},O=Object(d.a)({},w.name,w);var g=Object(d.a)({},k.name,k);var j=function e(n,t){if("string"===typeof n)return n;var r,o=g[n.type]||n.type,c=t[n.key]?(r=t[n.key],Object.keys(r).reduce((function(e,n){if(/^on[A-Z]/.test(n)){var t=r[n];if(O[t.name])return Object(s.a)({},e,Object(d.a)({},n,(function(){return O[t.name](t.parameters)})));console.warn("Handler: ".concat(t.name," not found. Please ensure you have registered the handler function in mapToHandler."))}return Object(s.a)({},e,Object(d.a)({},n,r[n]))}),{})):null,i=(n.children||[]).map((function(n){return e(n,t)}));return a.a.createElement.apply(a.a,[o,c].concat(Object(E.a)(i)))},S=function(e){return{type:"SET_ELEMENTS",payload:e}};function _(){var e=Object(r.useState)(0),n=Object(b.a)(e,2),t=n[0],o=n[1],c=Object(i.b)(),l=Object(i.c)((function(e){return e.tree})),u=Object(i.c)((function(e){return e.elements}));Object(r.useEffect)((function(){Promise.resolve(v).then((function(e){c(S(e)),o(2)})).catch((function(){o(1)}))}),[c]);var d="";return 0===t&&(d="Now loading"),1===t&&(d="Load failed"),a.a.createElement(a.a.Fragment,null,d,l.map((function(e){return j(e,u)})))}var T=function(){return a.a.createElement(i.a,{store:h},a.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d191336.chunk.js.map