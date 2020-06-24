// Pet Object
class Pet {
  constructor(name, age, boredom, hunger, sleepiness) {
    this.name = name;
    this.age = age || 0;
    this.boredom = boredom || 5;
    this.hunger = hunger || 5;
    this.sleepiness = sleepiness || 5;
  }

  // Increase Age


}

let tamagotchi = new Pet('Leopard Tech-O');



$('#play-button').click(clickedPlayButton);
$('#feed-button').click(clickedFeedButton);
$('#sleep-button').click(clickedSleepButton);



function clickedPlayButton() {
  tamagotchi[this.boredom] = tamagotchi[this.boredom] - 1;
  tamagotchi[this.sleepiness] = [this.sleepiness] + 2;
  document.getElementById('boredom-scale').innerText = `${this.boredom}`;
  console.log('it works..');
}

function clickedFeedButton() {
  tamagotchi[this.hunger] = tamagotchi[this.hunger] - 1;
  tamagotchi[this.sleepiness] = tamagotchi[this.sleepiness] + 1;
  document.getElementById('hunger-scale').innerText = `${this.hunger}`;
}

function clickedSleepButton() {
  tamagotchi[this.hunger] = tamagotchi[this.hunger] - 1;
  tamagotchi[this.sleepiness] = tamagotchi[this.sleepiness] + 1;
  document.getElementById('sleepiness-scale').innerText = `${this.sleepiness}`;
}



function petAttributesInHtml() {
  $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
  $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
  $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
}










