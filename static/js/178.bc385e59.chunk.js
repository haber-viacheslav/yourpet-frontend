"use strict";(self.webpackChunkyourpet_frontend=self.webpackChunkyourpet_frontend||[]).push([[178],{7660:function(n,e,t){t.d(e,{$J:function(){return s},on:function(){return d},p2:function(){return c},yg:function(){return u}});var r=t(5861),i=t(4687),a=t.n(i),o=t(1243),s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/friends");case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/pets");case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.post("/pets",e,{headers:{"Content-Type":"multipart/form-data"}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.delete("/pets/".concat(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4814:function(n,e,t){t.d(e,{$:function(){return c}});var r,i=t(1413),a=t(168),o=t(6444).ZP.section(r||(r=(0,a.Z)(["\n  height: calc(100vh - 88px);\n  padding-top: ",";\n  padding-bottom: ",";\n\n  @media screen and (",") {\n    height: calc(100vh - 96px);\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n\n  @media screen and (",") {\n    height: calc(100vh - 88px);\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"40px"}),(function(n){return n.padBottomSM||"100px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"80px"}),(function(n){return n.padBottomMd||"192px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"80px"}),(function(n){return n.padBottomLg||"103px"})),s=t(184),c=function(n){return(0,s.jsx)(o,(0,i.Z)({},n))}},4136:function(n,e,t){t.d(e,{FS:function(){return i},JI:function(){return s},fd:function(){return a},jE:function(){return o}});var r=t(5282),i=(t(7427),r.object().shape({email:r.string().email("Enter a Valid Email").required("Email is Required"),password:r.string().required("Enter Your Password").min(8,"Password Should be minimum 8 character").max(50,"Too long")}),r.object().shape({email:r.string().email("Enter a Valid Email").required("Email is Required"),password:r.string().required("Enter Your Password").min(6,"Password should be minimum 6 character").max(16,"Too long").matches(/[0-9]/,"Password requires a number").matches(/[a-z]/,"Password requires a lowercase letter").matches(/[A-Z]/,"Password requires an uppercase letter"),confirm:r.string().oneOf([r.ref("password")],"Password does not matched").required("Confirm Password is Required")})),a=r.object().shape({title:r.string().when("category",{is:function(n){return"my pet"!==n},then:r.string().min(2,"Minimum 2 characters").max(50,"Maximum 50 characters").required("Enter a title"),otherwise:r.string()}),date:r.string().required("Choose a date of birth"),breed:r.string("Must be a string").min(2,"Minimum 2 characters").max(16,"Maximum 16 characters").required("Enter a pet`s breed "),name:r.string().min(2,"Minimum 2 characters").max(16,"Maximum 16 characters").required("Enter a pet`s name"),location:r.string().when("category",{is:function(n){return"my pet"!==n},then:r.string().matches(/^[A-Z][A-Za-z ]+$/,"Starts with capitalize character").required("Enter your location"),otherwise:r.string()}),price:r.number().when("category",{is:function(n){return"sell"===n},then:r.number().moreThan(0,"Price must be greater than 0").required("Enter a price"),otherwise:r.number()}),comments:r.string().min(8,"Minimum 8 characters").max(350,"Maximum 350 characters"),sex:r.string().when("category",{is:function(n){return"sell"===n||"lost-found"===n||"for-free"===n},then:r.string().oneOf(["female","male"]).required("Choose a pet`s sex"),otherwise:r.string()}),category:r.string().oneOf(["my pet","sell","lost-found","for-free"]).required(),file:r.mixed().required("Upload pet`s photo").test("fileType","Only image files are allowed",(function(n){return!n||["image/jpg","image/jpeg","image/png"].includes(n.type)})).test("fileSize","File size is too large",(function(n){return(null===n||void 0===n?void 0:n.size)<=3145728}))}),o=r.object().shape({name:r.string().min(2,"min 2 characters").max(20,"max 20 characters").required("Set your name"),email:r.string().email("Enter a valid email").required("Set your email"),birthday:r.string().required("Choose your birthday"),city:r.string().matches(/^[A-Z][a-zA-Z]*$/,"Starts with capitalize character"),phone:r.string().matches(/^\+\d{12}$/,"UA format number")}),s=r.object().shape({file:r.mixed().test("fileType","Only image files are allowed",(function(n){return!n||["image/jpg","image/jpeg","image/png"].includes(n.type)}))})},5558:function(n,e,t){t.d(e,{M7:function(){return x},Py:function(){return f},im:function(){return g}});var r,i,a,o=t(168),s=t(6444),c=t(3622),u=t(1052),d=t(9054),l=t(9588),p=t(8058),m=t(8569),h=t(6168),f=s.ZP.div(r||(r=(0,o.Z)(["\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n\n  background-repeat: no-repeat;\n  background-position: center -70px;\n  background-size: 100%;\n\n  background-image: url(",");\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(",");\n  }\n\n  @media screen and (",") {\n    background-size: 100%;\n    background-position: center -100px;\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n\n  @media screen and (",") {\n    background-image: url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(",");\n    }\n  }\n"])),u,d,c.r.media.md,l,p,c.r.media.lg,m,h),x=s.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n\n  @media screen and (",") {\n  }\n\n  @media screen and (",") {\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 32px;\n  }\n"])),c.r.media.md,c.r.media.lg),g=s.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n"])))},9178:function(n,e,t){t.r(e),t.d(e,{default:function(){return Jn}});var r,i,a,o,s,c,u,d,l,p,m,h,f,x,g,b,y,v,w,Z,j,k,P,S,E,q,z,C,M=t(5861),T=t(4942),R=t(1413),F=t(9439),A=t(4687),L=t.n(A),U=t(2791),O=t(9434),B=t(8627),I=t(6139),W=t(7601),$=t(5705),V=t(2750),J=t(168),Y=t(6444),_=Y.ZP.label(r||(r=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19.2px;\n  letter-spacing: 4%;\n\n  @media screen and (",") {\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 25px;\n  }\n"])),(function(n){return n.theme.media.md})),D=(0,Y.ZP)($.gN)(i||(i=(0,J.Z)(["\n  margin-top: 0;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16.39px;\n  color: ",";\n\n  border: none;\n  outline: none;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 16.39px;\n    color: ",";\n  }\n\n  @media screen and (",") {\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 22px;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.media.md})),K=Y.ZP.div(a||(a=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 3px 6px;\n  width: 190px;\n  height: 28px;\n  border: 1px solid #54adff;\n  border-radius: 20px;\n\n  @media screen and (",") {\n    width: 255px;\n  }\n"])),(function(n){return n.theme.media.md})),N=(Y.ZP.div(o||(o=(0,J.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: space-between;\n  align-self: flex-start;\n  gap: 12px;\n"]))),Y.ZP.span(s||(s=(0,J.Z)(["\n  position: absolute;\n  text-align: right;\n  right: 30px;\n  width: 250px;\n  top: -18px;\n  padding-left: 16px;\n  font-weight: ",";\n  font-size: 12px;\n  line-height: 1.35;\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.red}))),X=t(2642),G=t(184),H=function(n){var e=n.type,t=n.name,r=n.placeholder,i=n.isEditingBlocked,a=n.onEditClick,o=n.onFormSubmit,s=n.errors,c=n.touched,u=(0,U.useState)(!1),d=(0,F.Z)(u,2),l=d[0],p=d[1],m="".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)),h=s[t]&&c[t];return(0,G.jsxs)(_,{children:[m,":",(0,G.jsxs)(K,{children:[(0,G.jsx)(D,{type:e,name:t,placeholder:i[t]?"".concat(r):"",disabled:!i[t]}),l&&i[t]&&(0,G.jsx)(X.ye,{onClick:function(){p(!1),a("refresh"),o()},error:h}),!i[t]&&(0,G.jsx)(X.IA,{onClick:function(){p(!0),a(t)}}),h&&(0,G.jsx)(N,{children:s[t]})]})]})},Q=Y.ZP.svg(c||(c=(0,J.Z)(["\n  fill: ",";\n  stroke: ",";\n"])),(function(n){return n.fill||"none"}),(function(n){return n.stroke||"none"})),nn=t(3439),en=t(3622),tn=function(n){return(0,G.jsx)(Q,(0,R.Z)((0,R.Z)({width:100,height:95,stroke:en.r.colors.blue},n),{},{children:(0,G.jsx)("use",{href:nn.Z+"#icon-user-photo"})}))},rn=Y.ZP.div(u||(u=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n"]))),an=Y.ZP.label(d||(d=(0,J.Z)(["\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(22 / 12);\n  letter-spacing: 4%;\n  gap: 15px;\n  cursor: pointer;\n"]))),on=Y.ZP.input(l||(l=(0,J.Z)(["\n  display: none;\n"]))),sn=Y.ZP.img(p||(p=(0,J.Z)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 40px;\n  object-fit: cover;\n"]))),cn=Y.ZP.div(m||(m=(0,J.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),un=Y.ZP.span(h||(h=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 182px;\n  height: 182px;\n  background: ",";\n  border-radius: 40px;\n"])),(function(n){return n["data-color"]?n.theme.colors.transparent:n.theme.colors.blueLight})),dn=Y.ZP.span(f||(f=(0,J.Z)(["\n  position: absolute;\n  display: inline-block;\n  width: 180px;\n  bottom: -16px;\n  text-align: center;\n\n  font-size: 12px;\n\n  line-height: 1.35;\n  color: ",";\n"])),(function(n){return n.theme.colors.red})),ln=function(n){var e=n.errors,t=n.touched,r=n.onEditClick,i=n.onFormSubmit,a=n.isEditingBlocked,o=n.avatar,s=(0,U.useState)(!1),c=(0,F.Z)(s,2),u=c[0],d=c[1],l=(0,U.useState)(o||null),p=(0,F.Z)(l,2),m=p[0],h=p[1],f=(0,$.u6)().setFieldValue,x=e.file&&t.file;return(0,G.jsxs)(rn,{children:[(0,G.jsxs)(an,{children:[(0,G.jsx)(on,{type:"file",name:"file",accept:"image/*",id:"file",onChange:function(n){var e=n.currentTarget.files[0];f("file",e);var t=e?URL.createObjectURL(e):null;h(t)},disabled:!a.photo}),(0,G.jsxs)(cn,{children:[(0,G.jsxs)(un,{"data-color":m,children:[m&&(0,G.jsx)(sn,{src:m}),!m&&(0,G.jsx)(tn,{})]}),x&&(0,G.jsx)(dn,{children:e.file})]})]}),u&&a.photo&&(0,G.jsx)(X.V9,{onClick:function(){d(!1),r("refresh"),i()},error:x}),!a.photo&&(0,G.jsx)(X.$9,{onClick:function(){d(!0),r("photo")}})]})},pn=t(4136),mn=Y.ZP.div(x||(x=(0,J.Z)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n  padding: 20px 8px 68px 8px;\n  gap: 21px;\n\n  background: ",";\n  box-shadow: ",";\n  border-radius: 20px;\n\n  @media screen and (",") {\n    flex-direction: row-reverse;\n    gap: 71px;\n    padding: 20px 76px 28px 20px;\n    border-radius: 40px;\n  }\n\n  @media screen and (",") {\n    flex-direction: column;\n    gap: 25px;\n    padding: 20px 24px 63px 16px;\n    max-width: 395px;\n  }\n"])),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),hn=Y.ZP.div(g||(g=(0,J.Z)(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: space-between;\n  align-self: flex-start;\n  gap: 12px;\n"]))),fn=Y.ZP.h2(b||(b=(0,J.Z)(["\n  font-weight: ",";\n  font-size: 20px;\n  line-height: 1.37;\n  letter-spacing: 4%;\n  color: ",";\n\n  text-align: left;\n  margin-bottom: 18px;\n\n  @media screen and (",") {\n    margin-bottom: 24px;\n    font-style: 500;\n    font-size: 28px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.media.md})),xn=t(8255),gn=[{type:"text",name:"name",placeholder:"Enter your name"},{type:"text",name:"email",placeholder:"example@mail.com"},{type:"date",name:"birthday",placeholder:"01.01.2000"},{type:"tel",name:"phone",placeholder:"+380000000000"},{type:"text",name:"city",placeholder:"Kyiv"}],bn={name:!1,email:!1,birthday:!1,phone:!1,city:!1,photo:!1,refresh:!0},yn=function(){var n=(0,U.useState)(bn),e=(0,F.Z)(n,2),t=e[0],r=e[1],i=(0,U.useState)(!1),a=(0,F.Z)(i,2),o=a[0],s=a[1],c=(0,B.a)().user,u=(0,O.I0)();(0,U.useEffect)((function(){c.newUser&&s(!0)}),[c]),(0,U.useEffect)((function(){u((0,W.v7)())}),[u]);var d=function(n){var e=(0,R.Z)((0,R.Z)({},bn),{},(0,T.Z)({},n,!0));r(e)},l=function(){var n=(0,M.Z)(L().mark((function n(e){var t;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new FormData,e.file&&t.append("file",e.file,"User`s photo"),n.prev=2,n.next=5,(0,I.KE)(t);case 5:200===n.sent.response.code&&((0,xn.h)("success","Photo successfully updated"),u((0,W.v7)())),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),(0,xn.h)("error","Unsuccessful");case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,M.Z)(L().mark((function n(e){var t,r;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object.keys(e),r=new FormData,t.forEach((function(n){e[n]&&"file"!==n&&"email"!==n&&r.append(n,e[n]),e.email!==c.email&&r.append("email",e.email)})),n.prev=3,n.next=6,(0,I.KE)(r);case 6:200===n.sent.response.code&&((0,xn.h)("success","Profile successfully updated"),u((0,W.v7)())),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),console.log(n.t0),(0,xn.h)("error","Sorry, something wrong. Please try again");case 14:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}(),m=c.email.slice(0,c.email.lastIndexOf("@"));return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("div",{children:[(0,G.jsx)(fn,{children:"My information:"}),(0,G.jsxs)(mn,{children:[(0,G.jsx)($.J9,{initialValues:{file:""},onSubmit:l,validationSchema:pn.JI,children:function(n){var e=n.errors,r=n.touched,i=n.handleSubmit;return(0,G.jsx)(ln,{errors:e,touched:r,isEditingBlocked:t,avatar:c.avatarURL,onEditClick:d,onFormSubmit:i})}}),(0,G.jsx)($.J9,{initialValues:{name:c.name||m,email:c.email||"",birthday:c.birthday?c.birthday.slice(0,10):"1999-01-01",phone:c.phone||"",city:c.city||""},onSubmit:p,validationSchema:pn.jE,children:function(n){var e=n.errors,r=n.touched,i=n.handleSubmit;return(0,G.jsx)(hn,{children:gn.map((function(n){var a=n.type,o=n.name,s=n.placeholder;return(0,G.jsx)(H,{type:a,name:o,placeholder:s,isEditingBlocked:t,errors:e,touched:r,onEditClick:d,onFormSubmit:i},o)}))})}})]})]}),o&&(0,G.jsx)(V.h,{onClick:function(){s(!1)},variant:"congrats"})]})},vn=t(3433),wn=t(7689),Zn=Y.ZP.div(y||(y=(0,J.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 20px;\n  padding: 16px 20px 40px;\n\n  color: ",";\n  background: ",";\n  box-shadow: ",";\n\n  border-radius: 40px;\n\n  @media screen and (",") {\n    flex-direction: row;\n    align-items: flex-start;\n    min-height: 256px;\n    padding: 20px;\n  }\n\n  @media screen and (",") {\n    padding: 20px 28px 20px 20px;\n    gap: 32px;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),jn=Y.ZP.div(v||(v=(0,J.Z)(["\n  width: 240px;\n  height: 240px;\n\n  border-radius: 20px; \n\n  @media screen and (",") {\n    width: 128px;\n    height: 128px;\n  }\n\n  @media screen and (",") {\n    width: 161px;\n    height: 161px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),kn=Y.ZP.img(w||(w=(0,J.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top center;\n  border-radius: 20px;\n"]))),Pn=Y.ZP.div(Z||(Z=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  gap: 12px;\n  font-size: 14px;\n  line-height: 1.357;\n\n  @media screen and (",") {\n    line-height: 1.3;\n  }\n\n  @media screen and (",") {\n    font-size: 16px;\n    line-height: 1.375;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),Sn=Y.ZP.div(j||(j=(0,J.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 16px;\n  top: 272px;\n\n  cursor: pointer;\n  background-color: ",";\n\n  @media screen and (",") {\n    right: 20px;\n    top: 20px;\n  }\n\n  @media screen and (",") {\n    right: 23px;\n    top: 24px;\n  }\n"])),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),En=Y.ZP.div(k||(k=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n"]))),qn=Y.ZP.span(P||(P=(0,J.Z)(["\n  font-weight: ",";\n  font-size: 16px;\n  line-height: 22px;\n  color: ",";\n  letter-spacing: 0.04em;\n"])),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.colors.black})),zn=Y.ZP.span(S||(S=(0,J.Z)(["\n  font-weight: ",";\n  font-size: 14px;\n  line-height: 22px;\n  color: ",";\n  letter-spacing: 0.04em;\n"])),(function(n){return n.theme.fontWeights.regular}),(function(n){return n.theme.colors.black})),Cn=function(n){var e=n.id,t=n.url,r=n.name,i=n.date,a=n.breed,o=n.comments,s=n.delPet,c=(0,U.useState)(!1),u=(0,F.Z)(c,2),d=u[0],l=u[1],p=function(){var n=(0,M.Z)(L().mark((function n(){return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{s(e),l(!1)}catch(t){(0,xn.h)("error","Sorry, something wrong. Please try again")}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Zn,{children:[(0,G.jsx)("div",{children:(0,G.jsx)(jn,{children:(0,G.jsx)(kn,{src:t,alt:r,loading:"lazy"})})}),(0,G.jsxs)(Pn,{children:[(0,G.jsx)(En,{children:(0,G.jsxs)(qn,{children:["Name: ",(0,G.jsx)(zn,{children:r})]})}),(0,G.jsx)(En,{children:(0,G.jsxs)(qn,{children:["Date of birth: ",(0,G.jsx)(zn,{children:i})]})}),(0,G.jsx)(En,{children:(0,G.jsxs)(qn,{children:["Breed: ",(0,G.jsxs)(zn,{children:[" ",a]})]})}),(0,G.jsx)(En,{children:(0,G.jsxs)(qn,{children:["Comments: ",(0,G.jsx)(zn,{children:o})]})})]}),(0,G.jsx)(Sn,{children:(0,G.jsx)(X.t0,{onClick:function(){l(!0)}})})]}),d&&(0,G.jsx)(V.h,{onActivate:p,onClick:function(){l(!1)},variant:"deletePet",text:r})]})},Mn=Y.ZP.ul(E||(E=(0,J.Z)(["\n  list-style: none;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: space-between;\n  gap: 20px;\n"]))),Tn=t(2007),Rn=t.n(Tn),Fn=function(n){var e=n.data,t=n.delPet;return(0,G.jsx)(Mn,{children:e.map((function(n){var e=n._id,r=n.name,i=n.date,a=n.breed,o=n.comments,s=n.avatarURL,c=i?i.slice(0,10).split("-").reverse().join("-"):"";return(0,G.jsx)(Cn,{name:r,date:c,breed:a,comments:o,url:s,id:e,delPet:t},e)}))})};Cn.propTypes={data:Rn().shape({url:Rn().string.isRequired,name:Rn().string.isRequired,date:Rn().string.isRequired,breed:Rn().string.isRequired,comments:Rn().string,id:Rn().string.isRequired}),delPet:Rn().func.isRequired};var An=Y.ZP.div(q||(q=(0,J.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  gap: 24px;\n\n  @media screen and (",") {\n    gap: 20px;\n  }\n\n  @media screen and (",") {\n    gap: 24px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),Ln=Y.ZP.div(z||(z=(0,J.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  @media screen and (",") {\n  }\n"])),(function(n){return n.theme.media.md})),Un=Y.ZP.h2(C||(C=(0,J.Z)(["\n  font-weight: ",";\n  font-size: 20px;\n  line-height: 1.37;\n  letter-spacing: 4%;\n  color: ",";\n\n  @media screen and (",") {\n    font-style: 500;\n    font-size: 28px;\n  }\n"])),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.media.md})),On=t(7660),Bn=function(){var n=(0,U.useState)([]),e=(0,F.Z)(n,2),t=e[0],r=e[1],i=(0,wn.s0)(),a=(0,B.a)().isLoggedIn;(0,U.useEffect)((function(){(0,M.Z)(L().mark((function n(){var e;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,On.p2)();case 3:e=n.sent,r((0,vn.Z)(e.data.body.data)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),(0,xn.h)("error","Sorry, something wrong. Please try again");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[]);var o=function(){var n=(0,M.Z)(L().mark((function n(e){var i,a;return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i=t.findIndex((function(n){return n._id===e})),(a=(0,vn.Z)(t)).splice(i,1),r(a),n.next=7,(0,On.on)(e);case 7:200===n.sent.status&&(0,xn.h)("success","Your pet has been successfully removed"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),(0,xn.h)("error","The server could not process your request. Please try again.");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,G.jsxs)(An,{children:[(0,G.jsxs)(Ln,{children:[(0,G.jsx)(Un,{children:"My pets:"}),(0,G.jsx)(X.X1,{onClick:function(){a?i("/add-pet"):(0,xn.h)("warning","To add a pet, you must be a registered user")}})]}),(0,G.jsx)(Fn,{data:t,delPet:o})]})},In=function(){var n=(0,U.useState)(!1),e=(0,F.Z)(n,2),t=e[0],r=e[1],i=(0,O.I0)(),a=(0,wn.s0)();(0,U.useEffect)((function(){i((0,W.v7)())}),[i]);var o=function(){var n=(0,M.Z)(L().mark((function n(){return L().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:try{i((0,W.ni)()),r(!1),a("/"),(0,xn.h)("info","You have successfully logged out")}catch(e){(0,xn.h)("error","Sorry, something wrong. Please try again")}case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(X.d6,{onClick:function(){r(!0)}}),t&&(0,G.jsx)(V.h,{onActivate:o,onClick:function(){r(!1)},variant:"logOut"})]})},Wn=t(4814),$n=t(5834),Vn=t(5558),Jn=function(){return(0,G.jsx)(Wn.$,{padTopSm:"40px",padTopMd:"60px",padTopLg:"62px",children:(0,G.jsx)($n.W,{children:(0,G.jsxs)(Vn.M7,{children:[(0,G.jsxs)(Vn.im,{children:[(0,G.jsx)(yn,{}),(0,G.jsx)(In,{})]}),(0,G.jsx)(Bn,{})]})})})}},8569:function(n,e,t){n.exports=t.p+"static/media/bg-lg@1x.c858cf00f281710d12a7.png"},6168:function(n,e,t){n.exports=t.p+"static/media/bg-lg@2x.3bb0c95d770a3c0d43e0.png"},9588:function(n,e,t){n.exports=t.p+"static/media/bg-md@1x.4b7823b740bd183f37c8.png"},8058:function(n,e,t){n.exports=t.p+"static/media/bg-md@2x.4b63024f94f69f2fa858.png"},1052:function(n,e,t){n.exports=t.p+"static/media/bg-sm@1x.e0ccc0295a60f99a5241.png"},9054:function(n,e,t){n.exports=t.p+"static/media/bg-sm@2x.f0d5ccaaa60dcd004b66.png"}}]);
//# sourceMappingURL=178.bc385e59.chunk.js.map