(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),r=n(16),l=n(3),a=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===o&&a.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},u=n(5),h=n(23),d=[{index:!0,label:"Borislav Grigorov",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Certifications",path:"/certifications"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,172,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return r(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return r(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return r(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Borislav Grigorov"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:bsgrigorov@gmail.com",children:"bsgrigorov@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Bobby. I am a passionate and curious person. I studied CS and Physics at ",Object(c.jsx)("a",{href:"https://www.ubc.ca/",children:"UBC"}),". I presently work at ",Object(c.jsx)("a",{href:"https://www.coinbase.com/",children:"Coinbase"})," as a blockchain engineer and live in Newport Beach, CA."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Borislav Grigorov ",Object(c.jsx)(u.b,{to:"/",children:"bgrigorov.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(r.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(r.a,{titleTemplate:"%s | Borislav Grigorov",defaultTitle:"Borislav Grigorov",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Borislav Grigorov's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),r=n(30),l=n(31),a=n(32),s=n(33),o=n(34),j=n(35),b=[{link:"https://github.com/bsgrigorov",label:"Github",icon:r.faGithub},{link:"https://facebook.com/bsgrigorov",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/bsgrigorov/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/bgrigorov",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://twitter.com/bsgrigorov",label:"Twitter",icon:o.faTwitter},{link:"mailto:bsgrigorov@gmail.com",label:"Email",icon:j.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),l=n(15),a=n(5),s=n(3),o=n(21),j=(n(48),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(9)]).then(n.bind(null,168))}))),b=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,169))})),u=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,170))})),h=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,171))})),d=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,173))})),O=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,175))})),m=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,176))})),x=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(13)]).then(n.bind(null,174))})),p=function(){return Object(c.jsx)(a.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:j}),Object(c.jsx)(s.a,{path:"/projects",component:m}),Object(c.jsx)(s.a,{path:"/stats",component:x}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/certifications",component:O}),Object(c.jsx)(s.a,{path:"/projects",component:m}),Object(c.jsx)(s.a,{path:"/resume",component:d}),Object(c.jsx)(s.a,{component:h,status:404})]})})})},f=function(){return Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})})},g=document.getElementById("root");g.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(f,{}),g):Object(l.render)(Object(c.jsx)(f,{}),g)}},[[49,1,3]]]);
//# sourceMappingURL=main.2ed28838.chunk.js.map