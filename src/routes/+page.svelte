<script>
import { onMount } from "svelte";

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function writeText(el, text, written, index, delay){
    setTimeout(()=>{
        let interval = setInterval(() => {
            written += text[index];
            index += 1;
            el.innerText = written;
            if(written == text){
                clearInterval(interval);
                return;
            }
        }, 1200/text.Length);
    }, delay);
}

let clickerSectionEl;
let clickerLinkEl;
let todoSectionEl;
let todoLinkEl;
let otherSectionEl;
let otherLinkEl;
let abtTextEl;
let infTextEl;
let proTextEl;

onMount(()=>{
    writeText(abtTextEl, abtTextEl.innerText, '', 0, 1500);
    writeText(infTextEl, infTextEl.innerText, '', 0, 1650);
    writeText(proTextEl, proTextEl.innerText, '', 0, 1800);
    abtTextEl.innerText = '';
    infTextEl.innerText = '';
    proTextEl.innerText = '';

    let sections = [
        clickerSectionEl,
        todoSectionEl,
        otherSectionEl
    ]
    let sectionLinks = [
        clickerLinkEl,
        todoLinkEl,
        otherLinkEl
    ]

    window.addEventListener('scroll', () => {
        let scrolled = window.pageYOffset;
        
        setTimeout(() => {
            if (scrolled == window.pageYOffset) {
                if ( scrolled % window.innerHeight >= window.innerHeight / 2) {
                    window.scrollBy({
                        left: 0,
                        top: window.innerHeight - (scrolled % window.innerHeight),
                        behavior: 'smooth'
                    })
                } else {

                    window.scrollBy({
                        left: 0,
                        top: -(scrolled%window.innerHeight),
                        behavior: 'smooth'
                    })
                }
            }
        }, 100);

        for(let i = 0; i < sections.length; i++){
            if (isInViewport(sections[i])){
                sectionLinks[i].style.background = '#e0e0e0';
                sectionLinks[i].style.color = '#1E2022';
            }
            else{
                sectionLinks[i].style.background = 'none';
                sectionLinks[i].style.color = '#e0e0e0';
            }
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    if (window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload')){
        window.location.href = '/';
    }

});

</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'>
    <title>My Projects</title>
</head>

<body>

    <nav>
        <a class="navTitle" href="#home">Home</a>
        <a href="#clicker" bind:this={clickerLinkEl}>Cookie Clicker</a>
        <a href="#todo" bind:this={todoLinkEl}>ToDo List</a>
        <a href="#other" bind:this={otherLinkEl}>Other Projects</a>
        <p class="waterstamp">nemo eriksson</p>
    </nav>

    <div id="home">
        <div class="container">
            <div class="descriptionBox">
                <h1 class="centerTitle">∼About Me∽</h1>
                <p bind:this={abtTextEl}>
                    My name is Nemo Eriksson and I first learned about programming in 5th grade. I like playing
                    online games such as Valorant, Minecraft and  Magic: the Gathering. 
                    I also like nature photography even tho I'm not the best at it. 
                    <br><br>
                    I have two pets: one cat and one dog. This made me come to the conclusion that cats 
                    are better.
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
            <div class="descriptionBox">
                <h1 class="centerTitle">∼Knowledge∽</h1>
                <p bind:this={infTextEl}>
                    I know how to program in Python, C# and JavaScript and the basics in HTML, CSS and Lua but 
                    I'm a fast learner. 
                    <br><br>
                    I have made some small games in Unity and PyGame but nothing releasable.
                    <br><br>
                    I also want to learn more low-level programming languages in the future like C and/or Rust.
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
            <div class="descriptionBox">
                <h1 class="centerTitle">∼Projects∽</h1>
                <p bind:this={proTextEl}>
                    I have had some different projects and the latest one (as of 28/11-22) is the multiplayer
                    calculator that can be found on my GitHub.
                    <br><br>
                    The projects on this page are made in an attempt to learn more about web design and HTML.
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
        </div>
        <a class="projectsText" href="#clicker">˅ Projects ˅</a>
    </div>

    <section id="clicker" bind:this={clickerSectionEl}>
        <div id="cookieSidebar" class="sidebar">
            <h1>Clicker of Cookies</h1>
            <p class="sectionDescription">
                A simple cookie clicker clone and the <br/> 
                first big project I made in Svelte. <br/>
                Click <a class="linkText" href="/clicker">here</a> to play it.
            </p>
        </div>
        <img class="screenshot" alt="Clicker of Cookies screenshot" src="/screenie1.png"/>
        <a class="projectsText upper" href="#home">˄ Home ˄</a>
        <a class="projectsText" href="#todo">˅ ToDo list ˅</a>
    </section>

    <section id="todo" bind:this={todoSectionEl}>
        <div id="todoSidebar" class="sidebar">
            <h1>ToDo list</h1>
            <p class="sectionDescription">
                A (mostly) working ToDo list <br/>
                where you can add and remove tasks <br/>
                as you can with most ToDo lists. <br/>
                You can click <a class="linkText" href="/todo">here</a> to try it.
            </p>
        </div>
        <img class="screenshot" alt="Screenshot of the ToDo list" src="/screenie2.png"/>
        <a class="projectsText upper" href="#clicker">˄ Clicker ˄</a>
        <a class="projectsText" href="#other">˅ Other Projects ˅</a>
    </section>

    <section id="other" bind:this={otherSectionEl}>
        <div id="otherSidebar" class="sidebar">
            <h1>Other projects</h1>
            <p class="sectionDescription">
                My other projects, both old and <br/> 
                new, projects can be found 
                <a class="linkText" target="_blank" rel="noopener noreferrer" href="https://github.com/NemoEriksson02?tab=repositories">
                    here
                </a> <br/>
                on my GitHub. <br/>
            </p>
        </div>
        <img class="screenshot" alt="Screenshot of my GitHub profile" src="/screenie3.png">
        <a class="projectsText upper" href="#todo">˄ ToDo list ˄</a>
    </section>

</body>


<style>
   
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oswald';
    font-weight: 500;
    letter-spacing: .08em;
    caret-color: transparent;
}

*:hover{
    cursor: default;
}

*::selection{
    user-select: none;
}

body{
    height: 200vh;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    background: white;
}

:global(body){
    padding: 0;
    margin: 0;
    min-width: 1360px;
}

nav{
    position: fixed;
    top: 0;
    padding: 7px 15px 8px 15px;
    z-index: 10;
    background: #1E2022;
    color: #e0e0e0;
    width: 100vw;
    border-bottom: 3px solid #e0e0e0;
}

nav .navTitle, a{
    display: inline-block;
    font-variant: small-caps;
}

h1::selection, 
p::selection, 
a::selection,
br::selection{
    background: #708090;
    color: #e0e0e0;
}

nav a{
    color: #e0e0e0;
    text-decoration: none;
    font-size: 18px;
    margin-left: 45px;
    padding: 0 10px 0 10px;
    border-radius: 5px;
    user-select: none;
    transition: .2s all;
}

a:hover{
    cursor: pointer;
}

.navTitle{
    padding: 0px 10px 2px 10px;
    margin-top: 2px;
    font-size: 22px;
    margin-left: 15px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
}

section{
    position: relative;
    height: 100vh;
}

#home{
    background: #d0d0d0;
    height: 100vh;
}

.container{
    position: relative;
    top: 45%;
}

.descriptionBox{
    height: 400px;
    width: 250px;
    background: #bbbfc2;
    border-radius: 20px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-top: 80px;
    transform: translate(-50%, -50%);
    z-index: 3;
    padding: 3px;
    transition: .3s;
}

.descriptionBox:first-of-type{
    animation: 2s slideLeft forwards;
    z-index: 1;
}
.descriptionBox:last-of-type{
    animation: 2s slideRight forwards;
    z-index: 2;
}
.descriptionBox:nth-child(even){
    animation: 1s spawnBox forwards;
}

.descriptionBox:hover{
    box-shadow: 1px 1px 5px #708090;
}

.descriptionBox p{
    text-align: center;
    color: #1E2022;
    position: relative;
    top: 20px;
    font-size: 18px;
}

.descriptionBox article{
    opacity: 0;
    animation: .2s show forwards;
    animation-delay: 1.25s;
}

.centerTitle{
    position: relative;
    top: 0px;
    width: 250px;
    text-align: center;
    vertical-align: middle;
    color: #1E2022;
    font-variant: small-caps;
    animation: .5s spawnText forwards;
    animation-delay: 1.8s;
    height: 0;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
}

.projectsText{
    position: absolute;
    bottom: -45px;
    left: 50%;
    width: 600px;
    height: 90px;
    text-align: center;
    transform: translateX(-50%);
    font-size: 24px;
    color: #1E2022;
    text-decoration: none;
    letter-spacing: 4px;
    user-select: none;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding: 8px;
    opacity: .9;
    transition: .25s all;
}

.projectsText.upper{
    top: 15px;
    height: 90px;
    padding-top: 45px;
    border-radius: 0;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    font-size: 23px;
}

.projectsText:hover{
    letter-spacing: 8px;
    opacity: 1;
    background-color: #c7c7c9;
}

.descriptionFooter{
    user-select: none;
    position: absolute;
    bottom: 3px;
    left: 5px;
    font-size: 15px;
}

section:nth-of-type(1){
    background: #dcd7c9;
}
section:nth-of-type(2){
    background: #c9d6df;
}
section:last-of-type{
    background: #21262D;
}

.linkText{
    color: white;
    font-variant: normal;
    text-decoration: none;
    border-bottom: 2px solid white;
}

.sidebar{
    height: 100vh;
    background: slategray;
    width: 25%;
    color: #e0e0e0;
}

.sidebar h1{
    position: relative;
    top: 90px;
    left: 22px;
    font-variant: small-caps;
}

.sectionDescription{
    position: relative;
    top: 120px;
    left: 25px;
    font-size: 15px;
}

.screenshot{
    height: 300px;
    width: 540px;
    z-index: 2;
    position: absolute;
    left: 55%;
    top: 22.5%;
    transform: rotate(6deg);
    border-radius: 5px;
}

#cookieSidebar{
    background: #404e4f;
    border-right: 4px solid #a27b5c;
}

#todoSidebar{
    background: #52616B;
    border-right: 4px solid #1E2022;
    color: #1E2022;
}

#todoSidebar .linkText{
    color: #1E2022;
    border-color: #1E2022;
}

#otherSidebar{
    background: #161B22;
    border-right: 4px solid #EFF5FB;
}

#other .projectsText{
    color: #e0e0e0;
    font-weight: lighter;
}

#other .projectsText:hover{
    color: #1E2022;
}

.waterstamp{
    display: inline-block;
    position: absolute;
    height: 0;
    top: 30px;
    right: 20%;
    font-variant: small-caps;
    letter-spacing: 25px;
    color: #2b2b2b;
    font-size: 18px;
    font-weight: 900;
    user-select: none;
    transition: .2s all;
}
.waterstamp:hover{
    color: #e0e0e0;
}

@keyframes spawnBox{
    0%{
        height: 5px;
        width: 5px;
    }
    60%{
        height: 400px;
    }
    70%{
        width: 5px;
    }
    100%{
        width: 250px;
    }
}

@keyframes slideLeft{
    0%{
        left: 50%;
        height: 5px;
        width: 5px;
    }
    35%{
        left: 50%;
        translate: translateX(-125px);
    }
    40%{
        height: 400px;
        width: 5px;
    }
    65%{
        width: 250px;
    }
    100%{
        left: 25%;
        translate: translateX(0);
    }
}

@keyframes slideRight{
    0%{
        left: 50%;
        height: 5px;
        width: 5px;
    }
    35%{
        left: 50%;
        translate: translateX(125px);
    }
    40%{
        height: 400px;
        width: 5px;
    }
    65%{
        width: 250px;
    }
    100%{
        left: 75%;
        translate: translateX(0);
    }
}

@keyframes spawnText{
    from{
        top: 0;
        opacity: 0;
    }
    to{
        top: -100px;
        opacity: 1;
    }
}

@keyframes show{
    from{ opacity: 0; }
    to{ opacity: 1; }
}

</style>
