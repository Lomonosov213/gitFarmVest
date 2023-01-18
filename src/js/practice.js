function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return "Родители разрешили?";
  }
}
console.log(checkAge(19));
