"use strict";

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = arrayNumber.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumber);
