"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[9008],{80746:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=t(85893),i=t(11151),r=t(28777);const a={sidebar_position:5,hide_table_of_contents:!0,tags:["changelog"]},s="Changelog",d={id:"release-note",title:"Changelog",description:"",source:"@site/versioned_docs/version-DeepHub 2022 R2 - 2.2.3/release-note.mdx",sourceDirName:".",slug:"/release-note",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/release-note",draft:!1,unlisted:!1,tags:[{label:"changelog",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/tags/changelog"}],version:"DeepHub 2022 R2 - 2.2.3",sidebarPosition:5,frontMatter:{sidebar_position:5,hide_table_of_contents:!0,tags:["changelog"]},sidebar:"tutorialSidebar",previous:{title:"Running the DeepHub\xae Locally",permalink:"/docs/DeepHub 2022 R2 - 2.2.3/testing-deephub/running_dh_locally"}},c={},l=[];function p(e){const o={h1:"h1",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsx)(r.Z,{changelog:t(87068)})]})}function h(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28777:(e,o,t)=>{t.d(o,{Z:()=>s});t(67294);var n=t(92503),i=t(4140),r=t(85893);const a=[{name:"features",color:"#0874b4",label:"Features"},{name:"fixes",color:"#8cba11",label:"Fixes"},{name:"refactor",color:"#caa31b",label:"Refactor",className:"refactor"}];function s(e){let{changelog:o}=e;return(0,r.jsx)("div",{className:"changelog",children:o.map(((e,o)=>(0,r.jsx)("div",{className:"bg-white p-2 mb-4",children:(0,r.jsxs)(r.Fragment,{children:[e.version&&(0,r.jsx)(n.Z,{as:"h2",id:e.version,children:e.version}),(0,r.jsx)("table",{className:"table-fixed border-slate-500 border border-collapse",children:(0,r.jsx)("tbody",{className:"border-0 align-top table w-full",children:a.map(((t,n)=>{let a=0;return e[t.name]?.map((e=>(a+=e.split("\n").length,e.split("\n").length,0))),e[t.name]?.length>0?e[t.name]?.map(((s,d)=>{const c=s.split("\n");return(0,r.jsx)(r.Fragment,{children:c.map(((s,c)=>(0,r.jsxs)("tr",{className:"",children:[0===d&&0===c&&(0,r.jsx)("th",{rowSpan:a,className:"border-r-8 border-y-0 border-l-0 min-w-[100px] w-[15%]",style:{borderColor:t.color},children:t.label}),(0,r.jsx)("td",{className:"w-[85%]",children:(0,r.jsx)(i.U,{className:"",children:s},`${o}-${n}-${d}-${c}`)})]},`${e.version}-${t.label}`)))})})):null}))},e.version)},e.version)]})})))})}},87068:e=>{e.exports=JSON.parse('[{"version":"DeepHub\xae 2024 R1, 2.5.0-beta.2","features":["**[Core]** Added zone and location provider types `ble-aoa` and `ble-mesh`.","**[Core]** Added new endpoint /zones/fromlocal to construct a minimal zone from CreationParameters.","**[Core]** Added new endpoint /fences/fromlocal to construct a minimal fence from CreationParameters.","**[Core]** Added a new zone type `generic` and an additional way to create zones that use the benchmark based transformation.","**[Core]** Added zone property `transformation_type`, which can be one of `gcp`, `proximity`, `benchmark` or `none`.","**[Core]** Added Anchor API.","**[Core]** Added zone property `anchor_ids` to associate anchors with a zone. Anchors which have both, georeferenced and local positions, overwrite the zone\'s ground control points.","**[Core]** Added endpoint /version for /v1 and /v2.","**[Core]** Added notifications about MZE zone updates to the `zone_changes` WebSocket topic.","**[UI]** Added zone and location provider types `ble-aoa` and `ble-mesh`.","**[UI]** Added new floorplan upload functionality.","**[UI]** The colors of zones and providers have been changed. Only proximity and non-proximity zones are differentiated and displayed in different colors.","**[UI ADMIN]** Added functionality to create anchors."],"fixes":["**[Core]** Prevent fences from having corrupt polygon regions."],"refactor":["**[UI]** Implemented new code base for Admin UI. First release with limited feature set."]},{"version":"DeepHub\xae 2023 R2, 2.4.2","fixes":["**[Core]** Fixed verify_authserver configuration parameter."]},{"version":"DeepHub\xae 2023 R2, 2.4.1","fixes":["**[Core]** Fixed handling for trackables with polygonal geometry. The coordinates of the polygon are interpreted as meters and the geometry is rotated based on the course of the last location.","**[UI KIOSK]** Viewing Options dialog can be triggered again.","**[UI ADMIN]** More descriptive error messages for entities importer."]},{"version":"DeepHub\xae 2023 R2, 2.4.0","features":["**[Core]** Added an id to the databases to uniquely identify each database.","**[Core]** Added new trackable property \'calculate_collisions\' and configuration parameter \'calculate_collisions_default\' to control the collision behavior of individual trackables.","**[UI KIOSK]** Added dialog to be able to choose between rendering options for location providers, trackables, fences, and zones.","**[UI KIOSK]** Added barcode scanning.","**[UI KIOSK]** If a user clicks on a trackable without a location from a search result, a pop-up will now display informing them of this.","**[UI ADMIN]** Points that define fences and zones are now removable.","**[UI ADMIN]** Added feedback when trying to create a location provider, trackable, fence, or zone with an id that already exists.","**[UI ADMIN]** Added warnings for assigning location provider ids with special characters.","**[UI ADMIN]** Added controls for \'calculate_collisions\' to trackable view.","**[UI]** Added support for webp images for Mapbox raster tiles."],"fixes":["**[Core]** Fixed permission handling for sending location_update messages.","**[Core]** Fixed permission handling for the trackable motion topic.","**[Core]** Fixed a bug where it was not possible to subscribe without a filter to get notified about owned resources.","**[Core]** Fixed a bug where a provider id could be an empty string.","**[Core]** Fixed rfid providers not being reported in consumptions.","**[Core]** Removed `need_transformation` in API version 2 JSON response for zones.","**[UI KIOSK]** Searching for information in arrays is now possible.","**[UI ADMIN]** Fixed a bug where adding location providers via the trackable view could add providers with non-existing ids.","**[UI]** Special characters are now encoded correctly."],"refactor":["**[Core]** Reworked internal handling of API calls by using events.","**[UI ADMIN]** Reworking of import and export."]},{"version":"DeepHub\xae 2023 R1, 2.3.2","fixes":["**[Core]** Fixed health check for ARM based environments.","**[Core]** Fixed a bug, where /trackables/:id/providers returned a broken json in case of an empty result.","**[Core]** Improved error handling for zone transformations.","**[Core]** Reduced time limit of timeout to send keep-alive packages for websocket connections earlier.","**[Core]** Fixed escaping of special characters in error descriptions for rules validator api.","**[Core]** Fixed error handling for defective websocket connections.","**[UI]** Send the correct token after the token refresh.","**[UI]** Return to login page in case OAuth session has expired or user has logged out."]},{"version":"DeepHub\xae 2023 R1, 2.3.1","fixes":["**[Core]** Fixed a bug, where filtering fence events by object_type location_provider was not working properly.","**[Core]** Fixed a bug, where implicitly created location providers did not trigger change events.","**[UI]** Fixed floor-level switcher to support negative floor numbers.","**[UI]** Handle WebGL context-lost events.","**[UI KIOSK]** Fixed missing token in ws connection."]},{"version":"DeepHub\xae 2023 R1, 2.3.0","features":["**[Core]** Added new API targets `/trackables/:trackable_id/providers` and `/providers/:trackable_id/trackables` to get a list of providers associated with trackables and vice versa.","**[Core]** Previously ambiguous API http error codes are now clearly distinguishable by their error types. This introduces a new format for error types, following a reverse url scheme. Examples for such error types are `com.flowcate.license.invalid`, `com.flowcate.auth.permission`, and `com.flowcate.http.bad_request`.","**[Core]** If a trackable has a trackable motion its location is now also considered as the significant location for the API endpoint `/trackables/:trackable_id/location`.","**[Core]** Added ARM support.","**[Core]** Added parameter to filter fence events by object_type (one of `trackable` or `location_provider`).","**[Core]** Consumption objects now contain the size of a zone.","**[Core]** Added object change events to websocket to inform clients about new, modified, and deleted objects.","**[Core]** Added the number of (active) location providers grouped by type to the consumption report.","**[Core]** Updated error handling for Cassandra databases.","**[Core]** Only for API version 2 fence events now always contain the associated provider id for the location update which triggered the event.","**[UI ADMIN]** Allow to search for custom properties content as well in filter UI and list of fences, zones, trackables and location providers.","**[UI KIOSK]** Added new UI mode \'kiosk\'.","**[UI KIOSK]** Added min. (DEEPHUB_MAP_MINZOOM) and max. (DEEPHUB_MAP_MAXZOOM) zoom to environment variables.","**[UI KIOSK]** New default for the max. zoom becomes 24.","**[UI KIOSK]** Added scale control."],"fixes":["**[Core]** Fixed a bug, where zones with invalid local coordinates were rejected, but still written to the database.","**[Core]** Fixed a bug, where timestamp_generated could not be set to `1970-01-01T00:00:00.000Z` for a location update.","**[Core]** Fixed course of location.","**[UI ADMIN]** The \'name\' field is not required for trackables, location providers, fences and zones anymore.","**[UI ADMIN]** The minimum number of characters for the \'name\' field is now 1 for trackables, location providers, fences and zones.","**[UI ADMIN]** Fixed searching for id and name content in list of trackables and location providers."],"refactor":["**[Core]** Removed property `need_transformation` from the zone object for API version 2.","**[UI]** Renamed environment variables from DOCKER_ to DEEPHUB_."]},{"version":"DeepHub\xae 2022 R2, 2.2.3","features":["**[Core]** Added new configuration parameters `cassandra_rate` and `cassandra_burst_size`."],"fixes":["**[Core]** Fix error handling for rate limit errors for Amazon Keyspaces and Azure Cosmos DB.","**[Core]** Fixed count of active trackables and location providers for consumption reporting."]},{"version":"DeepHub\xae 2022 R2, 2.2.2","features":["**[Core]** Added Cassandra support for Amazon Keyspaces and Azure Cosmos DB."]},{"version":"DeepHub\xae 2022 R2, 2.2.1","fixes":["**[Core]** Fixed a bug where duplicated data might accumulate in a Cassandra database. An affected database will be cleaned during the first start of this version."]},{"version":"DeepHub\xae 2022 R2, 2.2.0","features":["**[Core]** Optimized internal event handling.","**[Core]** Added the API endpoint /license/key, to be able to update the key via an API call.","**[Core]** Improved the restart behavior of DeepHub by restoring event timers based on the most recent persisted locations. Events in intermediate states, like tolerance areas or exit delays, are not restored.","**[Core]** Added DeepHub API version 2 for all endpoints, implementing a preview of omlox\u2122 API version 2. If authentication is used, the permission.yaml needs to be updated for the new /v2/ targets to be accessible.","**[Core]** Added the possibility to POST entities with a given id (i.e. without DeepHub generating a new id). This is only available for endpoints residing under API version 2 (e.g. /v2/zones).","**[UI Admin]** New configuration menu: zones and fences live there now. The current subscription/license information can be found there as well.","**[UI Admin]** New URL parameter to pan & zoom directly to trackables and/or location providers and to filter/show only the onces mentioned as parameter","**[UI Admin]** The \u201ctransformation\u201d button on the first page of the zone creation dialog got removed: it was UX-wise not obvious what it does and typically never used because working with a zone implies the use of a transformation of coordinates.","**[UI Admin]** The UI docker image is now based on the nginx-unprivileged base image thus allows to be used in restrictive kubernetes policy environments. The web server serving the UI therefore now runs on port 8080 which has to be taken care of in e.g. docker-compose.yml files orchestrating the DeepHub and its UI container."],"fixes":["**[Core]** Fixed a bug where TrackableMotions could remain when the associated Trackable was deleted.","**[Core]** Fixed a bug where circular fences could not be posted.","**[Core]** Fixed an issue where under extreme load conditions some events would not be forwarded through the websocket interface.","**[Core]** Fixed a bug where stationary trackables were not listed after a restart.","**[Core]** Fixed a bug which could lead to database corruption with sqlite3. The database file is therefore migrated to a new version. Furthermore, the database file is renamed to `data.dat` (previously `config.dat`). A backup of the database is created for each step before the migration: `config.dat.bak` and `data.dat.v1v2.timestamp.bak`.","**[Core]** Fixed an issue with temporary files from sqlite for read-only Docker containers. For these, it is required to set the environment variable SQLITE_TMPDIR to a writable folder, e.g., the mounted folder with the sqlite database.","**[UI Admin]** Filter toggle button immediately opens up the advanced filter dialog instead of the hard to use \u201cright sidebar\u201d","**[UI Admin]** On touchscreen devices, tapping on a trackable or location provider to get detail information as tooltip did not work","**[UI Admin]** Importing of custom properties of zones did not work: they got removed"]},{"version":"DeepHub\xae 2022 R1, 2.1.1","features":["**[Core]** Enhanced the performance of SQlite operations."],"fixes":["**[Core]** Fixed a bug where subsequent location updates were rejected if their distance was close to floating point precision.","**[UI Admin]** Allow to use separate image files as site map per floor level."]},{"version":"DeepHub\xae 2022 R1, 2.1.0","features":["**[UI Admin]** Allow to use an image file as site map. On top of the map or as replacement of the latter."],"fixes":["**[Core]** Fixed a bug where event timers were not correctly removed.","**[Core]** Removing a colliding trackable via the API now triggers a collision end event.","**[UI Admin]** Unable to edit properties of a fence within the UI."]},{"version":"DeepHub\xae 2022 R1, 2.0.0","features":["**[Core]** Added a rule engine with locating rules and the API endpoint /trackables/rules/locating.","**[Core]** Added a validator API /validator/rules/locating to check rule expressions.","**[Core]** Added Cassandra support.","**[Core]** Added new configurable parameter `db_fast_writes` to be able to increase the rate at which location updates can be processed.","**[Core]** Transformations to EPSG:32661 (UPS north) and EPSG:32761 (UPS south) are now supported.","**[Core]** DeepHub now aborts starting without a stack trace, presenting the underlying error message more prominently.","**[Core]** A location without a timestamp_generated will default to `now`, instead of 01.01.1970.","**[Core]** Outdated location updates no longer produce trackable motions.","**[Core]** Added support for ISO-24730 based RTLS systems.","**[Core]** Added health API endpoints: /health, /health/system, /health/ws, /health/zones/summary, /health/zones/:zone_id, /health/sources/summary, and /health/sources/:source_id.","**[Core]** Changed docker base image to Ubuntu version 22.04.","**[UI Admin]** New color theme for UI","**[UI Admin]** New UI for usage of location providers","**[UI Admin]** Make DeepHub UI docker container usable in read-only mode","**[UI Admin]** Support fence definition with negative local coordinates","**[UI Admin]** Use vertical color bar to mark different fence event triggers in different colors"],"fixes":["**[Core]** Fixed Trackable Removal Events.","**[Core]** Fixed timestamp for GeoJSON locations.","**[Core]** Fixed trackables id array for GeoJSON locations and fence events.","**[Core]** Fixed a memory leak when assigning an empty string to the properties member of a location.","**[UI Admin]** Check timestamp during updates to avoid usage of outdated information","**[UI Admin]** Two `next` buttons during fence creation","**[UI Admin]** Crash in UI when using a semicolon in search bar of live view","**[UI Admin]** UI is unable to work with zones and fences without names","**[UI Admin]** UI for fence editing overwrites z-coordinates of corner points on backend"]},{"version":"DeepHub\xae 2021 R2, 1.3.1","features":["**[Core]** Updated error handling for environment variables."]},{"version":"DeepHub\xae 2021 R2, 1.3.0","features":["**[Core]** Added auto-zone-extension (APE) feature to the zones API, allowing to automatically update mobile zones. ","**[Core]** Added API to query trackables which are considered within a given fence according to their last reported location.","**[Core]** Added fine grained permission management for WebSocket subscriptions and messages. Refer to the Security & Authorization documentation for details. ","**[Core]** Added the ability to configure via environment variables.","**[Core]** Added new parameter `spatial_query` to the API endpoints /fences/:fence_id/providers, /fences/:fence_id/trackables, /fences/:fence_id/locations, /trackables/:trackable_id/fences and /providers/:provider_id/fences allowing to choose between a spatial query (based on the last reported location) and the default query (taking into account timeouts).","**[Core]** Implemented coordinate transformations for endpoints which were missing these options.","**[Core]** Added new /trackable/:trackable_id/fences API endpoint. This returns the list of fences which contain the given trackable.","**[Core]** The file hub_config.yaml will no longer be created by default. Instead an example file is included in the bundle. Also, an empty configuration file no longer causes problems.","**[Core]** Added API to query motions which are considered within a given fence. (/fences/:fence_id/motions)","**[Core]** Added new parameter `force_location_update` to the API endpoint POST /trackables and PUT /trackables/:trackable_id, to be able to update the respective TrackableMotion according to the assigned Location Providers if a more recent Location is available.","**[Core]** Added optional boolean property `incomplete_configuration` to zones. If true, the zone will be accepted by POST and PUT even if it is missing some configuration (e.g. missing position).","**[Core]** Added new parameter `foreign_id` to API endpoints GET /zones and /zones/summary to retrieve the zone with the given foreign ID.","**[Core]** DeepHub now enforces the restriction that proximity zones must not have ground control points.","**[Core]** Added the API endpoint /license/info to retrieve license information and warnings.","**[Core]** The value `-1` can be used to set the timeout/ fence_timeout, tolerance_timeout and exit_delay to infinite for providers, trackables and fences.","**[Core]** Added the API endpoint /license/info to retrieve license information and warnings.","**[Core]** The respective `ANY` and `OWN` permissions are now mutually exclusive. Furthermore, paths for a role must not occur more than once. This might require updating your permissions.yaml.","**[Core]** Updated the Cisco CMX Location Notification endpoint to accept both PUT and POST requests.","**[Core]** Added support for https communication via proxy servers by configuring the environment variables `https_proxy` and `no_proxy`.","**[UI Admin]** New checkbox in UI (`Trackable Update/Create`) to allow for disabling of `force_location_update`.","**[UI Admin]** New property `fence_timeout` for trackables and location provider to overrule timeout set at fence.","**[UI Admin]** Check if providers of trackable still exist.","**[UI Admin]** Support for `uninitialized zones`.","**[UI Admin]** Show only one tool tip containing provider and trackable information at once.","**[UI Admin]** Support `-1` as infinite value for several `timeout fields` in UI."],"fixes":["**[Core]** Fixed handling of infinite fence timeouts","**[Core]** Fixed z coordinates being lost for invalid but repairable polygons.","**[Core]** Fixed READ_OWN permissions for summary and root REST endpoints (e.g. /fences and /fences/summary) in case authentication is used. The returned lists are now filtered based on the roles ownership.","**[Core]** Fixed handling for erroneous consumption reporting.","**[UI Admin]** Editing a point of a fence does not work.","**[UI Admin]** Missing `connectivity` icon in case WebSocket connections can\'t be established at all.","**[UI Admin]** Icons illustrating the technology in-use are missing in Firefox.","**[UI Admin]** Unable to remove non-existing location provider from trackable.","**[UI Admin]** Parameterization of links to DeepHub UI are not working with auth service."]},{"version":"DeepHub\xae 2021 R1, 1.2.1","fixes":["**[Core]** Corrected mismatch to spec: `provider_id must be null in case the event was triggered by a Trackable`","**[Core]** Fixed return code handling for consumption reporting"]},{"version":"DeepHub\xae 2021 R1, 1.2.0","features":["**[Core]** Added filter and transform functionality to WebSocket subscriptions. Please refer to the WebSocket API documentation.","**[Core]** Internal changes and improvements related to event processing.","**[Core]** Added consumption and usage statistic API.","**[UI Admin]** **Choose the mapping service** \\n 1. Previously only support for Mapbox was implemented. \\n 2. Now you can choose whether to use Mapbox or Maptiler as mapping service providing the background map and the styling."],"fixes":["**[UI Admin]** Missing tooltips for control widgets of map \\n 1. The control widgets on the right side of the map view now have explanatory tooltips when hovering over them with the mouse.","**[UI Admin]** Creating two Zones or Fences not working \\n 1. When trying to create a second zone or fence immediately after creating the first, the second creation process would fail, leaving a dark grey, non-functional representation on the map resembling the intended area.","**[UI Admin]** Fences: Search not working \\n 1. Searching for a fence via the search bar did not work.","**[UI Admin]** Pressing return key to complete change of a value results in custom properties dialog \\n 1. Previously, it was impossible to complete the editing of any field within the \u201cEdit view\u201d of a fence or zone by hitting the \u201creturn\u201d key on the keyboard.","**[UI Admin]** Selecting a fence on the map is not reflected in left view \\n 1. Selecting a fence on the map with the mouse now causes the left-side list of all fences to scroll to the selected fence. Additionally, the entry of the selected fence is prominently highlighted in the left-side list.","**[UI Admin]** Reset zoom level not working if no data is in DeepHub\xae \\n 1. Previously, if a user clicked the \u201creset zoom\u201d control widget while the DeepHub\xae contained no zones or fences, an error could occur within the browser console and the UI would not appear to react to the mouse click.","**[UI Admin]** UI stores entered information even though it was rejected \\n 1. After editing an object, such as a trackable, the list of all trackables would still show the altered values. However, this was only a bug with the UI; the correct values were stored in the DeepHub\xae.","**[UI Admin]** Fence creation fails in case properties are involved \\n 1. When creating a fence, trying to add properties by clicking on the \u201cAdd properties\u201d button would lead to an interrupt of the creation process, leaving the fence in an incomplete state. Additionally, errors were visible in the browser console."]},{"version":"DeepHub\xae 2021 R1, 1.1.9","features":["**[Core]** Log IP address in HTTP and WebSocket handlers on error.","**[Core]** Added /health API for health checking","**[Core]** Added a new special role named guest. This role allows to bypass authorization when assigned to endpoint in the permissions settings (e.g., for the /health endpoint)."]},{"version":"DeepHub\xae 2021 R1, 1.1.8","features":["**[Core]** Updated Zone and Fence API to include exit delay. ","**[Core]** Reject erroneous Trackable configurations with duplicate provider ID references.","**[Core]** Added trackable_motions:geojson topic to subscribe to geojson encoded motion updates. ","**[Core]** Updated WebSocket session idle timeout configuration. ","**[UI Admin]** **Rework of map** \\n 1. Initialization happens only once \\n 2. Map view is persisted in URL for easy share \\n 3. New control `Initial State Controller` added to get back to view including all features","**[UI Admin]** **Enable RFID and iBeacon Zones** \\n 1. Create, read, update, delete \\n 2. Filter Live View \\n 3. Search and view on Live View","**[UI Admin]** **Trackables** \\n 1. Name is always visible in annotation \\n 2. Trackables `not in motion` are always visible","**[UI Admin]** **UI/UX fine tuning** \\n 1. Put Trackables tab to right in main menu \\n 2. Rework all error messages \\n 3. Workaround for Material Design bug with wrong line height in input fields \\n 4. Zone & Fence: Better wording compared to spec for corners, coordinates and ground control points"],"fixes":["**[Core]** Fixed TrackableMotion does contain a point geometry instead of a polygon in case the Trackable does not define a radius. ","**[UI Admin]** Zone & Fence: Fix New dialog next button","**[UI Admin]** Zone & Fence: Fix editing on map","**[UI Admin]** Zone & Fence: Fix reset of point fields","**[UI Admin]** Zone & Fence: Fix Cancel behavior for Edit mode","**[UI Admin]** Zone & Fence: Fix closing behavior of detail panel","**[UI Admin]** Live: Fix Search list with multiple location provider","**[UI Admin]** Live: Fix 401 error on get trackables/motions","**[UI Admin]** Live: Fix showing trackables with point geometry","**[UI Admin]** Global: Adopt all units according to spec"]},{"version":"1.1.7","features":["**[UI Admin]** First public release."],"fixes":["**[Core]** Fixed an issue caused by an external library where the docker container might get into a startup loop.","**[Core]** Fixed an issue where trackable motions did not get certain values assigned from the related trackable."]},{"version":"1.1.6","features":["**[Core]** IMPORTANT CHANGE: The /v1/zones API was adapted to the latest version of the omlox\u2122 specification. Most importantly, proximity based positioning systems (RFID or iBeacon) require the position to be defined when creating a zone, while ground control points must not be set. The position was previously optional, which allowed to create invalid proximity zones. For other types of RTLS systems ground control points are still required, and the position is still optional.   ","**[Core]** IMPORTANT CHANGE: The property collision_tolerance in the Trackable object has been renamed to exit_tolerance in the latest version of the specification, aligning property names between omlox\u2122 Fences and omlox\u2122 Trackables. This implementation of the Hub has been updated accordingly and may require to adapt the name of this property for client requests.","**[Core]** Added REST endpoints for handling omlox\u2122 proximity events at /v1/providers/proximities and /v1/providers/:provider_id/proximity. Proximity events allow easier integrations of proximity based positioning systems (e.g. RFID or iBeacon). A proximity positioning system simply sends an omlox\u2122 Proximity object and the Hub resolves the proximity information into a location by referring to the position defined for the zone which relates to the proximity positioning system.","**[Core]** Added REST endpoints to request trackable motions at /v1/trackables/motions and /v1/trackables/:trackable_id/motion. ","**[Core]** Added WebSocket pub/sub topic trackable_motions according to the omlox\u2122 motion specification. This topic provides real-time updates for trackable movements, also considering the trackable\'s shape. ","**[Core]** Added Hub configuration option persist_locations which enables to persist all location updates to the database. Previous locations will be loaded when the Hub starts. This option is now enabled by default. Please note that persisting locations affects overall performance.","**[Core]** Updated several configuration options.","**[Core]** Updated parsing the elevation_ref parameter of an omlox\u2122 Location object according to the specification. "],"fixes":["**[Core]** Fixed an issue where a wrong crs was displayed in the location object for a certain API request.","**[Core]** Fixed an issue where a trackable was not correctly removed from the spatial index after it was deleted."]},{"version":"1.1.4","features":["**[Core]** Updated RPC support. See RPC Interface.md for documentation and usage.","**[Core]** Updated the admin frontend, added new features.","**[Core]** Updated trackable and collision API. See the api_draft folder with documentation and examples.","**[Core]** Added query parameters to conveniently update and select location and fence objects in various projections (local coordinates related to a zone, GPS and UTM projections supported throughout the API)."]},{"version":"1.0.1","features":["**[Core]** OpenID based authorization and Role Based Access Control (refer to Security Authorization.md)","**[Core]** Added admin frontend to /v1/web","**[Core]** Flexible server configuration options (refer to Server Configuration.md)","**[Core]** Fixed: Provider type was always `unknown` instead of actual type.","**[Core]** Added trackables array to location object. This allows to identify to which trackable(s) a location update belongs to for example for websocket location update subscriptions.","**[Core]** Added properties field to trackable object. This allows to add custom information associated to a trackable.","**[Core]** Improvements and fixes to the GeoFence engine."]},{"version":"1.0.0","features":["**[Core]** Support for customizable IoT Sensors data: \\n 1. Added \u201esensors\u201c property. The content of the sensors data is application defined. \\n 2. New API endpoints /providers/$id/sensors (GET/PUT) and /trackables/$id/sensors (GET, returning a data array from sensors of all providers belonging to that trackable) ","**[Core]** Added properties to allow fine grained event controls to the Fence object: \\n 1. timeout: Timeout in milliseconds after which a FenceExit event should be triggered when no location updates are sent anymore. Infinite when 0 or null (default). \\n 2. exit_tolerance: The distance tolerance to the geometry of a fence in meters before a fence exit event should be triggered when leaving the fence. Useful to avoid fluctuating entry / exit events due to positioning accuracy at the borders of a fence. \\n 3. tolerance_timeout: Timeout in milliseconds after which a position outside of a fence, but still within exit_tolerance distance from the fence, should trigger an exit event when it\u2019s not seeing any position update inside the fence. ","**[Core]** Added params member to Websocket Subscribe request object to allow for parameters related to websocket subscriptions (e.g. crs and geojson parameters, same as query params available for location and fence REST API).","**[Core]** Basic Authentication and Security Support"]},{"version":"0.9.7","features":["**[Core]** Advanced 3D fence events and general improvements to fence event API. Fence events can now also overlap. ","**[Core]** Added properties to Provider and Fence objects, allowing applications to set generic data.","**[Core]** Forward properties with FenceEvent, allowing applications to act on associated events (e.g. easily build a relationship between a MES production step and a fence event)."],"fixes":["**[Core]** Fixed an issue when requesting GeoJson objects where the object might be invalid."]},{"version":"0.9.5","features":["**[Core]** Added Websocket publish / subscribe API /ws/socket for location updates and fence events. Available topics: location_updates, location_updates:geojson, fence_events, fence_events:geojson.","**[Core]** Added parameter `crs` to all location APIs to query location data for a given projection (e.g. `EPSG:4326` or `local`).","**[Core]** Extended /trackables API. You can now create a trackable and locate the most recent location(s) of any of it\'s assigned location providers via /trackables/:trackable_id/location(s)  ","**[Core]** Changed position type in Location object to use a GeoJson Point geometry. This simplifies the API and avoids use of differing geometry types in other parts of the API. ","**[Core]** Updated /providers API","**[Core]** Improved data persistence","**[Core]** Added HTTP DELETE method to all API resources to clear current data","**[Core]** Added /zones/:zone_id/transform and SimpleTransform object specification to allow easy zone setup workflows (useful for example for RFID zone setup to locate scanners)","**[Core]** Added /fences/:fence_id/events API to generate FenceEvents via API instead of location based fence event generation by DeepHub. This may be useful for RFID scanners or general applications where a 3rd party server may generate its own fence events. This allows to use foreign generated fence events with a DeepHub fence to relate fence events to real world places.","**[Core]** Added /zones/:zone_id/createfence to allow easy creation from an approximated polygon of an existing zone definition. "]},{"version":"0.9.1","features":["**[Core]** Improved handling of invalid fence geometries and give more detailed error descriptions to a user for invalid geometry data."],"fixes":["**[Core]** Fixed geometry type definition for the fence region in the OAS specification and updated example data accordingly. Also provided more detailed description of Position, GeographicPoint and GeographicPolygon types. ","**[Core]** Fixed `fence_name` should be `name` in the OAS Fence object specification."]},{"version":"0.9.0","features":["**[Core]** First public release"]}]')}}]);