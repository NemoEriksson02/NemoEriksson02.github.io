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

onMount(()=>{
    let sections = [
        document.getElementById('clicker'),
        document.getElementById('todo'),
        document.getElementById('other')
    ]
    let sectionLinks = [
        document.getElementById('clickerLink'),
        document.getElementById('todoLink'),
        document.getElementById('otherLink'),
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

    if (
        (window.performance.navigation && window.performance.navigation.type === 1) ||
        window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
    ){
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
        <a href="#clicker" id="clickerLink">Cookie Clicker</a>
        <a href="#todo" id="todoLink">ToDo List</a>
        <a href="#other" id="otherLink">Other Projects</a>
    </nav>

    <div id="home">
        <div class="flexContainer">
            <h1 class="centerTitle">∼About Me∽</h1>
            <h1 class="centerTitle">∼Knowledge∽</h1>
            <h1 class="centerTitle">∼Projects∽</h1>
        </div>
        <div class="flexContainer">
            <div class="descriptionBox">
                <p>
                    I first learned about programming in 5th grade when our teacher gave us the opportunity to
                    make small websites in HTML as a fun side-project. I soon gave up HTML for Python as it was
                    more fun than making websites at the time. Later I started learning other languages as well, 
                    like Javascript, Lua and C#.
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
            <div class="descriptionBox">
                <p>
                    I know how to program in Python, C# and JavaScript as well as the basics in HTML, CSS and Lua. 
                    <br><br>
                    I have made some small games in Unity and PyGame but nothing releasable.
                    <br><br>
                    I also want to learn more low-level programming languages in the future like C and/or Rust.
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
            <div class="descriptionBox">
                <p>
                    I have had some different projects and the latest one <i>(as of 28/11-22)</i> is the multiplayer
                    calculator that can be found on my 
                    <a class="descriptionLink" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://github.com/NemoEriksson02?tab=repositories">GitHub</a>.
                    <br><br>
                    The projects on this page are made in an attempt to learn more about web design and HTML.
                </p>
                <article class="descriptionFooter">✎</article>
            </div>
        </div>
        <a class="projectsText" href="#clicker">˅ Projects ˅</a>
    </div>

    <section id="clicker">
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

    <section id="todo">
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

    <section id="other">
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
}

nav{
    position: fixed;
    top: 0;
    padding: 7px 15px 8px 15px;
    z-index: 10;
    background: #1E2022;
    color: #e0e0e0;
    width: 100%;
    border-bottom: 3px solid #e0e0e0;
}

nav .navTitle, a{
    display: inline-block;
    font-variant: small-caps;
}

h1::selection, 
p::selection, 
a::selection{
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

.flexContainer{
    display: flex;
    justify-content: center;
    position: relative;
    top: 45%;
    gap: 10%;
}

.descriptionBox{
    height: 400px;
    width: 250px;
    background: #bbbfc2ee;
    border: 4px solid #bbbfc2ff;
    border-radius: 20px;
    position: relative;
    top: 55%;
    transform: translateY(-50%);
}

.descriptionBox p{
    text-align: center;
    color: #1E2022;
    position: relative;
    top: 20px;
    font-size: 18px;
}

.centerTitle{
    position: relative;
    top: -250px;
    width: 250px;
    text-align: center;
    vertical-align: middle;
    color: #1E2022;
    font-variant: small-caps;
}

.projectsText{
    position: absolute;
    bottom: -45px;
    left: 50%;
    width: 600px;
    height: 90px;
    text-align: center;
    transform: translateX(-50%);
    font-size: 23px;
    color: #1E2022;
    text-decoration: none;
    letter-spacing: 4px;
    user-select: none;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding: 5px;
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
}

.projectsText:hover{
    letter-spacing: 8px;
    opacity: 1;
    background-color: #c7c7c9;
}

.descriptionLink{
    font-variant: normal;
    text-decoration: none;
    color: #404e4f;
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

</style>
