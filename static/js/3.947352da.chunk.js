(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{311:function(e,s,a){e.exports={messages:"Messages_messages__1OSdi",right:"Messages_right__1hwJJ",messageText:"Messages_messageText__1y10a",messagesItems:"Messages_messagesItems__1Ya3C",send:"Messages_send__38RS-",layer:"Messages_layer__1Rp4E"}},313:function(e,s,a){e.exports={dialogs_items:"Dialogs_dialogs_items__3Kg61"}},314:function(e,s,a){e.exports={dialogs:"DialogItem_dialogs__34cn2"}},315:function(e,s,a){e.exports={dialog:"Dialog_dialog__DtKVL",dialogUser:"Dialog_dialogUser__W19ga",active:"Dialog_active__mn9d_"}},318:function(e,s,a){"use strict";a.r(s);var t=a(0),i=a(313),c=a.n(i),n=(a(1),a(314)),g=a.n(n),l=function(e){return Object(t.jsx)("div",{className:"",children:Object(t.jsx)("div",{className:g.a.dialogs,children:e.dialogsObject})})},o=a(315),r=a.n(o),m=a(17),d=function(e){var s=e.dialogState,a=s.id,i=s.avatar,c=s.name,n="/dialogs/"+a;return Object(t.jsxs)(m.b,{to:n,activeClassName:r.a.active,className:r.a.dialogUser,children:[Object(t.jsx)("img",{src:i,alt:"",className:"avatar"}),c]})},j=a(7),b=Object(j.b)((function(e){return{dialogsObject:e.dialogsPage.dialogsData.map((function(e){return Object(t.jsx)(d,{dialogState:e},e.id)}))}}),{})(l),_=a(311),u=a.n(_),x=a.p+"static/media/send.c1d20e63.svg",O=a(143),p=a(144),f=Object(p.a)({form:"messages"})((function(e){var s=e.handleSubmit,a=e.reset;return Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(),a()},children:[Object(t.jsx)(O.a,{className:u.a.messageText,name:"message",placeholder:"Write a message...",component:"input"}),Object(t.jsx)("button",{className:u.a.send,type:"submit",children:Object(t.jsx)("img",{src:x,alt:""})})]})})),h=function(e){return Object(t.jsxs)("div",{className:u.a.messagesItems,children:[Object(t.jsx)("div",{className:u.a.layer,children:Object(t.jsx)("div",{className:u.a.messages,children:e.messagesObject})}),Object(t.jsx)(f,{onSubmit:function(s){e.sendMessage(s.message)}})]})},v=a(120),N=a(76),M=a(8),D={sendMessage:v.b},y=Object(M.d)(Object(j.b)((function(e){return{messagesObject:e.dialogsPage.messagesData.map((function(e){var s=e.id,a=e.from,i=e.message;return Object(t.jsx)("div",{className:a?u.a.left:u.a.right,children:i},s)})),newMessageText:e.dialogsPage.newMessageText}}),D),N.a)(h);s.default=function(e){return Object(t.jsx)("main",{className:"App-main",children:Object(t.jsxs)("section",{className:c.a.dialogs_items+" App-block",children:[Object(t.jsx)(b,{}),Object(t.jsx)(y,{})]})})}}}]);
//# sourceMappingURL=3.947352da.chunk.js.map