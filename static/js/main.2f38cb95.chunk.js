(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(81)},32:function(e,n,t){},34:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a,l,c,r=t(0),i=t.n(r),o=t(21),u=t.n(o),s=(t(32),t(4)),d=(t(34),t(1)),m=t(2);function f(){var e=m.a.p(a||(a=Object(d.a)(["\n    font-size: 5vw;\n    color: blue;\n    padding: 1em;\n    background-color: white;\n    font-family: Arial, Helvetica, sans-serif;\n  "])));return i.a.createElement("div",{id:"contact-container"},i.a.createElement(e,null," socialbug001 (at) yahoo (dot) com "))}function b(){var e=0,n=" I am Michael! I explore the realms of web-development, augmented reality, film, and design.",t=80;function a(){if(!(e<n.length&&document.getElementById("bio")))return null;document.getElementById("bio").innerHTML+=n.charAt(e),e++,setTimeout(a,t),document.getElementById("me").style.bottom="0"}var o=m.a.p(l||(l=Object(d.a)(["\n    position: relative;\n    left: 1vw;\n    font-size: 4.4vw;\n    color: blue;\n    font-family: Arial, Helvetica, sans-serif;\n    width: 80vw;\n    height: 40vw;\n    padding: 1em;\n    margin: 0;\n  "]))),u=m.a.img(c||(c=Object(d.a)(["\n    position: absolute;\n    bottom: -40%;\n    right: 5%;\n    height: 40%;\n    transition: ease-out 0.4s;\n\n    &:hover {\n      filter: opacity(10%);\n    }\n  "]))),s=new Audio("./assets/music/sound-on.mp4");return Object(r.useEffect)(function(){a(),s.play()},100),i.a.createElement("div",null,i.a.createElement("audio",{className:"audio-element"},i.a.createElement("source",{src:"/feedme/assets/music/sound-on.mp4"})),i.a.createElement(o,{id:"bio"},"Hiii! ",i.a.createElement("hr",null)),i.a.createElement(u,{id:"me",src:"/feedme/assets/img/me.png"}))}var p,h=t(25),g=t.n(h),E=t(6);function v(){new E({accessToken:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"});var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0];n[1];Object(r.useEffect)(function(){var e=new g.a({initialTracks:[{metaData:{artist:" Art of Noise",title:"Moments in Love (slowed + pitched)"},url:"/feedme/assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3"}],initialSkin:{url:"/feedme/assets/skins/apple_amp.wsz"}});e.renderWhenReady(document.getElementById("winamp-container")),e.appendTracks([{url:"/feedme/assets/music/Moment in Love - Art of Noise (slowed + pitched).mp3"}])},[]),function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),a=e[n];e[n]=e[t],e[t]=a}}(t);var a=m.a.div(p||(p=Object(d.a)(["\n    position: absolute;\n    top: 50%;\n    left: 80%;\n    filter: drop-shadow(30px 10px 4px #4444dd);\n  "])));return i.a.createElement("div",null,i.a.createElement(a,{id:"winamp-container"}))}var w,j,O,y,k,x=t(12),A=new(t(6))({accessToken:Object({NODE_ENV:"production",PUBLIC_URL:"/feedme",REACT_APP_ARENA:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"}).REACT_APP_ARENA_KEY}),T=m.a.img(w||(w=Object(d.a)(["\n  width: 0vw;\n"]))),F=m.a.p(j||(j=Object(d.a)(["\n  font-size: 1em;\n  font-family: Helvetica, sans-serif;\n"]))),N=m.a.div(O||(O=Object(d.a)(["\n  height: 100vh;\n  width: 100vw;\n  cursor: pointer;\n"]))),I=m.a.div(y||(y=Object(d.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n  flex-wrap: wrap;\n  gap: 1em;\n"]))),S=m.a.div(k||(k=Object(d.a)([""])));function C(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],l=Object(r.useState)([]),c=Object(s.a)(l,2),o=c[0],u=c[1],d=Object(r.useState)(1),m=Object(s.a)(d,2),f=m[0],b=m[1];function p(){console.log(f),f<t.length-1&&(b(function(e){return e+1}),u(function(e){return[].concat(Object(x.a)(e),[t[f+1]])}))}if(Object(r.useEffect)(function(){A.channel("photodrop").contents().then(function(e){a(e)}).then(function(){t.reverse(),u(function(e){return[].concat(Object(x.a)(e),[t[f+2]])})}).catch(function(e){return console.log(e)})},[]),o.length<1)return i.a.createElement(i.a.Fragment,null," loading... ");function h(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," Click Around :)"),i.a.createElement(I,null,o.slice(1).map(function(e,n){return i.a.createElement(S,null,i.a.createElement(T,{src:e.image?e.image.display.url:null,className:n%2==1?"grow":"shrink"}),i.a.createElement(F,null," ",e.title?e.title:null," "))})))}return 1==o.length&&p(),i.a.createElement(N,{onClick:p,photos:t},i.a.createElement(h,{gallery:o}," "))}var L,M,_,z=t(26),B=t(6),H=(m.a.div(L||(L=Object(d.a)(["\n  width: 40%;\n  object-fit: fill;\n  display: block;\n  margin: auto;\n"]))),m.a.p(M||(M=Object(d.a)(["\n  font-size: 1em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n"]))));function P(e){return i.a.createElement("ul",null,e.feed.slice(0).reverse().filter(function(e){return e.image}).map(function(e,n){return i.a.createElement(K,{key:e.id},i.a.createElement("h1",null," ",n+1),i.a.createElement(z.a,{url:e.source?e.source.url:null,width:"450px",height:"450px",className:"myYoutube",display:"initial",position:"relative"}),i.a.createElement(H,null," ",e.title," "))}))}var R,D,J,U,W,Y,K=m.a.li(_||(_=Object(d.a)(["\n  text-decoration: none;\n  display: block;\n  padding: 2em;\n"])));function V(){var e=new B({accessToken:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"}),n=Object(r.useState)([]),t=Object(s.a)(n,2),a=t[0];t[1];return Object(r.useEffect)(function(){e.channel("worksinprogress").contents({per:200}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},[]),i.a.createElement("div",null,i.a.createElement(P,{feed:a}," "))}var q=t(6),G=m.a.img(R||(R=Object(d.a)(["\n  width: 25vw;\n  object-fit: scale-down;\n  display: block;\n  margin: auto;\n"]))),Q=m.a.p(D||(D=Object(d.a)(["\n  font-size: 0.8em;\n  font-family: Arial, Helvetica, sans-serif;\n  display: block;\n  margin: auto;\n  text-align: center;\n  text-decoration: none;\n"]))),X=m.a.div(J||(J=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),Z=m.a.div(U||(U=Object(d.a)(["\n  width: 100vw;\n  flex: 1;\n"]))),$=m.a.div(W||(W=Object(d.a)(["\n  padding: 1em;\n"])));function ee(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement($,null,i.a.createElement("h1",null," The Weekly Digest"),i.a.createElement("h3",null,"Thought to share some of the articles + resources I find while surfing the web.")),i.a.createElement("ul",null,i.a.createElement(X,null,e.feed.slice(0).reverse().filter(function(e){return e.image}).map(function(e,n){return i.a.createElement(Z,null,i.a.createElement(le,{key:e.id},i.a.createElement("a",{href:e.source?e.source.provider.url:null},i.a.createElement("h4",null," ",n+1),i.a.createElement(G,{src:e.image?e.image.display.url:null}),i.a.createElement(Q,null," ",e.title," ")," ")))}))))}var ne,te,ae,le=m.a.li(Y||(Y=Object(d.a)(["\n  text-decoration: none;\n  display: block;\n\n  padding: 2em;\n"])));function ce(){var e=new q({accessToken:"1986df47db6a294df0575f57e7d655cc5e6ea1bfe87da5a47be605d717fc0086"}),n=Object(r.useState)([]),t=Object(s.a)(n,2),a=t[0],l=t[1];return Object(r.useEffect)(function(){e.channel("weeklydigest").contents({per:200}).then(function(e){return l(e)}).catch(function(e){return console.log(e)})},[]),i.a.createElement("div",null,i.a.createElement(ee,{feed:a}," "))}function re(e){var n=m.a.ul(ne||(ne=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: space-around;\n    gap: 3em;\n    width: 100vw;\n    background-color: white;\n    width: 90%;\n    padding-bottom: 3em;\n  "]))),t=m.a.li(te||(te=Object(d.a)(["\n    font-size: 3vw;\n    color: black;\n    list-style: none;\n  "]))),a=m.a.button(ae||(ae=Object(d.a)(["\n    color: violet;\n    padding: 1em;\n    border-color: aliceblue;\n    border-radius: 20em;\n    filter: drop-shadow(1vw 1vw 1vw #4444dd);\n    & :hover {\n      filter: blur(0.02em);\n      color: blue;\n      border-color: whitesmoke;\n    }\n  "])));function l(e){return i.a.createElement(t,{className:"li-chan"},e.channel)}var c={works:i.a.createElement(V,null),pics:i.a.createElement(C,null),listenings:i.a.createElement(v,null),reads:i.a.createElement(ce,null),about:i.a.createElement(b,null),contact:i.a.createElement(f,null)},r=function(n){return e.changeFeed(c[n.target.innerText])};return i.a.createElement(i.a.Fragment,null,i.a.createElement(n,null,[{id:1,channel:"works"},{id:2,channel:"pics"},{id:3,channel:"listenings"},{id:4,channel:" reads"},{id:5,channel:"about"},{id:6,channel:"contact"}].map(function(e,n){e.id;var t=e.channel;return i.a.createElement("div",null,i.a.createElement(a,{onClick:r},i.a.createElement(l,{channel:t})))})))}var ie=function(){var e=Object(r.useState)(i.a.createElement(b,null)),n=Object(s.a)(e,2),t=n[0],a=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(re,{changeFeed:function(e){return a(e)}}),i.a.createElement(function(){return t},null))},oe=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,82)).then(function(n){var t=n.getCLS,a=n.getFID,l=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),a(e),l(e),c(e),r(e)})};t(77).config(),u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ie,null)),document.getElementById("root")),oe()}},[[27,3,2]]]);
//# sourceMappingURL=main.2f38cb95.chunk.js.map