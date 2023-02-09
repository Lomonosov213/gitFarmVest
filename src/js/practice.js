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
