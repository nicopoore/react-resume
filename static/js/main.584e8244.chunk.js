(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n.n(r),o=n(15),c=n.n(o),s=(n(29),n(8)),l=n(12),d=(n(30),n(16)),p=n(2),h=n(4),u=n(5),b=n(7),j=n(6),m=n(10),g=n(9),v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.dispatch({type:"TOGGLE_SIDEBAR",showSidebarMobile:!1})},e.langEng=function(){"es"===e.props.lang&&e.props.dispatch({type:"TOGGLE_LANG",lang:"en"})},e.langSpa=function(){"en"===e.props.lang&&e.props.dispatch({type:"TOGGLE_LANG",lang:"es"})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Sidebar",id:!0===this.props.showSidebarMobile?"sidebarActive":"",children:[Object(a.jsxs)("div",{className:"sidebarMain hidden-xs ".concat(!0===this.props.showSidebarMain?"shownMain":"hiddenMain"),children:[Object(a.jsx)("img",{src:"profile.jpg",className:"text-center round no-select",alt:"Nicolas Poore"}),Object(a.jsx)("h3",{children:"Nicol\xe1s C. Poore"}),Object(a.jsx)("p",{children:"en"===this.props.lang?"Full Stack Developer":"Desarrollador Full Stack"}),Object(a.jsx)("p",{children:"Buenos Aires, Argentina"})]}),Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#about",className:"about-link"===this.props.activeSection?"activeSection":void 0,id:"about-link",onClick:this.handleClick,children:"en"===this.props.lang?"About":"Sobre mi"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#work",className:"work-link"===this.props.activeSection?"activeSection":void 0,id:"work-link",onClick:this.handleClick,children:"en"===this.props.lang?"Work Experience":"Experiencia laboral"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#education",className:"education-link"===this.props.activeSection?"activeSection":void 0,id:"education-link",onClick:this.handleClick,children:"en"===this.props.lang?"Education":"Educaci\xf3n"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#skills",className:"skills-link"===this.props.activeSection?"activeSection":void 0,id:"skills-link",onClick:this.handleClick,children:"en"===this.props.lang?"Skills":"Conocimientos"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#projects",className:"projects-link"===this.props.activeSection?"activeSection":void 0,id:"projects-link",onClick:this.handleClick,children:"en"===this.props.lang?"Projects":"Proyectos"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#contact",className:"contact-link"===this.props.activeSection?"activeSection":void 0,id:"contact-link",onClick:this.handleClick,children:"en"===this.props.lang?"Contact":"Contacto"})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"en"===this.props.lang?"CV-en.pdf":"CV-es.pdf",target:"_blank",rel:"noreferrer",className:"resume-link"===this.props.activeSection?"activeSection":void 0,id:"resume-link",onClick:this.handleClick,children:["en"===this.props.lang?"Resume (En)":"CV (Es)"," ",Object(a.jsx)(g.a,{icon:m.d,className:"extIcon"})]})})]})}),Object(a.jsxs)("div",{id:"langToggle",children:[Object(a.jsx)("span",{className:"en"===this.props.lang?"activeLang":"inactiveLang",onClick:this.langEng,children:"English"}),Object(a.jsx)("span",{className:"en"===this.props.lang?"inactiveLang":"activeLang",onClick:this.langSpa,children:"Espa\xf1ol"})]}),Object(a.jsxs)("div",{className:"chivo",id:"copyright",children:[Object(a.jsxs)("p",{children:["en"===this.props.lang?"Created by":"Creado por"," Nicol\xe1s Cedric Poore"]}),Object(a.jsxs)("p",{children:["en"===this.props.lang?"All rights reserved":"Todos los derechos reservados"," \xa9 2021"]})]})]})}}]),n}(r.Component),O=Object(p.b)((function(e){return{lang:e.lang,showSidebarMobile:e.showSidebarMobile,showSidebarMain:e.showSidebarMain,activeSection:e.activeSection}}))(v),f=n(11),x=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).listenToScroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);e<=.166?a.props.dispatch({type:"TOGGLE_SECTION",showSidebarMain:!1,activeSection:"about-link"}):e>=.166&&e<.333?a.props.dispatch({type:"TOGGLE_SECTION",showSidebarMain:!0,activeSection:"work-link"}):e>=.333&&e<.5?a.props.dispatch({type:"TOGGLE_SECTION",showSidebarMain:!0,activeSection:"education-link"}):e>=.5&&e<.666?a.props.dispatch({type:"TOGGLE_SECTION",showSidebarMain:!0,activeSection:"skills-link"}):e>=.666&&e<.833?a.props.dispatch({type:"TOGGLE_SECTION",showSidebarMain:!0,activeSection:"projects-link"}):e>=.833&&e<1&&a.props.dispatch({type:"TOGGLE_SECTION",showSidebarMain:!0,activeSection:"contact-link"})},a.toggleDarkMode=function(){document.documentElement.style.setProperty("--root-bg",a.props.darkMode?"white":"#101010"),a.props.dispatch({type:"TOGGLE_DARKMODE",darkMode:!a.props.darkMode})},a.listenToScroll=a.listenToScroll.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){return Object(a.jsxs)("section",{className:"About",id:"about",children:[Object(a.jsx)("button",{id:"toggleDarkButton",onClick:this.toggleDarkMode,children:Object(a.jsx)(g.a,{icon:this.props.darkMode?m.i:m.g})}),Object(a.jsx)("img",{src:"profile.jpg",alt:"Nicolas Poore"}),Object(a.jsxs)("h1",{className:"playfair no-select",children:["Nicol\xe1s ",Object(a.jsx)("span",{children:"Cedric"})," Poore"]}),Object(a.jsxs)("h2",{className:"chivo no-select sm-hidden lg-shown",children:["en"===this.props.lang?"Full Stack Developer":"Desarrollador Full Stack"," \xa0|\xa0 Buenos Aires, Argentina"]}),Object(a.jsxs)("h2",{className:"chivo no-select sm-shown lg-hidden",children:["en"===this.props.lang?"Full Stack Developer":"Desarrollador Full Stack",Object(a.jsx)("br",{}),"Buenos Aires, Argentina"]}),Object(a.jsx)("p",{children:this.props.about[0]}),Object(a.jsx)("p",{children:this.props.about[1]}),Object(a.jsx)("p",{children:this.props.about[2]})]})}}]),n}(r.Component),k=Object(p.b)((function(e){return{lang:e.lang,darkMode:e.darkMode,about:e.about}}))(x),y=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).date=function(){return e.props.date.hasOwnProperty("from")?"".concat(e.props.date.from," - ").concat(e.props.date.to):e.props.date},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("li",{className:"timelineItem chivo",id:this.props.id,children:[Object(a.jsxs)("h5",{className:"sm-hidden lg-shown",children:[Object(a.jsx)("span",{children:this.props.title})," \u2014 ",Object(a.jsx)("span",{children:this.props.subtitle})]}),Object(a.jsxs)("h5",{className:"sm-shown lg-hidden",children:[Object(a.jsx)("span",{children:this.props.title}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:this.props.subtitle})]}),Object(a.jsx)("p",{children:this.date()}),Object(a.jsx)("p",{children:this.props.desc})]})}}]),n}(r.Component),S=Object(p.b)(null)(y),C=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderExperiences=function(e){return Object(a.jsx)(S,{id:e.id,title:e.title,subtitle:e.subtitle,date:e.date,desc:e.desc},e.id)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.experienceArray.reverse().map((function(t){return e.renderExperiences(t)}));return Object(a.jsxs)("section",{className:"Experience",id:"work",children:[Object(a.jsx)("h2",{className:"subheading",children:"en"===this.props.lang?"Work Experience":"Experiencia laboral"}),Object(a.jsx)("ul",{children:t})]})}}]),n}(r.Component),E=Object(p.b)((function(e){return{lang:e.lang,showSidebarMain:e.showSidebarMain,experienceArray:e.timelines.experienceArray}}))(C),w=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderEducation=function(e){return Object(a.jsx)(S,{id:e.id,title:e.title,subtitle:e.subtitle,date:e.date,desc:e.desc},e.id)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.formalEdArray.reverse().map((function(t){return e.renderEducation(t)})),n=this.props.personalEdArray.reverse().map((function(t){return e.renderEducation(t)}));return Object(a.jsxs)("section",{className:"Education",id:"education",children:[Object(a.jsx)("h2",{className:"subheading",children:"en"===this.props.lang?"Formal Education":"Educaci\xf3n formal"}),Object(a.jsx)("ul",{children:t}),Object(a.jsx)("h2",{className:"subheading",children:"en"===this.props.lang?"Personal Education":"Educaci\xf3n personal"}),Object(a.jsx)("ul",{children:n})]})}}]),n}(r.Component),A=Object(p.b)((function(e){return{lang:e.lang,showSidebarMain:e.showSidebarMain,formalEdArray:e.timelines.formalEdArray,personalEdArray:e.timelines.personalEdArray}}))(w),M=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("p",{className:"chivo",children:["- ",this.props.name]})}}]),n}(r.Component),N=Object(p.b)(null)(M),T=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).fluencyColor=function(e){return e>=66?"highFluency":e>=33&&e<66?"midFluency":e<33?"lowFluency":void 0},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("li",{className:"".concat(this.fluencyColor(this.props.level)),children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{children:this.props.name})," - ",Object(a.jsx)("span",{children:this.props.fluency})]}),Object(a.jsx)("p",{className:"chivo langDesc",children:this.props.desc})]})}}]),n}(r.Component),F=Object(p.b)(null)(T),I=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderSkill=function(e){return Object(a.jsx)(N,{name:e.name,level:e.level},e.code)},e.renderLang=function(e){return Object(a.jsx)(F,{name:e.lang,fluency:e.fluency,level:e.level,desc:e.desc},e.code)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.technical.filter((function(e){return"advanced"===e.level})).map((function(t){return e.renderSkill(t)})),n=this.props.technical.filter((function(e){return"intermediate"===e.level})).map((function(t){return e.renderSkill(t)})),r=this.props.technical.filter((function(e){return"basic"===e.level})).map((function(t){return e.renderSkill(t)})),i=this.props.languages.map((function(t){return e.renderLang(t)}));return Object(a.jsxs)("section",{className:"Skills",id:"skills",children:[Object(a.jsx)("h2",{className:"subheading",children:"en"===this.props.lang?"Skills":"Conocimientos"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"en"===this.props.lang?"Technical Skills":"Conocimientos t\xe9cnicos"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{className:"highFluency",children:[Object(a.jsx)("p",{children:Object(a.jsx)("span",{children:"en"===this.props.lang?"Advanced":"Avanzado"})}),t]}),Object(a.jsxs)("li",{className:"midFluency",children:[Object(a.jsx)("p",{children:Object(a.jsx)("span",{children:"en"===this.props.lang?"Intermediate":"Intermedio"})}),n]}),Object(a.jsxs)("li",{className:"lowFluency",children:[Object(a.jsx)("p",{children:Object(a.jsx)("span",{children:"en"===this.props.lang?"Basic":"B\xe1sico"})}),r]})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"en"===this.props.lang?"Languages":"Lenguajes"}),Object(a.jsx)("ul",{children:i})]})]})}}]),n}(r.Component),L=Object(p.b)((function(e){return{lang:e.lang,technical:e.skills.technical,languages:e.skills.languages}}))(I),D=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleClick=function(){a.props.dispatch({type:"TOGGLE_SIDEBAR",showSidebarMobile:!a.props.showSidebarMobile})},a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("span",{className:"lg-hidden sm-shown",id:"hamburger-span",onClick:this.handleClick,children:Object(a.jsx)(g.a,{icon:m.a})})}}]),n}(r.Component),G=Object(p.b)((function(e){return{showSidebarMobile:e.showSidebarMobile}}))(D),P=Object(p.b)(null)((function(e){return Object(a.jsx)("div",{className:e.type})})),R=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).addToFilter=function(){e.props.projectFilter.includes(e.props.tag)||e.props.dispatch({type:"ADD_FILTER",tag:e.props.tag})},e.removeFromFilter=function(){var t=Object(l.a)(e.props.projectFilter),n=t.indexOf(e.props.tag);t.splice(n,1),e.props.dispatch({type:"REMOVE_FILTER",projectFilter:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.type;return Object(a.jsxs)("button",{onClick:this.addToFilter,className:"chivo piTag ".concat(this.props.tag," ").concat("remove"===e?"addedTag":""),children:["add"===e&&Object(a.jsx)("span",{className:"filter-icon",children:Object(a.jsx)(g.a,{icon:m.e})})," ",Object(a.jsx)("span",{className:"piTagText",children:this.props.tag}),"remove"===e&&Object(a.jsx)("span",{className:"x-icon",onClick:this.removeFromFilter,children:Object(a.jsx)(g.a,{icon:m.j})})]})}}]),n}(r.Component),_=Object(p.b)((function(e){return{projectFilter:e.projectFilter}}))(R),J=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderTag=function(e){return Object(a.jsx)(_,{tag:e,type:"add"},e)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.tags.map((function(t){return e.renderTag(t)}));return Object(a.jsxs)("div",{id:this.props.key,children:[Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:this.props.repo,children:[this.props.key," ",this.props.name]})})]}),Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("div",{children:t})]})]})}}]),n}(r.Component),B=Object(p.b)(null)(J),W=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).renderProjects=function(e){return Object(a.jsx)(B,{name:e.name,url:e.url,tags:e.tags,repo:e.repo},e.id)},e.renderTag=function(e){return Object(a.jsx)(_,{tag:e,type:"remove"})},e.resetFilter=function(){e.props.dispatch({type:"RESET_FILTER"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=0===this.props.projectFilter.length?["javascript"]:this.props.projectFilter,n=this.props.projects.filter((function(e){return t.every((function(t){return-1!==e.tags.indexOf(t)}))&&1!==e.id&&9!==e.id&&11!==e.id})).reverse().map((function(t){return e.renderProjects(t)})),r=this.props.projectFilter.reverse().map((function(t){return e.renderTag(t)}));return Object(a.jsxs)("section",{className:"Projects",id:"projects",children:[Object(a.jsx)("h2",{className:"subheading",children:"en"===this.props.lang?"Projects":"Proyectos"}),Object(a.jsxs)("div",{id:"appliedFilters",style:{marginBottom:(0!==this.props.projectFilter.length?-2.1:0)+"rem"},children:[r,0!==this.props.projectFilter.length&&Object(a.jsx)("span",{className:"resetFilterButton",onClick:this.resetFilter,children:Object(a.jsx)(g.a,{icon:m.c})})]}),Object(a.jsx)("div",{className:"chivo",id:"projectsWrapper",children:n})]})}}]),n}(r.Component),q=Object(p.b)((function(e){return{lang:e.lang,projects:e.projects,projectFilter:e.projectFilter}}))(W),z=n(21),K=n(23),U=n.n(K),V=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onMessageChange=function(e){a.setState({message:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({status:"processing"}),U.a.sendForm("service_63wa0hd","template_o4cv7pz",e.target,"user_fILpx29tAK6zs1Xdr1LUm").then((function(e){a.setState({name:"",email:"",message:"",status:"sent"}),console.log(e.text)}),(function(e){console.log(e.text)})).then((function(){setTimeout((function(){a.setState({status:""})}),3e3)}))},a.state={name:"",email:"",message:"",status:""},a.onNameChange=a.onNameChange.bind(Object(f.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(f.a)(a)),a.onMessageChange=a.onMessageChange.bind(Object(f.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.lang;return Object(a.jsxs)("section",{className:"Contact",id:"contact",children:[Object(a.jsx)("h2",{className:"subheading",children:"en"===this.props.lang?"Contact":"Contacto"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"contactForm",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",value:this.state.name,onChange:this.onNameChange,placeholder:"en"===t?"NAME":"NOMBRE",required:!0,name:"name"}),Object(a.jsx)("input",{type:"email",value:this.state.email,onChange:this.onEmailChange,placeholder:"EMAIL",required:!0,name:"email"}),Object(a.jsx)("textarea",{value:this.state.message,onChange:this.onMessageChange,placeholder:"en"===t?"MESSAGE":"MENSAJE",required:!0,name:"message"}),Object(a.jsx)("input",{type:"submit",value:""===e.state.status?"en"===t?"SUBMIT":"ENVIAR":"processing"===e.state.status?"en"===t?"SENDING...":"ENVIANDO...":"sent"===e.state.status?"en"===t?"SENT!":"ENVIADO!":void 0})]})}),Object(a.jsxs)("div",{id:"contactInfo",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"chivo",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:m.f,fixedWidth:!0}),this.props.contact.location]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:m.b,fixedWidth:!0}),this.props.contact.email]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(g.a,{icon:m.h,fixedWidth:!0}),this.props.contact.phone]})]})}),Object(a.jsxs)("div",{children:[" ",Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:this.props.contact.github,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("button",{children:Object(a.jsx)(g.a,{icon:z.a})})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:this.props.contact.linkedin,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("button",{children:Object(a.jsx)(g.a,{icon:z.b})})})})]})})]})]})]})]})}}]),n}(r.Component),H=Object(p.b)((function(e){return{lang:e.lang,contact:e.contact}}))(V),Q=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.darkMode?"darkMode":"lightMode";return Object(a.jsxs)("div",{className:"App ".concat(e),children:[Object(a.jsx)(G,{}),Object(a.jsx)(O,{}),Object(a.jsxs)("div",{id:"Main",children:[Object(a.jsx)(k,{}),Object(a.jsx)(P,{type:"one"}),Object(a.jsx)(E,{}),Object(a.jsx)(P,{type:"two"}),Object(a.jsx)(A,{}),Object(a.jsx)(P,{type:"one"}),Object(a.jsx)(L,{}),Object(a.jsx)(P,{type:"two"}),Object(a.jsx)(q,{}),Object(a.jsx)(P,{type:"one"}),Object(a.jsx)(H,{})]})]})}}]),n}(r.Component),X=Object(p.b)((function(e){return{darkMode:e.darkMode}}))(Q),Y=["I'm a full stack developer, currently deepening my knowledge of Advanced JavaScript Development, particularly frameworks with a MERN stack focus, after having finished two degrees in Javascript web development.","Constantly focusing on design, I'm experienced in Web Development, 3D modelling, Adobe Creative Suite, with a strong passion for programming and innovation. I have Full Stack Web Development Certifications from FCC and EducacionIT.","In my free time I love watching movies (you can find me on Letterboxd!), playing the piano (plus sucking at the guitar), programming, and learning."],Z={experienceArray:[{id:"juno",title:"Juno Clases",subtitle:"Web Development",date:{from:"Mar 2017",to:"Mar 2018"},desc:"Co-Founder and developer of Juno, an online platform to connect people in need of at-home tutoring, with tutors available near them, to make it easier to schedule, pay, and enjoy classes in the comfort of your own home, as well as help tutors find work.\n\nIn charge of online marketing execution, set-up and maintenance of its website and social networks, and responsible for Juno's online platform."},{id:"kaeser",title:"Kaeser Kompressoren",subtitle:"Applications Engineering",date:{from:"Jan 2018",to:"Oct 2020"},desc:"Planning, design and execution of efficient compressed air systems, interpreting and capturing the team and the clients\u2019 ideas. Development of the Kaeser Kompressoren Engineering Blog."}],formalEdArray:[{id:"sanlu",title:"St. Luke's College",subtitle:"Secondary Education in Hard Sciences",date:{from:"2011",to:"2016"},desc:""},{id:"uba",title:"University of Buenos Aires",subtitle:"Software Engineering",date:{from:"2017",to:"Present"},desc:""}],personalEdArray:[{id:"igcse",title:"University of Cambridge",subtitle:"IGCSE",date:"2015",desc:"International Certificate of Education with Merit"},{id:"edIT",title:"EducacionIT",subtitle:"JavaScript Advanced Developer",date:"2020",desc:"Currently finishing the Advanced Full Stack Javascript Developer degree in Educaci\xf3nIT, which includes React, Node, OOP, Progressive Web Apps, among other classes."},{id:"fcc",title:"freeCodeCamp",subtitle:"Full Stack Development Certification",date:"2020",desc:"Including the following four modules: Responsive Web Design, Javascript Algorithm Scripting, Front End Libraries, APIs and Microservices"}]},$={technical:[{code:"htmlcss",name:"HTML5/CSS3",keywords:["programming","frontend"],level:"advanced"},{code:"js",name:"JavaScript",keywords:["programming","frontend","backend"],level:"advanced"},{code:"react",name:"ReactJS/Redux",keywords:["programming","frontend"],level:"advanced"},{code:"ps",name:"Adobe Photoshop",keywords:["design","tools"],level:"advanced"},{code:"node",name:"NodeJS",keywords:["programming","backend"],level:"intermediate"},{code:"express",name:"Express",keywords:["programming","backend"],level:"intermediate"},{code:"mongo",name:"MongoDB/Mongoose",keywords:["programming","backend","databases"],level:"intermediate"},{code:"chai",name:"Chai (QA)",keywords:["programming","backend","QA"],level:"basic"},{code:"python",name:"Python",keywords:["programming","backend"],level:"basic"},{code:"django",name:"Django",keywords:["programming","backend","frontend"],level:"basic"}],languages:[{code:"es",lang:"Spanish",fluency:"C2",level:100,desc:"Native language"},{code:"en",lang:"English",fluency:"C2",level:100,desc:"Grade A (94/100) in English as a First Language, certified by the University of Cambridge."},{code:"de",lang:"German",fluency:"A2",level:33,desc:"Currently studying at Goethe-Institut."},{code:"fr",lang:"French",fluency:"A1",level:10,desc:"Basic communicational proficiency in French, certified by the Alliance fran\xe7aise."}]},ee=[{id:1,name:"Technical Documentation Page",tags:["front-end","html","css","javascript"],url:"https://nicopoore.github.io/technical-documentation/",repo:"https://github.com/nicopoore/technical-documentation"},{id:2,name:"Landing Page",tags:["front-end","html","css","javascript","bootstrap"],url:"https://nicopoore.github.io/landing-page/",repo:"https://github.com/nicopoore/landing-page"},{id:3,name:"Random Quote Machine",tags:["front-end","html","css","javascript","bootstrap","react","redux"],url:"https://nicopoore.github.io/random-quote-machine/",repo:"https://github.com/nicopoore/random-quote-machine"},{id:4,name:"Markdown Previewer",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/markdown-previewer/",repo:"https://github.com/nicopoore/markdown-previewer"},{id:5,name:"Drum Machine",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/drum-machine/",repo:"https://github.com/nicopoore/drum-machine"},{id:6,name:"Calculator",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/react-calculator/",repo:"https://github.com/nicopoore/react-calculator"},{id:7,name:"Pomodoro Timer",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/react-pomodoro/",repo:"https://github.com/nicopoore/react-pomodoro"},{id:8,name:"Timestamp Microservice",tags:["back-end","javascript","node","express"],url:"https://evening-wave-75791.herokuapp.com/",repo:"https://github.com/nicopoore/timestamp-service"},{id:9,name:"Request Header Parser",tags:["back-end","javascript","node","express"],url:"https://pure-brushlands-16955.herokuapp.com/",repo:"https://github.com/nicopoore/request-header-parser"},{id:10,name:"URL Shortener",tags:["back-end","javascript","node","express","mongodb","mongoose"],url:"https://mysterious-hamlet-01922.herokuapp.com/",repo:"https://github.com/nicopoore/url-shortener"},{id:11,name:"File Metadata Parser",tags:["back-end","javascript","node","express"],url:"https://enigmatic-fjord-43448.herokuapp.com/",repo:"https://github.com/nicopoore/file-metadata"},{id:12,name:"Exercise Tracker",tags:["back-end","javascript","node","express","mongodb","mongoose"],url:"https://secret-cove-94553.herokuapp.com/",repo:"https://github.com/nicopoore/exercise-tracker"}],te=["Soy desarrollador full-stack, actualmente profundizando mis conocimientos de Desarrollo Avanzado Javascript, especialmente focalizado a frameworks de stack MERN, despu\xe9s de haber terminado dos carreras de desarrollo en Javascript junto con diversos proyectos.","Me caracterizo por una tendencia al dise\xf1o -calificado en modelado 3D, desarrollo web y Adobe Creative Suit- y el desarrollo de herramientas para solucionar problemas. Cuento con certificados de desarrollo web Full Stack de FCC y EducacionIT.","En mi tiempo libre me encanta ver peliculas (estoy en Letterboxd!), tocar el piano (o fallar intentando tocar la guitarra), programar y aprender."],ne={experienceArray:[{id:"juno",title:"Juno Clases",subtitle:"Desarrollo Web",date:{from:"Mar 2017",to:"Mar 2018"},desc:"Co-Fundador y desarrollador de Juno, una plataforma online que conecta a personas con necesidad de clases particulares, con tutores, maestros y/o profesores disponibles cerca de ellos, para facilitarle a los alumnos la reserva, pago, y disfrute de clases en la comodidad de tu casa, y a los tutores a encontrar clases para dar."},{id:"kaeser",title:"Kaeser Kompressoren",subtitle:"Ingenier\xeda en Aplicaciones",date:{from:"Ene 2018",to:"Oct 2020"},desc:"Planificaci\xf3n, dise\xf1o y ejecuci\xf3n de eficientes sistemas de aire comprimido, interpretando y plasmando eficientemente las ideas transmitidas por el equipo de trabajo y los clientes. Desarrollo del blog de ingenier\xeda de Kaeser Kompressoren Argentina."}],formalEdArray:[{id:"sanlu",title:"St. Luke's College",subtitle:"T\xedtulo Secundario en Exactas",date:{from:"2011",to:"2016"},desc:""},{id:"uba",title:"Universidad de Buenos Aires",subtitle:"Ingenier\xeda Inform\xe1tica",date:{from:"2017",to:"Presente"},desc:""}],personalEdArray:[{id:"igcse",title:"University of Cambridge",subtitle:"IGCSE",date:"2015",desc:"International Certificate of Education with Merit (Certificado Internacional de Educaci\xf3n con M\xe9ritos)"},{id:"edIT",title:"EducacionIT",subtitle:"Desarrollador Avanzado JavaScript",date:"2020",desc:"Actualmente terminando la carrera de desarrollador avanzado full stack JavaScript en EducacionIT, que incluye cursos en React, Node, OOP, Progressive Web Apps, entre otros."},{id:"fcc",title:"freeCodeCamp",subtitle:"Certificaci\xf3n de Desarrollador Full Stack",date:"2020",desc:"Incluyendo los siguientes m\xf3dulos: Desarrollo Web Responsive, Algoritmos Javascript, Librer\xedas Front End, APIs y Microservicios"}]},ae={technical:[{code:"htmlcss",name:"HTML5/CSS3",keywords:["programming","frontend"],level:"advanced"},{code:"js",name:"JavaScript",keywords:["programming","frontend","backend"],level:"advanced"},{code:"react",name:"ReactJS/Redux",keywords:["programming","frontend"],level:"advanced"},{code:"ps",name:"Adobe Photoshop",keywords:["design","tools"],level:"advanced"},{code:"node",name:"NodeJS",keywords:["programming","backend"],level:"intermediate"},{code:"express",name:"Express",keywords:["programming","backend"],level:"intermediate"},{code:"mongo",name:"MongoDB/Mongoose",keywords:["programming","backend","databases"],level:"intermediate"},{code:"chai",name:"Chai (QA)",keywords:["programming","backend","QA"],level:"basic"},{code:"python",name:"Python",keywords:["programming","backend"],level:"basic"},{code:"django",name:"Django",keywords:["programming","backend","frontend"],level:"basic"}],languages:[{code:"es",lang:"Espa\xf1ol",fluency:"C2",level:100,desc:"Lenguaje nativo"},{code:"en",lang:"Ingl\xe9s",fluency:"C2",level:100,desc:"Grado A (94/100) en Ingl\xe9s como Primer Lenguaje, certificado por la Universidad de Cambridge."},{code:"de",lang:"Alem\xe1n",fluency:"A2",level:33,desc:"Actualmente estudiando en el Goethe-Institut."},{code:"fr",lang:"Franc\xe9s",fluency:"A1",level:10,desc:"Nivel de comunicaci\xf3n b\xe1sica en franc\xe9s, certificado por la Alliance fran\xe7aise."}]},re=[{id:1,name:"P\xe1gina de doc. t\xe9cnica",tags:["front-end","html","css","javascript"],url:"https://nicopoore.github.io/technical-documentation/",repo:"https://github.com/nicopoore/technical-documentation"},{id:2,name:"Landing Page",tags:["front-end","html","css","javascript","bootstrap"],url:"https://nicopoore.github.io/landing-page/",repo:"https://github.com/nicopoore/landing-page"},{id:3,name:"M\xe1quina de frases",tags:["front-end","html","css","javascript","bootstrap","react","redux"],url:"https://nicopoore.github.io/random-quote-machine/",repo:"https://github.com/nicopoore/random-quote-machine"},{id:4,name:"Visualizador Markdown",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/markdown-previewer/",repo:"https://github.com/nicopoore/markdown-previewer"},{id:5,name:"App de pads",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/drum-machine/",repo:"https://github.com/nicopoore/drum-machine"},{id:6,name:"Calculadora",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/react-calculator/",repo:"https://github.com/nicopoore/react-calculator"},{id:7,name:"Temporizador Pomodoro",tags:["front-end","html","css","javascript","react","redux"],url:"https://nicopoore.github.io/react-pomodoro/",repo:"https://github.com/nicopoore/react-pomodoro"},{id:8,name:"Microservicio de tiempo",tags:["back-end","javascript","node","express"],url:"https://evening-wave-75791.herokuapp.com/",repo:"https://github.com/nicopoore/timestamp-service"},{id:9,name:"Lector de Request Header",tags:["back-end","javascript","node","express"],url:"https://pure-brushlands-16955.herokuapp.com/",repo:"https://github.com/nicopoore/request-header-parser"},{id:10,name:"Acortador de URLs",tags:["back-end","javascript","node","express","mongodb","mongoose"],url:"https://mysterious-hamlet-01922.herokuapp.com/",repo:"https://github.com/nicopoore/url-shortener"},{id:11,name:"Lector de Metadata",tags:["back-end","javascript","node","express"],url:"https://enigmatic-fjord-43448.herokuapp.com/",repo:"https://github.com/nicopoore/file-metadata"},{id:12,name:"Log de ejercicio",tags:["back-end","javascript","node","express","mongodb","mongoose"],url:"https://secret-cove-94553.herokuapp.com/",repo:"https://github.com/nicopoore/exercise-tracker"}],ie={lang:"es",darkMode:!1,showSidebarMobile:!1,showSidebarMain:!1,activeSection:"about-link",about:Object(l.a)(te),timelines:Object(s.a)({},ne),skills:Object(s.a)({},ae),projects:Object(l.a)(re),projectFilter:[],contact:{location:"Vicente L\xf3pez, Buenos Aires",phone:"15-5526-4650",email:"nicolaspoore@gmail.com",github:"https://github.com/nicopoore",linkedin:"https://www.linkedin.com/in/nicolas-poore/"}},oe=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LANG":return Object(s.a)(Object(s.a)({},e),{},{lang:t.lang,about:"en"===e.lang?Object(l.a)(te):Object(l.a)(Y),timelines:"en"===e.lang?Object(s.a)({},ne):Object(s.a)({},Z),skills:"en"===e.lang?Object(s.a)({},ae):Object(s.a)({},$),projects:"en"===e.lang?Object(l.a)(re):Object(l.a)(ee)});case"TOGGLE_DARKMODE":return Object(s.a)(Object(s.a)({},e),{},{darkMode:t.darkMode});case"TOGGLE_SIDEBAR":return Object(s.a)(Object(s.a)({},e),{},{showSidebarMobile:t.showSidebarMobile});case"TOGGLE_SECTION":return Object(s.a)(Object(s.a)({},e),{},{showSidebarMain:t.showSidebarMain,activeSection:t.activeSection});case"ADD_FILTER":return Object(s.a)(Object(s.a)({},e),{},{projectFilter:[].concat(Object(l.a)(e.projectFilter),[t.tag])});case"REMOVE_FILTER":return Object(s.a)(Object(s.a)({},e),{},{projectFilter:t.projectFilter});case"RESET_FILTER":return Object(s.a)(Object(s.a)({},e),{},{projectFilter:[]});default:return e}})),ce=function(){return Object(a.jsx)(p.a,{store:oe,children:Object(a.jsx)("div",{className:"AppWrap",children:Object(a.jsx)(X,{})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ce,{})}),document.getElementById("root")),se()}},[[40,1,2]]]);
//# sourceMappingURL=main.584e8244.chunk.js.map