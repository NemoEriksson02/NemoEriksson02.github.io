<script>
import { onMount } from "svelte";

class Card{
    constructor(id, flipped=false, completed=false) {
      let backgroundColors = [
        'red', 'magenta', 'green', 'yellow', 'orange', 'slategray'
      ];  
      this.id = id;
      this.background = backgroundColors[id];
      this.flipped = flipped;
      this.completed = completed;
    }
}

function flip(card) {
  if (!card.flipped && flipcount < 2) {
    card.flipped=!card.flipped
    flipcount++;
    totalFlips++;
    
    if (flipcount == 1){
      other = card;
    }

    if (flipcount == 2) {
      if (card.id == other.id){
        card.completed = true;
        cards[cards.indexOf(other)].completed = true;
      }
      setTimeout(() => {
        cards.forEach((card) => {
          card.flipped = card.completed;
        });

        if (cards.every((card) => { return card.completed; })){
          winGame();
        }

        flipcount = 0;
        cards = cards;
      }, flipDelayMS);
    }
    cards = cards;
  }
}

function winGame(){
  if(totalFlips < highscore || highscore==0){
    highscore = totalFlips;
    localStorage.setItem('hs', highscore);
  }
  wonGame = true;
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

let cards = [
    new Card(0), new Card(0),
    new Card(1), new Card(1),
    new Card(2), new Card(2),
    new Card(3), new Card(3),
    new Card(4), new Card(4),
    new Card(5), new Card(5),
];
shuffle(cards);
let other;
let flipcount = 0;
let totalFlips = 0;
let flipDelayMS = 1000;
let highscore = 0;
let wonGame = false;

onMount(()=>{
  highscore = localStorage.getItem('hs');
  if(highscore==null){
    highscore = 0;
  }
});

</script>
  
<body>
  <a href="/">Go Back</a>
  <main>
    <div class="row">
      {#each cards as card, i}
        <div on:click={() => { flip(card); }}
          on:keypress={() => { flip(card); }}
          class:flipped={card.flipped} class="card" >
          <div class="front" style="background: {card.background};"></div>
          <img class="back" src="/front.png" alt=""/>
        </div>
      {/each}
    </div>
  </main>

  <div class="restart" class:hidden={!wonGame}>
    <h1>You won in {totalFlips} flips</h1>
    <button on:click={()=>{location.reload()}}>Restart</button>
  </div>

  <h1 class="statText">Total Flips: {totalFlips}</h1>
  <h1 class="statText">Highscore: {highscore}</h1>
</body>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
  caret-color: transparent;
}

*::selection{
  background: none;
}

a{
  color: black;
  opacity: .4;
  transition: .2s opacity;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  top: 10px;
}

a:hover{
  opacity: 1;
}

main {
  margin-top: 50px;
  display: flex;
  place-content: center;
  place-items: center;
}

.row {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(3, 100px);
}

.card {
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
}

.card.flipped {
    transform: rotateY(180deg);
}

.card .back {
    transform: rotateY(0deg);
}

.card .front {
    transform: rotateY(180deg);
}

.card img, .card div{
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: absolute;
  caret-color: transparent;
}

.statText{
  position: relative;
  left: 35%;
  width: fit-content;
}

.hidden{
  display: none;
}

.restart{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 600px;
  background: #e0e0e0;
  z-index: 1;
  border-radius: 8px;
}

.restart h1{
  text-align: center;
  margin-top: 40px;
}

.restart button{
  margin: 40px auto;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  height: 60px;
  width: 140px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: whitesmoke;
  font-size: 22px;
}

</style>