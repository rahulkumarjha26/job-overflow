(this["webpackJsonpjob-overflow"]=this["webpackJsonpjob-overflow"]||[]).push([[0],{34:function(e,t,c){},39:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(20),r=c.n(i),l=(c(48),c(49),c(10)),o=c(7),j=c(5),d=c.p+"static/media/office.49402493.mp4",b=(c(50),c(23)),h=(c(51),["btn--primary","btn--outline"]),u=["btn--medium","btn--large"],O=function(e){var t=e.children,c=e.type,n=e.onClick,a=e.buttonStyle,i=e.buttonSize,r=e.location,o=h.includes(a)?a:h[0],j=u.includes(i)?i:u[0];return Object(s.jsx)(l.b,{to:r,className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(o," ").concat(j),onClick:n,type:c,children:t})})};c(57);var x=function(){var e,t,c=Object(n.useState)(!1),a=Object(j.a)(c,2),i=a[0],r=a[1],o=function(){return r(!1)},d=Object(n.useState)(!0),h=Object(j.a)(d,2),u=h[0],x=h[1],f=function(){window.innerWidth<=960?x(!1):x(!0)};return Object(n.useEffect)((function(){f()}),[]),window.addEventListener("resize",f),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsx)(l.b,{style:{textDecoration:"none",color:"white"},to:"/",className:"navbar-logo",children:Object(s.jsx)("h1",{children:"Job Overflow"})}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return r(!i)},children:Object(s.jsx)("i",{className:i?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:i?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,(e={style:{textDecoration:"none"},className:"link",to:"/recruiter"},Object(b.a)(e,"className","nav-links"),Object(b.a)(e,"onClick",o),Object(b.a)(e,"children","Recruiter"),e))}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,(t={style:{textDecoration:"none"},className:"link",to:"/candidate"},Object(b.a)(t,"className","nav-links"),Object(b.a)(t,"onClick",o),Object(b.a)(t,"children","Candidate"),t))})]}),Object(s.jsx)("div",{className:"btn-login",children:u&&Object(s.jsx)(O,{location:"/candidate",buttonStyle:"btn--outline",children:"Login/Register"})})]})})})};var f=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(j.a)(t,2),a=(c[0],c[1],Object(n.useState)("")),i=Object(j.a)(a,2),r=i[0],l=i[1],b=Object(n.useState)(""),h=Object(j.a)(b,2),u=h[0],O=h[1],f=Object(n.useState)(""),m=Object(j.a)(f,2),p=m[0],g=m[1],y=Object(n.useState)(!1),v=Object(j.a)(y,2);return v[0],v[1],Object(n.useEffect)((function(){var e=document.getElementById("signUp"),t=document.getElementById("signIn"),c=document.getElementById("container");e.addEventListener("click",(function(){c.classList.add("right-panel-active")})),t.addEventListener("click",(function(){c.classList.remove("right-panel-active")}))}),[]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)("video",{src:d,autoPlay:!0,loop:!0,muted:!0}),Object(s.jsxs)("div",{class:"container",id:"container",children:[Object(s.jsx)("div",{class:"form-container sign-up-container",children:Object(s.jsxs)("form",{action:"#",children:[Object(s.jsx)("h1",{children:"Register"}),Object(s.jsxs)("div",{class:"social-container",children:[Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-facebook-f"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-google-plus-g"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-linkedin-in"})})]}),Object(s.jsx)("span",{children:"or use your email for registration"}),Object(s.jsx)("input",{type:"text",placeholder:"Name"}),Object(s.jsx)("input",{type:"email",placeholder:"Email"}),Object(s.jsx)("input",{type:"password",placeholder:"Password"}),Object(s.jsx)("button",{onClick:function(){e.push("/recruiter-details")},children:"Sign Up"})]})}),Object(s.jsx)("div",{class:"form-container sign-in-container",children:Object(s.jsxs)("form",{action:"#",children:[Object(s.jsx)("h1",{children:"Sign In"}),Object(s.jsxs)("div",{class:"social-container",children:[Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-facebook-f"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-google-plus-g"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-linkedin-in"})})]}),Object(s.jsx)("span",{children:"or use your account"}),Object(s.jsx)("input",{type:"email",placeholder:"Email",onChange:function(e){return l(e.target.value)}}),Object(s.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)}}),Object(s.jsx)("label",{style:{color:"dodgerblue"},children:p}),Object(s.jsx)("a",{href:"#",children:"Forgot your password?"}),Object(s.jsx)("button",{onClick:function(){return function(t,c){"recruiter123@gmail.com"==t&&"recruiter123"==c?e.push("/recruiter-details"):g("Incorrect Email/Password")}(r,u)},children:"Sign In"})]})}),Object(s.jsx)("div",{class:"overlay-container",children:Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsxs)("div",{class:"overlay-panel overlay-left",children:[Object(s.jsx)("h1",{children:"Let's Hire the best Candidates!"}),Object(s.jsx)("p",{children:"To keep connected with us please login with your personal info"}),Object(s.jsx)("button",{class:"ghost",id:"signIn",children:"Sign In"})]}),Object(s.jsxs)("div",{class:"overlay-panel overlay-right",children:[Object(s.jsx)("h1",{children:"Welcome Recruiter"}),Object(s.jsx)("p",{children:"Enter your personal details and start journey with us"}),Object(s.jsx)("button",{class:"ghost",id:"signUp",children:"Sign Up"})]})]})})]})]})})};c(58);var m=function(){var e=Object(o.f)(),t=Object(n.useState)(""),c=Object(j.a)(t,2),a=(c[0],c[1],Object(n.useState)("")),i=Object(j.a)(a,2),r=i[0],l=i[1],b=Object(n.useState)(""),h=Object(j.a)(b,2),u=h[0],O=h[1],f=Object(n.useState)(""),m=Object(j.a)(f,2),p=m[0],g=m[1];return Object(n.useEffect)((function(){var e=document.getElementById("signUp"),t=document.getElementById("signIn"),c=document.getElementById("container");e.addEventListener("click",(function(){c.classList.add("right-panel-active")})),t.addEventListener("click",(function(){c.classList.remove("right-panel-active")}))}),[]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)("video",{src:d,autoPlay:!0,loop:!0,muted:!0}),Object(s.jsxs)("div",{class:"container",id:"container",children:[Object(s.jsx)("div",{class:"form-container sign-up-container",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("h1",{children:"Register"}),Object(s.jsxs)("div",{class:"social-container",children:[Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-facebook-f"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-google-plus-g"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-linkedin-in"})})]}),Object(s.jsx)("span",{children:"or use your email for registration"}),Object(s.jsx)("input",{type:"text",placeholder:"Name"}),Object(s.jsx)("input",{type:"email",placeholder:"Email"}),Object(s.jsx)("input",{type:"password",placeholder:"Password"}),Object(s.jsx)("button",{onClick:function(){e.push("/candidate-details")},children:"Sign Up"})]})}),Object(s.jsx)("div",{class:"form-container sign-in-container",children:Object(s.jsxs)("form",{action:"#",children:[Object(s.jsx)("h1",{children:"Sign In"}),Object(s.jsxs)("div",{class:"social-container",children:[Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-facebook-f"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-google-plus-g"})}),Object(s.jsx)("a",{href:"#",class:"social",children:Object(s.jsx)("i",{class:"fab fa-linkedin-in"})})]}),Object(s.jsx)("span",{children:"or use your account"}),Object(s.jsx)("input",{type:"email",placeholder:"Email",onChange:function(e){return l(e.target.value)}}),Object(s.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)}}),Object(s.jsx)("label",{style:{color:"dodgerblue"},children:p}),Object(s.jsx)("a",{href:"#",children:"Forgot your password?"}),Object(s.jsx)("button",{onClick:function(){return function(t,c){"candidate123@gmail.com"==t&&"candidate123"==c?e.push("/candidate-details"):g("Incorrect Email/Password")}(r,u)},children:"Sign In"})]})}),Object(s.jsx)("div",{class:"overlay-container",children:Object(s.jsxs)("div",{class:"overlay",children:[Object(s.jsxs)("div",{class:"overlay-panel overlay-left",children:[Object(s.jsx)("h1",{children:"Let's get you a job!"}),Object(s.jsx)("p",{children:"To keep connected with us please login with your personal info"}),Object(s.jsx)("button",{class:"ghost",id:"signIn",children:"Sign In"})]}),Object(s.jsxs)("div",{class:"overlay-panel overlay-right",children:[Object(s.jsx)("h1",{children:"Welcome Candidate"}),Object(s.jsx)("p",{children:"Enter your personal details and start journey with us"}),Object(s.jsx)("button",{class:"ghost",id:"signUp",children:"Sign Up"})]})]})})]})]})})},p=c(66),g=c(65),y=c(67),v=(c(39),c(34),[{role:"React Developer",exp:"1-2 years",loc:"Delhi",salary:"7 LPA"},{role:"Backend Developer",exp:"3-5 years",loc:"Bangalore",salary:"5 LPA"},{role:"Business Executive",exp:"2-3 years",loc:"Pune",salary:"5.5 LPA"}]),k=function(){var e=Object(o.f)(),t=Object(n.useState)(v),c=Object(j.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),l=Object(j.a)(r,2),d=l[0],b=l[1],h=Object(n.useState)(""),u=Object(j.a)(h,2),O=u[0],x=u[1],f=Object(n.useState)(""),m=Object(j.a)(f,2),k=m[0],N=m[1],w=Object(n.useState)(""),S=Object(j.a)(w,2),C=S[0],E=S[1],L=Object(n.useState)(""),_=Object(j.a)(L,2),P=_[0],B=_[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(p.a,{bg:"dark",variant:"dark",children:[Object(s.jsx)(p.a.Brand,{children:Object(s.jsx)("h1",{style:{left:0},children:"Job Overflow"})}),Object(s.jsx)("button",{onClick:function(){e.push("/")},style:{color:"white",borderRadius:0,backgroundColor:"black",marginBottom:25},children:"Log out"})]}),Object(s.jsxs)("div",{className:"row",style:{justifyContent:"flex-start"},children:[Object(s.jsx)("h3",{style:{textAlign:"start",marginLeft:30,padding:20},children:"Jobs Posted by you"}),Object(s.jsx)("a",{href:"#",style:{fontSize:20},onClick:function(){return b(!0)},className:"btn btn-outline-dark",children:"Add a job"})]}),d?Object(s.jsxs)(g.a,{show:d,children:[Object(s.jsxs)(g.a.Body,{children:[Object(s.jsx)("input",{onChange:function(e){return x(e.target.value)},type:"text",placeholder:"Job Role"}),Object(s.jsx)("input",{onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Experience in years"}),Object(s.jsx)("input",{onChange:function(e){return E(e.target.value)},type:"text",placeholder:"Job Location"}),Object(s.jsx)("input",{onChange:function(e){return B(e.target.value)},type:"text",placeholder:"Salary Expectation"})]}),Object(s.jsxs)(g.a.Footer,{children:[Object(s.jsx)(y.a,{onClick:function(){return b(!1)},variant:"secondary",children:"Close"}),Object(s.jsx)(y.a,{onClick:function(){return function(e,t,c,s){a.push({role:e,exp:t,loc:c,salary:s}),b(!1)}(O,k,C,P)},variant:"dark",children:"Add"})]})]}):Object(s.jsx)(s.Fragment,{}),Object(s.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(s.jsx)("div",{className:"row",children:a.map((function(e){return Object(s.jsx)("div",{className:"col-md-3",children:Object(s.jsxs)("div",{className:"card text-center",style:{marginBottom:20,borderRadius:20,borderColor:"dodgerblue"},children:[Object(s.jsx)("div",{className:"overflow"}),Object(s.jsxs)("div",{className:"card-body text-dark",children:[Object(s.jsx)("h4",{className:"card-title",children:e.role}),Object(s.jsx)("text",{className:"card-text text-secondary",children:"A lot of random text that tells u about the job. The candidate should be able to have two eyes, two hands and a brain for a start. The candidate should also be able to make tea for everyone at the office."}),Object(s.jsx)("div",{style:{marginTop:20},children:Object(s.jsxs)("ui",{style:{fontSize:15,textAlign:"start"},children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Experience: "}),e.exp]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Location: "}),e.loc]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Salary: "}),e.salary]})]})}),Object(s.jsx)("a",{href:"#",onClick:function(){return function(e){i(a.filter((function(t){return t!=e})))}(e)},className:"btn btn-outline-success",children:"Delete"})]})]})})}))})})]})},N=[{role:"React Developer",exp:"1-2 years",loc:"Delhi",salary:"7 LPA"},{role:"Backend Developer",exp:"3-5 years",loc:"Bangalore",salary:"5 LPA"},{role:"Business Executive",exp:"2-3 years",loc:"Pune",salary:"5.5 LPA"}],w=[{role:"Frontend Developer",exp:"2-3 years",loc:"Hyderabas",salary:"12 LPA"}],S=function(){var e=Object(o.f)(),t=Object(n.useState)(N),c=Object(j.a)(t,2),a=c[0],i=(c[1],Object(n.useState)(!1)),r=Object(j.a)(i,2),l=r[0],d=r[1],b=Object(n.useState)(""),h=Object(j.a)(b,2),u=(h[0],h[1],Object(n.useState)("")),O=Object(j.a)(u,2),x=(O[0],O[1],Object(n.useState)("")),f=Object(j.a)(x,2),m=(f[0],f[1],Object(n.useState)("")),g=Object(j.a)(m,2);g[0],g[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(p.a,{bg:"dark",variant:"dark",children:[Object(s.jsx)(p.a.Brand,{children:Object(s.jsx)("h1",{style:{left:0},children:"Job Overflow"})}),Object(s.jsx)("button",{onClick:function(){e.push("/")},style:{color:"white",borderRadius:0,backgroundColor:"black",marginBottom:25},children:"Log out"})]}),Object(s.jsxs)("div",{className:"row",style:{justifyContent:"flex-start",marginLeft:50},children:[Object(s.jsx)("a",{href:"#",style:{fontSize:20},onClick:function(){return d(!1)},className:"btn btn-outline-dark",children:"Jobs for you"}),Object(s.jsx)("a",{href:"#",style:{fontSize:20},onClick:function(){return d(!0)},className:"btn btn-outline-dark",children:"Applied Jobs"})]}),Object(s.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(s.jsx)("div",{className:"row",children:(l?w:a).map((function(e){return Object(s.jsx)("div",{className:"col-sm-3",children:Object(s.jsxs)("div",{className:"card text-center",style:{marginBottom:20,borderRadius:20,borderColor:"dodgerblue"},children:[Object(s.jsx)("div",{className:"overflow"}),Object(s.jsxs)("div",{className:"card-body text-dark",children:[Object(s.jsx)("h4",{className:"card-title",children:e.role}),Object(s.jsx)("text",{className:"card-text text-secondary",children:"A lot of random text that tells u about the job. The candidate should be able to have two eyes, two hands and a brain for a start. The candidate should also be able to make tea for everyone at the office."}),Object(s.jsx)("div",{style:{marginTop:20},children:Object(s.jsxs)("ui",{style:{textAlign:"start"},children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Experience: "}),e.exp]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Location: "}),e.loc]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Salary: "}),e.salary]})]})}),l?Object(s.jsx)(s.Fragment,{}):Object(s.jsx)("a",{href:"#",onClick:function(){return w.push(e)},className:"btn btn-outline-success",children:"Apply for this Job"})]})]})})}))})})]})};c(62);var C=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards__item",children:Object(s.jsxs)(l.b,{style:{textDecoration:"none"},className:"cards__item__link",to:e.path,children:[Object(s.jsx)("figure",{className:"cards__item__pic-wrap",children:Object(s.jsx)("img",{src:e.src,className:"cards__item__img"})}),Object(s.jsxs)("div",{className:"cards__item__info",children:[Object(s.jsx)("h5",{className:"cards__item__text",children:e.text}),Object(s.jsx)("p",{style:{fontSize:16},children:e.notes})]})]})})})};var E=function(){return Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h1",{children:"Why us?"}),Object(s.jsx)("div",{className:"cards__container",children:Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(C,{src:"https://media2.giphy.com/media/muGYyrWwxOOMo/giphy.gif?cid=ecf05e473my5r22z8fz9xqrx1lc0356xbrd370q40g9u2ruj&rid=giphy.gif",notes:"Thanks to our AI based Recruitement, with features like resume parsing and shortlisting on the basis of skills.",text:"Shortlist only the best"}),Object(s.jsx)(C,{src:"https://media0.giphy.com/media/3o7TKGOsxPEezK5zzy/giphy.gif?cid=ecf05e479700c08ab76352b4f7dc726b5e40396083d35fba&rid=giphy.gif",notes:"Gone are the days when you had to email every single company via email. Just send us your resume and you are good to go",text:"Get More Visibility"}),Object(s.jsx)(C,{src:"https://media4.giphy.com/media/PaLrmoClRe8XFUubE0/giphy.gif?cid=ecf05e47yzbiuw8yw0tszxx378cgptz883wttzmd78fcbz4s&rid=giphy.gif",notes:"With our high quality aptitude and logical tests. You can sit back and relax while we find the best candidates for you.",text:"Verify Their Abilities"}),Object(s.jsx)(C,{src:"https://media0.giphy.com/media/1yJEEsgy4q2bu/giphy.gif",notes:"Organizing and dealing with your candidates is much easier thanks to our Artificial Chat Bots",text:"Organize Your Candidates"})]})})]})};var L=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)("video",{src:d,autoPlay:!0,loop:!0,muted:!0}),Object(s.jsx)("h1",{children:"Get Hired"}),Object(s.jsx)("p",{children:"What are you waiting for?"}),Object(s.jsxs)("div",{className:"main-btns",children:[Object(s.jsx)(O,{location:"/candidate",className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Looking for a Job"}),Object(s.jsx)(O,{location:"/recruiter",className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"Hire Candidates"})]})]}),Object(s.jsx)(E,{})]})};var _=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(l.a,{children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/",exact:!0,component:L}),Object(s.jsx)(o.a,{path:"/recruiter",component:f}),Object(s.jsx)(o.a,{path:"/candidate",component:m}),Object(s.jsx)(o.a,{path:"/recruiter-details",component:k}),Object(s.jsx)(o.a,{path:"/candidate-details",component:S})," *"]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),P()}},[[63,1,2]]]);
//# sourceMappingURL=main.21ad75f6.chunk.js.map