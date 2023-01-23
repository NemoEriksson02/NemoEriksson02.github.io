<script>
import 'elizabot';
import ElizaBot from "elizabot";    
import {onMount} from 'svelte';

class Conversation{
    constructor(convos_=[]) {
        this.title = `Chat ${convos_.length+1}`;
        this.messages = [[bot.getInitial(), 'bot-sent', '']];
    }
}

let bot = new ElizaBot();
let time = new Date();
let chatInput;
let chatHistoryDiv;
let convos = [new Conversation()];
let activeConvoIndex = 0;
let messages = convos[activeConvoIndex].messages;
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
        saveChats();
        setTimeout(() => {
            chatHistoryDiv.scroll(0, 150*messages.length);
        }, 10);
    }, answer.length*12);
    saveChats();
}

function resetConveration(index){
    convos[index].messages = [[bot.getInitial(), 'bot-sent', '']];
    messages = selectChat();
    saveChats();
}

function convoClick(index){
    activeConvoIndex = index;
    messages = selectChat();
}

function selectChat(){
    return convos[activeConvoIndex].messages;
}

function createNewChat(){
    convos.push(new Conversation(convos));
    convos = convos;
    messages = convos[convos.length-1].messages;
    saveChats();
}

function removeChat(target){
    let index  = convos.indexOf(target)
    convos.splice(index, 1);
    
    if (convos.length == 0){
        createNewChat();
    }

    else if(index == activeConvoIndex){
        if(activeConvoIndex-1 >= 0)
            activeConvoIndex -= 1;
        convoClick(activeConvoIndex);
    }
    
    convos = convos;
    saveChats()
}

function checkInput(keyEvent=undefined){
    if (keyEvent == undefined && chatInput.value.length > 0){
        say();
    }
    else if(keyEvent['key']=='Enter' && chatInput.value.length > 0){
        say();
    }
}

function saveChats(){
    localStorage.setItem('chatbotconvos', JSON.stringify(convos));
}

onMount(()=> {
    let localConvos = JSON.parse(localStorage.getItem('chatbotconvos'));
    if(localConvos != undefined && localConvos != null){
        convos = localConvos;
        activeConvoIndex = 0;
        messages = selectChat();
    }

    setInterval(() => {
        if (chatInput!=null)
            isTyping = chatInput.value.length > 0;
    }, 250);
});
</script>

<head>
    <title>Chatbot</title>
</head>

<div id="bg"></div>
<body>
    <section class="chatHistory" bind:this={chatHistoryDiv}>
        {#each messages as message}
            <p class={message[1]}>
                {#if message[1]=='bot-sent'}
                    <img class="pfp" src="eliza_pfp.png" alt="Eliza"/>
                {/if}
                {#if message[1]=='user-sent'}
                    <span class="time"> {message[2]}</span>
                {/if}
                <span class="msg-content">{message[0]}</span>
            </p>
        {/each}
    </section>
    <section class="optionsSection">
        <button class="return"><a href="/#projects"><span>Go back</span></a></button>
        <button class="new-chat" on:click={()=>{createNewChat()}}><span>New chat</span></button>
        <div class="conversations">
            {#each convos as convo,index}
                <p class="conversation" on:click={()=>{convoClick(index)}} on:keydown={()=>{convoClick(index)}}>
                    {convo.title}
                    <span class="convoOptions">
                        <span class="convoOption"
                            on:keydown={()=>{resetConveration(index)}} on:click={()=>{resetConveration(index)}}>
                            &#11119;
                        </span>
                        <span class="convoOption" 
                            on:keydown={()=>{removeChat(convo)}} on:click={()=>{removeChat(convo)}}>
                            &#10539;
                        </span> 
                    </span>
                </p>
            {/each}
        </div>
    </section>
    <section class="inputSection">
        <input type="text" placeholder="Type message" bind:this={chatInput} on:keydown={e=>checkInput(e)}/>
        <img src="/arrow.png" alt="Submit" class:typing={isTyping} on:keydown={e=>checkInput(e)} on:click={()=>{checkInput()}}>
    </section>
    <p class="disclaimer">*Warning: The chatbot is not smart and can't give answers to the simplest of questions</p>
</body>

<style>

:root{
    --color-dark: #212529;
    --color-mid-dark: #2c3135;
    --color-mid: #3d4349;
    --color-mid-light: #6c757d;
    --color-light: #adb5bd;
    --color-lighter: #e1e4e7;
}

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
    background: var(--color-dark);
    z-index: -10;
}

.disclaimer{
    color: var(--color-light);
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 15px;
    font-size: 12px;
}

.chatHistory{
    width: 80%;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
    overflow-y: scroll;
    background: var(--color-mid-dark);
}

.chatHistory p{
    width: 100%;
    height: fit-content;
    line-height: 60px;
    font-size: 20px;
    color: var(--color-lighter);
    position: relative;
    word-break: break-all;
    margin: 0;
}

.time{
    font-size: 12px;
    line-height: initial;
    padding: 0 4px;
    position: absolute;
    bottom: 4px;
    right: 0px;
}

.user-sent .msg-content{
    position: relative;
    left: 65px;
    width: calc(100% - 85px);
    display: block;
}

.bot-sent{
    background: var(--color-mid)
}

.pfp{
    height: 40px;
    aspect-ratio: 1;
    margin-left: 15px;
    margin-right: 5px;
    padding: 0;
    background: var(--color-mid);
    border-radius: 50%;
    vertical-align: middle;
    transform: translate(-5px, -2px);
}

.inputSection{
    position: fixed;
    bottom: 0;
    background: var(--color-dark);
    width: 100%;
    height: 160px;
}

::placeholder{
    color: var(--color-light);
    font-size: 18px;
}
.inputSection input{
    background: var(--color-mid-dark);
    width: 800px;
    height: 16px;
    font-size: 20px;
    padding: 20px;
    outline: transparent;
    border-radius: 4px;
    border: none;
    left: 40%;
    position: relative;
    transform: translateX(-50%);
    caret-color: auto;
    color: var(--color-light);
    font-weight: bold;
}
.inputSection img{
    height: 36px;
    opacity: 0;
    aspect-ratio: 1;
    position: fixed;
    right: 15px;
    top: 12px;
    border-radius: 50%;
    transition: .325s opacity;
    background: var(--color-light);
}

.inputSection img.typing{
    opacity: .8;
}

.optionsSection{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 20%;
    z-index: 1;
}

.optionsSection button{
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    background: var(--color-dark);
    color: var(--color-light);
    outline: none;
    border: none;
    margin: 5px 0;
    transition: .1s font-size;
}

.conversations{
    max-height: 420px;
    overflow-y: scroll;
    position: relative;
    top: -4px;
}

.conversation{
    font-size: 22px;
    font-weight: bold;
    padding-left: 15px;
    padding-bottom: 7px;
    margin: 0;
    width: calc(100% - calc(15px + 4px * 2));
    color: var(--color-dark);
    background: var(--color-light);
    height: 30px;
    width: 70%;
    left: 50%;
    top: -8px;
    transform: translateX(-50%);
    position: relative;
    line-height: 40px;
    transition: .05s opacity;
}

.conversation:hover{
    cursor: pointer;
}

.conversation:last-of-type{
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.conversation:first-of-type{
    padding-top: 4px;
}

.conversation:not(:last-of-type){
    border-bottom: 1px solid black;
}

.convoOptions{
    position: absolute;
    right: 10px;
}

.convoOption{
    display: inline-block;
    width: 24px;
    line-height: 24px;
    text-align: center;
    margin: 0;
}

.optionsSection button:hover{
    cursor: pointer;
}

button.new-chat{
    background: var(--color-mid);
    filter: contrast(90%) saturate(300%);
    color: var(--color-lighter);
    text-align: left;
    border-radius: 1px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 80%;
    height: 40px;
    left: 50%;
    margin-top: 20px;
    position: relative;
    transform: translateX(-50%);
    z-index: 1;
}
button.new-chat span{
    margin: 0;
    left: 60px;
    position: relative;
}

button.return{
    position: static;
    top: 0;
    background: var(--color-mid);
    height: 60px;
    width: 100%;
    filter: contrast(90%) saturate(300%);
    text-align: left;
    margin: 0;
}
button.return a{
    color: var(--color-lighter);
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: block;
    line-height: 55px;
}

button.return a span{
    position: relative;
    left: 60px;
}

.optionsSection button:hover{
    font-size: 21px;
}

::-webkit-scrollbar{
    width: 4px;
    transform: translateX(-100px);
}

::-webkit-scrollbar-thumb{
    background: var(--color-light);
    border-radius: 2px;
}

::-webkit-scrollbar-track-piece{
    background: var(--color-mid);
    border-radius: 2px;
}

</style>