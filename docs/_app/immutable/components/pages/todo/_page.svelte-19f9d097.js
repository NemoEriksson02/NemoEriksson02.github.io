import{S as ge,i as Ee,s as we,k as i,q as M,a as E,l as u,m as _,r as P,h as n,c as w,n as s,N as Ie,L as F,b as j,G as t,I as q,B as _e,J as ye,K as be,o as Ne,T as Oe,u as Se,M as Te}from"../../../chunks/index-31c572a9.js";function ke(l,r,a){const f=l.slice();return f[10]=r[a],f}function ve(l){let r,a,f,v,c=l[10]+"",b,y,p,g,T,B;function h(){return l[8](l[10])}return{c(){r=i("p"),a=i("span"),f=M("DONE"),v=E(),b=M(c),y=E(),p=i("span"),g=M("REMOVE"),this.h()},l(e){r=u(e,"P",{class:!0});var d=_(r);a=u(d,"SPAN",{class:!0});var R=_(a);f=P(R,"DONE"),R.forEach(n),v=w(d),b=P(d,c),d.forEach(n),y=w(e),p=u(e,"SPAN",{class:!0});var J=_(p);g=P(J,"REMOVE"),J.forEach(n),this.h()},h(){s(a,"class","completed svelte-1wcckcb"),F(a,"hidden",!l[2][l[0].indexOf(l[10])]),s(r,"class","item svelte-1wcckcb"),s(p,"class","remove svelte-1wcckcb")},m(e,d){j(e,r,d),t(r,a),t(a,f),t(r,v),t(r,b),j(e,y,d),j(e,p,d),t(p,g),T||(B=[q(r,"keydown",console.log()),q(r,"click",function(){Oe(l[4](l[0].indexOf(l[10])))&&l[4](l[0].indexOf(l[10])).apply(this,arguments)}),q(p,"keydown",console.log),q(p,"click",h)],T=!0)},p(e,d){l=e,d&5&&F(a,"hidden",!l[2][l[0].indexOf(l[10])]),d&1&&c!==(c=l[10]+"")&&Se(b,c)},d(e){e&&n(r),e&&n(y),e&&n(p),T=!1,be(B)}}}function De(l){let r,a,f,v,c,b,y,p,g,T,B,h,e,d,R,J,U,Q,D,C,X,H,Z,$,W,x,O,A,ne,ee,te,K,se,L,le,G,ce,ae,ie,V=l[0],k=[];for(let o=0;o<V.length;o+=1)k[o]=ve(ke(l,V,o));return{c(){r=i("head"),a=i("title"),f=M("ToDo List"),v=E(),c=i("body"),b=i("div"),y=E(),p=i("div"),g=i("a"),T=M("Go Back"),B=E(),h=i("main"),e=i("header"),d=i("h1"),R=M("ToDo List"),J=E(),U=i("hr"),Q=E(),D=i("section"),C=i("input"),X=E(),H=i("button"),Z=M("Add Item"),$=E(),W=i("hr"),x=E(),O=i("section"),A=i("img"),ee=E();for(let o=0;o<k.length;o+=1)k[o].c();te=E(),K=i("hr"),se=E(),L=i("p"),le=M("Made by Nemo Eriksson 2022 "),G=i("span"),ce=M('image: "Wumpus" by discord'),this.h()},l(o){r=u(o,"HEAD",{class:!0});var S=_(r);a=u(S,"TITLE",{class:!0});var m=_(a);f=P(m,"ToDo List"),m.forEach(n),S.forEach(n),v=w(o),c=u(o,"BODY",{class:!0});var N=_(c);b=u(N,"DIV",{class:!0}),_(b).forEach(n),y=w(N),p=u(N,"DIV",{class:!0});var ue=_(p);g=u(ue,"A",{class:!0,href:!0});var de=_(g);T=P(de,"Go Back"),de.forEach(n),ue.forEach(n),B=w(N),h=u(N,"MAIN",{class:!0});var I=_(h);e=u(I,"HEADER",{class:!0});var fe=_(e);d=u(fe,"H1",{class:!0});var he=_(d);R=P(he,"ToDo List"),he.forEach(n),fe.forEach(n),J=w(I),U=u(I,"HR",{class:!0}),Q=w(I),D=u(I,"SECTION",{id:!0,class:!0});var Y=_(D);C=u(Y,"INPUT",{autocomplete:!0,id:!0,class:!0}),X=w(Y),H=u(Y,"BUTTON",{title:!0,class:!0});var me=_(H);Z=P(me,"Add Item"),me.forEach(n),Y.forEach(n),$=w(I),W=u(I,"HR",{class:!0}),x=w(I),O=u(I,"SECTION",{id:!0,class:!0});var z=_(O);A=u(z,"IMG",{class:!0,src:!0,alt:!0}),ee=w(z);for(let re=0;re<k.length;re+=1)k[re].l(z);z.forEach(n),te=w(I),K=u(I,"HR",{class:!0}),I.forEach(n),se=w(N),L=u(N,"P",{id:!0,class:!0});var oe=_(L);le=P(oe,"Made by Nemo Eriksson 2022 "),G=u(oe,"SPAN",{class:!0});var pe=_(G);ce=P(pe,'image: "Wumpus" by discord'),pe.forEach(n),oe.forEach(n),N.forEach(n),this.h()},h(){s(a,"class","svelte-1wcckcb"),s(r,"class","svelte-1wcckcb"),s(b,"class","background svelte-1wcckcb"),s(g,"class","goBack svelte-1wcckcb"),s(g,"href","/#projects"),s(p,"class","backContainer svelte-1wcckcb"),s(d,"class","title svelte-1wcckcb"),s(e,"class","svelte-1wcckcb"),s(U,"class","svelte-1wcckcb"),s(C,"autocomplete","off"),s(C,"id","newItemText"),s(C,"class","svelte-1wcckcb"),s(H,"title","Add new item to list"),s(H,"class","svelte-1wcckcb"),s(D,"id","addItemSection"),s(D,"class","svelte-1wcckcb"),s(W,"class","svelte-1wcckcb"),s(A,"class","background-img svelte-1wcckcb"),Ie(A.src,ne="todo-bg.jpg")||s(A,"src",ne),s(A,"alt",""),F(A,"faded",l[0].length>=3),s(O,"id","items"),s(O,"class","svelte-1wcckcb"),s(K,"class","svelte-1wcckcb"),s(h,"class","svelte-1wcckcb"),s(G,"class","svelte-1wcckcb"),s(L,"id","credits"),s(L,"class","svelte-1wcckcb"),s(c,"class","svelte-1wcckcb")},m(o,S){j(o,r,S),t(r,a),t(a,f),j(o,v,S),j(o,c,S),t(c,b),t(c,y),t(c,p),t(p,g),t(g,T),t(c,B),t(c,h),t(h,e),t(e,d),t(d,R),t(h,J),t(h,U),t(h,Q),t(h,D),t(D,C),l[7](C),t(D,X),t(D,H),t(H,Z),t(h,$),t(h,W),t(h,x),t(h,O),t(O,A),t(O,ee);for(let m=0;m<k.length;m+=1)k[m].m(O,null);t(h,te),t(h,K),t(c,se),t(c,L),t(L,le),t(L,G),t(G,ce),ae||(ie=[q(C,"keypress",l[6]),q(H,"click",l[3])],ae=!0)},p(o,[S]){if(S&1&&F(A,"faded",o[0].length>=3),S&53){V=o[0];let m;for(m=0;m<V.length;m+=1){const N=ke(o,V,m);k[m]?k[m].p(N,S):(k[m]=ve(N),k[m].c(),k[m].m(O,null))}for(;m<k.length;m+=1)k[m].d(1);k.length=V.length}},i:_e,o:_e,d(o){o&&n(r),o&&n(v),o&&n(c),l[7](null),ye(k,o),ae=!1,be(ie)}}}function Ae(l,r,a){let f=[],v,c=[];function b(){localStorage.setItem("items",JSON.stringify(f)),localStorage.setItem("completed",JSON.stringify(c))}function y(){let e=v.value;e!=""&&!f.includes(e)&&e.length<30&&(f.push(e),c.push(!1),a(0,f),a(1,v.value="",v),b())}function p(e){a(2,c[e]=!c[e],c),b()}function g(e){f.splice(e,1),c.splice(e,1),a(0,f),b()}Ne(()=>{let e=JSON.parse(localStorage.getItem("items")),d=JSON.parse(localStorage.getItem("completed"));e!=null&&d!=null&&(a(0,f=e),a(2,c=d))});const T=e=>{e.key=="Enter"&&y()};function B(e){Te[e?"unshift":"push"](()=>{v=e,a(1,v)})}return[f,v,c,y,p,g,T,B,e=>{g(f.indexOf(e))}]}class Pe extends ge{constructor(r){super(),Ee(this,r,Ae,De,we,{})}}export{Pe as default};
