"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[2236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70387:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(67294);function a(e){let{children:t}=e;return i.createElement("section",{className:"section markdown"},t)}},53782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),o=n(70387);const r={sidebar_position:2},l="Security & Authorization",s={unversionedId:"deephub/SecurityAuthorization",id:"deephub/SecurityAuthorization",title:"Security & Authorization",description:"The DeepHub\xae uses the OpenID standard to ensure secure access to the API.",source:"@site/docs/deephub/SecurityAuthorization.md",sourceDirName:"deephub",slug:"/deephub/SecurityAuthorization",permalink:"/docs/deephub/SecurityAuthorization",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/deephub/ServerConfiguration"},next:{title:"Modes of Operation",permalink:"/docs/deephub/OperationModes"}},p={},u=[{value:"Enable Authorization",id:"enable-authorization",level:2},{value:"Base Configuration",id:"base-configuration",level:3},{value:"Server Certificates",id:"server-certificates",level:3},{value:"Authorization Flow Type",id:"authorization-flow-type",level:3},{value:"Dedicated Permissions",id:"dedicated-permissions",level:3},{value:"Applying Individual REST API Permissions",id:"applying-individual-rest-api-permissions",level:2},{value:"Permission Types",id:"permission-types",level:3},{value:"Permissions Example",id:"permissions-example",level:3},{value:"Applying Permissions to Websocket",id:"applying-permissions-to-websocket",level:2},{value:"Required Ownership for Topics",id:"required-ownership-for-topics",level:3},{value:"Sending Location Updates",id:"sending-location-updates",level:3},{value:"Access Token Extension for Ownership Claims",id:"access-token-extension-for-ownership-claims",level:2},{value:"Example OpenID setup with Keycloak",id:"example-openid-setup-with-keycloak",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security--authorization"},"Security & Authorization"),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("p",null,"The DeepHub\xae uses the OpenID standard to ensure secure access to the API.\nThis section describes how to apply permission settings to individual API endpoints, WebSocket topics, and OpenID users, and provides an example OpenID setup using Keycloak as the OpenID server.\nHowever, any standard OpenID server can be used.\nRefer to the ",(0,a.kt)("a",{parentName:"p",href:"./ServerConfiguration#authentication-authorization-and-encryption-of-traffic"},"Configuration")," section for security and authorization configuration options. ")),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"enable-authorization"},"Enable Authorization"),(0,a.kt)("p",null,"In order to enable authorization features, permissions, OpenID and server configurations need to be configured accordingly.\nThe following section gives a quick overview of files and configuration options that need to be configured to enable authorization and security features."),(0,a.kt)("h3",{id:"base-configuration"},"Base Configuration"),(0,a.kt)("p",null,"The base configuration can be done in the hub_config.yaml configuration file, via environment variables, or via command line arguments. See the ",(0,a.kt)("a",{parentName:"p",href:"./ServerConfiguration"},'"Configuration"')," section for a general overview\nof the different base configuration possibilities."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"require_authorization")," must be set to true"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"openid_client_name")," must be set to verify audiences. This is mandatory for OpenID. Refer to the audience claim setup example below for more details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"verify_authserver")," set to true when running the server in production mode (requires authserver_public_key_path). "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authserver_public_key_path")," should point to the public key of the OpenID server when running in production mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"force_https")," should be set to true in production mode to disable any insecure plain http or websocket communication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"openid_config_url")," must be set to the standard OpenID configuration endpoint, e.g.  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openid_config_url: http://127.0.0.1:8080/auth/realms/omlox/.well-known/openid-configuration\n")),(0,a.kt)("h3",{id:"server-certificates"},"Server Certificates"),(0,a.kt)("p",null,"When running the server in production mode, appropriate settings such as server certificates, public_key_path, private_key_path and dh_params_path must be set.\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"./ServerConfiguration#server-configuration"},'"Configuration"')," section for details."),(0,a.kt)("h3",{id:"authorization-flow-type"},"Authorization Flow Type"),(0,a.kt)("p",null,"The DeepHub uses Bearer Authorization for the REST API.\nClients connecting to the DeepHub will never send passwords directly to the DeepHub.\nInstead, clients login to the OpenID server and provide the bearer token with each request header to the DeepHub.\nThe DeepHub is able to securely verify the token is valid and was issued by the configured OpenID server. "),(0,a.kt)("p",null,"For service-to-service and client-to-service communication, we recommend using bearer authorization.\nFor web clients we advise to use Authorization Code Flow for secure login."),(0,a.kt)("h3",{id:"dedicated-permissions"},"Dedicated Permissions"),(0,a.kt)("p",null,"The dedicated permissions can be configured within the permissions.yaml configuration file."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is no other way to configure the permissions than via this file. Environment variables or command line arguments to configure these are not available.")),(0,a.kt)("p",null,"This file contains the configuration of the authorization to access the REST API and the WebSocket API. It is explained in detail in the ",(0,a.kt)("a",{parentName:"p",href:"#applying-individual-rest-api-permissions"},"next section"),", directly below: ")),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"applying-individual-rest-api-permissions"},"Applying Individual REST API Permissions"),(0,a.kt)("p",null,"The DeepHub server uses a RBAC (Role Based Access Control) model to assign permissions to OpenID roles. The permissions are stored in a YAML based file in the data directory of the Docker container. The permissions are loaded once at startup.  "),(0,a.kt)("p",null,"General structure of the permissions file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"role-name:\n  description: Some role description\n  '/api/path':\n    - PERMISSION1\n    - PERMISSION2\n  '/api/path_2/*':\n    - PERMISSION1\n  '/api/path_3/:resource_id':\n    - PERMISSION1\n    ...\n")),(0,a.kt)("p",null,"Description of the core elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"role-name")," must match an actual OpenID role name provided as part of the JWT Access Token. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/api/path")," must match an actual DeepHub API endpoint (refer to the OpenAPI file for a list of available endpoints).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," symbol is a wildcard, allowing permissions to be given to all subpaths of an API. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/path_2/*")," will match all subpaths, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/path_2/a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/path_2/b")," etc. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A path for a given role should only be specified once. Duplicates will produce an error.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Permission")," can be any of the following (multiple entries possible): ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_ANY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_ANY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE_ANY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_ANY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_OWN"),".\nNote that the respective ",(0,a.kt)("inlineCode",{parentName:"p"},"ANY")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OWN")," permissions are mutually exclusive, i.e., for a given path a role can have either ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_ANY")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN"),", but not both.\nRefer to the description below to choose the right permission.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},":resource_id")," is a placeholder variable, matching identifiers given as part of a request.\nFor example, the permission URL ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/providers/:provider_id/location")," will match the HTTP GET request ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/providers/provider123/location"),", and map the placeholder variable ",(0,a.kt)("inlineCode",{parentName:"p"},"provider_id"),' to the value "provider123".\nWhen the permission for the URL is one of ',(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_OWN"),", then the client is required to provide ownership proof with its access token.\nThe structure of the required access token is described ",(0,a.kt)("a",{parentName:"p",href:"#access-token-extension-for-ownership-claims"},"below"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Important:")," The placeholder variables ",(0,a.kt)("strong",{parentName:"p"},"must")," match the names defined in the OpenAPI specification, e.g. it's required to use ",(0,a.kt)("inlineCode",{parentName:"p"},":provider_id")," for the route ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/providers/:provider_id"),".\nThe placeholder variable's name is used to match named resource identifiers provided with the access token, thus a mismatch will result in failed authorization. "))),(0,a.kt)("h3",{id:"permission-types"},"Permission Types"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_ANY"),(0,a.kt)("br",{parentName:"p"}),"\n","The role is allowed to create (e.g. via POST request) a resource at the given API path."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"READ_ANY"),(0,a.kt)("br",{parentName:"p"}),"\n","The role is allowed to read all resource objects at a given API path."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE_ANY"),(0,a.kt)("br",{parentName:"p"}),"\n","The role is allowed to update (e.g. via PUT request) resources at a given API path. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_ANY"),(0,a.kt)("br",{parentName:"p"}),"\n","The role is allowed to delete all resources for a given API path."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE_OWN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE_OWN"),(0,a.kt)("br",{parentName:"p"}),"\n","The role is only allowed to read or mutate it's own resources.\nResource ownership is defined via JWT AccessToken.\nA particular user which owns a resource must have a matching resource UUID in the Access Token. "),(0,a.kt)("h3",{id:"permissions-example"},"Permissions Example"),(0,a.kt)("p",null,"In the example below, a role named omlox-api-role is provided full admin access to all API endpoints using a wildcard match: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"omlox-api-role:\n  description: Super user with all permissions\n  '/v1/*':\n    - CREATE_ANY\n    - READ_ANY\n    - UPDATE_ANY\n    - DELETE_ANY\n")),(0,a.kt)("p",null,"In this example, a user is given access restricted to their own location data: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"omlox-api-role:\n  description: A user with access to only their own location data\n  '/v1/providers/:provider_id/*':\n    - CREATE_OWN\n    - READ_OWN\n    - UPDATE_OWN\n    - DELETE_OWN\n"))),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"applying-permissions-to-websocket"},"Applying Permissions to Websocket"),(0,a.kt)("p",null,"Permissions to websocket topics follow the same rules as the permissions for the REST API.\nThe url paths use the following scheme: ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/ws/socket/{topic}/:resource_id")),(0,a.kt)("p",null,"In the scheme above, ",(0,a.kt)("inlineCode",{parentName:"p"},"{topic}"),' is a placeholder for the actual websocket topic name, e.g. "location_updates", and ',(0,a.kt)("inlineCode",{parentName:"p"},":resource_id")," is a placeholder for the identifier name which must match the data for this topic using the same rules and naming scheme as stated for the ",(0,a.kt)("a",{parentName:"p",href:"#applying-individual-rest-api-permissions"},"REST API"),"."),(0,a.kt)("p",null,"For example, a permission to only access location data owned by the user that matches a provider_id given as part of the access token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"read-only-own-resources-role:\n  '/v1/ws/socket/location_updates/:provider_id':\n    - READ_OWN\n")),(0,a.kt)("p",null,"Wildcards can be applied in the same way as the REST API. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/ws/socket/location_updates/*")," would match location updates for all location providers.\nTo subscribe to a topic, either ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_ANY")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN")," permissions are required.\nThe limitations for ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN")," permissions are detailed in the following section."),(0,a.kt)("h3",{id:"required-ownership-for-topics"},"Required Ownership for Topics"),(0,a.kt)("p",null,"All topics require ownership for certain resources in order for subscriptions to work if the topic's permissions are ",(0,a.kt)("inlineCode",{parentName:"p"},"READ_OWN"),".\nThe following lists the topics and what ownerships are required to receive messages."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Topic"),(0,a.kt)("th",{parentName:"tr",align:null},"Ownership Needed"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"location_updates"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("strong",{parentName:"td"},"Provider")," as identified by the event's field ",(0,a.kt)("inlineCode",{parentName:"td"},"provider_id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"collision_events"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("strong",{parentName:"td"},"Trackable")," as identified by the event's field ",(0,a.kt)("inlineCode",{parentName:"td"},"collision_id_1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fence_events"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("strong",{parentName:"td"},"Fence")," as identified by the event's field ",(0,a.kt)("inlineCode",{parentName:"td"},"fence_id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trackable_motions"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("strong",{parentName:"td"},"Trackable")," as identified by the event's field ",(0,a.kt)("inlineCode",{parentName:"td"},"id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"change_events"),(0,a.kt)("td",{parentName:"tr",align:null},"The topic specific ",(0,a.kt)("strong",{parentName:"td"},"Entity")," as identified by the event's field ",(0,a.kt)("inlineCode",{parentName:"td"},"id"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ownership for additional resources (e.g. the second Trackable of a collision) are currently not checked for subscribed topics.")),(0,a.kt)("h3",{id:"sending-location-updates"},"Sending Location Updates"),(0,a.kt)("p",null,"To send location updates via Websocket no subscription is required.\nHowever, the permissions for the respective topic must be ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE_ANY")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UPDATE_ANY"),".\nFiner grained permissions based on ownership are currently not supported for sending location updates via websocket.")),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"access-token-extension-for-ownership-claims"},"Access Token Extension for Ownership Claims"),(0,a.kt)("p",null,"In order to allow access to ownership restricted URLs, the access token must contain an object member named ",(0,a.kt)("inlineCode",{parentName:"p"},"https://deephub.io/owned_resources")," containing named lists to resource identifiers.\nThe member names ",(0,a.kt)("strong",{parentName:"p"},"must")," adhere to the following scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"placeholder_variable + 's'\n")),(0,a.kt)("p",null,"In other words, the name of the members is the plural of the placeholder variable name. As an example, the json content of an access token looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "https://deephub.io/owned_resources": {\n        "provider_ids": [\n            "provider123"\n        ],\n        "trackable_ids": [\n            "trackable123"\n        ],\n        "zone_ids": [\n            "zone123"\n        ],\n        "fence_ids": [\n            "fence123"\n        ]\n    },\n    ...\n}\n'))),(0,a.kt)(o.Z,{mdxType:"Section"},(0,a.kt)("h2",{id:"example-openid-setup-with-keycloak"},"Example OpenID setup with Keycloak"),(0,a.kt)("p",null,"An OpenID server is required in order to enable authorization features in DeepHub.\nBelow is an example using Keycloak, though the basic setup should work similar for other OpenID servers. "),(0,a.kt)("p",null,"Prerequisites: A running Keycloak instance. You can start with a simple standalone instance for development and testing.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/index.html"},"Keycloak guide")," to get started. Alternatively, you can download and use our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flowcate/deephub-advanced-setup"},'"deephub-advanced-setup" example from github'),"."),(0,a.kt)("p",null,"Log in to the Keycloak Admin Console of your Keycloak instance and then follow this procedure:"),(0,a.kt)("p",null,'At first we have to create a new realm; let\'s call it "omlox" in this example:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the Master drop-down menu, click Add Realm. "),(0,a.kt)("li",{parentName:"ul"},"Type omlox in the Name field and click Create.")),(0,a.kt)("p",null,'Next we create the role "omlox-api-role" for DeepHub API access. To do so:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the menu, click Roles to open the roles list."),(0,a.kt)("li",{parentName:"ul"},"Click on Add Role on the right side of the list"),(0,a.kt)("li",{parentName:"ul"},"Enter omlox-api-role in the Role Name field. The role name must not be changed, because this role name is mapped to omlox permissions. ")),(0,a.kt)("p",null,'Next we create a user named "omlox-api-user". To create a new user in the omlox realm, complete the following steps:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure the omlox Realm is the selected current Realm in the Master drop-down menu"),(0,a.kt)("li",{parentName:"ul"},"From the menu, click Users to open the user list page."),(0,a.kt)("li",{parentName:"ul"},"On the right side of the user list, click Add User to open the add user page."),(0,a.kt)("li",{parentName:"ul"},"Enter the name omlox-api-user in the Username field. Flip the Email Verified switch from Off to On and click Save to save the data and open the management page for the new user."),(0,a.kt)("li",{parentName:"ul"},"Click the Credentials tab and enter a password for the new user. Flip the Temporary switch to Off to make the new password permanent. Click Set Password to save the changes."),(0,a.kt)("li",{parentName:"ul"},"Click the Role Mappings tab. In the Realm Roles list, select omlox-api-role and click the Add selected button.")),(0,a.kt)("p",null,'Next we create a client named "omlox-api-client".  To create a new user in the omlox realm, complete the following steps:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure the omlox realm is the selected current realm in the Master drop-down menu"),(0,a.kt)("li",{parentName:"ul"},"From the menu, click Clients to open the client list page."),(0,a.kt)("li",{parentName:"ul"},"On the right side of the client list, click Create to open the create client page."),(0,a.kt)("li",{parentName:"ul"},"Enter the name omlox-api-client in the Client ID field. Select openid-connect in the Client Protocol dropdown."),(0,a.kt)("li",{parentName:"ul"},"Select Public as Access Type"),(0,a.kt)("li",{parentName:"ul"},"Toggle Service Accounts Enabled. This enables Client Credentials Grant workflow for the DeepHub to fetch access tokens for token verification of client requests. "),(0,a.kt)("li",{parentName:"ul"},"Click Save.")),(0,a.kt)("p",null,"Next, create another client to be used by the DeepHub service itself. Note: This client is mandatory even in case no other OpenID exists to communicate with the DeepHub,\nand the client name must match with the openid_client_name in the DeepHub configuration.\nAll other OpenID clients which communicate with the DeepHub have to include this client in the JWT as audience, so that the DeepHub can verify audiences as mandated by OpenID. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Repeat the previous step to create a client."),(0,a.kt)("li",{parentName:"ul"},"Name deephub-service. Note: The name is case-sensitive and must match the one in the configuration file."),(0,a.kt)("li",{parentName:"ul"},"Set the Access Type to bearer-only."),(0,a.kt)("li",{parentName:"ul"},"Click Save.")),(0,a.kt)("p",null,"For security reasons an OpenID enabled service has to verify audience claims in order to avoid token misuse. Follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the meu, click Client Scopes to open the client scopes list."),(0,a.kt)("li",{parentName:"ul"},"Click Create to create a new client scope."),(0,a.kt)("li",{parentName:"ul"},"Enter hub-service into the Name field."),(0,a.kt)("li",{parentName:"ul"},"Click the Save button to create the new client scope."),(0,a.kt)("li",{parentName:"ul"},"In the list of client scopes, select the newly created hub-service."),(0,a.kt)("li",{parentName:"ul"},"Select Mappers from the top menu."),(0,a.kt)("li",{parentName:"ul"},"Click the Create button on the right side."),(0,a.kt)("li",{parentName:"ul"},"Enter hub-service-audience into the Name field."),(0,a.kt)("li",{parentName:"ul"},"From the Mapper Type selection choose Audience."),(0,a.kt)("li",{parentName:"ul"},"In the Included Client Audience select deephub-service."),(0,a.kt)("li",{parentName:"ul"},"Click Save button to save the changes."),(0,a.kt)("li",{parentName:"ul"},"Now we create a mapping between the newly created scope and the client used for user logins. From the left menu panel, choose Clients and choose omlox-api-client."),(0,a.kt)("li",{parentName:"ul"},"From either the Default Client Scopes or Optional Client Scopes list select hub-service and click on Add selected. You can only add it to either default or optional. The difference is that when you add it to the default list the token will always contain the audience hub-service. When you set it to optional the user client (e.g. web application) must explicitly set the scope to hub-service when requesting the token, the token will then contain the audience deephub-service. It\u2019s advised to use the optional mapper and limit scopes appropriately on the user client side.  ")),(0,a.kt)("p",null,"Optional steps\nIt\u2019s possible to define fine-grained ownership permissions by adding custom attributes to a user. This allows for assigning read_own permissions to API paths which are restricted to users that own a particular resource. Follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the left menu, click Clients."),(0,a.kt)("li",{parentName:"ul"},"From the clients list, select omlox-api-client. From the top menu select Mappers."),(0,a.kt)("li",{parentName:"ul"},"Click on the Create button to create a new mapper."),(0,a.kt)("li",{parentName:"ul"},"Set a name like Assigned Location Providers."),(0,a.kt)("li",{parentName:"ul"},"In the Mapper Type selection, select User Attribute."),(0,a.kt)("li",{parentName:"ul"},"In the User Attribute field, set ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/provider_ids")," (Important: This field must match with the one we set in the User attributes for the particular user."),(0,a.kt)("li",{parentName:"ul"},"In the Token Claim Name field, set ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub\\.io/owned_resources.provider_ids")," (without quotes). It\u2019s important to use this exact name, as the DeepHub will check if a user has access to particular resources using this name. Also note the ",(0,a.kt)("inlineCode",{parentName:"li"},"\\")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".")," in this name. This will actually create a json member named ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources")," with an object named ",(0,a.kt)("inlineCode",{parentName:"li"},"provider_ids"),"."),(0,a.kt)("li",{parentName:"ul"},"From the Claim JSON Type selection, select String."),(0,a.kt)("li",{parentName:"ul"},"Enable Multivalued."),(0,a.kt)("li",{parentName:"ul"},"Click Save")),(0,a.kt)("p",null,"Repeat the above steps to create respective mappers for fences, trackables and zones as well, using the following values. "),(0,a.kt)("p",null,"For fence ownership mapping:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set User Attribute to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/fence_ids")),(0,a.kt)("li",{parentName:"ul"},"Set Token Claim Name to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub\\.io/owned_resources.fence_ids"))),(0,a.kt)("p",null,"For trackable ownership mapping:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set User Attribute to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/trackable_ids")),(0,a.kt)("li",{parentName:"ul"},"Set Token Claim Name to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub\\.io/owned_resources.trackable_ids"))),(0,a.kt)("p",null,"For zone ownership mapping:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set User Attribute to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/zone_ids")),(0,a.kt)("li",{parentName:"ul"},"Set Token Claim Name to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub\\.io/owned_resources.zone_ids"))),(0,a.kt)("p",null,"For source ownership mapping:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set User Attribute to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/source_ids")),(0,a.kt)("li",{parentName:"ul"},"Set Token Claim Name to: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub\\.io/owned_resources.source_ids"))),(0,a.kt)("p",null,"Now we can create actual user attributes which will then be mapped at runtime. To assign a Location Provider to a user, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the left menu bar, click Users"),(0,a.kt)("li",{parentName:"ul"},"Choose a user from the list to whom you want to assign a trackable"),(0,a.kt)("li",{parentName:"ul"},"Click Attributes."),(0,a.kt)("li",{parentName:"ul"},"In the attributes key / value list, set key to ",(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/provider_ids")," and the value to the ID of the Location Provider you want to assign to the user (e.g. 5896823C-3B3F-48BB-B74B-E43041ABD59C).")),(0,a.kt)("p",null,"Repeat the above steps for fences, trackables, zones, and sources using the respective keys below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/fence_ids")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/trackable_ids")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/zone_ids")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://deephub.io/owned_resources/source_ids"))),(0,a.kt)("p",null,'Note: You can set multiple entries in the value field using "##" as delimiter between entries. For example:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"providerid1##providerid2\n")),(0,a.kt)("p",null,"This will show as two items in the provider_ids array."),(0,a.kt)("p",null,"Further note: source_ids refer to the source given in a location update. This source can reference a zone, but doesn't have to. As such, source_ids should contain all zone ids in addition to other source ids. At this point some double book keeping is required.")))}h.isMDXComponent=!0}}]);