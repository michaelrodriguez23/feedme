(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(n,e,t){n.exports=t(95)},44:function(n,e,t){},46:function(n,e,t){},95:function(n,e,t){"use strict";t.r(e);var a,i,l,o,c,r=t(1),d=t.n(r),m=t(32),u=t.n(m),s=(t(44),t(2)),p=(t(46),t(12)),f=t(0),g=t(3);function h(){var n=g.a.p(a||(a=Object(s.a)(["\n    display: block;\n    font-size: 4vh;\n    color: lightcoral;\n    font-family: Arial, Helvetica, sans-serif;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    width: 100%;\n  "]))),e=g.a.div(i||(i=Object(s.a)(["\n    background-color: white !important;\n    height: 100vh;\n  "])));return d.a.createElement(e,null,d.a.createElement(n,null," socialbug001 (at) yahoo (dot) com "))}function b(){var n=0,e=" is a web developer,film and augmented reality artist. Who is interested in the internet as an emerging social space. ",t=80;function a(){if(!(n<e.length&&document.getElementById("bio")))return null;document.getElementById("bio").innerHTML+=e.charAt(n),n++,setTimeout(a,t),document.getElementById("me").style.bottom="0"}var i=g.a.div(l||(l=Object(s.a)(["\n    background-color: white;\n    height: 100vh;\n  "]))),m=g.a.p(o||(o=Object(s.a)(["\n    font-family: monospace !important;\n    position: relative;\n    left: 1vw;\n    font-size: 4.4vw;\n    color: lightcoral;\n    width: 80vw;\n    height: 100vw;\n    padding: 1em;\n    margin: 0;\n\n    @media all and (max-width: 500px) {\n      font-size: 6vw;\n      padding: 0em;\n    }\n  "]))),u=g.a.img(c||(c=Object(s.a)(["\n    position: absolute;\n    bottom: -40%;\n    right: 5%;\n    height: 50%;\n    transition: ease-out 0.4s;\n\n    &:hover {\n      filter: opacity(10%);\n    }\n  "]))),p=new Audio("./assets/music/sound-on.mp4");return Object(r.useEffect)(function(){a(),p.play()},100),d.a.createElement(i,null,d.a.createElement("audio",{className:"audio-element"},d.a.createElement("source",{src:"/assets/music/sound-on.mp4"})),d.a.createElement(m,{id:"bio"},"Michael Elijah ",d.a.createElement("hr",null)),d.a.createElement(u,{id:"me",src:"/assets/img/me.png"}))}var w=t(9);t(36),t(17);var v,E,x,y,j,O;t(23),new(t(17))({accessToken:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ARENA_KEY}),g.a.img(v||(v=Object(s.a)(["\n  display: block;\n  width: 5vw;\n  margin: auto;\n  filter: opacity(50%);\n  @media screen and (max-width: 500px) {\n    width: 50vw;\n  }\n"]))),g.a.img(E||(E=Object(s.a)(["\n  max-height: 100%;\n  min-width: 100%;\n  object-fit: contain;\n  vertical-align: bottom;\n  width: 10vw;\n  margin: 1em;\n  flex-grow: 1;\n\n  @media screen and (max-width: 500px) {\n    height: 50vh;\n  }\n"]))),g.a.p(x||(x=Object(s.a)(["\n  font-size: 1vmin;\n  font-family: Helvetica, sans-serif;\n  text-align: center;\n  padding: 0;\n"]))),g.a.div(y||(y=Object(s.a)(["\n  flex-grow: 1;\n"]))),g.a.div(j||(j=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  @media all and (max-width: 500px) {\n    flex-direction: column;\n    flex-wrap: nowrap;\n    gap: 0;\n    padding: 0;\n  }\n"]))),g.a.div(O||(O=Object(s.a)([""])));var k,A,N,_=t(37),R=t(17),z=g.a.div(k||(k=Object(s.a)(["\n  object-fit: fill;\n  display: block;\n  margin: auto;\n  background-color: white;\n  height: 100vh;\n"]))),P=g.a.p(A||(A=Object(s.a)(["\n  font-size: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n"])));function T(n){return d.a.createElement(z,null,d.a.createElement("ul",null,n.feed.slice(0).reverse().filter(function(n){return n.image}).map(function(n,e){return d.a.createElement(H,{key:n.id},d.a.createElement("h1",null," ",e+1),d.a.createElement(_.a,{url:n.source?n.source.url:null,width:"450px",height:"450px",className:"myYoutube",display:"initial",position:"relative"}),d.a.createElement(P,null," ",n.title," "))})))}var C,I,L,B,U,D,F,H=g.a.li(N||(N=Object(s.a)(["\n  text-decoration: none;\n  display: block;\n  padding: 2em;\n"])));function M(){var n=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ARENA,e=new R({accessToken:n}),t=Object(r.useState)([]),a=Object(w.a)(t,2),i=a[0];a[1];return Object(r.useEffect)(function(){e.channel("worksinprogress").contents({per:200}).then(function(n){return console.log(n)}).catch(function(n){return console.log(n)})},[]),d.a.createElement("div",null,d.a.createElement(T,{feed:i}," "))}var S=t(17),V=g.a.img(C||(C=Object(s.a)(["\n  width: 30vw;\n  height: 30vw;\n  object-fit: contain;\n  display: block;\n  margin: auto;\n  border: 0.2em solid lightcoral;\n  background-color: black;\n  @media all and (max-width: 500px) {\n    width: 40vw;\n    height: 40vw;\n    border: 0.2em solid white;\n  }\n"]))),W=g.a.p(I||(I=Object(s.a)(["\n  font-size: 1.5;\n\n  color: lightsteelblue;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n  text-decoration: none;\n  padding: 1em;\n  @media all and (max-width: 500px) {\n    font-size: 1em;\n  }\n"]))),J=g.a.div(L||(L=Object(s.a)(["\n  padding-top: 5em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]))),Y=g.a.div(B||(B=Object(s.a)(["\n  width: 100vw;\n"]))),K=g.a.div(U||(U=Object(s.a)(["\n  color: lightsteelblue;\n  font-size: 2em;\n  font-family: monospace;\n  position: fixed;\n  width: 20vw;\n  padding-left: 2em;\n"]))),q=g.a.div(D||(D=Object(s.a)(["\n  display: block;\n  width: 100%;\n  height: 700px;\n  overflow-y: auto;\n  max-height: 1000px;\n  background-color: white;\n"])));function G(n){return d.a.createElement(q,null,d.a.createElement(K,null,d.a.createElement("p",null," The Weekly Digest [Random things I read on the web] ")),d.a.createElement("ul",null,d.a.createElement(J,null,n.feed.slice(0).reverse().filter(function(n){return n.image}).map(function(n,e){return d.a.createElement(Y,null,d.a.createElement(Q,{key:n.id},d.a.createElement("a",{href:n.source?n.source.url:null},d.a.createElement(V,{src:n.image?n.image.display.url:null}),d.a.createElement(W,null," ",n.title," ")," ")))}))))}var Q=g.a.li(F||(F=Object(s.a)(["\n  text-decoration: none;\n  display: block;\n\n  padding: 2em;\n"])));function X(){var n=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ARENA,e=new S({accessToken:n}),t=Object(r.useState)([]),a=Object(w.a)(t,2),i=a[0],l=a[1];return Object(r.useEffect)(function(){e.channel("weeklydigest").contents({per:200}).then(function(n){return l(n)}).catch(function(n){return console.log(n)})},[]),d.a.createElement("div",null,d.a.createElement(G,{feed:i}," "))}var Z,$,nn,en,tn=t(15);function an(n){var e=Object(r.useRef)(null);Object(r.useEffect)(function(){console.log(e),tn.a.set(".nav-btn",{x:0,y:350,opacity:0}),tn.a.to(".nav-btn",{stagger:.2,rotation:360,y:0,duration:1,opacity:.9,yoyo:!0})});var t=g.a.ul(Z||(Z=Object(s.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    gap: 3em;\n    width: 100%;\n    padding-top: 1em;\n    padding-bottom: 2em;\n    justify-content: center;\n    background-color: white;\n    z-index: -5;\n    @media all and (max-width: 500px) {\n      gap: 1em;\n      padding-left: 0;\n      padding-right: 0;\n      padding-bottom: 2em;\n    }\n  "]))),a=g.a.li($||($=Object(s.a)(["\n    font-size: 4vw;\n    color: black;\n    list-style: none;\n  "]))),i=g.a.button(nn||(nn=Object(s.a)(["\n    padding: 1.2em;\n    border-color: lightcoral;\n    border-radius: 20em;\n    filter: drop-shadow(1vw 1vw 1vw limegreen);\n    background-color: white;\n\n    @media all and (max-width: 500px) {\n      /* padding: 0.5em;\n      font-size: 1.5em;\n      gap: 0; */\n    }\n    & :hover {\n      filter: blur(0.02em);\n      color: yellowgreen;\n      border-color: whitesmoke;\n    }\n  "])));function l(n){return d.a.createElement(a,{className:"li-chan"},n.channel)}return d.a.createElement(d.a.Fragment,null,d.a.createElement(t,null,[{id:1,channel:"works"},{id:4,channel:"mood"},{id:5,channel:"about"},{id:6,channel:"contact"}].map(function(n,t){n.id;var a=n.channel;return d.a.createElement("div",null,d.a.createElement(p.b,{to:"/"+a},d.a.createElement(i,{ref:function(n){return e=n},className:"nav-btn"},d.a.createElement(l,{channel:a}))))})))}var ln=function(){var n=Object(r.useRef)(null);return console.log(n),g.a.div(en||(en=Object(s.a)(["\n    @media screen and (max-width: 450px) {\n      padding-left: 1em;\n      padding-right: 1em;\n    }\n  "]))),console.log("yer"),tn.a.to(".nav-btn",{rotation:27,x:100,duration:1}),d.a.createElement(p.a,null,d.a.createElement(an,null),d.a.createElement(f.a,{path:"/About",component:b}),d.a.createElement(f.a,{path:"/Contact",component:h}),d.a.createElement(f.a,{path:"/Mood",component:X}),d.a.createElement(f.a,{path:"/Works",component:M}))},on=function(n){n&&n instanceof Function&&t.e(1).then(t.bind(null,96)).then(function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,l=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),l(n),o(n)})};t(91).config(),u.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(ln,null)),document.getElementById("root")),on()}},[[39,3,2]]]);
//# sourceMappingURL=main.e5763445.chunk.js.map