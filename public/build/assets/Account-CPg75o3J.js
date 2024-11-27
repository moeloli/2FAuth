import{u as A,a as U,a2 as C,c as y,a1 as D,d as _,j as l,e as t,k as B,L as K,l as p,m as w,f as s,t as d,i as g,G as b,p as L,H as v}from"./app-CzxRjCVM.js";import{F as V}from"./Form-EFIuWKGI.js";import{_ as R}from"./SettingTabs-CcdxaQB3.js";/*! 2FAuth version 5.4.3 - Copyright (c) 2024 Bubka - https://github.com/Bubka/2FAuth */const H={class:"options-tabs"},M={key:0,class:"notification is-warning"},W={key:1,class:"notification is-info has-text-centered"},j=["innerHTML"],I={class:"title is-4 has-text-grey-light"},z=["disabled"],G=["value"],q=["value"],J={class:"title is-4 pt-6 has-text-grey-light"},O=["disabled"],Q=["value"],X=["value"],Y={class:"title is-4 pt-6 has-text-danger"},Z={class:"field is-size-7-mobile"},ee={class:"block"},se=["disabled"],ne={__name:"Account",setup(oe){const c=K("2fauth"),u=A(),i=U(),E=L(),F=C(c.prefix+"returnTo","accounts"),a=y(new V({name:u.name,email:u.email,password:""})),r=y(new V({currentPassword:"",password:"",password_confirmation:""})),m=y(new V({password:""}));function P(n){a.put("/user",{returnError:!0}).then(e=>{u.$patch({name:e.data.name,email:e.data.email,isAdmin:e.data.is_admin}),i.success({text:v("auth.forms.profile_saved")})}).catch(e=>{e.response.status===400?i.alert({text:e.response.data.message}):e.response.status!==422&&i.error(e.response)})}function T(n){r.patch("/user/password",{returnError:!0}).then(e=>{r.password="",r.formPassword="",r.password_confirmation="",i.success({text:e.data.message})}).catch(e=>{e.response.status===400?i.alert({text:e.response.data.message}):e.response.status!==422&&i.error(e.response)})}function $(n){confirm(v("auth.confirm.delete_account"))&&m.delete("/user",{returnError:!0}).then(e=>{i.success({text:v("auth.forms.user_account_successfully_deleted")}),E.push({name:"register"})}).catch(e=>{e.response.status===400?i.alert({text:e.response.data.message}):e.response.status!==422&&i.error(e.response)})}return D(n=>{!n.name.startsWith("settings.")&&n.name==="login"&&i.clear()}),(n,e)=>{const f=p("FormField"),h=p("FormButtons"),x=p("FormPasswordField"),N=p("FormWrapper"),k=p("ButtonBackCloseCancel"),S=p("VueFooter");return w(),_("div",null,[l(R,{activeTab:"settings.account"}),t("div",H,[l(N,null,{default:B(()=>[s(u).isAdmin?(w(),_("div",M,d(n.$t("settings.you_are_administrator")),1)):g("",!0),s(u).oauth_provider?(w(),_("div",W,d(n.$t("settings.account_linked_to_sso_x_provider",{provider:s(u).oauth_provider})),1)):g("",!0),t("form",{onSubmit:b(P,["prevent"]),onKeydown:e[3]||(e[3]=o=>s(a).onKeydown(o))},[s(c).config.proxyAuth?(w(),_("div",{key:0,class:"notification is-warning has-text-centered",innerHTML:n.$t("auth.user_account_controlled_by_proxy")},null,8,j)):g("",!0),t("h4",I,d(n.$t("settings.profile")),1),t("fieldset",{disabled:s(c).config.proxyAuth||s(u).oauth_provider},[l(f,{modelValue:s(a).name,"onUpdate:modelValue":e[0]||(e[0]=o=>s(a).name=o),fieldName:"name",fieldError:s(a).errors.get("name"),label:"auth.forms.name",maxLength:255,autocomplete:"username",autofocus:""},null,8,["modelValue","fieldError"]),l(f,{modelValue:s(a).email,"onUpdate:modelValue":e[1]||(e[1]=o=>s(a).email=o),fieldName:"email",fieldError:s(a).errors.get("email"),inputType:"email",label:"auth.forms.email",autocomplete:"email",maxLength:255,autofocus:""},null,8,["modelValue","fieldError"]),l(f,{modelValue:s(a).password,"onUpdate:modelValue":e[2]||(e[2]=o=>s(a).password=o),fieldName:"password",fieldError:s(a).errors.get("password"),inputType:"password",label:"auth.forms.current_password.label",autocomplete:"current-password",help:"auth.forms.current_password.help"},null,8,["modelValue","fieldError"]),l(h,{isBusy:s(a).isBusy,caption:"commons.update"},null,8,["isBusy"])],8,z)],32),t("form",{onSubmit:b(T,["prevent"]),onKeydown:e[7]||(e[7]=o=>s(r).onKeydown(o))},[t("input",{hidden:"",type:"text",name:"name",value:s(a).name,autocomplete:"username"},null,8,G),t("input",{hidden:"",type:"text",name:"email",value:s(a).email,autocomplete:"email"},null,8,q),t("h4",J,d(n.$t("settings.change_password")),1),t("fieldset",{disabled:s(c).config.proxyAuth||s(u).oauth_provider},[l(x,{modelValue:s(r).password,"onUpdate:modelValue":e[4]||(e[4]=o=>s(r).password=o),fieldName:"password",fieldError:s(r).errors.get("password"),idSuffix:"ForUpdate",autocomplete:"new-password",showRules:!0,label:"auth.forms.new_password"},null,8,["modelValue","fieldError"]),l(x,{modelValue:s(r).password_confirmation,"onUpdate:modelValue":e[5]||(e[5]=o=>s(r).password_confirmation=o),showRules:!1,fieldName:"password_confirmation",fieldError:s(r).errors.get("password_confirmation"),inputType:"password",autocomplete:"new-password",label:"auth.forms.confirm_new_password"},null,8,["modelValue","fieldError"]),l(f,{modelValue:s(r).currentPassword,"onUpdate:modelValue":e[6]||(e[6]=o=>s(r).currentPassword=o),fieldName:"currentPassword",fieldError:s(r).errors.get("currentPassword"),inputType:"password",label:"auth.forms.current_password.label",autocomplete:"current-password",help:"auth.forms.current_password.help"},null,8,["modelValue","fieldError"]),l(h,{isBusy:s(r).isBusy,submitId:"btnSubmitChangePwd",caption:"auth.forms.change_password"},null,8,["isBusy"])],8,O)],32),t("form",{id:"frmDeleteAccount",onSubmit:b($,["prevent"]),onKeydown:e[9]||(e[9]=o=>s(m).onKeydown(o))},[t("input",{hidden:"",type:"text",name:"name",value:s(a).name,autocomplete:"username"},null,8,Q),t("input",{hidden:"",type:"text",name:"email",value:s(a).email,autocomplete:"email"},null,8,X),t("h4",Y,d(n.$t("auth.forms.delete_account")),1),t("div",Z,[t("p",ee,d(n.$t("auth.forms.delete_your_account_and_reset_all_data")),1),t("p",null,d(n.$t("auth.forms.reset_your_password_to_delete_your_account")),1),t("p",null,d(n.$t("auth.forms.deleting_2fauth_account_does_not_impact_provider")),1)]),t("fieldset",{disabled:s(c).config.proxyAuth},[l(f,{modelValue:s(m).password,"onUpdate:modelValue":e[8]||(e[8]=o=>s(m).password=o),fieldName:"password",fieldError:s(m).errors.get("password"),inputType:"password",idSuffix:"ForDelete",autocomplete:"new-password",label:"auth.forms.current_password.label",help:"auth.forms.current_password.help"},null,8,["modelValue","fieldError"]),l(h,{isBusy:s(m).isBusy,caption:"auth.forms.delete_your_account",submitId:"btnDeleteAccount",color:"is-danger"},null,8,["isBusy"])],8,se)],32)]),_:1})]),l(S,{showButtons:!0},{default:B(()=>[l(k,{returnTo:{name:s(F)},action:"close"},null,8,["returnTo"])]),_:1})])}}};export{ne as default};