(self.webpackChunkyourpet_frontend=self.webpackChunkyourpet_frontend||[]).push([[880],{5834:function(n,e,t){"use strict";t.d(e,{W:function(){return s}});var r,i=t(1413),o=t(168),a=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media screen and (",") {\n    width: 320px;\n  }\n\n  @media screen and (",") {\n    width: 768px;\n    padding: 0 32px;\n  }\n\n  @media screen and (",") {\n    width: 1280px;\n    padding: 0 16px;\n  }\n"])),(function(n){return n.theme.media.smToMd}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.theme.media.lg})),d=t(184),s=function(n){return(0,d.jsx)(a,(0,i.Z)({},n))}},8844:function(n,e,t){"use strict";t.d(e,{E:function(){return s}});var r,i=t(1413),o=t(168),a=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  flex-wrap: ",";\n  gap: ",";\n  outline: ",";\n"])),(function(n){return n.flexDirection||"row"}),(function(n){return n.alignItems||"center"}),(function(n){return n.justifyContent||"center"}),(function(n){return n.flexWrap||"nowrap"}),(function(n){return n.flexGap||"0px"}),(function(n){return n.outLine||"none"})),d=t(184),s=function(n){return(0,d.jsx)(a,(0,i.Z)({},n))}},4814:function(n,e,t){"use strict";t.d(e,{$:function(){return s}});var r,i=t(1413),o=t(168),a=t(6444).ZP.section(r||(r=(0,o.Z)(["\n  height: 100vh;\n  padding-top: ",";\n  padding-bottom: ",";\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n  @media screen and (",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.padTopSm||"40px"}),(function(n){return n.padBottomSM||"100px"}),(function(n){return n.theme.media.mdToLg}),(function(n){return n.padTopMd||"80px"}),(function(n){return n.padBottomMd||"192px"}),(function(n){return n.theme.media.lg}),(function(n){return n.padTopLg||"80px"}),(function(n){return n.padBottomLg||"103px"})),d=t(184),s=function(n){return(0,d.jsx)(a,(0,i.Z)({},n))}},8880:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return yn}});var r,i,o,a,d,s,c,u,p,l,h,x,m,f,g,w,b,v,Z,j=t(8844),y=t(5834),k=t(4814),P=t(1413),S=t(9439),z=t(2791),T=t(9434),C=t(5861),L=t(4687),F=t.n(L),B=t(8690),E=t(6635),q=(0,B.hg)("news/fetchNews",function(){var n=(0,C.Z)(F().mark((function n(e,t){var r,i;return F().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,E.getNews)(e);case 3:return r=n.sent,console.log("fetch news data---\x3e",r),n.abrupt("return",r);case 8:return n.prev=8,n.t0=n.catch(0),i=n.t0.response,n.abrupt("return",t.rejectWithValue(i.data));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()),D=function(n){return n.news.items},M=function(n){return n.news.isLoading},R=function(n){return n.news.error},U=(t(8402),t(2299)),W=t.n(U),_=t(184),N=function(n){var e=n.size,t=void 0===e?40:e,r=n.color,i=void 0===r?"#9ef48a":r,o=n.marginTop,a=void 0===o?"-40px":o,d=n.marginBottom,s=void 0===d?"40px":d;return(0,_.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:a,marginBottom:s},children:(0,_.jsx)(W(),{display:"block",margin:"0 auto",color:i,size:t,"aria-label":"Loading Spinner","data-testid":"loader"})})},Q=t(5218),A=t(9468),G=t(3439),I=t(168),$=t(6444),O=$.ZP.div(r||(r=(0,I.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n  gap: 12px;\n  display: flex;\n\n"]))),V=$.ZP.button(i||(i=(0,I.Z)(["\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: none;\n  transition: color 250ms linear;\n  cursor: pointer;\n  color: '#757575';\n  svg {\n    color: ",";\n    transition: transform 250ms ease-in-out, border 250ms ease-in-out;\n  }\n  svg:hover {\n    color: ",";\n  }\n  @media screen and (",") {\n    right: 20px;\n  }\n  @media screen and (",") {\n  }\n"])),(function(n){var e=n.color;return e}),(function(n){var e=n.hovercolor;return e}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),Y=function(n){var e=n.searchQuery,t=n.onClick;return(0,_.jsxs)(O,{children:[(0,_.jsx)(V,{type:"submit",color:"#54ADFF",hovercolor:"#1075d3",children:(0,_.jsx)(G.r,{width:24,height:24,children:(0,_.jsx)("use",{href:G.Z+"#icon-search"})})}),""!==e&&(0,_.jsx)(V,{type:"button",color:"#757575",fill:"#757575",hovercolor:"#F43F5E",onClick:t,children:(0,_.jsx)(A.ySC,{size:24,hovercolor:"#F43F5E"})})]})},H=$.ZP.form(o||(o=(0,I.Z)(["\n  position: relative;\n  width: 280px;\n  margin-bottom: 44px;\n  margin-right: auto;\n  margin-left: auto;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 62px;\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n  }\n"]))),J=$.ZP.input(a||(a=(0,I.Z)(["\n  width: 100%;\n  height: 44px;\n  box-shadow: ",";\n  border-radius: 40px;\n  border: 1px solid transparent;\n  padding: 8px 20px;\n  box-sizing: border-box;\n  outline: none;\n  &::placeholder {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 768px) {\n    width: 492px;\n  }\n  @media screen and (min-width: 1024px) {\n    width: 608px;\n    &:: placeholder {\n      font-size: 20px;\n    }\n  }\n"])),(function(n){return n.theme.shadows.mainShadow})),K=function(n){var e=n.onSubmit,t=n.onClick,r=(0,z.useState)(""),i=(0,S.Z)(r,2),o=i[0],a=i[1];return(0,_.jsxs)(H,{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return Q.Am.error("Enter your request, please",{style:{position:"top-center",duration:1e3,autoclose:500,background:"#9ae7a3",color:"#fff"}});e(o)},children:[(0,_.jsx)(J,{placeholder:"Search",type:"text",name:"searchQuery",value:o,onChange:function(n){return function(n){console.log("e.target.value---\x3e",n.target.value),a(n.target.value.toLowerCase().trim())}(n)}}),(0,_.jsx)(Y,{searchQuery:o,onClick:function(){a(""),t(o)}})]})},X=$.ZP.h1(d||(d=(0,I.Z)(["\n  margin-top: 40px;\n  margin-bottom: 24px;\n\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 66px;\n  letter-spacing: 0.03em;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n    margin-top: 70px;\n    margin-bottom: 40px;\n  }\n"])),(function(n){return n.theme.colors.dark})),nn=t(3433),en=t(2007),tn=t.n(en),rn=$.ZP.li(s||(s=(0,I.Z)(["\n  width: 100%;\n  position: relative;\n  border-radius: 20px;\n  background-color: ",";\n  box-shadow: ",";\n    &::before {\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 100%;\n    height: 8px;\n    border-radius: 4px;\n    background-color: ",";\n    background: ",";\n    @media screen and (min-width: 768px) {\n      top: -22px;\n    }\n   \n  }\n  @media screen and (",") {\n    flex-basis: calc((100% - 32px) / 2);\n  }\n  @media screen and (",") {\n    flex-basis: calc((100% - 2 * 32px) / 3);\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.mainShadow}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.blueGradient}),(function(n){return n.theme.media.md}),(function(n){return n.theme.media.lg})),on=$.ZP.div(c||(c=(0,I.Z)(["\n  overflow: hidden;\n  margin-bottom: 16px;\n  border-radius: 20px;\n"]))),an=$.ZP.img(u||(u=(0,I.Z)(["\n  display: block;\n  width: 100%;\n  object-fit: cover;\n"]))),dn=(0,$.ZP)(G.r)(p||(p=(0,I.Z)(['\nbackground-image: url("images/icon-pawprint/icons.svg");\n  width: 280px;\n  height: 280px;\n  fill: #54adff;\n']))),sn=$.ZP.div(l||(l=(0,I.Z)(["\n  margin-bottom: 40px;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),cn=$.ZP.h2(h||(h=(0,I.Z)(["\n  margin-left: 0;\n  margin-bottom: 16px;\n  height: 66px;\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 1.37;\n  letter-spacing: -0.01em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"]))),un=$.ZP.p(x||(x=(0,I.Z)(["\n  font-weight: 400;\n  line-height: 1.37;\n  height: 110px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n"]))),pn=$.ZP.div(m||(m=(0,I.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),ln=$.ZP.p(f||(f=(0,I.Z)(["\n  font-weight: 400;\n  line-height: 1.37;\n  color: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n"])),(function(n){return n.theme.colors.grey})),hn=$.ZP.a(g||(g=(0,I.Z)(["\n  padding: 0;\n  line-height: 1.37;\n  color: ",";\n  transition: transform 250ms ease-in-out, border 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.grey})),xn=function(n){var e=n.imgUrl,t=n.title,r=n.text,i=n.date,o=n.url;return(0,_.jsxs)(rn,{children:[(0,_.jsx)(on,{children:""!=={imgUrl:e}?(0,_.jsx)(an,{src:e,alt:t,loading:"lazy",width:"280",height:"252"}):(0,_.jsx)(dn,{children:(0,_.jsx)("use",{href:G.Z+"#icon-pawprint"})})}),(0,_.jsxs)(sn,{children:[(0,_.jsx)(cn,{children:t}),(0,_.jsx)(un,{children:r})]}),(0,_.jsxs)(pn,{children:[(0,_.jsx)(ln,{children:function(n){return n.split("T")[0].split("-").reverse().join("/")}(i)}),(0,_.jsx)(hn,{href:o,target:"_blank",rel:"noreferrer noopener",children:"Read more"})]})]})},mn=$.ZP.ul(w||(w=(0,I.Z)(["\n  margin: 0 auto;\n  display: grid;\n  row-gap: 42px;\n  width: 100%;\n  @media screen and (max-width: 767px) {\n    width: 280px;\n  }\n  @media screen and (",") {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 32px;\n  \n"])),(function(n){return n.theme.media.md})),fn=function(n){var e=n.news,t=(0,nn.Z)(e).sort((function(n,e){return Date.parse(e.date)-Date.parse(n.date)}));return(0,_.jsx)(mn,{children:t.map((function(n){var e=n._id,t=n.imgUrl,r=n.title,i=n.text,o=n.date,a=n.url;return(0,_.jsx)(xn,{imgUrl:t,title:r,text:i,date:o,url:a},e)}))})};xn.propTypes={imgUrl:tn().string,title:tn().string.isRequired,text:tn().string.isRequired,date:tn().string.isRequired,url:tn().string.isRequired};var gn=$.ZP.section(b||(b=(0,I.Z)([""]))),wn=$.ZP.div(v||(v=(0,I.Z)(["\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),bn=$.ZP.h2(Z||(Z=(0,I.Z)(["\n  text-align: center;\n  margin-bottom: 30px;\n  font-size: 24px;\n  line-height: 1.37;\n  @media (max-width: 480px) {\n    min-width: 280px;\n    font-size: 6vw;\n  }\n  @media (",") {\n    // width: 684px;\n    font-size: 32px;\n  }\n"])),(function(n){return n.theme.media.md})),vn=function(){return(0,_.jsxs)(gn,{children:[(0,_.jsx)(bn,{children:"Ooops:( Such news not found"}),(0,_.jsx)(wn,{})]})},Zn={search:"",page:1},jn=function(){var n=(0,z.useState)((0,P.Z)({},Zn)),e=(0,S.Z)(n,2),t=e[0],r=e[1],i=t.search,o=t.page,a=(0,T.I0)(),d=(0,T.v9)(D),s=(0,T.v9)(M),c=(0,T.v9)(R);(0,z.useEffect)((function(){a(q({page:o,search:i}))}),[a,o,i]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(X,{children:"News"}),(0,_.jsx)(K,{onSubmit:function(n){r((function(e){return e.search!==n&&r({search:n,page:1}),r({search:n})}))},onClick:function(){a(q()),r({search:""})}}),s&&!c&&(0,_.jsx)(N,{}),c&&(0,_.jsx)("p",{children:"Something wrong"}),!s&&0===d.length&&(0,_.jsx)(vn,{}),!s&&0!==d.length&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(fn,{news:d})})]})},yn=function(){return(0,_.jsx)(k.$,{padTopSm:"10px",padBottomLg:"150px",padTopLg:"300px",padTopMd:"200px",children:(0,_.jsx)(y.W,{children:(0,_.jsx)(j.E,{children:(0,_.jsx)(jn,{})})})})}},6635:function(){}}]);
//# sourceMappingURL=880.88fec3c2.chunk.js.map