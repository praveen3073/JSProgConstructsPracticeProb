const prompt = require('prompt-sync')();

var number = parseInt(prompt("Enter a number: "));

for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if(number % i == 0) {
        var primeFlag = 0;
        for(var j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if( i % j == 0) {
                primeFlag = 1;
                break;
            }
        }
        if(primeFlag == 0) {
            console.log(i);
        }
    }
}