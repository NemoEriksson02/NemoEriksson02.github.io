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

    window.addEventListener('scroll', (e) => {
        let scrolled = window.pageYOffset;
        setTimeout(() => {
            if (scrolled == window.pageYOffset) {
                if (
                scrolled % window.innerHeight >=
                window.innerHeight / 2
                ) {
                    window.scrollBy(
                        0,
                        window.innerHeight -
                        (scrolled % window.innerHeight),
                    );
                } else {
                    window.scrollBy(
                        0,
                        -(scrolled % window.innerHeight),
                    );
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

nav a{
    color: #e0e0e0;
    text-decoration: none;
    font-size: 18px;
    margin-left: 45px;
    padding: 0 10px 0 10px;
    border-radius: 5px;
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
    top: 100vh;
    height: 100vh;
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

</style>
