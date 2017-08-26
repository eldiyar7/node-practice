'use strict'

let number = [2, 4, 11];

// let max = Math.max(...number);               // ...number (without ...) returns NaN
let max = Math.max.apply(Math, number);   // number

console.log(max);
