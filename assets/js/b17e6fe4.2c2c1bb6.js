"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[5371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},54948:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);function o(e){let{children:t}=e;return a.createElement("div",{className:"mb-3 rounded border border-card shadow-md"},a.createElement("div",{className:"card-body p-4"},t))}},70387:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294);function o(e){let{children:t}=e;return a.createElement("section",{className:"section markdown"},t)}},35077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),r=n(70387),i=n(54948),l=n(74866),s=n(85162);const c={sidebar_label:"Admin UI",title:"Admin UI",sidebar_position:2},u=void 0,p={unversionedId:"deephub-ui/deephub-admin-ui",id:"deephub-ui/deephub-admin-ui",title:"Admin UI",description:"Overview",source:"@site/docs/deephub-ui/deephub-admin-ui.mdx",sourceDirName:"deephub-ui",slug:"/deephub-ui/deephub-admin-ui",permalink:"/docs/deephub-ui/deephub-admin-ui",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Admin UI",title:"Admin UI",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/deephub-ui/deephub-ui-overview"},next:{title:"Kiosk UI",permalink:"/docs/deephub-ui/deephub-kiosk-ui"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Live View",id:"live-view",level:2},{value:"Fences",id:"fences",level:2},{value:"Zones",id:"zones",level:2},{value:"Trackables",id:"trackables",level:2},{value:"Location Providers",id:"location-providers",level:2},{value:"Subscription",id:"subscription",level:2},{value:"&quot;API&quot; of the DeepHub Admin UI",id:"api-of-the-deephub-admin-ui",level:2}],h={toc:m},b="wrapper";function f(e){let{components:t,...c}=e;return(0,o.kt)(b,(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The user interface consists of five system components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#live-view"},"Live View")," - logs information of triggered events when trackables propagate through fences. Event information in the log consists of the fence name through which a trackable is moving, along with entry and exit timestamps."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#trackables"},"Trackables")," - allows users to assign trackables to the asset being tracked and attach the associated positioning providers. Trackable parameters such as it\u2019s radius, exit delay, and collision tolerance can be defined as per requirements. Additionally, custom properties such as information about the asset can be assigned in this section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#location-providers"},"Location Providers")," - allows users to create location providers for different positioning technologies (ex. GPS, WiFi, UWB, etc.). Parameters such as the fence timeout, exit delay, and collision tolerance can be defined as per requirements. Additionally, custom properties for the location provider can be assigned in this section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#fences"},"Fence Management")," - allows users to locate numerous fences in one or multiple localization zones. Trackables entering and exiting fences would trigger an event. Different fences could be associated with different localization zones. The system operator and moderator would be responsible for creating and monitoring fences."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#zone-setup"},"Zone Setup")," - used to define the localization zones on the map for multiple positioning technologies (ex. WiFi, UWB, RFID, etc.). The individual responsible for installing and implementing the localization infrastructure would set up the zones based on localization techniques. Zones need to be set up once for each site.")),(0,o.kt)("img",{src:n(6205).Z,alt:"Hub interface",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"live-view"},"Live View"),(0,o.kt)("p",null,"The Live View mostly consists of a web map. At the top right corner, there are overlays/widgets to increase/decrease the zoom level of the map, reset the bearing to North, locate your current device, etc."),(0,o.kt)("p",null,'Furthermore, the Live View fetches and displays the "event triggers" in a list on the left side of the view.\nEvents are triggered when a trackable and/or a location provider enters and exits a fence. Helpful information, such as the timestamp of the event, are shown.'),(0,o.kt)("img",{src:n(9158).Z,alt:"Hub interface",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,"When a trackable enters a fence, the fence is highlighted in green.\nSimilarly, when a trackable leaves a fence, it is highlighted in red.")),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"fences"},"Fences"),(0,o.kt)(i.Z,{mdxType:"Card"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"step1",label:"Step 1",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,'To access the Fences menu, click the gear icon at the top right corner of the Admin UI to open the Configuration menu. Click on "Fences".'),(0,o.kt)("img",{src:n(40035).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step2",label:"Step 2",mdxType:"TabItem"},(0,o.kt)("p",null,"To create a fence, click on \u201cNew Fence\u201d from the option in the menu. This will launch a new pop-up window prompting the user to enter properties for the fence, such as the name.\nProvide a name and any other properties. Click \u201cNext\u201d in the pop-up window."),(0,o.kt)("img",{src:n(79080).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step3",label:"Step 3",mdxType:"TabItem"},(0,o.kt)("p",null,"Select points on the map to create a polygon-shaped fence. For example, select 4 points on the map to create a rectangular fence.\nAdditionally, custom properties can be assigned to fences, such as the name of the operation or the name of the material being stored in a fence."),(0,o.kt)("img",{src:n(98654).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step4",label:"Step 4",mdxType:"TabItem"},(0,o.kt)("p",null,"A new fence will appear on the map."),(0,o.kt)("img",{src:n(43917).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}))))),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"zones"},"Zones"),(0,o.kt)(i.Z,{mdxType:"Card"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"step1",label:"Step 1",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,'To access the Zones menu, click the gear icon at the top right corner of the Admin UI to open the Configuration menu. Click on "Zones".'),(0,o.kt)("img",{src:n(59803).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step2",label:"Step 2",mdxType:"TabItem"},(0,o.kt)("p",null,"To create a new localization zone, click on \u201cNew Zone\u201d and a new pop-up window will be launched to specify characteristics of the zone."),(0,o.kt)("img",{src:n(38380).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,"Fill in the name of the zone and the floor level upon which the zone is to be created.\nSelect the desired technology from the dropdown menu.")),(0,o.kt)(s.Z,{value:"step3",label:"Step 3",mdxType:"TabItem"},(0,o.kt)("p",null,'Select a method of creating a zone from the dropdown list and click on "Next". There are 4 methods to create a zone.'),(0,o.kt)("img",{src:n(62088).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step3.1",label:"Step 3.1",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"step3.1.1",label:"Extent based geometries",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extent based geometries (height/width)")),(0,o.kt)("p",null,'Enter the height and width of the zone rectangle in meters. It is also possible to enter the approximate address where the zone is to be created.\nClick on "Next" and the zone will appear on the user interface or at the approximate location that was specified.'),(0,o.kt)("img",{src:n(43257).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,'Adjust the zone orientation by moving and rotating the zone and click on "Save" to update the zone on the user interface.'),(0,o.kt)("img",{src:n(80423).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step3.1.2",label:"Local Position Input",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Local Position Input (Four-sided Polygon)")),(0,o.kt)("p",null,'Enter the coordinates for each corner of a rectangular zone in meters. It is also possible to enter the approximate address where the zone is to be created.\nClick on "Next" and the zone will appear on the user interface or at the approximate location that was specified.'),(0,o.kt)("img",{src:n(60498).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,'Adjust the zone orientation by moving and rotating the zone and click on "Save" to update the zone on the user interface.'),(0,o.kt)("img",{src:n(80423).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step3.1.3",label:"GPS Position Input",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GPS Position Input (Four-sided Polygon)")),(0,o.kt)("p",null,'Enter the geographic coordinates for each corner of a rectangular zone in the form of longitude and latitude.\nClick on "Next" and the zone will appear on the user interface.'),(0,o.kt)("img",{src:n(9406).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,'Adjust the zone orientation by moving and rotating the zone and click on "Save" to update the zone on the user interface.'),(0,o.kt)("img",{src:n(80423).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step3.1.4",label:"Drawing on Map",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Drawing on map")),(0,o.kt)("p",null,"Locate the desired site on the map using the search bar. Left click on the map to draw a polygonal zone in any shape. For example: Click 4 points to draw a rectangular zone. To finish drawing, left click on the first point you created.\nOn the right side of the user interface, the local position for each point of the newly introduced zone can be modified.\nClick on the \u201cSave\u201d button to integrate the new zone into the map."),(0,o.kt)("img",{src:n(75689).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})))),(0,o.kt)(s.Z,{value:"step4",label:"Step 4",mdxType:"TabItem"},(0,o.kt)("p",null,"The newly created zone will appear on the map. On the left side pane, the list of created zones will appear."),(0,o.kt)("img",{src:n(1245).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}))))),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"trackables"},"Trackables"),(0,o.kt)(i.Z,{mdxType:"Card"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"step1",label:"Step 1",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"To create a new trackable in the Admin UI, click on \u201cNew Trackable\u201d and a new window will launch prompting for the trackable information.\nPlease fill in the information as required and click \u201cSave\u201d to create a trackable."),(0,o.kt)("img",{src:n(14084).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step2",label:"Step 2",mdxType:"TabItem"},(0,o.kt)("p",null,"Once a trackable has been created, it is possible to add custom properties to it."),(0,o.kt)("img",{src:n(2462).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("img",{src:n(289).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}))))),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"location-providers"},"Location Providers"),(0,o.kt)(i.Z,{mdxType:"Card"},(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"step1",label:"Step 1",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"To create a new location provider in the Admin UI, click on \u201cNew Location Provider\u201d and a new window will launch prompting for the location provider information.\nPlease fill in the information as required and click \u201cSave\u201d to create a location provider."),(0,o.kt)("img",{src:n(27690).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}})),(0,o.kt)(s.Z,{value:"step2",label:"Step 2",mdxType:"TabItem"},(0,o.kt)("p",null,"Once a location provider has been created, it is possible to add custom properties to it."),(0,o.kt)("img",{src:n(18753).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("img",{src:n(37616).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}))))),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"subscription"},"Subscription"),(0,o.kt)("p",null,'Within the Admin UI, there is a section called "License Information" that includes relevant details related to the license/subscription of your DeepHub instance.\nTo access this menu, click the gear icon at the top right corner of the UI to open the Configuration menu. Click on "Subscription".'),(0,o.kt)("img",{src:n(16089).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,'The "License Information" page provides administrative information, such as the license type (Trial, Development, Production), customer email, a link to request a license key if needed, and a text box to enter and apply a license key. If the DeepHub instance has an active trial license, the end date and time of the trial period will be shown here as well.'),(0,o.kt)("img",{src:n(87161).Z,alt:"Fence Menu",style:{marginTop:60,marginBottom:60}}),(0,o.kt)("p",null,"For more information on DeepHub licenses, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview#license-mechanism"},"License Mechanism"),"  section.")),(0,o.kt)(r.Z,{mdxType:"Section"},(0,o.kt)("h2",{id:"api-of-the-deephub-admin-ui"},'"API" of the DeepHub Admin UI'),(0,o.kt)("p",null,"The DeepHub Admin UI offers several URL parameters to customize the ",(0,o.kt)("strong",{parentName:"p"},"Live View"),"."),(0,o.kt)("p",null,"Pan & Zoom to a specific location by specifying:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lng"),": the longitude to which the map should pan."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lat"),": the latitude to which the map should pan."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zoom"),": the zoom level. Must be in the range ","[0,24]",", where 0 corresponds to a zoomed out view of the globe, and 24 corresponds to a detailed, zoomed in view. For more information, refer to MapTiler - our default mapping service provider: ",(0,o.kt)("a",{parentName:"li",href:"https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection"},"Tiles \xe0 la Google Maps"),"_.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/map/system/live?lng=9.5367&lat=49.4055&zoom=9\n")),(0,o.kt)("p",null,"OR:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"id"),": pan & zoom to the last known location of a ",(0,o.kt)("strong",{parentName:"li"},"trackable or location provider")," with the given id(s). If several ids are provided, they must be comma-separated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"filterid"),": only render ",(0,o.kt)("strong",{parentName:"li"},"trackables and location providers")," with the given id(s). If several ids are provided, they must be comma-separated. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/map/system/live?id=d49f0712-dcbd-4cbc-8b4f-c006b8555839\n"))))}f.isMDXComponent=!0},40035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_fence_1-56a37e381ba0992a0203beb96018f90b.png"},79080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_fence_2-5533be710b6b77358e2718e1497b6afa.png"},98654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_fence_3-ff35140867b397f83d895b799912e443.png"},43917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_fence_4-f2d2a0254c71ed98b8969cf7b6440bfe.png"},9158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_live-113cbb0971beaaa82113d115b3604550.png"},27690:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_loc_pro_1-05d63bbf04cb16d6d924f28cebc135de.png"},18753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_loc_pro_2-31368e8c857bdeb8f475c9bcf5335fcf.png"},37616:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_loc_pro_3-2bfdfa6150864fb8aafb265bb6a6f5f5.png"},16089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_subscription_1-8b9bc40a2fde95f2df8eb6c77173d570.png"},87161:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_subscription_2-23601c88994eaeb0e4676cbf958e9d87.png"},14084:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_track_1-53be685c1b4fe4162fd158fd62bbc0a1.png"},2462:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_track_2-75d07e2dbe9ec431bd1a8d25c5f92d71.png"},289:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_track_3-a2b40fdfca015572da5d0abd2a7f3a05.png"},59803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_1-6eedf18f1abae9eeef48df2953b9eb6d.png"},38380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_2-178374143f4d61c82b35465032ab6f46.png"},62088:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_3-7d9ba2b70e51ffdfafbda2c697ed44e4.png"},43257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_4-487a538e0a03b0f2182777f44ef473c5.png"},80423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_5-f91fbcd2f21410f63efaa87daacce435.png"},60498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_6-bd603f073fe70e5e9a3b52c7cf8688b2.png"},9406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_7-3c47cd38b18a4145ae70a197eb07d75c.png"},75689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_8-a81b287787c6df165114c4597091d006.png"},1245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_i_zone_9-af64daf200b3db8513774f80b0ededfe.png"},6205:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hub_interface-43075170c60bcc1cb3a4f4ce0a7ac0c4.png"}}]);