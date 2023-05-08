"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[4117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),u=r(16550),l=r(91980),s=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,s]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:u,selectValue:l,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==u&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":u===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function g(e){const t=(0,h.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},54948:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{children:t}=e;return n.createElement("div",{className:"mb-3 rounded border border-card shadow-md"},n.createElement("div",{className:"card-body p-4"},t))}},70387:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);function a(e){let{children:t}=e;return n.createElement("section",{className:"section markdown"},t)}},82896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(70387);r(54948),r(74866),r(85162);const i={sidebar_label:"Overview",title:"Overview",sidebar_position:1},u=void 0,l={unversionedId:"deephub-ui/deephub-ui-overview",id:"deephub-ui/deephub-ui-overview",title:"Overview",description:"The DeepHub\xae UIs",source:"@site/docs/deephub-ui/deephub-ui-overview.mdx",sourceDirName:"deephub-ui",slug:"/deephub-ui/deephub-ui-overview",permalink:"/docs/next/deephub-ui/deephub-ui-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DeepHub\xae UI",permalink:"/docs/next/category/deephub-ui"},next:{title:"Admin UI",permalink:"/docs/next/deephub-ui/deephub-admin-ui"}},s={},c=[{value:"The DeepHub\xae UIs",id:"the-deephub-uis",level:2},{value:"Different DeepHub\xae UI Modes",id:"different-deephub-ui-modes",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"the-deephub-uis"},"The DeepHub\xae UIs"),(0,a.kt)("p",null,"There are two DeepHub UI web applications that can run in every modern web browser and on any OS. They fulfill several tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide an overview of the current status of the overall system"),(0,a.kt)("li",{parentName:"ul"},"Allow for easy configuration of zones, location providers, trackables and fences"),(0,a.kt)("li",{parentName:"ul"},"Visualize a live view of tracked objects and their movements")),(0,a.kt)("p",null,"In addition to these functional features, these UIs represent a kind of showcase: the DeepHub UIs only use the documented REST and WebSocket APIs of the DeepHub locating middleware. Therefore, any partner or customer could build their own UI, tailored to their unique needs and requirements. Our UIs are simply one possible implementation of a solution."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The DeepHub UIs visualize the entities of the whole system on top of a web map.\nThe latter is delivered online by a mapping service provider. We recommend using\n",(0,a.kt)("a",{parentName:"p",href:"https://www.maptiler.com/cloud/"},"MapTiler")," as our preferred provider, and therefore use their maps by default.\nIf you intend to use the DeepHub UIs in a production environment, you will need to order your own ",(0,a.kt)("a",{parentName:"p",href:"https://www.maptiler.com/cloud/"},"MapTiler license key"),"."))),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"different-deephub-ui-modes"},"Different DeepHub\xae UI Modes"),(0,a.kt)("p",null,"There are two DeepHub UIs available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Admin UI"),(0,a.kt)("li",{parentName:"ul"},"Kiosk UI")),(0,a.kt)("p",null,"As the name implies, the Admin UI is the one-stop configuration and administration UI for a DeepHub system. It allows for creation, modification, and deletion of any system entities, such as trackables, fences, location providers, and zones.\nYou can find out more here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../deephub-ui/deephub-admin-ui"},"Admin UI"))),(0,a.kt)("p",null,"The Kiosk UI is the everyday UI used by the end-customer's workers to search for assets and get detailed information associated with them. It allows users to quickly locate assets and provides a live overview of the overall system.\nYou can find out more here: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../deephub-ui/deephub-kiosk-ui"},"Kiosk UI")))))}m.isMDXComponent=!0}}]);