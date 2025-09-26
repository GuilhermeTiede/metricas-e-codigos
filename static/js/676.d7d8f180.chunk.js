"use strict";(self.webpackChunkmetricas_e_codigos=self.webpackChunkmetricas_e_codigos||[]).push([[676],{1676:(e,r,s)=>{s.r(r),s.d(r,{default:()=>z});var a=s(1319),t=s(4647),n=s(9281),i=s(3614),l=s(5043),d=s(6545),o=s(3132);const m={name:"",email:"",message:""};function c(e){let r={};return e.name||(r.name=o.A.t("Name is required")),e.email?/\S+@\S+\.\S+/.test(e.email)||(r.email=o.A.t("Email address is invalid")):r.email=o.A.t("Email address is required"),e.message||(r.message=o.A.t("Message is required")),r}var h=s(5639),p=s(9);const x=(0,p.Ay)("p")`
  margin-top: 1.5rem;
`,g=(0,p.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,p.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var y=s(579);const j=(0,n.C)()((e=>{let{title:r,content:s,t:a}=e;return(0,y.jsxs)(g,{children:[(0,y.jsx)("h6",{children:a(r)}),(0,y.jsx)(u,{children:(0,y.jsx)(x,{children:a(s)})})]})})),A=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,p.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,f=(0,p.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,C=(0,p.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,n.C)()((e=>{let{name:r,placeholder:s,onChange:a,t:t}=e;return(0,y.jsxs)(A,{children:[(0,y.jsx)(C,{htmlFor:r,children:t(r)}),(0,y.jsx)(v,{placeholder:t(s),name:r,id:r,onChange:a})]})})),S=(0,n.C)()((e=>{let{name:r,placeholder:s,onChange:a,t:t}=e;return(0,y.jsxs)(b,{children:[(0,y.jsx)(C,{htmlFor:r,children:t(r)}),(0,y.jsx)(f,{placeholder:t(s),id:r,name:r,onChange:a})]})})),k=(0,p.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,q=(0,p.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,E=(0,p.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,O=(0,p.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,z=(0,n.C)()((e=>{let{title:r,content:s,id:n,t:p}=e;const{values:x,errors:g,handleChange:u,handleSubmit:A}=(e=>{const[r,s]=(0,l.useState)({values:{...m},errors:{...m}});return{handleChange:e=>{e.persist();const{name:r,value:a}=e.target;s((e=>({...e,values:{...e.values,[r]:a},errors:{...e.errors,[r]:""}})))},handleSubmit:async a=>{a.preventDefault();const t=r.values,n=e(t);s((e=>({...e,errors:n})));try{Object.values(n).every((e=>""===e))&&((await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(a.target.reset(),s((()=>({values:{...m},errors:{...m}}))),d.A.success({message:o.A.t("Success"),description:o.A.t("Your message has been sent!")})):d.A.error({message:o.A.t("Error"),description:o.A.t("There was an error sending your message, please try again later.")}))}catch(i){d.A.error({message:o.A.t("Error"),description:o.A.t("Failed to submit form. Please try again later.")})}},values:r.values,errors:r.errors}})(c),v=e=>{let{type:r}=e;const s=g[r];return(0,y.jsx)(E,{children:s})};return(0,y.jsx)(k,{id:n,children:(0,y.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,y.jsx)(t.A,{lg:12,md:11,sm:24,xs:24,children:(0,y.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,y.jsx)(j,{title:r,content:s})})}),(0,y.jsx)(t.A,{lg:12,md:12,sm:24,xs:24,children:(0,y.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,y.jsxs)(q,{autoComplete:"off",onSubmit:A,children:[(0,y.jsxs)(t.A,{span:24,children:[(0,y.jsx)(w,{type:"text",name:"name",placeholder:p("Your Name"),value:x.name||"",onChange:u}),(0,y.jsx)(v,{type:"name"})]}),(0,y.jsxs)(t.A,{span:24,children:[(0,y.jsx)(w,{type:"text",name:"email",placeholder:p("Your Email"),value:x.email||"",onChange:u}),(0,y.jsx)(v,{type:"email"})]}),(0,y.jsxs)(t.A,{span:24,children:[(0,y.jsx)(S,{placeholder:p("Your Message"),value:x.message||"",name:"message",onChange:u}),(0,y.jsx)(v,{type:"message"})]}),(0,y.jsx)(O,{children:(0,y.jsx)(h.$,{name:"submit",children:p("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.d7d8f180.chunk.js.map