import{a as V}from"./axios-08622986.js";import{_ as I,r as u,a,b as m,c as h,e,w as t,d as o,g as _,u as v,F as k,n as B,p as N,h as S}from"./index-e22e787b.js";const g=p=>(N("data-v-009c4496"),p=p(),S(),p),C={class:"card-header"},E=g(()=>o("div",null,[o("span",{style:{color:"#999","font-size":"14px"}},"设置"),_(),o("i",{style:{margin:"0 8px",color:"#dddee1","font-size":"12px"}},"/"),o("span",{style:{"font-weight":"700",color:"#495060"}}," 端口管理")],-1)),F={style:{"font-size":"12px"}},U=g(()=>o("span",null,"查询",-1)),L=g(()=>o("span",{style:{"font-weight":"700",color:"#495060"}},"账号列表",-1)),T=["src"],j={__name:"portmanage",setup(p){const f=u(""),x=u("");let r=u([]);return V.post("/system/portmanage").then(y=>{r.value=y.data.m.data,r.value.forEach((n,d)=>{n.index=d+1})}),(y,n)=>{const d=a("el-button"),b=a("el-input"),c=a("el-col"),w=a("el-row"),i=a("el-card"),l=a("el-table-column"),z=a("el-table");return m(),h("div",null,[e(i,{class:"box-card"},{default:t(()=>[o("div",C,[E,o("span",F,[_(" 共(1/3) "),e(d,{type:"primary",style:{"font-size":"12px"}},{default:t(()=>[_("+ 新建账号")]),_:1})])]),e(i,{class:"box-card",style:{"margin-top":"30px"},shadow:"hover"},{header:t(()=>[U]),default:t(()=>[o("div",null,[e(w,{gutter:20},{default:t(()=>[e(c,{span:6},{default:t(()=>[e(b,{style:{width:""},size:"large",modelValue:f.value,"onUpdate:modelValue":n[0]||(n[0]=s=>f.value=s),placeholder:"手机号"},null,8,["modelValue"])]),_:1}),e(c,{span:6},{default:t(()=>[e(b,{size:"large",modelValue:x.value,"onUpdate:modelValue":n[1]||(n[1]=s=>x.value=s),placeholder:"姓名"},null,8,["modelValue"])]),_:1}),e(c,{span:6},{default:t(()=>[e(d,{size:"large",type:"primary",style:{"font-size":"12px"}},{default:t(()=>[_("查询")]),_:1})]),_:1})]),_:1})])]),_:1}),e(i,{class:"box-card",style:{"margin-top":"30px"},shadow:"hover"},{header:t(()=>[L]),default:t(()=>[o("div",null,[e(z,{data:v(r),type:"index",border:"",style:{width:"100%"}},{default:t(()=>[e(l,{prop:"index",label:"#",width:"80",align:"center"}),e(l,{prop:"u_name",label:"姓名",width:"80",align:"center"}),e(l,{prop:"u_photo",label:"头像",width:"150",align:"center"},{default:t(()=>[(m(!0),h(k,null,B(v(r),s=>(m(),h("img",{src:s.u_photo,style:{"background-size":"cover",width:"50px",height:"50px"}},null,8,T))),256))]),_:1}),e(l,{prop:"u_phone",label:"手机",width:"180",align:"center"}),e(l,{prop:"u_no",label:"账号",width:"100",align:"center"}),e(l,{prop:"group_title",label:"权限",width:"100",align:"center"}),e(l,{prop:"group_id",label:"操作",align:"center"})]),_:1},8,["data"])])]),_:1})]),_:1})])}}},D=I(j,[["__scopeId","data-v-009c4496"]]);export{D as default};