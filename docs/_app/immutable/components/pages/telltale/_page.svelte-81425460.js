import{S as W,i as F,s as P,k as p,q as E,a as S,l as y,m as g,r as C,h as d,c as q,n as _,b,G as m,t as A,d as N,f as M,O as j,P as H,Q as J,g as Q,B as U,u as V,M as z,I as K}from"../../../chunks/index-63ee9b5c.js";let X=[{id:"1",message:"You find yourself in front of a computer. A program called Visual Studio Code is open.",choices:[{id:"3",text:"Read it"},{id:"2",text:"Leave it"}]},{id:"2",message:"You close the computer and leave.",choices:[{id:"1",text:"Restart"}]},{id:"3",message:'The text on the screen says: "//TODO: Center the div". You see that you can create one of two types of files. What do you do?',choices:[{id:"4",text:"Make JS file"},{id:"5",text:"Make CSS file"},{id:"2",text:"Give up"}]},{id:"4",message:"After another two hours of googling you still have not found an answer. Do you continue?",choices:[{id:"6",text:"Continue"},{id:"2",text:"Give up"}]},{id:"5",message:"You create a CSS file and start thinking of how to center the div. What method do you use?",choices:[{id:"10",text:"Position"},{id:"11",text:"Flexbox"},{id:"12",text:"Margins"}]},{id:"6",message:"After another two hours of googling you still have not found an answer. Do you continue?",choices:[{id:"4",text:"Continue"},{id:"2",text:"Give up"}]},{id:"10",message:"You think to use position absolute and the div is now centered, but is it the best way to do it?",choices:[{id:"13",text:"Redo it"},{id:"100",text:"Ctrl + S"},{id:"2",text:"Leave it be"}]},{id:"11",message:"You use display flex to center the div and It works, you should now be         happy with yourself as you didn't even have to google.",choices:[{id:"13",text:"Redo it"},{id:"100",text:"Ctrl + S"},{id:"2",text:"Leave it be"}]},{id:"12",message:"You set the margin to 0 auto and the div magically appears in the middle of the browser, but are you sure this is the best way?",choices:[{id:"13",text:"Redo it"},{id:"100",text:"Ctrl + S"},{id:"2",text:"Leave it be"}]},{id:"13",message:"You reverse your changes and think again about which method you should use to center the div.",choices:[{id:"10",text:"Position"},{id:"11",text:"Flexbox"},{id:"12",text:"Margins"}]},{id:"100",message:"You successfully centered a div without googling. Well done.",choices:[{id:"1",text:"Replay"}]}];function Z(n){const e=n-1;return e*e*e+1}function O(n,{delay:e=0,duration:a=400,easing:l=Z,x:c=0,y:t=0,opacity:i=0}={}){const s=getComputedStyle(n),o=+s.opacity,u=s.transform==="none"?"":s.transform,r=o*(1-i);return{delay:e,duration:a,easing:l,css:(f,k)=>`
			transform: ${u} translate(${(1-f)*c}px, ${(1-f)*t}px);
			opacity: ${o-r*k}`}}function R(n,e,a){const l=n.slice();return l[3]=e[a],l}function T(n){let e,a=n[1].message+"",l,c,t,i=n[1].choices,s=[];for(let o=0;o<i.length;o+=1)s[o]=$(R(n,i,o));return{c(){e=p("p"),l=E(a),c=S(),t=p("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=y(o,"P",{class:!0});var u=g(e);l=C(u,a),u.forEach(d),c=q(o),t=y(o,"DIV",{class:!0});var r=g(t);for(let f=0;f<s.length;f+=1)s[f].l(r);r.forEach(d),this.h()},h(){_(e,"class","svelte-12dvqhk"),_(t,"class","row svelte-12dvqhk")},m(o,u){b(o,e,u),m(e,l),b(o,c,u),b(o,t,u);for(let r=0;r<s.length;r+=1)s[r].m(t,null)},p(o,u){if(u&2&&a!==(a=o[1].message+"")&&V(l,a),u&3){i=o[1].choices;let r;for(r=0;r<i.length;r+=1){const f=R(o,i,r);s[r]?s[r].p(f,u):(s[r]=$(f),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=i.length}},d(o){o&&d(e),o&&d(c),o&&d(t),z(s,o)}}}function $(n){let e,a=n[3].text+"",l,c,t;function i(){return n[2](n[3])}return{c(){e=p("button"),l=E(a),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var o=g(e);l=C(o,a),o.forEach(d),this.h()},h(){_(e,"class","svelte-12dvqhk")},m(s,o){b(s,e,o),m(e,l),c||(t=K(e,"click",i),c=!0)},p(s,o){n=s,o&2&&a!==(a=n[3].text+"")&&V(l,a)},d(s){s&&d(e),c=!1,t()}}}function L(n){let e,a,l,c,t=n[1]&&T(n);return{c(){e=p("div"),t&&t.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var s=g(e);t&&t.l(s),s.forEach(d),this.h()},h(){_(e,"class","choiceBox svelte-12dvqhk")},m(i,s){b(i,e,s),t&&t.m(e,null),c=!0},p(i,s){i[1]?t?t.p(i,s):(t=T(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i(i){c||(i&&j(()=>{l&&l.end(1),a=H(e,O,{y:-800,x:100,duration:600}),a.start()}),c=!0)},o(i){a&&a.invalidate(),i&&(l=J(e,O,{y:120,x:-1e3,duration:850})),c=!1},d(i){i&&d(e),t&&t.d(),i&&l&&l.end()}}}function ee(n){let e,a,l,c,t,i,s,o,u,r,f,k,Y=n[0],v=L(n);return{c(){e=p("head"),a=p("title"),l=E("Story Game"),c=S(),t=p("body"),i=p("a"),s=E("Go Back"),o=S(),u=p("div"),r=S(),f=p("main"),k=p("div"),v.c(),this.h()},l(h){e=y(h,"HEAD",{class:!0});var x=g(e);a=y(x,"TITLE",{class:!0});var D=g(a);l=C(D,"Story Game"),D.forEach(d),x.forEach(d),c=q(h),t=y(h,"BODY",{class:!0});var w=g(t);i=y(w,"A",{href:!0,class:!0});var I=g(i);s=C(I,"Go Back"),I.forEach(d),o=q(w),u=y(w,"DIV",{class:!0}),g(u).forEach(d),r=q(w),f=y(w,"MAIN",{class:!0});var G=g(f);k=y(G,"DIV",{class:!0});var B=g(k);v.l(B),B.forEach(d),G.forEach(d),w.forEach(d),this.h()},h(){_(a,"class","svelte-12dvqhk"),_(e,"class","svelte-12dvqhk"),_(i,"href","/#projects"),_(i,"class","goBack svelte-12dvqhk"),_(u,"class","background svelte-12dvqhk"),_(k,"class","grid svelte-12dvqhk"),_(f,"class","svelte-12dvqhk"),_(t,"class","svelte-12dvqhk")},m(h,x){b(h,e,x),m(e,a),m(a,l),b(h,c,x),b(h,t,x),m(t,i),m(i,s),m(t,o),m(t,u),m(t,r),m(t,f),m(f,k),v.m(k,null)},p(h,[x]){x&1&&P(Y,Y=h[0])?(Q(),A(v,1,1,U),N(),v=L(h),v.c(),M(v,1),v.m(k,null)):v.p(h,x)},i(h){M(v)},o(h){A(v)},d(h){h&&d(e),h&&d(c),h&&d(t),v.d(h)}}}function te(n,e,a){let l,c=1;const t=i=>{a(0,c=i.id)};return n.$$.update=()=>{n.$$.dirty&1&&a(1,l=X.find(i=>i.id==c))},[c,l,t]}class oe extends W{constructor(e){super(),F(this,e,te,ee,P,{})}}export{oe as default};
