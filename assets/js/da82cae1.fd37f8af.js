"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[8867],{16521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var o=n(85893),a=n(11151);const s={slug:"new-release-2.4.0",title:"DeepHub 2023 R2 - 2.4.0 released",authors:["wraromer"],tags:[]},r=void 0,l={permalink:"/blog/new-release-2.4.0",source:"@site/blog/2023-11-30-latest_release/index.md",title:"DeepHub 2023 R2 - 2.4.0 released",description:"DeepHub 2023 R2 - 2.4.0 was released today!",date:"2023-11-30T00:00:00.000Z",formattedDate:"November 30, 2023",tags:[],readingTime:.91,hasTruncateMarker:!1,authors:[{name:"Wolfgang R\xf6mer",title:"Product Owner DeepHub",url:"https://www.flowcate.com/deephub",imageURL:"https://github.com/wraromer.png",key:"wraromer"}],frontMatter:{slug:"new-release-2.4.0",title:"DeepHub 2023 R2 - 2.4.0 released",authors:["wraromer"],tags:[]},unlisted:!1,nextItem:{title:"The new version of the omlox standard is here",permalink:"/blog/omlox-v2"}},i={authorsImageUrls:[void 0]},h=[];function c(e){const t={a:"a",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"DeepHub 2023 R2 - 2.4.0 was released today!"}),"\n",(0,o.jsx)(t.p,{children:"One noteworthy change is a new property for trackables that allows their participation in collision handling to be enabled or disabled. Not only can this significantly save CPU power if collision handling is not needed,\nbut it also allows for easy handling of use cases where a huge amount of tracked assets are close to each other, resulting in a bulk of collisions happening at the same time."}),"\n",(0,o.jsx)(t.p,{children:'Example: a forklift moves a pallet with a lot of RFID-tagged assets. All these assets are within close proximity to each other while they reside on the pallet. They are colliding but the information that this is happening is not relevant.\nCollision handling for the forklift itself is nevertheless very relevant and so the trackable representing the forklift has the option to "participate in collision handling" set to true, while it stays\noff for all the RFID-tagged assets on the pallet. Only collision events for the forklift would be delivered to listeners subscribed to these events.'}),"\n",(0,o.jsxs)(t.p,{children:["Have a look at the ",(0,o.jsx)(t.a,{href:"/docs/release-note",children:"changelog"})," for all the details."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(67294);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);