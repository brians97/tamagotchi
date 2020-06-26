// Pet Object
class Pet {
  constructor(name, age, boredom, hunger, sleepiness) {
    this.name = name;
    this.age = age || 0;
    this.boredom = boredom || 0;
    this.hunger = hunger || 0;
    this.sleepiness = sleepiness || 0;
  }
}
let tamagotchi = new Pet();

let addName;

function printName() {
  addName = $('input:text').val();
  $('#print-name').text(addName);
}



let timeGame;

function startGame() {
  timeGame = setInterval(function() {
    tamagotchi.age++;
    playAttr();
    feedAttr();
    sleepAttr();
    ageIncrease(tamagotchi.age);
    if (tamagotchi.boredom >= 10 || tamagotchi.hunger >= 10 || tamagotchi.sleepiness >= 10) {
      $('#death-message').text(`${addName} has died.`);
      clearInterval(timeGame);
    }
  }, 1500);
}




let ageField = 0;

function ageIncrease(time) {
  if (time % 5 === 0) {
    ageField += 1;
    $('#pet-age').text(ageField);
  }
}





function playAttr() {
  tamagotchi.boredom++;
  $('#boredom-scale').text(`${tamagotchi.boredom}`);

}

function feedAttr() {
  tamagotchi.hunger++;
  $('#hunger-scale').text(`${tamagotchi.hunger}`);
}

function sleepAttr() {
  tamagotchi.sleepiness++;
  $('#sleepiness-scale').text(`${tamagotchi.sleepiness}`);
}




function usePlayAttr() {
  tamagotchi.boredom--;
  $('#boredom-scale').text(`${tamagotchi.boredom}`);
}

function useFeedAttr() {
  tamagotchi.hunger--;
  $('#hunger-scale').text(`${tamagotchi.hunger}`);
}

function useSleepAttr() {
  tamagotchi.sleepiness--;
  $('#sleepiness-scale').text(`${tamagotchi.sleepiness}`);
  $('#sleep-message').text(` ${addName} is sleeping`);
}




$('#play-button').on('click', usePlayAttr);
$('#feed-button').on('click', useFeedAttr);
$('#sleep-button').on('click', useSleepAttr);

$('#name-button').on('click', printName);






startGame();