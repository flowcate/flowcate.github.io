"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[9826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70387:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t}=e;return a.createElement("section",{className:"section markdown"},t)}},34333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(70387);const l={sidebar_position:5},o="WebSocket API",s={unversionedId:"deephub/WebsocketAPI",id:"version-DeepHub 2022 R2 - 2.2.3/deephub/WebsocketAPI",title:"WebSocket API",description:"Overview",source:"@site/versioned_docs/version-DeepHub 2022 R2 - 2.2.3/deephub/WebsocketAPI.md",sourceDirName:"deephub",slug:"/deephub/WebsocketAPI",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/WebsocketAPI",draft:!1,tags:[],version:"DeepHub 2022 R2 - 2.2.3",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/api"},next:{title:"Locating Rule Extension",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/deephub/LocatingRuleExtension"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"General omlox\u2122 Publish / Subscribe Concept",id:"general-omlox-publish--subscribe-concept",level:2},{value:"location_updates",id:"location_updates",level:3},{value:"location_updates:geojson",id:"location_updatesgeojson",level:3},{value:"collision_events",id:"collision_events",level:3},{value:"fence_events",id:"fence_events",level:3},{value:"fence_events:geojson",id:"fence_eventsgeojson",level:3},{value:"trackable_motions",id:"trackable_motions",level:3},{value:"Websocket Data Objects",id:"websocket-data-objects",level:2},{value:"Subscribing to a topic",id:"subscribing-to-a-topic",level:2},{value:"Successful subscription response",id:"successful-subscription-response",level:3},{value:"Unsubscribing",id:"unsubscribing",level:3},{value:"Unsubscribe response",id:"unsubscribe-response",level:3},{value:"Data submission without subscription",id:"data-submission-without-subscription",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Filtering &amp; Subscription Parametrization",id:"filtering--subscription-parametrization",level:2},{value:"Parameters for topic location_updates",id:"parameters-for-topic-location_updates",level:3},{value:"Parameters for topic trackable_motions",id:"parameters-for-topic-trackable_motions",level:3},{value:"Parameters for topic fence_events",id:"parameters-for-topic-fence_events",level:3},{value:"Parameters for topic collision_updates",id:"parameters-for-topic-collision_updates",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"websocket-api"},"WebSocket API"),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This document describes the general Websocket publish / subscribe concept for connecting Location Cores and client services and to exchange messages and events over a websocket connection. ")),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"general-omlox-publish--subscribe-concept"},"General omlox\u2122 Publish / Subscribe Concept"),(0,r.kt)("p",null,"Applications can subscribe and unsubscribe themselves to named topics. Data published to a topic will be received by all subscribers of that topic. All data sent to and received from the WebSocket connection is wrapped into the payload property of the wrapper object detailed in the next section. "),(0,r.kt)("p",null,"To subscribe to a topic, the application sends a json encoded message. The server generates a response, either acknowledging a successful subscription / unsubscription or returns an error message. "),(0,r.kt)("p",null,"The server also generates a subscription_id for a successful subscription. This allows an application to subscribe itself to the same topic multiple times with differing parameters and control each subscription separately. Subscriptions are otherwise automatically terminated when the websocket connection is closed."),(0,r.kt)("p",null,"The following named topics are available:"),(0,r.kt)("h3",{id:"location_updates"},"location_updates"),(0,r.kt)("p",null,"This topic is useful to retrieve real-time location updates, as well as sending location updates to the hub. Location data received by the hub is processed and then forwarded to all subscribers of this topic. "),(0,r.kt)("p",null,"When receiving data for this topic the payload of the wrapper object contains omlox\u2122 Location objects."),(0,r.kt)("h3",{id:"location_updatesgeojson"},"location_updates:geojson"),(0,r.kt)("p",null,"This topic is similar to location_updates, but instead of an omlox\u2122 Location object ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"GeoJson")," feature collections are returned as payload. "),(0,r.kt)("p",null,"When receiving data for this topic the payload of the wrapper object contains GeoJson feature collections."),(0,r.kt)("h3",{id:"collision_events"},"collision_events"),(0,r.kt)("p",null,"This topic is used to retrieve real-time collision events. The hub checks trackable movements for collisions and sends collision events when trackables: start to collide, continue to collide and end a collision. "),(0,r.kt)("p",null,"When receiving data for this topic the payload of the wrapper object contains omlox\u2122 CollisionEvent objects."),(0,r.kt)("h3",{id:"fence_events"},"fence_events"),(0,r.kt)("p",null,"This topic is used to inform subscribers about geofence entry and exit events. The hub implementation checks location providers and trackables for fence events and sends appropriate events to subscribers of this topic immediately for each fence entry and fence exit event. "),(0,r.kt)("p",null,"When receiving data for this topic the payload of the wrapper object contains omlox\u2122 FenceEvent objects."),(0,r.kt)("h3",{id:"fence_eventsgeojson"},"fence_events:geojson"),(0,r.kt)("p",null,"This topic is similar to fence_events, but instead of an omlox\u2122 FenceEvent object ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7946"},"GeoJson")," feature collections are returned as payload. "),(0,r.kt)("p",null,"When receiving data for this topic the payload of the wrapper object contains GeoJson feature collections."),(0,r.kt)("h3",{id:"trackable_motions"},"trackable_motions"),(0,r.kt)("p",null,"This topic informs subscribers about movements of an omlox\u2122 Trackable. For example, when one of the assigned omlox\u2122 Location Providers changes its position. "),(0,r.kt)("p",null,"When receiving data for this topic, the payload of the wrapper object contains omlox\u2122 TrackableMotion objects.")),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"websocket-data-objects"},"Websocket Data Objects"),(0,r.kt)("p",null,"Data between client and server are exchanged using a wrapper object with the following structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Any of ",(0,r.kt)("inlineCode",{parentName:"td"},"message"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribe"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribed"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unsubscribe"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"unsubscribed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_id"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The concrete topic subscription which generated the data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing valid omlox\u2122 data objects (or empty)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional object containing key-value pairs of parameters. Parameters usually match their REST API counterparts")))),(0,r.kt)("p",null,"The field ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," is always required for all data exchanged between client and server. Other fields are required depending on the event type. Concrete event based data structures are detailed in the respective sections below. "),(0,r.kt)("p",null,"Example data object containing an omlox\u2122 location object as payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "event": "message",\n      "topic": "location_updates",\n      "subscription_id": 123,\n      "payload": [\n        {\n            "position": {\n              "type": "Point",\n              "coordinates": [\n                5,\n                4\n              ]\n            },\n            "source": "fdb6df62-bce8-6c23-e342-80bd5c938774",\n            "provider_type": "uwb",\n            "provider_id": "77:4f:34:69:27:40",\n            "timestamp_generated": "2019-09-02T22:02:24.355Z",\n            "timestamp_sent": "2019-09-02T22:02:24.355Z"\n        }\n      ]\n    }\n')),(0,r.kt)("p",null,"In case of an error the server sends a json object with event type ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," and the following data structure: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Will be ",(0,r.kt)("inlineCode",{parentName:"td"},"error")," for an error object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A human readable error message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Error code")))),(0,r.kt)("p",null,"Example error object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "error",\n        "description": "Invalid data. The location data contains an invalid Position.",\n        "code": 10005\n    }\n')),(0,r.kt)("p",null,"The error code can be used by applications to discern the type of the error, e.g. for error handling and messaging on application side. "),(0,r.kt)("p",null,"Possible error codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10000: Event type is unknown"),(0,r.kt)("li",{parentName:"ul"},"10001: Unknown topic name"),(0,r.kt)("li",{parentName:"ul"},"10002: Subscription failed"),(0,r.kt)("li",{parentName:"ul"},"10003: Unsubscribe failed"),(0,r.kt)("li",{parentName:"ul"},"10004: Not authorized"),(0,r.kt)("li",{parentName:"ul"},"10005: Invalid payload data"),(0,r.kt)("li",{parentName:"ul"},"10006: Not authenticated"),(0,r.kt)("li",{parentName:"ul"},"10007: Invalid license"))),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"subscribing-to-a-topic"},"Subscribing to a topic"),(0,r.kt)("p",null,"Subscribing to a topic opens a connection to the websocket endpoint at e.g. ",(0,r.kt)("strong",{parentName:"p"},"ws://localhost:8081/deephub/v1/ws/socket"),". After successfully connecting, the client sends a subscribe request message to the server."),(0,r.kt)("p",null,"The subscribe request has the following structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subscribe"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"location_updates")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"fence_events"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional object containing key-value pairs of parameters. Parameters usually match their REST API counterparts")))),(0,r.kt)("p",null,"An example subscribe request to the location_updates topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "subscribe",\n        "topic": "location_updates",\n        "params": {\n            "crs": "EPSG:4326"\n        }\n    }\n')),(0,r.kt)("p",null,"Example subscribe request to fence events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "subscribe",\n        "topic": "fence_events"\n    }\n')),(0,r.kt)("h3",{id:"successful-subscription-response"},"Successful subscription response"),(0,r.kt)("p",null,"The server responds to the subscribe request either with success response or an error response. On successful subscription the server responds with a ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribed")," event, a copy of the subscribed topic as well as the subscription_id for the concrete subscription. "),(0,r.kt)("p",null,"It's important to keep the provided subscription_id on the client side in case the client wants to maintain multiple subscriptions to the same topic with different parameters. A client may however simply close it's connection, and all it's subscriptions will be cleaned up on the server side."),(0,r.kt)("p",null,"The subscription response has the following structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"On success ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_id"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic subscription id")))),(0,r.kt)("p",null,"Example server response for a successful subscription request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "subscribed",\n        "topic": "location_updates",\n        "subscription_id": 123\n    }\n')),(0,r.kt)("h3",{id:"unsubscribing"},"Unsubscribing"),(0,r.kt)("p",null,"To unsubscribe, a client must either close the connection, or send an unsubscribe request with a concrete subscription id to the server. "),(0,r.kt)("p",null,"The unsubscribe request has the following structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"unsubscribe"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_id"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic subscription id to unsubscribe from")))),(0,r.kt)("p",null,"Example unsubscribe object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "unsubscribe",\n        "subscription_id": 123\n    }\n')),(0,r.kt)("h3",{id:"unsubscribe-response"},"Unsubscribe response"),(0,r.kt)("p",null,"With a successful unsubscription, the server responds with an ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribed")," event."),(0,r.kt)("p",null,"Unsubscribe event structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"unsubscribed"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the topic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_id"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic subscription id from which the application was successfully unsubscribed")))),(0,r.kt)("p",null,"Example unsubscribe server response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "unsubscribed",\n        "topic": "location_updates",\n        "subscription_id": 123\n    }\n')),(0,r.kt)("h3",{id:"data-submission-without-subscription"},"Data submission without subscription"),(0,r.kt)("p",null,"A client can send / publish data to the server directly over the websocket connection without a subscription. For example, a client can send raw location data to the location_updates topic; the server processes the data in the same way as the /providers/locations API and then publishes the processed location data to subscribers of the location_updates topic. A data object sent by the client must have the event type ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," and use one of the available writeable topics. "),(0,r.kt)("p",null,"The message data has the following structure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"message"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Topic name (location_updates or fence_events)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"An array containing valid omlox\u2122 data objects (or empty)")))),(0,r.kt)("p",null,"Example message object containing raw location data for the location_updates topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "event": "message",\n      "topic": "location_updates",\n      "payload": [\n        {\n            "position": {\n              "type": "Point",\n              "coordinates": [\n                5,\n                4\n              ]\n            },\n            "source": "fdb6df62-bce8-6c23-e342-80bd5c938774",\n            "provider_type": "uwb",\n            "provider_id": "77:4f:34:69:27:40",\n            "timestamp_generated": "2019-09-02T22:02:24.355Z",\n            "timestamp_sent": "2019-09-02T22:02:24.355Z"\n        }\n      ]\n    }\n'))),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"When authorization is enabled, each event must contain a JWT token in the params section, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "subscribe", \n        "topic": "fence_events", \n        "params": {"token":"eyJhbG..."}\n    }\n'))),(0,r.kt)(i.Z,{mdxType:"Section"},(0,r.kt)("h2",{id:"filtering--subscription-parametrization"},"Filtering & Subscription Parametrization"),(0,r.kt)("p",null,"The publish / subscribe API allows to filter and transform data feeds by setting parameters as key / value pairs to the params section of a subscription request. The following example shows a subscription request to trackable motions with location data projected to UTM 32 (EPSG:32632) and filtering for a certain trackable id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "event": "subscribe",\n        "topic": "trackable_motions",\n        "params": {\n            "crs": "EPSG:32632",\n            "id": "0b680db2-b39b-45be-be77-40d7d2296cb4"\n        }\n    }\n')),(0,r.kt)("p",null,"Note: There can be any number of active subscriptions made by the same client to a topic. For example, it's possible to make two distinct subscriptions to the location_updates topic, where each subscription may filter for example for a different location provider. Subscribing to the same topic with the same parameters twice will however result in a subscription error, as is to be expected."),(0,r.kt)("p",null,"The following parameters are available for the respective WebSocket topics."),(0,r.kt)("h3",{id:"parameters-for-topic-location_updates"},"Parameters for topic location_updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the given provider ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events by source (e.g., zone)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter by omlox provider type (e.g., uwb, wifi, rfid)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"associated"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events which are currently associated to an infrastructure (e.g., relevant for wifi systems)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accuracy"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter data where accuracy is better than or equal to the value provided")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"floor"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter data matching the given floor level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"crs"),(0,r.kt)("td",{parentName:"tr",align:null},"Project location data to the given crs. Any crs supported by omlox can be set (e.g., local, EPSG:32632)")))),(0,r.kt)("h3",{id:"parameters-for-topic-trackable_motions"},"Parameters for topic trackable_motions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the given trackable ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the provider ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the trackable name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"floor"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching given floor level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"crs"),(0,r.kt)("td",{parentName:"tr",align:null},"Project location data to the given crs. Any crs supported by omlox can be set (e.g., local, EPSG:32632)")))),(0,r.kt)("h3",{id:"parameters-for-topic-fence_events"},"Parameters for topic fence_events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fence_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the given fence ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"foreign_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the given foreign ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the provider ID which caused the fence event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trackable_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events matching the trackable ID which was involved in the fence event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for fence entry (region_entry) or fence exit (region_exit) events")))),(0,r.kt)("h3",{id:"parameters-for-topic-collision_updates"},"Parameters for topic collision_updates"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"param"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collision_id_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events where one item of the collision pair matches given id (e.g., trackable ID involved in the collision)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collision_id_2"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as collision_id_1. Note: When both collision_id_1 and collision_id_2 are set events will effectively be filtered for collisions between these two trackables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collision_type"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter events by collision type. One of collision_start, colliding, collision_end"))))))}m.isMDXComponent=!0}}]);