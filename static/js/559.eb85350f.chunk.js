"use strict";(self.webpackChunkyourpet_frontend=self.webpackChunkyourpet_frontend||[]).push([[559],{7660:function(e,n,t){t.d(n,{$J:function(){return s},on:function(){return u},p2:function(){return c},yg:function(){return d}});var r=t(5861),i=t(4687),a=t.n(i),o=t(1243),s=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/friends");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/pets");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post("/pets",n,{headers:{"Content-Type":"multipart/form-data"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.delete("/pets/".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4814:function(e,n,t){t.d(n,{$:function(){return c}});var r,i=t(1413),a=t(168),o=t(6444).ZP.section(r||(r=(0,a.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(e){return e.padTopSm||"40px"}),(function(e){return e.padBottomSM||"100px"}),(function(e){return e.theme.media.mdToLg}),(function(e){return e.padTopMd||"80px"}),(function(e){return e.padBottomMd||"192px"}),(function(e){return e.theme.media.lg}),(function(e){return e.padTopLg||"80px"}),(function(e){return e.padBottomLg||"103px"})),s=t(184),c=function(e){return(0,s.jsx)(o,(0,i.Z)({},e))}},4136:function(e,n,t){t.d(n,{FS:function(){return i},fd:function(){return a},jE:function(){return o}});var r=t(5282),i=(t(7427),r.object().shape({email:r.string().email("Enter a Valid Email").required("Email is Required"),password:r.string().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")}),r.object().shape({email:r.string().email("Enter a Valid Email").required("Email is Required"),password:r.string().required("Enter Your Password").min(6,"Password should be minimum 6 character").max(16,"Too long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter"),confirm:r.string().oneOf([r.ref("password")],"Password does not matched").required("Confirm Password is Required")})),a=r.object().shape({title:r.string().when("category",{is:function(e){return"my pet"!==e},then:r.string().min(2,"Minimum 2 characters").max(50,"Maximum 50 characters").required("Enter a title"),otherwise:r.string()}),date:r.string().required("Choose a date of birth"),breed:r.string("Must be a string").min(2,"Minimum 2 characters").max(16,"Maximum 16 characters").required("Enter a pet`s breed "),name:r.string().min(2,"Minimum 2 characters").max(16,"Maximum 16 characters").required("Enter a pet`s name"),location:r.string().when("category",{is:function(e){return"my pet"!==e},then:r.string().matches(/^[A-Z][A-Za-z ]+$/,"Starts with capitalize character").required("Enter your location"),otherwise:r.string()}),price:r.number().when("category",{is:function(e){return"sell"===e},then:r.number().moreThan(0,"Price must be greater than 0").required("Enter a price"),otherwise:r.number()}),comments:r.string().min(8,"Minimum 8 characters").max(350,"Maximum 350 characters"),sex:r.string().when("category",{is:function(e){return"sell"===e||"lost-found"===e||"for-free"===e},then:r.string().oneOf(["female","male"]).required("Choose a pet`s sex"),otherwise:r.string()}),category:r.string().oneOf(["my pet","sell","lost-found","for-free"]).required(),file:r.mixed().required("Upload pet`s photo").test("fileType","Only image files are allowed",(function(e){return!e||["image/jpg","image/jpeg","image/png"].includes(e.type)})).test("fileSize","File size is too large",(function(e){return(null===e||void 0===e?void 0:e.size)<=3145728}))}),o=r.object().shape({name:r.string().min(2,"min 2 characters").max(20,"max 20 characters").required("Set your name"),email:r.string().email("Enter a valid email").required("Set your email"),birthday:r.string().required("Choose your birthday"),city:r.string().matches(/^[A-Z][a-zA-Z]*$/,"Starts with capitalize character"),phone:r.string().matches(/^\+\d{12}$/,"UA format number"),file:r.mixed().test("fileType","Only image files are allowed",(function(e){return!e||["image/jpg","image/jpeg","image/png"].includes(e.type)}))})},1559:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ge}});var r,i,a,o,s,c,d,u,l,p,m,f,h,g,x,y,b,Z,j,v,w,P,k,z,T,S,q,C,M,E,N,W,A,I=t(5861),O=t(9439),L=t(4687),B=t.n(L),$=t(2791),F=t(7689),J=t(168),V=t(6444),R=t(5705),U=V.ZP.label(r||(r=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n  padding: ",";\n\n  font-weight: 500;\n  font-size: ",";\n  line-height: 1.35;\n  letter-spacing: 0.04em;\n\n  color: ",";\n  background: ",";\n  border-radius: ",";\n\n  cursor: pointer;\n"])),(function(e){if("category"===e.name)return"8px 16px"}),(function(e){return"category"===e.name?"14px":"16px"}),(function(e){return"category"===e.name?e.selected?e.theme.colors.whity:e.theme.colors.blue:e.selected?e.theme.colors.green:e.theme.colors.grey}),(function(e){if("category"===e.name)return e.selected?e.theme.colors.blue:e.theme.colors.blueLight}),(function(e){if("category"===e.name)return"40px"})),D=(0,V.ZP)(R.gN)(i||(i=(0,J.Z)(["\n  display: none;\n"]))),Y=t(184),_=function(e){var n=e.value,t=e.selected,r=e.name,i=e.children;return(0,Y.jsxs)(U,{selected:t,name:r,children:[i,n[0],(0,Y.jsx)(D,{type:"radio",name:r,value:n[1]})]})},G=V.ZP.label(a||(a=(0,J.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  font-weight: ",";\n\n  font-size: 14px;\n  line-height: 1.36;\n\n  @media screen and (",") {\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"])),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.media.md})),H=(0,V.ZP)(R.gN)(o||(o=(0,J.Z)(["\n  padding: 8px 16px;\n  width: 264px;\n  height: 40px;\n  margin-top: 4px;\n\n  font-size: 14px;\n  line-height: 1.5;\n  border-radius: 40px;\n  outline: transparent;\n\n  border: 1px solid;\n  border-color: ",";\n\n  @media screen and (",") {\n    width: 395px;\n    height: 48px;\n    padding: 12px 16px;\n    margin-top: 8px;\n    font-size: 16px;\n  }\n\n  &::placeholder {\n    font-weight: ",";\n    font-size: 14px;\n    line-height: 1.5;\n    color: ",";\n  }\n"])),(function(e){return e["data-invalid"]?e.theme.colors.red:e.theme.colors.blue}),(function(e){return e.theme.media.md}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.colors.grey})),K=V.ZP.span(s||(s=(0,J.Z)(["\n  position: absolute;\n  bottom: -20px;\n  padding-left: 16px;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.35;\n  color: ",";\n"])),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.colors.red})),Q=function(e){var n=e.type,t=e.name,r=e.label,i=e.placeholder,a=e.errors,o=e.touched,s=e.emulTouch,c=a[t]&&o[t]||a[t]&&s.includes(t);return(0,Y.jsxs)(G,{children:[r,(0,Y.jsx)(H,{type:n,name:t,placeholder:i,"data-invalid":c}),c&&(0,Y.jsx)(K,{children:a[t]})]})},X=V.ZP.textarea(c||(c=(0,J.Z)(["\n  width: 264px;\n  height: 92px;\n  padding: 8px 16px;\n  margin-top: 4px;\n\n  font-size: 14px;\n  line-height: 1.5;\n\n  outline: transparent;\n  border: 1px solid;\n  border-radius: 20px;\n  resize: none;\n\n  border-color: ",";\n\n  @media screen and (",") {\n    width: 393px;\n    height: ",";\n    padding: 12px 16px;\n    margin-top: 8px;\n    font-size: 16px;\n  }\n\n  &::placeholder {\n    font-weight: ",";\n    font-size: 14px;\n    line-height: 1.5;\n    color: ",";\n  }\n"])),(function(e){return e["data-invalid"]?e.theme.colors.red:e.theme.colors.blue}),(function(e){return e.theme.media.md}),(function(e){return"your pet"!==e["data-category"]&&"sell"!==e["data-category"]?"182px":"79px"}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.colors.grey})),ee=V.ZP.label(d||(d=(0,J.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 1.35;\n\n  @media screen and (",") {\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"])),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.media.md})),ne=V.ZP.span(u||(u=(0,J.Z)(["\n  position: absolute;\n  bottom: -20px;\n  padding-left: 16px;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.35;\n  color: ",";\n"])),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.colors.red})),te=function(e){var n=e.onChange,t=e.onBlur,r=e.value,i=e.errors,a=e.touched,o=e.category,s=e.emulTouch,c=i.comments&&a.comments||i.comments&&s.includes("comments");return(0,Y.jsxs)(ee,{children:["Comments",(0,Y.jsx)(X,{name:"comments",onChange:n,onBlur:t,value:r,placeholder:"Type your comments here...","data-invalid":c,"data-category":o}),c&&(0,Y.jsx)(ne,{children:i.comments})]})},re=t(3439),ie=V.ZP.svg(l||(l=(0,J.Z)(["\n  fill: ",";\n  stroke: ",";\n"])),(function(e){return e.theme.colors.blue}),(function(e){return e.theme.colors.blue})),ae=V.ZP.svg(p||(p=(0,J.Z)(["\n  fill: ",";\n  stroke: ",";\n"])),(function(e){return e.theme.colors.clearWhite}),(function(e){return""===e.sex?0===e.index?e.theme.colors.red:e.theme.colors.blue:0===e.index?e.selected?e.theme.colors.red:e.theme.colors.grey:1===e.index?e.selected?e.theme.colors.blue:e.theme.colors.grey:void 0})),oe=V.ZP.div(m||(m=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),se=V.ZP.div(f||(f=(0,J.Z)(["\n  display: inline-block;\n  padding: 20px 8px 16px;\n  font-family: ",";\n  font-weight: ",";\n  background: ",";\n  box-shadow: ",";\n  border-radius: 40px;\n  font-style: normal;\n\n  @media screen and (",") {\n    padding: 20px 32px;\n  }\n"])),(function(e){return e.theme.fonts.main}),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.colors.clearWhite}),(function(e){return e.theme.shadows.mainShadow}),(function(e){return e.theme.media.md})),ce=V.ZP.div(h||(h=(0,J.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 23px;\n"]))),de=V.ZP.p(g||(g=(0,J.Z)(["\n  font-size: 14px;\n  line-height: 1.35;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 20px;\n  }\n"])),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.media.md})),ue=V.ZP.div(x||(x=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 12px;\n  margin-top: 8px;\n  margin-bottom: 67px;\n\n  @media screen and (",") {\n    margin-top: 24px;\n  }\n"])),(function(e){return e.theme.media.md})),le=V.ZP.div(y||(y=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 12px;\n"]))),pe=V.ZP.div(b||(b=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 24px;\n"]))),me=V.ZP.div(Z||(Z=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 20px;\n\n  @media screen and (",") {\n    margin-right: 63px;\n    gap: ",";\n\n    flex-direction: ",";\n  }\n\n  @media screen and (",") {\n    margin-right: 96px;\n  }\n"])),(function(e){return e.theme.media.md}),(function(e){return"your pet"!==e["data-category"]?"40px":"20px"}),(function(e){return"your pet"!==e["data-category"]?"column":"row"}),(function(e){return e.theme.media.lg})),fe=V.ZP.div(j||(j=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  align-self: flex-start;\n  gap: 16px;\n\n  @media screen and (",") {\n    gap: ",";\n    flex-direction: ",";\n  }\n"])),(function(e){return e.theme.media.md}),(function(e){if("your pet"!==e["data-category"])return"0"}),(function(e){return"your pet"!==e["data-category"]?"row":"column"})),he=V.ZP.div(v||(v=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  margin-top: 24px;\n\n  @media screen and (",") {\n    flex-direction: row-reverse;\n    gap: 32px;\n    margin-top: 36px;\n  }\n"])),(function(e){return e.theme.media.md})),ge=(0,V.ZP)(R.l0)(w||(w=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),xe=V.ZP.span(P||(P=(0,J.Z)(["\n  position: absolute;\n  display: inline-block;\n  width: 180px;\n  bottom: -18px;\n  text-align: center;\n\n  font-size: 12px;\n\n  line-height: 1.35;\n  color: ",";\n"])),(function(e){return e.theme.colors.red})),ye=function(e){var n=e.iconName,t=e.index,r=e.selected,i=e.sex;return(0,Y.jsx)(ae,{width:20,height:20,index:t,selected:r,sex:i,children:(0,Y.jsx)("use",{href:re.Z+"".concat(n)})})},be=function(e){var n=e.iconName;return(0,Y.jsx)(ie,{width:30,height:30,children:(0,Y.jsx)("use",{href:re.Z+"".concat(n)})})},Ze=V.ZP.label(k||(k=(0,J.Z)(["\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  align-self: flex-start;\n\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 1.35;\n  gap: 27px;\n  cursor: pointer;\n\n  @media screen and (",") {\n    font-size: 20px;\n    flex-direction: ",";\n    gap: ",";\n  }\n"])),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.media.md}),(function(e){return"your pet"!==e["data-category"]?"column":"row"}),(function(e){return"your pet"!==e["data-category"]?"12px":"27px"})),je=V.ZP.input(z||(z=(0,J.Z)(["\n  display: none;\n"]))),ve=V.ZP.img(T||(T=(0,J.Z)(["\n  object-fit: cover;\n  object-position: top center;\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 20px;\n\n  @media screen and (",") {\n    border-radius: 40px;\n  }\n"])),(function(e){return e.theme.media.md})),we=V.ZP.div(S||(S=(0,J.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),Pe=V.ZP.span(q||(q=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 112px;\n  height: 112px;\n  background: ",";\n  border-radius: 20px;\n\n  @media screen and (",") {\n    width: 182px;\n    height: 182px;\n    border-radius: 40px;\n  }\n"])),(function(e){return e.theme.colors.blueLight}),(function(e){return e.theme.media.md})),ke=V.ZP.span(C||(C=(0,J.Z)(["\n  position: absolute;\n  display: inline-block;\n  width: 180px;\n  bottom: -25px;\n  text-align: center;\n\n  font-size: 12px;\n\n  line-height: 1.35;\n  color: ",";\n"])),(function(e){return e.theme.colors.red})),ze=function(e){var n=e.errors,t=e.touched,r=e.category,i=(0,$.useState)(null),a=(0,O.Z)(i,2),o=a[0],s=a[1],c=(0,R.u6)().setFieldValue,d=n.file&&t.file;return(0,Y.jsxs)(Ze,{"data-category":r,children:["Add photo",(0,Y.jsx)(je,{type:"file",name:"file",accept:"image/*",id:"file",onChange:function(e){var n=e.currentTarget.files[0];c("file",n);var t=n?URL.createObjectURL(n):null;s(t)}}),(0,Y.jsxs)(we,{children:[(0,Y.jsxs)(Pe,{children:[o&&(0,Y.jsx)(ve,{src:o}),!o&&(0,Y.jsx)(be,{iconName:"#icon-plus"})]}),d&&(0,Y.jsx)(ke,{children:n.file})]})]})},Te=t(2642),Se=V.ZP.h2(M||(M=(0,J.Z)(["\n  font-weight: ",";\n  font-size: 20px;\n  line-height: 1.35;\n  color: ",";\n  padding-left: 16px;\n  margin-bottom: 24px;\n\n  @media screen and (",") {\n    font-size: 28px;\n\n    text-align: ",";\n  }\n"])),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.colors.dark}),(function(e){return e.theme.media.md}),(function(e){return"your pet"!==e["data-category"]&&1!==e["data-stage"]?"center":"left"})),qe=function(e){var n=e.picked,t=e.stage,r="Add pet";if(1!==t)switch(n){case"sell":r="Add pet for sale";break;case"lost/found":r="Add lost pet";break;default:r="Add my pet"}return(0,Y.jsx)(Se,{"data-category":n,"data-stage":t,children:r})},Ce=V.ZP.span(E||(E=(0,J.Z)(["\n  font-size: 10px;\n  line-height: 14px;\n  color: ",";\n\n  @media screen and (",") {\n    font-size: 16px;\n    line-height: 26px;\n  }\n"])),(function(e){return e.stage<e.datastage?e.theme.colors.grey:e.stage===e.datastage?e.theme.colors.blue:e.theme.colors.green}),(function(e){return e.theme.media.md})),Me=V.ZP.span(N||(N=(0,J.Z)(["\n  width: 80px;\n  height: 8px;\n  background: ",";\n  border-radius: 8px;\n\n  @media screen and (",") {\n    width: 120px;\n  }\n"])),(function(e){return e.stage<e.datastage?e.theme.colors.blueLight:e.stage===e.datastage?e.theme.colors.blue:e.theme.colors.green}),(function(e){return e.theme.media.md})),Ee=V.ZP.div(W||(W=(0,J.Z)(["\n  display: flex;\n  font-weight: ",";\n  gap: 12px;\n  margin-bottom: 16px;\n\n  @media screen and (",") {\n    gap: 16px;\n\n    justify-content: ",";\n  }\n"])),(function(e){return e.theme.fontWeights.medium}),(function(e){return e.theme.media.md}),(function(e){return"your pet"!==e["data-category"]?"center":"left"})),Ne=V.ZP.div(A||(A=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),We=function(e){var n=e.stage,t=e.category;return(0,Y.jsxs)(Ee,{"data-category":t,children:[(0,Y.jsxs)(Ne,{children:[(0,Y.jsx)(Ce,{stage:n,datastage:1,children:"Choose option"}),(0,Y.jsx)(Me,{stage:n,datastage:1})]}),(0,Y.jsxs)(Ne,{children:[(0,Y.jsx)(Ce,{stage:n,datastage:2,children:"Personal details"}),(0,Y.jsx)(Me,{stage:n,datastage:2})]}),(0,Y.jsxs)(Ne,{children:[(0,Y.jsx)(Ce,{stage:n,datastage:3,children:"More info"}),(0,Y.jsx)(Me,{stage:n,datastage:3})]})]})},Ae=t(4136),Ie=t(7660),Oe=t(7241),Le=t(9753),Be=[["your pet","my pet"],["sell","sell"],["lost/found","lost-found"],["in good hands","for-free"]],$e=[["Female","female"],["Male","male"]],Fe=localStorage.getItem("formValues"),Je=Fe?JSON.parse(Fe):{title:"",date:"",breed:"",name:"",location:"",price:"",comments:"",sex:"",category:"my pet",file:""},Ve=localStorage.getItem("stage"),Re=Ve?Number(JSON.parse(Ve)):1,Ue=function(){var e=(0,$.useState)((function(){return Re})),n=(0,O.Z)(e,2),t=n[0],r=n[1],i=(0,$.useState)([]),a=(0,O.Z)(i,2),o=a[0],s=a[1],c=(0,F.s0)(),d=function(){var e=(0,I.Z)(B().mark((function e(n,i,a){var o,c;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(n),c=n.category,1===t&&(o=!0),2===t&&"your pet"===c&&(s(["breed","name","date"]),o=!(i.breed||i.name||i.date)),2===t&&"your pet"!==c&&(s(["breed","name","date","title"]),o=!(i.breed||i.name||i.date||i.title)),o){e.next=9;break}return e.abrupt("return");case 9:r((function(e){return e+1})),localStorage.setItem("formValues",JSON.stringify(n)),localStorage.setItem("stage",JSON.stringify(t+1));case 12:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),u=function(){r((function(e){return e-1})),localStorage.setItem("stage",JSON.stringify(t-1)),s([])},l=function(){c(-1)},p=function(){var e=(0,I.Z)(B().mark((function e(n,t){var i,a;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.resetForm,a=new FormData,e.t0=n.category,e.next="my pet"===e.t0?5:19;break;case 5:return a.append("name",n.name),a.append("date",n.date),a.append("breed",n.breed),a.append("file",n.file,"Pet`s photo"),n.comments&&a.append("comments",n.comments),e.prev=10,e.next=13,(0,Ie.yg)(a);case 13:c("/user"),e.next=18;break;case 16:e.prev=16,e.t1=e.catch(10);case 18:return e.abrupt("break",39);case 19:return a.append("category",n.category),a.append("title",(0,Le.$)(n.title,20)),a.append("name",n.name),a.append("breed",n.breed),a.append("date",n.date),a.append("location",(0,Le.$)(n.location,4)),a.append("file",n.file,"Pet`s photo"),a.append("sex",n.sex),n.comments&&a.append("comments",n.comments),"sell"===n.category&&a.append("price",n.price),e.prev=29,console.log("SUBMIT NOTICE"),e.next=33,(0,Oe.iI)(a);case 33:c("/notices"),e.next=39;break;case 36:e.prev=36,e.t2=e.catch(29),console.log(e.t2);case 39:localStorage.removeItem("formValues"),localStorage.removeItem("stage"),i({}),r(1),s([]);case 44:case"end":return e.stop()}}),e,null,[[10,16],[29,36]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,Y.jsx)(oe,{children:(0,Y.jsx)(R.J9,{initialValues:Je,onSubmit:p,validationSchema:Ae.fd,children:function(e){e.props;var n=e.values,r=e.errors,i=e.touched,a=e.validateForm,s=e.handleChange,c=e.handleBlur,p=n.category,m=n.sex,f=r.sex&&i.sex;return(0,Y.jsxs)(se,{"data-category":p,children:[(0,Y.jsx)(qe,{picked:p,stage:t}),(0,Y.jsx)(We,{stage:t,category:p}),(0,Y.jsxs)(ge,{children:[1===t&&(0,Y.jsx)(ue,{role:"group",children:Be.map((function(e){var n=e[1]===p;return(0,Y.jsx)(_,{value:e,name:"category",selected:n},e[0])}))}),(0,Y.jsxs)(fe,{"data-category":p,children:[3===t&&(0,Y.jsxs)(me,{children:["my pet"!==p&&(0,Y.jsxs)(le,{role:"group","aria-labelledby":"sex",children:[(0,Y.jsx)(de,{id:"sex",children:"The sex"}),(0,Y.jsxs)(ce,{children:[$e.map((function(e,n){var t=0===n?"#icon-female":"#icon-male",a=e[1]===m;return(0,Y.jsx)(_,{value:e,name:"sex",selected:a,errors:r,touched:i,children:(0,Y.jsx)(ye,{iconName:t,index:n,selected:a,sex:m})},e[0])})),f&&(0,Y.jsx)(xe,{children:r.sex})]})]}),(0,Y.jsx)(ze,{errors:r,category:p,touched:i})]}),(0,Y.jsxs)(pe,{children:[2===t&&"my pet"!==p&&(0,Y.jsx)(Q,{type:"text",name:"title",label:"Title of add",placeholder:"Title of add",errors:r,touched:i,emulTouch:o}),2===t&&(0,Y.jsx)(Q,{type:"text",name:"name",label:"Pet's name",placeholder:"Type your pet's name ",errors:r,touched:i,emulTouch:o}),2===t&&(0,Y.jsx)(Q,{type:"date",name:"date",label:"Date of birth",placeholder:"Choose a date of birth",errors:r,touched:i,emulTouch:o}),2===t&&(0,Y.jsx)(Q,{type:"text",name:"breed",label:"Breed",placeholder:"Type breed",errors:r,touched:i,emulTouch:o}),3===t&&"my pet"!==p&&(0,Y.jsx)(Q,{type:"text",name:"location",label:"Location",placeholder:"Type your location",errors:r,touched:i,emulTouch:o}),3===t&&"sell"===p&&(0,Y.jsx)(Q,{type:"number",name:"price",label:"Price",placeholder:"Type price",errors:r,touched:i,emulTouch:o}),3===t&&(0,Y.jsx)(te,{errors:r,touched:i,category:p,emulTouch:o,onChange:s,onBlur:c,value:n.comments})]})]}),3!==t&&(0,Y.jsxs)(he,{children:[(0,Y.jsx)(Te.AC,{onClick:function(){return d(n,r,a)}}),1===t&&(0,Y.jsx)(Te.bg,{onClick:l}),2===t&&(0,Y.jsx)(Te.dI,{onClick:u})]}),3===t&&(0,Y.jsxs)(he,{children:[(0,Y.jsx)(Te.h7,{}),(0,Y.jsx)(Te.dI,{onClick:u})]})]})]})}})})},De=t(4814),Ye=t(5834),_e=t(5558),Ge=function(){return(0,Y.jsx)(_e.Py,{children:(0,Y.jsx)(De.$,{padTopSm:"68px",padTopMd:"128px",padTopLg:"108px",padBottomLg:"81px",children:(0,Y.jsx)(Ye.W,{children:(0,Y.jsx)(Ue,{})})})})}},5558:function(e,n,t){t.d(n,{M7:function(){return g},Py:function(){return h},im:function(){return x}});var r,i,a,o=t(168),s=t(6444),c=t(3622),d=t(1052),u=t(9054),l=t(9588),p=t(8058),m=t(8569),f=t(6168),h=s.ZP.div(r||(r=(0,o.Z)(["\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-repeat: no-repeat;\n  background-position: center -70px;\n  background-size: 100%;\n\n  background-image: url(",");\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media screen and (",") {\n    background-size: 100%;\n    background-position: center -100px;\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media screen and (",") {\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),d,u,c.r.media.md,l,p,c.r.media.lg,m,f),g=s.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n\n  @media screen and (",") {\n  }\n\n  @media screen and (",") {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 32px;\n  }\n"])),c.r.media.md,c.r.media.lg),x=s.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n"])))},8569:function(e,n,t){e.exports=t.p+"static/media/bg-lg@1x.c858cf00f281710d12a7.png"},6168:function(e,n,t){e.exports=t.p+"static/media/bg-lg@2x.3bb0c95d770a3c0d43e0.png"},9588:function(e,n,t){e.exports=t.p+"static/media/bg-md@1x.4b7823b740bd183f37c8.png"},8058:function(e,n,t){e.exports=t.p+"static/media/bg-md@2x.4b63024f94f69f2fa858.png"},1052:function(e,n,t){e.exports=t.p+"static/media/bg-sm@1x.e0ccc0295a60f99a5241.png"},9054:function(e,n,t){e.exports=t.p+"static/media/bg-sm@2x.f0d5ccaaa60dcd004b66.png"}}]);
//# sourceMappingURL=559.eb85350f.chunk.js.map