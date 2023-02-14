function doNothing() {
  return;
}

alert(doNothing() === undefined); // true
////////
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // простое
  }
}
////////////////////
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
/////////////////////
function имя(параметры, через, запятую) {
  /* тело, код функции */
}
//////////////////////
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}
///////////////////
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
/////////
function min(a, b) {
  return a < b ? a : b;
}
//////////
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}
////////////////
let degree = (x, n) => {
  x = prompt("x", "2");
  n = prompt("n", "2");
  if (n % 1 !== 0) {
    alert("only normal number mathafucker");
  }
  return x ** n;
};
console.log(degree(2, 4));
////////////////
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert(pow(x, n));
}
////////////
function showMessage(from, text) {
  if (text === undefined) {
    text = "текст не добавлен";
  }

  alert(from + ": " + text);
}
////////
function showMessage(text) {
  // ...
  if (text === undefined) {
    // если параметр отсутствует
    text = "пустое сообщение";
  }
  alert(text);
}
showMessage(); // пустое сообщение
///////
// добавим один метод (можно более одного)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false
////////////
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function