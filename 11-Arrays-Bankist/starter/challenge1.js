'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  // 1.
  const dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2, 2);

  // 2.
  const dogs = dogsJuliaCopy.concat(dogsKate);

  // 3.
  dogs.forEach(function (dog, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy'
      }`
    );
  });
};

// test data
const data1 = new Map([
  ['dogsJulia', [3, 5, 2, 12, 7]],
  ['dogsKate', [4, 1, 15, 8, 3]],
]);

// 4.
checkDogs(...data1.values());
