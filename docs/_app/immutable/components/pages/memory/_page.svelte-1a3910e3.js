import{S as fe,i as ie,s as he,k,q as M,a as H,l as m,m as E,r as T,h,c as B,n as u,L as J,b as R,G as a,I as x,u as $,B as ne,M as ue,o as de,p as oe,N as pe,J as _e}from"../../../chunks/index-b44a823f.js";function re(t,e,l){const n=t.slice();return n[12]=e[l],n[14]=l,n}function ce(t){let e,l,n,d,c,r,y,j;function g(){return t[5](t[12])}function i(){return t[6](t[12])}return{c(){e=k("div"),l=k("div"),n=H(),d=k("img"),r=H(),this.h()},l(v){e=m(v,"DIV",{class:!0});var o=E(e);l=m(o,"DIV",{class:!0,style:!0}),E(l).forEach(h),n=B(o),d=m(o,"IMG",{class:!0,src:!0,alt:!0}),r=B(o),o.forEach(h),this.h()},h(){u(l,"class","front svelte-12kgjfn"),oe(l,"background",t[12].background),u(d,"class","back svelte-12kgjfn"),pe(d.src,c="/front.png")||u(d,"src",c),u(d,"alt",""),u(e,"class","card svelte-12kgjfn"),J(e,"flipped",t[12].flipped)},m(v,o){R(v,e,o),a(e,l),a(e,n),a(e,d),a(e,r),y||(j=[x(e,"click",g),x(e,"keypress",i)],y=!0)},p(v,o){t=v,o&1&&oe(l,"background",t[12].background),o&1&&J(e,"flipped",t[12].flipped)},d(v){v&&h(e),y=!1,_e(j)}}}function ge(t){let e,l,n,d,c,r,y,j,g,i,v,o,D,F,p,I,A,G,C,P,S,U,N,z,V,K,O,Q,ee,q=t[0],_=[];for(let s=0;s<q.length;s+=1)_[s]=ce(re(t,q,s));return{c(){e=k("head"),l=k("title"),n=M("Memory"),d=H(),c=k("body"),r=k("a"),y=M("Go Back"),j=H(),g=k("main"),i=k("div");for(let s=0;s<_.length;s+=1)_[s].c();v=H(),o=k("div"),D=k("h1"),F=M("You won in "),p=M(t[1]),I=M(" flips"),A=H(),G=k("button"),C=M("Restart"),P=H(),S=k("h1"),U=M("Total Flips: "),N=M(t[1]),z=H(),V=k("h1"),K=M("Highscore: "),O=M(t[2]),this.h()},l(s){e=m(s,"HEAD",{class:!0});var w=E(e);l=m(w,"TITLE",{class:!0});var f=E(l);n=T(f,"Memory"),f.forEach(h),w.forEach(h),d=B(s),c=m(s,"BODY",{class:!0});var b=E(c);r=m(b,"A",{href:!0,class:!0});var te=E(r);y=T(te,"Go Back"),te.forEach(h),j=B(b),g=m(b,"MAIN",{class:!0});var le=E(g);i=m(le,"DIV",{class:!0});var se=E(i);for(let Z=0;Z<_.length;Z+=1)_[Z].l(se);se.forEach(h),le.forEach(h),v=B(b),o=m(b,"DIV",{class:!0});var Y=E(o);D=m(Y,"H1",{class:!0});var L=E(D);F=T(L,"You won in "),p=T(L,t[1]),I=T(L," flips"),L.forEach(h),A=B(Y),G=m(Y,"BUTTON",{class:!0});var ae=E(G);C=T(ae,"Restart"),ae.forEach(h),Y.forEach(h),P=B(b),S=m(b,"H1",{class:!0});var W=E(S);U=T(W,"Total Flips: "),N=T(W,t[1]),W.forEach(h),z=B(b),V=m(b,"H1",{class:!0});var X=E(V);K=T(X,"Highscore: "),O=T(X,t[2]),X.forEach(h),b.forEach(h),this.h()},h(){u(l,"class","svelte-12kgjfn"),u(e,"class","svelte-12kgjfn"),u(r,"href","/#projects"),u(r,"class","svelte-12kgjfn"),u(i,"class","row svelte-12kgjfn"),u(g,"class","svelte-12kgjfn"),u(D,"class","svelte-12kgjfn"),u(G,"class","svelte-12kgjfn"),u(o,"class","restart svelte-12kgjfn"),J(o,"hidden",!t[3]),u(S,"class","statText svelte-12kgjfn"),u(V,"class","statText svelte-12kgjfn"),u(c,"class","svelte-12kgjfn")},m(s,w){R(s,e,w),a(e,l),a(l,n),R(s,d,w),R(s,c,w),a(c,r),a(r,y),a(c,j),a(c,g),a(g,i);for(let f=0;f<_.length;f+=1)_[f].m(i,null);a(c,v),a(c,o),a(o,D),a(D,F),a(D,p),a(D,I),a(o,A),a(o,G),a(G,C),a(c,P),a(c,S),a(S,U),a(S,N),a(c,z),a(c,V),a(V,K),a(V,O),Q||(ee=x(G,"click",t[7]),Q=!0)},p(s,[w]){if(w&17){q=s[0];let f;for(f=0;f<q.length;f+=1){const b=re(s,q,f);_[f]?_[f].p(b,w):(_[f]=ce(b),_[f].c(),_[f].m(i,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=q.length}w&2&&$(p,s[1]),w&8&&J(o,"hidden",!s[3]),w&2&&$(N,s[1]),w&4&&$(O,s[2])},i:ne,o:ne,d(s){s&&h(e),s&&h(d),s&&h(c),ue(_,s),Q=!1,ee()}}}let ve=1e3;function ke(t){for(var e=t.length-1;e>0;e--){var l=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[l],t[l]=n}}function me(t,e,l){class n{constructor(I,A=!1,G=!1){let C=["red","magenta","green","yellow","orange","slategray"];this.id=I,this.background=C[I],this.flipped=A,this.completed=G}}function d(p){!p.flipped&&j<2&&(p.flipped=!p.flipped,j++,l(1,g++,g),j==1&&(y=p),j==2&&(p.id==y.id&&(p.completed=!0,l(0,r[r.indexOf(y)].completed=!0,r)),setTimeout(()=>{r.forEach(I=>{I.flipped=I.completed}),r.every(I=>I.completed)&&c(),j=0,l(0,r)},ve)),l(0,r))}function c(){(g<i||i==0)&&(l(2,i=g),localStorage.setItem("hs",i)),l(3,v=!0)}let r=[new n(0),new n(0),new n(1),new n(1),new n(2),new n(2),new n(3),new n(3),new n(4),new n(4),new n(5),new n(5)];ke(r);let y,j=0,g=0,i=0,v=!1;return de(()=>{l(2,i=localStorage.getItem("hs")),i==null&&l(2,i=0)}),[r,g,i,v,d,p=>{d(p)},p=>{d(p)},()=>{location.reload()}]}class be extends fe{constructor(e){super(),ie(this,e,me,ge,he,{})}}export{be as default};