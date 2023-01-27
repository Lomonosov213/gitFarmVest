function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}

function convertToRoman(num) {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

convertToRoman(36);
///////////////////
let a;
let b;

function minValue(a, b) {
  if (a < b) {
    return a;
  } else if (a === b) {
    return "они равны";
  }
  return b;
}

console.log(minValue(2, 5));
console.log(minValue(3, -1));
console.log(minValue(1, 1));
//////////////////////
function pow(x, n) {
  if (n >= 1) {
    let result = x ** n;
    return result;
  }
  return "Введите натуральное число!";
}

console.log(pow(2, 0));
//////////
let pow2 = (x, n) => {
  if (n >= 1) {
    let result = x ** n;
    return result;
  }
  return "Введите натуральное число!";
};
console.log("Strelka = " + pow2(7, 1));
///////////////////

var F = "1565";
function separate(a) {
  let numlengthcontrol = toString(a).length;
  if (numlengthcontrol > 1) {
    let result = Array.from(a);
    for (let i = 1; numlengthcontrol > 1; i++) {
      result[i++];
    }
    return result;
  }
}

console.log("LENTH F = " + F.length);
//console.log("answer is " + separate(1651));
////////////////////////
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("answer is " + i);
  }
}
///////////
for (let i = 0; i < 3; i++) {
  console.log(`number for ${i}!`);
}
let i = 0;
while (i < 3) {
  console.log(`number while ${i}!`);
  i++;
}
///////////////
let m = 10;
nextPrime: for (let i = 2; i <= m; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i);
}

let g = 10;
/*two summ*/
let arr = [];
function twoSumm(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] == target - arr[i]) {
        return new arrNew[(i, j)]();
      }
    }
  }
}

twoSumm([3, 2, 4], 6);
///////////////
console.log(
  // Входной массив
  [1, 4, 3, 0, 4, 5, 4]
    // Оставляем только чётные числа
    .filter((element) => !(element % 2))
    // Считаем квадратный корень и записываем в аккумулятор
    .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0)
); //
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // Для всех i...

  for (let j = 2; j < i; j++) {
    // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i); // простое число
}
