function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user1 = makeUser();

alert(user.ref.name);
///////////////
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
///////////////
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B()); // true
/////////////
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Сколько нужно добавить?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
////////////
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// демонстрация результатов преобразований:
alert(user3); // hint: string -> {name: "John"}
alert(+user3); // hint: number -> 1000
alert(user3 + 500); // hint: default -> 1500
/////////////
let user2 = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  },
};

alert(user2); // toString -> {name: "John"}
alert(+user2); // valueOf -> 1000
alert(user2 + 500); // valueOf -> 1500
///////////////
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

alert("Время diffSubtract: " + bench(diffSubtract) + "мс");
alert("Время diffGetTime: " + bench(diffGetTime) + "мс");
