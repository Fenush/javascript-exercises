const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
	const arraySum =  array.reduce((a,b) => a+b, 0)
  return arraySum
};

const multiply = function(array) {
  return array.reduce((a,b) => a * b, 1)
  
};

const power = function(a,b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  let a = 1;
  while (n>0){
  a= a*n;
  n=n-1;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
