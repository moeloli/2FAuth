import{a as r,S as l,l as p,m,d as _,j as u,C as d,H as b}from"./app-D4Udf6Mm.js";/*! 2FAuth version 5.4.1 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const y=["aria-label","title"],C={__name:"CopyButton",props:{token:String},setup(e){const s=r(),{copy:n}=l({legacy:!0}),c=e;function a(){n(c.token),s.success({text:b("commons.copied_to_clipboard")})}return(o,t)=>{const i=p("FontAwesomeIcon");return m(),_("button",{"aria-label":o.$t("commons.copy_to_clipboard"),title:o.$t("commons.copy_to_clipboard"),class:"button is-like-text is-pulled-right is-small is-text",onClick:t[0]||(t[0]=d(f=>a(),["stop"]))},[u(i,{icon:["fas","copy"]})],8,y)}}};export{C as _};