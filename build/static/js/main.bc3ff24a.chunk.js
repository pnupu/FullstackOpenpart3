(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(14),r=t.n(o),u=(t(5),t(2)),l=function(e){var n=e.addname,t=e.newName,a=e.newNumber,o=e.handleNameChange,r=e.handleNumberChange;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:t,onChange:o})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:a,onChange:r})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))))},i=function(e){var n=e.namesToShow,t=e.handleshown;return c.a.createElement("div",null,"filter shown with ",c.a.createElement("input",{value:n,onChange:t}))},m=function(e){return c.a.createElement("div",null,e.name," ",e.number,c.a.createElement("button",{onClick:e.handleDelete},"delete"))},s=function(e){var n=e.numbersToShow,t=e.handleDelete;return c.a.createElement("div",null,n.map((function(e,n){return c.a.createElement(m,{key:n,name:e.name,number:e.number,handleDelete:function(){return t(e.id,e.name)}})})))},d=t(3),f=t.n(d),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},v=function(e){return f.a.post(h,e).then((function(e){return e.data}))},E=function(e){return f.a.delete("".concat(h,"/").concat(e))},w=function(e,n){return f.a.put("".concat(h,"/").concat(e),n)},g=function(e){var n=e.message,t=e.className;return null===n?null:c.a.createElement("div",{className:t},n)},p=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),m=Object(u.a)(r,2),d=m[0],f=m[1],h=Object(a.useState)(""),p=Object(u.a)(h,2),O=p[0],j=p[1],S=Object(a.useState)(!0),N=Object(u.a)(S,2),y=N[0],T=N[1],k=Object(a.useState)(""),C=Object(u.a)(k,2),D=C[0],J=C[1],B=Object(a.useState)(null),W=Object(u.a)(B,2),x=W[0],A=W[1],I=Object(a.useState)("success"),M=Object(u.a)(I,2),P=M[0],$=M[1];Object(a.useEffect)((function(){console.log("effect"),b().then((function(e){console.log("promise fulfilled"),o(e)}))}),[]);var q=y?t:t.filter((function(e){return e.name.includes(D)}));return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(g,{message:x,className:P}),c.a.createElement(i,{namesToShow:D,handleshown:function(e){J(e.target.value),""!==e.target.value&&T(!1)}}),c.a.createElement("h2",null,"add a new"),c.a.createElement(l,{addname:function(e){e.preventDefault();var n=!0,a=0;t.forEach((function(e){e.name===d&&(n=!1,a=e.id)}));var c={name:d,number:O};n?v(c).then((function(e){console.log(e),o(t.concat(e)),$("success"),A("Added ".concat(d)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){console.log(e.response.data),$("error"),A(JSON.stringify(e.response.data)),setTimeout((function(){A(null)}),5e3)})):window.confirm("".concat(d," is already included would you like to replace the number"))&&w(a,c).then(o(t.map((function(e){return e.id!==a?e:c})))).catch((function(e){$("error"),A("".concat(d," is deleted from the server")),setTimeout((function(){A(null)}),5e3),o(t.filter((function(e){return e.id!==a})))}));f(""),j("")},newName:d,newNumber:O,handleNameChange:function(e){f(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(s,{numbersToShow:q,handleDelete:function(e,n){window.confirm("Do you really want to delete ".concat(n," ?"))&&E(e).then(o(t.filter((function(n){return n.id!==e}))),$("success"),A("Deleted ".concat(n)),setTimeout((function(){A(null)}),5e3)).catch((function(a){$("error"),A("".concat(n," is already deleted from the server")),setTimeout((function(){A(null)}),5e3),o(t.filter((function(n){return n.id!==e})))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.bc3ff24a.chunk.js.map