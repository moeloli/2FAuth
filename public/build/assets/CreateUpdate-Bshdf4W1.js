import{T as v,x as w,c as h,a0 as y,K as N,h as _,k as E,f as t,$ as I,l as m,m as V,e as C,j as i,G as S,p as $}from"./app-CzxRjCVM.js";import{F as k}from"./Form-EFIuWKGI.js";import{u as K}from"./bus-BNAtGMCo.js";/*! 2FAuth version 5.4.3 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const U={__name:"CreateUpdate",props:{groupId:[Number,String]},setup(c){const p=v(),d=$(),l=I(),s=K(),a=c,r=w(()=>a.groupId!=null),o=h(new k({name:""}));y(()=>{l.name=="editGroup"&&(s.editedGroupName?(o.name=s.editedGroupName,s.editedGroupName=void 0):N.get(a.groupId).then(e=>{o.name=e.data.name}))});function f(){r.value?B():g()}async function g(){o.post("/api/v1/groups").then(e=>{p.addOrEdit(e.data),d.push({name:"groups"})})}async function B(){o.put("/api/v1/groups/"+a.groupId).then(e=>{p.addOrEdit(e.data),d.push({name:"groups"})})}return(e,n)=>{const F=m("FormField"),G=m("FormButtons"),b=m("FormWrapper");return V(),_(b,{title:t(r)?e.$t("groups.forms.rename_group"):e.$t("groups.forms.new_group")},{default:E(()=>[C("form",{onSubmit:S(f,["prevent"]),onKeydown:n[1]||(n[1]=u=>t(o).onKeydown(u))},[i(F,{modelValue:t(o).name,"onUpdate:modelValue":n[0]||(n[0]=u=>t(o).name=u),fieldName:"name",fieldError:t(o).errors.get("name"),label:"commons.name",autofocus:""},null,8,["modelValue","fieldError"]),i(G,{submitId:t(r)?"btnEditGroup":"btnCreateGroup",isBusy:t(o).isBusy,caption:t(r)?e.$t("commons.save"):e.$t("commons.create"),showCancelButton:!0,cancelLandingView:"groups"},null,8,["submitId","isBusy","caption"])],32)]),_:1},8,["title"])}}};export{U as default};