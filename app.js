// Pet Object
class Pet {
  constructor(name, age, boredom, hunger, sleepiness) {
    this.name = name;
    this.age = age;
    this.boredom = boredom || 10;
    this.hunger = hunger || 10;
    this.sleepiness = sleepiness || 10;
  }

  // Increase Age


}
let tamagotchi = new Pet('Leopard Tech-O');

function Loop(time = 2) {

  let totalAttributes = this.boredom + this.hunger + this.sleepiness;

  if (this.boredom <= 0 || this.hunger <= 0 || this.sleepiness <= 0) {
    // let petDead = prompt(`${this.name} has died...Refresh to play again.`);
  }

  this.boredom = this.boredom - parseInt(time);
  this.hunger = this.hunger - parseInt(time);
  this.sleepiness = this.sleepiness - parseInt(time);

// Event Listener
  $('#play-button').click(playAttr);
  $('#feed-button').click(feedAttr);
  $('#sleep-button').click(sleepAttr);


  $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
  $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
  $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
}

function startGame() {
  let timeGame = setInterval(Loop, 1000);
  this.boredom = 10;
  this.hunger = 10;
  this.sleepiness = 10;
  updateGameAttributes();
}

function updateGameAttributes() {
  $('#boredom-scale').text(timeGame);
}


function playAttr() {
  this.boredom = 10;
  $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
  // $('#play-button').click(playAttr);
}

function feedAttr() {
  this.hunger = 10;
  $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
  // $('#feed-button').click(feedAttr);
}

function sleepAttr() {
  this.sleepiness = 10;
  $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
  // $('#sleep-button').click(sleepAttr);
}


startGame();








