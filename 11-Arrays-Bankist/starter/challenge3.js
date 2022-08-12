'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  const avrAge =
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, i, arr) => acc + age) / arr.length;
};

// 4.
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
