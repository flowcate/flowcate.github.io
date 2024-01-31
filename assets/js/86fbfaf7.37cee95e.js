"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[4511],{73911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(85893),i=t(11151),r=t(70387);const s={sidebar_label:"Quuppa Connector",title:"Quuppa Connector",sidebar_position:10},a=void 0,d={id:"deephub/quuppaConnector",title:"Quuppa Connector",description:"The Quuppa connector for the DeepHub allows to connect a Quuppa Positioning Engine to the DeepHub by creating omlox location updates from the Quuppa locations.",source:"@site/versioned_docs/version-DeepHub 2023 R2 - 2.4.2/deephub/quuppaConnector.mdx",sourceDirName:"deephub",slug:"/deephub/quuppaConnector",permalink:"/docs/DeepHub 2023 R2 - 2.4.2/deephub/quuppaConnector",draft:!1,unlisted:!1,tags:[],version:"DeepHub 2023 R2 - 2.4.2",sidebarPosition:10,frontMatter:{sidebar_label:"Quuppa Connector",title:"Quuppa Connector",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"ISO-24730 Adapter",permalink:"/docs/DeepHub 2023 R2 - 2.4.2/deephub/iso24730"},next:{title:"RPC Interface",permalink:"/docs/DeepHub 2023 R2 - 2.4.2/deephub/RPCInterface"}},c={},l=[{value:"Setup and Configuration",id:"setup-and-configuration",level:2},{value:"Property Mapping",id:"property-mapping",level:2},{value:"Example",id:"example",level:3},{value:"Authorization",id:"authorization",level:2}];function p(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(n.p,{children:"The Quuppa connector for the DeepHub allows to connect a Quuppa Positioning Engine to the DeepHub by creating omlox location updates from the Quuppa locations."}),(0,o.jsx)(n.p,{children:"The connector can thereby be configured as a UDP output target in the Quuppa Positioning Engine."})]}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(n.h2,{id:"setup-and-configuration",children:"Setup and Configuration"}),(0,o.jsxs)(n.p,{children:["The Quuppa connector is available as a standalone Docker image at ",(0,o.jsx)(n.code,{children:"flowcate/deephub-connector:quuppa"}),".\nTo start this connector alongside a DeepHub instance the following configuration must be added to the service section in the docker-compose file used to start the DeepHub:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"quuppa:\n  image: flowcate/deephub-connector:quuppa\n  container_name: qpa-connector\n  environment:\n    - DEEPHUB_URL=deephub\n    - DEEPHUB_PORT=7081\n    - QUUPPA_CONNECTOR_PORT=12000\n    - QUUPPA_CONNECTOR_DEBUG=false\n  ports:\n    - '12000:12000/udp'\n  networks:\n    - deephub-net\n  depends_on:\n    - deephub\n"})}),(0,o.jsxs)(n.p,{children:["This configuration is based on the ",(0,o.jsx)(n.a,{href:"https://github.com/flowcate/deephub-basic-setup",children:"DeepHub Basic Example"}),'.\nIt will start an additional container ("quuppa-connector"), which accepts udp messages at port 12000.\nThese messages will be forwarded as omlox location updates to the DeepHub service.']}),(0,o.jsx)(n.p,{children:"For other setups, the details of the configuration may have to be adjusted.\nThe relevant configuration parameters are:"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Variable"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"DEEPHUB_PORT"}),(0,o.jsx)(n.td,{children:"The port of the DeepHub instance."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"DEEPHUB_URL"}),(0,o.jsx)(n.td,{children:"The address of the DeepHub instance."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"DEEPHUB_TARGET"}),(0,o.jsx)(n.td,{children:"The url target of the DeepHub instance."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"QUUPPA_CONNECTOR_PORT"}),(0,o.jsx)(n.td,{children:"The port used for receiving udp messages."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"QUUPPA_CONNECTOR_DEBUG"}),(0,o.jsx)(n.td,{children:"Whether debug output should be printed by the connector. (true or false)"})]})]})]}),(0,o.jsx)(n.p,{children:"The Quuppa connector can also run as a standalone service.\nIt does not have to run in the same docker network as the DeepHub.\nIn this case, the variable DEEPHUB_URL must point to the ip address or URL where the DeepHub can be reached."})]}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(n.h2,{id:"property-mapping",children:"Property Mapping"}),(0,o.jsx)(n.p,{children:"The omlox location updates are constructed based on the information contained in the Quuppa location.\nThe connector thereby uses the following mapping:"}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Quuppa"}),(0,o.jsx)(n.th,{children:"omlox"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tagId"}),(0,o.jsx)(n.td,{children:"provider_id"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"locationCoordSysId"}),(0,o.jsx)(n.td,{children:"source"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"location"}),(0,o.jsx)(n.td,{children:"position"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"locationTS"}),(0,o.jsx)(n.td,{children:"timestamp_generated"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"locationRadius"}),(0,o.jsx)(n.td,{children:"accuracy"})]})]})]}),(0,o.jsx)(n.p,{children:"Optional omlox properties may be omitted from the Quuppa message, but all required properties must be present."}),(0,o.jsxs)(n.p,{children:["The location updates are always interpreted as local coordinates.\nThis means that ",(0,o.jsx)(n.strong,{children:"locationCoordSysId"})," MUST correspond to a valid ",(0,o.jsx)(n.strong,{children:"id"})," or ",(0,o.jsx)(n.strong,{children:"foreign_id"})," of a zone in the DeepHub.",(0,o.jsx)(n.br,{}),"\n","Also, ",(0,o.jsx)(n.strong,{children:"locationType"})," is expected to be present in the Quuppa location and to be neither ",(0,o.jsx)(n.em,{children:"hidden"}),", nor ",(0,o.jsx)(n.em,{children:"noData"}),".",(0,o.jsx)(n.br,{}),"\n","The ",(0,o.jsx)(n.strong,{children:"provider_type"})," of the omlox location update will always be set to ",(0,o.jsx)(n.em,{children:"unknown"}),"."]}),(0,o.jsx)(n.p,{children:'In addition, the original Quuppa location will be added to the properties field of the omlox location as "quuppa_original".'}),(0,o.jsx)(n.h3,{id:"example",children:"Example"}),(0,o.jsx)(n.p,{children:"The following Quuppa location will result in the following omlox location update websocket message."}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// Quuppa location\n{\n  "location": [0, 0],\n  "tagId": "qpa_tag_id",\n  "locationCoordSysId": "qpa_zone_id",\n  "locationType": "position"\n}\n'})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'// resulting omlox location update websocket message\n{\n  "event": "message",\n  "topic": "location_updates",\n  "payload": [\n    {\n      "provider_type": "unknown",\n      "provider_id": "qpa_tag_id",\n      "source": "qpa_zone_id",\n      "position": { "type": "Point", "coordinates": [0, 0] },\n      "properties": {\n        "quuppa_original": {\n          "location": [0, 0],\n          "tagId": "qpa_tag_id",\n          "locationCoordSysId": "qpa_zone_id",\n          "locationType": "position"\n        }\n      }\n    }\n  ]\n}\n'})})]}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(n.h2,{id:"authorization",children:"Authorization"}),(0,o.jsxs)(n.p,{children:["Access management with authorization is currently ",(0,o.jsx)(n.strong,{children:"not"})," supported by this connector.\nIf the DeepHub is configured to require authorization for sending location updates via websocket, this connector will not be able to send location updates."]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},70387:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var o=t(85893);function i(e){let{children:n}=e;return(0,o.jsx)("section",{className:"section markdown",children:n})}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);