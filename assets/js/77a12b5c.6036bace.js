"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[5660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[h]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70387:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t}=e;return r.createElement("section",{className:"section markdown"},t)}},89456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(70387);const s={sidebar_position:11},l="RPC Interface",i={unversionedId:"deephub/RPCInterface",id:"deephub/RPCInterface",title:"RPC Interface",description:"The DeepHub\xae can act as a Remote Procedure Call (RPC) gateway via WebSocket, allowing local devices or services to connect with other devices or services over a local network infrastructure and the internet (which are normally separate from each other and not reachable). This allows for querying of sensor data and device capabilities, or initiating firmware updates as well as other types of information exchange which can be handled via RPC. The DeepHub RPC interface is based on the JSON-RPC exchange format version 2.0.",source:"@site/docs/deephub/RPCInterface.md",sourceDirName:"deephub",slug:"/deephub/RPCInterface",permalink:"/docs/deephub/RPCInterface",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Quuppa Connector",permalink:"/docs/deephub/quuppaConnector"},next:{title:"DeepHub\xae UI",permalink:"/docs/category/deephub-ui"}},c={},p=[{value:"Example Message Flow",id:"example-message-flow",level:2}],h={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc-interface"},"RPC Interface"),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("p",null,"The DeepHub\xae can act as a Remote Procedure Call (RPC) gateway via WebSocket, allowing local devices or services to connect with other devices or services over a local network infrastructure and the internet (which are normally separate from each other and not reachable). This allows for querying of sensor data and device capabilities, or initiating firmware updates as well as other types of information exchange which can be handled via RPC. The DeepHub RPC interface is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JSON-RPC exchange format version 2.0"),". "),(0,a.kt)("p",null,"The endpoint for the DeepHub RPC interface is: ",(0,a.kt)("strong",{parentName:"p"},"/v1/ws/rpc"),"."),(0,a.kt)("p",null,"The general data flow is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'A service which provides certain functionality registers itself with the DeepHub and announces that it wants to handle a method. This can be anything from querying sensor data of local tags, managing firmware updates of on-site devices, or remote communication between services. In our example flow, we register for a method named "Blink LED" to control a local LED light. '),(0,a.kt)("li",{parentName:"ol"},'A client application (e.g. a web browser in the local network or over the internet) can now send the RPC Request with the method name "Blink LED" with optional parameters. The DeepHub will forward this call with the parameters to all services handling the "Blink LED" request.'),(0,a.kt)("li",{parentName:"ol"},'The services which registered themselves for handling "Blink LED" will receive the client request and reply with an RPC response message. '),(0,a.kt)("li",{parentName:"ol"},"The DeepHub forwards this response message to the client. By default, only the first response is forwarded and the request is finalized. ")),(0,a.kt)("p",null,'Registering for RPC method handling is done by sending an RPC request containing the method name "register", the "method" parameter, and a name for the method as values in the parameters of the request. Example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "register",\n  "params": {\n    "method": "Blink LED"\n  },\n  "id": 1\n}\n')),(0,a.kt)("p",null,"The DeepHub defines three optional properties for the JSON-RPC Request structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stream: When set to true, all responses are continuously forwarded to the client that created the request. The stream will end when the timeout for the request is reached (see timeout description below)."),(0,a.kt)("li",{parentName:"ul"},"aggregate: All data is combined into a single response and forwarded to the client that created the request. The aggregated result is delivered after each registered handler sends a response or the timeout is reached - whichever comes first."),(0,a.kt)("li",{parentName:"ul"},"timeout: The timeout after which the request should expire. The timeout is expressed in milliseconds instead of seconds to allow for realtime applications. ")),(0,a.kt)("p",null,"The RPC response for aggregated results combines RPC messages into the result array of the final RPC response, and not only the results. This allows for the collection of error messages between success messages as shown in the example aggregate response below. Here, there is one error message next to a success message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 2,\n  "result": [\n    {\n      "jsonrpc": "2.0",\n      "id": 2,\n      "result": "blinking"\n    },\n    {\n      "jsonrpc": "2.0",\n      "error": {\n        "code": -32601,\n        "message": "Light is defect"\n      },\n      "id": 2\n    }\n  ]\n}\n')),(0,a.kt)("p",null,'In addition, an optional property "zone_id" with a UUID of an omlox\u2122 zone in the params section of a register request can be used to register for RPC calls for a particular zone. This allows RPC handlers which only work within a zone to avoid processing unnecessary requests (e.g. trying to reach tags which can only be reached when in that zone).')),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"example-message-flow"},"Example Message Flow"),(0,a.kt)("p",null,'Alice registers herself for a method named "hello" and answers everybody who says hello to her with "Hello World!".'),(0,a.kt)("p",null,"Note: This example explains all intermediate steps of the message flow and thus looks longer-winded than it would be from an application perspective. From an application perspective, a client just sends a request and gets back a reply."),(0,a.kt)("p",null,"1) Alice connects to the RPC WebSocket interface of the Hub (e.g. ",(0,a.kt)("strong",{parentName:"p"},"ws://localhost:8081/v1/ws/rpc")," for a local instance)."),(0,a.kt)("p",null,'2) Alice registers herself to handle a "hello" method by sending an RPC request to the Hub:'),(0,a.kt)("p",null,"Alice -> Hub: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "register",\n  "params": {\n    "method": "hello",\n    "zone_id": "123"\n  },\n  "id": 1\n}\n')),(0,a.kt)("p",null,"The Hub responds with an ok message:"),(0,a.kt)("p",null,"Hub -> Alice: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": true\n}\n')),(0,a.kt)("p",null,'3) Another client, Bob, connects to the Hub and calls the "hello" method. Alice will get this request. '),(0,a.kt)("p",null,"Bob -> Hub:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "hello",\n  "id": 2,\n  "params": {\n    "zone_id": "123"\n  }\n}\n')),(0,a.kt)("p",null,"4) Bob's message is processed by the Hub and forwarded to Alice."),(0,a.kt)("p",null,"Hub -> Alice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 10000,\n  "method": "hello"\n}\n')),(0,a.kt)("p",null,"Important details for Hub implementors (not application users): Notice that Alice will see a different id in the request. This is because the Hub uses it's own IDs and will resolve back to the original ID which the caller used (in our example, Bob used ID 2) when a response is sent by Alice to the Hub. This is a necessary step done to fulfill the requirement of the JSON-RPC specification in order to uniquely relate requests and responses, and to respond with the same ID the client used in the original request sent to the Hub. "),(0,a.kt)("p",null,'5) Alice can now respond to the hello request reply with a friendly "Hello World!". '),(0,a.kt)("p",null,"Alice -> Hub: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": "Hello World!",\n  "id": 10000\n}\n')),(0,a.kt)("p",null,"6) The hub processes Alice's message, replaces the ID with the one Bob used in his request, and forwards the response to Bob:"),(0,a.kt)("p",null,"Hub -> Bob:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "result": "Hello World1!",\n  "id": 2\n}\n'))))}d.isMDXComponent=!0}}]);