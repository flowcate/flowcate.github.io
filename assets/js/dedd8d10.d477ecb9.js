"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[4785],{33858:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=i(85893),n=i(11151),r=i(70387);const c={sidebar_position:5},o="WebSocket API",d={id:"deephub/WebsocketAPI",title:"WebSocket API",description:"Overview",source:"@site/docs/deephub/WebsocketAPI.md",sourceDirName:"deephub",slug:"/deephub/WebsocketAPI",permalink:"/docs/deephub/WebsocketAPI",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/docs/deephub/api"},next:{title:"Locating Rule Extension",permalink:"/docs/deephub/LocatingRuleExtension"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"General omlox\u2122 Publish / Subscribe Concept",id:"general-omlox-publish--subscribe-concept",level:2},{value:"Topics",id:"topics",level:2},{value:"location_updates",id:"location_updates",level:3},{value:"location_updates",id:"location_updates-1",level:3},{value:"collision_events",id:"collision_events",level:3},{value:"fence_events",id:"fence_events",level:3},{value:"fence_events",id:"fence_events-1",level:3},{value:"trackable_motions",id:"trackable_motions",level:3},{value:"provider_changes, trackable_changes, fence_changes, zone_changes",id:"provider_changes-trackable_changes-fence_changes-zone_changes",level:3},{value:"WebSocket Data Objects",id:"websocket-data-objects",level:2},{value:"Subscribing to a Topic",id:"subscribing-to-a-topic",level:2},{value:"Successful Subscription Response",id:"successful-subscription-response",level:3},{value:"Unsubscribing",id:"unsubscribing",level:3},{value:"Unsubscribe Response",id:"unsubscribe-response",level:3},{value:"Filtering &amp; Subscription Parametrization",id:"filtering--subscription-parametrization",level:2},{value:"Parameters for location_updates Topic",id:"parameters-for-location_updates-topic",level:3},{value:"Parameters for trackable_motions Topic",id:"parameters-for-trackable_motions-topic",level:3},{value:"Parameters for fence_events Topic",id:"parameters-for-fence_events-topic",level:3},{value:"Parameters for collision_events Topic",id:"parameters-for-collision_events-topic",level:3},{value:"Parameters for provider_changes, trackable_changes, fence_changes, zone_changes, anchor_changes Topics",id:"parameters-for-provider_changes-trackable_changes-fence_changes-zone_changes-anchor_changes-topics",level:3},{value:"Sending Data via WebSocket",id:"sending-data-via-websocket",level:2},{value:"Examples",id:"examples",level:3},{value:"Example message for the location_updates topic:",id:"example-message-for-the-location_updates-topic",level:4},{value:"Example message for the proximity_updates topic:",id:"example-message-for-the-proximity_updates-topic",level:4},{value:"Authorization",id:"authorization",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"websocket-api",children:"WebSocket API"}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),(0,t.jsx)(s.p,{children:"This section describes the general Websocket publish / subscribe concept for connecting Location Cores and client services, and to exchange messages and events over a Websocket connection."})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"general-omlox-publish--subscribe-concept",children:"General omlox\u2122 Publish / Subscribe Concept"}),(0,t.jsx)(s.p,{children:"Applications can subscribe and unsubscribe themselves to named topics. Data published to a topic will be received by all subscribers of that topic. All data sent to and received from the WebSocket connection is wrapped into the payload property of the wrapper object detailed in the next section."}),(0,t.jsx)(s.p,{children:"To subscribe to a topic, the application sends a json encoded message. The server generates a response, either acknowledging a successful subscription / unsubscription or returns an error message."}),(0,t.jsx)(s.p,{children:"The server also generates a subscription_id for a successful subscription. This allows an application to subscribe itself to the same topic multiple times with differing parameters and control each subscription separately. Subscriptions are otherwise automatically terminated when the websocket connection is closed."}),(0,t.jsx)(s.h2,{id:"topics",children:"Topics"}),(0,t.jsx)(s.p,{children:"The following named topics are available:"}),(0,t.jsx)(s.h3,{id:"location_updates",children:"location_updates"}),(0,t.jsx)(s.p,{children:"This topic is used to retrieve real-time location updates, as well as sending location updates to the hub. Location data received by the hub is processed and then forwarded to all subscribers of this topic."}),(0,t.jsx)(s.p,{children:"When receiving data for this topic, the payload of the wrapper object contains omlox\u2122 Location objects."}),(0,t.jsxs)(s.h3,{id:"location_updates-1",children:["location_updates",":geojson"]}),(0,t.jsxs)(s.p,{children:["This topic is similar to location_updates, but instead of an omlox\u2122 Location object ",(0,t.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7946",children:"GeoJson"})," feature collections are returned as payload."]}),(0,t.jsx)(s.p,{children:"When receiving data for this topic, the payload of the wrapper object contains GeoJson feature collections."}),(0,t.jsx)(s.h3,{id:"collision_events",children:"collision_events"}),(0,t.jsx)(s.p,{children:"This topic is used to retrieve real-time collision events. The hub checks trackable movements for collisions and sends collision events when trackables: start to collide, continue to collide and end a collision."}),(0,t.jsx)(s.p,{children:"When receiving data for this topic, the payload of the wrapper object contains omlox\u2122 CollisionEvent objects."}),(0,t.jsx)(s.h3,{id:"fence_events",children:"fence_events"}),(0,t.jsx)(s.p,{children:"This topic is used to inform subscribers about geofence entry and exit events. The hub implementation checks location providers and trackables for fence events and sends appropriate events to subscribers of this topic immediately for each fence entry and fence exit event."}),(0,t.jsx)(s.p,{children:"When receiving data for this topic, the payload of the wrapper object contains omlox\u2122 FenceEvent objects."}),(0,t.jsxs)(s.h3,{id:"fence_events-1",children:["fence_events",":geojson"]}),(0,t.jsxs)(s.p,{children:["This topic is similar to fence_events, but instead of an omlox\u2122 FenceEvent object, ",(0,t.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc7946",children:"GeoJson"})," feature collections are returned as payload."]}),(0,t.jsx)(s.p,{children:"When receiving data for this topic, the payload of the wrapper object contains GeoJson feature collections."}),(0,t.jsx)(s.h3,{id:"trackable_motions",children:"trackable_motions"}),(0,t.jsx)(s.p,{children:"This topic informs subscribers about movements of an omlox\u2122 Trackable. For example, when one of the assigned omlox\u2122 Location Providers changes its position."}),(0,t.jsx)(s.p,{children:"When receiving data for this topic, the payload of the wrapper object contains omlox\u2122 TrackableMotion objects."}),(0,t.jsx)(s.h3,{id:"provider_changes-trackable_changes-fence_changes-zone_changes",children:"provider_changes, trackable_changes, fence_changes, zone_changes"}),(0,t.jsx)(s.p,{children:"These topics inform subscribers about changes of objects of the specified type."}),(0,t.jsxs)(s.p,{children:["They contain a field ",(0,t.jsx)(s.code,{children:"event_type"})," further specifying whether the change event is of type create, update, or delete.\nFor create and update events, the payload contains the new (updated) version of the object.\nFor delete, the payload contains the id of the deleted object."]}),(0,t.jsxs)(s.p,{children:["Furthermore, they contain a field ",(0,t.jsx)(s.code,{children:"timestamp"})," that contains the timestamp the DeepHub associates with the event."]})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"websocket-data-objects",children:"WebSocket Data Objects"}),(0,t.jsx)(s.p,{children:"Data between client and server are exchanged using a wrapper object with the following structure:"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Any of ",(0,t.jsx)(s.code,{children:"message"}),", ",(0,t.jsx)(s.code,{children:"subscribe"}),", ",(0,t.jsx)(s.code,{children:"subscribed"}),", ",(0,t.jsx)(s.code,{children:"unsubscribe"}),", ",(0,t.jsx)(s.code,{children:"unsubscribed"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"topic"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Topic name"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"subscription_id"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"The concrete topic subscription which generated the data"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"payload"}),(0,t.jsx)(s.td,{children:"array"}),(0,t.jsx)(s.td,{children:"An array containing valid omlox\u2122 data objects (or empty)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"params"}),(0,t.jsx)(s.td,{children:"object"}),(0,t.jsx)(s.td,{children:"An optional object containing key-value pairs of parameters. Parameters usually match their REST API counterparts"})]})]})]}),(0,t.jsxs)(s.p,{children:["The field ",(0,t.jsx)(s.code,{children:"event"})," is always required for all data exchanged between client and server. Other fields are required depending on the event type. Concrete event based data structures are detailed in the respective sections below."]}),(0,t.jsx)(s.p,{children:"Example data object containing an omlox\u2122 location object as payload:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "message",\n  "topic": "location_updates",\n  "subscription_id": 123,\n  "payload": [\n    {\n      "position": {\n        "type": "Point",\n        "coordinates": [5, 4]\n      },\n      "source": "fdb6df62-bce8-6c23-e342-80bd5c938774",\n      "provider_type": "uwb",\n      "provider_id": "77:4f:34:69:27:40",\n      "timestamp_generated": "2019-09-02T22:02:24.355Z",\n      "timestamp_sent": "2019-09-02T22:02:24.355Z"\n    }\n  ]\n}\n'})}),(0,t.jsxs)(s.p,{children:["In case of an error, the server sends a json object with event type ",(0,t.jsx)(s.code,{children:"error"})," and the following data structure:"]}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Will be ",(0,t.jsx)(s.code,{children:"error"})," for an error object"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"description"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"A human readable error message"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"code"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"Error code"})]})]})]}),(0,t.jsx)(s.p,{children:"Example error object:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "error",\n  "description": "Invalid data. The location data contains an invalid Position.",\n  "code": 10005\n}\n'})}),(0,t.jsx)(s.p,{children:"The error code can be used by applications to discern the type of the error, e.g. for error handling and messaging on the application side."}),(0,t.jsx)(s.p,{children:"Possible error codes:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"10000: Event type is unknown"}),"\n",(0,t.jsx)(s.li,{children:"10001: Unknown topic name"}),"\n",(0,t.jsx)(s.li,{children:"10002: Subscription failed"}),"\n",(0,t.jsx)(s.li,{children:"10003: Unsubscribe failed"}),"\n",(0,t.jsx)(s.li,{children:"10004: Not authorized"}),"\n",(0,t.jsx)(s.li,{children:"10005: Invalid payload data"}),"\n",(0,t.jsx)(s.li,{children:"10006: Not authenticated"}),"\n",(0,t.jsx)(s.li,{children:"10007: Invalid license"}),"\n"]})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"subscribing-to-a-topic",children:"Subscribing to a Topic"}),(0,t.jsxs)(s.p,{children:["Subscribing to a topic opens a connection to the websocket endpoint at e.g. ",(0,t.jsx)(s.strong,{children:"ws://localhost:8081/deephub/v1/ws/socket"}),". After successfully connecting, the client sends a subscribe request message to the server."]}),(0,t.jsx)(s.p,{children:"The subscribe request has the following structure:"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"subscribe"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"topic"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Name of the topic, e.g. ",(0,t.jsx)(s.code,{children:"location_updates"})," or ",(0,t.jsx)(s.code,{children:"fence_events"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"params"}),(0,t.jsx)(s.td,{children:"object"}),(0,t.jsx)(s.td,{children:"An optional object containing key-value pairs of parameters. Parameters usually match their REST API counterparts"})]})]})]}),(0,t.jsx)(s.p,{children:"An example subscribe request to the location_updates topic:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "subscribe",\n  "topic": "location_updates",\n  "params": {\n    "crs": "EPSG:4326"\n  }\n}\n'})}),(0,t.jsx)(s.p,{children:"Example subscribe request to fence events:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "subscribe",\n  "topic": "fence_events"\n}\n'})}),(0,t.jsx)(s.h3,{id:"successful-subscription-response",children:"Successful Subscription Response"}),(0,t.jsxs)(s.p,{children:["The server responds to the subscribe request either with a success response or an error response. Upon successful subscription, the server responds with a ",(0,t.jsx)(s.code,{children:"subscribed"})," event, a copy of the subscribed topic as well as the subscription_id for the concrete subscription."]}),(0,t.jsx)(s.p,{children:"It's important to keep the provided subscription_id on the client side in case the client wants to maintain multiple subscriptions to the same topic with different parameters. A client may however simply close it's connection, and all it's subscriptions will be cleaned up on the server side."}),(0,t.jsx)(s.p,{children:"The subscription response has the following structure:"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["On success ",(0,t.jsx)(s.code,{children:"subscribed"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"topic"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Name of the topic"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"subscription_id"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"Topic subscription id"})]})]})]}),(0,t.jsx)(s.p,{children:"Example server response for a successful subscription request:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "subscribed",\n  "topic": "location_updates",\n  "subscription_id": 123\n}\n'})}),(0,t.jsx)(s.h3,{id:"unsubscribing",children:"Unsubscribing"}),(0,t.jsx)(s.p,{children:"To unsubscribe, a client must either close the connection, or send an unsubscribe request with a concrete subscription id to the server."}),(0,t.jsx)(s.p,{children:"The unsubscribe request has the following structure:"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Must be ",(0,t.jsx)(s.code,{children:"unsubscribe"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"subscription_id"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"Topic subscription id to unsubscribe from"})]})]})]}),(0,t.jsx)(s.p,{children:"Example unsubscribe object:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "unsubscribe",\n  "subscription_id": 123\n}\n'})}),(0,t.jsx)(s.h3,{id:"unsubscribe-response",children:"Unsubscribe Response"}),(0,t.jsxs)(s.p,{children:["With a successful unsubscription, the server responds with an ",(0,t.jsx)(s.code,{children:"unsubscribed"})," event."]}),(0,t.jsx)(s.p,{children:"Unsubscribe event structure:"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Must be ",(0,t.jsx)(s.code,{children:"unsubscribed"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"topic"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Name of the topic"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"subscription_id"}),(0,t.jsx)(s.td,{children:"int"}),(0,t.jsx)(s.td,{children:"Topic subscription id from which the application was successfully unsubscribed"})]})]})]}),(0,t.jsx)(s.p,{children:"Example unsubscribe server response:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "unsubscribed",\n  "topic": "location_updates",\n  "subscription_id": 123\n}\n'})})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"filtering--subscription-parametrization",children:"Filtering & Subscription Parametrization"}),(0,t.jsx)(s.p,{children:"The publish / subscribe API allows to filter and transform data feeds by setting parameters as key / value pairs to the params section of a subscription request. The following example shows a subscription request to trackable motions with location data projected to UTM 32 (EPSG:32632) and filtering for a certain trackable id:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "subscribe",\n  "topic": "trackable_motions",\n  "params": {\n    "crs": "EPSG:32632",\n    "id": "0b680db2-b39b-45be-be77-40d7d2296cb4"\n  }\n}\n'})}),(0,t.jsx)(s.p,{children:"Note: There can be any number of active subscriptions made by the same client to a topic. For example, it's possible to make two distinct subscriptions to the location_updates topic, where each subscription may filter for a different location provider. However, subscribing to the same topic with the same parameters twice will result in a subscription error."}),(0,t.jsx)(s.p,{children:"The following parameters are available for the respective WebSocket topics."}),(0,t.jsx)(s.h3,{id:"parameters-for-location_updates-topic",children:"Parameters for location_updates Topic"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"provider_id"}),(0,t.jsx)(s.td,{children:"Filter events matching the given provider ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"source"}),(0,t.jsx)(s.td,{children:"Filter events based on the source of the location (caution: foreign_id and zone_id are not cross-matched)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"provider_type"}),(0,t.jsx)(s.td,{children:"Filter by omlox provider type (e.g., uwb, wifi, rfid)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"associated"}),(0,t.jsx)(s.td,{children:"Filter events which are currently associated to an infrastructure (e.g., relevant for wifi systems)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accuracy"}),(0,t.jsx)(s.td,{children:"Filter events where the location's accuracy is better (less) than or equal to the value provided"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"floor"}),(0,t.jsx)(s.td,{children:"Filter events where the location's floor matches the provided value"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"crs"}),(0,t.jsx)(s.td,{children:"Project location data to the given crs. Any crs supported by omlox can be set (e.g., local, EPSG:32632)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"zone_id"}),(0,t.jsx)(s.td,{children:"The zone_id used for calculating the local coordinates, if crs is set to local."})]})]})]}),(0,t.jsx)(s.h3,{id:"parameters-for-trackable_motions-topic",children:"Parameters for trackable_motions Topic"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"Filter events matching the given trackable ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"provider_id"}),(0,t.jsx)(s.td,{children:"Filter events matching the provider ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"name"}),(0,t.jsx)(s.td,{children:"Filter events matching the trackable name"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"accuracy"}),(0,t.jsx)(s.td,{children:"Filter events where the accuracy of the trackables motion's location is better (less) than or equal to the value provided"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"floor"}),(0,t.jsx)(s.td,{children:"Filter events where the floor of the trackable motion's location matches the provided value"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"crs"}),(0,t.jsx)(s.td,{children:"Project location data to the given crs. Any crs supported by omlox can be set (e.g., local, EPSG:32632)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"zone_id"}),(0,t.jsx)(s.td,{children:"The zone_id used for calculating the local coordinates, if crs is set to local."})]})]})]}),(0,t.jsx)(s.h3,{id:"parameters-for-fence_events-topic",children:"Parameters for fence_events Topic"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"fence_id"}),(0,t.jsx)(s.td,{children:"Filter events matching the given fence ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"foreign_id"}),(0,t.jsx)(s.td,{children:"Filter events matching the given foreign ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"provider_id"}),(0,t.jsx)(s.td,{children:"Filter events matching the provider ID which caused the fence event"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"trackable_id"}),(0,t.jsx)(s.td,{children:"Filter events matching the trackable ID which was involved in the fence event"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event_type"}),(0,t.jsxs)(s.td,{children:["Filter for fence entry (",(0,t.jsx)(s.code,{children:"region_entry"}),") or fence exit (",(0,t.jsx)(s.code,{children:"region_exit"}),") events"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"object_type"}),(0,t.jsxs)(s.td,{children:["Filter events by object type (one of ",(0,t.jsx)(s.code,{children:"trackable"})," or ",(0,t.jsx)(s.code,{children:"location_provider"}),")"]})]})]})]}),(0,t.jsx)(s.h3,{id:"parameters-for-collision_events-topic",children:"Parameters for collision_events Topic"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collision_id_1"}),(0,t.jsx)(s.td,{children:"Filter events where one item of the collision pair matches a given id (e.g., trackable ID involved in the collision)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collision_id_2"}),(0,t.jsx)(s.td,{children:"Same as collision_id_1. Note: When both collision_id_1 and collision_id_2 are set, events will effectively be filtered for collisions between these two trackables"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collision_type"}),(0,t.jsx)(s.td,{children:"Filter events by collision type. One of collision_start, colliding, collision_end"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"floor"}),(0,t.jsx)(s.td,{children:"Filter events where the floor of both collisions matches the provided value"})]})]})]}),(0,t.jsx)(s.h3,{id:"parameters-for-provider_changes-trackable_changes-fence_changes-zone_changes-anchor_changes-topics",children:"Parameters for provider_changes, trackable_changes, fence_changes, zone_changes, anchor_changes Topics"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"param"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"Filter the events based on the id of the associated object"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event_type"}),(0,t.jsxs)(s.td,{children:["Filter events based on the event type. Supported event types are: ",(0,t.jsx)(s.code,{children:"create"}),", ",(0,t.jsx)(s.code,{children:"update"}),", and ",(0,t.jsx)(s.code,{children:"delete"})]})]})]})]})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"sending-data-via-websocket",children:"Sending Data via WebSocket"}),(0,t.jsx)(s.p,{children:"A client can send / publish data to the server directly over the websocket connection without a subscription.\nFor example, a client can send raw location data to the location_updates topic; the server processes the data in the same way as the /providers/locations API and then publishes the processed location data to subscribers of the location_updates topic."}),(0,t.jsx)(s.p,{children:"The message sent to the DeepHub must have the following structure:"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"event"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Must be ",(0,t.jsx)(s.code,{children:"message"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"topic"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsxs)(s.td,{children:["Must be either ",(0,t.jsx)(s.code,{children:"location_updates"})," or ",(0,t.jsx)(s.code,{children:"proximity_updates"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"payload"}),(0,t.jsx)(s.td,{children:"array"}),(0,t.jsx)(s.td,{children:"An array containing topic specific omlox entities"})]})]})]}),(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),(0,t.jsx)(s.h4,{id:"example-message-for-the-location_updates-topic",children:"Example message for the location_updates topic:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "message",\n  "topic": "location_updates",\n  "payload": [\n    {\n      "position": {\n        "type": "Point",\n        "coordinates": [5, 4]\n      },\n      "source": "fdb6df62-bce8-6c23-e342-80bd5c938774",\n      "provider_type": "uwb",\n      "provider_id": "77:4f:34:69:27:40"\n    }\n  ]\n}\n'})}),(0,t.jsx)(s.h4,{id:"example-message-for-the-proximity_updates-topic",children:"Example message for the proximity_updates topic:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "message",\n  "topic": "proximity_updates",\n  "payload": [\n    {\n      "source": "fdb6df62-bce8-6c23-e342-80bd5c938774",\n      "provider_type": "rfid",\n      "provider_id": "77:4f:34:69:27:40"\n    }\n  ]\n}\n'})})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.h2,{id:"authorization",children:"Authorization"}),(0,t.jsxs)(s.p,{children:["When authorization is enabled, each message sent to the DeepHub must contain a JWT token in the params section.\nThe access token must be given in the ",(0,t.jsx)(s.code,{children:"token"})," field and an additional (topic dependent) field like ",(0,t.jsx)(s.code,{children:"fence_id"})," may be provided and will be checked for ownership."]}),(0,t.jsx)(s.p,{children:"For a topic subscription, this results in the following example message:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "event": "subscribe",\n  "topic": "fence_events",\n  "params": {\n    "token": "eyJhbG...",\n    "fence_id": "..."\n  }\n}\n'})}),(0,t.jsxs)(s.p,{children:["Messages from a subscription will only be received if the permissions and ownership of the involved resources are satisfied in accordance to the ",(0,t.jsx)(s.a,{href:"/docs/deephub/SecurityAuthorization#required-ownerships-for-topics",children:"required ownership"}),"."]}),(0,t.jsxs)(s.p,{children:["Sending a location update via websocket presents the same requirements.\nHowever, providing an additional field ",(0,t.jsx)(s.code,{children:"provider_id"})," is NOT supported.\nThis is an example of a location update:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n    "event": "message",\n    "topic": "location_updates",\n    "params": {"token": "eyJhbG..."},\n    "payload": [{...}]\n}\n'})}),(0,t.jsxs)(s.p,{children:["Details on how to configure the DeepHub for authentication with Websocket can be found ",(0,t.jsx)(s.a,{href:"/docs/deephub/SecurityAuthorization#applying-permissions-to-websocket",children:"here"}),"."]})]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},70387:(e,s,i)=>{i.d(s,{Z:()=>n});i(67294);var t=i(85893);function n(e){let{children:s}=e;return(0,t.jsx)("section",{className:"section markdown",children:s})}},11151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>c});var t=i(67294);const n={},r=t.createContext(n);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);