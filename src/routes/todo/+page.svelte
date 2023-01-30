<script>
    import { onMount } from "svelte";

    let items = [];  // List of all the ToDo-items text content
    let newItemText;
    let clickedItems = [];

    function saveTasks(){
        localStorage.setItem('items', JSON.stringify(items));
        localStorage.setItem('completed', JSON.stringify(clickedItems));
    }

    function addItem(){
        let itemText = newItemText.value;
        if (itemText != '' && !(items.includes(itemText)) && itemText.length < 30){
            items.push(itemText);
            clickedItems.push(false);
            items = items;
            newItemText.value = '';
            saveTasks();
        }
    }

    function toggleClicked(index){
        clickedItems[index] = !clickedItems[index];
        saveTasks();
    }

    function removeClicked(index){
        items.splice(index, 1);
        clickedItems.splice(index, 1);
        items = items;
        saveTasks();
    }

    onMount(()=>{
        let temp_items = JSON.parse(localStorage.getItem('items'));
        let temp_clickedItems = JSON.parse(localStorage.getItem('completed'))
        if (temp_items!=null && temp_clickedItems!=null){
            items = temp_items;
            clickedItems = temp_clickedItems;
        }
    });
</script>

<head>
    <title>ToDo List</title>
</head>

<body>
    <div class="background"></div>
    <div class="backContainer">
        <a class="goBack" href="/#projects">Go Back</a>
    </div>
<main>
    <header>
        <h1 class="title">ToDo List</h1>
    </header>

    <hr/>

    <section id="addItemSection">
        <input autocomplete="off" 
            on:keypress={ (event) => { if(event['key']=='Enter'){ addItem() }}} 
            bind:this={newItemText} id="newItemText">
        <button on:click={addItem} title="Add new item to list">Add Item</button>
    </section>

    <hr/>

    <section id="items">
        <img class="background-img" src="todo-bg.jpg" alt="" class:faded={items.length>=3}>
        {#each items as text}
        <p class="item" on:keydown={console.log()} on:click={toggleClicked(items.indexOf(text))}>
            <span class="completed" class:hidden={!clickedItems[items.indexOf(text)]}>DONE</span>
            {text}
        </p>
        <span class="remove" on:keydown={console.log} on:click={()=>{removeClicked(items.indexOf(text))}}>REMOVE</span>
        {/each}
    </section>

    <hr/>
</main>
<p id="credits">Made by Nemo Eriksson 2022 <span>image: "Wumpus" by discord</span></p>
</body>

<style>
*{
    font-family: Arial;
    font-variant: small-caps;
    user-select: none;
}

:root{
    --color-dark: #2a2e31;
    --color-mid-dark: #2c3135;
    --color-mid: #35383d;
    --color-mid-light: #42454a;
    --color-light: #adb5bd;
    --color-lighter: #e1e4e7;
}

.background{
    background: var(--color-mid-dark);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.backContainer{
    position: absolute;
    left: 15px;
    top: 15px;
}
.goBack{
    color: var(--color-light);
    text-decoration: none;
    font-variant: normal;
    transition: all .25s;
    font-size: 16px;
}

.title{
    color: var(--color-light)
}

main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-mid);
    border-radius: 4px;
    width: 40%;
    height: 90%;
    min-width: 400px;
}

h1{
    text-align: center;
}

hr{
    width: 80%;
    border: none;
    height: 2px;
    margin: 22px auto;
    background: var(--color-light);
    border-radius: 5px;
}

#addItemSection{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
}

input{
    background: var(--color-lighter);
    border: none;
    border-radius: 5px;
    outline: none;
    height: 30px;
    width: 45%;
    text-align: center;
}

button{
    background: var(--color-dark);
    border: none;
    outline: none;
    border-radius: 5px;
    color: var(--color-lighter);
    font-weight: 700;
    width: 90px;
}

button:hover{
    cursor: pointer;
}

#items{
    overflow-y: scroll;
    max-height: 62.5%;
    width: 80%;
    height: 62.5%;
    margin: 0 auto;
}

.background-img{
    width: 50%;
    opacity: 1;
    position: fixed;
    z-index: -1;
    left: 40%;
    top: 300px;
    transform: translateX(-50%);
    transition: 1s opacity;
}

.background-img.faded{
    opacity: .5;
}

::-webkit-scrollbar{
    background: var(--color-mid-light);
    width: 4px;
    border-radius: 2px;
}

::-webkit-scrollbar-thumb{
    background: var(--color-light);
    border-radius: 3px;
}

.item{
    list-style: none; 
    text-align: left;
    background: var(--color-light); 
    color: var(--color-dark);
    border-radius: 5px; 
    width: 80%;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 1.2rem;
    overflow: hidden;
}

.item:hover + .remove, .remove:hover{
    display: inline;
    opacity: 1;
}

.remove{
    opacity: 0; 
    transition: opacity 0.4s; 
    font-size: 0.53rem; 
    font-weight: 700; 
    background: var(--color-mid); 
    padding: 6px 10px; 
    color: var(--color-lighter); 
    border-radius: 5px;  
    display: inline; 
    left: calc(80% - 25px - calc(2% - 2vw));
    top: -32px; 
    position: relative; 
    z-index: 3; 
}

.completed{
    font-size: 0.53rem;
    font-weight: 700;
    background: var(--color-mid-light);
    padding: 6px 10px;
    color: var(--color-lighter);
    border-radius: 5px;
    float: left;
    vertical-align: middle;
    margin-right: 10px;
    display: inline;
    visibility: visible;
}

.hidden{
    display: none;
    visibility: hidden;
}

#credits{
    position: absolute;
    left: 10px;
    bottom: 0px;
    font-size: 0.65rem;
    color: var(--color-light);
    font-weight: 600;
}

#credits span{
    font-size: 9px;
    font-weight: normal;
}

</style>