import{S as oe,i as te,s as ae,k as D,q as M,a as H,l as P,m as T,r as G,h as I,c as K,n as b,N as se,L as N,b as A,G as k,I as ne,B as U,J as ie,o as re,O as J,u as V,M as Z}from"../../../chunks/index-31c572a9.js";var S={};S.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];S.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];S.elizaQuits=["bye","goodbye","done","exit","quit"];S.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];S.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];S.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};S.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];S.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var a=S;function p(o){this.noRandom=!!o,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}p.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var o=0;o<a.elizaKeywords.length;o++){this.lastchoice[o]=[];for(var e=a.elizaKeywords[o][2],s=0;s<e.length;s++)this.lastchoice[o][s]=-1}};p.prototype._dataParsed=!1;p.prototype._init=function(){var o={};if(a.elizaSynons&&typeof a.elizaSynons=="object")for(var e in a.elizaSynons)o[e]="("+e+"|"+a.elizaSynons[e].join("|")+")";(!a.elizaKeywords||typeof a.elizaKeywords.length>"u")&&(a.elizaKeywords=[["###",0,[["###",[]]]]]);for(var s=/@(\S+)/,g=/(\S)\s*\*\s*(\S)/,r=/^\s*\*\s*(\S)/,y=/(\S)\s*\*\s*$/,c=/^\s*\*\s*$/,d=/\s+/g,f=0;f<a.elizaKeywords.length;f++){var u=a.elizaKeywords[f][2];a.elizaKeywords[f][3]=f;for(var e=0;e<u.length;e++){var t=u[e];if(t[0].charAt(0)=="$"){for(var l=1;t[0].charAt[l]==" ";)l++;t[0]=t[0].substring(l),t[2]=!0}else t[2]=!1;for(var n=s.exec(t[0]);n;){var W=o[n[1]]?o[n[1]]:n[1];t[0]=t[0].substring(0,n.index)+W+t[0].substring(n.index+n[0].length),n=s.exec(t[0])}if(c.test(t[0]))t[0]="\\s*(.*)\\s*";else{if(n=g.exec(t[0]),n){for(var m="",h=t[0];n;)m+=h.substring(0,n.index+1),n[1]!=")"&&(m+="\\b"),m+="\\s*(.*)\\s*",n[2]!="("&&n[2]!="\\"&&(m+="\\b"),m+=n[2],h=h.substring(n.index+n[0].length),n=g.exec(h);t[0]=m+h}if(n=r.exec(t[0]),n){var m="\\s*(.*)\\s*";n[1]!=")"&&n[1]!="\\"&&(m+="\\b"),t[0]=m+t[0].substring(n.index-1+n[0].length)}if(n=y.exec(t[0]),n){var m=t[0].substring(0,n.index+1);n[1]!="("&&(m+="\\b"),t[0]=m+"\\s*(.*)\\s*"}}t[0]=t[0].replace(d,"\\s+"),d.lastIndex=0}}if(a.elizaKeywords.sort(this._sortKeywords),p.prototype.pres={},p.prototype.posts={},a.elizaPres&&a.elizaPres.length){for(var w=new Array,e=0;e<a.elizaPres.length;e+=2)w.push(a.elizaPres[e]),p.prototype.pres[a.elizaPres[e]]=a.elizaPres[e+1];p.prototype.preExp=new RegExp("\\b("+w.join("|")+")\\b")}else p.prototype.preExp=/####/,p.prototype.pres["####"]="####";if(a.elizaPosts&&a.elizaPosts.length){for(var w=new Array,e=0;e<a.elizaPosts.length;e+=2)w.push(a.elizaPosts[e]),p.prototype.posts[a.elizaPosts[e]]=a.elizaPosts[e+1];p.prototype.postExp=new RegExp("\\b("+w.join("|")+")\\b")}else p.prototype.postExp=/####/,p.prototype.posts["####"]="####";(!a.elizaQuits||typeof a.elizaQuits.length>"u")&&(a.elizaQuits=[]),p.prototype._dataParsed=!0};p.prototype._sortKeywords=function(o,e){return o[1]>e[1]?-1:o[1]<e[1]||o[3]>e[3]?1:o[3]<e[3]?-1:0};p.prototype.transform=function(o){var e="";this.quit=!1,o=o.toLowerCase(),o=o.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),o=o.replace(/\s+-+\s+/g,"."),o=o.replace(/\s*[,\.\?!;]+\s*/g,"."),o=o.replace(/\s*\bbut\b\s*/g,"."),o=o.replace(/\s{2,}/g," ");for(var s=o.split("."),g=0;g<s.length;g++){var r=s[g];if(r!=""){for(var y=0;y<a.elizaQuits.length;y++)if(a.elizaQuits[y]==r)return this.quit=!0,this.getFinal();var c=this.preExp.exec(r);if(c){for(var d="",f=r;c;)d+=f.substring(0,c.index)+this.pres[c[1]],f=f.substring(c.index+c[0].length),c=this.preExp.exec(f);r=d+f}this.sentence=r;for(var u=0;u<a.elizaKeywords.length;u++)if(r.search(new RegExp("\\b"+a.elizaKeywords[u][0]+"\\b","i"))>=0&&(e=this._execRule(u)),e!="")return e}}if(e=this._memGet(),e==""){this.sentence=" ";var u=this._getRuleIndexByKey("xnone");u>=0&&(e=this._execRule(u))}return e!=""?e:"I am at a loss for words."};p.prototype._execRule=function(o){for(var e=a.elizaKeywords[o],s=e[2],g=/\(([0-9]+)\)/,r=0;r<s.length;r++){var y=this.sentence.match(s[r][0]);if(y!=null){var c=s[r][1],d=s[r][2],f=this.noRandom?0:Math.floor(Math.random()*c.length);this.noRandom&&this.lastchoice[o][r]>f||this.lastchoice[o][r]==f?(f=++this.lastchoice[o][r],f>=c.length&&(f=0,this.lastchoice[o][r]=-1)):this.lastchoice[o][r]=f;var u=c[f];if(this.debug&&alert(`match:
key: `+a.elizaKeywords[o][0]+`
rank: `+a.elizaKeywords[o][1]+`
decomp: `+s[r][0]+`
reasmb: `+u+`
memflag: `+d),u.search("^goto ","i")==0){var t=this._getRuleIndexByKey(u.substring(5));if(t>=0)return this._execRule(t)}var l=g.exec(u);if(l){for(var n="",W=u;l;){var m=y[parseInt(l[1])],h=this.postExp.exec(m);if(h){for(var w="",x=m;h;)w+=x.substring(0,h.index)+this.posts[h[1]],x=x.substring(h.index+h[0].length),h=this.postExp.exec(x);m=w+x}n+=W.substring(0,l.index)+m,W=W.substring(l.index+l[0].length),l=g.exec(W)}u=n+W}if(u=this._postTransform(u),d)this._memSave(u);else return u}}return""};p.prototype._postTransform=function(o){if(o=o.replace(/\s{2,}/g," "),o=o.replace(/\s+\./g,"."),a.elizaPostTransforms&&a.elizaPostTransforms.length)for(var e=0;e<a.elizaPostTransforms.length;e+=2)o=o.replace(a.elizaPostTransforms[e],a.elizaPostTransforms[e+1]),a.elizaPostTransforms[e].lastIndex=0;if(this.capitalizeFirstLetter){var s=/^([a-z])/,g=s.exec(o);g&&(o=g[0].toUpperCase()+o.substring(1))}return o};p.prototype._getRuleIndexByKey=function(o){for(var e=0;e<a.elizaKeywords.length;e++)if(a.elizaKeywords[e][0]==o)return e;return-1};p.prototype._memSave=function(o){this.mem.push(o),this.mem.length>this.memSize&&this.mem.shift()};p.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var o=Math.floor(Math.random()*this.mem.length),e=this.mem[o],s=o+1;s<this.mem.length;s++)this.mem[s-1]=this.mem[s];return this.mem.length--,e}else return""};p.prototype.getFinal=function(){return a.elizaFinals?a.elizaFinals[Math.floor(Math.random()*a.elizaFinals.length)]:""};p.prototype.getInitial=function(){return a.elizaInitials?a.elizaInitials[Math.floor(Math.random()*a.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(o){return this[this.length]=o});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var o=this[0],e=1;e<this.length;e++)this[e-1]=this[e];return this.length--,o});var le=p;function X(o,e,s){const g=o.slice();return g[12]=e[s],g}function ee(o){let e,s=o[12][0]+"",g,r,y,c=o[12][2]+"",d,f,u;return{c(){e=D("p"),g=M(s),r=H(),y=D("span"),d=M(c),f=H(),this.h()},l(t){e=P(t,"P",{class:!0});var l=T(e);g=G(l,s),r=K(l),y=P(l,"SPAN",{class:!0});var n=T(y);d=G(n,c),n.forEach(I),f=K(l),l.forEach(I),this.h()},h(){b(y,"class","time svelte-1kh2gr5"),b(e,"class",u=J(o[12][1])+" svelte-1kh2gr5")},m(t,l){A(t,e,l),k(e,g),k(e,r),k(e,y),k(y,d),k(e,f)},p(t,l){l&4&&s!==(s=t[12][0]+"")&&V(g,s),l&4&&c!==(c=t[12][2]+"")&&V(d,c),l&4&&u!==(u=J(t[12][1])+" svelte-1kh2gr5")&&b(e,"class",u)},d(t){t&&I(e)}}}function ue(o){let e,s,g,r,y,c,d,f,u,t,l,n,W,m,h,w,x,C,E,B,F,O,R=o[2],_=[];for(let i=0;i<R.length;i+=1)_[i]=ee(X(o,R,i));return{c(){e=D("head"),s=D("title"),g=M("Chatbot"),r=H(),y=D("div"),c=H(),d=D("a"),f=M("Go back"),u=H(),t=D("body"),l=D("section");for(let i=0;i<_.length;i+=1)_[i].c();n=H(),W=D("section"),m=D("input"),h=H(),w=D("img"),C=H(),E=D("p"),B=M("*Warning: The chatbot is not smart and can't give answers to the simplest of questions"),this.h()},l(i){e=P(i,"HEAD",{class:!0});var z=T(e);s=P(z,"TITLE",{class:!0});var v=T(s);g=G(v,"Chatbot"),v.forEach(I),z.forEach(I),r=K(i),y=P(i,"DIV",{id:!0,class:!0}),T(y).forEach(I),c=K(i),d=P(i,"A",{href:!0,id:!0,class:!0});var q=T(d);f=G(q,"Go back"),q.forEach(I),u=K(i),t=P(i,"BODY",{class:!0});var Y=T(t);l=P(Y,"SECTION",{class:!0});var Q=T(l);for(let L=0;L<_.length;L+=1)_[L].l(Q);Q.forEach(I),n=K(Y),W=P(Y,"SECTION",{class:!0});var j=T(W);m=P(j,"INPUT",{type:!0,placeholder:!0,class:!0}),h=K(j),w=P(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(I),C=K(Y),E=P(Y,"P",{class:!0});var $=T(E);B=G($,"*Warning: The chatbot is not smart and can't give answers to the simplest of questions"),$.forEach(I),Y.forEach(I),this.h()},h(){b(s,"class","svelte-1kh2gr5"),b(e,"class","svelte-1kh2gr5"),b(y,"id","bg"),b(y,"class","svelte-1kh2gr5"),b(d,"href","/#projects"),b(d,"id","back"),b(d,"class","svelte-1kh2gr5"),b(l,"class","chatHistory svelte-1kh2gr5"),b(m,"type","text"),b(m,"placeholder","Type message"),b(m,"class","svelte-1kh2gr5"),se(w.src,x="/arrow.png")||b(w,"src",x),b(w,"alt","Submit"),b(w,"class","svelte-1kh2gr5"),N(w,"typing",o[3]),b(W,"class","inputSection svelte-1kh2gr5"),b(E,"class","disclaimer svelte-1kh2gr5"),b(t,"class","svelte-1kh2gr5")},m(i,z){A(i,e,z),k(e,s),k(s,g),A(i,r,z),A(i,y,z),A(i,c,z),A(i,d,z),k(d,f),A(i,u,z),A(i,t,z),k(t,l);for(let v=0;v<_.length;v+=1)_[v].m(l,null);o[5](l),k(t,n),k(t,W),k(W,m),o[6](m),k(W,h),k(W,w),k(t,C),k(t,E),k(E,B),F||(O=ne(m,"keydown",o[7]),F=!0)},p(i,[z]){if(z&4){R=i[2];let v;for(v=0;v<R.length;v+=1){const q=X(i,R,v);_[v]?_[v].p(q,z):(_[v]=ee(q),_[v].c(),_[v].m(l,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=R.length}z&8&&N(w,"typing",i[3])},i:U,o:U,d(i){i&&I(e),i&&I(r),i&&I(y),i&&I(c),i&&I(d),i&&I(u),i&&I(t),ie(_,i),o[5](null),o[6](null),F=!1,O()}}}function he(o,e,s){let g=new le,r=new Date,y,c,d=[],f=!1;function u(){function h(E){return E<10?`0${E}`:E}r=new Date;let w=h(r.getHours()),x=h(r.getMinutes()),C=h(r.getSeconds());return`${w}:${x}:${C}`}function t(){let h=y.value;d.push([h,"user-sent",u()]),s(2,d),setTimeout(()=>{c.scroll(0,150*d.length)},10);let w=g.transform(h);s(0,y.value="",y),setTimeout(()=>{d.push([w,"bot-sent",u()]),s(2,d),setTimeout(()=>{c.scroll(0,150*d.length)},10)},w.length*12)}function l(h){h.key=="Enter"&&y.value.length>0&&t()}re(()=>{setInterval(()=>{s(3,f=y.value.length>0)},250)});function n(h){Z[h?"unshift":"push"](()=>{c=h,s(1,c)})}function W(h){Z[h?"unshift":"push"](()=>{y=h,s(0,y)})}return[y,c,d,f,l,n,W,h=>l(h)]}class de extends oe{constructor(e){super(),te(this,e,he,ue,ae,{})}}export{de as default};
