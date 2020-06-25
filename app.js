// Pet Object
class Pet {
  constructor(name, age, boredom, hunger, sleepiness) {
    this.name = name;
    this.age = age;
    this.boredom = boredom || 0;
    this.hunger = hunger || 0;
    this.sleepiness = sleepiness || 0;
  }

  // Increase Age
}
let tamagotchi = new Pet('Leopard Tech-O');


  if (this.boredom >= 10 || this.hunger >= 10 || this.sleepiness >= 10) {
    let petDead = prompt(`${this.name} has died...Refresh to play again.`);
  }

// // Event Listener
//   $('#play-button').click(playAttr);
//   $('#feed-button').click(feedAttr);
//   $('#sleep-button').click(sleepAttr);


//   $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
//   $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
//   $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
// }


let timeGame;

function startGame() {
  timeGame = setInterval(function() {
    playAttr();
    feedAttr();
    sleepAttr();
    }, 1000);
}

function playAttr() {
  tamagotchi.boredom++;
  $('#boredom-scale').text(`${tamagotchi.boredom}`);
  $('#play-button').click(playAttr);
  console.log(tamagotchi);

}

function feedAttr() {
  tamagotchi.hunger++;
  $('#hunger-scale').text(`${tamagotchi.hunger}`);
  $('#feed-button').click(feedAttr);
}

function sleepAttr() {
  tamagotchi.sleepiness++;
  $('#sleepiness-scale').text(`${tamagotchi.sleepiness}`);
  $('#sleep-button').click(sleepAttr);
}



startGame();







