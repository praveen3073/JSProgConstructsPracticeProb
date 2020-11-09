const prompt = require('prompt-sync')();

var year = parseInt(prompt("Enter year: ", 2020));
if(year%10000 >= 1000 && year%4 == 0) {
    if(year%100 != 0) {
        console.log("Year is a leap year");
        process.exit(0);
    }
    else if(year%100 == 0 && year%400 == 0){
        console.log("Year is a leap year");
        process.exit(0);
    }
}

console.log("Year is not a leap year");