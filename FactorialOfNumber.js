const prompt = require('prompt-sync')();

var number = parseInt(prompt("Enter a number: "));

var factorial = 1;

for(var i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("Factorial: " + factorial);