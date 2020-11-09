const prompt = require('prompt-sync')();

var number = parseInt(prompt("Enter a number: "));

if(number/10 < 1 && number/10 >= 0)
    console.log("Units");
else if(number/10 > 0 && number/10 < 10)
    console.log("Tens");
else if(number/100 > 0 && number/100 < 10)
    console.log("Hundreds");
else if(number/1000 > 0 && number/1000 < 10)
    console.log("Thousands");
