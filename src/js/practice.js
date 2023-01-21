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
