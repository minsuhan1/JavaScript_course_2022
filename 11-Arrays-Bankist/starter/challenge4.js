'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog['recommendedFood'] = dog.weight ** 0.75 * 28;
});

// 2.
const sarahDog = dogs.find(value => value.owners.includes('Sarah'));

if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
  console.log(`Sarah's dog eat too little`);
} else if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
  console.log(`Sarah's dog eat too much`);
} else {
  console.log(`Sarah's dog is eating well`);
}

// 3.
const ownersEatTooMuch = dogs.reduce((arr, dog) => {
  if (dog.curFood > dog.recommendedFood * 1.1) {
    arr.push(...dog.owners);
  }
  return arr;
}, []);
const ownersEatTooLittle = dogs.reduce((arr, dog) => {
  if (dog.curFood < dog.recommendedFood * 0.9) {
    arr.push(...dog.owners);
  }
  return arr;
}, []);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(ownersEatTooMuch.join(' and ') + `'s dogs eat too much!`);
console.log(ownersEatTooLittle.join(' and ') + `'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7.
const okayDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okayDogs);

// 8.
console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
