"use strict";(self.webpackChunkmetricas_e_codigos=self.webpackChunkmetricas_e_codigos||[]).push([[676],{1676:(e,s,n)=>{n.r(s),n.d(s,{default:()=>z});var i=n(1319),a=n(4647),r=n(9281),t=n(3614),l=n(5043),d=n(6545),o=n(3132);const m={name:"",email:"",message:""};function c(e){let s={};return e.name||(s.name=o.A.t("Name is required")),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email=o.A.t("Email address is invalid")):s.email=o.A.t("Email address is required"),e.message||(s.message=o.A.t("Message is required")),s}var h=n(5639),p=n(9);const x=(0,p.Ay)("p")`
  margin-top: 1.5rem;
`,g=(0,p.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,p.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var j=n(579);const v=(0,r.C)()((e=>{let{title:s,content:n,t:i}=e;return(0,j.jsxs)(g,{children:[(0,j.jsx)("h6",{children:i(s)}),(0,j.jsx)(u,{children:(0,j.jsx)(x,{children:i(n)})})]})})),y=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,A=(0,p.Ay)("input")`
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
`,w=(0,p.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,C=(0,r.C)()((e=>{let{name:s,placeholder:n,onChange:i,t:a}=e;return(0,j.jsxs)(y,{children:[(0,j.jsx)(w,{htmlFor:s,children:a(s)}),(0,j.jsx)(A,{placeholder:a(n),name:s,id:s,onChange:i})]})})),k=(0,r.C)()((e=>{let{name:s,placeholder:n,onChange:i,t:a}=e;return(0,j.jsxs)(b,{children:[(0,j.jsx)(w,{htmlFor:s,children:a(s)}),(0,j.jsx)(f,{placeholder:a(n),id:s,name:s,onChange:i})]})}));var S=n(2646);const q=(0,p.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,O=(0,p.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,$=(0,p.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,_=(0,p.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,z=(0,r.C)()((e=>{let{title:s,content:n,id:r,t:p,icon:x}=e;const{values:g,errors:u,handleChange:y,handleSubmit:A}=(e=>{const[s,n]=(0,l.useState)({values:{...m},errors:{...m}});return{handleChange:e=>{e.persist();const{name:s,value:i}=e.target;n((e=>({...e,values:{...e.values,[s]:i},errors:{...e.errors,[s]:""}})))},handleSubmit:async i=>{i.preventDefault();const a=s.values,r=e(a);if(n((e=>({...e,errors:r}))),!Object.values(r).every((e=>""===e)))return void d.A.error({message:o.A.t("Aten\xe7\xe3o"),description:o.A.t("Por favor, preencha os campos obrigat\xf3rios.")});const t=`Ol\xe1, meu nome \xe9 ${a.name}. Email: ${a.email}. Mensagem: ${a.message}`,l=`https://wa.me/554899743441?text=${encodeURIComponent(t)}`;d.A.success({message:o.A.t("Redirecting"),description:o.A.t("Opening WhatsApp...")}),i.target.reset(),n((()=>({values:{...m},errors:{...m}}))),window.open(l,"_blank")},values:s.values,errors:s.errors}})(c),b=e=>{let{type:s}=e;const n=u[s];return(0,j.jsx)($,{children:n})};return(0,j.jsx)(q,{id:r,children:(0,j.jsxs)(i.A,{justify:"space-between",align:"middle",children:[(0,j.jsx)(a.A,{lg:12,md:11,sm:24,xs:24,children:(0,j.jsx)(t.q7,{direction:"left",triggerOnce:!0,children:(0,j.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[x&&(0,j.jsx)("div",{style:{maxWidth:"180px"},children:(0,j.jsx)(S.A,{src:x,width:"100%",height:"100%"})}),(0,j.jsx)(v,{title:s,content:n})]})})}),(0,j.jsx)(a.A,{lg:12,md:12,sm:24,xs:24,children:(0,j.jsx)(t.q7,{direction:"right",triggerOnce:!0,children:(0,j.jsxs)(O,{autoComplete:"off",onSubmit:A,children:[(0,j.jsxs)(a.A,{span:24,children:[(0,j.jsx)(C,{type:"text",name:"name",placeholder:p("Your Name"),value:g.name||"",onChange:y}),(0,j.jsx)(b,{type:"name"})]}),(0,j.jsxs)(a.A,{span:24,children:[(0,j.jsx)(C,{type:"text",name:"email",placeholder:p("Your Email"),value:g.email||"",onChange:y}),(0,j.jsx)(b,{type:"email"})]}),(0,j.jsxs)(a.A,{span:24,children:[(0,j.jsx)(k,{placeholder:p("Your Message"),value:g.message||"",name:"message",onChange:y}),(0,j.jsx)(b,{type:"message"})]}),(0,j.jsx)(_,{children:(0,j.jsx)(h.$,{name:"submit",children:p("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.4c02f448.chunk.js.map