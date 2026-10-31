const { sqrt, evaluate, derivative } = require('mathjs');

console.log(sqrt(-4).toString());
console.log(evaluate('12 / (2.3 + 0.7)'));
console.log(derivative('x^2 + x', 'x').toString());