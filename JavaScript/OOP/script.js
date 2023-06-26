/* eslint-disable no-unused-vars */
'use strict';

/* class Animal {

  static type = "ANIMAL";//статичні властивості не доступні у об'єктів класу

  constructor (options) {
    this.name = options.name;
    this.humanAge = options.humanAge;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log("I am Animal");
  }

}

class Cat extends Animal {//клас кіт наслідує клас тварина

  static type = "CAT";

  constructor (options) {
    super(options);//викликаємо конструктор предка
    this.color = options.color;
  }

  voice() {//перевизначаємо метод предка
    super.voice();//викикаємо метод предка
    console.log("I am Cat");
  }

  get ageInfo() {//працює як поле а не як метод
    return this.humanAge * 7;
  }

  set humanAgeInfo(newAge) {
    this.humanAge = newAge;
  }

}



const cat = new Cat({
  name: "Garague",
  humanAge: 13,
  hasTail: true,
  color: "white",
}); */

class Component {
  constructor(selector) {
    this.$element = document.querySelector(selector);
  }

  hide() {
    this.$element.style.display = 'none';
  }

  show() {
    this.$element.style.display = 'block';
  }
}

class Box extends Component {
  constructor(params) {
    super(params.selector);

    this.$element.style.background = params.color;
    this.$element.style.width = this.$element.style.height = params.size + 'px';
  }
}

const container = new Box({
  selector: '#container',
  size: 200,
  color: 'black',
});
