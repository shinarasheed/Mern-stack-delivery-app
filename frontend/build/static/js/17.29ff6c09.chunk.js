(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[17],{102:function(e,r,t){"use strict";t.r(r);var n=t(3),s=t(2),a=t(40),o=t(1),i=t(5),l=t.n(i),c=t(9),u=t(11),d=t(74),b=t(6),p=t(7),m=t(42),j=t(88);function g(){return(g=Object(c.a)(l.a.mark((function e(r){var t,n,s,a,o,i,c,u,d,b,p,g,h,v,x;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.setFormIsLoading,n=r.setIsSuccessfullySend,s=r.setServerError,a=r.info,o=r.isAdmin,i=r.setAllUsers,c=r.token,u=r.setCurrentUser,d=r.history,e.prev=1,t(!0),s(""),b=localStorage.getItem("userId"),(p=new Headers).append("Accept","application/json"),p.append("Content-Type","application/json"),p.append("Authorization","Bearer ".concat(c)),g={method:"PUT",headers:p,body:JSON.stringify(a)},e.next=12,fetch("/api/users/me/".concat(b),g);case 12:return h=e.sent,e.next=15,h.json();case 15:if(v=e.sent,t(!1),200!==h.status){e.next=27;break}if(e.t0=o,!e.t0){e.next=22;break}return e.next=22,Object(j.a)({token:c,setAllUsers:i});case 22:return e.next=24,Object(m.a)({token:c,setCurrentUser:u});case 24:return n(!0),setTimeout((function(){n(!1),d.push("/myAccount/myProfile")}),3e3),e.abrupt("return");case 27:x=v.message,console.log(x),s(x),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(1),console.log(e.t1);case 35:case"end":return e.stop()}}),e,null,[[1,32]])})))).apply(this,arguments)}var h=function(e){return g.apply(this,arguments)};var v,x,f,O,w,S=t(39),y=t(76),C=t(82),A=t(86),k=t(17),N=t.p+"static/media/user-edit-solid.3b6cccdd.svg",P=t(0),I=s.b.section(v||(v=Object(n.a)(["\n    min-height:100vh;\nwidth:100vw;\npadding: 60px 0px;\n\n"]))),L=s.b.form(x||(x=Object(n.a)(["\n\n  max-width:400px;\n  width:100%;\n      padding: 10px 25px 40px;\n    border-radius: 10px;\n    background: #fff;\nmargin: 50px auto;\ndisplay:flex;\nflex-flow:column;\nalign-items:center;\n& > input {\n  border:none;\n  background: #f0f0f0;\n}\n&> label {\n  margin: 0 auto 20px\n}\n&> small {\nmargin: -10px auto 4px 0;\n}\n& >"," {\n  min-width: 100%\n}\n\n& > input:focus {\n  outline: 2px solid #ccc;\n    outline-style: auto;\n}\n  "])),A.i),U=s.b.div(f||(f=Object(n.a)(["\n  margin-top:-15px;\n  & > label{\nfont-size:16px;\n  }\n\n  "]))),E=s.b.img(O||(O=Object(n.a)(["\nwidth:120px;\nmargin: 0 auto;\nmargin-bottom:20px;\nmargin-top:-20px;\n"]))),q=Object(s.b)(k.a)(w||(w=Object(n.a)(['\nmargin-left: 15px;\n&:before{\n      content: "<-- ";\n    margin-right: 3px;\n}\n'])));function T(e){var r=e.setIsChangingPassword,t=e.value;return Object(P.jsxs)(A.b,{children:[Object(P.jsx)("label",{htmlFor:"newPasswordCheckbox",children:"Cambiar contrase\xf1a:"}),Object(P.jsx)("input",{onChange:function(e){r(!t)},id:"newPasswordCheckbox",type:"checkbox",name:"newPasswordCheckbox"})]})}function F(e){var r=e.register,t=e.errors,n=e.placeholder;return Object(P.jsxs)(o.Fragment,{children:[t.userNumber&&Object(P.jsx)(y.a,{role:"alert",children:t.userNumber.message}),Object(P.jsx)(y.b,{placeholder:n,name:"userNumber",type:"text",ref:r({required:"*El campo es requrido",minLength:{value:9,message:"*Tel\xe9fono Invalido"},maxLength:{value:10,message:"*Tel\xe9fono Invalido"},pattern:{value:/[0-9]/,message:"*Solo se aceptan n\xfameros"}}),style:{borderColor:t.userNumber&&"#bf0000"}})]})}function B(e){var r=e.register;return Object(P.jsxs)(A.i,{name:"userCityAddress",ref:r({required:"*El campo es requrido"}),children:[Object(P.jsx)(A.h,{value:"C\xf3rdoba",children:"C\xf3rdoba"}),Object(P.jsx)(A.h,{value:"Buenos Aires",children:"Buenos Aires"})]})}function z(e){var r=e.errors,t=e.placeholder,n=e.register;return Object(P.jsxs)(o.Fragment,{children:[r.userStreetAddress&&Object(P.jsx)(y.a,{role:"alert",children:r.userStreetAddress.message}),Object(P.jsx)(y.b,{placeholder:t,name:"userStreetAddress",ref:n({required:"*El campo es requrido"}),style:{borderColor:r.userStreetAddress&&"#bf0000"}})]})}function J(e){var r=e.errors,t=e.placeholder,n=e.register;return Object(P.jsxs)(o.Fragment,{children:[r.userStreetNumber&&Object(P.jsx)(y.a,{role:"alert",children:r.userStreetNumber.message}),Object(P.jsx)(y.b,{placeholder:t,name:"userStreetNumber",ref:n({required:"*El campo es requrido",maxLength:{value:4,message:"*N\xfamero Invalido"},pattern:{value:/[0-9]/,message:"*Solo se aceptan n\xfameros"}}),style:{borderColor:r.userStreetNumber&&"#bf0000"}})]})}r.default=Object(a.a)((function(){var e=function(){var e=Object(p.a)(),r=e.token,t=e.setCurrentUser,n=e.setAllUsers,s=e.isAdmin,a=e.setIsSuccessfullySend,i=Object(o.useState)(""),m=Object(u.a)(i,2),j=m[0],g=m[1],v=Object(o.useState)(!1),x=Object(u.a)(v,2),f=x[0],O=x[1],w=Object(o.useState)(!1),S=Object(u.a)(w,2),y=S[0],C=S[1],A=Object(b.g)(),k=Object(d.a)({mode:"onBlur"});function N(){return(N=Object(c.a)(l.a.mark((function e(o,i){var c,u,d,b,p,m,j,v,x,f,O,w,S,y,k,N,P,I,L,U,E;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),P=null===i||void 0===i||null===(c=i.target)||void 0===c||null===(u=c.userName)||void 0===u||null===(d=u.value)||void 0===d?void 0:d.toLowerCase(),I=null===i||void 0===i||null===(b=i.target)||void 0===b||null===(p=b.userLastName)||void 0===p||null===(m=p.value)||void 0===m?void 0:m.toLowerCase(),L=null===(j=i.target.userCityAddress)||void 0===j||null===(v=j.value)||void 0===v?void 0:v.toLowerCase(),U=null===(x=i.target.userStreetAddress)||void 0===x||null===(f=x.value)||void 0===f?void 0:f.toLowerCase(),E={name:P,lastName:I,password:(null===i||void 0===i||null===(O=i.target)||void 0===O||null===(w=O.userPassword)||void 0===w?void 0:w.value)||null,newPassword:(null===i||void 0===i||null===(S=i.target)||void 0===S||null===(y=S.userNewPassword)||void 0===y?void 0:y.value)||null,number:null===(k=i.target.userNumber)||void 0===k?void 0:k.value,city:L,street:U,streetNumber:null===(N=i.target.userStreetNumber)||void 0===N?void 0:N.value},e.next=5,h({setFormIsLoading:C,setIsSuccessfullySend:a,setServerError:g,info:E,isAdmin:s,setAllUsers:n,token:r,setCurrentUser:t,history:A});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{register:k.register,handleSubmit:k.handleSubmit,errors:k.formState.errors,onSubmit:function(e,r){return N.apply(this,arguments)},serverError:j,formIsLoading:y,isChangingPassword:f,setIsChangingPassword:O}}(),r=e.register,t=e.handleSubmit,n=e.errors,s=e.onSubmit,a=e.serverError,i=e.formIsLoading,m=e.isChangingPassword,j=e.setIsChangingPassword;return Object(P.jsxs)(I,{children:[Object(P.jsx)(q,{to:"/myAccount/myProfile",children:"Regresar"}),Object(P.jsxs)(L,{onSubmit:t(s),novalidate:!0,children:[Object(P.jsx)(E,{src:N,alt:"edit-profile"}),Object(P.jsx)(C.h,{errors:n,register:r}),Object(P.jsx)(C.g,{errors:n,register:r}),Object(P.jsx)(F,{errors:n,register:r,placeholder:"Tu tel\xe8fono..."}),Object(P.jsx)(B,{register:r}),Object(P.jsx)(z,{errors:n,register:r,placeholder:"Calle..."}),Object(P.jsx)(J,{errors:n,register:r,placeholder:"N\xfamero de puerta..."}),Object(P.jsx)(U,{children:Object(P.jsx)(T,{setIsChangingPassword:j,value:m})}),m?Object(P.jsxs)(o.Fragment,{children:[Object(P.jsx)(C.j,{errors:n,register:r,name:"userPassword",placeholder:"Tu contrase\xf1a..."}),Object(P.jsx)(C.i,{errors:n,register:r,name:"newPassword",placeholder:"Nueva contrase\xf1a..."})]}):null,i?Object(P.jsx)(S.a,{small:!0}):Object(P.jsx)(C.a,{children:a}),Object(P.jsx)(A.e,{small:!0})]})]})}))},88:function(e,r,t){"use strict";var n=t(5),s=t.n(n),a=t(9);function o(){return(o=Object(a.a)(s.a.mark((function e(r){var t,n,a,o,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.token,n=r.setAllUsers,(a=new Headers).append("Accept","application/json"),a.append("Authorization","Bearer ".concat(t)),o={method:"GET",headers:a},e.prev=5,e.next=8,fetch("/api/users",o);case 8:return i=e.sent,e.next=11,i.json();case 11:l=e.sent,200===i.status&&n(l),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}r.a=function(e){return o.apply(this,arguments)}}}]);
//# sourceMappingURL=17.29ff6c09.chunk.js.map