"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[931],{5247:function(e,a,n){n.d(a,{I:function(){return r},l:function(){return s}});var t=n(2388),i=n(2905);function r(e,a){return t.Z.post("".concat(i.gd,"/user/login"),{password:a,email:e}).then((function(e){localStorage.setItem("token",e.data.token)}))}function s(e,a,n,r){return t.Z.post("".concat(i.gd,"/user/registration"),{password:a,lastName:r,firstName:n,email:e})}},6931:function(e,a,n){n.r(a);var t=n(4165),i=n(5861),r=(n(2791),n(9434)),s=n(3360),l=n(5247),o=(n(7057),n(7689)),u=n(6308),m=n(5705),c=n(184);a.default=function(){document.title="\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f";var e=(0,o.s0)(),a=(0,r.I0)();if(localStorage.getItem("token"))return(0,c.jsx)("div",{className:"Login",children:(0,c.jsx)("div",{children:(0,c.jsx)("h2",{children:"\u0412\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b"})})});var n=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(i,r,s,o){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,l.l)(i,r,s,o).then((function(){e("/login"),a((0,u._)())}));case 1:case"end":return n.stop()}}),n)})));return function(e,a,t,i){return n.apply(this,arguments)}}();return(0,c.jsx)("div",{className:"Login",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),(0,c.jsx)(m.J9,{initialValues:{email:"",password:"",lastName:"",firstName:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0432\u0432\u0435\u0434\u0451\u043d Email"):a.email="Required",a},onSubmit:function(e,a){a.setSubmitting;n(e.email,e.password,e.firstName,e.lastName)},children:function(e){var a=e.values,n=e.errors,t=e.touched,i=e.handleChange,r=e.handleBlur,l=e.handleSubmit,o=e.isSubmitting;return(0,c.jsxs)("form",{onSubmit:l,children:[(0,c.jsx)("input",{type:"firstName",name:"firstName",onChange:i,onBlur:r,value:a.firstName,placeholder:"\u0418\u043c\u044f"}),n.email&&t.email&&n.email,(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"lastName",name:"lastName",onChange:i,onBlur:r,value:a.lastName,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),n.email&&t.email&&n.email,(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"email",name:"email",onChange:i,onBlur:r,value:a.email,placeholder:"\u041f\u043e\u0447\u0442\u0430"}),n.email&&t.email&&n.email,(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"password",name:"password",onChange:i,onBlur:r,value:a.password,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),n.password&&t.password&&n.password,(0,c.jsx)(s.Z,{type:"submit",disabled:o,children:"\u0412\u0445\u043e\u0434"})]})}})]})})}},7057:function(){}}]);
//# sourceMappingURL=931.915b9720.chunk.js.map