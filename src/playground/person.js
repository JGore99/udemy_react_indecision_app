//console.log('utils.js is running');

//export const square = (x) => x * x;

//export const add = (a, b) => a + b;

//export { square, add }; same as above

//exports - defuault export - named exports

console.log('All the people');

const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };