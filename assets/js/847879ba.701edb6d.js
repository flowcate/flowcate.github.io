"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[4054],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},70387:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){let{children:t}=e;return n.createElement("section",{className:"section markdown"},t)}},949:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(70387);const o={sidebar_label:"Locating Rule Extension",title:"Locating Rule Extension",sidebar_position:6},l=void 0,s={unversionedId:"deephub/LocatingRuleExtension",id:"version-DeepHub 2023 R1 - 2.3.2/deephub/LocatingRuleExtension",title:"Locating Rule Extension",description:"A trackable can be associated with several location providers.",source:"@site/versioned_docs/version-DeepHub 2023 R1 - 2.3.2/deephub/LocatingRuleExtension.mdx",sourceDirName:"deephub",slug:"/deephub/LocatingRuleExtension",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub/LocatingRuleExtension",draft:!1,tags:[],version:"DeepHub 2023 R1 - 2.3.2",sidebarPosition:6,frontMatter:{sidebar_label:"Locating Rule Extension",title:"Locating Rule Extension",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"WebSocket API",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub/WebsocketAPI"},next:{title:"Mobile Zone Extension",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub/mobilezones"}},c={},p=[{value:"Details",id:"details",level:2},{value:"Available Functions and Properties",id:"available-functions-and-properties",level:2},{value:"timestamp_diff",id:"timestamp_diff",level:3},{value:"accuracy",id:"accuracy",level:3},{value:"provider_id",id:"provider_id",level:3},{value:"type",id:"type",level:3},{value:"source",id:"source",level:3},{value:"floor",id:"floor",level:3},{value:"speed",id:"speed",level:3},{value:"Available Operators",id:"available-operators",level:2},{value:"Example",id:"example",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("p",null,"A trackable can be associated with several location providers.\nFor example, a trackable may have a GPS provider used for outdoor localization, as well as UWB and RFID location providers for indoor localization."),(0,r.kt)("p",null,"In practice this may result in multiple location updates at a time for each of the location providers.\nFor example, the trackable may be located indoors and get a precise location via UWB while it gets a GPS location update with low accuracy at the same time.\nAs a result, the trackable will get all location updates for each of its devices, and by default the most recent location update is marked as the most significant."),(0,r.kt)("p",null,"The trackable locating rule extension adds additional configuration options to a trackable in order to make fine-grained decisions about selecting the most significant location.\nLocating rules can be expressed via a simple domain specific language."),(0,r.kt)("p",null,"For a comprehensive overview of this extension, refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tmZ0ta4i7Hk"},"video on YouTube"),".")),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("p",null,"Each rule consists of two properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"expression: A boolean expression consisting of ",(0,r.kt)("strong",{parentName:"li"},"AND")," connected expressions. The syntax is based on SQL."),(0,r.kt)("li",{parentName:"ul"},"priority: The priority assigned to the associated expression.\nIt is a positive number, with 0 being the lowest priority.")),(0,r.kt)("p",null,"A list of such rules can be assigned to a trackable or as default rules.\nThe default rules are used for all trackables, which do not contain rules.\nIf neither rules are present, the most recent location update has the highest priority.\nThe default rules can be set with this API endpoint:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/trackables/rules/locating")),(0,r.kt)("p",null,"Whenever a location update is processed all rules are evaluated for all locations associated with a trackable.\nBased on all expressions which evaluate to true, the largest priority is assigned to the respective location.\nThe location with the highest priority is then assigned to the trackable as the most significant location.\nIf no expression evaluates to true, a default priority of 0 is used."),(0,r.kt)("p",null,"A dedicated API for testing the expression syntax can be found at:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/validator/rules/locating")),(0,r.kt)("h2",{id:"available-functions-and-properties"},"Available Functions and Properties"),(0,r.kt)("h3",{id:"timestamp_diff"},"timestamp_diff"),(0,r.kt)("p",null,'This function provides access to the "age" of a location update.\nIt gives the time difference between the location\'s ',(0,r.kt)("strong",{parentName:"p"},"timestamp_generated")," and ",(0,r.kt)("strong",{parentName:"p"},"now")," in milliseconds."),(0,r.kt)("h3",{id:"accuracy"},"accuracy"),(0,r.kt)("p",null,"This enables checks against the accuracy of the location update in metres."),(0,r.kt)("h3",{id:"provider_id"},"provider_id"),(0,r.kt)("p",null,"This enables checks against the location provider id of the location update."),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"This enables checks against the location provider type of the location update.\nAvailable types are: uwb, gps, wifi, rfid, ibeacon, virtual, unknown"),(0,r.kt)("h3",{id:"source"},"source"),(0,r.kt)("p",null,"This enables checks against the source/zone of the location update."),(0,r.kt)("h3",{id:"floor"},"floor"),(0,r.kt)("p",null,"This enables checks against the floor of the location update."),(0,r.kt)("h3",{id:"speed"},"speed"),(0,r.kt)("p",null,"This enables checks against the speed of the location update in metres per second."),(0,r.kt)("h2",{id:"available-operators"},"Available Operators"),(0,r.kt)("p",null,"The most relevant operators understood by the DeepHub are listed below.\nExpressions built from these operators can be grouped with parentheses: ",(0,r.kt)("inlineCode",{parentName:"p"},"(")," and ",(0,r.kt)("inlineCode",{parentName:"p"},")"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"* / % + -"),(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic operators: Multiply, divide, modulo, add, subtract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&\u2002","|"," << >>"),(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise operators: Binary AND, binary OR, binary left shift, binary right shift")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"< > <= >= = !="),(0,r.kt)("td",{parentName:"tr",align:null},"Comparison operators: Less than, greater than, less than or equal, greater than or equal, equals, is not equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ISNULL NOTNULL"),(0,r.kt)("td",{parentName:"tr",align:null},"Null comparison operators: check if a value equals or doesn't equal null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NOT AND OR"),(0,r.kt)("td",{parentName:"tr",align:null},"Logical operators: negate operator, AND operator, OR operator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LIKE"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if a string matches a given pattern. The '%' wildcard matches any sequence of zero or more characters following the wildcard. The '_' wildcard matches a single character."))))),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following locating rules would be described in natural language as:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the precise UWB location if the location is not older than 10 seconds,"),(0,r.kt)("li",{parentName:"ul"},"Otherwise switch back to GPS if the accuracy is better than 10 metres.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"locating_rules": [\n  {\n    "expression": "type = \'uwb\' AND timestamp_diff < 10000",\n    "priority": 10\n  },\n  {\n    "expression": "type = \'gps\' AND accuracy < 10",\n    "priority": 9\n  }\n]\n'))))}h.isMDXComponent=!0}}]);