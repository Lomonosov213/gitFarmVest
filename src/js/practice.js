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
console.log("answer is " + separate(1651));
////////////////////////
function chetworker() {
  for (let i = 0; i <= 10; i++) {
    let chet = i % 2;
    return chet;
  }
}
console.log(chetworker());
