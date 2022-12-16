<script>
import { onMount } from "svelte";

let difficulty = 0;
class Card{
    constructor(id, flipped=false, completed=false) {
      let colors = {
        0: ['red', 'magenta', 'green', 'yellow', 'orange', 'slategray'],
        1: ['#db5858', '#b364ab', '#64b37c', '#b3b264', '#6472b3', '#756a6a'],
        2: ['#333333', '#525252', '#707070', '#8f8f8f', '#adadad', '#cccccc'],
        3: ['#a19494', '#a19f94', '#96a194', '#949fa1', '#9994a1', '#a1949d']
      };  
      this.id = id;
      this.background = colors[difficulty][id];
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
  if(totalFlips < highscores[difficulty] || highscores[difficulty]==0){
    highscores[difficulty] = totalFlips;
    localStorage.setItem('highscore', JSON.stringify(highscores));
  }
  wonGame = true;
}

function restartGame(){
  cards = genCards();
  shuffle(cards);
  wonGame = false;
  totalFlips = 0;
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function genCards(){
  return [
    new Card(0), new Card(0),
    new Card(1), new Card(1),
    new Card(2), new Card(2),
    new Card(3), new Card(3),
    new Card(4), new Card(4),
    new Card(5), new Card(5),
  ]
}

function setDifficulty(newDifficulty){
  difficulty = newDifficulty;
  cards = genCards();
  shuffle(cards);
  for (let key in diffBtns){
    diffBtns[key].classList.remove('activeDifficulty');
  }
  diffBtns[newDifficulty].classList.add('activeDifficulty');
  totalFlips = 0;
}

let cards = genCards();
shuffle(cards);
let other;
let flipcount = 0;
let totalFlips = 0;
let flipDelayMS = 1000;
let highscores = {
  0: 0,
  1: 0,
  2: 0,
  3: 0
}
let hsGoodMax = 20;
let hsMidMax = 34;
let diffTexts = {
  0: 'Bright Colors',
  1: 'Faded colors',
  2: 'Grayscale',
  3: 'Color blind'
}
let wonGame = false;
let diffBtn0, diffBtn1, diffBtn2, diffBtn3;
let diffBtns;

onMount(()=>{
  highscores = JSON.parse(localStorage.getItem('highscore'));
  if(highscores==null){
    highscores = {
      0:0, 1:0, 2:0, 3:0
    }
  }

  diffBtns = {
    0: diffBtn0,
    1: diffBtn1,
    2: diffBtn2,
    3: diffBtn3
  }
});

</script>
  
<head>
  <title>Memory</title>
</head>

<body>
  <div class="background"></div>
  <a href="/#projects">Go Back</a>
  <h2>Memory</h2>
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
    <button on:click={restartGame}>Restart</button>
  </div>

  <h1 class="statText">Difficulty: <br>
    <button class="difficultyButton activeDifficulty" 
      on:click={()=>{setDifficulty(0)}}
      bind:this={diffBtn0}>{diffTexts[0]}</button>
    <button class="difficultyButton" 
      on:click={()=>{setDifficulty(1)}}
      bind:this={diffBtn1}>{diffTexts[1]}</button>
    <button class="difficultyButton" 
      on:click={()=>{setDifficulty(2)}}
      bind:this={diffBtn2}>{diffTexts[2]}</button>
    <button class="difficultyButton" 
      on:click={()=>{setDifficulty(3)}}
      bind:this={diffBtn3}>{diffTexts[3]}</button>
  </h1>
  <h1 class="statText">Total Flips: {totalFlips}</h1>
  <h1 class="statText">Highscore: {highscores[difficulty]} 
    <span class="hsGrade"
     class:good={0<highscores[difficulty] && highscores[difficulty]<=hsGoodMax}
     class:mid={hsGoodMax<highscores[difficulty] && highscores[difficulty]<=hsMidMax}
     class:bad={hsMidMax<highscores[difficulty]}></span>
  </h1>
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
  color: #e0e0e0;
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

h2{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  color: #e0e0e0;
  font-size: 40px;
  width: fit-content;
  margin: 30px 0 0 0;
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
  border-radius: 8px;
  border: 1px solid #111;
}

.statText{
  position: relative;
  left: 50%;
  transform: translateX(-240px);
  width: fit-content;
  color: #e0e0e0;
  font-size: 30px;
}

.hidden{
  display: none;
}

.restart{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 220px;
  width: 360px;
  background: #c1c1c1;
  z-index: 1;
  border-radius: 8px;
}

.restart h1{
  text-align: center;
  margin-top: 34px;
}

.restart button{
  margin: 10px auto;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  height: 60px;
  width: 140px;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #333333;
  color: #e0e0e0;
  font-size: 22px;
}

.hsGrade{
  width: 64px;
  height: 24px;
  transform: translate(10px, 2px);
  display: inline-block;
  border-radius: 4px;
  transition: background .6s;
}

.hsGrade.good{
  background: limegreen;
}

.hsGrade.mid{
  background: yellow;
}

.hsGrade.bad{
  background: red;
}

.difficultyButton{
  height: 42px;
  width: 107px;
  font-size: 14px;
  background: #e0e0e0;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: 600;
  opacity: .6;
  transition: .4s all;
}
.difficultyButton:hover{
  opacity: 1;
}

.activeDifficulty{
  opacity: 1;
  background: #158e15;
  color: #e0e0e0;
}

.background{
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  background: #151528;
  width: 100%;
  height: 100%;
}

</style>