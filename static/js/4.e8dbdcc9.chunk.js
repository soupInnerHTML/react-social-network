(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{312:function(e,n,t){e.exports={login:"FormsControl_login__2l4Hz",error:"FormsControl_error__1q_gP"}},316:function(e,n,t){e.exports={login:"Login_login__2lflt",error:"Login_error__2biNo",loginWrap:"Login_loginWrap__2w2wW",content:"Login_content__-0qC8",main:"Login_main__3y3I9",hContent:"Login_hContent__3WEd8",infoContent:"Login_infoContent__xc_wy",info:"Login_info__2mmr4",accs:"Login_accs__25Acb",acc:"Login_acc__267_T",add:"Login_add__2mERq",userName:"Login_userName__1jUP_"}},319:function(e,n,t){"use strict";t.r(n);var c,i,a=t(2),o=t(12),r=t(13),s=t(15),l=t(14),j=t(0),u=t(1),b=t.n(u),m=t(110),d=t(143),p=t(144),_=t(316),h=t.n(_),O=t(312),f=t.n(O),g=function(e){return e?void 0:"The field is required"},x=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?void 0:function(e){return/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e)?void 0:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0438\u043b\u0438 email"}(e)},N=function(e){return Object(j.jsxs)("div",{className:f.a.login,children:[e.children,e.touched&&e.error&&Object(j.jsx)("div",{className:f.a.error,style:{animation:"fade 1s"},children:e.error})]})},v=function(e){var n=e.meta,t=e.input,c=Object(m.a)(e,["meta","input"]);return Object(j.jsx)(N,Object(a.a)(Object(a.a)({},n),{},{children:Object(j.jsx)("input",Object(a.a)(Object(a.a)(Object(a.a)({},t),c),{},{onClick:function(e){}}))}))},C=t.p+"static/media/plus.9fd67a95.svg",y=t(11),L=(c=50,function(e){return e&&e.length>c?"Max length is ".concat(c):void 0}),k=(i=3,function(e){return e&&e.length<i?"Min length is ".concat(i):void 0}),A=Object(p.a)({form:"login"})((function(e){var n=e.handleSubmit,t=[g,L,k];return Object(j.jsx)("section",{className:"App-block "+h.a.loginWrap,children:Object(j.jsxs)("form",{onSubmit:n,className:h.a.login,children:[e.error&&Object(j.jsx)("div",{className:h.a.error,style:{animation:"fade 1s"},children:e.error}),Object(j.jsx)(d.a,{component:v,type:"text",name:"email",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u044a \u0438\u043b\u0438 \u0435\u043c\u0435\u0439\u043b\u044a:",validate:[].concat(t,[x])}),Object(j.jsx)(d.a,{component:v,type:"password",name:"password",placeholder:"\u0428\u0438\u0444\u0440\u044a:",validate:[].concat(t)}),Object(j.jsx)("input",{type:"submit",value:"\u0412\u043e\u0439\u0442\u0438"}),Object(j.jsx)(d.a,{component:"input",type:"checkbox",name:"remeberMe"}),Object(j.jsx)("label",{htmlFor:"isRemeberMe",children:" Remember me"})]})})})),w=function(){return Object(j.jsxs)("div",{className:h.a.acc,children:[Object(j.jsx)("img",{src:C,className:h.a.add}),Object(j.jsx)("p",{className:h.a.userName,children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0434\u0440\u0443\u0433\u043e\u0439"})]})},T=function(e){var n=e.loginThunkCreator,t=e.isNotAuth;e.init,Object(m.a)(e,["loginThunkCreator","isNotAuth","init"]);return t?Object(j.jsxs)("main",{className:"App-main "+h.a.main,children:[Object(j.jsxs)("section",{className:"App-block "+h.a.content,children:[Object(j.jsxs)("div",{className:h.a.info,children:[Object(j.jsx)("h4",{className:h.a.hContent,children:"\u041d\u0435\u0434\u0430\u0432\u043d\u043e \u0432\u0445\u043e\u0434\u0438\u043b\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442 \u0441 \u044d\u0442\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430"}),Object(j.jsx)("p",{className:h.a.infoContent,children:"\u0427\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0441\u043d\u043e\u0432\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e \u0438\u043b\u0438 \u0438\u043c\u044f."})]}),Object(j.jsxs)("div",{className:h.a.accs,children:[Object(j.jsx)(w,{}),Object(j.jsx)(w,{}),Object(j.jsx)(w,{})]})]}),Object(j.jsx)(A,{onSubmit:function(e){n(e)}})]}):Object(j.jsx)(y.a,{to:"/profile"})},W=t(8),q=t(40),M=t(41),z=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(j.jsx)(T,Object(a.a)({},this.props))}}]),t}(b.a.Component),F={loginThunkCreator:q.c,init:M.b};n.default=Object(W.b)((function(e){return{isNotAuth:e.auth.isNotAuth,login:e.form.login}}),F)(z)}}]);
//# sourceMappingURL=4.e8dbdcc9.chunk.js.map