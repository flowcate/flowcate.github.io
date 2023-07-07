"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[7319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70387:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);function o(e){let{children:t}=e;return r.createElement("section",{className:"section markdown"},t)}},87427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(70387);const i={sidebar_position:3,sidebar_label:"Latency and Asynchronous Behaviour",title:"Latency and Asynchronous Behaviour"},s="Latency and Asynchronous Behaviour",l={unversionedId:"deephub/latency",id:"deephub/latency",title:"Latency and Asynchronous Behaviour",description:"The DeepHub\xae is a single process application that is optimized for high throughput and low memory usage. It is capable of processing large amounts of requests per second,",source:"@site/docs/deephub/latency.mdx",sourceDirName:"deephub",slug:"/deephub/latency",permalink:"/docs/deephub/latency",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Latency and Asynchronous Behaviour",title:"Latency and Asynchronous Behaviour"},sidebar:"tutorialSidebar",previous:{title:"Security & Authorization",permalink:"/docs/deephub/SecurityAuthorization"},next:{title:"REST API",permalink:"/docs/deephub/api"}},c={},u=[],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"latency-and-asynchronous-behaviour"},"Latency and Asynchronous Behaviour"),(0,o.kt)(a.Z,{mdxType:"Section"},(0,o.kt)("p",null,"The DeepHub\xae is a single process application that is optimized for high throughput and low memory usage. It is capable of processing large amounts of requests per second,\neven on low-end hardware, such as a Raspberry PI or a NUC PC on the edge."),(0,o.kt)("p",null,"It provides several I/O APIs that are typically utilized simultaneously by 3rd party services - providing location data to the DeepHub to be processed on one hand, and\nevents being generated by the DeepHub and published to potential subscribers on the other hand."),(0,o.kt)("p",null,"At the heart of the DeepHub lies an event bus that processes the many I/O channels and is responsible for the low overall latency of a single instance installation.\nDue to this architecture, the DeepHub acts asynchronously in the sense that delivered input data (e.g. via the REST API) is not synchronously delivered (e.g. through events via the output WebSocket API).\nThis is noticeable in certain cases. For example, if a location update is provided as input but a configured mobile zone (see ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../deephub/mobilezones"},"Mobile Zone Extension")),") is updated within milliseconds."),(0,o.kt)("p",null,"Future versions of the DeepHub will support the deployment of several hubs working together as a system for redundancy and availability. In that configuration, it is the event bus of the hub instances that makes collaboration\npossible and allows them to be plugged together via an external message queue. The overall system latency would then be influenced by the network latency as well as the latency of the\nmessage queuing application itself.")))}h.isMDXComponent=!0}}]);