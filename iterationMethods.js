//Task 1
const numbers = [10, 13, 20, 25, 38, 35, 40];

const greaterThanOrEqual = numbers.filter((number) => number >= 25);
console.log(greaterThanOrEqual);

const divisibleByNumber = numbers.filter((number) => number % 5 === 0);
console.log(divisibleByNumber);

//Task 2
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);

const multipliedNumbers = numbers.map((number) => number * 2);
console.log(multipliedNumbers);

//Task 3
const numbersGreaterOrEqual = numbers.filter((number) => number >= 20);
const numbersFiltered = numbersGreaterOrEqual.map((number) => number * number);
console.log(numbersFiltered);

const divisibleByFive = numbers.filter((number) => number % 5 === 0);
const numbersFilteredDivisible = divisibleByFive.map((number) => number * 3);
console.log(numbersFilteredDivisible);

//Challenge Functions
function logger(array) {
  array.forEach((element) => console.log(element));
}

function toCelsius(temperatures) {
  const celsius = temperatures.map(
    (temperature) => (temperature - 32) * (5 / 9)
  );
  return celsius;
}

function hottestDays(temperatures, threshold) {
  const temp = temperatures.filter((temperature) => temperature > threshold);
  return temp;
}

logger([1, 2, 3, 4, 5]);
console.log(toCelsius([90, 72, 68, 50, 32]));
console.log(hottestDays([32, 50, 68, 70, 90], 67));

function logHottestDays(temperatures, threshold) {
  let hot = hottestDays(temperatures, threshold);
  logger(toCelsius(hot));
}

logHottestDays([80, 90, 70, 60, 50], 69);
