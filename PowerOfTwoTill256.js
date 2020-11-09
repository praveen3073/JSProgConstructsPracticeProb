const prompt = require('prompt-sync')();

var n = parseInt(prompt("Enter n for 2^n series: "));

var currentPower = 0;
while(currentPower <= 8 && currentPower <= n ) {
    console.log(Math.pow(2, currentPower));
    currentPower++;
}