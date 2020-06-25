// Pet Object
class Pet {
  constructor(name, age, boredom, hunger, sleepiness) {
    this.name = name;
    this.age = age;
    this.boredom = boredom || 0;
    this.hunger = hunger || 0;
    this.sleepiness = sleepiness || 0;
  }
}
let tamagotchi = new Pet();


// function printName() {
//   const addText = $('input:text').val();

//   const updateText = $('#print-name').text(`${tamagotchi.name}`);
  
//   const newName = `${addText}`;

//   (updateText).appendTo(newName);

//   console.log('clicked');
//   console.log(tamagotchi);

// }


  // if (tamagotchi.boredom >= 10 || tamagotchi.hunger >= 10 || tamagotchi.sleepiness >= 10) {
  //   prompt(`${tamagotchi.name} has died...Refresh to play again.`);
  // }


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
    if (tamagotchi.boredom >= 10 || tamagotchi.hunger >= 10 || tamagotchi.sleepiness >= 10) {
      $('#death-message').text(`${tamagotchi.name} has died.`);
      clearInterval(timeGame);
    }
  }, 1500);
}
    // usePlayAttr();

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
}


$('#play-button').on('click', usePlayAttr);
$('#feed-button').on('click', useFeedAttr);
$('#sleep-button').on('click', useSleepAttr);

// $('#name-button').on('click', printName);










startGame();







