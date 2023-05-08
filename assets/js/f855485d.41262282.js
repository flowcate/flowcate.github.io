"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[8679],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(o),h=i,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},70387:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(67294);function i(e){let{children:t}=e;return n.createElement("section",{className:"section markdown"},t)}},37728:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),i=(o(67294),o(3905)),r=o(70387);const a={sidebar_label:"Cisco CMX Location Notification Adapter",title:"Cisco CMX Location Notification Adapter",sidebar_position:7},c=void 0,s={unversionedId:"deephub/ciscocmx",id:"deephub/ciscocmx",title:"Cisco CMX Location Notification Adapter",description:"The Cisco CMX Location Notification Adapter enables the DeepHub\xae to be integrated with existing Cisco infrastructure, without the need for an additional middleware.",source:"@site/docs/deephub/ciscocmx.mdx",sourceDirName:"deephub",slug:"/deephub/ciscocmx",permalink:"/docs/next/deephub/ciscocmx",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Cisco CMX Location Notification Adapter",title:"Cisco CMX Location Notification Adapter",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Mobile Zone Extension",permalink:"/docs/next/deephub/mobilezones"},next:{title:"ISO-24730 Adapter",permalink:"/docs/next/deephub/iso24730"}},l={},p=[{value:"Setup and Configuration",id:"setup-and-configuration",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{mdxType:"Section"},(0,i.kt)("p",null,"The Cisco CMX Location Notification Adapter enables the DeepHub\xae to be integrated with existing Cisco infrastructure, without the need for an additional middleware."),(0,i.kt)("p",null,"The DeepHub REST API endpoint /adapters/cisco/locations can be configured as a webhook in the Cisco CMX settings. The DeepHub supports version 10.6+ of Cisco CMX.")),(0,i.kt)(r.Z,{mdxType:"Section"},(0,i.kt)("h2",{id:"setup-and-configuration"},"Setup and Configuration"),(0,i.kt)("p",null,"Setting up the Cisco CMX adapter is done by first defining a webhook in the Cisco CMX settings. If the Cisco infrastructure is set up to provide GPS location data, this is the only configuration step."),(0,i.kt)("p",null,"If the Cisco infrastructure is set up to only send local coordinates, a zone configuration in the DeepHub is required to match the Cisco floor plan. This allows for the translation of incoming location data to projections supported by the DeepHub."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Setting up a Notification Webhook in Cisco CMX for the DeepHub:")),(0,i.kt)("p",null,"You may create a new webhook through the Cisco CMX configuration page. To do so in the UI:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to Cisco CMX"),(0,i.kt)("li",{parentName:"ul"},"Choose Manage \u2192 Notifications"),(0,i.kt)("li",{parentName:"ul"},"Create a new notification and enter the host and port to your DeepHub instance and enter the URL /v1/adapters/cisco/locations"),(0,i.kt)("li",{parentName:"ul"},"Save changes and exit")),(0,i.kt)("p",null,"If your Cisco infrastructure is set up to only deliver local coordinates, you need to perform these additional steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login to the DeepHub UI"),(0,i.kt)("li",{parentName:"ul"},"Choose Zone Setup"),(0,i.kt)("li",{parentName:"ul"},"Click to create a new zone"),(0,i.kt)("li",{parentName:"ul"},"Select wifi as the zone type"),(0,i.kt)("li",{parentName:"ul"},"Draw the zone using the drawing tool, or any of the available zone creation tools. The zone shape and location should match the location hierarchy (map) as defined in your Cisco CMX."),(0,i.kt)("li",{parentName:"ul"},"Enter the floor level for the zone and the address (optional)."),(0,i.kt)("li",{parentName:"ul"},'In the Foreign ID field, enter the CMX location hierarchy name for this map. For example, "Mathematikon>Berliner Str. 41>5. OG komplett ',"[f.4]",'". Note: This field is used to link incoming data from your Cisco CMX with this omlox zone. Therefore, please ensure this field matches the value of your CMX location hierarchy.'),(0,i.kt)("li",{parentName:"ul"},"Click save to create and activate the new zone.")),(0,i.kt)("p",null,"Repeat the steps above for each floor plan in your Cisco CMX for which you want to get location data in the DeepHub."),(0,i.kt)("admonition",{title:"Note:",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Setting up a zone in the DeepHub is optional if Cisco CMX is set up to deliver data in WGS84. Nevertheless, it's strongly advised to create a zone for each CMX location hierarchy in order to assign correct floor level information to incoming locations from the corresponding CMX location hierarchies. Otherwise, some features that depend on correct floor information, such as geofencing and collision detection, may not behave as expected."))))}h.isMDXComponent=!0}}]);