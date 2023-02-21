let json = '{ "age": 30 }'; // данные неполны

try {
  user = JSON.parse(json); // <-- забыл добавить "let" перед user

  // ...
} catch (err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (не JSON ошибка на самом деле)
}
///////////////////////
let son = '{ "age": 30 }'; // данные неполны
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Данные неполны: нет имени");
  }

  blabla(); // неожиданная ошибка

  alert(user.name);
} catch (e) {
  if (e.name == "SyntaxError") {
    alert("JSON Error: " + e.message);
  } else {
    throw e; // проброс (*)
  }
}
////////////////////////
function readData() {
  let json = '{ "age": 30 }';

  try {
    blabla(); // ошибка!
  } catch (e) {
    if (e.name != "SyntaxError") {
      throw e; // проброс исключения (не знаю как это обработать)
    }
  }
}

try {
  readData();
} catch (e) {
  alert("Внешний catch поймал: " + e); // поймал!
}
//////////////////
try {
  alert("try");
  if (confirm("Сгенерировать ошибку?")) BAD_CODE();
} catch (e) {
  alert("catch");
} finally {
  alert("finally");
}
/////////////
let num = +prompt("Введите положительное целое число?", 35);

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert(`Выполнение заняло ${diff}ms`);
