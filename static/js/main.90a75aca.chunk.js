(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{69:function(n,e,t){},97:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),c=t.n(a),u=t(26),i=t.n(u),o=(t(69),t(30)),s=t(7),b=t(5),j=t(6),l=t(18),f=t(119),p=t(122),d=t(120),h=t(117),O=t(57),x=t.n(O),m=new Map([["year",8760],["month",720],["week",168],["day",24],["hour",1]]),v=/(\d{1,})\s(\w*[^s])s?$/,g=function(n){return""!==n&&Number.isInteger(Number(n))},w=function(n,e){if(function(n){return!Number.isNaN(Number(n.MGLT))}(e)&&function(n){return v.test(n.consumables)&&m.has(n.consumables.match(v)[2])}(e)){var t=function(n){var e=n.match(v),t=Object(l.a)(e,3),r=t[1],a=t[2],c=m.get(a);return parseInt(r,10)*c}(e.consumables);return Math.ceil(n/e.MGLT/t)-1}return null};function C(){var n=Object(b.a)(["\n  height: 28px;\n  margin: 4px;\n"]);return C=function(){return n},n}function y(){var n=Object(b.a)(["\n  margin-left: 1em;\n  flex: 1;\n"]);return y=function(){return n},n}function k(){var n=Object(b.a)(["\n  margin: 2em 0;\n  padding: 2px 4px;\n  display: flex;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  max-width: 500px;\n"]);return k=function(){return n},n}function S(){var n=Object(b.a)(["\n  padding: 10px;\n"]);return S=function(){return n},n}var M=Object(j.a)(h.a)(S()),N=Object(j.a)(f.a)(k()),F=Object(j.a)(p.a)(y()),P=Object(j.a)(d.a)(C());var z=function(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],c=e[1],u=Object(s.f)(),i=Object(a.useCallback)((function(n){var e=n.target.value;(""===e||g(e))&&c(e)}),[c]),o=Object(a.useCallback)((function(){g(t)&&u.push("/results?distance=".concat(t))}),[t,u]);return Object(r.jsxs)(N,{children:[Object(r.jsx)(F,{value:t,onChange:i,placeholder:"Distance in MGLT",inputProps:{"aria-label":"calculate number of stops"}}),Object(r.jsx)(M,{type:"submit","aria-label":"calculate stops",onClick:o,children:Object(r.jsx)(x.a,{})}),Object(r.jsx)(P,{orientation:"vertical"})]})};function D(){var n=Object(b.a)(["\n  border-top: 1px solid #F2E8CF;\n  margin: 2em 0;\n"]);return D=function(){return n},n}function E(){var n=Object(b.a)(["\n  font-size: 2em;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #FDC500;\n"]);return E=function(){return n},n}function L(){var n=Object(b.a)(["\n  position: absolute;\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  top: -1.5em;\n  height: 100%;\n  width: 100%;\n  background-color: #3365A0;\n  margin: 0 5vw;\n  padding: 2em 1.5em;\n  border-radius: 10px;\n  text-align: center;\n\n  p {\n    color: #F2E8CF;\n  }\n"]);return L=function(){return n},n}function T(){var n=Object(b.a)(["\n  position: relative;\n  height: 600px;\n  width: 90vw;\n"]);return T=function(){return n},n}var G=j.a.div(T()),I=j.a.div(L()),A=j.a.h1(E()),J=j.a.hr(D());var R=function(){return Object(r.jsx)(G,{children:Object(r.jsxs)(I,{children:[Object(r.jsx)(A,{children:"Spacetrip Stops Calculator"}),Object(r.jsx)(J,{}),Object(r.jsx)("p",{children:"Do you have a business meeting in Tatooine and have no ideia how many stops you're gonna have to make until you get there? Perhaps a small vacation in Naboo? No problem, just type in the number of Megalights of your trip and search for you ship model below to find out!"}),Object(r.jsx)(z,{})]})})},U=t.p+"static/media/ship.cdfcada7.jpg";function B(){var n=Object(b.a)(["\n  background: url(",") no-repeat fixed;\n  background-position: 50% -250px;\n  background-size: cover;\n  width: 100vw;\n  height: 300px;\n"]);return B=function(){return n},n}var $=j.a.div(B(),U);var q=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)($,{}),Object(r.jsx)(R,{})]})},H=t(121);function K(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return K=function(){return n},n}var Q=j.a.div(K()),V=function(n){var e=n.firstColumn,t=n.secondColumn;return Object(r.jsxs)(Q,{children:[Object(r.jsx)("span",{children:e}),Object(r.jsx)("span",{children:t})]})};function W(){var n=Object(b.a)(["\n  border-top: 1px solid rgba(51, 101, 160, 0.3);\n  margin: 1em 0;\n  margin-left: 0;\n  margin-right: 0;\n"]);return W=function(){return n},n}var X=j.a.hr(W()),Y=function(n){return function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(X,{}),Object(r.jsx)(V,{firstColumn:e.name,secondColumn:w(n,e)||"Unknown"})]},e.model)}},Z=t(23),_=t.n(Z),nn=t(33),en=t(58),tn=t.n(en),rn=function(n){return"https://swapi.dev/api/starships/?page=".concat(n)},an=function(){var n=Object(nn.a)(_.a.mark((function n(e){var t,r,a,c,u;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=rn(e),n.next=3,tn.a.get(t);case 3:return r=n.sent,a=r.data,c=a.count,u=a.results,n.abrupt("return",{count:c,results:u});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),cn=Object(a.createContext)();var un=function(n){var e=n.children,t=Object(a.useRef)(!1),c=Object(a.useState)(1),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(a.useState)([]),b=Object(l.a)(s,2),j=b[0],f=b[1],p=Object(a.useCallback)(function(){var n=Object(nn.a)(_.a.mark((function n(e){var r,a,c,u;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.current=!0,n.next=3,an(e);case 3:return r=n.sent,a=r.results,c=r.count,(u=j.slice())[e-1]=a,f(u),o(Math.ceil(c/10)),t.current=!1,n.abrupt("return",a);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[j]),d=Object(a.useCallback)(function(){var n=Object(nn.a)(_.a.mark((function n(e){var r;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.current){n.next=2;break}return n.abrupt("return",[]);case 2:if(!j[e-1]){n.next=4;break}return n.abrupt("return",j[e-1]);case 4:return n.next=6,p(e);case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[p,j]);return Object(r.jsx)(cn.Provider,{value:{getShipsPage:d,pageCount:i},children:e})},on=function(){return Object(a.useContext)(cn)};function sn(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin: 2em 0;\n"]);return sn=function(){return n},n}function bn(){var n=Object(b.a)(["\n  font-size: 1em;\n  font-weight: 900;\n  text-align: left;\n"]);return bn=function(){return n},n}function jn(){var n=Object(b.a)(["\n  font-size: 0.6em;\n  font-weight: 900;\n  text-transform: uppercase;\n  background-color: #3365A0;\n  color: #FDC500;\n  padding: 2em;\n\n  h1 {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: #FDC500;\n  }\n"]);return jn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  padding: 2em 1.5em;\n\n  p {\n    margin-bottom: 3em;\n  }\n"]);return ln=function(){return n},n}function fn(){var n=Object(b.a)(["\n  text-align: center;\n"]);return fn=function(){return n},n}var pn=j.a.div(fn()),dn=j.a.section(ln()),hn=j.a.header(jn()),On=j.a.h1(bn()),xn=j.a.div(sn());var mn=function(){var n=Object(s.g)(),e=Object(a.useState)(0),t=Object(l.a)(e,2),c=t[0],u=t[1],i=on(),b=i.getShipsPage,j=i.pageCount,f=Object(a.useState)([]),p=Object(l.a)(f,2),d=p[0],h=p[1],O=Object(a.useState)(1),x=Object(l.a)(O,2),m=x[0],v=x[1];return Object(a.useEffect)((function(){var e=new URLSearchParams(n.search);u(e.get("distance")),b(m).then(h)}),[n,m,b]),Object(r.jsxs)(pn,{children:[Object(r.jsx)(hn,{children:Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("h1",{children:"Spacetrip Stops Calculator"})})}),Object(r.jsxs)(dn,{children:[Object(r.jsxs)(On,{children:[c," ","Megalights"]}),Object(r.jsx)("p",{children:"Find out the number of stops for your ship"}),Object(r.jsx)(V,{firstColumn:"Spaceship",secondColumn:"# of Stops"}),d.map(Y(c)),Object(r.jsx)(xn,{children:Object(r.jsx)(H.a,{count:j,page:Number(m),onChange:function(n,e){v(e)}})})]})]})};var vn=function(){return Object(r.jsx)(un,{children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/results",children:Object(r.jsx)(mn,{})}),Object(r.jsx)(s.a,{path:"/",children:Object(r.jsx)(q,{})})]})})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(vn,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.90a75aca.chunk.js.map