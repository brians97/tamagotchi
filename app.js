// Pet Object
class Pet {
  constructor(name, age, boredom, hunger, sleepiness) {
    this.name = name;
    this.age = age;
    this.boredom = boredom;
    this.hunger = hunger;
    this.sleepiness = sleepiness;
  }

  // Increase Age


}
let tamagotchi = new Pet('Leopard Tech-O');

this.boredom = 10;
this.hunger = 10;
this.sleepiness = 10;

function Loop(time = 2) {

  let totalAttributes = this.boredom + this.hunger + this.sleepiness;

  if (this.boredom <= 0 || this.hunger <= 0 || this.sleepiness <= 0) {
    // let petDead = prompt(`${this.name} has died...Refresh to play again.`);
  }

  this.boredom = this.boredom - parseInt(time);
  this.hunger = this.hunger - parseInt(time);
  this.sleepiness = this.sleepiness - parseInt(time);

  $('#play-button').click(Play);
  $('#feed-button').click(Feed);
  $('#sleep-button').click(Sleep);


  $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
  $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
  $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
}

function startGame() {
  let timeGame = setInterval(Loop, 1000);
  this.boredom = 10;
  this.hunger = 10;
  this.sleepiness = 10;
  // updateGameAttributes();
}

// function updateGameAttributes() {
//   timeGame.text('boredom');
// }


function Play() {
  this.boredom = 10;
  $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
  // $('#play-button').click(Play);
}

function Feed() {
  this.hunger = 10;
  $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
  // $('#feed-button').click(Feed);
}

function Sleep() {
  this.sleepiness = 10;
  $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
  // $('#sleep-button').click(Sleep);
}


startGame();








