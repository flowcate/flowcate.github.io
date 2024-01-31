"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[7931],{58095:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(85893),s=t(11151),a=t(70387);const o={sidebar_label:"Locating Rule Extension",title:"Locating Rule Extension",sidebar_position:6},l=void 0,r={id:"deephub/LocatingRuleExtension",title:"Locating Rule Extension",description:"A trackable can be associated with several location providers.",source:"@site/versioned_docs/version-DeepHub 2022 R2 - 2.2.3/deephub/LocatingRuleExtension.mdx",sourceDirName:"deephub",slug:"/deephub/LocatingRuleExtension",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/LocatingRuleExtension",draft:!1,unlisted:!1,tags:[],version:"DeepHub 2022 R2 - 2.2.3",sidebarPosition:6,frontMatter:{sidebar_label:"Locating Rule Extension",title:"Locating Rule Extension",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"WebSocket API",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/WebsocketAPI"},next:{title:"Mobile Zone Extension",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/mobilezones"}},c={},d=[{value:"Details",id:"details",level:2},{value:"Available functions and properties",id:"available-functions-and-properties",level:2},{value:"timestamp_diff",id:"timestamp_diff",level:3},{value:"accuracy",id:"accuracy",level:3},{value:"provider_id",id:"provider_id",level:3},{value:"type",id:"type",level:3},{value:"source",id:"source",level:3},{value:"floor",id:"floor",level:3},{value:"speed",id:"speed",level:3},{value:"Available operators",id:"available-operators",level:2},{value:"Example",id:"example",level:2}];function h(e){const i={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.p,{children:"A trackable can be associated with several location providers.\nFor example, a trackable may have a GPS provider used for outdoor localization, as well as UWB and RFID location providers for indoor localization."}),(0,n.jsx)(i.p,{children:"In practice this may result in multiple location updates at a time for each of the location providers.\nFor example, the trackable may be located indoors and get a precise location via UWB while it gets a GPS location update with low accuracy at the same time.\nAs a result, the trackable will get all location updates for each of its devices, and by default the most recent location update is marked as the most significant."}),(0,n.jsx)(i.p,{children:"The trackable locating rule extension adds additional configuration options to a trackable in order to make fine-grained decisions about selecting the most significant location.\nLocating rules can be expressed via a simple domain specific language."})]}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.h2,{id:"details",children:"Details"}),(0,n.jsx)(i.p,{children:"Each rule consists of two properties:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["expression: A boolean expression consisting of ",(0,n.jsx)(i.strong,{children:"AND"})," connected expressions. The syntax is based on SQL."]}),"\n",(0,n.jsx)(i.li,{children:"priority: The priority assigned to the associated expression.\nIt is a positive number, with 0 being the lowest priority."}),"\n"]}),(0,n.jsxs)(i.p,{children:["A list of such rules can be assigned to a trackable or as default rules.\nThe default rules are used for all trackables, which do not contain rules.\nIf neither rules are present, the most recent location update has the highest priority.\nThe default rules can be set with this API endpoint:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"/trackables/rules/locating"})]}),(0,n.jsx)(i.p,{children:"Whenever a location update is processed all rules are evaluated for all locations associated with a trackable.\nBased on all expressions which evaluate to true, the largest priority is assigned to the respective location.\nThe location with the highest priority is then assigned to the trackable as the most significant location.\nIf no expression evaluates to true, a default priority of 0 is used."}),(0,n.jsxs)(i.p,{children:["A dedicated API for testing the expression syntax can be found at:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"/validator/rules/locating"})]}),(0,n.jsx)(i.h2,{id:"available-functions-and-properties",children:"Available functions and properties"}),(0,n.jsx)(i.h3,{id:"timestamp_diff",children:"timestamp_diff"}),(0,n.jsxs)(i.p,{children:['This function provides access to the "age" of a location update.\nIt gives the time difference between the location\'s ',(0,n.jsx)(i.strong,{children:"timestamp_generated"})," and ",(0,n.jsx)(i.strong,{children:"now"})," in milliseconds."]}),(0,n.jsx)(i.h3,{id:"accuracy",children:"accuracy"}),(0,n.jsx)(i.p,{children:"This enables checks against the accuracy of the location update."}),(0,n.jsx)(i.h3,{id:"provider_id",children:"provider_id"}),(0,n.jsx)(i.p,{children:"This enables checks against the provider id of the location update."}),(0,n.jsx)(i.h3,{id:"type",children:"type"}),(0,n.jsx)(i.p,{children:"This enables checks against the provider type of the location update.\nAvailable types are: uwb, gps, wifi, rfid, ibeacon, virtual, unknown"}),(0,n.jsx)(i.h3,{id:"source",children:"source"}),(0,n.jsx)(i.p,{children:"This enables checks against the source of the location update."}),(0,n.jsx)(i.h3,{id:"floor",children:"floor"}),(0,n.jsx)(i.p,{children:"This enables checks against the floor of the location update."}),(0,n.jsx)(i.h3,{id:"speed",children:"speed"}),(0,n.jsx)(i.p,{children:"This enables checks against the speed of the location update."}),(0,n.jsx)(i.h2,{id:"available-operators",children:"Available operators"}),(0,n.jsxs)(i.p,{children:["The following operators are available for expressions:\n",(0,n.jsx)(i.code,{children:"="}),", ",(0,n.jsx)(i.code,{children:"!="}),", ",(0,n.jsx)(i.code,{children:"<"}),", ",(0,n.jsx)(i.code,{children:"<="}),", ",(0,n.jsx)(i.code,{children:">"}),", ",(0,n.jsx)(i.code,{children:">="}),", and ",(0,n.jsx)(i.code,{children:"AND"}),"."]})]}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(i.h2,{id:"example",children:"Example"}),(0,n.jsx)(i.p,{children:"The following locating rules would be described in natural language as:"}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Use the precise UWB location if the location is not older than 10s,"}),"\n",(0,n.jsx)(i.li,{children:"otherwise switch back to GPS if the accuracy is better than 10m."}),"\n"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'"locating_rules": [\n  {\n    "expression": "type = \'uwb\' AND timestamp_diff < 10000",\n    "priority": 10\n  },\n  {\n    "expression": "type = \'gps\' AND accuracy < 10000",\n    "priority": 9\n  }\n]\n'})})]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},70387:(e,i,t)=>{t.d(i,{Z:()=>s});t(67294);var n=t(85893);function s(e){let{children:i}=e;return(0,n.jsx)("section",{className:"section markdown",children:i})}},11151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>o});var n=t(67294);const s={},a=n.createContext(s);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);