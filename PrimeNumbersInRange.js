const { floor } = require("lodash");

const prompt = require("prompt-sync")();

var range_lower_limit = parseInt(prompt("Enter lower limit for range: "));
var range_upper_limit = parseInt(prompt("Enter upper limit for range: "));

for(var number = range_lower_limit; number <= range_upper_limit; number++){
    var primeFlag = 0;
    for(var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if( number % i == 0) {
            primeFlag = 1;
            break;
        }
    }
    if(primeFlag == 0) {
        console.log(number);
    }
}