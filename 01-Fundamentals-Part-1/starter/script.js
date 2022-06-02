/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log(23);
let firstName = "Matilda";
console.log(firstName);

let PI = 3.1415;


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // null is a primitive value, not an object. (js bug)


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";
*/

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
