(this["webpackJsonpsite-pessoal"]=this["webpackJsonpsite-pessoal"]||[]).push([[0],{38:function(e,n,t){e.exports=t(65)},65:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(27),l=t.n(o),i=t(36),c=t(4),s=t(13),u=t.n(s),m=t(28),f=t(29),p=t(30),d=t(35),b=t(37),h=t(10),g=t(11),x=t.n(g),E=x.a.create({baseURL:"http://api.github.com"}),v=x.a.create({baseURL:"https://api.bitbucket.org/2.0/"}),y=t(7),k=t(8);function w(){var e=Object(y.a)([""]);return w=function(){return e},e}function j(){var e=Object(y.a)(["\n  height: 100%;\n  max-height: 300%;\n  background: linear-gradient(0deg, #0c8589, #02f6fe);\n\n  display: flex;\n  justify-content: center;\n\n  header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    img {\n      width: 30%;\n      border-radius: 50%;\n\n      &:hover {\n        border-radius: 20%;\n      }\n    }\n\n    h1 {\n      color: #fff;\n    }\n\n    ul {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      li {\n        padding: 10px;\n\n        a {\n          color: #fff;\n          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);\n\n          &:hover {\n            border-bottom: 2px solid #ae12de;\n          }\n        }\n      }\n    }\n  }\n"]);return j=function(){return e},e}var O=k.b.div(j()),R=k.b.div(w()),z=function(e){Object(b.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={profile:"",repositories:[]},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var n,t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="felixstenian",e.next=3,E.get("/users/".concat(n));case 3:return t=e.sent,e.next=6,v.get("/repositories/".concat(n));case 6:a=e.sent,this.setState({profile:t.data,repositories:a.data.values});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.profile,t=e.repositories;return console.log(n),console.log(t),r.a.createElement(O,null,r.a.createElement("header",null,r.a.createElement("img",{src:n.avatar_url,alt:"Felix"}),r.a.createElement("h1",null,n.name),r.a.createElement("strong",null,"Developer Web"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/felixstenian",target:"_black"},r.a.createElement(h.b,{size:22}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/felixstenian",target:"_black"},r.a.createElement(h.a,{size:22}))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:felixstenian@gmail.com.br",target:"_black"},r.a.createElement(h.c,{size:22}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://wa.me/5582988507881?text=Ol\xe1%20Felix !",target:"_black"},r.a.createElement(h.d,{size:22}))))),r.a.createElement(R,null))}}]),t}(a.Component);function _(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/site",exact:!0,component:z})))}function A(){var e=Object(y.a)(["\n  /** Importando fonte */\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  /** Reset */\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  /** Ocupando altura m\xe1xima da tela */\n\n  html, body, #root {\n    height: 100%\n  }\n\n  /** Deixando fontes mais definidas */\n\n  body {\n    \n    -webkit-font-smoothing: antialiased;\n  }\n\n  /** Adicionando fonte */\n\n  body, input, button {\n    font-family: \"Roboto\", sans-serif;\n    font-size: 14px;\n  }\n\n  /** Resetando links */\n\n  a {\n    text-decoration: none;\n  }\n\n  /** Resetando listas */\n\n  ul {\n    list-style: none;\n  }\n\n  /** Alterando cursor do mouse */\n\n  button {\n    cursor: pointer;\n  }\n\n"]);return A=function(){return e},e}var D=Object(k.a)(A());var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(D,null))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.27957485.chunk.js.map