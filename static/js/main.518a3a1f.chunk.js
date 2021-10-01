(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={phonebookHeadline:"PhonebookHeadline_phonebookHeadline__39_Sj"}},13:function(e,t,n){e.exports={phonebookListHeadline:"PhonebookListHeadline_phonebookListHeadline__1tNls"}},2:function(e,t,n){e.exports={formWarpper:"PhonebookForm_formWarpper__oRuB6",formInputWarpper:"PhonebookForm_formInputWarpper__2nj9T",lableName:"PhonebookForm_lableName__1O-rh",inputField:"PhonebookForm_inputField__1eQgy",formBtn:"PhonebookForm_formBtn__3YbuP"}},20:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(10),r=n.n(o),i=n(14),c=n(4),s=n(5),l=n(7),m=n(6),u=n(22),b=n(11),d=n(2),h=n.n(d),p=n(0),f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={id:"",name:"",number:""},e.handleChange=function(t){e.setState(Object(b.a)({},t.currentTarget.name,t.target.value))},e.resetForm=function(){e.setState({id:"",name:"",number:""})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.resetForm()},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:h.a.formWarpper,onSubmit:this.handleSubmit,children:[Object(p.jsx)("div",{className:h.a.formInputWarpper,children:Object(p.jsxs)("label",{className:h.a.lableName,htmlFor:"name",children:["Name",Object(p.jsx)("input",{className:h.a.inputField,type:"text",name:"name",value:this.state.name,autoComplete:"off",onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(p.jsx)("div",{className:h.a.formInputWarpper,children:Object(p.jsxs)("label",{className:h.a.lableName,htmlFor:"number",children:["Number",Object(p.jsx)("input",{className:h.a.inputField,type:"tel",name:"number",value:this.state.number,autoComplete:"off",onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(p.jsx)("button",{className:h.a.formBtn,type:"submit",children:"Add contact to phonebook"})]})}}]),n}(a.Component);f.defaultPops={id:"",name:"",number:""};var j=f,O=n(12),_=n.n(O),x=function(e){var t=e.title;return Object(p.jsx)("h3",{className:_.a.phonebookHeadline,children:t})},k=n(3),v=n.n(k),C=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:v.a.listWrapper,children:t.map((function(e){return Object(p.jsxs)("li",{className:v.a.listItem,children:[Object(p.jsxs)("span",{className:v.a.listItemdData,children:[e.name,": ",Object(p.jsx)("a",{href:"tel:+{contact.number}",children:e.number})]}),Object(p.jsx)("button",{className:v.a.listItemBtn,type:"button",onClick:function(){return n(e.id)},children:"delete"})]},e.id)}))})})},g=n(13),N=n.n(g),F=function(e){var t=e.title;return Object(p.jsx)("h3",{className:N.a.phonebookListHeadline,children:t})},P=n(8),S=n.n(P),y=function(e){var t=e.value,n=e.onChange;return Object(p.jsx)("div",{className:S.a.formWarpper,children:Object(p.jsxs)("label",{className:S.a.searchLabel,children:["Find contact by name",Object(p.jsx)("input",{className:S.a.inputField,type:"text",name:"filter",value:t,onChange:n,autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})};y.defaultPops={value:""};var L=y,I=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[{id:"id-1",name:"Darth Vader",number:"459-12-56"},{id:"id-2",name:"Luke Skywalker",number:"443-89-12"},{id:"id-3",name:"ObiWan Kenobi",number:"645-17-79"},{id:"id-4",name:"R2 D2",number:"227-91-26"},{id:"id-5",name:"Padme Amidala",number:"123-34-67"},{id:"id-6",name:"Darth Sidius",number:"467-54-34"},{id:"id-7",name:"QuaiGon Jinn",number:"789-23-45"},{id:"id-8",name:"Boba Fett",number:"274-45-09"}],filter:""},e.addContact=function(t,n){var a=e.state.contacts,o={id:Object(u.a)(),name:t,number:n};a.some((function(e){return e.name.toLocaleLowerCase()===o.name.toLocaleLowerCase()}))?alert("".concat(o.name," is alredy exist")):e.setState({contacts:[].concat(Object(i.a)(a),[o])})},e.onChangeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.filterContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLocaleLowerCase();return n.filter((function(e){return e.name.toLocaleLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state.filter,t=this.filterContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{title:"Phonebook"}),Object(p.jsx)(j,{onSubmit:this.addContact}),Object(p.jsx)(F,{title:"Contacts"}),Object(p.jsx)(L,{value:e,onChange:this.onChangeFilter}),Object(p.jsx)(C,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),A=I;r.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={listWrapper:"PhonebookList_listWrapper__37B2H",listItem:"PhonebookList_listItem__25aoD",listItemdData:"PhonebookList_listItemdData__1J2fK",listItemBtn:"PhonebookList_listItemBtn__1KPyJ"}},8:function(e,t,n){e.exports={searchLabel:"PhonebookSearch_searchLabel__1hBcI",formWarpper:"PhonebookSearch_formWarpper__2PpnA",inputField:"PhonebookSearch_inputField__2uFOK"}}},[[20,1,2]]]);
//# sourceMappingURL=main.518a3a1f.chunk.js.map