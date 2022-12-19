<script>
import { stories } from "$lib/stories";
import { fly } from "svelte/transition";

let storyId = 1;
$: story = stories.find((story) => story.id == storyId);
</script>

<a href="/#projects" class="goBack">Go Back</a>
<div class="background"></div>
<main>
  <div class="grid">
    {#key storyId}
    <div class="choiceBox" in:fly|local={{ y: -800, x:100,  duration: 600 }} out:fly|local={{ y:120, x: -1000, duration: 850}}>
        {#if story}
          <p>{story.message}</p>
          <div class="row">
            {#each story.choices as choice}
              <button on:click={()=>{storyId=choice.id;}}>{choice.text}</button>
            {/each}
          </div>
        {/if}
      </div>
    {/key}
  </div>
</main>

<style>
.background{
  z-index: -1;
  background: #282b30;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
*{
  font-family: Arial, Helvetica, sans-serif;
  caret-color: transparent;
}
*:hover{
  cursor: default;
}
*::selection{
  background: transparent;
}

.choiceBox {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 400px;
  width: 500px;
  background: #424549;
  border-radius: 8px;
}

.choiceBox button{
  border: none;
  outline: none;
  height: 48px;
  min-width: 122px;
  width: fit-content;
  padding: 0 2px;
  font-size: 18px;
  background: #7289da;
  color: #e0e0e0;
  font-weight: 500;
  border-radius: 4px;
  position: relative;
  bottom: 0;
}

.choiceBox button:hover{
  cursor: pointer;
}

.choiceBox p{
  text-align: center;
  margin: 64px auto 0 auto;
  color: #e0e0e0;
  font-size: 22px;
  max-width: 85%;
  height: 200px;
}

.grid {
  margin: 10%;
  display: grid;
  align-items: center;
  place-items: center;
  justify-content: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100px;
  align-items:flex-end;
}

main {
  max-width: 100%;
  overflow-x: hidden;
}  

.goBack{
  position: absolute;
  margin: 15px;
  color: #e0e0e0;
  opacity: .6;
  text-decoration: none;
  transition: .2s all;
}
.goBack:hover{
  opacity: 1;
}

</style>