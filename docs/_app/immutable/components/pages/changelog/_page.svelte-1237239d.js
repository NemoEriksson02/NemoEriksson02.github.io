import{S as te,i as se,s as ae,k as g,q as T,a as S,l as E,m as C,r as Y,h as n,c as H,n as _,b as N,G as d,I as re,B as K,J as le,e as F,M as ie,u as L,N as W}from"../../../chunks/index-887a00a6.js";function X(h,a,r){const e=h.slice();return e[5]=a[r],e}function Z(h,a,r){const e=h.slice();return e[8]=a[r],e}function $(h){let a,r,e,t,c=h[5].meta.date+"",k,p,i,v,I=h[5].meta.points,u=[];for(let l=0;l<I.length;l+=1)u[l]=x(Z(h,I,l));return{c(){a=g("hr"),r=S(),e=g("h2"),t=g("a"),k=T(c),i=S();for(let l=0;l<u.length;l+=1)u[l].c();v=F(),this.h()},l(l){a=E(l,"HR",{class:!0}),r=H(l),e=E(l,"H2",{class:!0});var o=C(e);t=E(o,"A",{class:!0,href:!0});var f=C(t);k=Y(f,c),f.forEach(n),o.forEach(n),i=H(l);for(let y=0;y<u.length;y+=1)u[y].l(l);v=F(),this.h()},h(){_(a,"class","post-divider svelte-a232k0"),_(t,"class","post-title svelte-a232k0"),_(t,"href",p="/changelog/"+h[5].path),_(e,"class","svelte-a232k0")},m(l,o){N(l,a,o),N(l,r,o),N(l,e,o),d(e,t),d(t,k),N(l,i,o);for(let f=0;f<u.length;f+=1)u[f].m(l,o);N(l,v,o)},p(l,o){if(o&1&&c!==(c=l[5].meta.date+"")&&L(k,c),o&1&&p!==(p="/changelog/"+l[5].path)&&_(t,"href",p),o&1){I=l[5].meta.points;let f;for(f=0;f<I.length;f+=1){const y=Z(l,I,f);u[f]?u[f].p(y,o):(u[f]=x(y),u[f].c(),u[f].m(v.parentNode,v))}for(;f<u.length;f+=1)u[f].d(1);u.length=I.length}},d(l){l&&n(a),l&&n(r),l&&n(e),l&&n(i),le(u,l),l&&n(v)}}}function x(h){let a,r,e=h[8][0]+"",t,c,k=h[8][1]+"",p;return{c(){a=g("p"),r=g("span"),t=T(e),p=T(k),this.h()},l(i){a=E(i,"P",{class:!0});var v=C(a);r=E(v,"SPAN",{class:!0});var I=C(r);t=Y(I,e),I.forEach(n),p=Y(v,k),v.forEach(n),this.h()},h(){_(r,"class",c=W(h[8][0])+" svelte-a232k0"),_(a,"class","svelte-a232k0")},m(i,v){N(i,a,v),d(a,r),d(r,t),d(a,p)},p(i,v){v&1&&e!==(e=i[8][0]+"")&&L(t,e),v&1&&c!==(c=W(i[8][0])+" svelte-a232k0")&&_(r,"class",c),v&1&&k!==(k=i[8][1]+"")&&L(p,k)},d(i){i&&n(a)}}}function ee(h){let a=h[5].meta.date.includes(h[2]),r,e=a&&$(h);return{c(){e&&e.c(),r=F()},l(t){e&&e.l(t),r=F()},m(t,c){e&&e.m(t,c),N(t,r,c)},p(t,c){c&5&&(a=t[5].meta.date.includes(t[2])),a?e?e.p(t,c):(e=$(t),e.c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&n(r)}}}function ne(h){let a,r,e,t,c,k,p,i,v,I,u,l,o,f,y,V,D,w,B,M,G,O,R=h[0].posts.reverse(),b=[];for(let s=0;s<R.length;s+=1)b[s]=ee(X(h,R,s));return{c(){a=g("head"),r=g("title"),e=T("Changelog"),t=S(),c=g("div"),k=S(),p=g("section"),i=g("a"),v=T("Return to main"),I=S(),u=g("input"),l=S(),o=g("main"),f=g("h1"),y=T("Changelog"),V=S(),D=g("a"),w=T("Full changelog"),B=S(),M=g("div");for(let s=0;s<b.length;s+=1)b[s].c();this.h()},l(s){a=E(s,"HEAD",{class:!0});var A=C(a);r=E(A,"TITLE",{class:!0});var m=C(r);e=Y(m,"Changelog"),m.forEach(n),A.forEach(n),t=H(s),c=E(s,"DIV",{class:!0}),C(c).forEach(n),k=H(s),p=E(s,"SECTION",{class:!0});var P=C(p);i=E(P,"A",{class:!0,href:!0});var Q=C(i);v=Y(Q,"Return to main"),Q.forEach(n),I=H(P),u=E(P,"INPUT",{type:!0,class:!0,placeholder:!0}),P.forEach(n),l=H(s),o=E(s,"MAIN",{class:!0});var q=C(o);f=E(q,"H1",{class:!0});var U=C(f);y=Y(U,"Changelog"),U.forEach(n),V=H(q),D=E(q,"A",{class:!0,target:!0,rel:!0,href:!0});var j=C(D);w=Y(j,"Full changelog"),j.forEach(n),B=H(q),M=E(q,"DIV",{class:!0});var z=C(M);for(let J=0;J<b.length;J+=1)b[J].l(z);z.forEach(n),q.forEach(n),this.h()},h(){_(r,"class","svelte-a232k0"),_(a,"class","svelte-a232k0"),_(c,"class","background svelte-a232k0"),_(i,"class","back svelte-a232k0"),_(i,"href","/"),_(u,"type","text"),_(u,"class","searchbar svelte-a232k0"),_(u,"placeholder","Search by date (YYYY-MM-DD)"),_(p,"class","topbar svelte-a232k0"),_(f,"class","cl-title svelte-a232k0"),_(D,"class","cl-full svelte-a232k0"),_(D,"target","_blank"),_(D,"rel","noopener noreferrer"),_(D,"href","https://github.com/NemoEriksson02/NemoEriksson02.github.io/commits/main"),_(M,"class","posts svelte-a232k0"),_(o,"class","svelte-a232k0")},m(s,A){N(s,a,A),d(a,r),d(r,e),N(s,t,A),N(s,c,A),N(s,k,A),N(s,p,A),d(p,i),d(i,v),d(p,I),d(p,u),h[4](u),N(s,l,A),N(s,o,A),d(o,f),d(f,y),d(o,V),d(o,D),d(D,w),d(o,B),d(o,M);for(let m=0;m<b.length;m+=1)b[m].m(M,null);G||(O=re(u,"keyup",h[3]),G=!0)},p(s,[A]){if(A&5){R=s[0].posts.reverse();let m;for(m=0;m<R.length;m+=1){const P=X(s,R,m);b[m]?b[m].p(P,A):(b[m]=ee(P),b[m].c(),b[m].m(M,null))}for(;m<b.length;m+=1)b[m].d(1);b.length=R.length}},i:K,o:K,d(s){s&&n(a),s&&n(t),s&&n(c),s&&n(k),s&&n(p),h[4](null),s&&n(l),s&&n(o),le(b,s),G=!1,O()}}}function ce(h,a,r){let{data:e}=a,t,c="";function k(){r(2,c=t.value)}function p(i){ie[i?"unshift":"push"](()=>{t=i,r(1,t)})}return h.$$set=i=>{"data"in i&&r(0,e=i.data)},[e,t,c,k,p]}class fe extends te{constructor(a){super(),se(this,a,ce,ne,ae,{data:0})}}export{fe as default};
