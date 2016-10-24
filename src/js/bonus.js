import {it, expect} from "./test_lib";

// Constructors
// Only add code to *THIS* section!

function Human (options) {
  options = options || {};
  this.alertness = 0;
  this.hasCoffee = false;
  this.needsCoffee = true;
}

Human.prototype.buy = function(object){
  this.hasCoffee = true;
  this.Coffee = object;
}
Human.prototype.drink = function(){
  this.Coffee.full=false;
  this.alertness = this.alertness + 0.35;
  this.Coffee.height = this.Coffee.height - 0.35;
  if (this.Coffee.height <= 0){
    this.Coffee.empty = true;
  }
}

function Coffee(title){
  this.full = true;
  this.height = 1;
  this.empty = false;
  this.title = title;
}

// Do not ADD or MODIFY code below this line :D

it("should be sleepy at first", function () {
  let barry = new Human("Barry");
  expect(barry.alertness < 0.1).toBe(true);
});

it("needs coffee to wake up", function () {
  let marie = new Human("Marie");
  expect(marie.hasCoffee).toBe(false);
  expect(marie.needsCoffee).toBe(true);
});

it("can drink coffee to become more alive", function () {
  let ben = new Human("Ben");
  let omf = new Coffee("Orange Mocha Frappucino");
  expect(omf.full).toBe(true);

  ben.buy(omf);
  ben.drink();
  expect(ben.alertness > 0.3 && ben.alertness < 0.4).toBe(true);
  expect(omf.full).toBe(false);
  expect(omf.empty).toBe(false);
});

it("has coffee after buying it", function () {
  let daqunda = new Human("DaQunda");
  let cuban_blend = new Coffee("Fancy Cuban Blend");
  expect(daqunda.hasCoffee).toBe(false);
  daqunda.buy(cuban_blend);
  expect(daqunda.hasCoffee).toBe(true);
});

it("can drink all the coffee", function () {
  let kenny = new Human("Rodney");
  let tsmf = new Coffee("Triple Shot Mocha Frappucino");
  kenny.buy(tsmf);
  for(let i = 0; i < 3; i++) {
    kenny.drink();
  }
  expect(tsmf.empty).toBe(true);
  expect(kenny.alertness > 0.9).toBe(true);
});
