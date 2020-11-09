const prompt = require('prompt-sync')();

var maxPower = parseInt(prompt("Enter max power of two: "));

for(var i = 0; i <= maxPower; i++){
    console.log(Math.pow(2, i));
}