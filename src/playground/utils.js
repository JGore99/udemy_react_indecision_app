console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

//export { square, add, subtract as default }; //same as export const square = (x) => x * x;

//exports - defuault export - named exports