function howManyHundreds(num) {
  var hundredsCount = num - (num % 100);
  return hundredsCount / 100;
}
