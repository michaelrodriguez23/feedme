(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t.p+"static/media/me.f5df081a.png"},27:function(e,n,t){e.exports=t.p+"static/media/apple_amp.77f72554.wsz"},29:function(e,n,t){e.exports=t(83)},34:function(e,n,t){},36:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a,l=t(0),c=t.n(l),r=t(21),i=t.n(r),o=(t(34),t(4)),u=(t(36),t(1)),s=t(2);function m(){var e=s.a.p(a||(a=Object(u.a)(["\n    font-size: 5vw;\n    color: blue;\n    padding: 1em;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n  "])));return c.a.createElement("div",{id:"contact-container"},c.a.createElement(e,null," socialbug001 (at) yahoo (dot) com "))}var d,f,p=t(25),E=t.n(p);function b(){var e=0,n=" I am Michael! I explore the realms of web-development, augmented reality, film, and design.",t=80;function a(){if(!(e<n.length&&document.getElementById("bio")))return null;document.getElementById("bio").innerHTML+=n.charAt(e),e++,setTimeout(a,t),document.getElementById("me").style.bottom="0"}var r=s.a.p(d||(d=Object(u.a)(["\n    position: relative;\n    left: 1vw;\n    font-size: 4.4vw;\n    color: blue;\n    font-family: Arial, Helvetica, sans-serif;\n    width: 80vw;\n    height: 40vw;\n    padding: 1em;\n    margin: 0;\n  "]))),i=s.a.img(f||(f=Object(u.a)(["\n    position: absolute;\n    bottom: -40%;\n    right: 5%;\n    height: 40%;\n    transition: ease-out 0.4s;\n\n    &:hover {\n      filter: opacity(10%);\n    }\n  "]))),o=new Audio("./assets/music/sound-on.mp4");return Object(l.useEffect)(function(){a(),o.play()},100),c.a.createElement("div",null,c.a.createElement("audio",{className:"audio-element"},c.a.createElement("source",{src:"/feedme/assets/music/sound-on.mp4"})),c.a.createElement(r,{id:"bio"},"Hiii! ",c.a.createElement("hr",null)),c.a.createElement(i,{src:"/feedme"+E.a}))}var h,g=t(26),v=t.n(g),w=t(27),O=t.n(w),j=t(6);function y(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/feedme"}).REACT_APP_ARENA_KEY,n=(new j({accessToken:e}),Object(l.useState)([])),t=Object(o.a)(n,2),a=t[0];t[1];Object(l.useEffect)(function(){var e=new v.a({initialTracks:[{metaData:{artist:" Art of Noise",title:"Moments in Love (slowed + pitched)"},url:"/feedme./assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3"}],initialSkin:{url:"/feedme"+O.a}});e.renderWhenReady(document.getElementById("winamp-container")),e.appendTracks([{url:"./assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3"}])},[]),function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=e[n];e[n]=e[t],e[t]=a}}(a);var r=s.a.div(h||(h=Object(u.a)(["\n    position: absolute;\n    top: 50%;\n    left: 80%;\n    filter: drop-shadow(30px 10px 4px #4444dd);\n  "])));return c.a.createElement("div",null,c.a.createElement(r,{id:"winamp-container"}))}var k,x,A,_,N,T=t(12),L=new(t(6))({accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/feedme"}).REACT_APP_ARENA_KEY}),P=s.a.img(k||(k=Object(u.a)(["\n  width: 0vw;\n"]))),C=s.a.p(x||(x=Object(u.a)(["\n  font-size: 1em;\n  font-family: Helvetica, sans-serif;\n"]))),I=s.a.div(A||(A=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  cursor: pointer;\n"]))),R=s.a.div(_||(_=Object(u.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  gap: 1em;\n"]))),F=s.a.div(N||(N=Object(u.a)([""])));function B(){var e=Object(l.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(l.useState)([]),i=Object(o.a)(r,2),u=i[0],s=i[1],m=Object(l.useState)(1),d=Object(o.a)(m,2),f=d[0],p=d[1];function E(){console.log(f),f<t.length-1&&(p(function(e){return e+1}),s(function(e){return[].concat(Object(T.a)(e),[t[f+1]])}))}if(Object(l.useEffect)(function(){L.channel("photodrop").contents().then(function(e){a(e)}).then(function(){t.reverse(),s(function(e){return[].concat(Object(T.a)(e),[t[f+2]])})}).catch(function(e){return console.log(e)})},[]),u.length<1)return c.a.createElement(c.a.Fragment,null," loading... ");function b(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(R,null,u.slice(1).map(function(e,n){return c.a.createElement(F,null,c.a.createElement(P,{src:e.image?e.image.display.url:null,className:n%2==1?"grow":"shrink"}),c.a.createElement(C,null," ",e.title?e.title:null," "))})))}return 1==u.length&&E(),c.a.createElement(I,{onClick:E,photos:t},c.a.createElement(b,{gallery:u}," "))}var S,M,U,z=t(28),D=t(6),H=(s.a.div(S||(S=Object(u.a)(["\n  width: 40%;\n  object-fit: fill;\n  display: block;\n  margin: auto;\n"]))),s.a.p(M||(M=Object(u.a)(["\n  font-size: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n"]))));function Y(e){return c.a.createElement("ul",null,e.feed.slice(0).reverse().filter(function(e){return e.image}).map(function(e,n){return c.a.createElement(Q,{key:e.id},c.a.createElement("h1",null," ",n+1),c.a.createElement(z.a,{url:e.source?e.source.url:null,width:"450px",height:"450px",className:"myYoutube",display:"initial",position:"relative"}),c.a.createElement(H,null," ",e.title," "))}))}var K,V,J,W,q,G,Q=s.a.li(U||(U=Object(u.a)(["\n  text-decoration: none;\n  display: block;\n  padding: 2em;\n"])));function X(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/feedme"}).REACT_APP_ARENA_KEY,n=new D({accessToken:e}),t=Object(l.useState)([]),a=Object(o.a)(t,2),r=a[0];a[1];return Object(l.useEffect)(function(){n.channel("worksinprogress").contents({per:200}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},[]),c.a.createElement("div",null,c.a.createElement(Y,{feed:r}," "))}var Z=t(6),$=s.a.img(K||(K=Object(u.a)(["\n  width: 25vw;\n  object-fit: scale-down;\n  display: block;\n  margin: auto;\n"]))),ee=s.a.p(V||(V=Object(u.a)(["\n  font-size: 0.8em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n  text-decoration: none;\n"]))),ne=s.a.div(J||(J=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),te=s.a.div(W||(W=Object(u.a)(["\n  width: 100vw;\n  flex: 1;\n"]))),ae=s.a.div(q||(q=Object(u.a)(["\n  padding: 1em;\n"])));function le(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null,c.a.createElement("h1",null," The Weekly Digest"),c.a.createElement("h3",null,"Thought to share some of the articles + resources I find while surfing the web.")),c.a.createElement("ul",null,c.a.createElement(ne,null,e.feed.slice(0).reverse().filter(function(e){return e.image}).map(function(e,n){return c.a.createElement(te,null,c.a.createElement(oe,{key:e.id},c.a.createElement("a",{href:e.source?e.source.provider.url:null},c.a.createElement("h4",null," ",n+1),c.a.createElement($,{src:e.image?e.image.display.url:null}),c.a.createElement(ee,null," ",e.title," ")," ")))}))))}var ce,re,ie,oe=s.a.li(G||(G=Object(u.a)(["\n  text-decoration: none;\n  display: block;\n\n  padding: 2em;\n"])));function ue(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/feedme"}).REACT_APP_ARENA_KEY,n=new Z({accessToken:e}),t=Object(l.useState)([]),a=Object(o.a)(t,2),r=a[0],i=a[1];return Object(l.useEffect)(function(){n.channel("weeklydigest").contents({per:200}).then(function(e){return i(e)}).catch(function(e){return console.log(e)})},[]),c.a.createElement("div",null,c.a.createElement(le,{feed:r}," "))}function se(e){var n=s.a.ul(ce||(ce=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    gap: 3em;\n    width: 100vw;\n    background-color: white;\n    width: 90%;\n    padding-bottom: 3em;\n  "]))),t=s.a.li(re||(re=Object(u.a)(["\n    font-size: 3vw;\n    color: black;\n    list-style: none;\n  "]))),a=s.a.button(ie||(ie=Object(u.a)(["\n    color: violet;\n    padding: 1em;\n    border-color: aliceblue;\n    border-radius: 20em;\n    filter: drop-shadow(1vw 1vw 1vw #4444dd);\n    & :hover {\n      filter: blur(0.02em);\n      color: blue;\n      border-color: whitesmoke;\n    }\n  "])));function l(e){return c.a.createElement(t,{className:"li-chan"},e.channel)}var r={works:c.a.createElement(X,null),pics:c.a.createElement(B,null),listenings:c.a.createElement(y,null),reads:c.a.createElement(ue,null),about:c.a.createElement(b,null),contact:c.a.createElement(m,null)},i=function(n){return e.changeFeed(r[n.target.innerText])};return c.a.createElement(c.a.Fragment,null,c.a.createElement(n,null,[{id:1,channel:"works"},{id:2,channel:"pics"},{id:3,channel:"listenings"},{id:4,channel:" reads"},{id:5,channel:"about"},{id:6,channel:"contact"}].map(function(e,n){e.id;var t=e.channel;return c.a.createElement("div",null,c.a.createElement(a,{onClick:i},c.a.createElement(l,{channel:t})))})))}var me=function(){var e=Object(l.useState)(c.a.createElement(b,null)),n=Object(o.a)(e,2),t=n[0],a=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(se,{changeFeed:function(e){return a(e)}}),c.a.createElement(function(){return t},null))},de=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,84)).then(function(n){var t=n.getCLS,a=n.getFID,l=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),l(e),c(e),r(e)})};t(79).config(),i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(me,null)),document.getElementById("root")),de()}},[[29,3,2]]]);
//# sourceMappingURL=main.0c68ce26.chunk.js.map