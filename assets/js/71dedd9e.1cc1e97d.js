"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[6118],{28499:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=n(85893),i=n(11151),a=n(70387);const s={sidebar_label:"Mobile Zone Extension",title:"Mobile Zone Extension",sidebar_position:7},r=void 0,l={id:"deephub/mobilezones",title:"Mobile Zone Extension",description:"The Mobile Zone Extension (MZE) of the DeepHub\xae allows for the seamless integration of proximity-based positioning solutions that change their position. The MZE changes the position of your proximity zone by connecting the zone with location updates of a real-time locating system - via an omlox Location Provider or an omlox Trackable.",source:"@site/versioned_docs/version-DeepHub 2022 R2 - 2.2.3/deephub/mobilezones.mdx",sourceDirName:"deephub",slug:"/deephub/mobilezones",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/mobilezones",draft:!1,unlisted:!1,tags:[],version:"DeepHub 2022 R2 - 2.2.3",sidebarPosition:7,frontMatter:{sidebar_label:"Mobile Zone Extension",title:"Mobile Zone Extension",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Locating Rule Extension",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/LocatingRuleExtension"},next:{title:"Cisco CMX Location Notification Adapter",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/ciscocmx"}},c={},d=[{value:"Setup and Configuration",id:"setup-and-configuration",level:2}];function p(e){const o={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.p,{children:"The Mobile Zone Extension (MZE) of the DeepHub\xae allows for the seamless integration of proximity-based positioning solutions that change their position. The MZE changes the position of your proximity zone by connecting the zone with location updates of a real-time locating system - via an omlox Location Provider or an omlox Trackable."}),(0,t.jsx)(o.p,{children:"As an example use case, consider you have assets equipped with RFID tags, and you want to keep track of the exact location of your assets in your warehouse. The RFID tags do not provide exact location information. However, with omlox, you can combine multiple positioning technologies and thereby add location information. For example, you could combine an UWB positioning system with proximity information provided by an RFID positioning system."}),(0,t.jsx)(o.p,{children:"To illustrate this further, consider you have a forklift equipped with an RFID scanner and an UWB tag. The UWB tag provides exact real-time location information about the forklift, while the RFID scanner provides information about the assets the forklift is carrying. The RFID scanner will receive proximity information as long as your forklift carries assets with RFID tags attached to them."}),(0,t.jsx)(o.p,{children:"Normally, the position of a proximity-based zone has to be updated manually, because it cannot generate location information on its own. However, with the DeepHub MZE, you can keep track of the position where assets were dropped off by matching the location information of the forklift with the last-received proximity information of carried assets."}),(0,t.jsx)(o.p,{children:"The DeepHub MZE makes this task as simple as possible."})]}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(o.h2,{id:"setup-and-configuration",children:"Setup and Configuration"}),(0,t.jsx)(o.p,{children:"Setting up the MZE is done in two steps. First, a zone needs to be created representing each available proximity positioning system (e.g. RFID scanner). Next, an omlox trackable (e.g. representing a forklift) or an omlox location provider (e.g. an UWB tag) needs to be assigned to the zone in order to enable the MZE. By linking the trackable or location provider with the zone of the installed proximity system, the position of the proximity system will be updated in real-time as the trackable or location provider relocates."}),(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Setting up a proximity zone in the DeepHub:"})}),(0,t.jsx)(o.p,{children:"You may create a zone through the DeepHub API or the DeepHub UI. To do so in the UI:"}),(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Login to the DeepHub UI."}),"\n",(0,t.jsx)(o.li,{children:"Choose Zones."}),"\n",(0,t.jsx)(o.li,{children:"Create a new zone by setting a proper zone type (rfid or ibeacon) and floor level. You do not need to choose an exact position on the map, as the position will be updated automatically. Simply choose a nearby location."}),"\n",(0,t.jsx)(o.li,{children:'Set a unique Foreign ID, for example "forklift-123-rfid".'}),"\n",(0,t.jsx)(o.li,{children:"Click Save to create the zone."}),"\n"]}),(0,t.jsx)(o.p,{children:"You should now see location updates in real-time in the Live View of the DeepHub UI when location updates are received."}),(0,t.jsx)(o.p,{children:"In order to enable the MZE for this zone, you must assign a location provider or trackable to the zone by adding a location provider or trackable to the zone\u2019s properties. This is currently only possible through the DeepHub API. The member variables available for the zone properties are the following:"}),(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"\"com.hdm.hub.zone.autozoneupdate.trackables\": A list containing IDs of trackables. The zone's position is updated whenever a trackable's location is updated."}),"\n",(0,t.jsx)(o.li,{children:'"com.hdm.hub.zone.autozoneupdate.providers": A list containing IDs of location providers. The zone\'s position is updated whenever one of the locations is updated.'}),"\n"]}),(0,t.jsx)(o.p,{children:"An example zone with location providers and trackables configured for auto position updating of the zone:"}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "id": "ffffffff-bce8-6c23-e342-80bd5c938775",\n  "foreign_id": "rfid-provider-autozone",\n  "type": "rfid",\n  "floor": 4,\n  "need_transformation": true,\n  "name": "Zone R (RFID)",\n  "address": "",\n  "position": {\n    "type": "Point",\n    "coordinates": [0, 0]\n  },\n  "radius": 2.0,\n  "properties": {\n    "com.hdm.hub.zone.autozoneupdate.providers": ["autozone-provider-123"],\n    "com.hdm.hub.zone.autozoneupdate.trackables": [\n      "5EE9265B-EFDF-4EDB-98AD-9D01E11B687F"\n    ]\n  }\n}\n'})})]})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},70387:(e,o,n)=>{n.d(o,{Z:()=>i});n(67294);var t=n(85893);function i(e){let{children:o}=e;return(0,t.jsx)("section",{className:"section markdown",children:o})}},11151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>s});var t=n(67294);const i={},a=t.createContext(i);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);