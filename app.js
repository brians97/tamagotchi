

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

boredom = 10
hunger = 10
sleepiness = 10

function Loop(time = 2) {
  let totalAttributes = boredom + hunger + sleepiness;

  if (boredom <= 0 || hunger <= 0 || sleepiness <= 0) {
  }

  boredom = boredom - parseInt(time);
  hunger = hunger - parseInt(time);
  sleepiness = sleepiness - parseInt(time);

  $('#play-button').click(Play);
  $('#feed-button').click(Feed);
  $('#sleep-button').click(Sleep);


  $('#boredom-scale').text(tamagotchi[`${boredom}`]);
  $('#hunger-scale').text(tamagotchi[`${hunger}`]);
  $('#sleepiness-scale').text(tamagotchi[`${sleepiness}`]);
}

function StartGame() {
  let timeGame = setInterval(Loop, 1000);
}

function Play() {
  boredom = 10;
  $('#boredom-scale').text(tamagotchi[`${boredom}`]);
  // $('#play-button').click(Play);
}

function Feed() {
  hunger = 10;
  $('#hunger-scale').text(tamagotchi[`${hunger}`]);
  // $('#feed-button').click(Feed);
}

function Sleep() {
  sleepiness = 10;
  $('#sleepiness-scale').text(tamagotchi[`${sleepiness}`]);
  // $('#sleep-button').click(Sleep);
}


StartGame();








