function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

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
