<script>
import { onMount } from "svelte";

/* ===== Classes ===== */
class Project{
    constructor(name, title, content, linkText, colors, hasWhiteText=false, mobileOnly=true){
        this.name = name;
        this.title = title;
        this.content = content;
        this.linkText = linkText.split('LINK');
        this.colors = colors;
        this.hasWhiteText = hasWhiteText;
        this.mobileOnly = mobileOnly;
    }
}

/* ===== Functions ===== */
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

function togglePhoneNav(){
    showPhoneNav = !showPhoneNav;
    if (showPhoneNav){
        phoneNavEl.style.display = 'block';
    }else{
        phoneNavEl.style.display = 'none';
    }
}

/* ===== Variables ===== */
let abtTextEl;
let infTextEl;
let proTextEl;

let writeTextOffset = 150;
let writeTextDelay = 1500;
let writeTextDelay2 = 500;

let phoneNavEl;
let showPhoneNav = false;

let projects = [
    new Project(
        'clicker', 'Clicker of Cookies', 
        'A simple cookie clicker clone and the first big project I made in Svelte.', 
        'Click LINK to play it.', 
        ['#dcd7c9', '#404d4f']),
    new Project(
        'chat', 'Chatbot',
        'A chatbot that you can try to speak with. Note however that it isn\'t that smart and cant answer even the simplest of questions.',
        'Click LINK to speak to it.',
        ['#778da9', '#415a77'],
    ),
    new Project(
        'todo', 'ToDo List',
        'A (mostly) working ToDo list where you can add and remove tasks as you can with most ToDo lists.',
        'You can click LINK to test it.',
        ['#748457', '#42454a'],
        true
    ),
    new Project(
        'memory', 'Memory Game',
        'A very simple memory game. It is what it is and nothing more. It works just like normal memory.',
        'Click LINK to play.',
        ['#dcd7c9', '#363660']
    ),
    new Project(
        'telltale', 'Story Game',
        'A small story game about centering a div using css or js. It can either take 2 minutes or two hours\
            depening on what choices you make. Choose carefully.',
        'Click LINK to choose your path.',
        ['#282b30', '#7289da'],
        true
    )
]

onMount(()=>{
    let isWriting = false;
    if(window.innerWidth > 1200){
        writeText(abtTextEl, abtTextEl.innerText, '', 0, writeTextDelay);
        writeText(infTextEl, infTextEl.innerText, '', 0, writeTextDelay+writeTextOffset);
        writeText(proTextEl, proTextEl.innerText, '', 0, writeTextDelay+2*writeTextOffset);
        isWriting = true;
    }else if (window.innerWidth < 600){
        writeText(abtTextEl, abtTextEl.innerText, '', 0, writeTextDelay2);
        writeText(infTextEl, infTextEl.innerText, '', 0, writeTextDelay2+writeTextOffset);
        writeText(proTextEl, proTextEl.innerText, '', 0, writeTextDelay2+2*writeTextOffset);
        isWriting = true;
    }
    if (isWriting){
        abtTextEl.innerText = '';
        infTextEl.innerText = '';
        proTextEl.innerText = '';
    }
    
    // Remove the url to end with /#[element] when reloading page
    //  because it looks better
    if (window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload')){
        window.location.href = '/';
    }
});
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'>
    <title>Nemo Eriksson | Home</title>
</head>

<body>
    <!-- ===== Navigation Bar ===== -->
    <button class="navButton open mobileOnly" on:click={()=>{togglePhoneNav()}}>
        <hr class="bar"><hr class="bar"><hr class="bar">
    </button>
    <div class='navSidebar mobileOnly' bind:this={phoneNavEl}>
        <button class="navButton close" on:click={()=>{togglePhoneNav()}}>
            <hr class="bar"><hr class="bar"><hr class="bar">
        </button>
        <hr class="navBreak">
        <a href="#home" on:click={togglePhoneNav}>Home</a>
        <a href="#projects" on:click={togglePhoneNav}>Projects</a>
        <hr class="navBreak">
    </div>
    <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <p class="waterstamp">nemo eriksson</p>
        <a href="/changelog">Changelog</a>
    </nav>

    <!-- ===== Landing page/Home section ===== -->
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
                    <br><br>
                    These projects do not work on phones (yet)
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
        </div>
    </div>

    <!-- ===== Project sections ===== -->
    <section class="projectContainer" id="projects">
        {#each projects as project}
            <section class="project" style={`background: ${project.colors[0]};`}>
                <div class="sidebar" class:whiteText={project.hasWhiteText}
                    style={`background: ${project.colors[1]};`}>
                    <h1>{project.title}{#if project.mobileOnly}<span class="mobileOnly">*</span>{/if}</h1>
                    <p class="sectionDescription">{project.content}
                        <span class="playTestLink">
                            {project.linkText[0]}
                            <a href={`/${project.name}`} class="linkText">here</a>
                            {project.linkText[1]}
                        </span>
                    </p>
                </div>
            </section>
        {/each}

        <section class="project" id="other">
            <div id="otherSidebar" class="sidebar whiteText">
                <h1>Other projects</h1>
                <a class="mobileOnly linkCover" 
                    target="_blank" rel="noopener noreferrer" 
                    href="https://github.com/NemoEriksson02?tab=repositories">_</a>
                <p class="sectionDescription">
                    My other projects, both old and 
                    new, projects can be found 
                    <a class="linkText" target="_blank" rel="noopener noreferrer" href="https://github.com/NemoEriksson02?tab=repositories">
                        here
                    </a>  
                    on my GitHub. <br/><br><br>
                    The calculator app can be found on my github. It is made in node with express-js. To try it, just
                    download the files and type <i>"node server.js"</i> to start it.
                    You dont need to download the files to join it from another device once the server is running.
                </p>
            </div>
        </section>
    </section>  

    <footer class="mobileWarning">
        <hr class="footerBreak">
        <span>*These projects does not work as intended on mobile
            devices yet, please visit this website on a pc or laptop to try it.
        </span>
    </footer>
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

a{
    display: inline-block;
    font-variant: small-caps;
}

h1::selection, 
p::selection, 
a::selection,
br::selection,
i::selection,
span::selection{
    background: #708090;
    color: #e0e0e0;
}

nav a{
    color: #e0e0e0;
    text-decoration: none;
    font-size: 22px;
    margin-left: 45px;
    margin-top: 5px;
    border-radius: 5px;
    user-select: none;
    transition: .2s all;
}

a:hover{
    cursor: pointer;
}

.container{
    position: relative;
    top: 45%;
}

.descriptionBox{
    height: 400px;
    width: 250px;
    background: #e0e0e0;
    border-radius: 4px;
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
    animation: 2s spawnBox forwards;
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
    overflow: hidden;
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

.descriptionFooter{
    user-select: none;
    position: absolute;
    bottom: 3px;
    left: 5px;
    font-size: 15px;
}

.mobileWarning{
    display: none;
}

.projectContainer{
    height: fit-content;
    width: 100%;
    background: inherit;
    padding-bottom: 30px;
    padding-top: 30px;
}

.project{
    width: 60%;
    height: 300px;
    margin: 50px 0 50px 100px;
    border-radius: 4px;
}

.project:last-of-type{
    background: #21262D;
}
.project:nth-child(even){
    margin: 50px 100px 50px auto;
}

.linkText{
    color: #1E2022;
    font-variant: normal;
    text-decoration: none;
    border-bottom: 2px solid #1E2022;
}

.sidebar{
    height: 100%;
    background: slategray;
    width: 25%;
    color: #e0e0e0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.sidebar h1{
    position: relative;
    top: 20px;
    left: 28px;
    font-size: 1.4rem;
    font-variant: small-caps;
    color: #e0e0e0;
    display: block;
    overflow-wrap: normal;
    width: 80%;
}

.sectionDescription{
    position: relative;
    left: calc(100% + 50px);
    font-size: 17px;
    overflow-wrap: normal;
    display: block;
    height: 85%;
    width: 222%;
    color: #1E2022;
}

.waterstamp{
    display: inline-block;
    position: absolute;
    height: 0;
    top: 27px;
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

#home{
    background: #EFEFEF;
    height: 100vh;
}

#otherSidebar{
    background: #161B22;
}

.whiteText .sectionDescription,
.whiteText .linkText{
    color: #e0e0e0;
    border-color: #e0e0e0;
}

/* ===== ANIMATIONS =====*/
@keyframes spawnBox{
    0%{
        height: 5px;
        width: 5px;
    }
    37%{
        width: 5px;
    }
    40%{
        height: 400px;
    }
    60%{
        width: 250px;
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

/* ===== Hide by Default ===== */
.mobileOnly{
    display: none;
}

/* ===== RESPONSIVE: Phones =====*/

@media only screen and (max-width: 599px){
    nav{
        display: none;
    }

    *{
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
        font-family: colfax-web, sans-serif;
        font-weight: 100;
    }

    body{
        height: fit-content;
        background: white;
    }

    .mobileOnly{
        display: initial;
    }

    .navSidebar{
        display: none;
        width: 65%;
        height: 100%;
        background: #1E2022;
        position: fixed;
        right: 0;
        top: 0;
        border-left: 4px solid #e0e0e0;
        z-index: 100;
        opacity: 1;
    }

    .navSidebar a{
        display: block;
        font-size: 1rem;
        color: #e0e0e0;
        text-decoration: none;
        margin: 20px 0 20px 10%;
        font-weight: 400;
        letter-spacing: 2px;
    }

    .navBreak{
        height: 1px;
        border: none;
        background: #e0e0e0;
        width: 85%;
        margin: 5px auto 10px;
    }

    .navBreak:last-of-type{
        margin-bottom: 30px;
    }
    
    .navButton{
        background: #1E2022;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 6vh;
        aspect-ratio: 1;
        border: none;
        z-index: 10;
        float: right;
        margin-bottom: 9px;
    }
    
    .navButton .bar{
        width: 60%;
        height: 5%;
        margin: 0 auto;
        background: #e0e0e0;
        border-radius: 5px;
        border: 0;
    }
    .navButton.open{
        background: transparent;
        position: fixed;
        right: 0;
    }
    .navButton.open .bar{
        background: #1E2022;
    }

    #home{
        display: flex;
        flex-direction: column;
        height: fit-content;
        justify-content: space-evenly;
        position: initial;
        transform: translate(0,0);
        background: transparent;
        background-size: 16px 48px;
    }

    .descriptionBox{
        display: block;
        position: initial;
        height: 280px;
        width: 100%;
        z-index: 0;
        margin: 0 auto 0 auto;
        transform: translate(0, 0);
        animation: none !important;
        z-index: 0 !important;
        border-radius: 0;
        background: #EFEFEF;
    }
    .descriptionBox:first-of-type{
        padding-top: 6vh;
    }
    .descriptionBox:last-of-type{
        margin-bottom: 3vh;
    }
    .descriptionBox:hover{
        box-shadow: none;
    }

    .descriptionBox article{
        display: none;
    }

    .descriptionBox p{
        font-size: .8rem;
        display: block;
        width: 80%;
        margin: 0 auto;
        font-weight: 300;
    }

    .centerTitle{
        animation: none;
        z-index: 1;
        opacity: 1;
        height: fit-content;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.1rem;
        font-weight: 600;
        font-variant: normal;
    }

    .project{
        width: calc(100% - 8vh - 70px);
        min-height: 120px;
        height: 120px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 40px 0 40px 0;
    }

    .project:nth-child(even){
        margin: 40px 0 40px 0;
    }

    .project .sidebar{
        width: calc(100% + 40px);
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        height: 120px;
        border: none !important;
        border-radius: 4px;
    }

    .sidebar h1{
        width: fit-content;
        font-size: 1rem;
        font-weight: 600;
        position: initial;
        transform: translate(15px, 80px);
        color: #e0e0e0;
    }

    .sectionDescription{
        display: none;
    }

    .linkCover{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content-visibility: hidden;
        text-decoration: none;
        opacity: 0;
        content: "";
    }
    .linkCover:active{
        text-decoration: none;
    }

    .playtestLink{
        display: none;
    }

    .mobileWarning{
        font-size: .8rem;
        display: block;
        margin: 0 auto;
        width: 100%;
    }

    .mobileWarning span{
        width: 80%;
        display: block;
        margin: 0 auto;
        font-size: .65rem;
        padding-bottom: 1%;
    }

    .footerBreak{
        height: 1px;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 10px;
        background: black;
        border: none;
        outline: none;
        opacity: .25;
    }
}
</style>
