"use strict";(self.webpackChunkyourpet_frontend=self.webpackChunkyourpet_frontend||[]).push([[998],{498:function(n,e,t){t.d(e,{CS:function(){return l},Dx:function(){return u},im:function(){return s}});var r,o,i,a=t(168),c=t(6444),s=c.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 16px 12px;\n"]))),u=c.ZP.h2(o||(o=(0,a.Z)(["\n  font-weight: ",";\n  font-size: 24px;\n  line-height: 1.375;\n  color: ",";\n  margin-bottom: 24px;\n\n  @media screen and (",") {\n    font-size: 48px;\n    margin-bottom: 40px;\n  }\n\n  @media screen and (",") {\n    margin-bottom: 60px;\n  }\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.clearBlack}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),l=c.ZP.ul(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  row-gap: 20px;\n\n  @media screen and (",") {\n    row-gap: 24px;\n    column-gap: 32px;\n  }\n\n  @media screen and (",") {\n    row-gap: 20px;\n  }\n"])),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.md}))},9593:function(n,e,t){t.d(e,{t:function(){return j}});var r,o,i,a,c,s,u=t(2642),l=t(168),d=t(6444),p=d.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n"])),(function(n){return n.theme.colors.whity})),h=d.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  background: ",";\n  box-shadow: ",";\n  border-radius: 45px;\n  padding: 8px 16px 9px 14px;\n  width: 280px;\n  @media screen and (",") {\n    width: 310px;\n    padding: 8px 11px 9px 12px;\n  }\n"])),(function(n){return n.theme.colors.whity}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.theme.media.md})),f=d.ZP.li(i||(i=(0,l.Z)([""]))),m=d.ZP.button(a||(a=(0,l.Z)(["\n  outline: none;\n  border: 1px solid ",";\n  color: ",";\n  background-color: ",";\n  display: inline-flex;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  &:hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.blueLight}),(function(n){return n.theme.colors.blueLight}),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.blueLight})),x=(0,d.ZP)(m)(c||(c=(0,l.Z)(["\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.whity})),g=(0,d.ZP)(m)(s||(s=(0,l.Z)(["\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n  &:hover,\n  :focus {\n    color: ",";\n    background-color: ",";\n    cursor: ",";\n  }\n"])),(function(n){return n.disabled?n.theme.colors.grey:n.theme.colors.blue}),(function(n){return n.theme.colors.whity}),(function(n){return n.disabled?n.theme.colors.grey:n.theme.colors.blue}),(function(n){return n.disabled?n.theme.colors.grey:n.theme.colors.blue}),(function(n){return n.disabled?n.theme.colors.whity:n.theme.colors.blueLight}),(function(n){return n.disabled&&"not-allowed"})),b=t(184),j=function(n){var e=n.currentPage,t=n.totalPages,r=n.onPageChange,o=n.paginationLength,i=function(n){n>=1&&n<=t&&r(n)};return(0,b.jsx)(b.Fragment,{children:function(){var n=function(){for(var n=[],r=e-2,i=e+2+1,a=1;a<=t;a++)(1===a||a===t||a>=r&&a<=i)&&n.push(a);return n.splice(0,o)}();return(0,b.jsx)(p,{children:(0,b.jsxs)(h,{children:[(0,b.jsx)(f,{children:(0,b.jsx)(g,{onClick:function(){return i(e-1)},disabled:1===e,children:(0,b.jsx)(u.ny,{})})}),n.map((function(n){return(0,b.jsx)(f,{children:e===n?(0,b.jsx)(x,{onClick:function(){return r(n)},children:n}):(0,b.jsx)(m,{onClick:function(){return r(n)},children:n})},n)})),(0,b.jsx)(f,{children:(0,b.jsx)(g,{onClick:function(){return i(e+1)},disabled:e===t,children:(0,b.jsx)(u.jG,{})})})]})})}()})}},6696:function(n,e,t){t.d(e,{o:function(){return j}});var r,o,i,a,c=t(9439),s=t(2791),u=t(9468),l=t(168),d=t(6444),p=d.ZP.div(r||(r=(0,l.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  gap: 12px;\n  display: flex;\n\n"]))),h=d.ZP.button(o||(o=(0,l.Z)(["\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  transition: color 250ms linear;\n  cursor: pointer;\n  color: '#757575';\n  svg {\n    color: ",";\n    transition: transform 250ms ease-in-out, border 250ms ease-in-out;\n  }\n  svg:hover {\n    color: ",";\n  }\n  @media screen and (",") {\n    right: 20px;\n  }\n  @media screen and (",") {\n  }\n"])),(function(n){var e=n.color;return e}),(function(n){var e=n.hovercolor;return e}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),f=t(3439),m=t(184),x=function(n){var e=n.searchQuery,t=n.onClick;return(0,m.jsxs)(p,{children:[(0,m.jsx)(h,{type:"submit",color:"#54ADFF",hovercolor:"#1075d3",children:(0,m.jsx)("svg",{width:24,height:24,fill:"#54ADFF",children:(0,m.jsx)("use",{href:f.Z+"#icon-search"})})}),""!==e&&(0,m.jsx)(h,{type:"button",color:"#FFC107",fill:"#757575",hovercolor:"#F43F5E",onClick:t,children:(0,m.jsx)(u.ySC,{size:24,hovercolor:"#F43F5E"})})]})},g=d.ZP.form(i||(i=(0,l.Z)(["\n  position: relative;\n  width: 280px;\n  margin-bottom: 44px;\n  margin-right: auto;\n  margin-left: auto;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 62px;\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n    margin-bottom: 82px;\n  }\n"]))),b=d.ZP.input(a||(a=(0,l.Z)(["\n  width: 100%;\n  height: 44px;\n  box-shadow: ",";\n  border-radius: 40px;\n  border: 1px solid transparent;\n  padding: 8px 20px;\n  box-sizing: border-box;\n  outline: none;\n  &::placeholder {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n    &::placeholder {\n      font-size: 20px;\n    }\n  }\n"])),(function(n){return n.theme.shadows.mainShadow})),j=function(n){var e=n.onSubmit,t=(0,s.useState)(""),r=(0,c.Z)(t,2),o=r[0],i=r[1];return(0,m.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,m.jsx)(b,{placeholder:"Search",type:"text",name:"searchQuery",value:o,onChange:function(n){return function(n){i(n.target.value.toLowerCase())}(n)}}),(0,m.jsx)(x,{onClick:function(){i(""),e("")},searchQuery:o})]})}},4814:function(n,e,t){t.d(e,{$:function(){return s}});var r,o=t(1413),i=t(168),a=t(6444).ZP.section(r||(r=(0,i.Z)(["\n  padding-top: ",";\n  padding-bottom: ",";\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"40px"}),(function(n){return n.padBottomSM||"100px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"80px"}),(function(n){return n.padBottomMd||"192px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"80px"}),(function(n){return n.padBottomLg||"103px"})),c=t(184),s=function(n){return(0,c.jsx)(a,(0,o.Z)({},n))}},9998:function(n,e,t){t.r(e),t.d(e,{default:function(){return gn}});var r,o,i,a,c,s,u,l,d,p,h,f,m,x,g,b,j,Z,w=t(1413),v=t(5861),y=t(3433),T=t(9439),k=t(4687),S=t.n(k),P=t(2791),C=t(7241),Y=t(5834),D=t(4814),F=t(7689),L=t(2642),z=t(168),E=t(1087),I=t(6444),M=I.ZP.div(r||(r=(0,z.Z)(["\n  display: flex;\n  align-items: flex-start;\n\n  position: relative;\n  padding-bottom: 24px;\n  @media screen and (",") {\n    display: flex;\n  }\n"])),(function(n){return n.theme.media.lg})),O=(I.ZP.div(o||(o=(0,z.Z)([""]))),I.ZP.div(i||(i=(0,z.Z)(["\n  display: none;\n  @media screen and (",") {\n    display: flex;\n    gap: 12px;\n    justify-content: flex-end;\n    margin-left: auto;\n  }\n"])),(function(n){return n.theme.media.md}))),Q=(0,I.ZP)(E.rU)(a||(a=(0,z.Z)(["\n  color: ",";\n  background: ",";\n  text-decoration: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 8px 16px;\n  border-radius: 40px;\n  font-family: ",";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 19px;\n  align-items: center;\n  letter-spacing: 0.04em;\n  transition: color 250ms ease-in, background-color 250ms ease-in;\n\n  :hover,\n  &.active {\n    color: #fef9f9;\n    background: #54adff;\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.blueLight}),(function(n){return n.theme.fonts.main})),B=I.ZP.ul(c||(c=(0,z.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 6px;\n\n  @media screen and (",") {\n    gap: 12px;\n  }\n"])),(function(n){return n.theme.media.md})),W=t(8627),$=t(8255),_=t(4942),A=t(3439),R=I.ZP.svg(s||(s=(0,z.Z)(["\n  display: block;\n  fill: transparent;\n  stroke: currentColor;\n"]))),U=t(184),G=function(){return(0,U.jsx)(R,{width:24,height:24,children:(0,U.jsx)("use",{href:A.Z+"#icon-chevron-down"})})},N=function(){return(0,U.jsx)(R,{width:24,height:24,children:(0,U.jsx)("use",{href:A.Z+"#icon-chevron-up"})})},q=function(){return(0,U.jsx)(R,{width:24,height:24,children:(0,U.jsx)("use",{href:A.Z+"#icon-round"})})},H=function(){return(0,U.jsx)(R,{width:24,height:24,children:(0,U.jsx)("use",{href:A.Z+"#icon-check-round"})})},J=I.ZP.div(u||(u=(0,z.Z)(["\n  position: relative;\n"]))),K=(0,I.F4)(l||(l=(0,z.Z)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]))),V=I.ZP.ul(d||(d=(0,z.Z)(["\n  position: absolute;\n  top: -126px;\n  right: 0px;\n  width: 152px;\n  background-color: ",";\n  list-style: none;\n  padding: 8px;\n  margin: 0;\n  z-index: 200;\n  background: ",";\n  box-shadow: ",";\n  border-radius: 20px;\n  animation: "," 0.3s ease-in-out;\n@media screen and (","){  position: absolute;\n  top: 50px;\n  left: 12px;\n}\n"])),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.shadows.mainShadow}),K,(function(n){return n.theme.media.md})),X=I.ZP.li(p||(p=(0,z.Z)(["\n  background: ",";\n  border-radius: 20px;\n  margin-bottom: 8px;\n  &:last-child {\n    margin-bottom: 0px;\n  }\n"])),(function(n){return n.theme.colors.blueLight})),nn=I.ZP.ul(h||(h=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 10px;\n  background: ",";\n  border-radius: 20px;\n  gap: 8px;\n"])),(function(n){return n.theme.colors.clearWhite}),(function(n){return n.theme.colors.blueLight})),en=(I.ZP.li(f||(f=(0,z.Z)(["\n  padding: 5px 0;\n"]))),I.ZP.span(m||(m=(0,z.Z)(["\n  display: flex;\n  padding: 4px 8px;\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.theme.colors.blue}))),tn=I.ZP.p(x||(x=(0,z.Z)(["\n  font-family: ",";\n  font-style: normal;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.37;\n  align-items: center;\n  letter-spacing: 0.04em;\n  color: ",";\n  margin-bottom: 8px;\n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.colors.blue})),rn=I.ZP.p(g||(g=(0,z.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: ",";\n  align-items: center;\n  margin-left: 8px;\n"])),(function(n){return n.theme.fontSizes[1]})),on=I.ZP.li(b||(b=(0,z.Z)(["\n  position: relative;\n  margin-left: 30px;\n"]))),an=I.ZP.label(j||(j=(0,z.Z)(["\n  font-family: 'Inter';\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.theme.colors.blue})),cn=I.ZP.input(Z||(Z=(0,z.Z)(["\n  -webkit-appearance: none;\n  appearance: none;\n  position: absolute;\n\n"]))),sn=function(n){var e=n.onQueryStringChange,t=(0,P.useState)(!1),r=(0,T.Z)(t,2),o=r[0],i=r[1],a=(0,P.useState)(!1),c=(0,T.Z)(a,2),s=c[0],u=c[1],l=(0,P.useState)(!1),d=(0,T.Z)(l,2),p=d[0],h=d[1],f=(0,P.useState)({upToYear:null,upToTwoYears:null,upToThreeYears:null,female:!1,male:!1}),m=(0,T.Z)(f,2),x=m[0],g=m[1];(0,P.useEffect)((function(){var n=new URLSearchParams,t=new Date;if(x.upToYear){var r=new Date(t.getFullYear()-1,t.getMonth(),t.getDate()),o=new Date(t.getFullYear(),t.getMonth(),t.getDate());n.append("fromTheDate",r.toISOString().split("T")[0]),n.append("toTheDate",o.toISOString().split("T")[0])}if(x.upToTwoYears){var i=new Date(t.getFullYear()-2,t.getMonth(),t.getDate()),a=new Date(t.getFullYear()-1,t.getMonth(),t.getDate());n.append("fromTheDate",i.toISOString().split("T")[0]),n.append("toTheDate",a.toISOString().split("T")[0])}if(x.upToThreeYears){var c=new Date(t.getFullYear()-3,t.getMonth(),t.getDate()),s=new Date(t.getFullYear()-2,t.getMonth(),t.getDate());n.append("fromTheDate",c.toISOString().split("T")[0]),n.append("toTheDate",s.toISOString().split("T")[0])}var u=[];Object.entries(x).forEach((function(e){var t=(0,T.Z)(e,2),r=t[0];t[1]&&(r.startsWith("upTo")?u.push(r):"female"!==r&&"male"!==r||n.append("gender",r))}));var l=n.toString();e(l)}),[x,e]),(0,P.useEffect)((function(){var n=function(n){"Escape"===n.key&&i(!1)},e=function(n){b.current&&!b.current.contains(n.target)&&i(!1)};return document.addEventListener("keydown",n),document.addEventListener("mousedown",e),function(){document.removeEventListener("keydown",n),document.removeEventListener("mousedown",e)}}),[]);var b=(0,P.useRef)(null),j=function(){i(!o)},Z=function(n){var e=n.target.name;g((function(n){return(0,w.Z)((0,w.Z)({},n),{},(0,_.Z)({upToYear:"upToYear"===e,upToTwoYears:"upToTwoYears"===e,upToThreeYears:"upToThreeYears"===e},e,!n[e]))}))};return(0,U.jsxs)(U.Fragment,{children:[o&&(0,U.jsx)(J,{ref:b,children:(0,U.jsxs)(V,{children:[(0,U.jsx)(tn,{children:"Filters"}),(0,U.jsxs)(X,{children:[(0,U.jsxs)(en,{onClick:function(){u(!s)},children:[s?(0,U.jsx)(N,{}):(0,U.jsx)(G,{}),(0,U.jsx)(rn,{children:"By age"})]}),s&&(0,U.jsxs)(nn,{children:[(0,U.jsx)(on,{children:(0,U.jsxs)(an,{children:[x.upToYear?(0,U.jsx)(H,{}):(0,U.jsx)(q,{}),(0,U.jsx)(cn,{type:"radio",value:"upToYear",checked:"upToYear"===x.upToYear,onChange:Z,name:"upToYear"}),"3-12m"]})}),(0,U.jsx)(on,{children:(0,U.jsxs)(an,{children:[x.upToTwoYears?(0,U.jsx)(H,{}):(0,U.jsx)(q,{}),(0,U.jsx)(cn,{type:"radio",value:"upToTwoYears",checked:"upToTwoYears"===x.upToTwoYears,onChange:Z,name:"upToTwoYears"}),"1 year"]})}),(0,U.jsx)(on,{children:(0,U.jsxs)(an,{children:[x.upToThreeYears?(0,U.jsx)(H,{}):(0,U.jsx)(q,{}),(0,U.jsx)(cn,{type:"radio",value:"upToThreeYears",checked:"upToThreeYears"===x.upToThreeYears,onChange:Z,name:"upToThreeYears"}),"2 year"]})})]})]}),(0,U.jsxs)(X,{children:[(0,U.jsxs)(en,{onClick:function(){h(!p)},children:[p?(0,U.jsx)(N,{}):(0,U.jsx)(G,{}),(0,U.jsx)(rn,{children:"By gender"})]}),p&&(0,U.jsxs)(nn,{children:[(0,U.jsx)(on,{children:(0,U.jsxs)(an,{children:[x.female?(0,U.jsx)(H,{}):(0,U.jsx)(q,{}),(0,U.jsx)(cn,{type:"checkbox",checked:x.female,onChange:Z,name:"female"}),"female"]})}),(0,U.jsx)(on,{children:(0,U.jsxs)(an,{children:[x.male?(0,U.jsx)(H,{}):(0,U.jsx)(q,{}),(0,U.jsx)(cn,{type:"checkbox",checked:x.male,onChange:Z,name:"male"}),"male"]})})]})]})]})}),(0,U.jsx)(L.b2,{onClick:j}),(0,U.jsx)(L.x4,{onClick:j})]})},un=[["sell","sell"],["lost/found","lost-found"],["in good hands","for-free"]],ln=[["favorite ads","favorite"],["my ads","own"]],dn=function(n){var e=n.onCategoryClick,t=(n.active,n.onQueryStringChange),r=(0,F.s0)(),o=(0,W.a)().isLoggedIn;return(0,U.jsxs)(M,{children:[(0,U.jsxs)(B,{children:[un.map((function(n){var t=n[1],r=n[0];return(0,U.jsx)(Q,{onClick:function(){return e(t)},children:r},t)})),o&&ln.map((function(n){var t=n[1],r=n[0];return(0,U.jsx)(Q,{onClick:function(){return e(t)},children:r},t)}))]}),(0,U.jsxs)(O,{children:[(0,U.jsx)(sn,{onQueryStringChange:t}),(0,U.jsx)(L.pr,{onClick:function(){o?r("/add-pet"):(0,$.h)("warning","To add a pet, you must be a registered user")}})]}),(0,U.jsx)(L.x4,{})]})},pn=t(6696),hn=t(498),fn=t(2138),mn=t(3622),xn=t(9593),gn=function(){var n=(0,P.useState)("sell"),e=(0,T.Z)(n,2),t=e[0],r=e[1],o=(0,P.useState)([]),i=(0,T.Z)(o,2),a=i[0],c=i[1],s=(0,P.useState)(0),u=(0,T.Z)(s,2),l=u[0],d=u[1],p=(0,P.useState)(""),h=(0,T.Z)(p,2),f=h[0],m=h[1],x=(0,E.lr)(),g=(0,T.Z)(x,2),b=g[0],j=g[1],Z=window.matchMedia(mn.r.media.mdToLg).matches,k=(0,P.useMemo)((function(){return Object.fromEntries((0,y.Z)(b))}),[b]);(0,P.useEffect)((function(){try{(0,v.Z)(S().mark((function n(){var e,r,o;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("favorite"!==t&&"own"!==t){n.next=10;break}return n.next=3,(0,C.S$)(t,k);case 3:e=n.sent,j((0,w.Z)((0,w.Z)({},k),{},{category:t})),c(e.data),console.log(e.data),d(e.totalPages),n.next=24;break;case 10:if(""===f){n.next=18;break}return n.next=13,(0,C.zP)(f);case 13:r=n.sent,console.log(r.data.data),c(r.data.data),n.next=24;break;case 18:return j((0,w.Z)((0,w.Z)({},k),{},{category:t})),n.next=21,(0,C.Sv)(k);case 21:o=n.sent,c(o.data),d(o.totalPages);case 24:case"end":return n.stop()}}),n)})))()}catch(n){console.log(n)}}),[j,k,t,f]);var F=function(){var n=(0,v.Z)(S().mark((function n(e){var t,r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=a.findIndex((function(n){return n._id===e})),(r=(0,y.Z)(a)).splice(t,1),c(r),n.next=7,(0,C.Zt)(e);case 7:n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(D.$,{children:(0,U.jsxs)(Y.W,{children:[(0,U.jsx)(hn.im,{children:(0,U.jsx)(hn.Dx,{children:"Find your favorite pet"})}),(0,U.jsx)(pn.o,{onSubmit:function(n){var e=""!==n?{search:n}:{};j((0,w.Z)((0,w.Z)({},e),{},{page:1,limit:10}))}}),(0,U.jsx)(dn,{onCategoryClick:function(n){r(n),localStorage.setItem("category",n)},active:t,onQueryStringChange:function(n){m(n)}}),(0,U.jsx)(fn.k,{notices:a,delNotice:F}),l>1&&(0,U.jsx)(xn.t,{currentPage:+k.page,totalPages:l,onPageChange:function(n){j((0,w.Z)((0,w.Z)({},k),{},{page:n,limit:10}))},paginationLength:Z?5:4})]})})})}}}]);
//# sourceMappingURL=998.87f2d45f.chunk.js.map