<script>
import 'elizabot';
import ElizaBot from "elizabot";    
import {onMount} from 'svelte';
let bot = new ElizaBot();
let time = new Date();
let chatInput;
let chatHistoryDiv;
let messages = [[bot.getInitial(),'bot-sent','']];
let isTyping = false;

function getTime(){
    function leadingZero(value){
        if (value < 10){
            return `0${value}`;
        }
        return value;
    }
    time = new Date();
    let hour = leadingZero(time.getHours());
    let minute = leadingZero(time.getMinutes());
    let second = leadingZero(time.getSeconds());
    return `${hour}:${minute}:${second}`;
}

function say(){
    let question = chatInput.value;
    messages.push([
        question,
        'user-sent',
        getTime()
    ]);
    messages = messages;
    setTimeout(() => {
        chatHistoryDiv.scroll(0, 150*messages.length)
    }, 10);

    let answer = bot.transform(question);
    chatInput.value = '';
    setTimeout(()=>{
        messages.push([
            answer,
            'bot-sent',
            getTime()
        ]);
        messages = messages;
        setTimeout(() => {
            chatHistoryDiv.scroll(0, 150*messages.length);
        }, 10);
    }, answer.length*12);
    
}

function checkInput(keyEvent=undefined){
    if (keyEvent == undefined && chatInput.value.length > 0){
        say();
    }
    else if(keyEvent['key']=='Enter' && chatInput.value.length > 0){
        say();
    }
}

onMount(()=> {
    setInterval(() => {
        isTyping = chatInput.value.length > 0;
    }, 250);
});
</script>

<head>
    <title>Chatbot</title>
</head>

<div id="bg"></div>
<a href="/#projects" id="back">Go back</a>
<body>
    <section class="chatHistory" bind:this={chatHistoryDiv}>
        {#each messages as message}
            <p class={message[1]}>
                {#if message[1]=='bot-sent'}
                    <img class="pfp" src="eliza_pfp.png" alt="Eliza"/>
                {/if}
                <span class="msg-content">{message[0]}</span>
                {#if message[1]=='user-sent'}
                    <span class="time"> {message[2]}</span>
                {/if}
            </p>
        {/each}
    </section>
    <section class="inputSection">
        <input type="text" placeholder="Type message" bind:this={chatInput} on:keydown={e=>checkInput(e)}/>
        <img src="/arrow.png" alt="Submit" class:typing={isTyping} on:keydown={e=>checkInput(e)} on:click={()=>{checkInput()}}>
    </section>
    <p class="disclaimer">*Warning: The chatbot is not smart and can't give answers to the simplest of questions</p>
</body>

<style>
*{
    caret-color: transparent;
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
}

#bg{
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: #212529;
}
#back{
    margin: 15px;
    position: absolute;
    top: 0;
    left: 0;
    text-decoration: none;
    color: #778da9;
    font-weight: bold;
}
.disclaimer{
    color: #778da9;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 15px;
    font-size: 12px;
}

.chatHistory{
    width: 1000px;
    position: relative;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 512px;
    overflow-y: scroll;
}
.chatHistory p{
    margin: 15px;
    height: fit-content;
    line-height: 60px;
    font-size: 24px;
    min-width: 60%;
    max-width: 100%;
    padding: 0 20px;
    border-radius: 4px;
    border: 3px solid #415a77;
    color: #778da9;
    word-wrap: break-word;
    transition: .25s scale;
}
.chatHistory p:hover{
    scale: 1.015;
}
.user-sent .msg-content{
    position: relative;
    left: 80px;
}
.time{
    font-size: 16px;
    height: 16px;
    position: relative;
    top: 32px;
    background: #212529;
    padding: 0 10px;
}
.user-sent{
    float: right;
    text-align: right;
}
.user-sent .time{
    right: -15px;
}
.bot-sent{
    float: left;
    text-align: left;
    border-color: #4f6a8b !important;
    color: #4f6a8b !important;
}

.pfp{
    height: 40px;
    aspect-ratio: 1;
    margin: 0;
    padding: 0;
    background: #4f6a8b;
    border-radius: 50%;
    vertical-align: middle;
    transform: translate(-5px, -2px);
}

.inputSection{
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
}

::placeholder{
    color: #778da9;
}
.inputSection input{
    background: #212529;
    width: 800px;
    height: 30px;
    font-size: 26px;
    padding: 20px;
    outline: transparent;
    border: 3px solid #415a77;
    border-radius: 4px;
    caret-color: auto;
    color: #778da9;
    font-weight: bold;
}
.inputSection img{
    height: 50px;
    margin: 10px;
    opacity: 0;
    aspect-ratio: 1;
    position: fixed;
    right: 0px;
    border-radius: 50%;
    transition: .325s opacity;
    
    background: #778da9;
}

.inputSection img.typing{
    opacity: .8;
}

::-webkit-scrollbar{
    width: 4px;
}

::-webkit-scrollbar-thumb{
    background: #778da9;
    border-radius: 2px;
}

::-webkit-scrollbar-track-piece{
    background: #415a77;
    border-radius: 2px;
}

</style>