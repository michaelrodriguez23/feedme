(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(81)},32:function(e,n,t){},34:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a,l,c,i=t(0),r=t.n(i),o=t(21),d=t.n(o),u=(t(32),t(1)),s=t(4),m=(t(34),t(2));function f(){var e=m.a.p(a||(a=Object(u.a)(["\n    font-size: 5vw;\n    color: blue;\n    padding: 1em;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n  "])));return r.a.createElement("div",{id:"contact-container"},r.a.createElement(e,null," socialbug001 (at) yahoo (dot) com "))}function p(){var e=0,n=" is a web developer,film and augmented reality artist. Who is interested in the internet as an emerging social space. ",t=80;function a(){if(!(e<n.length&&document.getElementById("bio")))return null;document.getElementById("bio").innerHTML+=n.charAt(e),e++,setTimeout(a,t),document.getElementById("me").style.bottom="0"}var o=m.a.p(l||(l=Object(u.a)(["\n    font-family: monospace !important;\n    position: relative;\n    left: 1vw;\n    font-size: 4.4vw;\n    color: blue;\n\n    width: 80vw;\n    height: 40vw;\n    padding: 1em;\n    margin: 0;\n\n    @media all and (max-width: 500px) {\n      font-size: 6vw;\n      padding: 0em;\n    }\n  "]))),d=m.a.img(c||(c=Object(u.a)(["\n    position: absolute;\n    bottom: -40%;\n    right: 5%;\n    height: 40%;\n    transition: ease-out 0.4s;\n\n    &:hover {\n      filter: opacity(10%);\n    }\n  "]))),s=new Audio("./assets/music/sound-on.mp4");return Object(i.useEffect)(function(){a(),s.play()},100),r.a.createElement("div",null,r.a.createElement("audio",{className:"audio-element"},r.a.createElement("source",{src:"/assets/music/sound-on.mp4"})),r.a.createElement(o,{id:"bio"},"Michael Elijah ",r.a.createElement("hr",null)),r.a.createElement(d,{id:"me",src:"/assets/img/me.png"}))}var b,h=t(25),g=t.n(h),E=t(6);function w(){new E({accessToken:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"});var e=Object(i.useState)([]),n=Object(s.a)(e,2),t=n[0];n[1];Object(i.useEffect)(function(){var e=new g.a({initialTracks:[{metaData:{artist:" Art of Noise",title:"Moments in Love (slowed + pitched)"},url:"/assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3"}],initialSkin:{url:"/assets/skins/apple_amp.wsz"}});e.renderWhenReady(document.getElementById("winamp-container")),e.appendTracks([{url:"/assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3"}])},[]),function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=e[n];e[n]=e[t],e[t]=a}}(t);var a=m.a.div(b||(b=Object(u.a)(["\n    position: absolute;\n    top: 50%;\n    left: 80%;\n    filter: drop-shadow(30px 10px 4px #4444dd);\n  "])));return r.a.createElement("div",null,r.a.createElement(a,{id:"winamp-container"}))}var v,j,O,x,y,k=t(12),A=new(t(6))({accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_ARENA:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"}).REACT_APP_ARENA_KEY}),T=m.a.img(v||(v=Object(u.a)(["\n  width: 30vw;\n\n  @media screen and (max-width: 500px) {\n    width: 80vw;\n  }\n"]))),N=m.a.p(j||(j=Object(u.a)(["\n  font-size: 4vw;\n  font-family: Helvetica, sans-serif;\n  text-align: center;\n  padding: 0;\n"]))),F=m.a.div(O||(O=Object(u.a)(["\n  height: 100vh;\n  width: 100vw;\n  cursor: pointer;\n"]))),S=m.a.div(x||(x=Object(u.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  gap: 2em;\n  padding: 2.5em;\n  @media all and (max-width: 500px) {\n    flex-direction: column;\n    flex-wrap: nowrap;\n    gap: 0;\n    padding: 0;\n  }\n"]))),z=m.a.div(y||(y=Object(u.a)([""])));function C(){var e=Object(i.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],l=Object(i.useState)([]),c=Object(s.a)(l,2),o=c[0],d=c[1],u=Object(i.useState)(1),m=Object(s.a)(u,2),f=m[0],p=m[1];function b(){console.log(f),f<t.length-1&&(p(function(e){return e+1}),d(function(e){return[].concat(Object(k.a)(e),[t[f+1]])}))}if(Object(i.useEffect)(function(){A.channel("photodrop").contents().then(function(e){a(e)}).then(function(){t.reverse(),d(function(e){return[].concat(Object(k.a)(e),[t[f+2]])})}).catch(function(e){return console.log(e)})},[]),o.length<1)return r.a.createElement(r.a.Fragment,null," loading... ");function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Click !"),r.a.createElement(S,null,o.slice(1).map(function(e,n){return r.a.createElement(z,null,r.a.createElement(T,{src:e.image?e.image.display.url:null,className:n%2==1?"grow":"shrink"}),r.a.createElement(N,null," ",e.title?e.title:null," "))})))}return 1==o.length&&b(),r.a.createElement(F,{onClick:b,photos:t},r.a.createElement(h,{gallery:o}," "))}var I,L,M,_=t(26),B=t(6),P=(m.a.div(I||(I=Object(u.a)(["\n  width: 40%;\n  object-fit: fill;\n  display: block;\n  margin: auto;\n"]))),m.a.p(L||(L=Object(u.a)(["\n  font-size: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n"]))));function R(e){return r.a.createElement("ul",null,e.feed.slice(0).reverse().filter(function(e){return e.image}).map(function(e,n){return r.a.createElement(K,{key:e.id},r.a.createElement("h1",null," ",n+1),r.a.createElement(_.a,{url:e.source?e.source.url:null,width:"450px",height:"450px",className:"myYoutube",display:"initial",position:"relative"}),r.a.createElement(P,null," ",e.title," "))}))}var H,D,W,J,U,Y,K=m.a.li(M||(M=Object(u.a)(["\n  text-decoration: none;\n  display: block;\n  padding: 2em;\n"])));function V(){var e=new B({accessToken:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"}),n=Object(i.useState)([]),t=Object(s.a)(n,2),a=t[0];t[1];return Object(i.useEffect)(function(){e.channel("worksinprogress").contents({per:200}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",null,r.a.createElement(R,{feed:a}," "))}var q=t(6),G=m.a.img(H||(H=Object(u.a)(["\n  width: 25vw;\n  object-fit: scale-down;\n  display: block;\n  margin: auto;\n"]))),Q=m.a.p(D||(D=Object(u.a)(["\n  font-size: 0.8em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n  text-decoration: none;\n"]))),X=m.a.div(W||(W=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),Z=m.a.div(J||(J=Object(u.a)(["\n  width: 100vw;\n  flex: 1;\n"]))),$=m.a.div(U||(U=Object(u.a)(["\n  padding: 1em;\n"])));function ee(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null,r.a.createElement("h1",null," The Weekly Digest"),r.a.createElement("h3",null,"Thought to share some of the articles + resources I find while surfing the web.")),r.a.createElement("ul",null,r.a.createElement(X,null,e.feed.slice(0).reverse().filter(function(e){return e.image}).map(function(e,n){return r.a.createElement(Z,null,r.a.createElement(ce,{key:e.id},r.a.createElement("a",{href:e.source?e.source.provider.url:null},r.a.createElement("h4",null," ",n+1),r.a.createElement(G,{src:e.image?e.image.display.url:null}),r.a.createElement(Q,null," ",e.title," ")," ")))}))))}var ne,te,ae,le,ce=m.a.li(Y||(Y=Object(u.a)(["\n  text-decoration: none;\n  display: block;\n\n  padding: 2em;\n"])));function ie(){var e=new q({accessToken:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"}),n=Object(i.useState)([]),t=Object(s.a)(n,2),a=t[0],l=t[1];return Object(i.useEffect)(function(){e.channel("weeklydigest").contents({per:200}).then(function(e){return l(e)}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",null,r.a.createElement(ee,{feed:a}," "))}function re(e){var n=m.a.ul(ne||(ne=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    gap: 3em;\n    background-color: white;\n    width: 100%;\n    padding-bottom: 3em;\n\n    @media all and (max-width: 500px) {\n      gap: 1.2em;\n      padding-left: 0.2em;\n      padding-right: 0.2em;\n      width: 100%;\n      padding-bottom: 3em;\n    }\n  "]))),t=m.a.li(te||(te=Object(u.a)(["\n    font-size: 3vw;\n    color: black;\n    list-style: none;\n  "]))),a=m.a.button(ae||(ae=Object(u.a)(["\n    color: violet;\n    padding: 2em;\n    border-color: aliceblue;\n    border-radius: 20em;\n    filter: drop-shadow(1vw 1vw 1vw #4444dd);\n\n    @media all and (max-width: 500px) {\n      padding: 0.5em;\n      font-size: 1.5em;\n    }\n    & :hover {\n      filter: blur(0.02em);\n      color: blue;\n      border-color: whitesmoke;\n    }\n  "])));function l(e){return r.a.createElement(t,{className:"li-chan"},e.channel)}var c={works:r.a.createElement(V,null),pics:r.a.createElement(C,null),listenings:r.a.createElement(w,null),reads:r.a.createElement(ie,null),about:r.a.createElement(p,null),contact:r.a.createElement(f,null)},i=function(n){return e.changeFeed(c[n.target.innerText])};return r.a.createElement(r.a.Fragment,null,r.a.createElement(n,null,[{id:1,channel:"works"},{id:2,channel:"pics"},{id:3,channel:"listenings"},{id:4,channel:" reads"},{id:5,channel:"about"},{id:6,channel:"contact"}].map(function(e,n){e.id;var t=e.channel;return r.a.createElement("div",null,r.a.createElement(a,{onClick:i},r.a.createElement(l,{channel:t})))})))}var oe=function(){var e=Object(i.useState)(r.a.createElement(p,null)),n=Object(s.a)(e,2),t=n[0],a=n[1],l=m.a.div(le||(le=Object(u.a)(["\n    @media screen and (max-width: 450px) {\n      padding-left: 1em;\n      padding-right: 1em;\n    }\n  "])));return r.a.createElement(l,null,r.a.createElement(re,{changeFeed:function(e){return a(e)}}),r.a.createElement(function(){return t},null))},de=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,82)).then(function(n){var t=n.getCLS,a=n.getFID,l=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),l(e),c(e),i(e)})};t(77).config(),d.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),de()}},[[27,3,2]]]);
//# sourceMappingURL=main.6d3abeec.chunk.js.map