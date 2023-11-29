"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[8449],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={slug:"omlox-v2",title:"The new version of the omlox standard is here",authors:["wraromer"],tags:[]},i=void 0,l={permalink:"/blog/omlox-v2",source:"@site/blog/2023-08-23-omlox-v2/index.md",title:"The new version of the omlox standard is here",description:'The omlox v2 specification was finalized and approved. It contains many enhancements to the "omlox core zone" and the "omlox hub". The former now complies to IEEE 802.15.4z, offers a new "Uplink-Time Difference of Arrival (UL- TDoA)" mode, and supports UWB channel #9 (~8 GHz) - allowing for global coverage, as this is currently the only channel that can be used worldwide without any local restrictions.',date:"2023-08-23T00:00:00.000Z",formattedDate:"August 23, 2023",tags:[],readingTime:.575,hasTruncateMarker:!1,authors:[{name:"Wolfgang R\xf6mer",title:"Product Owner DeepHub",url:"https://www.flowcate.com/deephub",imageURL:"https://github.com/wraromer.png",key:"wraromer"}],frontMatter:{slug:"omlox-v2",title:"The new version of the omlox standard is here",authors:["wraromer"],tags:[]},prevItem:{title:"DeepHub 2023 R2 - 2.4.0 released",permalink:"/blog/new-release-2.4.0"},nextItem:{title:'The one and only "changelog"',permalink:"/blog/changelog"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The omlox v2 specification was finalized and approved. It contains many enhancements to the "omlox core zone" and the "omlox hub". The former now complies to IEEE 802.15.4z, offers a new "Uplink-Time Difference of Arrival (UL- TDoA)" mode, and supports UWB channel #9 (~8 GHz) - allowing for global coverage, as this is currently the only channel that can be used worldwide without any local restrictions.'),(0,o.kt)("p",null,'The omlox hub specification v2 includes a "rule engine" (the DeepHub has had a ',(0,o.kt)("a",{parentName:"p",href:"/docs/deephub/LocatingRuleExtension"},"Locating Rule Engine"),' for over a year), support for uninitialized zones, a "fence_timeout" property for trackables and location providers to overrule timeout settings of a fence, and several new REST API endpoints for greater convenience.'))}f.isMDXComponent=!0}}]);