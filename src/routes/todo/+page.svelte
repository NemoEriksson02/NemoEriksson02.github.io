<script>
    let items = [];  // List of all the ToDo-items text content
    let newItemText;
    let clickedItems = [];

    function addItem(){
        let itemText = newItemText.value;
        if (itemText != '' && !(items.includes(itemText)) && itemText.length < 30){
            items.push(itemText);
            clickedItems.push(false);
            items = items;
        }
    }

    function toggleClicked(index){
        clickedItems[index] = !clickedItems[index];
    }
    function removeClicked(index){
        items.splice(index, 1);
        clickedItems.splice(index, 1);
        items = items;
    }
</script>

<head>
    <title>ToDo List</title>
</head>

<body>
    <div class="background"></div>
    <div class="backContainer">
        <a class="goBack" href="/#todo">Go Back</a>
    </div>
<main>
    <header>
        <h1 style="color: #1E2022;">ToDo List</h1>
    </header>

    <hr/>

    <section id="addItemSection">
        <input autocomplete="off" bind:this={newItemText} id="newItemText">
        <button on:click={addItem}>Add Item</button>
    </section>

    <hr/>

    <section id="items">
        {#each items as text}
        <p class="item" on:keydown={console.log()} on:click={toggleClicked(items.indexOf(text))}>
            <span class="completed" class:hidden={!clickedItems[items.indexOf(text)]}>DONE</span>
            {text}
            <span class="remove" on:keydown={console.log()} on:click={()=>{removeClicked(items.indexOf(text))}}>REMOVE</span>
        </p>
        {/each}
    </section>

    <hr/>
</main>
<p id="credits">Made by Nemo Eriksson 2022</p>
</body>

<style>
    
*{
    font-family: arial, sans-serif;
    font-variant: small-caps;
    user-select: none;
}

.background{
    background: #52616B;
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
    opacity: .25;
    color: #1E2022;
    text-decoration: none;
    font-variant: normal;
    transition: all .25s;
    font-size: 18px;
}
.goBack:hover{
    opacity: 1;
}

body{
    background: #52616B;
}

main{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #C9D6DF;
    border: 4px solid #1E2022;
    border-radius: 15px;
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
    height: 4px;
    margin: 20px auto;
    background: #1E2022;
    border-radius: 5px;
}

#addItemSection{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
}

input{
    background: #F0F5F9;
    border: none;
    border-radius: 5px;
    outline: none;
    height: 30px;
    width: 45%;
    text-align: center;
}
button{
    background: #52616B;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #F0F5F9;
    font-weight: 700;
    width: 90px;
}

#items{
    overflow-y: scroll;
    max-height: 62.5%;
    width: 80%;
    height: 62.5%;
    margin: 0 auto;
}

::-webkit-scrollbar{
    visibility: hidden;
}

.item{
    list-style: none; 
    text-align: left;
    background: #F0F5F9; 
    border-radius: 5px; 
    width: 80%;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 1.2rem;
    overflow: hidden;
}

.item:hover .remove{
    display: inline;
    opacity: 1;
}

.remove{
    opacity: 0;
    transition: opacity 0.4s;
    font-size: 0.53rem;
    font-weight: 700;
    background: #52616B;
    padding: 6px 10px;
    color: white;
    border-radius: 5px;
    float: right;
    vertical-align: middle;
    margin-right: 5px;
    display: inline;
}

.completed{
    font-size: 0.53rem;
    font-weight: 700;
    background: #C9D6DF;
    padding: 6px 10px;
    color: #52616B;
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
    color: #1E2022;
    font-weight: 600;
}

</style>