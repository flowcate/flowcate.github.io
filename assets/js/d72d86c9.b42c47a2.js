"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[8234],{5320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(85893),a=r(11151),i=r(70387);r(54948),r(74866),r(85162);const o={sidebar_label:"Overview",title:"Overview",sidebar_position:1},s=void 0,u={id:"deephub-ui/deephub-ui-overview",title:"Overview",description:"The DeepHub\xae UIs",source:"@site/versioned_docs/version-DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-ui-overview.mdx",sourceDirName:"deephub-ui",slug:"/deephub-ui/deephub-ui-overview",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-ui-overview",draft:!1,unlisted:!1,tags:[],version:"DeepHub 2023 R1 - 2.3.2",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"DeepHub\xae UI",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/category/deephub-ui"},next:{title:"Configuration",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-ui-configuration"}},l={},d=[{value:"The DeepHub\xae UIs",id:"the-deephub-uis",level:2},{value:"Different DeepHub\xae UI Modes",id:"different-deephub-ui-modes",level:2}];function c(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(t.h2,{id:"the-deephub-uis",children:"The DeepHub\xae UIs"}),(0,n.jsx)(t.p,{children:"There are two DeepHub UI web applications that can run in every modern web browser and on any OS. They fulfill several tasks:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Provide an overview of the current status of the overall system"}),"\n",(0,n.jsx)(t.li,{children:"Allow for easy configuration of zones, location providers, trackables and fences"}),"\n",(0,n.jsx)(t.li,{children:"Visualize a live view of tracked objects and their movements"}),"\n"]}),(0,n.jsx)(t.p,{children:"In addition to these functional features, these UIs represent a kind of showcase: the DeepHub UIs only use the documented REST and WebSocket APIs of the DeepHub locating middleware. Therefore, any partner or customer could build their own UI, tailored to their unique needs and requirements. Our UIs are simply one possible implementation of a solution."}),(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The DeepHub UIs visualize the entities of the whole system on top of a web map.\nThe latter is delivered online by a mapping service provider. We recommend using\n",(0,n.jsx)(t.a,{href:"https://www.maptiler.com/cloud/",children:"MapTiler"})," as our preferred provider, and therefore use their maps by default.\nIf you intend to use the DeepHub UIs in a production environment, you will need to order your own ",(0,n.jsx)(t.a,{href:"https://www.maptiler.com/cloud/",children:"MapTiler license key"}),"."]})})]}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(t.h2,{id:"different-deephub-ui-modes",children:"Different DeepHub\xae UI Modes"}),(0,n.jsx)(t.p,{children:"There are two DeepHub UIs available:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Admin UI"}),"\n",(0,n.jsx)(t.li,{children:"Kiosk UI"}),"\n"]}),(0,n.jsxs)(t.p,{children:["As the name implies, the Admin UI is the one-stop configuration and administration UI for a DeepHub system. It allows for creation, modification, and deletion of any system entities, such as trackables, fences, location providers, and zones.\nYou can find out more here: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"../deephub-ui/deephub-admin-ui",children:"Admin UI"})})]}),(0,n.jsxs)(t.p,{children:["The Kiosk UI is the everyday UI used by the end-customer's workers to search for assets and get detailed information associated with them. It allows users to quickly locate assets and provides a live overview of the overall system.\nYou can find out more here: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"../deephub-ui/deephub-kiosk-ui",children:"Kiosk UI"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(90512);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),a=r(90512),i=r(12466),o=r(16550),s=r(20469),u=r(91980),l=r(67392),d=r(50012);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,c]=b({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),v=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),m(e)}),[c,m,i]),tabValues:i}}var m=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(85893);function y(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==n&&(l(t),o(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:c,onClick:d,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function I(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,w.jsx)(y,{...e,...t}),(0,w.jsx)(x,{...e,...t})]})}function g(e){const t=(0,m.Z)();return(0,w.jsx)(I,{...e,children:c(e.children)},String(t))}},54948:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var n=r(85893);function a(e){let{children:t}=e;return(0,n.jsx)("div",{className:"mb-3 rounded border border-card shadow-md",children:(0,n.jsx)("div",{className:"card-body p-4",children:t})})}},70387:(e,t,r)=>{r.d(t,{Z:()=>a});r(67294);var n=r(85893);function a(e){let{children:t}=e;return(0,n.jsx)("section",{className:"section markdown",children:t})}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);