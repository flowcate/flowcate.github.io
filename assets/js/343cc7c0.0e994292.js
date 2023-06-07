"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[807],{99669:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"DeepHub 2022 R2 - 2.2.3","label":"DeepHub 2022 R2 - 2.2.3","banner":null,"badge":true,"noIndex":false,"className":"docs-version-DeepHub 2022 R2 - 2.2.3","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/docs/DeepHub 2022 R2 - 2.2.3/overview","docId":"overview"},{"type":"category","label":"DeepHub\xae","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/introduction","docId":"deephub/introduction"},{"type":"link","label":"Configuration","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/ServerConfiguration","docId":"deephub/ServerConfiguration"},{"type":"link","label":"Security & Authorization","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/SecurityAuthorization","docId":"deephub/SecurityAuthorization"},{"type":"link","label":"REST API","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/api","docId":"deephub/api"},{"type":"link","label":"WebSocket API","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/WebsocketAPI","docId":"deephub/WebsocketAPI"},{"type":"link","label":"Locating Rule Extension","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/LocatingRuleExtension","docId":"deephub/LocatingRuleExtension"},{"type":"link","label":"Mobile Zone Extension","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/mobilezones","docId":"deephub/mobilezones"},{"type":"link","label":"Cisco CMX Location Notification Adapter","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/ciscocmx","docId":"deephub/ciscocmx"},{"type":"link","label":"ISO-24730 Adapter","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/iso24730","docId":"deephub/iso24730"},{"type":"link","label":"RPC Interface","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub/RPCInterface","docId":"deephub/RPCInterface"}],"href":"/docs/DeepHub 2022 R2 - 2.2.3/category/deephub"},{"type":"category","label":"DeepHub\xae UI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub-ui/deephub-ui-overview","docId":"deephub-ui/deephub-ui-overview"},{"type":"link","label":"In Detail","href":"/docs/DeepHub 2022 R2 - 2.2.3/deephub-ui/deephub-admin-ui","docId":"deephub-ui/deephub-admin-ui"}],"href":"/docs/DeepHub 2022 R2 - 2.2.3/category/deephub-ui"},{"type":"category","label":"Test-drive the DeepHub\xae","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Trial Instances in the Cloud","href":"/docs/DeepHub 2022 R2 - 2.2.3/testing-deephub/demo_access","docId":"testing-deephub/demo_access"},{"type":"link","label":"Running the DeepHub\xae Locally","href":"/docs/DeepHub 2022 R2 - 2.2.3/testing-deephub/running_dh_locally","docId":"testing-deephub/running_dh_locally"}],"href":"/docs/DeepHub 2022 R2 - 2.2.3/category/test-drive-the-deephub"},{"type":"link","label":"Changelog","href":"/docs/DeepHub 2022 R2 - 2.2.3/release-note","docId":"release-note"}]},"docs":{"deephub-ui/deephub-admin-ui":{"id":"deephub-ui/deephub-admin-ui","title":"In Detail","description":"Overview","sidebar":"tutorialSidebar"},"deephub-ui/deephub-ui-overview":{"id":"deephub-ui/deephub-ui-overview","title":"Overview","description":"The DeepHub\xae UI","sidebar":"tutorialSidebar"},"deephub/api":{"id":"deephub/api","title":"REST API","description":"","sidebar":"tutorialSidebar"},"deephub/ciscocmx":{"id":"deephub/ciscocmx","title":"Cisco CMX Location Notification Adapter","description":"The Cisco CMX Location Notification Adapter enables the DeepHub\xae to be integrated with existing Cisco infrastructure, without the need for an additional middleware.","sidebar":"tutorialSidebar"},"deephub/introduction":{"id":"deephub/introduction","title":"Introduction","description":"The DeepHub\xae offers a reference implementation of an omlox\u2122 hub, including a REST API and a WebSocket API. This chapter focuses on these APIs and includes an overview and description of DeepHub specifics.","sidebar":"tutorialSidebar"},"deephub/iso24730":{"id":"deephub/iso24730","title":"ISO-24730 Adapter","description":"The ISO-24730 Adapter enables the DeepHub\xae to be integrated with ISO-24730-capable real-time locating systems. The ISO-24730 standard was created in the mid 2000s and revised in 2014. It is supported by","sidebar":"tutorialSidebar"},"deephub/LocatingRuleExtension":{"id":"deephub/LocatingRuleExtension","title":"Locating Rule Extension","description":"A trackable can be associated with several location providers.","sidebar":"tutorialSidebar"},"deephub/mobilezones":{"id":"deephub/mobilezones","title":"Mobile Zone Extension","description":"The Mobile Zone Extension (MZE) of the DeepHub\xae allows for the seamless integration of proximity-based positioning solutions that change their position. The MZE changes the position of your proximity zone by connecting the zone with location updates of a real-time locating system - via an omlox Location Provider or an omlox Trackable.","sidebar":"tutorialSidebar"},"deephub/RPCInterface":{"id":"deephub/RPCInterface","title":"RPC Interface","description":"The DeepHub\xae can act as a Remote Procedure Call (RPC) gateway via WebSocket, allowing local devices or services to connect with other devices or services over a local network infrastructure and the internet (which are normally separate from each other and not reachable). This allows for querying of sensor data and device capabilities, or initiating firmware updates as well as other types of information exchange which can be handled via RPC. The DeepHub RPC interface is based on the JSON-RPC exchange format version 2.0.","sidebar":"tutorialSidebar"},"deephub/SecurityAuthorization":{"id":"deephub/SecurityAuthorization","title":"Security & Authorization","description":"DeepHub\xae uses the OpenID standard to secure access to the API.","sidebar":"tutorialSidebar"},"deephub/ServerConfiguration":{"id":"deephub/ServerConfiguration","title":"Configuration","description":"The DeepHub\xae can be configured in three different ways. Listed from most to least specific, these ways are:","sidebar":"tutorialSidebar"},"deephub/WebsocketAPI":{"id":"deephub/WebsocketAPI","title":"WebSocket API","description":"Overview","sidebar":"tutorialSidebar"},"overview":{"id":"overview","title":"Overview","description":"What is the DeepHub\xae?","sidebar":"tutorialSidebar"},"release-note":{"id":"release-note","title":"Changelog","description":"","sidebar":"tutorialSidebar"},"testing-deephub/demo_access":{"id":"testing-deephub/demo_access","title":"Trial Instances in the Cloud","description":"DeepHub\xae Trial Accounts","sidebar":"tutorialSidebar"},"testing-deephub/running_dh_locally":{"id":"testing-deephub/running_dh_locally","title":"Running the DeepHub\xae Locally","description":"Getting Started","sidebar":"tutorialSidebar"}}}')}}]);