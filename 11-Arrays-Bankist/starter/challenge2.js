'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // 1.
  let humanAge = ages.map(age => {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });

  // 2.
  humanAge = humanAge.filter(age => age >= 18);

  // 3.
  const avrAge = humanAge.reduce((acc, age) => acc + age) / humanAge.length;

  return avrAge;
};

// 4.
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
