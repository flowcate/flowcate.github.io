"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[2290],{52526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var i=t(85893),a=t(11151),s=t(70387),o=t(54948),r=t(74866),l=t(85162);const c={sidebar_label:"Admin UI",title:"Admin UI",sidebar_position:3},d=void 0,h={id:"deephub-ui/deephub-admin-ui",title:"Admin UI",description:"Overview",source:"@site/versioned_docs/version-DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-admin-ui.mdx",sourceDirName:"deephub-ui",slug:"/deephub-ui/deephub-admin-ui",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-admin-ui",draft:!1,unlisted:!1,tags:[],version:"DeepHub 2023 R1 - 2.3.2",sidebarPosition:3,frontMatter:{sidebar_label:"Admin UI",title:"Admin UI",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-ui-configuration"},next:{title:"Kiosk UI",permalink:"/docs/DeepHub 2023 R1 - 2.3.2/deephub-ui/deephub-kiosk-ui"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Live View",id:"live-view",level:2},{value:"Fences",id:"fences",level:2},{value:"Zones",id:"zones",level:2},{value:"Trackables",id:"trackables",level:2},{value:"Location Providers",id:"location-providers",level:2},{value:"Subscription",id:"subscription",level:2},{value:"&quot;API&quot; of the DeepHub Admin UI",id:"api-of-the-deephub-admin-ui",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),(0,i.jsx)(n.p,{children:"The user interface consists of five system components:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#live-view",children:"Live View"})," - logs information of triggered events when trackables propagate through fences. Event information in the log consists of the fence name through which a trackable is moving, along with entry and exit timestamps."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#trackables",children:"Trackables"})," - allows users to assign trackables to the asset being tracked and attach the associated positioning providers. Trackable parameters such as it\u2019s radius, exit delay, and collision tolerance can be defined as per requirements. Additionally, custom properties such as information about the asset can be assigned in this section."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#location-providers",children:"Location Providers"})," - allows users to create location providers for different positioning technologies (ex. GPS, WiFi, UWB, etc.). Parameters such as the fence timeout, exit delay, and collision tolerance can be defined as per requirements. Additionally, custom properties for the location provider can be assigned in this section."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#fences",children:"Fence Management"})," - allows users to locate numerous fences in one or multiple localization zones. Trackables entering and exiting fences would trigger an event. Different fences could be associated with different localization zones. The system operator and moderator would be responsible for creating and monitoring fences."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#zone-setup",children:"Zone Setup"})," - used to define the localization zones on the map for multiple positioning technologies (ex. WiFi, UWB, RFID, etc.). The individual responsible for installing and implementing the localization infrastructure would set up the zones based on localization techniques. Zones need to be set up once for each site."]}),"\n"]}),(0,i.jsx)("img",{src:t(29028).Z,alt:"Hub interface",style:{marginTop:60,marginBottom:60}})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"live-view",children:"Live View"}),(0,i.jsx)(n.p,{children:"The Live View mostly consists of a web map. At the top right corner, there are overlays/widgets to increase/decrease the zoom level of the map, reset the bearing to North, locate your current device, etc."}),(0,i.jsx)(n.p,{children:'Furthermore, the Live View fetches and displays the "event triggers" in a list on the left side of the view.\nEvents are triggered when a trackable and/or a location provider enters and exits a fence. Helpful information, such as the timestamp of the event, are shown.'}),(0,i.jsx)("img",{src:t(24534).Z,alt:"Hub interface",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)(n.p,{children:"When a trackable enters a fence, the fence is highlighted in green.\nSimilarly, when a trackable leaves a fence, it is highlighted in red."})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"fences",children:"Fences"}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(l.Z,{value:"step1",label:"Step 1",default:!0,children:[(0,i.jsx)(n.p,{children:'To access the Fences menu, click the gear icon at the top right corner of the Admin UI to open the Configuration menu. Click on "Fences".'}),(0,i.jsx)("img",{src:t(96992).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step2",label:"Step 2",children:[(0,i.jsx)(n.p,{children:"To create a fence, click on \u201cNew Fence\u201d from the option in the menu. This will launch a new pop-up window prompting the user to enter properties for the fence, such as the name.\nProvide a name and any other properties. Click \u201cNext\u201d in the pop-up window."}),(0,i.jsx)("img",{src:t(8156).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step3",label:"Step 3",children:[(0,i.jsx)(n.p,{children:"Select points on the map to create a polygon-shaped fence. For example, select 4 points on the map to create a rectangular fence.\nAdditionally, custom properties can be assigned to fences, such as the name of the operation or the name of the material being stored in a fence."}),(0,i.jsx)("img",{src:t(91651).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step4",label:"Step 4",children:[(0,i.jsx)(n.p,{children:"A new fence will appear on the map."}),(0,i.jsx)("img",{src:t(27767).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]})]})})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"zones",children:"Zones"}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(l.Z,{value:"step1",label:"Step 1",default:!0,children:[(0,i.jsx)(n.p,{children:'To access the Zones menu, click the gear icon at the top right corner of the Admin UI to open the Configuration menu. Click on "Zones".'}),(0,i.jsx)("img",{src:t(13220).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step2",label:"Step 2",children:[(0,i.jsx)(n.p,{children:"To create a new localization zone, click on \u201cNew Zone\u201d and a new pop-up window will be launched to specify characteristics of the zone."}),(0,i.jsx)("img",{src:t(16953).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)(n.p,{children:"Fill in the name of the zone and the floor level upon which the zone is to be created.\nSelect the desired technology from the dropdown menu."})]}),(0,i.jsxs)(l.Z,{value:"step3",label:"Step 3",children:[(0,i.jsx)(n.p,{children:'Select a method of creating a zone from the dropdown list and click on "Next". There are 4 methods to create a zone.'}),(0,i.jsx)("img",{src:t(18285).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsx)(l.Z,{value:"step3.1",label:"Step 3.1",children:(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(l.Z,{value:"step3.1.1",label:"Extent based geometries",default:!0,children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Extent based geometries (height/width)"})}),(0,i.jsx)(n.p,{children:'Enter the height and width of the zone rectangle in meters. It is also possible to enter the approximate address where the zone is to be created.\nClick on "Next" and the zone will appear on the user interface or at the approximate location that was specified.'}),(0,i.jsx)("img",{src:t(81489).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)(n.p,{children:'Adjust the zone orientation by moving and rotating the zone and click on "Save" to update the zone on the user interface.'}),(0,i.jsx)("img",{src:t(71627).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step3.1.2",label:"Local Position Input",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Local Position Input (Four-sided Polygon)"})}),(0,i.jsx)(n.p,{children:'Enter the coordinates for each corner of a rectangular zone in meters. It is also possible to enter the approximate address where the zone is to be created.\nClick on "Next" and the zone will appear on the user interface or at the approximate location that was specified.'}),(0,i.jsx)("img",{src:t(63429).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)(n.p,{children:'Adjust the zone orientation by moving and rotating the zone and click on "Save" to update the zone on the user interface.'}),(0,i.jsx)("img",{src:t(71627).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step3.1.3",label:"GPS Position Input",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"GPS Position Input (Four-sided Polygon)"})}),(0,i.jsx)(n.p,{children:'Enter the geographic coordinates for each corner of a rectangular zone in the form of longitude and latitude.\nClick on "Next" and the zone will appear on the user interface.'}),(0,i.jsx)("img",{src:t(54101).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)(n.p,{children:'Adjust the zone orientation by moving and rotating the zone and click on "Save" to update the zone on the user interface.'}),(0,i.jsx)("img",{src:t(71627).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step3.1.4",label:"Drawing on Map",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Drawing on map"})}),(0,i.jsx)(n.p,{children:"Locate the desired site on the map using the search bar. Left click on the map to draw a polygonal zone in any shape. For example: Click 4 points to draw a rectangular zone. To finish drawing, left click on the first point you created.\nOn the right side of the user interface, the local position for each point of the newly introduced zone can be modified.\nClick on the \u201cSave\u201d button to integrate the new zone into the map."}),(0,i.jsx)("img",{src:t(31982).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]})]})}),(0,i.jsxs)(l.Z,{value:"step4",label:"Step 4",children:[(0,i.jsx)(n.p,{children:"The newly created zone will appear on the map. On the left side pane, the list of created zones will appear."}),(0,i.jsx)("img",{src:t(17374).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]})]})})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"trackables",children:"Trackables"}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(l.Z,{value:"step1",label:"Step 1",default:!0,children:[(0,i.jsx)(n.p,{children:"To create a new trackable in the Admin UI, click on \u201cNew Trackable\u201d and a new window will launch prompting for the trackable information.\nPlease fill in the information as required and click \u201cSave\u201d to create a trackable."}),(0,i.jsx)("img",{src:t(52498).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step2",label:"Step 2",children:[(0,i.jsx)(n.p,{children:"Once a trackable has been created, it is possible to add custom properties to it."}),(0,i.jsx)("img",{src:t(59245).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)("img",{src:t(40376).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]})]})})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"location-providers",children:"Location Providers"}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(l.Z,{value:"step1",label:"Step 1",default:!0,children:[(0,i.jsx)(n.p,{children:"To create a new location provider in the Admin UI, click on \u201cNew Location Provider\u201d and a new window will launch prompting for the location provider information.\nPlease fill in the information as required and click \u201cSave\u201d to create a location provider."}),(0,i.jsx)("img",{src:t(2078).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]}),(0,i.jsxs)(l.Z,{value:"step2",label:"Step 2",children:[(0,i.jsx)(n.p,{children:"Once a location provider has been created, it is possible to add custom properties to it."}),(0,i.jsx)("img",{src:t(60607).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)("img",{src:t(79803).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})]})]})})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"subscription",children:"Subscription"}),(0,i.jsx)(n.p,{children:'Within the Admin UI, there is a section called "License Information" that includes relevant details related to the license/subscription of your DeepHub instance.\nTo access this menu, click the gear icon at the top right corner of the UI to open the Configuration menu. Click on "Subscription".'}),(0,i.jsx)("img",{src:t(20207).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsx)(n.p,{children:'The "License Information" page provides administrative information, such as the license type (Trial, Development, Production), customer email, a link to request a license key if needed, and a text box to enter and apply a license key. If the DeepHub instance has an active trial license, the end date and time of the trial period will be shown here as well.'}),(0,i.jsx)("img",{src:t(64769).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,i.jsxs)(n.p,{children:["For more information on DeepHub licenses, refer to the ",(0,i.jsx)(n.a,{href:"/docs/DeepHub%202023%20R1%20-%202.3.2/overview#license-mechanism",children:"License Mechanism"})," section."]})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(n.h2,{id:"api-of-the-deephub-admin-ui",children:'"API" of the DeepHub Admin UI'}),(0,i.jsxs)(n.p,{children:["The DeepHub Admin UI offers several URL parameters to customize the ",(0,i.jsx)(n.strong,{children:"Live View"}),"."]}),(0,i.jsx)(n.p,{children:"Pan & Zoom to a specific location by specifying:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"lng"}),": the longitude to which the map should pan."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"lat"}),": the latitude to which the map should pan."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"zoom"}),": the zoom level. Must be in the range [0,24], where 0 corresponds to a zoomed out view of the globe, and 24 corresponds to a detailed, zoomed in view. For more information, refer to MapTiler - our default mapping service provider: ",(0,i.jsx)(n.a,{href:"https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection",children:"Tiles \xe0 la Google Maps"}),"_."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/map/system/live?lng=9.5367&lat=49.4055&zoom=9\n"})}),(0,i.jsx)(n.p,{children:"OR:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"id"}),": pan & zoom to the last known location of a ",(0,i.jsx)(n.strong,{children:"trackable or location provider"})," with the given id(s). If several ids are provided, they must be comma-separated."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"filterid"}),": only render ",(0,i.jsx)(n.strong,{children:"trackables and location providers"})," with the given id(s). If several ids are provided, they must be comma-separated."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/map/system/live?id=d49f0712-dcbd-4cbc-8b4f-c006b8555839\n"})})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var i=t(90512);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>Z});var i=t(67294),a=t(90512),s=t(12466),o=t(16550),r=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=r[t].value;a!==i&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function Z(e){const n=(0,f.Z)();return(0,x.jsx)(w,{...e,children:h(e.children)},String(n))}},54948:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var i=t(85893);function a(e){let{children:n}=e;return(0,i.jsx)("div",{className:"mb-3 rounded border border-card shadow-md",children:(0,i.jsx)("div",{className:"card-body p-4",children:n})})}},70387:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var i=t(85893);function a(e){let{children:n}=e;return(0,i.jsx)("section",{className:"section markdown",children:n})}},96992:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_fence_1-56a37e381ba0992a0203beb96018f90b.png"},8156:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_fence_2-5533be710b6b77358e2718e1497b6afa.png"},91651:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_fence_3-ff35140867b397f83d895b799912e443.png"},27767:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_fence_4-f2d2a0254c71ed98b8969cf7b6440bfe.png"},24534:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_live-113cbb0971beaaa82113d115b3604550.png"},2078:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_loc_pro_1-05d63bbf04cb16d6d924f28cebc135de.png"},60607:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_loc_pro_2-31368e8c857bdeb8f475c9bcf5335fcf.png"},79803:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_loc_pro_3-2bfdfa6150864fb8aafb265bb6a6f5f5.png"},20207:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_subscription_1-8b9bc40a2fde95f2df8eb6c77173d570.png"},64769:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_subscription_2-23601c88994eaeb0e4676cbf958e9d87.png"},52498:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_track_1-53be685c1b4fe4162fd158fd62bbc0a1.png"},59245:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_track_2-75d07e2dbe9ec431bd1a8d25c5f92d71.png"},40376:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_track_3-a2b40fdfca015572da5d0abd2a7f3a05.png"},13220:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_1-6eedf18f1abae9eeef48df2953b9eb6d.png"},16953:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_2-178374143f4d61c82b35465032ab6f46.png"},18285:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_3-7d9ba2b70e51ffdfafbda2c697ed44e4.png"},81489:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_4-487a538e0a03b0f2182777f44ef473c5.png"},71627:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_5-f91fbcd2f21410f63efaa87daacce435.png"},63429:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_6-bd603f073fe70e5e9a3b52c7cf8688b2.png"},54101:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_7-3c47cd38b18a4145ae70a197eb07d75c.png"},31982:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_8-a81b287787c6df165114c4597091d006.png"},17374:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_i_zone_9-af64daf200b3db8513774f80b0ededfe.png"},29028:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hub_interface-43075170c60bcc1cb3a4f4ce0a7ac0c4.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);