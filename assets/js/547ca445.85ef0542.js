"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[6464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70387:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);function i(e){let{children:t}=e;return n.createElement("section",{className:"section markdown"},t)}},83398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),o=a(70387);const r={sidebar_label:"Locating Rule Extension",title:"Locating Rule Extension",sidebar_position:6},l=void 0,s={unversionedId:"deephub/LocatingRuleExtension",id:"deephub/LocatingRuleExtension",title:"Locating Rule Extension",description:"A trackable can be associated with several location providers.",source:"@site/docs/deephub/LocatingRuleExtension.mdx",sourceDirName:"deephub",slug:"/deephub/LocatingRuleExtension",permalink:"/docs/deephub/LocatingRuleExtension",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Locating Rule Extension",title:"Locating Rule Extension",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"WebSocket API",permalink:"/docs/deephub/WebsocketAPI"},next:{title:"Mobile Zone Extension",permalink:"/docs/deephub/mobilezones"}},c={},p=[{value:"Details",id:"details",level:2},{value:"Available Functions and Properties",id:"available-functions-and-properties",level:2},{value:"timestamp_diff",id:"timestamp_diff",level:3},{value:"accuracy",id:"accuracy",level:3},{value:"provider_id",id:"provider_id",level:3},{value:"type",id:"type",level:3},{value:"source",id:"source",level:3},{value:"floor",id:"floor",level:3},{value:"speed",id:"speed",level:3},{value:"Available Operators",id:"available-operators",level:2},{value:"Example",id:"example",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{mdxType:"Section"},(0,i.kt)("p",null,"A trackable can be associated with several location providers.\nFor example, a trackable may have a GPS provider used for outdoor localization, as well as UWB and RFID location providers for indoor localization."),(0,i.kt)("p",null,"In practice this may result in multiple location updates at a time for each of the location providers.\nFor example, the trackable may be located indoors and get a precise location via UWB while it gets a GPS location update with low accuracy at the same time.\nAs a result, the trackable will get all location updates for each of its devices, and by default the most recent location update is marked as the most significant."),(0,i.kt)("p",null,"The trackable locating rule extension adds additional configuration options to a trackable in order to make fine-grained decisions about selecting the most significant location.\nLocating rules can be expressed via a simple domain specific language."),(0,i.kt)("p",null,"For a comprehensive overview of this extension, refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tmZ0ta4i7Hk"},"video on YouTube"),".")),(0,i.kt)(o.Z,{mdxType:"Section"},(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"Each rule consists of two properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"expression: A boolean expression consisting of ",(0,i.kt)("strong",{parentName:"li"},"AND")," connected expressions. The syntax is based on SQL."),(0,i.kt)("li",{parentName:"ul"},"priority: The priority assigned to the associated expression.\nIt is a positive number, with 0 being the lowest priority.")),(0,i.kt)("p",null,"A list of such rules can be assigned to a trackable or as default rules.\nThe default rules are used for all trackables, which do not contain rules.\nIf neither rules are present, the most recent location update has the highest priority.\nThe default rules can be set with this API endpoint:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/trackables/rules/locating")),(0,i.kt)("p",null,"Whenever a location update is processed all rules are evaluated for all locations associated with a trackable.\nBased on all expressions which evaluate to true, the largest priority is assigned to the respective location.\nThe location with the highest priority is then assigned to the trackable as the most significant location.\nIf no expression evaluates to true, a default priority of 0 is used."),(0,i.kt)("p",null,"A dedicated API for testing the expression syntax can be found at:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"/validator/rules/locating")),(0,i.kt)("h2",{id:"available-functions-and-properties"},"Available Functions and Properties"),(0,i.kt)("h3",{id:"timestamp_diff"},"timestamp_diff"),(0,i.kt)("p",null,'This function provides access to the "age" of a location update.\nIt gives the time difference between the location\'s ',(0,i.kt)("strong",{parentName:"p"},"timestamp_generated")," and ",(0,i.kt)("strong",{parentName:"p"},"now")," in milliseconds."),(0,i.kt)("h3",{id:"accuracy"},"accuracy"),(0,i.kt)("p",null,"This enables checks against the accuracy of the location update in metres."),(0,i.kt)("h3",{id:"provider_id"},"provider_id"),(0,i.kt)("p",null,"This enables checks against the location provider id of the location update."),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"This enables checks against the location provider type of the location update.\nAvailable types are: uwb, gps, wifi, rfid, ibeacon, virtual, unknown"),(0,i.kt)("h3",{id:"source"},"source"),(0,i.kt)("p",null,"This enables checks against the source/zone of the location update."),(0,i.kt)("h3",{id:"floor"},"floor"),(0,i.kt)("p",null,"This enables checks against the floor of the location update."),(0,i.kt)("h3",{id:"speed"},"speed"),(0,i.kt)("p",null,"This enables checks against the speed of the location update in metres per second."),(0,i.kt)("h2",{id:"available-operators"},"Available Operators"),(0,i.kt)("p",null,"The following operators are available for expressions:\n",(0,i.kt)("inlineCode",{parentName:"p"},"="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},">="),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"AND"),".")),(0,i.kt)(o.Z,{mdxType:"Section"},(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following locating rules would be described in natural language as:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the precise UWB location if the location is not older than 10 seconds,"),(0,i.kt)("li",{parentName:"ul"},"Otherwise switch back to GPS if the accuracy is better than 10 metres.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"locating_rules": [\n  {\n    "expression": "type = \'uwb\' AND timestamp_diff < 10000",\n    "priority": 10\n  },\n  {\n    "expression": "type = \'gps\' AND accuracy < 10",\n    "priority": 9\n  }\n]\n'))))}h.isMDXComponent=!0}}]);