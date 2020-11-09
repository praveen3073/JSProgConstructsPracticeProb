const prompt = require('prompt-sync')();

var n = parseInt(prompt("Enter value of n in Harmonic Series: "));

for(var i = 1; i <= n; i++){
    console.log(1/i);
}