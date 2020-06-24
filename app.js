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



function petAttributesInHtml() {
  $('#boredom-scale').text(tamagotchi[`${this.boredom}`]);
  $('#hunger-scale').text(tamagotchi[`${this.hunger}`]);
  $('#sleepiness-scale').text(tamagotchi[`${this.sleepiness}`]);
}










